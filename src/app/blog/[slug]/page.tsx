import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, CalendarDays, ChevronRight, Clock3, MessageCircle, UserRound } from 'lucide-react';
import PortableTextRenderer, { getYouTubeId } from '@/components/blog/PortableTextRenderer';
import SanityImage from '@/components/blog/SanityImage';
import BlogPostCard from '@/components/blog/BlogPostCard';
import {
    formatDate,
    getBlogPost,
    getReadTime,
    getRelatedBlogs,
    type PortableTextBlock,
} from '@/lib/blogs';
import { OG_IMAGE, SITE_URL } from '@/constants/site';
import {
    graph,
    jsonLdProps,
    breadcrumb,
    webPage,
    blogPosting,
    videoObject,
    faqPage,
} from '@/lib/schema';

export const dynamic = 'force-dynamic';

type BlogPostPageProps = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = await getBlogPost(slug);

    if (!post) return { title: 'Article Not Found' };

    const title = post.seo?.metaTitle || post.title;
    const description = post.seo?.metaDescription || post.excerpt || '';
    const image = post.seo?.ogImage?.asset?.url || post.coverImage?.asset?.url;
    const url = `/blog/${post.slug}`;

    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: {
            title,
            description,
            url,
            type: 'article',
            publishedTime: post.publishedAt,
            modifiedTime: post.updatedAt || post.publishedAt,
            images: image ? [{ url: image, width: 1200, height: 630, alt: post.title }] : [OG_IMAGE],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [image || OG_IMAGE.url],
        },
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = await getBlogPost(slug);

    if (!post) notFound();

    const relatedPosts = await getRelatedBlogs(post);
    const primaryCategory = post.categories?.[0];
    const path = `/blog/${post.slug}`;

    // YouTube embeds in the body carry their own uploadDate/duration in Sanity
    // — without VideoObject markup Google has no reliable way to index them as
    // video content rather than a generic embedded element.
    const videoBlocks = (post.body || [])
        .filter((block) => block._type === 'youtube')
        .map((block) => {
            const ytId = getYouTubeId(block.url);
            if (!ytId) return null;
            return videoObject({
                ytId,
                name: block.caption || post.title,
                description: post.seo?.metaDescription || post.excerpt || post.title,
                uploadDate: block.uploadDate || post.publishedAt || new Date().toISOString(),
                duration: block.duration,
            });
        });

    // FAQPage schema, extracted from the post's own visible content rather
    // than invented — Google requires FAQPage markup to mirror on-page
    // content, so posts without a "Frequently Asked Questions" section
    // simply get no FAQPage node.
    const faqPairs = extractFaqPairs(post.body || []);

    const doc = graph([
        webPage({
            path,
            name: post.title,
            description: post.seo?.metaDescription || post.excerpt || '',
            medical: true,
        }),
        breadcrumb([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
            { name: post.title, path },
        ]),
        blogPosting({
            path,
            headline: post.title,
            description: post.seo?.metaDescription || post.excerpt || '',
            image: post.seo?.ogImage?.asset?.url || post.coverImage?.asset?.url || OG_IMAGE.url,
            datePublished: post.publishedAt || new Date().toISOString(),
            dateModified: post.updatedAt,
            author: post.author?.name || 'Dr. Rashmi Agrawal',
            section: primaryCategory?.title || 'Fertility',
        }),
        faqPage(
            faqPairs.map(({ question, answer }) => ({ q: question, a: answer })),
            path
        ),
        ...videoBlocks,
    ]);

    return (
        <>
            <script {...jsonLdProps(doc)} />

            {/* HEADER */}
            <section className="cond-hero edge" data-bg="#f8fafc" data-theme="light">
                <div className="cond-hero-bg"></div>
                <div className="container-x relative">
                    {/* Breadcrumb and header share the article's own 3xl column
                        and centring, so the title lines up with the cover image
                        and body below instead of sitting flush against the
                        1400px container's left edge. */}
                    <div className="mx-auto max-w-3xl">
                        <div className="cond-breadcrumb">
                            <Link href="/">Home</Link>
                            <ChevronRight style={{ width: '14px', height: '14px' }} />
                            <Link href="/blog">Blog</Link>
                            {primaryCategory && (
                                <>
                                    <ChevronRight style={{ width: '14px', height: '14px' }} />
                                    <Link href={`/blog?category=${primaryCategory.slug}`}>{primaryCategory.title}</Link>
                                </>
                            )}
                        </div>

                        {primaryCategory && (
                            <div className="chip mb-6 w-fit">
                                <span className="chip-dot"></span>
                                {primaryCategory.title}
                            </div>
                        )}
                        <h1 className="display-sm text-slate-900 mb-6 font-black!">{post.title}</h1>
                        {post.excerpt && <p className="body-lg text-slate-600 mb-8">{post.excerpt}</p>}

                        <div className="flex flex-wrap items-center gap-5 border-t border-slate-200 pt-6 text-sm font-bold text-slate-500">
                            <span className="inline-flex items-center gap-2">
                                <UserRound className="h-4 w-4 text-pink-600" />
                                {post.author?.name || 'Dr. Rashmi Agrawal'}
                            </span>
                            <span className="inline-flex items-center gap-2">
                                <CalendarDays className="h-4 w-4 text-pink-600" />
                                {formatDate(post.publishedAt)}
                            </span>
                            <span className="inline-flex items-center gap-2">
                                <Clock3 className="h-4 w-4 text-pink-600" />
                                {getReadTime(post)}
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* COVER IMAGE — no fixed ratio; capped height, never cropped. */}
            {post.coverImage?.asset?.url && (
                <div className="container-x mt-10">
                    <div className="flex justify-center">
                        <SanityImage
                            image={post.coverImage}
                            alt={post.title}
                            width={post.coverImage.asset?.metadata?.dimensions?.width || 1600}
                            height={post.coverImage.asset?.metadata?.dimensions?.height || 900}
                            priority
                            sizes="(min-width: 1024px) 1100px, 100vw"
                            className="h-auto max-h-[520px] w-auto max-w-full"
                        />
                    </div>
                </div>
            )}

            {/* BODY */}
            <section className="py-12 md:py-16 edge">
                <div className="container-x">
                    <div className="mx-auto max-w-3xl">
                        <PortableTextRenderer value={post.body} />

                        {post.tags?.length ? (
                            <div className="mt-12 flex flex-wrap gap-2 border-t border-slate-200 pt-8">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag._id}
                                        className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600"
                                    >
                                        {tag.title}
                                    </span>
                                ))}
                            </div>
                        ) : null}

                        {/* Author / medical-review note — this is YMYL content. */}
                        <div className="mt-10 rounded-[2rem] border border-slate-100 bg-slate-50/60 p-8">
                            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-pink-600 mb-3">
                                Medically reviewed
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                Reviewed by <strong className="text-slate-900">Dr. Rashmi Agrawal</strong> — MBBS (Gold
                                Medalist), MS OBGYN, FNB Reproductive Medicine. This article is general information, not
                                a substitute for a consultation about your own reports.
                            </p>
                            <Link href="/contact" className="btn btn-primary mt-6 inline-flex">
                                Book Free Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED */}
            {relatedPosts.length > 0 && (
                <section className="py-12 md:py-16 bg-slate-50/60 edge">
                    <div className="container-x">
                        <div className="mb-8 flex items-end justify-between gap-4">
                            <h2 className="heading text-slate-900">Related reading</h2>
                            <Link
                                href="/blog"
                                className="inline-flex items-center gap-2 text-sm font-bold text-pink-600 hover:gap-3 transition-all"
                            >
                                All articles <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                            {relatedPosts.map((related) => (
                                <BlogPostCard key={related._id} post={related} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="section-tight edge">
                <div className="container-x text-center">
                    <h2 className="heading text-slate-900 mb-4">Ready to talk about your own case?</h2>
                    <p className="body-lg text-slate-600 max-w-xl mx-auto mb-8">
                        The first consultation is free, and you will leave knowing what your reports actually mean.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/contact" className="btn btn-primary btn-lg">
                            Book Free Consultation
                        </Link>
                        <a
                            href={`https://wa.me/919811775369`}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-ghost btn-lg"
                        >
                            <MessageCircle className="w-4 h-4 text-green-600" /> WhatsApp Your Reports
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

function blockText(block: PortableTextBlock): string {
    return (block.children || [])
        .map((child) => child.text || '')
        .join('')
        .trim();
}

const FAQ_HEADING_RE = /frequently asked questions|^faqs?\b/i;

function isFaqSectionHeading(block: PortableTextBlock): boolean {
    if (block.style !== 'h2' && block.style !== 'h3') return false;
    return FAQ_HEADING_RE.test(blockText(block));
}

// Two house styles are used for an individual FAQ entry:
//   A — the question is a fully-bold "normal" paragraph ending in "?",
//       immediately followed by a plain answer paragraph.
//   B — the question is its own H3 heading ending in "?", immediately
//       followed by a plain answer paragraph.
// Both are only recognised once already inside an FAQ section (see
// extractFaqPairs) — outside that section an H3 or bold sentence ending in
// "?" is just article prose, not an FAQ item.
function isQuestionBlock(block: PortableTextBlock): boolean {
    const text = blockText(block);
    if (!text.endsWith('?')) return false;

    if (block.style === 'h3') return true; // pattern B

    if (block._type === 'block' && block.style === 'normal' && !block.listItem) {
        const visibleSpans = (block.children || []).filter((child) => (child.text || '').trim().length > 0);
        if (visibleSpans.length === 0) return false;
        return visibleSpans.every((child) => (child.marks || []).includes('strong')); // pattern A
    }

    return false;
}

/**
 * Pulls real Q&A pairs out of a post's own body — never invented. Only
 * extracts from an explicit "Frequently Asked Questions" (or "FAQ(s)")
 * heading: everything after it, up to the next H2 that isn't itself another
 * FAQ label, is scanned for question/answer pairs. Posts without that
 * labelled section yield an empty array and get no FAQPage schema.
 */
function extractFaqPairs(body: PortableTextBlock[]): Array<{ question: string; answer: string }> {
    const startIndex = body.findIndex(isFaqSectionHeading);
    if (startIndex === -1) return [];

    const pairs: Array<{ question: string; answer: string }> = [];
    let i = startIndex + 1;

    while (i < body.length) {
        const block = body[i];
        if (block.style === 'h2' && !isFaqSectionHeading(block)) break;

        if (!isQuestionBlock(block)) {
            i++;
            continue;
        }

        const question = blockText(block);
        const answerParts: string[] = [];
        let j = i + 1;
        while (
            j < body.length &&
            !isQuestionBlock(body[j]) &&
            !(body[j].style === 'h2' && !isFaqSectionHeading(body[j]))
        ) {
            const text = blockText(body[j]);
            if (text) answerParts.push(text);
            j++;
        }

        if (answerParts.length > 0) {
            pairs.push({ question, answer: answerParts.join(' ') });
        }
        i = j;
    }

    return pairs;
}

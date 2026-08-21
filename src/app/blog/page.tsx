import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, MessageCircle } from 'lucide-react';
import BlogSidebar from '@/components/blog/BlogSidebar';
import BlogPostCard from '@/components/blog/BlogPostCard';
import BlogPagination from '@/components/blog/BlogPagination';
import { BLOGS_PER_PAGE, type BlogFilters, getBlogIndex } from '@/lib/blogs';
import { OG_IMAGE, SITE_URL, SITE_NAME } from '@/constants/site';
import { graph, jsonLdProps, breadcrumb, webPage, CLINIC_ID } from '@/lib/schema';

export const dynamic = 'force-dynamic';

// Bare title — the root layout template appends the centre name.
const TITLE = 'Fertility Blog';
const DESCRIPTION =
    'Articles on IVF, ICSI, IUI, PCOS and fertility care, written and reviewed by Dr. Rashmi Agrawal — MBBS (Gold Medalist), MS OBGYN, FNB Reproductive Medicine.';

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: '/blog' },
    openGraph: { title: TITLE, description: DESCRIPTION, url: '/blog', type: 'website', images: [OG_IMAGE] },
    twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [OG_IMAGE.url] },
};

type BlogListPageProps = {
    searchParams: Promise<{ page?: string; category?: string; q?: string }>;
};

export default async function BlogListPage({ searchParams }: BlogListPageProps) {
    const resolved = await searchParams;
    const filters: BlogFilters = {
        page: Number(resolved.page || '1') || 1,
        category: resolved.category,
        q: resolved.q?.trim(),
    };

    const { posts, total, totalPages, page, categories } = await getBlogIndex(filters);
    const selectedCategory = categories.find((c) => c.slug === filters.category);

    const doc = graph([
        webPage({ path: '/blog', name: TITLE, description: DESCRIPTION }),
        breadcrumb([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
        ]),
        {
            '@type': 'Blog',
            '@id': `${SITE_URL}/blog#blog`,
            name: `${SITE_NAME} Blog`,
            description: DESCRIPTION,
            url: `${SITE_URL}/blog`,
            publisher: { '@id': CLINIC_ID },
            inLanguage: 'en-IN',
        },
    ]);

    return (
        <>
            <script {...jsonLdProps(doc)} />

            {/* HERO */}
            <section className="cond-hero edge" data-bg="#f8fafc" data-theme="light">
                <div className="cond-hero-bg"></div>
                <div className="container-x relative text-center">
                    <div className="cond-breadcrumb justify-center">
                        <Link href="/">Home</Link>
                        <ChevronRight style={{ width: '14px', height: '14px' }} />
                        <span>Blog</span>
                    </div>
                    <div className="chip mb-6 mx-auto w-fit">
                        <span className="chip-dot"></span>Knowledge Centre
                    </div>
                    <h1 className="display-sm text-slate-900 mb-6 font-black!">
                        Fertility, explained clearly.
                    </h1>
                    <p className="body-lg text-slate-600 max-w-2xl mx-auto mb-8">
                        Straight answers on IVF, ICSI, IUI and the conditions behind them — written and
                        reviewed by Dr. Rashmi Agrawal.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 text-sm font-semibold text-slate-500">
                        <span>{total} {total === 1 ? 'article' : 'articles'}</span>
                        {selectedCategory && <span>· {selectedCategory.title}</span>}
                        {filters.q && <span>· “{filters.q}”</span>}
                    </div>
                </div>
            </section>

            {/* LISTING */}
            <section className="py-8 md:py-12 bg-slate-50/60 edge">
                <div className="container-x">
                    <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
                        <BlogSidebar
                            searchQuery={filters.q}
                            categories={categories}
                            activeCategorySlug={filters.category}
                        />

                        <div>
                            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                                <p className="text-sm font-bold text-slate-500">
                                    Showing {posts.length ? (page - 1) * BLOGS_PER_PAGE + 1 : 0}
                                    {posts.length ? `–${(page - 1) * BLOGS_PER_PAGE + posts.length}` : ''} of {total}
                                </p>
                                {(filters.category || filters.q) && (
                                    <Link href="/blog" className="text-sm font-bold text-pink-600 hover:underline">
                                        Clear filters
                                    </Link>
                                )}
                            </div>

                            {posts.length > 0 ? (
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                                    {posts.map((post) => (
                                        <BlogPostCard key={post._id} post={post} />
                                    ))}
                                </div>
                            ) : (
                                <div className="rounded-[2rem] border border-slate-100 bg-white p-10 text-center">
                                    <h2 className="text-2xl font-bold text-slate-900">No articles yet</h2>
                                    <p className="mt-3 text-sm font-medium text-slate-500">
                                        {filters.category || filters.q
                                            ? 'Try a different category or search term.'
                                            : 'New articles are on the way — in the meantime, book a consultation and ask directly.'}
                                    </p>
                                    <Link href="/contact" className="btn btn-primary mt-6 inline-flex">
                                        Book Free Consultation
                                    </Link>
                                </div>
                            )}

                            <BlogPagination
                                page={page}
                                totalPages={totalPages}
                                buildHref={(target) => blogHref({ ...filters, page: target })}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-tight edge">
                <div className="container-x text-center">
                    <h2 className="heading text-slate-900 mb-4">Still have a question?</h2>
                    <p className="body-lg text-slate-600 max-w-xl mx-auto mb-8">
                        Reading only takes you so far. Bring your reports and get an answer specific to you.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/contact" className="btn btn-primary btn-lg">
                            Book Free Consultation
                        </Link>
                        <a
                            href="https://wa.me/919811775369"
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

function blogHref(filters: BlogFilters) {
    const params = new URLSearchParams();
    if (filters.page && filters.page > 1) params.set('page', String(filters.page));
    if (filters.category) params.set('category', filters.category);
    if (filters.q) params.set('q', filters.q);
    const query = params.toString();
    return query ? `/blog?${query}` : '/blog';
}

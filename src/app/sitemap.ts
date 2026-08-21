import type { MetadataRoute } from "next";
import { SITE_URL } from "@/constants/site";
import { sanityFetch } from "@/lib/sanity";

const treatmentSlugs = [
    "ivf",
    "pgt",
    "hsg",
    "hysteroscopy-laparoscopy",
    "icsi",
    "surgical-sperm-retrieval",
    "iui",
    "ovulation-induction",
    "endometrial-biopsy-era",
];

type BlogSlugEntry = {
    slug: string;
    publishedAt?: string;
    updatedAt?: string;
};

/**
 * Only this site's posts — the Sanity dataset is shared with
 * thecureinfertility.com, so an unscoped query would list their articles
 * under this domain. Failures degrade to an empty list rather than taking
 * the whole sitemap down.
 */
async function getBlogSlugs(): Promise<BlogSlugEntry[]> {
    try {
        return await sanityFetch<BlogSlugEntry[]>({
            query: `*[_type == "blogPost" && siteId == "dr-rashmi" && defined(slug.current) && isPublished != false]{
                "slug": slug.current,
                publishedAt,
                updatedAt
            }`,
        });
    } catch {
        return [];
    }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const now = new Date();
    const posts = await getBlogSlugs();

    const staticRoutes: MetadataRoute.Sitemap = [
        { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
        { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
        { url: `${SITE_URL}/treatments`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
        { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
        { url: `${SITE_URL}/faqs`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
        { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    ];

    const treatmentRoutes: MetadataRoute.Sitemap = treatmentSlugs.map((slug) => ({
        url: `${SITE_URL}/treatments/${slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.9,
    }));

    const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
        url: `${SITE_URL}/blog/${post.slug}`,
        lastModified: post.updatedAt || post.publishedAt || now,
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    return [...staticRoutes, ...treatmentRoutes, ...blogRoutes];
}

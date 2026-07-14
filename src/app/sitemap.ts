import type { MetadataRoute } from "next";
import { SITE_URL } from "@/constants/site";

const treatmentSlugs = [
    "ivf",
    "insemination",
    "hsg",
    "hysteroscopy-laparoscopy",
    "icsi",
    "surgical-sperm-retrieval",
    "iui",
    "ovulation-induction",
    "endometrial-biopsy-era",
];

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    const staticRoutes: MetadataRoute.Sitemap = [
        { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
        { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
        { url: `${SITE_URL}/treatments`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
        { url: `${SITE_URL}/faqs`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
        { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    ];

    const treatmentRoutes: MetadataRoute.Sitemap = treatmentSlugs.map((slug) => ({
        url: `${SITE_URL}/treatments/${slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.9,
    }));

    return [...staticRoutes, ...treatmentRoutes];
}

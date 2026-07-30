import { SITE_URL, SITE_NAME } from "@/constants/site";

// The clinic node declared in the root layout uses this @id; every other node
// references it rather than repeating the organization.
export const CLINIC_ID = `${SITE_URL}/#clinic`;
export const DOCTOR_ID = `${SITE_URL}/#dr-rashmi-agrawal`;

type Json = Record<string, unknown>;

export function graph(nodes: (Json | null | undefined)[]): Json {
    return { "@context": "https://schema.org", "@graph": nodes.filter(Boolean) };
}

export function breadcrumb(trail: { name: string; path: string }[]): Json {
    return {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}${trail[trail.length - 1].path}#breadcrumb`,
        itemListElement: trail.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.name,
            item: `${SITE_URL}${c.path}`,
        })),
    };
}

export function faqPage(faqs: { q: string; a: string }[], path: string): Json | null {
    if (!faqs?.length) return null;
    return {
        "@type": "FAQPage",
        "@id": `${SITE_URL}${path}#faq`,
        mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
    };
}

export function webPage({
    path,
    name,
    description,
    medical = false,
}: {
    path: string;
    name: string;
    description: string;
    medical?: boolean;
}): Json {
    return {
        "@type": medical ? "MedicalWebPage" : "WebPage",
        "@id": `${SITE_URL}${path}#webpage`,
        url: `${SITE_URL}${path}`,
        name,
        description,
        about: { "@id": CLINIC_ID },
        breadcrumb: { "@id": `${SITE_URL}${path}#breadcrumb` },
        ...(medical ? { reviewedBy: { "@id": DOCTOR_ID } } : {}),
        inLanguage: "en-IN",
    };
}

/** Dr. Rashmi as a standalone entity, so pages can cite her as the reviewer. */
export function physician(): Json {
    return {
        "@type": "Physician",
        "@id": DOCTOR_ID,
        name: "Dr. Rashmi Agrawal",
        jobTitle: "Senior IVF Consultant & Fertility Specialist",
        medicalSpecialty: "Reproductive Endocrinology",
        worksFor: { "@id": CLINIC_ID },
        url: `${SITE_URL}/about`,
        image: `${SITE_URL}/dr%20rashmi.jpg`,
        alumniOf: [
            { "@type": "CollegeOrUniversity", name: "Indira Gandhi Government Medical College, Nagpur" },
            { "@type": "CollegeOrUniversity", name: "Government Medical College, Nagpur" },
            { "@type": "MedicalOrganization", name: "Sir Ganga Ram Hospital, New Delhi" },
        ],
        memberOf: [
            { "@type": "MedicalOrganization", name: "Federation of Obstetric and Gynaecological Societies of India (FOGSI)" },
            { "@type": "MedicalOrganization", name: "Indian Society of Assisted Reproduction (ISAR)" },
            { "@type": "MedicalOrganization", name: "Indian Fertility Society (IFS)" },
        ],
        affiliation: { "@type": "MedicalOrganization", name: SITE_NAME },
    };
}

export function medicalProcedure({
    name,
    description,
    path,
    howPerformed,
}: {
    name: string;
    description: string;
    path: string;
    howPerformed?: string;
}): Json {
    return {
        "@type": "MedicalProcedure",
        "@id": `${SITE_URL}${path}#procedure`,
        name,
        description,
        url: `${SITE_URL}${path}`,
        medicalSpecialty: "Reproductive Endocrinology",
        performer: { "@id": CLINIC_ID },
        ...(howPerformed ? { howPerformed } : {}),
    };
}

export function jsonLdProps(doc: Json) {
    return {
        type: "application/ld+json" as const,
        dangerouslySetInnerHTML: { __html: JSON.stringify(doc).replace(/</g, "\\u003c") },
    };
}

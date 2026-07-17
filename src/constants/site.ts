export const SITE_URL = "https://drrashmiagrawal.com";
export const SITE_NAME = "Dr. Rashmi Agrawal IVF Centre";
export const CLINIC_PHONE = "+91 88002 63884";
export const CLINIC_PHONE_INTL = "+918800263884";
export const CLINIC_EMAIL = "Cure@thecurestone.com";
export const CLINIC_ADDRESS = {
    streetAddress: "Nova IVF, Plot No. 522, near Supermarket, Sector 27",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    postalCode: "122009",
    addressCountry: "IN",
};

export const clinicSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": `${SITE_URL}/#clinic`,
    name: SITE_NAME,
    url: SITE_URL,
    telephone: CLINIC_PHONE_INTL,
    email: CLINIC_EMAIL,
    image: `${SITE_URL}/dr%20rashmi.jpg`,
    medicalSpecialty: "Reproductive Endocrinology",
    address: {
        "@type": "PostalAddress",
        ...CLINIC_ADDRESS,
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: 28.4406,
        longitude: 77.0266,
    },
    openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "18:00",
    },
    aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "1000",
    },
    founder: {
        "@type": "Physician",
        name: "Dr. Rashmi Agrawal",
        medicalSpecialty: "Reproductive Endocrinology",
        alumniOf: [
            "Indira Gandhi Government Medical College, Maharashtra",
            "Government Medical College, Maharashtra",
        ],
        memberOf: [
            "Federation of Obstetric and Gynaecological Societies of India (FOGSI)",
            "Association of Obstetricians and Gynaecologists of Delhi (AOGD)",
            "Indian Fertility Society (IFS)",
            "Delhi Medical Association (DMA)",
        ],
    },
};

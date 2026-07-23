export const SITE_URL = "https://drrashmiagrawal.com";
export const SITE_NAME = "Dr. Rashmi Agrawal IVF Centre";
export const CLINIC_PHONE = "+91 98117 75369";
export const CLINIC_PHONE_INTL = "+919811775369";
export const CLINIC_EMAIL = "care@thecurestone.com";
export const CLINIC_ADDRESS = {
    streetAddress: "Nova IVF, Plot No. 522, near Supermarket, Sector 27",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    postalCode: "122009",
    addressCountry: "IN",
};

// Best-effort Maps search link (no Place ID on hand). If you have the exact
// "get more reviews" short link from your Google Business Profile dashboard
// (looks like g.page/r/XXXXXXXX/review), swap it in here for a precise link
// straight to your listing instead of a name/address search.
export const GOOGLE_REVIEWS_URL =
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(`${SITE_NAME}, ${CLINIC_ADDRESS.streetAddress}, ${CLINIC_ADDRESS.addressLocality}, ${CLINIC_ADDRESS.addressRegion} ${CLINIC_ADDRESS.postalCode}`);

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
        ratingValue: "5",
        reviewCount: "8",
    },
    founder: {
        "@type": "Physician",
        name: "Dr. Rashmi Agrawal",
        medicalSpecialty: "Reproductive Endocrinology",
        alumniOf: [
            "Indira Gandhi Government Medical College, Nagpur",
            "Government Medical College, Nagpur",
            "Sir Ganga Ram Hospital, New Delhi",
        ],
        memberOf: [
            "Federation of Obstetric and Gynaecological Societies of India (FOGSI)",
            "Indian Society of Assisted Reproduction (ISAR)",
            "Indian Fertility Society (IFS)",
        ],
    },
};

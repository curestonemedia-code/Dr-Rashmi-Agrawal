export const SITE_URL = "https://drrashmiagrawal.com";
export const SITE_NAME = "Dr. Rashmi Agrawal IVF Centre";

// Shared social card. Every page must spread this into its openGraph.images —
// a page that exports `openGraph` without images inherits nothing, and social
// platforms then have no card image at all.
export const OG_IMAGE = {
    url: "/og-image.png",
    width: 1200,
    height: 630,
    alt: "Dr. Rashmi Agrawal — IVF & Fertility Specialist, Gurugram",
};
export const CLINIC_PHONE = "+91 98117 75369";
export const CLINIC_PHONE_INTL = "+919811775369";
export const CLINIC_EMAIL = "care@thecurestone.com";
export const CLINIC_ADDRESS = {
    streetAddress: "Plot No. 522, near Supermarket, Sector 27",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    postalCode: "122009",
    addressCountry: "IN",
};

// Google Maps links for the clinic, both pointing at the verified
// "Dr. Rashmi Agrawal" Business Profile listing.
export const MAP_EMBED_URL =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4914.880330019039!2d77.08229692405504!3d28.458774579279687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e3377a5b4e0a3%3A0xee951a9501bf2159!2sDr.%20Rashmi%20Agrawal!5e0!3m2!1sen!2sin!4v1785238076791!5m2!1sen!2sin";

export const MAP_SHARE_URL = "https://share.google/OCgiB2XtH14Rap2TW";

// Points at the listing itself, which is where reviews are read and left.
// If you pull the "get more reviews" short link from your Google Business
// Profile dashboard (looks like g.page/r/XXXXXXXX/review), that one drops
// patients straight into the review form and is better still for collecting.
export const GOOGLE_REVIEWS_URL = MAP_SHARE_URL;

export const clinicSchema = {
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
        latitude: 28.4587746,
        longitude: 77.0822969,
    },
    hasMap: MAP_SHARE_URL,
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
    founder: { "@id": `${SITE_URL}/#dr-rashmi-agrawal` },
};

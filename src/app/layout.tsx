import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

import Preloader from "@/components/Preloader";
import ScrollProgress from "@/components/ScrollProgress";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HashLinkFix from "@/components/HashLinkFix";
import { SITE_URL, SITE_NAME, clinicSchema } from "@/constants/site";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const TITLE = "IVF Specialist in Gurgaon | Dr. Rashmi Agrawal IVF Centre";
const DESCRIPTION = "Dr. Rashmi Agrawal: MBBS (Gold Medalist), MS OBGYN, FNB Reproductive Medicine. IVF, ICSI, and IUI at our fertility clinic in Gurgaon, with 9,000+ consultations. Book your free consultation today.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    "IVF specialist Gurgaon",
    "fertility clinic Gurgaon",
    "IVF centre Gurugram",
    "infertility treatment Gurugram",
    "IVF doctor Sector 27 Gurugram",
  ],
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "PbnSxhycBSNQutcWs2yRG7KzDwjKubfP2x6KJyXFRLg",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/dr rashmi.jpg", width: 1200, height: 1500, alt: "Dr. Rashmi Agrawal" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/dr rashmi.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/favicon.ico" },
    ],
    apple: "/favicon_io/apple-touch-icon.png",
    other: [
      { rel: "android-chrome-192x192", url: "/favicon_io/android-chrome-192x192.png" },
    ],
  },
  manifest: "/favicon_io/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased bg-gradient-primary`}
    >
      <body className="min-h-full flex flex-col transition-colors duration-500 ease-in-out bg-white text-gray-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema).replace(/</g, "\\u003c") }}
        />
        <HashLinkFix />
        <ScrollProgress />
        <Preloader />
        <Nav />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-9GBC5P69QM" />
    </html>
  );
}

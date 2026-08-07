import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import "./globals.css";

import Preloader from "@/components/Preloader";
import ScrollProgress from "@/components/ScrollProgress";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HashLinkFix from "@/components/HashLinkFix";
import { SITE_URL, SITE_NAME, OG_IMAGE, clinicSchema } from "@/constants/site";
import { graph, jsonLdProps, physician } from "@/lib/schema";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const TITLE = "IVF Specialist in Gurgaon | Dr. Rashmi Agrawal IVF Centre";
const DESCRIPTION = "IVF, ICSI and IUI in Gurgaon with Dr. Rashmi Agrawal — MBBS (Gold Medalist), MS OBGYN, FNB Reproductive Medicine. 9,000+ consultations. Book free.";

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
    // The old "/dr rashmi.jpg" was declared 1200x1500 but is actually 330x456 —
    // far below the size social platforms require for a card.
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE.url],
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
      lang="en-IN"
      className={`${poppins.variable} h-full antialiased bg-gradient-primary`}
    >
      <body className="min-h-full flex flex-col transition-colors duration-500 ease-in-out bg-white text-gray-900">
        {/* Site-wide entities. Page-level JSON-LD references these by @id
            (clinic, doctor) rather than repeating them. */}
        <script {...jsonLdProps(graph([clinicSchema, physician()]))} />
        <HashLinkFix />
        <ScrollProgress />
        <Preloader />
        <Nav />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />

        {/* Microsoft Clarity */}
        <Script id="ms-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "xyij4szids");
          `}
        </Script>
      </body>
      <GoogleAnalytics gaId="G-9GBC5P69QM" />
    </html>
  );
}

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import ScrollProgress from "@/components/ScrollProgress";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "IVF Specialist in Gurgaon | Dr. Rashmi Agarwal IVF Centre",
  description: "Dr. Rashmi Agarwal: MS OBGYN (Gold Medalist), FNB Reproductive Medicine. Advanced IVF, ICSI, and IUI in Gurugram with 9,000+ consultations. Book your free consultation today.",
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
        <SmoothScroll>
          <ScrollProgress />
          <Preloader />
          <Nav />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

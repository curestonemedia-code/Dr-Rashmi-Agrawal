import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";
import FaqAccordion from "@/components/FaqAccordion";
import { ALL_FAQS, FAQ_CATEGORIES } from "@/constants/faqs";

const TITLE = 'Fertility and IVF FAQs | Dr. Rashmi Agrawal';
const DESCRIPTION = 'Fertility questions answered by Dr. Rashmi Agrawal in Gurugram. IVF, IUI, ICSI, cost, pain, PCOS, and male infertility, explained in plain language.';

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: '/faqs' },
    openGraph: { title: TITLE, description: DESCRIPTION, url: '/faqs', type: 'website' },
    twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ALL_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function FaqsPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }}
            />

            <section className="cond-hero edge" data-bg="#f8fafc" data-theme="light">
                <div className="cond-hero-bg"></div>
                <div className="container-x relative text-center">
                    <div className="cond-breadcrumb justify-center">
                        <Link href="/">Home</Link>
                        <ChevronRight style={{ width: "14px", height: "14px" }} />
                        <span>FAQ</span>
                    </div>
                    <div className="chip mb-6 mx-auto w-fit">
                        <span className="chip-dot"></span>Frequently Asked Questions
                    </div>
                    <h1 className="display-sm text-slate-900 mb-6 font-black!">
                        Every question, honestly answered.
                    </h1>
                    <p className="body-lg text-slate-600 max-w-2xl mx-auto mb-10">
                        Diagnosis, cost, pain, male infertility, PCOS — in plain language, by Dr. Rashmi Agrawal.
                    </p>

                    <nav aria-label="FAQ categories" className="flex flex-wrap justify-center gap-2">
                        {FAQ_CATEGORIES.map((category) => (
                            <a
                                key={category.slug}
                                href={`#${category.slug}`}
                                className="px-4 py-2 text-xs font-black uppercase tracking-widest text-slate-600 bg-white border border-slate-200 rounded-full hover:border-pink-600 hover:text-pink-600 transition-colors"
                            >
                                {category.title}
                            </a>
                        ))}
                    </nav>
                </div>
            </section>

            <section className="section edge">
                <div className="container-x">
                    <div className="max-w-3xl mx-auto space-y-16">
                        {FAQ_CATEGORIES.map((category) => (
                            <div key={category.slug} id={category.slug} className="scroll-mt-28">
                                <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
                                    <h2 className="heading">{category.title}</h2>
                                    {category.relatedHref && (
                                        <Link href={category.relatedHref} className="text-sm font-black text-pink-600 hover:underline whitespace-nowrap">
                                            {category.relatedLabel} →
                                        </Link>
                                    )}
                                </div>
                                <FaqAccordion items={category.items} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta-band edge section-tight" data-bg="#ef8b92" data-theme="dark">
                <div className="container-x relative text-center">
                    <h2 className="display-sm mb-6" style={{ color: "#fff" }}>Still have questions?</h2>
                    <p className="body-lg mb-10 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.85)" }}>
                        Send your reports on WhatsApp or book a free consultation.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link href="/?interest=other#book" className="btn btn-white btn-lg">
                            Book Free Consultation
                        </Link>
                        <a
                            href="https://wa.me/918800263884"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-lg"
                            style={{ background: "rgba(255,255,255,0.1)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)" }}
                        >
                            <MessageCircle style={{ width: '16px', height: '16px' }} />
                            Message on WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import {
    Baby, TestTube, Stethoscope, Syringe, TestTube2, CalendarRange, FileSearch,
    ArrowRight, MessageCircle, ChevronRight,
} from 'lucide-react';

const TITLE = 'Fertility Treatments in Gurgaon | Dr. Rashmi Agarwal';
const DESCRIPTION = 'Fertility treatments in Gurugram: IVF, ICSI, surgical sperm retrieval, IUI, and laparoscopy under Dr. Rashmi Agarwal. Compare your options in one place.';

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: '/treatments' },
    openGraph: { title: TITLE, description: DESCRIPTION, url: '/treatments', type: 'website' },
    twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
};

const treatments = [
    {
        href: '/treatments/ivf',
        Icon: Baby,
        title: 'IVF (In Vitro Fertilisation)',
        recommended: 'Blocked tubes, low AMH, endometriosis, failed IUIs.',
        desc: 'Eggs and sperm combined in the lab; the healthy embryo transferred to the uterus.',
        link: 'Full Guide: IVF Treatment',
    },
    {
        href: '/treatments/insemination',
        Icon: TestTube,
        title: 'Insemination',
        recommended: 'Couples exploring partner or donor options, ART Act compliant.',
        desc: 'Prepared sperm placed in the reproductive tract to maximise natural fertilisation.',
        link: 'Full Guide: Insemination',
    },
    {
        href: '/treatments/hysteroscopy-laparoscopy',
        Icon: Stethoscope,
        title: 'Hysteroscopy and Laparoscopy Surgeries',
        recommended: 'Polyps, septum, adhesions, endometriosis, fibroids, blocked tubes.',
        desc: 'Minimally invasive keyhole surgery, protecting your ovarian reserve throughout.',
        link: 'Full Guide: Surgical Options',
    },
    {
        href: '/treatments/icsi',
        Icon: Syringe,
        title: 'ICSI (Intracytoplasmic Sperm Injection)',
        recommended: 'Low count, poor motility, or prior fertilisation failure.',
        desc: 'One healthy sperm injected directly into each mature egg under a microscope.',
        link: 'Full Guide: ICSI Treatment',
    },
    {
        href: '/treatments/surgical-sperm-retrieval',
        Icon: Stethoscope,
        title: 'Surgical Sperm Retrieval (PESA, TESA, Micro TESE)',
        recommended: 'Azoospermia, confirmed on two semen analyses.',
        desc: 'Sperm retrieved directly from the reproductive tract for use with ICSI.',
        link: 'Full Guide: Surgical Sperm Retrieval',
    },
    {
        href: '/treatments/iui',
        Icon: TestTube2,
        title: 'IUI (Intrauterine Insemination)',
        recommended: 'Mild male factor, cervical issues, unexplained infertility.',
        desc: 'Concentrated sperm placed inside the uterus at the exact fertile window.',
        link: 'Full Guide: IUI Treatment',
    },
    {
        href: '/treatments/ovulation-induction',
        Icon: CalendarRange,
        title: 'Ovulation Induction and Cycle Monitoring',
        recommended: 'Irregular ovulation, PCOS, early in your journey.',
        desc: 'Medication plus tracking scans to pinpoint the exact fertile window.',
        link: 'Full Guide: Ovulation Induction',
    },
    {
        href: '/treatments/endometrial-biopsy-era',
        Icon: FileSearch,
        title: 'Endometrial Biopsy and ERA',
        recommended: 'Repeated IVF implantation failure.',
        desc: 'Pinpoints the precise, personalised window of implantation for embryo transfer.',
        link: 'Full Guide: Advanced Diagnostics',
    },
];

const comparisons = [
    { name: 'Ovulation Induction', time: 'About 1 month per cycle.', note: 'Tablets or injections plus scans. First step for ovulation problems.' },
    { name: 'IUI', time: 'About 1 month per cycle.', note: 'A 10-minute clinic procedure. Usually 3–4 attempts maximum.' },
    { name: 'IVF, ICSI, and Surgical Sperm Retrieval', time: '3–4 weeks of active treatment.', note: 'Daycare retrieval under anaesthesia. Definitive for complex causes.' },
    { name: 'Hysteroscopy and Laparoscopy', time: 'Daycare surgery.', note: 'Short anaesthesia. Diagnoses and treats in one sitting.' },
];

export default function TreatmentsPage() {
    return (
        <>
            {/* HERO */}
            <section className="cond-hero edge" data-bg="#f8fafc" data-theme="light">
                <div className="cond-hero-bg"></div>
                <div className="container-x relative text-center">
                    <div className="cond-breadcrumb justify-center">
                        <Link href="/">Home</Link>
                        <ChevronRight style={{ width: '14px', height: '14px' }} />
                        <span>Treatments</span>
                    </div>
                    <div className="chip mb-6 mx-auto w-fit">
                        <span className="chip-dot"></span>Treatments
                    </div>
                    <h1 className="display-sm text-slate-900 mb-6 font-black!">
                        Every treatment, honestly explained.
                    </h1>
                    <p className="body-lg text-slate-600 max-w-2xl mx-auto mb-10">
                        From a simple ovulation tablet to advanced ICSI. What each treatment does, and how we decide together.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/contact" className="btn btn-primary btn-lg">
                            Book Free Consultation
                        </Link>
                        <a href="https://wa.me/918800263884" target="_blank" rel="noreferrer" className="btn btn-ghost btn-lg">
                            <MessageCircle className="w-4 h-4 text-green-600" /> WhatsApp Your Reports
                        </a>
                    </div>
                </div>
            </section>

            {/* TREATMENT DIRECTORY */}
            <section className="py-8 md:py-12 bg-slate-50/60 edge">
                <div className="container-x">
                    <div className="grid md:grid-cols-2 gap-6">
                        {treatments.map(({ href, Icon, title, recommended, desc, link }, i) => (
                            <Link
                                key={i}
                                href={href}
                                className="group bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-pink-500/5 hover:border-pink-100 transition-all"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-pink-50 flex items-center justify-center mb-6 text-pink-500 group-hover:text-pink-600 group-hover:bg-pink-100 transition-colors">
                                    <Icon className="w-7 h-7" strokeWidth={1.4} />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3">{title}</h3>
                                <p className="text-xs font-bold text-pink-600 uppercase tracking-wider mb-3">Recommended for</p>
                                <p className="text-sm text-slate-500 leading-relaxed mb-4">{recommended}</p>
                                <p className="text-slate-600 leading-relaxed mb-6">{desc}</p>
                                <span className="inline-flex items-center gap-2 text-sm font-bold text-pink-600 group-hover:gap-3 transition-all">
                                    {link} <ArrowRight className="w-4 h-4" />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* COMPARISON */}
            <section className="section edge">
                <div className="container-x">
                    <h2 className="heading text-slate-900 mb-10">Time and invasiveness, compared.</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {comparisons.map((c, i) => (
                            <div key={i} className="bg-slate-50 border border-slate-100 p-6 rounded-3xl">
                                <h4 className="font-bold text-slate-900 mb-2">{c.name}</h4>
                                <p className="text-sm font-semibold text-pink-600 mb-2">{c.time}</p>
                                <p className="text-sm text-slate-500 leading-relaxed">{c.note}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-slate-400 mt-8">
                        Typical patterns, not strict rules — your plan is built from your own reports.
                    </p>
                </div>
            </section>

            {/* CTA BANNER */}
            <section className="cta-band edge section-tight" data-bg="#ef8b92" data-theme="dark">
                <div className="container-x relative text-center">
                    <h2 className="display-sm mb-6" style={{ color: '#fff' }}>Stop guessing. Start knowing.</h2>
                    <p className="body-lg mb-10 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.85)' }}>
                        One consultation and a few targeted tests tell you exactly where you stand.
                    </p>
                    <Link href="/contact" className="btn btn-white btn-lg">
                        Book Free Consultation
                    </Link>
                </div>
            </section>
        </>
    );
}

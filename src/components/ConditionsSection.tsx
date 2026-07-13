'use client';
import Link from 'next/link';
import { Baby, TestTube, Syringe, Stethoscope, TestTube2, CalendarRange, FileSearch, ArrowUpRight } from 'lucide-react';

export default function ConditionsSection() {
    const conditions = [
        {
            href: '/treatments/ivf',
            Icon: Baby,
            title: 'IVF (In Vitro Fertilisation)',
            desc: 'Eggs and sperm are combined in our advanced laboratory, and the healthiest embryo is transferred to the uterus. Highly effective for blocked tubes, low AMH, endometriosis, and long standing infertility.',
            chips: ['ICSI Add-on', 'Blastocyst Culture', 'PGT Available'],
        },
        {
            href: '/treatments/insemination',
            Icon: TestTube,
            title: 'Insemination',
            desc: 'Timed placement of laboratory prepared sperm into the reproductive tract to maximise the chance of natural fertilisation, strictly adhering to all legal guidelines.',
            chips: ['ART Act Compliant', 'Donor Option', 'Partner Cycle'],
        },
        {
            href: '/treatments/icsi',
            Icon: Syringe,
            title: 'Surgical Sperm Retrieval (PESA, TESA, Micro TESE)',
            desc: 'For men with zero sperm count in the ejaculate (azoospermia), we use advanced, precise surgical retrieval techniques to safely extract sperm directly from the reproductive tract for use with ICSI.',
            chips: ['PESA', 'TESA', 'Micro TESE'],
        },
        {
            href: '/treatments/hysteroscopy-laparoscopy',
            Icon: Stethoscope,
            title: 'Hysteroscopy and Laparoscopy Surgeries',
            desc: 'Minimally invasive keyhole and camera guided surgeries to examine, diagnose, and treat hidden structural causes of infertility like polyps, septum, fibroids, cysts, and advanced endometriosis.',
            chips: ['Day-Case Surgery', 'Fertility-First', 'Same-Sitting Treatment'],
        },
        {
            href: '/treatments/icsi',
            Icon: Syringe,
            title: 'Intracytoplasmic Sperm Injection (ICSI)',
            desc: 'A single healthy sperm is injected directly into each egg, making it the ideal treatment for severe male factor infertility and maximizing fertilisation chances.',
            chips: ['Single Sperm Injection', 'Severe Male Factor', 'High Fertilisation Rate'],
        },
        {
            href: '/treatments/iui',
            Icon: TestTube2,
            title: 'IUI (Intrauterine Insemination)',
            desc: 'Washed, concentrated sperm is placed directly inside the uterus at the exact time of ovulation. A gentle, accessible, and affordable first step for many couples.',
            chips: ['10-Minute Procedure', 'Cost-Effective', 'First-Line Option'],
        },
        {
            href: '/treatments/ovulation-induction',
            Icon: CalendarRange,
            title: 'Ovulation Induction and Cycle Monitoring',
            desc: 'Carefully dosed medicines paired with tracking scans to help your ovaries release a mature egg at the right time. Often the only treatment young couples need to conceive.',
            chips: ['Letrozole / Clomid', 'PCOS Focused', 'Cycle Monitoring'],
        },
        {
            href: '/treatments/endometrial-biopsy-era',
            Icon: FileSearch,
            title: 'Endometrial Biopsy and ERA',
            desc: 'Advanced diagnostic evaluation of the uterine lining to identify chronic hidden infections or determine the exact personalized window of implantation for IVF transfers.',
            chips: ['Personalised Window', 'Repeated Failure Workup', 'Infection Screening'],
        },
    ];

    return (
        <section id="conditions" className="py-20 md:py-28 bg-white relative overflow-hidden">
            {/* Background Grid Pattern */}
            <div
                className="absolute inset-0 pointer-events-none opacity-40"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(226, 232, 240, 0.5) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(226, 232, 240, 0.5) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px'
                }}
            />

            {/* Ambient Glow Orb */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-50/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/4" />

            <div className="max-w-[1440px] mx-auto px-5 md:px-12 lg:px-16 relative z-10">
                {/* Header */}
                <div className="max-w-3xl mb-14 md:mb-16">
                    <div className="flex items-center gap-2 mb-5">
                        <span className="w-2 h-2 rounded-full bg-pink-600 animate-pulse"></span>
                        <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-pink-600">
                            01 / What We Do
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black tracking-[-0.035em] text-slate-900 leading-[1.1] font-sans">
                        Comprehensive fertility<br className="hidden md:block" /> treatments and advanced care.
                    </h2>
                    <p className="text-base md:text-lg text-slate-500 mt-5 max-w-2xl leading-relaxed font-medium">
                        Not every couple needs IVF. Treatment at our centre starts with an accurate diagnosis, followed by the least invasive option that genuinely fits your medical situation.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {conditions.map(({ href, Icon, title, desc, chips }, i) => (
                        <Link
                            key={`${title}-${i}`}
                            href={href}
                            className="group relative block p-7 rounded-[2rem] border border-slate-100 bg-white hover:border-pink-200 hover:shadow-[0_20px_50px_rgba(239,139,146,0.08)] transition-all duration-500 hover:-translate-y-1"
                        >
                            {/* Arrow - Top Right */}
                            <div className="absolute top-7 right-7 w-9 h-9 rounded-full bg-pink-50/60 flex items-center justify-center border border-pink-100/30 text-pink-600 transition-all duration-300 group-hover:bg-pink-600 group-hover:text-white group-hover:scale-105">
                                <ArrowUpRight style={{ width: '16px', height: '16px' }} />
                            </div>

                            {/* Icon */}
                            <div className="w-12 h-12 rounded-2xl bg-pink-50/80 flex items-center justify-center mb-6 text-pink-600 transition-transform duration-500 group-hover:scale-110">
                                <Icon className="w-6 h-6" strokeWidth={1.8} />
                            </div>

                            {/* Title */}
                            <h3 className="text-base md:text-lg font-black text-slate-900 tracking-tight mb-3 leading-snug pr-8">
                                {title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-slate-500 leading-relaxed mb-6 font-medium">
                                {desc}
                            </p>

                            {/* Chips */}
                            <div className="flex flex-wrap gap-2">
                                {chips.map((chip) => (
                                    <span
                                        key={chip}
                                        className="inline-flex items-center px-3 py-1.5 rounded-full text-[10px] font-bold text-slate-500 bg-slate-50 border border-slate-100/40"
                                    >
                                        {chip}
                                    </span>
                                ))}
                            </div>

                            {/* Bottom Accent Hover Line */}
                            <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-pink-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                        </Link>
                    ))}
                </div>

                {/* Section CTA */}
                <div className="mt-14 text-center">
                    <p className="text-slate-500 max-w-2xl mx-auto mb-6">
                        Not sure which treatment path matches your profile? Book a free consultation. Dr. Rashmi will guide you honestly, even if the current answer is to keep trying naturally.
                    </p>
                    <Link
                        href="/?interest=other#book"
                        className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#ef8b92] text-white text-sm font-semibold hover:bg-pink-700 transition-all hover:scale-105"
                    >
                        Book a Free Consultation
                    </Link>
                </div>
            </div>
        </section>
    );
}

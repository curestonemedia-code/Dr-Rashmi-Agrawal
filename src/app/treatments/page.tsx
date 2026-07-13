import type { Metadata } from 'next';
import Link from 'next/link';
import {
    Baby, TestTube, Stethoscope, Syringe, TestTube2, CalendarRange, FileSearch,
    ArrowRight, MessageCircle, ChevronRight,
} from 'lucide-react';

export const metadata: Metadata = {
    title: 'Fertility Treatments in Gurgaon | Dr. Rashmi Agarwal',
    description: 'Complete fertility treatments in Gurugram. Compare your options including IVF, ICSI, Surgical Sperm Retrieval, IUI, and laparoscopy under Dr. Rashmi Agarwal.',
};

const treatments = [
    {
        href: '/treatments/ivf',
        Icon: Baby,
        title: 'IVF (In Vitro Fertilisation)',
        recommended: 'Blocked tubes, endometriosis, low AMH, higher age, failed IUIs, and long standing infertility.',
        desc: 'Eggs are retrieved, fertilised with sperm in our advanced lab, and the healthy embryo is transferred to the uterus.',
        link: 'Full Guide: IVF Treatment',
    },
    {
        href: '/treatments/insemination',
        Icon: TestTube,
        title: 'Insemination',
        recommended: 'Couples wanting to understand all insemination options, including donor insemination under ART Act rules.',
        desc: 'The umbrella concept for placing laboratory prepared sperm into the reproductive tract safely and precisely to maximise the chance of natural fertilisation.',
        link: 'Full Guide: Insemination',
    },
    {
        href: '/treatments/hysteroscopy-laparoscopy',
        Icon: Stethoscope,
        title: 'Hysteroscopy and Laparoscopy Surgeries',
        recommended: 'Suspected polyps, septum, adhesions, endometriosis, fibroids, ovarian cysts, or blocked tubes.',
        desc: 'Minimally invasive camera guided surgical procedures to diagnose and treat structural issues while strictly protecting your ovarian reserve.',
        link: 'Full Guide: Surgical Options',
    },
    {
        href: '/treatments/icsi',
        Icon: Syringe,
        title: 'ICSI and Surgical Sperm Retrieval',
        recommended: 'Low sperm count, poor motility, previous fertilisation failure, or azoospermia (zero sperm count in ejaculate).',
        desc: 'One selected healthy sperm is injected directly into each mature egg. For azoospermia, we provide advanced Surgical Sperm Retrieval techniques including PESA, TESA, and Micro TESE to safely extract sperm for fertilisation.',
        link: 'Full Guide: ICSI and Surgical Sperm Retrieval',
    },
    {
        href: '/treatments/iui',
        Icon: TestTube2,
        title: 'IUI (Intrauterine Insemination)',
        recommended: 'Mild male factor, cervical issues, unexplained infertility, and single women or couples using donor sperm as per law.',
        desc: 'Lab prepared, concentrated sperm is placed directly inside the uterus at the exact time of ovulation. Quick, painless, and done in minutes.',
        link: 'Full Guide: IUI Treatment',
    },
    {
        href: '/treatments/ovulation-induction',
        Icon: CalendarRange,
        title: 'Ovulation Induction and Cycle Monitoring',
        recommended: 'Irregular or absent ovulation, PCOS, and young couples early in their journey.',
        desc: 'Oral or injectable medicines mature an egg, and serial ultrasounds pinpoint the exact fertile window for timed intercourse or IUI. Often the only treatment needed.',
        link: 'Full Guide: Ovulation Induction',
    },
    {
        href: '/treatments/endometrial-biopsy-era',
        Icon: FileSearch,
        title: 'Endometrial Biopsy and ERA',
        recommended: 'Repeated IVF implantation failure or evaluating the uterine environment.',
        desc: 'Targeted diagnostic testing of the uterine lining to identify chronic infections or determine the precise, personalized window of implantation for IVF embryo transfers.',
        link: 'Full Guide: Advanced Diagnostics',
    },
];

const comparisons = [
    { name: 'Ovulation Induction', time: '1 cycle takes about 1 month.', note: 'Tablets or injections plus scans. First step for ovulation problems.' },
    { name: 'IUI', time: '1 cycle takes about 1 month.', note: 'A 10 minute clinic procedure. First step for mild factors; usually 3 to 4 attempts maximum.' },
    { name: 'IVF, ICSI, and Surgical Sperm Retrieval', time: '1 cycle takes about 3 to 4 weeks of active treatment.', note: 'Daycare egg retrieval under anaesthesia. Definitive treatment for most complex causes.' },
    { name: 'Hysteroscopy and Laparoscopy', time: 'Daycare surgery.', note: 'Short anaesthesia. Diagnoses and treats structural causes in one sitting.' },
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
                    <h1 className="display-sm text-slate-900 mb-6">
                        Every Fertility Treatment, One Honest Guide
                    </h1>
                    <p className="body-lg text-slate-600 max-w-2xl mx-auto mb-10">
                        From a simple tablet that triggers ovulation to advanced ICSI and precision diagnostics, this page explains what each treatment does and how we decide together.
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

            {/* INTRODUCTION */}
            <section className="section-tight edge">
                <div className="container-x max-w-4xl">
                    <h2 className="heading text-slate-900 mb-8">How We Choose the Right Treatment for You</h2>
                    <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed">
                        <p>Fertility treatment is not a menu you order from, it is a medical decision that flows from your diagnosis. Age, ovarian reserve, tubal status, sperm parameters, previous attempts, and how long you have been trying all shape the recommendation. Two couples facing fertility challenges may need completely different plans.</p>
                        <p>At Dr. Rashmi Agarwal IVF Centre, treatments sit on a ladder from simplest to advanced. We start at the lowest step that gives your specific case a genuine chance, and we escalate deliberately, never by default, and never to inflate a bill. Below, each treatment is explained in plain language.</p>
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
                    <h2 className="heading text-slate-900 mb-10">Quick Comparison: Time, Invasiveness, and Typical Use</h2>
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
                        These are typical patterns, not strict rules. Your plan is built during your consultation, based exclusively on your medical reports.
                    </p>
                </div>
            </section>

            {/* CTA BANNER */}
            <section className="cta-band edge section-tight" data-bg="#ef8b92" data-theme="dark">
                <div className="container-x relative text-center">
                    <h2 className="display-sm mb-6" style={{ color: '#fff' }}>Stop Guessing Which Treatment You Need</h2>
                    <p className="body-lg mb-10 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.85)' }}>
                        One consultation, one ultrasound, and a few targeted tests will let you know exactly where you stand and what to do next. That clarity is worth more than months of internet research.
                    </p>
                    <Link href="/contact" className="btn btn-white btn-lg">
                        Book Free Consultation
                    </Link>
                </div>
            </section>
        </>
    );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import {
    GraduationCap, Award, Users, BookOpen, Trophy, Star, ShieldCheck,
    CalendarCheck2, MessageCircle, CheckCircle2, Building2, ChevronRight,
} from 'lucide-react';

const TITLE = 'Dr. Rashmi Agrawal | IVF Specialist in Gurgaon | About';
const DESCRIPTION = 'Meet Dr. Rashmi Agrawal: MS OBGYN (Gold Medalist), DNB, FNB Reproductive Medicine. 10+ years of experience, 9,000+ consultations, 5+ publications. Fertility doctor in Gurugram.';

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: '/about' },
    openGraph: { title: TITLE, description: DESCRIPTION, url: '/about', type: 'profile' },
    twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
};

const qualifications = [
    'MBBS : Indira Gandhi Government Medical College, Maharashtra (2012)',
    'MS, Obstetrics and Gynaecology : Government Medical College, Maharashtra (2015) — Gold Medalist',
    'DNB, Obstetrics and Gynaecology : National Board of Examinations, New Delhi',
    'FNB, Reproductive Medicine : National Board of Examinations, New Delhi (2019)',
];

const memberships = [
    'Federation of Obstetric and Gynaecological Societies of India (FOGSI)',
    'Association of Obstetricians and Gynaecologists of Delhi (AOGD)',
    'Indian Fertility Society (IFS)',
    'Delhi Medical Association (DMA)',
];

const experience = [
    { role: 'Chief IVF Specialist and Founder', place: 'Dr. Rashmi Agrawal IVF Centre, Gurugram' },
    { role: 'Visiting Consultant, IVF and Fertility', place: 'Apollo Hospital, Delhi' },
    { role: 'Senior Consultant, IVF', place: 'Max Hospital, Shalimar Bagh, New Delhi' },
    { role: 'Consultant, OBGYN and Reproductive Medicine', place: 'Dr. RML Hospital and PGIMER, New Delhi' },
    { role: 'Senior Resident, Obstetrics and Gynaecology', place: 'Dr. RML Hospital and PGIMER, New Delhi' },
    { role: 'Senior Resident, General Surgery', place: 'Pt. B.D. Sharma PGIMS, Rohtak' },
    { role: 'Resident (PG), General Surgery', place: 'Pt. B.D. Sharma PGIMS, Rohtak' },
];

const specializations = [
    { title: 'PCOS Related Infertility', desc: 'Lifestyle-first plans to letrozole cycles and IVF for resistant cases.' },
    { title: 'Repeated IVF Failure', desc: 'Re-evaluating embryo quality, uterine receptivity, and protocol design.' },
    { title: 'Recurrent Pregnancy Loss', desc: 'Genetic, anatomical, hormonal, and immunological workup after miscarriage.' },
    { title: 'Male Infertility & SSR', desc: 'ICSI plus surgical retrieval (TESA, PESA, Micro TESE) for azoospermia.' },
    { title: 'Fertility Enhancing Surgery', desc: 'Laparoscopic and hysteroscopic correction of endometriosis, fibroids, and polyps.' },
    { title: 'Advanced ART Techniques', desc: 'ICSI, blastocyst culture, vitrification, and preimplantation genetic testing.' },
];

const trustPoints = [
    { title: 'She tells the truth about your chances.', desc: 'No inflated promises, no fear-based selling — even when the news is hard.' },
    { title: 'She does her own procedures.', desc: 'Scans, retrievals, transfers, laparoscopies — the doctor you consult treats you.' },
    { title: 'Her advice is not for sale.', desc: 'If "wait three months" is the right answer, that\'s what you\'ll hear.' },
    { title: 'She publishes and teaches.', desc: '5+ peer reviewed publications — protocols follow evidence, not habit.' },
    { title: 'Patients rate the experience 4.9/5.', desc: 'Across 1,000+ verified reviews on Google and Practo.' },
];

const stats = [
    { icon: Users, value: '9,000+', label: 'Consultations' },
    { icon: BookOpen, value: '5+', label: 'Publications' },
    { icon: Trophy, value: '10+', label: 'Awards' },
    { icon: Award, value: '10+', label: 'Years Experience' },
];

export default function AboutPage() {
    return (
        <>
            {/* HERO */}
            <section className="cond-hero edge" data-bg="#f8fafc" data-theme="light">
                <div className="cond-hero-bg"></div>
                <div className="container-x relative text-center">
                    <div className="cond-breadcrumb justify-center">
                        <Link href="/">Home</Link>
                        <ChevronRight style={{ width: '14px', height: '14px' }} />
                        <span>About</span>
                    </div>
                    <div className="chip mb-6 mx-auto w-fit">
                        <span className="chip-dot"></span>About Your Doctor
                    </div>
                    <h1 className="display-sm text-slate-900 mb-6">
                        Medicine that remembers your name.
                    </h1>
                    <p className="body-lg text-slate-600 max-w-2xl mx-auto mb-10">
                        Over 10 years helping couples who were told it would be difficult. Her story, training, and approach.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/contact" className="btn btn-primary btn-lg">
                            <CalendarCheck2 className="w-4 h-4" /> Book a Free Consultation
                        </Link>
                        <Link href="/#testimonials" className="btn btn-ghost btn-lg">
                            See Patient Stories
                        </Link>
                    </div>
                </div>
            </section>

            {/* DOCTOR INTRODUCTION */}
            <section className="section edge">
                <div className="container-x">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                        <div className="lg:col-span-5">
                            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-slate-200 shadow-2xl max-w-lg mx-auto lg:mx-0">
                                <img src="/dr rashmi.jpg" alt="Dr. Rashmi Agrawal at the Gurugram centre" className="w-full h-full object-cover object-top" />
                            </div>
                        </div>
                        <div className="lg:col-span-7">
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">Dr. Rashmi Agrawal</h2>
                            <p className="text-pink-600 font-bold text-sm uppercase tracking-wider mb-8">
                                Senior IVF & Fertility Specialist — MBBS, MS (OBGY) Gold Medalist, DNB, FNB
                            </p>
                            <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed mb-12">
                                <p>Fertility medicine is the one branch where the outcome isn&apos;t just a cured patient — it&apos;s a family changed forever. That shapes how she works, consults, and treats.</p>
                                <p>She leads the Dr. Rashmi Agrawal IVF Centre in Gurugram: 9,000+ consultations, 3,000+ treatments, 5+ publications, and the Gold Medal in her MS.</p>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {stats.map((s, i) => (
                                    <div key={i} className="bg-slate-50 border border-slate-100 p-5 rounded-3xl text-center">
                                        <div className="w-10 h-10 bg-pink-50 text-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                                            <s.icon className="w-5 h-5" />
                                        </div>
                                        <p className="text-xl font-black text-slate-900">{s.value}</p>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{s.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BIOGRAPHY */}
            <section className="section edge bg-slate-50/60">
                <div className="container-x max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8">The Making of a Specialist</h2>
                    <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed">
                        <p>MBBS from Indira Gandhi Government Medical College (2012), then an MS in Obstetrics and Gynaecology, graduating Gold Medalist, an academic honour awarded to one postgraduate each year.</p>
                        <p>She then pursued a DNB followed by an FNB in Reproductive Medicine, New Delhi (2019) — India&apos;s most rigorous, full-time super specialisation in fertility, not a weekend course.</p>
                        <p>Residencies in General Surgery at PGIMS Rohtak and OBGYN at Dr. RML Hospital gave her the surgical foundation to operate her own laparoscopies and hysteroscopies today.</p>
                    </div>
                </div>
            </section>

            {/* QUALIFICATIONS + MEMBERSHIPS */}
            <section className="section edge">
                <div className="container-x">
                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-100 shadow-sm">
                            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <GraduationCap className="w-6 h-6 text-pink-600" /> Qualifications
                            </h3>
                            <ul className="space-y-4">
                                {qualifications.map((q, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" />
                                        <span className="text-slate-600">{q}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-100 shadow-sm">
                            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <ShieldCheck className="w-6 h-6 text-pink-600" /> Professional Memberships
                            </h3>
                            <ul className="space-y-4">
                                {memberships.map((m, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" />
                                        <span className="text-slate-600">{m}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* EXPERIENCE */}
            <section className="section edge bg-slate-50/60">
                <div className="container-x">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-10">Where She Has Practised</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {experience.map((e, i) => (
                            <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex gap-4">
                                <div className="shrink-0 w-10 h-10 bg-pink-50 rounded-xl flex items-center justify-center text-pink-600">
                                    <Building2 className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 text-sm leading-snug">{e.role}</p>
                                    <p className="text-slate-500 text-sm mt-1">{e.place}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-slate-500 mt-10 max-w-3xl leading-relaxed">
                        Government teaching hospitals to major private chains — fertility medicine from every side.
                    </p>
                </div>
            </section>

            {/* SPECIALIZATIONS */}
            <section className="section edge">
                <div className="container-x">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-10">Areas of Special Expertise</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {specializations.map((s, i) => (
                            <div key={i} className="p-7 rounded-3xl bg-slate-50/50 border border-transparent hover:border-pink-100 hover:bg-white hover:shadow-xl hover:shadow-pink-500/5 transition-all">
                                <h4 className="font-bold text-slate-900 mb-2.5">{s.title}</h4>
                                <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* APPROACH TO TREATMENT */}
            <section className="section edge bg-slate-950 text-white relative overflow-hidden" data-bg="#020617" data-theme="dark">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />
                <div className="container-x relative z-10 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-black mb-10">How Dr. Rashmi Practises</h2>
                    <div className="space-y-6 text-slate-300 text-base md:text-lg leading-relaxed">
                        <p><strong className="text-white">Diagnosis before treatment, always.</strong> One in four couples referred for IVF elsewhere need something simpler. Every plan starts with evaluating both partners.</p>
                        <p><strong className="text-white">The least invasive option that works.</strong> Escalation is a ladder, not an elevator — lifestyle, then IUI, then IVF only when truly needed.</p>
                        <p><strong className="text-white">One accountable doctor.</strong> Every dose, every judgement call, made by Dr. Rashmi personally — never delegated down a hierarchy.</p>
                    </div>
                </div>
            </section>

            {/* MISSION + VISION */}
            <section className="section edge">
                <div className="container-x">
                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="bg-pink-50 p-8 md:p-10 rounded-[2rem] border border-pink-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Our Mission</h3>
                            <p className="text-slate-600 leading-relaxed">
                                An honest diagnosis, a clear plan, and an evidence-based chance of taking a healthy baby home — with dignity at every step.
                            </p>
                        </div>
                        <div className="bg-slate-50 p-8 md:p-10 rounded-[2rem] border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Our Vision</h3>
                            <p className="text-slate-600 leading-relaxed">
                                A North India where no couple gives up on parenthood over misinformation or cost — trustworthy fertility knowledge, freely available.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY PATIENTS TRUST HER */}
            <section className="section edge bg-slate-50/60">
                <div className="container-x">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-10">Why Patients Trust Her</h2>
                    <div className="grid md:grid-cols-2 gap-5">
                        {trustPoints.map((p, i) => (
                            <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex gap-4">
                                <Star className="w-5 h-5 text-pink-500 shrink-0 mt-1" />
                                <div>
                                    <p className="font-bold text-slate-900 mb-1.5">{p.title}</p>
                                    <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA BANNER */}
            <section className="cta-band edge section-tight" data-bg="#ef8b92" data-theme="dark">
                <div className="container-x relative text-center">
                    <h2 className="display-sm mb-6" style={{ color: '#fff' }}>Consult the Doctor, Not the Brand</h2>
                    <p className="body-lg mb-10 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.85)' }}>
                        A 45-minute, unhurried first consultation: history, reports, ultrasound, and a clear plan.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link href="/contact" className="btn btn-white btn-lg">
                            <CalendarCheck2 className="w-4 h-4" /> Book Your Free Consultation
                        </Link>
                        <a
                            href="https://wa.me/918800263884"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-lg"
                            style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}
                        >
                            <MessageCircle className="w-4 h-4" /> WhatsApp Us
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

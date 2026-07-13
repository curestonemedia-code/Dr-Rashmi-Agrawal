import type { Metadata } from 'next';
import Link from 'next/link';
import {
    GraduationCap, Award, Users, BookOpen, Trophy, Star, ShieldCheck,
    CalendarCheck2, MessageCircle, CheckCircle2, Building2, ChevronRight,
} from 'lucide-react';

export const metadata: Metadata = {
    title: 'Dr. Rashmi Agarwal | IVF Specialist in Gurgaon | About',
    description: 'Meet Dr. Rashmi Agarwal: MS OBGYN (Gold Medalist), DNB, FNB Reproductive Medicine. 10+ years of experience, 9,000+ consultations, 5+ publications. Advanced fertility care in Gurugram.',
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
    { role: 'Chief IVF Specialist and Founder', place: 'Dr. Rashmi Agarwal IVF Centre, Gurugram' },
    { role: 'Visiting Consultant, IVF and Fertility', place: 'Apollo Hospital, Delhi' },
    { role: 'Senior Consultant, IVF', place: 'Max Hospital, Shalimar Bagh, New Delhi' },
    { role: 'Consultant, OBGYN and Reproductive Medicine', place: 'Dr. RML Hospital and PGIMER, New Delhi' },
    { role: 'Senior Resident, Obstetrics and Gynaecology', place: 'Dr. RML Hospital and PGIMER, New Delhi' },
    { role: 'Senior Resident, General Surgery', place: 'Pt. B.D. Sharma PGIMS, Rohtak' },
    { role: 'Resident (PG), General Surgery', place: 'Pt. B.D. Sharma PGIMS, Rohtak' },
];

const specializations = [
    { title: 'PCOS Related Infertility', desc: 'From lifestyle first plans to letrozole cycles and IVF for resistant cases, with careful protocols that avoid ovarian hyperstimulation.' },
    { title: 'Repeated IVF Failure', desc: 'Structured re-evaluation of embryo quality, uterine receptivity, and protocol design for couples whose previous cycles have failed elsewhere.' },
    { title: 'Recurrent Pregnancy Loss', desc: 'Systematic investigation of genetic, anatomical, hormonal, and immunological causes after two or more miscarriages.' },
    { title: 'Male Infertility and Surgical Sperm Retrieval', desc: 'ICSI for severe male factor, and surgical retrieval (TESA, PESA, Micro TESE) for men with azoospermia who were told they could never father a child.' },
    { title: 'Fertility Enhancing Surgery', desc: 'Laparoscopic treatment of endometriosis, fibroids, ovarian cysts, and ectopic pregnancy; hysteroscopic correction of polyps, septum, and adhesions; sterilisation reversal.' },
    { title: 'Advanced ART Techniques', desc: 'ICSI, blastocyst culture, vitrification (egg and embryo freezing), and preimplantation genetic testing (PGT).' },
];

const trustPoints = [
    { title: 'She tells the truth about your chances.', desc: 'No inflated promises, no fear based selling. Patients regularly report that her honesty, even when the news was hard, is what made them stay.' },
    { title: 'She does her own procedures.', desc: 'Scans, egg retrievals, embryo transfers, laparoscopies: the doctor you consult is the doctor who treats you.' },
    { title: 'Her advice is not for sale.', desc: 'If the right answer is "wait three months," or "try naturally with these corrections first," that is the advice you get.' },
    { title: 'She publishes and teaches.', desc: 'With 5+ peer reviewed publications, her protocols follow evidence, not habit.' },
    { title: 'Patients rate the experience 4.9/5.', desc: 'Across 1,000+ verified reviews on Google and Practo, the words that repeat are "honest," "patient," and "explained everything."' },
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
                        Medicine With a Memory for Names, Not Just Case Numbers
                    </h1>
                    <p className="body-lg text-slate-600 max-w-2xl mx-auto mb-10">
                        Dr. Rashmi Agarwal has spent over 10 years doing one thing: helping couples who were told it would be difficult. Here is her story, her training, and the way she practises.
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
                                <img src="/dr rashmi.jpg" alt="Dr. Rashmi Agarwal at the Gurugram centre" className="w-full h-full object-cover object-top" />
                            </div>
                        </div>
                        <div className="lg:col-span-7">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Dr. Rashmi Agarwal</h2>
                            <p className="text-pink-600 font-bold text-sm uppercase tracking-wider mb-8">
                                Senior IVF and Fertility Specialist — MBBS, MS (OBGY) Gold Medalist, DNB, FNB Reproductive Medicine — Gurugram and Delhi NCR
                            </p>
                            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed mb-12">
                                <p>Some doctors choose fertility medicine because it is a growing field. Dr. Rashmi chose it because it is the one branch of medicine where the outcome is not just a cured patient, it is a new person in the world, and a family changed forever. That responsibility shapes everything about how she works: the length of her consultations, the honesty of her counselling, and her insistence on personally supervising every step of every treatment.</p>
                                <p>Today she leads the Dr. Rashmi Agarwal IVF Centre in Gurugram, where she has completed more than 9,000 consultations and 3,000 fertility treatments, from first cycle ovulation induction to complex IVF after repeated failures elsewhere. Her clinical judgement is matched by an academic record of 5+ publications in national and international journals and more than 10 awards, including the Gold Medal in her MS in Obstetrics and Gynaecology.</p>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">The Making of a Fertility Specialist</h2>
                    <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed">
                        <p>Dr. Rashmi&apos;s medical journey began at Indira Gandhi Government Medical College, Maharashtra, where she completed her MBBS in 2012. She went on to earn her Master of Surgery in Obstetrics and Gynaecology from Government Medical College, Maharashtra, in 2015, graduating as a Gold Medalist, a distinction awarded to the top ranked postgraduate of the year.</p>
                        <p>Rather than stopping at general gynaecology, she pursued the most demanding path in the field: the Diplomate of National Board (DNB) in Obstetrics and Gynaecology, followed by the Fellowship of National Board (FNB) in Reproductive Medicine in New Delhi, completed in 2019. The FNB is India&apos;s most rigorous formal super specialisation in fertility medicine, a full time, examination based national fellowship, not a weekend certificate course. It is what separates a trained reproductive medicine specialist from a gynaecologist who also does IVF.</p>
                        <p>Her training years included residencies in both General Surgery at Pt. B.D. Sharma PGIMS, Rohtak, and Obstetrics and Gynaecology at Dr. RML Hospital and PGIMER, New Delhi, two of North India&apos;s busiest teaching hospitals. That surgical foundation is why she operates her own laparoscopies and hysteroscopies today instead of referring them out.</p>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10">Where She Has Practised</h2>
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
                        Experience across government teaching hospitals and major private chains means Dr. Rashmi has seen fertility medicine from every side: high volume, high complexity, and high accountability.
                    </p>
                </div>
            </section>

            {/* SPECIALIZATIONS */}
            <section className="section edge">
                <div className="container-x">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10">Areas of Special Expertise</h2>
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
                    <h2 className="text-3xl md:text-4xl font-bold mb-10">How Dr. Rashmi Practises</h2>
                    <div className="space-y-8 text-slate-300 text-base md:text-lg leading-relaxed">
                        <p><strong className="text-white">Diagnosis before treatment, always.</strong> Around one in four couples referred for IVF elsewhere turns out to need something simpler, or something different entirely. Every plan at this centre begins with a complete evaluation of both partners, because treating half a couple is treating half the problem.</p>
                        <p><strong className="text-white">The least invasive option that genuinely works.</strong> Escalation is a ladder, not an elevator: lifestyle correction and ovulation induction where appropriate, IUI where the evidence supports it, and IVF or ICSI when the diagnosis truly calls for it. You will always be told the reasoning, the realistic chance of success for your case, and the cost in writing before anything begins.</p>
                        <p><strong className="text-white">One accountable doctor.</strong> Fertility treatment involves dozens of small judgement calls: a dose adjusted here, a transfer postponed there. Those calls are made by Dr. Rashmi personally, not delegated down a hierarchy. When you message the clinic, the answer that comes back has her judgement behind it.</p>
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
                                To give every couple an honest diagnosis, a clear plan, and an evidence based chance of taking a healthy baby home, while treating them with the dignity, transparency, and warmth they deserve at the most vulnerable time of their lives.
                            </p>
                        </div>
                        <div className="bg-slate-50 p-8 md:p-10 rounded-[2rem] border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Our Vision</h3>
                            <p className="text-slate-600 leading-relaxed">
                                A North India where no couple abandons their dream of parenthood because of misinformation, fear of cost, or a bad first experience, and where trustworthy fertility knowledge is freely available to everyone, in their own language, before they ever step into a clinic. That is also why Dr. Rashmi invests heavily in free patient education online.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY PATIENTS TRUST HER */}
            <section className="section edge bg-slate-50/60">
                <div className="container-x">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10">Why Patients Trust Her</h2>
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
                        Your first free consultation with Dr. Rashmi is a 45 minute, unhurried conversation: history, reports, ultrasound assessment, and a clear plan. Bring your questions and every old report you have.
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

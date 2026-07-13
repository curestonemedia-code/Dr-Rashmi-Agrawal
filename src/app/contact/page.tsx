import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MessageCircle, MapPin, Clock, Mail, AlertTriangle, ChevronRight } from 'lucide-react';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
    title: 'Contact Dr. Rashmi Agarwal IVF Centre | Gurgaon',
    description: 'Contact Dr. Rashmi Agarwal IVF Centre in Gurugram. Get our clinic address, phone number, WhatsApp details, hours, and find out how to book your free fertility consultation.',
};

const contactCards = [
    { icon: Phone, label: 'Call', value: '+91 88002 63884', href: 'tel:+918800263884' },
    { icon: MessageCircle, label: 'WhatsApp', value: 'Message Us', href: 'https://wa.me/918800263884', external: true },
    { icon: Mail, label: 'Email', value: 'Cure@thecurestone.com', href: 'mailto:Cure@thecurestone.com' },
];

const steps = [
    { title: 'Reach out', desc: 'Call or WhatsApp +91 88002 63884. Our coordinator responds the same day, usually within the hour.' },
    { title: 'Share your details', desc: 'Name, age, brief history, and any previous reports you have. WhatsApp photos of reports are welcome for a free preliminary review.' },
    { title: 'Confirmation', desc: 'You receive a confirmed date, time, and a short checklist of what to bring.' },
    { title: 'Your consultation', desc: 'Arrive ten minutes early. Bring every old report, scan and prescription, even from years ago. Dr. Rashmi reads them all.' },
];

export default function ContactPage() {
    return (
        <>
            {/* HERO */}
            <section className="cond-hero edge" data-bg="#f8fafc" data-theme="light">
                <iframe
                    src="https://maps.google.com/maps?q=Nova%20IVF%2C%20Plot%20No.%20522%2C%20Sector%2027%2C%20Gurugram%2C%20Haryana%20122009&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="pointer-events-none absolute inset-0 h-full w-full scale-110 border-0 opacity-15 grayscale"
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    tabIndex={-1}
                    aria-hidden="true"
                    title="Dr. Rashmi Agarwal IVF Centre map background"
                />
                <div className="container-x relative text-center">
                    <div className="cond-breadcrumb justify-center">
                        <Link href="/">Home</Link>
                        <ChevronRight style={{ width: '14px', height: '14px' }} />
                        <span>Contact</span>
                    </div>
                    <div className="chip mb-6 mx-auto w-fit">
                        <span className="chip-dot"></span>Contact Us
                    </div>
                    <h1 className="display-sm text-slate-900 mb-6">We Are Here When You Are Ready</h1>
                    <p className="body-lg text-slate-600 max-w-2xl mx-auto">
                        A phone call, a WhatsApp message, or a walk in. However you prefer to reach us, we respond the same day. No call centre runaround; you reach the team that actually handles your care.
                    </p>
                </div>
            </section>

            {/* CONTACT CARDS + FORM */}
            <section className="section-tight edge">
                <div className="container-x">
                    <div className="grid md:grid-cols-3 gap-6 mb-16">
                        {contactCards.map((card) => (
                            <a
                                key={card.label}
                                href={card.href}
                                target={card.external ? '_blank' : undefined}
                                rel={card.external ? 'noopener noreferrer' : undefined}
                                className="group bg-white border border-slate-100 p-8 rounded-3xl text-center shadow-sm hover:shadow-md hover:border-pink-100 transition-all"
                            >
                                <div className="w-14 h-14 bg-pink-50 text-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                                    <card.icon className="w-6 h-6" />
                                </div>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{card.label}</p>
                                <p className="text-lg font-bold text-slate-900">{card.value}</p>
                            </a>
                        ))}
                    </div>

                    <div className="grid lg:grid-cols-2 gap-10 items-start">
                        <div className="space-y-6">
                            <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm">
                                <div className="w-full h-72 bg-slate-100">
                                    <iframe
                                        title="Clinic location map"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        src="https://maps.google.com/maps?q=Nova%20IVF%2C%20Plot%20No.%20522%2C%20Sector%2027%2C%20Gurugram%2C%20Haryana%20122009&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                    />
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-pink-600 rounded-2xl flex items-center justify-center text-white shrink-0">
                                    <MapPin size={22} />
                                </div>
                                <div>
                                    <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.15em] mb-1">Clinic Location</p>
                                    <p className="text-lg font-bold text-slate-900">Dr. Rashmi Agarwal IVF Centre</p>
                                    <p className="text-slate-600 mt-1">Nova IVF, Plot No. 522, near Supermarket, Sector 27, Gurugram, Haryana 122009</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-pink-600 rounded-2xl flex items-center justify-center text-white shrink-0">
                                    <Clock size={22} />
                                </div>
                                <div>
                                    <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.15em] mb-1">Clinic Hours</p>
                                    <p className="text-slate-900 font-bold">Monday – Saturday, 10:00 AM to 6:00 PM</p>
                                    <p className="text-slate-600 mt-1">Sunday: Closed (emergencies handled on WhatsApp)</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center text-white shrink-0">
                                    <AlertTriangle size={22} />
                                </div>
                                <div>
                                    <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.15em] mb-1">Urgent or After Hours Concerns</p>
                                    <p className="text-slate-600 leading-relaxed text-sm">
                                        If you are a current patient experiencing severe abdominal pain, heavy bleeding, breathlessness or any emergency symptom during your treatment cycle, message us on WhatsApp with a brief description. For a life threatening emergency, call 112 or go to the nearest emergency department first, then inform us.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-50 border border-slate-100 rounded-[2rem] p-8 md:p-10">
                            <h2 className="heading-sm text-slate-900 mb-2">Send Us a Message</h2>
                            <p className="text-slate-500 mb-8">
                                Fill in the form below and our team will get back to you within 24 hours. For faster response, call or WhatsApp +91 88002 63884.
                            </p>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* APPOINTMENT PROCESS */}
            <section className="section edge bg-slate-50/60">
                <div className="container-x">
                    <h2 className="heading text-slate-900 mb-10">How to Book Your Appointment</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {steps.map((s, i) => (
                            <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                                <div className="w-10 h-10 rounded-full bg-pink-50 text-pink-600 flex items-center justify-center font-bold text-sm mb-4">
                                    {String(i + 1).padStart(2, '0')}
                                </div>
                                <p className="font-bold text-slate-900 mb-2">{s.title}</p>
                                <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* OUTSTATION */}
            <section className="section edge">
                <div className="container-x max-w-3xl">
                    <h2 className="heading-sm text-slate-900 mb-4">Coming from Outside Gurugram?</h2>
                    <p className="text-slate-600 leading-relaxed">
                        Many of our patients travel from across North India and beyond. To make your visit efficient, WhatsApp your reports before travelling, book a video consultation for the initial discussion, and we will schedule your in person visits for only the essential steps. Our coordinator helps with local accommodation recommendations if needed.
                    </p>
                </div>
            </section>

            {/* CTA BANNER */}
            <section className="cta-band edge section-tight" data-bg="#ef8b92" data-theme="dark">
                <div className="container-x relative text-center">
                    <h2 className="display-sm mb-6" style={{ color: '#fff' }}>One Call. One Appointment. One Clear Plan.</h2>
                    <p className="body-lg mb-10 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.85)' }}>
                        Stop researching and start knowing. Your first free consultation gives you a diagnosis, a treatment plan, and a written cost estimate, all in one visit.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <a href="tel:+918800263884" className="btn btn-white btn-lg">
                            <Phone className="w-4 h-4" /> Call: +91 88002 63884
                        </a>
                        <a
                            href="https://wa.me/918800263884"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-lg"
                            style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}
                        >
                            <MessageCircle className="w-4 h-4" /> WhatsApp Now
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

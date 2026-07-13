'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { Award, GraduationCap, ShieldCheck, Star, Users, BookOpen, Trophy, History, Stethoscope, MapPin, CalendarCheck2, MessageCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function DoctorProfileSection() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            gsap.fromTo('.dp-fade-up',
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '#about-doctor',
                        start: 'top 75%'
                    }
                }
            );
        });
        return () => ctx.revert();
    }, []);

    const stats = [
        { label: "Consultations", value: "9K+", icon: Users },
        { label: "Publications", value: "5+", icon: BookOpen },
        { label: "Awards Won", value: "10+", icon: Trophy },
        { label: "Years Experience", value: "10+", icon: History },
    ];

    const expertises = [
        "In Vitro Fertilization (IVF)",
        "Intracytoplasmic Sperm Injection (ICSI)",
        "Intrauterine Insemination (IUI)",
        "Egg Freezing & Preservation",
        "PCOS & Endometriosis Care",
        "Male Infertility Treatment",
        "Preimplantation Genetic Testing (PGT)",
    ];

    const achievements = [
        {
            icon: Award,
            text: "High Success Rate IVF Treatments",
            subtext: "By - Dr. Rashmi Agarwal"
        },
        {
            icon: GraduationCap,
            text: "Gold Medalist in MS OBGYN",
            subtext: "Pt. B.D. Sharma, PGIMS"
        },
        {
            icon: ShieldCheck,
            text: "Pioneer of Advanced ICSI",
            subtext: "Leading fertility center providing comprehensive care."
        },
        {
            icon: Star,
            text: "4.9/5 Patient Satisfaction",
            subtext: "Based on 1,000+ verified patient reviews on Google & Practo"
        },
    ];

    return (
        <section id="about" className="section edge bg-slate-50/50" data-bg="#f8fafc" data-theme="light">
            <div id="about-doctor" className="container mx-auto px-5 md:px-12 lg:px-20">

                {/* Header Section */}
                <div className="text-center mb-16 dp-fade-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/80 backdrop-blur-sm border border-pink-100 rounded-full shadow-sm">
                        <span className="w-2 h-2 bg-pink-600 rounded-full animate-pulse"></span>
                        <span className="text-[11px] font-bold tracking-[0.1em] text-pink-700 uppercase">
                            Meet Your Specialist
                        </span>
                    </div>
                    <h2 className="display-sm text-slate-900 mb-6 font-bold">
                        Dr. Rashmi Agarwal : Senior IVF and <br className="hidden sm:block" />
                        <span className="text-pink-600">Fertility Specialist</span>
                    </h2>
                    <p className="body-lg text-slate-600 max-w-2xl mx-auto">
                        Combining 10+ years of clinical excellence with the world&apos;s most advanced reproductive technologies for fertility treatment.
                    </p>
                </div>

                <div className="grid xl:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* LEFT: Portrait & Location Card */}
                    <div className="xl:col-span-5 relative w-full max-w-lg mx-auto xl:mx-0">
                        <div className="dp-fade-up relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-slate-200 shadow-2xl group">
                            <img
                                src="/dr rashmi.jpg"
                                alt="Dr. Rashmi Agarwal"
                                className="w-full h-full object-cover object-top scale-[1.02] group-hover:scale-[1.05] transition-transform duration-700 ease-out"
                            />
                            {/* Visual Overlays */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent pointer-events-none" />

                            {/* Bottom Overlay Content */}
                            <div className="absolute bottom-0 inset-x-0 p-8">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="flex text-amber-400">
                                        {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                                    </div>
                                    <span className="text-white text-xs font-bold tracking-wider uppercase">4.9 Patient Rating</span>
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-2">Dr. Rashmi Agarwal</h3>
                                <div className="flex flex-col gap-1">
                                    <p className="text-pink-200 text-sm font-bold">
                                        Senior IVF & Fertility Specialist
                                    </p>
                                    <p className="text-slate-300 text-xs font-medium leading-relaxed">
                                        MBBS MS(OBGY) DNB, FNB Reproductive Medicine
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Quick Contact Card */}
                        <div className="dp-fade-up mt-6 bg-white/70 backdrop-blur-md border border-slate-100 p-6 rounded-[2rem] shadow-sm max-w-2xl mx-auto xl:mx-0">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-pink-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-pink-200/50 shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.15em]">Primary Clinic Location</p>
                                    <p className="text-sm font-bold text-slate-800 mt-1">Gurugram & Delhi NCR Hubs</p>
                                </div>
                            </div>
                        </div>

                        {/* Decorative background element */}
                        <div className="absolute -inset-4 bg-gradient-to-tr from-pink-100/50 to-indigo-50/50 rounded-[3rem] -z-10 rotate-2 opacity-70"></div>
                    </div>

                    {/* RIGHT: Detailed Content */}
                    <div className="xl:col-span-7 flex flex-col justify-center pt-4">

                        {/* Professional Summary */}
                        <div className="dp-fade-up relative pl-6 border-l-2 border-pink-600 mb-12">
                            <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-3">
                                <Stethoscope className="w-6 h-6 text-pink-600" />
                                Expert Overview
                            </h4>
                            <div className="space-y-4">
                                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                    Dr. Rashmi Agarwal is a fellowship trained fertility specialist practising in Gurugram and Delhi NCR. Her qualifications (MBBS, MS in Obstetrics and Gynaecology (Gold Medalist), DNB, and FNB in Reproductive Medicine) reflect one of the most rigorous training pathways in Indian reproductive medicine. Over more than ten years of dedicated clinical practice, she has guided thousands of couples through everything from simple ovulation problems to repeated IVF failures and recurrent miscarriage.
                                </p>
                                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                    What sets her clinic apart is not just the advanced training. It is the core philosophy of her practice. She reviews your medical reports herself, explains every treatment option in plain language, tells you honestly when a simpler treatment is worth trying before IVF, and stays personally involved from your first scan to your early pregnancy. Her special interests include PCOS related infertility, repeated IVF failure, recurrent pregnancy loss, male infertility including advanced surgical sperm retrieval, and fertility enhancing keyhole surgeries.
                                </p>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="dp-fade-up grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
                            {stats.map((stat, i) => (
                                <div key={i} className="group bg-white border border-slate-100 p-6 rounded-3xl text-center shadow-sm hover:shadow-md hover:border-pink-100 transition-all">
                                    <div className="w-12 h-12 bg-pink-50 text-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                        <stat.icon className="w-6 h-6" />
                                    </div>
                                    <p className="text-2xl font-black text-slate-900 tracking-tight">{stat.value}</p>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* Achievements Section */}
                        <div className="dp-fade-up mb-12">
                            <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Distinguished Achievements</p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {achievements.map((item, i) => (
                                    <div key={i} className="flex gap-4 p-5 bg-white border border-slate-100 rounded-3xl transition-all hover:border-pink-100 shadow-sm">
                                        <div className="shrink-0 w-10 h-10 bg-pink-50 rounded-xl flex items-center justify-center text-pink-600">
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-[13px] font-black text-slate-900 leading-tight mb-1">{item.text}</p>
                                            <p className="text-[11px] font-semibold text-slate-500 leading-normal">{item.subtext}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Expertise Pills */}
                        <div className="dp-fade-up mb-12">
                            <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Surgical Expertise</p>
                            <div className="flex flex-wrap gap-2.5">
                                {expertises.map((exp, i) => (
                                    <span key={i} className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-700 hover:border-pink-600 hover:text-pink-700 hover:bg-pink-50 transition-all cursor-default group shadow-sm">
                                        <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                                        {exp}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="dp-fade-up flex flex-col sm:flex-row gap-4 pt-4">
                            <a href="/contact" className="flex-1 px-8 py-4 bg-pink-600 text-white text-sm font-black rounded-full hover:bg-pink-700 transition-all flex items-center justify-center gap-3 shadow-lg shadow-pink-600/20 active:scale-[0.98]">
                                <CalendarCheck2 className="w-5 h-5" />
                                Book Consultation Free
                            </a>
                            <a href="https://wa.me/918800263884" target="_blank" rel="noreferrer" className="flex-1 px-8 py-4 bg-white border-2 border-slate-200 text-slate-800 text-sm font-black rounded-full hover:border-green-500 hover:bg-green-50 hover:text-green-700 transition-all flex items-center justify-center gap-3 shadow-sm active:scale-[0.98]">
                                <MessageCircle className="w-5 h-5 text-green-600" />
                                WhatsApp Report
                            </a>
                            <Link href="/about" className="flex-1 px-8 py-4 bg-white border-2 border-slate-200 text-slate-800 text-sm font-black rounded-full hover:border-pink-300 hover:bg-pink-50 hover:text-pink-700 transition-all flex items-center justify-center gap-3 shadow-sm active:scale-[0.98]">
                                Read Dr. Rashmi&apos;s Full Story
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

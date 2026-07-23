'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { Award, GraduationCap, Star, Users, BookOpen, Trophy, Stethoscope, MapPin, CalendarCheck2, MessageCircle } from 'lucide-react';
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
        { label: "Consultations", value: "9,000+", icon: Users },
        { label: "Publications", value: "5+", icon: BookOpen },
        { label: "Awards", value: "10+", icon: Trophy },
        { label: "Years Experience", value: "10+", icon: Award },
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
            text: "Dainik Jagran Health Icon Award 2024",
            subtext: "Reproductive Medicine"
        },
        {
            icon: GraduationCap,
            text: "Gold Medalist in MBBS",
            subtext: "Indira Gandhi Government Medical College, Nagpur"
        },
        {
            icon: Trophy,
            text: "1st Rank, IFS Fellowship Entrance Exam",
            subtext: "Indian Fertility Society, 2017"
        },
        {
            icon: Star,
            text: "5/5 Patient Satisfaction",
            subtext: "Verified patient reviews on Google"
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
                    <h2 className="display-sm text-slate-900 mb-6 font-black! max-md:leading-11!">
                        Meet Dr. Rashmi Agrawal, <br className="hidden sm:block" />
                        <span className="text-pink-600">Your Fertility Specialist</span>
                    </h2>
                    <p className="body-lg text-slate-600 max-w-2xl mx-auto">
                        10+ years of clinical excellence, backed by advanced reproductive technology.
                    </p>
                </div>

                <div className="grid xl:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* LEFT: Portrait & Location Card */}
                    <div className="xl:col-span-5 relative w-full max-w-lg mx-auto xl:mx-0">
                        <div className="dp-fade-up relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-slate-200 shadow-2xl group">
                            <img
                                src="/dr rashmi.jpg"
                                alt="Dr. Rashmi Agrawal"
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
                                    <span className="text-white text-xs font-bold tracking-wider uppercase">5.0 Patient Rating</span>
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-2">Dr. Rashmi Agrawal</h3>
                                <div className="flex flex-col gap-1">
                                    <p className="text-pink-200 text-sm font-bold">
                                        Senior IVF & Fertility Specialist
                                    </p>
                                    <p className="text-slate-300 text-xs font-medium leading-relaxed">
                                        MBBS (Gold Medalist), MS (OBGY) DNB, FNB Reproductive Medicine
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
                                    <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.15em]">Clinic Location</p>
                                    <Link href={'https://maps.app.goo.gl/iASSY9GwRZZTEoR27'} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm font-bold text-slate-800 hover:text-pink-600 transition-all">
                                    <p className="text-sm font-bold text-slate-800 mt-1 underline">Gurugram</p>
                                    </Link>
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
                            <div className="space-y-4 text-justify">
                                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                    Fertility medicine is the one branch where the outcome isn&apos;t just a cured patient — it&apos;s a family changed forever. That shapes how she works, consults, and treats.
                                </p>
                                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                    Her practice in Gurugram spans 9,000+ consultations, 3,000+ treatments, and 5+ publications — alongside the Gold Medal earned in her MBBS.
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
                                Book Free Consultation
                            </a>
                            <a href="https://wa.me/919811775369" target="_blank" rel="noreferrer" className="flex-1 px-8 py-4 bg-white border-2 border-slate-200 text-slate-800 text-sm font-black rounded-full hover:border-green-500 hover:bg-green-50 hover:text-green-700 transition-all flex items-center justify-center gap-3 shadow-sm active:scale-[0.98]">
                                <MessageCircle className="w-5 h-5 text-green-600" />
                                WhatsApp Report
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

'use client';
import React, { useEffect, useRef } from 'react';
import { Calendar, ArrowRight, Award, ShieldCheck, Activity, Zap, Medal, HeartPulse } from 'lucide-react';
import gsap from 'gsap';

export default function HeroSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        // Entrance animations
        const ctx = gsap.context(() => {
            gsap.to('.hero-line', {
                y: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out',
                delay: 0.2
            });
            gsap.to('.fade-up', {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power2.out',
                delay: 0.6
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            {/* ── HERO ── */}
            <section
                id="top"
                ref={sectionRef}
                className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-white pt-24 lg:pt-28"
                data-bg="#ffffff"
                data-theme="light"
            >
                {/* Background Video */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <iframe
                        src="https://www.youtube.com/embed/yJONw4bEcNw?autoplay=1&mute=1&controls=0&loop=1&playlist=yJONw4bEcNw&modestbranding=1&playsinline=1&rel=0"
                        className="absolute top-1/2 left-1/2 w-[150vw] h-[150vh] min-w-[100vw] min-h-[100vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-80"
                        allow="autoplay; encrypted-media"
                        frameBorder="0"
                    />
                    <div className="absolute inset-0 bg-white/70" />
                </div>

                {/* Background Grid Pattern */}
                <div
                    className="absolute inset-0 pointer-events-none z-0 opacity-40"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, rgba(226, 232, 240, 0.5) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(226, 232, 240, 0.5) 1px, transparent 1px)
                        `,
                        backgroundSize: '60px 60px'
                    }}
                />

                {/* Ambient Glow Orbs */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-pink-300/15 blur-3xl pointer-events-none -translate-y-1/3 translate-x-1/4" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-indigo-200/20 blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/4" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-pink-50/30 blur-3xl pointer-events-none" />

                <div className="container mx-auto px-5 md:px-12 lg:px-20 relative z-10 py-20 md:py-0">
                    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center min-h-[calc(100dvh-10rem)] md:min-h-0">

                        {/* Left Content Column */}
                        <div className="lg:col-span-7 flex flex-col justify-center">

                            {/* Blue badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50/80 border border-pink-100/50 mb-6 fade-up opacity-0 translate-y-4 w-fit">
                                <span className="w-2 h-2 rounded-full bg-pink-600 animate-pulse"></span>
                                <span className="text-[11px] font-bold uppercase tracking-wider text-pink-600">MS OBGYN (Gold Medalist)</span>
                            </div>

                            {/* Headline */}
                            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] font-bold text-slate-900 tracking-tight leading-[1.05] mb-6 font-sans">
                                <div className="overflow-hidden">
                                    <span className="hero-line block" style={{ transform: 'translateY(110%)' }}>
                                        Leading advanced
                                    </span>
                                </div>
                                <div className="overflow-hidden mt-2">
                                    <span className="hero-line block" style={{ transform: 'translateY(110%)' }}>
                                        <span className="text-[#e11d48]">IVF & ICSI</span> treatments.
                                    </span>
                                </div>
                            </h1>

                            {/* Separation Line & Doctor Signature */}
                            <div className="flex items-center gap-3 mb-6 fade-up opacity-0 translate-y-4">
                                <span className="w-12 h-0.5 bg-[#ef8b92] rounded-full"></span>
                                <span className="text-sm font-bold uppercase tracking-wider text-slate-700">By Dr. Rashmi Agarwal</span>
                            </div>

                            {/* Body Text */}
                            <p className="text-base md:text-lg text-slate-700 max-w-xl leading-relaxed mb-8 fade-up opacity-0 translate-y-4">
                                Pioneering advanced fertility treatments in North India. Over 10,000 successful IVF cycles performed with compassionate care and evidence-based medicine.
                            </p>

                            {/* CTA Button Actions */}
                            <div className="flex flex-wrap items-center gap-4 fade-up opacity-0 translate-y-4 mb-10">
                                <a
                                    href="#book"
                                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#ef8b92] text-white text-sm font-semibold hover:bg-pink-700 transition-all hover:scale-105 hover:shadow-lg hover:shadow-pink-600/20 active:scale-95"
                                >
                                    <Calendar style={{ width: '18px', height: '18px' }} />
                                    <span>Book a Consultation</span>
                                </a>
                                <a
                                    href="#cases"
                                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-50 hover:border-slate-300 hover:scale-105 active:scale-95 transition-all shadow-sm"
                                >
                                    <span>Patient Stories</span>
                                    <ArrowRight style={{ width: '16px', height: '16px' }} />
                                </a>
                            </div>

                            {/* Key Stats Metrics */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 fade-up opacity-0 translate-y-4">
                                {[
                                    { val: '21,000+', label: 'Consultations' },
                                    { val: '9,500+', label: 'Treatments', accent: true },
                                    { val: '40+', label: 'Awards' },
                                    { val: '25+', label: 'Publications' },
                                ].map(({ val, label, accent }) => (
                                    <div key={label} className="relative">
                                        <div className={`text-2xl md:text-3xl font-extrabold tracking-tight ${accent ? 'text-pink-600' : 'text-slate-900'}`}>{val}</div>
                                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-1">{label}</div>
                                        {accent && <div className="absolute -top-1 -right-1 w-2 h-2 bg-pink-400 rounded-full animate-pulse" />}
                                    </div>
                                ))}
                            </div>
                        </div>


                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Scroll</span>
                    <div className="w-5 h-8 rounded-full border-2 border-slate-300 flex justify-center pt-1.5">
                        <div className="w-1 h-2 bg-slate-400 rounded-full animate-pulse" />
                    </div>
                </div>
            </section>

            {/* ── TRUST STRIP ── */}
            <div className="border-t border-b border-slate-200/60 bg-slate-50/80 backdrop-blur-sm py-5" data-bg="#f5f7ff" data-theme="light">
                <div className="container mx-auto px-5 md:px-12 lg:px-20">
                    <div className="flex flex-wrap items-center justify-center md:justify-between gap-y-4 gap-x-8 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        {[
                            { Icon: Award, text: 'MS OBGYN Gold Medalist' },
                            { Icon: ShieldCheck, text: 'Advanced IVF Pioneer' },
                            { Icon: Activity, text: '21,000+ Consultations' },
                            { Icon: Zap, text: 'ICSI & Genetic Testing' },
                            { Icon: Medal, text: 'Best Fertility Center' },
                            { Icon: HeartPulse, text: 'High Success Rate' },
                        ].map((item, i) => (
                            <span key={i} className="flex items-center gap-2 hover:text-slate-700 transition-colors">
                                <item.Icon className="text-pink-600" style={{ width: '16px', height: '16px' }} />
                                <span>{item.text}</span>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
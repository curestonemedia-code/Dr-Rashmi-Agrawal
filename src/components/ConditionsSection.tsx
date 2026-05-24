'use client';
import React from 'react';
import Link from 'next/link';
import { Baby, TestTube, ScanSearch, Stethoscope, Syringe, TestTube2, CalendarRange } from 'lucide-react';

export default function ConditionsSection() {
    const conditions = [
        {
            href: '/treatments/ivf',
            Icon: Baby,
            title: 'IVF',
        },
        {
            href: '/treatments/insemination',
            Icon: TestTube,
            title: 'Insemination',
        },
        {
            href: '/treatments/hsg',
            Icon: ScanSearch,
            title: 'HSG',
        },
        {
            href: '/treatments/hysteroscopy-laproscopy',
            Icon: Stethoscope,
            title: 'Hysteroscopy and laproscopy surgeries',
        },
        {
            href: '/treatments/icsi',
            Icon: Syringe,
            title: 'Intracytoplasmic Sperm Injection',
        },
        {
            href: '/treatments/iui',
            Icon: TestTube2,
            title: 'IUI',
        },
        {
            href: '/treatments/ovulation-induction',
            Icon: CalendarRange,
            title: 'Ovulation Induction and Cycle Monitoring',
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
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-[-0.035em] text-slate-900 leading-[1.1] font-sans">
                        Conditions
                    </h2>
                    <p className="text-base md:text-lg text-slate-500 mt-5 max-w-2xl mx-auto leading-relaxed font-normal">
                        Comprehensive fertility treatments and advanced reproductive care.
                    </p>
                </div>

                {/* Minimal Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">
                    {conditions.map(({ href, Icon, title }) => {
                        return (
                            <Link
                                key={title}
                                href={href}
                                className="group flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50/50 hover:bg-white border border-transparent hover:border-pink-100 hover:shadow-xl hover:shadow-pink-500/5 transition-all duration-300 hover:-translate-y-1"
                            >
                                {/* Icon Container */}
                                <div className="w-16 h-16 rounded-2xl bg-transparent flex items-center justify-center mb-6 text-pink-400 group-hover:text-pink-600 transition-colors duration-300">
                                    <Icon className="w-10 h-10" strokeWidth={1.2} />
                                </div>

                                {/* Title */}
                                <h3 className="text-sm md:text-base font-bold text-slate-900 tracking-tight leading-snug">
                                    {title}
                                </h3>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

'use client';
import React from 'react';

export default function CarePathwaySection() {
    const steps = [
        {
            num: '01',
            phase: 'Evaluation',
            title: 'Consultation and Diagnosis',
            desc: 'An unhurried first visit — history, reports, ultrasound, and only the tests you actually need.',
            img: '/1.jpeg',
            alt: 'Diagnostics',
            stats: [
                { val: 'USG', label: 'Modality' },
                { val: '45 min', label: 'Session' },
                { val: 'Tailored', label: 'Plan', accent: true },
            ],
            theme: 'dark',
        },
        {
            num: '02',
            phase: 'The Plan',
            title: 'Your Personalised Plan',
            desc: 'A clear, written plan — treatment path, realistic expectations, and full cost in writing.',
            img: '/2.jpeg',
            alt: 'Personalised plan',
            stats: [
                { val: 'Written', label: 'Plan' },
                { val: 'Clear', label: 'Cost' },
                { val: 'Honest', label: 'Advice', accent: true },
            ],
            theme: 'dark',
        },
        {
            num: '03',
            phase: 'Treatment',
            title: 'Supervised Treatment',
            desc: 'Every scan, dose, and procedure performed directly by Dr. Rashmi — start to finish.',
            img: '/3.jpeg',
            alt: 'Supervised treatment',
            stats: [
                { val: 'IVF & ICSI', label: 'Protocols' },
                { val: 'High', label: 'Success' },
                { val: 'Expert', label: 'Care', accent: true },
            ],
            theme: 'dark',
        },
        {
            num: '04',
            phase: 'Support',
            title: 'Continuous Care and Support',
            desc: 'WhatsApp access throughout your cycle, plus early pregnancy scans before a safe handover.',
            img: '/4.png',
            alt: 'Continuous support',
            stats: [
                { val: 'Close', label: 'Monitoring' },
                { val: 'WhatsApp', label: 'Support' },
                { val: 'Joyful', label: 'Outcome', accent: true },
            ],
            theme: 'dark',
        },
    ];

    return (
        <section id="pathway" className="py-10 md:py-10 bg-white overflow-hidden relative">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-pink-50/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-[1440px] mx-auto px-5 md:px-12 lg:px-16 relative">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 md:mb-16 gap-6">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-2 mb-5">
                            <span className="w-2 h-2 rounded-full bg-pink-600 animate-pulse"></span>
                            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-pink-600">
                                The Care Pathway
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-[3rem] font-black tracking-[-0.035em] text-slate-900 leading-[1.1] font-sans">
                            From diagnosis to delivery.
                        </h2>
                    </div>
                    <div className="hidden md:block pb-2">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">
                            Standard of Care — 2026
                        </p>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
                    {steps.map((step, i) => (
                        <div
                            key={step.num}
                            className={`group relative min-h-[480px] md:min-h-[520px] flex flex-col justify-end overflow-hidden rounded-3xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1.5 cursor-pointer
                                ${step.theme === 'dark'
                                    ? 'bg-slate-950 text-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]'
                                    : 'bg-slate-50 border border-slate-100 hover:border-slate-200'
                                }`}
                        >
                            {/* Background Image */}
                            <img
                                src={step.img}
                                alt={step.alt}
                                className={`absolute inset-0 w-full h-full ${i == 3 ? "" : "object-cover"} transition-all duration-700 group-hover:scale-105
                                    ${step.theme === 'dark'
                                        ? 'opacity-85 group-hover:opacity-45'
                                        : 'opacity-100  group-hover:opacity-35'
                                    }`}
                            />

                            {/* Dark overlay for dark theme */}
                            {step.theme === 'dark' && (
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                            )}

                            {/* Step Number Badge */}
                            <div className={`absolute top-6 left-6 w-10 h-10 rounded-full flex items-center justify-center border transition-colors duration-300
                                ${step.theme === 'dark'
                                    ? 'bg-white/10 border-white/15 group-hover:bg-white/20'
                                    : 'bg-pink-600/10 border-pink-600/20 group-hover:bg-pink-600/20'
                                }`}>
                                <span className={`text-[11px] font-bold tracking-tight ${step.theme === 'dark' ? 'text-pink-400' : 'text-pink-600'}`}>
                                    {step.num}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="relative z-10 p-7 md:p-8">
                                <span className={`block font-bold text-[10px] tracking-[0.25em] uppercase mb-3 ${step.theme === 'dark' ? 'text-pink-400' : 'text-pink-600'}`}>
                                    {step.phase}
                                </span>

                                <h3 className={`text-2xl md:text-[1.75rem] font-bold mb-3 tracking-tight ${step.theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                                    {step.title}
                                </h3>

                                <p className={`leading-relaxed text-[15px] mb-6 transition-colors duration-500
                                    ${step.theme === 'dark'
                                        ? 'text-slate-400 group-hover:text-slate-200'
                                        : 'text-slate-500 group-hover:text-slate-700'
                                    }`}>
                                    {step.desc}
                                </p>

                                {/* Stats Row */}
                                <div className={`flex items-center gap-3 md:gap-4 pt-5 
                                    ${step.theme === 'dark' ? 'border-t border-white/10' : 'border-t border-slate-200'}`}>
                                    {step.stats.map((stat, i) => (
                                        <React.Fragment key={stat.label}>
                                            {i > 0 && (
                                                <div className={`w-px h-8 ${step.theme === 'dark' ? 'bg-white/10' : 'bg-slate-200'}`} />
                                            )}
                                            <div>
                                                <p className={`text-sm md:text-base font-semibold ${stat.accent ? (step.theme === 'dark' ? 'text-pink-400' : 'text-pink-600') : (step.theme === 'dark' ? 'text-white' : 'text-slate-900')}`}>
                                                    {stat.val}
                                                </p>
                                                <p className={`text-[10px] uppercase tracking-wider mt-0.5 ${step.theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>
                                                    {stat.label}
                                                </p>
                                            </div>
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>

                            {/* Bottom Accent Line */}
                            <div className={`absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl
                                ${step.theme === 'dark' ? 'bg-pink-500' : 'bg-pink-600'}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

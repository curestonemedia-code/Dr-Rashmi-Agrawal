'use client';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ExperienceAndMemberships() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.fromTo('.exp-card',
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: '#experience-section',
                        start: 'top 80%'
                    }
                }
            );

            gsap.fromTo('.logo-item',
                { opacity: 0, scale: 0.9 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: 'back.out(1.5)',
                    scrollTrigger: {
                        trigger: '#memberships-section',
                        start: 'top 85%'
                    }
                }
            );
        });

        return () => ctx.revert();
    }, []);

    const getLogo = (domain: string) => `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${domain}&size=256`;

    const experiences = [
        {
            src: '/Nova.png',
            title: 'Senior IVF Consultant',
            location: 'Nova IVF Fertility, Gurgaon',
            alt: 'Nova IVF Fertility'
        },
        {
            src: 'https://i.pinimg.com/474x/88/5d/8a/885d8ac1a17ac7f1f1c9759c573bc8f4.jpg',
            title: 'Senior Resident: Obstetrics & Gynaecology',
            location: 'Dr. RML Hospital & PGIMER, New Delhi',
            alt: 'RML Hospital'
        },
        {
            src: getLogo('srtrmca.org'),
            title: 'Assistant Professor: Obstetrics & Gynaecology',
            location: 'SRTR Medical College, Ambajogai',
            alt: 'SRTR Medical College'
        },
    ];

    const memberships = [
        { src: '/fogsi-logo-2022.png', alt: 'FOGSI' },
        { src: '/ISAR.png', alt: 'Indian Society of Assisted Reproduction' },
        { src: '/IFS.png', alt: 'Indian Fertility Society' },
    ];

    return (
        <section className="pt-4 pb-24 bg-slate-50/50 relative" data-bg="#f8fafc" data-theme="light">
            
            {/* Work Experience Section */}
            <div id="experience-section" className="container mx-auto px-5 md:px-12 lg:px-20 mb-24">
                <div className="text-center mb-16 dp-fade-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/80 backdrop-blur-sm border border-pink-100 rounded-full shadow-sm">
                        <span className="w-2 h-2 bg-pink-600 rounded-full animate-pulse"></span>
                        <span className="text-[11px] font-bold tracking-[0.1em] text-pink-700 uppercase">
                            Portfolio
                        </span>
                    </div>
                    <h2 className="display-sm text-slate-900 font-black!">
                        Work Experience
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {experiences.map((exp, i) => (
                        <div key={i} className="exp-card bg-white border border-slate-100 p-8 rounded-3xl text-center shadow-sm hover:shadow-md hover:border-pink-100 transition-all flex flex-col items-center">
                            <div className="w-24 h-24 bg-pink-50/50 rounded-2xl flex items-center justify-center mx-auto mb-6 p-2">
                                <img
                                    src={exp.src}
                                    alt={exp.alt}
                                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        e.currentTarget.parentElement!.innerHTML = `<span class="text-[10px] font-bold text-pink-600 leading-tight uppercase px-1">${exp.alt}</span>`;
                                    }}
                                />
                            </div>
                            <p className="text-[15px] font-bold text-slate-900 leading-tight mb-2">
                                {exp.title}
                            </p>
                            <p className="text-xs font-semibold text-slate-500 leading-relaxed">
                                {exp.location}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Proud Alumni And Member Section */}
            <div id="memberships-section" className="container mx-auto px-5 md:px-12 lg:px-20 pb-10">
                <div className="text-center mb-12">
                    <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-6">
                        Proud Alumni & Member
                    </p>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 lg:gap-20">
                    {memberships.map((member, i) => (
                        <div key={i} className="logo-item w-16 md:w-20 lg:w-24 flex items-center justify-center  hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer">
                            <img
                                src={member.src}
                                alt={member.alt}
                                className="max-w-full h-auto object-contain mix-blend-multiply"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.parentElement!.classList.add('h-16', 'bg-slate-100', 'rounded-2xl', 'w-16');
                                    e.currentTarget.parentElement!.innerHTML = `<span class="text-[9px] text-center font-bold text-slate-400 p-2 leading-tight">${member.alt}</span>`;
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}

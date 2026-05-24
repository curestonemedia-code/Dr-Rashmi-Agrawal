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
            src: 'https://thecurestone.com/wp-content/uploads/2021/05/PNG-Black-e1664728676618.png',
            title: 'Chief IVF Specialist & Founder',
            location: 'Dr. Rashmi Gupta IVF Centre',
            alt: 'IVF Centre'
        },
        {
            src: 'data:image/png;base64,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',
            title: 'Visiting Consultant: IVF & Fertility',
            location: 'Apollo Hospital Delhi',
            alt: 'Apollo Hospitals'
        },
        {
            src: 'https://i.pinimg.com/474x/88/5d/8a/885d8ac1a17ac7f1f1c9759c573bc8f4.jpg',
            title: 'Consultant: OBGYN & Reproductive Med',
            location: 'Dr RML Hospital and PGIMER.',
            alt: 'RML Hospital'
        },
        {
            src: 'https://i.pinimg.com/474x/88/5d/8a/885d8ac1a17ac7f1f1c9759c573bc8f4.jpg',
            title: 'Senior Resident: OBGYN Residency',
            location: 'Dr RML Hospital and PGIMER.',
            alt: 'RML Hospital'
        },
        {
            src: 'data:image/jpeg;base64,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',
            title: 'Senior Consultant: IVF',
            location: 'Max Hospital Shalimar Bagh, New Delhi.',
            alt: 'Max Healthcare'
        },
        {
            src: 'https://upload.wikimedia.org/wikipedia/en/e/e9/Pandit_Bhagwat_Dayal_Sharma_Post_Graduate_Institute_of_Medical_Sciences_logo.png',
            title: 'Senior Resident: General Surgery',
            location: 'Pt. B.D. Sharma, PGIMS, Rohtak.',
            alt: 'PGIMS Rohtak'
        },
        {
            src: 'https://upload.wikimedia.org/wikipedia/en/e/e9/Pandit_Bhagwat_Dayal_Sharma_Post_Graduate_Institute_of_Medical_Sciences_logo.png',
            title: 'Resident (PG) in General Surgery',
            location: 'Pt. B.D.Sharma PGIMS, Rohtak.',
            alt: 'PGIMS Rohtak'
        }
    ];

    const memberships = [
        { src: 'https://www.aogd.org/images/aogd-logo.png', alt: 'Association of Obstetricians & Gynaecologists of Delhi' },
        { src: 'https://www.fogsionline.org/wp-content/uploads/2021/08/FOGSI-Logo.png', alt: 'FOGSI' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD3rL_2HsrOfjSo0x4PUcl0KVSvbkG2unKXg&s', alt: 'Indian Fertility Society' },
        { src: 'https://content3.jdmagicbox.com/v2/comp/delhi/71/011p74871/catalogue/delhi-medical-association-darya-ganj-delhi-associations-opre1k4x1z.jpg', alt: 'Delhi Medical Association' },
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
                    <h2 className="display-sm text-slate-900 font-bold">
                        Work Experience
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

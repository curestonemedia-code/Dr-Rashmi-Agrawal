'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ZoomSceneSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const pinRef = useRef<HTMLDivElement>(null);
    const imgWrapRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const pin = pinRef.current;
        const imgWrap = imgWrapRef.current;
        const img = imgRef.current;
        const text = textRef.current;

        if (!section || !pin || !imgWrap || !img || !text) return;

        const ctx = gsap.context(() => {
            // Initial states
            gsap.set(img, { scale: 1.2, filter: 'blur(8px)' });
            gsap.set(text, { opacity: 0, y: 60 });

            // Create timeline with ScrollTrigger
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: 'top top',
                    end: '+=200%',
                    pin: pin,
                    scrub: 1.2,
                    anticipatePin: 1,
                }
            });

            // Phase 1: Zoom in + deblur image
            tl.to(img, {
                scale: 1,
                filter: 'blur(0px)',
                duration: 0.5,
                ease: 'power2.out'
            });

            // Phase 2: Fade in text
            tl.to(text, {
                opacity: 1,
                y: 0,
                duration: 0.3,
                ease: 'power3.out'
            }, '-=0.1');

            // Phase 3: Hold + subtle zoom out
            tl.to(img, {
                scale: 1.05,
                duration: 0.2,
                ease: 'none'
            });

        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="zoom-scene"
            ref={sectionRef}
            className="relative bg-[#020617] overflow-hidden"
            style={{ height: '300vh' }}
            data-bg="#020617"
            data-theme="dark"
        >
            <div
                ref={pinRef}
                className="w-full h-[100dvh] flex items-center justify-center overflow-hidden relative"
            >
                {/* Image Container */}
                <div
                    ref={imgWrapRef}
                    className="absolute inset-0 w-full h-full overflow-hidden bg-slate-900"
                >
                    <div ref={imgRef} className="absolute inset-0 w-full h-full will-change-transform">
                        <iframe
                            src="https://www.youtube.com/embed/yJONw4bEcNw?autoplay=1&mute=1&controls=0&loop=1&playlist=yJONw4bEcNw&modestbranding=1&playsinline=1&rel=0"
                            className="absolute top-1/2 left-1/2 w-[150vw] h-[150vh] min-w-[100vw] min-h-[100vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-70"
                            allow="autoplay; encrypted-media"
                            frameBorder="0"
                        />
                    </div>
                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/30 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/20 via-transparent to-[#020617]/20 pointer-events-none" />
                </div>

                {/* Text Overlay */}
                <div
                    ref={textRef}
                    className="absolute inset-0 z-10 flex flex-col justify-between max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 pt-32 pb-20 md:pb-24 will-change-transform w-full h-full text-left"
                >
                    {/* Header */}
                    <div className="max-w-4xl mt-auto">
                        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-pink-600/10 border border-pink-500/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse"></span>
                            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-pink-400">
                                03 / The Record
                            </span>
                        </div>
                        <h2 className="text-5xl md:text-7xl lg:text-8xl xl:text-[6.5rem] font-black text-white tracking-tight leading-[0.95] font-sans">
                            Numbers, not<br />
                            <span className="font-black text-white">adjectives.</span>
                        </h2>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-16 md:mt-24 pt-8 md:pt-10 border-t border-white/10 w-full">
                        <div>
                            <p className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-white tracking-tight leading-none">
                                9,000<span className="text-pink-500 font-semibold">+</span>
                            </p>
                            <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mt-3 md:mt-4">
                                CONSULTATIONS
                            </p>
                        </div>
                        <div>
                            <p className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-white tracking-tight leading-none">
                                3,000<span className="text-pink-500 font-semibold">+</span>
                            </p>
                            <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mt-3 md:mt-4">
                                TREATMENTS
                            </p>
                        </div>
                        <div>
                            <p className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-pink-500 tracking-tight leading-none flex items-baseline">
                                10<span className="text-pink-500 font-semibold text-2xl md:text-3xl ml-1">+</span>
                            </p>
                            <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mt-3 md:mt-4">
                                YEARS EXPERIENCE
                            </p>
                        </div>
                        <div>
                            <p className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-white tracking-tight leading-none flex items-baseline">
                                Gold<span className="text-pink-500 font-semibold text-2xl md:text-3xl ml-2">Medal</span>
                            </p>
                            <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mt-3 md:mt-4">
                                MS OBGYN
                            </p>
                        </div>
                    </div>
                </div>

                {/* Vignette Effect */}
                <div className="absolute inset-0 pointer-events-none" style={{
                    boxShadow: 'inset 0 0 150px 60px rgba(2, 6, 23, 0.8)'
                }} />
            </div>
        </section>
    );
}

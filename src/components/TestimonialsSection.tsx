'use client';
import React, { useState, useRef } from 'react';

// ── ICONS ──
const PlayIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5v14l11-7z" />
    </svg>
);
const CloseIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);

// ── TESTIMONIAL CARD ──
function TestimonialCard({
    vid, name
}: {
    vid: string; name: string;
}) {
    const [isHovered, setIsHovered] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    // Fetch the real, authentic YouTube high-res thumbnail directly
    const imgUrl = `https://img.youtube.com/vi/${vid}/hqdefault.jpg`;

    return (
        <div
            className="group relative rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1 cursor-pointer aspect-[4/5] w-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsPlaying(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter') setIsPlaying(true); }}
        >
            {isPlaying ? (
                <div className="absolute inset-0 w-full h-full bg-black">
                    <iframe
                        className="w-full h-full border-0"
                        src={`https://www.youtube.com/embed/${vid}?autoplay=1&rel=0&modestbranding=1`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={name}
                    />
                    {/* Return button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsPlaying(false);
                        }}
                        className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/85 transition-colors border border-white/20"
                        aria-label="Close video"
                    >
                        <CloseIcon />
                    </button>
                </div>
            ) : (
                <div className="relative w-full h-full overflow-hidden">
                    <img
                        src={imgUrl}
                        alt={name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                    {/* Play Button */}
                    <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-lg group-hover:bg-pink-600 group-hover:border-pink-500 transition-all duration-300">
                            <PlayIcon />
                        </div>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-[11px] font-semibold tracking-wide">
                        Play Video
                    </div>

                    {/* Bottom Meta */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                        <div className="transform transition-transform duration-500 group-hover:translate-y-0 translate-y-2">
                            <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-pink-600/90 backdrop-blur-sm text-white text-[10px] font-bold tracking-wider uppercase mb-2">
                                Patient Story
                            </div>
                            <h3 className="text-white text-base font-semibold tracking-tight leading-snug">{name}</h3>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

// ── MAIN SECTION ──
export default function TestimonialsSection() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const testimonials = [
        {
            vid: 'nOiQspt6VWI',
            name: 'Har Jagah Se Nirasha Mili, Phir IVF Se Mila Twins Ka Sukh! ✨ | Cure Infertility #ivf',
        },
        {
            vid: 'SxTcuQ7KL1c',
            name: '5 Saal Ka Intezaar Khatam! 😍 | IVF Success Story with Positive Results | Dr. Rashmi Agrawal #ivf',
        },
        {
            vid: 'K_KZMhaL9dY',
            name: '4 साल बाद मिला माँ बनने का सुख! | IVF Success Story with Dr. Rashmi Agrawal #ivf',
        },
        {
            vid: 'PaH8yCIq29Y',
            name: '9 Years बाद मिली Parents बनने की खुशी! Chennai to Gurgaon',
        },
        {
            vid: 'me6DoNl7tsk',
            name: 'IVF ने 6 साल का सपना पूरा किया | 6 साल का इंतजार खत्म | IVF Success Story #ivf #fertlity',
        },
    ];

    const scroll = (direction: 'left' | 'right') => {
        if (!scrollRef.current) return;
        scrollRef.current.scrollBy({
            left: direction === 'left' ? -340 : 340,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <section id="testimonials" className="py-11 md:py-15 bg-white relative overflow-hidden" data-bg="#ffffff" data-theme="light">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-50 rounded-full blur-3xl opacity-40 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-50 rounded-full blur-3xl opacity-60 translate-y-1/2 -translate-x-1/3 pointer-events-none" />

                <div className="container mx-auto px-6 md:px-12 lg:px-20 relative">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-2 mb-5">
                                <span className="w-2 h-2 rounded-full bg-pink-600"></span>
                                <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-slate-400">
                                    05 / Patient Voices
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
                                In their own<br className="hidden md:block" /> words.
                            </h2>
                            <p className="text-base md:text-lg text-slate-500 mt-5 max-w-xl leading-relaxed">
                                Real patients sharing their experience — recorded after treatment, unscripted and unfiltered.
                            </p>
                        </div>

                        {/* Navigation Arrows */}
                        <div className="flex gap-3">
                            <button
                                onClick={() => scroll('left')}
                                className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center hover:bg-slate-50 hover:border-slate-300 transition-all hover:scale-105 active:scale-95 shadow-sm"
                                aria-label="Previous testimonial"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600">
                                    <polyline points="15 18 9 12 15 6" />
                                </svg>
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center hover:bg-slate-50 hover:border-slate-300 transition-all hover:scale-105 active:scale-95 shadow-sm"
                                aria-label="Next testimonial"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600">
                                    <polyline points="9 18 15 12 9 6" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Horizontal Carousel */}
                    <div
                        ref={scrollRef}
                        className="flex gap-5 md:gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory pb-4"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                        }}
                    >
                        {testimonials.map((t) => (
                            <div key={t.name} className="w-[75vw] sm:w-[320px] md:w-[300px] lg:w-[320px] flex-shrink-0 snap-center">
                                <TestimonialCard
                                    vid={t.vid}
                                    name={t.name}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Footer Note */}
                    <div className="mt-12 flex items-center justify-center gap-2 text-slate-400">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-50">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M9 12l2 2 4-4" />
                        </svg>
                        <p className="text-sm text-slate-400">
                            Real patient videos from Dr. Rashmi Agrawal&apos;s YouTube channel.
                        </p>
                    </div>
                </div>
            </section>

        </>
    );
}

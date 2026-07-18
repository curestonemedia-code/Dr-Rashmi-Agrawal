'use client';
import { useRef } from 'react';
import { Star, MessageCircle, Quote } from 'lucide-react';
import { GOOGLE_REVIEWS_URL, CLINIC_PHONE_INTL } from '@/constants/site';

const GoogleLogo = () => (
    <svg width="28" height="28" viewBox="0 0 48 48" aria-hidden="true">
        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24 c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039 l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24 C44,22.659,43.862,21.35,43.611,20.083z" />
    </svg>
);

const reviews = [
    {
        name: 'Nikita Shrivastava',
        meta: '8 reviews',
        time: '2 months ago',
        text: 'We came to Nova IVF Fertility seeking help to conceive, and the experience has been truly wonderful. We received both financial and medical counselling from the experts, which helped us feel informed and supported throughout the journey. Dr. Rashmi and the staff were incredibly helpful, caring, and supportive at every step. With their efforts and by God’s grace, we were finally able to receive the good news we had been hoping for. Thank you, Nova IVF Fertility, for making this possible.',
    },
    {
        name: 'Ankit Alekh',
        meta: 'Local Guide · 134 reviews',
        time: '2 months ago',
        text: 'I would like to sincerely thank Dr. Rashmi for her incredible support throughout our fertility journey. She explained everything clearly, stayed patient, and gave us the right guidance when we needed it the most. Highly recommend her to anyone facing similar challenges.',
    },
    {
        name: 'Rabi Gidado',
        meta: '1 review',
        time: '1 month ago',
        text: 'Nova IVF Fertility Center Gurugram — I came from my country to India for fertility treatments. My experience with Nova is fantastic, they are so professional. My thanks goes to Dr. Rashmi, she always gave me courage and helped me throughout my fertility journey. Alhamdulillah, I am now pregnant with my baby. I thank all the wonderful staff at Nova, I love you all.',
    },
    {
        name: 'Latika Pant',
        meta: '5 reviews',
        time: '9 months ago',
        text: 'I had a history of multiple failed IVF but ever since I met Dr. Rashmi everything took a turn in a positive direction. Since the beginning of my treatment she has always been very positive and encouraging. Her focus, determination and effort towards her patient and work is admirable. Today, my IVF journey has been successful and credit goes to her.',
    },
    {
        name: 'Amrita Pandey',
        meta: '4 reviews',
        time: '7 months ago',
        text: 'It was 10 years of my marriage and I had consulted many doctors during this period but did not get any positive response. Somehow I came to know about Dr. Rashmi Agrawal Ma’am and her treatment gave my life’s greatest happiness in my first IVF cycle.',
    },
    {
        name: 'Shikkha Tanejaa',
        meta: '1 review',
        time: '1 year ago',
        text: 'I wholeheartedly recommend Dr. Rashmi Ji for her exceptional expertise and compassionate approach to infertility treatment. Under her guidance at Nova IVF, Gurgaon, we experienced top-quality care, clear transparency in treatment costs, and unwavering support throughout our journey. Thank you, Dr. Rashmi Ji, for bringing happiness into our lives!',
    },
    {
        name: 'Kanika Sharma',
        meta: '2 reviews',
        time: '1 month ago',
        text: 'A great experience and a positive result! Thank you ma’am and all the support staff at Nova.',
    },
    {
        name: 'Utkarsha Gupta',
        meta: '10 reviews · 2 photos',
        time: '10 months ago',
        text: 'I am deeply grateful to Dr. Rashmi and her wonderful team for their constant support, guidance, and care throughout my journey. After experiencing 3 heartbreaking miscarriages, I finally received my positive pregnancy under their treatment. Forever grateful to Dr. Rashmi and the entire team for helping me reach this milestone that once felt impossible.',
    },
];

export default function GoogleReviewsSection() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (!scrollRef.current) return;
        scrollRef.current.scrollBy({ left: direction === 'left' ? -360 : 360, behavior: 'smooth' });
    };

    return (
        <section id="google-reviews" className="py-16 md:py-20 bg-slate-50/60 relative overflow-hidden" data-bg="#f8fafc" data-theme="light">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-pink-50/50 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 lg:px-20 relative">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                    <div>
                        <div className="flex items-center gap-2 mb-5">
                            <span className="w-2 h-2 rounded-full bg-pink-600"></span>
                            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-slate-400">
                                06 / Verified on Google
                            </span>
                        </div>
                        <div className="flex items-center gap-3 mb-3">
                            <GoogleLogo />
                            <span className="text-2xl font-black text-slate-900 tracking-tight">Google Reviews</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-4xl font-black text-slate-900 tracking-tight">5.0</span>
                            <div className="flex text-amber-400">
                                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                        <a
                            href={GOOGLE_REVIEWS_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#ef8b92] text-white text-sm font-semibold hover:bg-pink-700 transition-all hover:scale-105"
                        >
                            Read All Reviews on Google
                        </a>
                        <a
                            href={`https://wa.me/${CLINIC_PHONE_INTL.replace('+', '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all"
                        >
                            <MessageCircle className="w-4 h-4 text-green-600" /> Ask Us Anything
                        </a>
                        <div className="hidden md:flex gap-2 ml-2">
                            <button
                                onClick={() => scroll('left')}
                                className="w-11 h-11 rounded-full border border-slate-200 bg-white flex items-center justify-center hover:bg-slate-50 transition-colors"
                                aria-label="Previous review"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600">
                                    <polyline points="15 18 9 12 15 6" />
                                </svg>
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="w-11 h-11 rounded-full border border-slate-200 bg-white flex items-center justify-center hover:bg-slate-50 transition-colors"
                                aria-label="Next review"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600">
                                    <polyline points="9 18 15 12 9 6" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Review Carousel */}
                <div
                    ref={scrollRef}
                    className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {reviews.map((r) => (
                        <div
                            key={r.name}
                            className="w-[85vw] sm:w-[340px] flex-shrink-0 snap-center bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center font-bold text-sm shrink-0">
                                        {r.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-900 leading-tight">{r.name}</p>
                                        <p className="text-[11px] text-slate-400">{r.meta}</p>
                                    </div>
                                </div>
                                <Quote className="w-5 h-5 text-slate-200 shrink-0" />
                            </div>
                            <div className="flex items-center gap-2 mb-3">
                                <div className="flex text-amber-400">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                                </div>
                                <span className="text-[11px] text-slate-400">{r.time}</span>
                            </div>
                            <p className="text-sm text-slate-600 leading-relaxed line-clamp-6">{r.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

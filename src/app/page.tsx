'use client';
import { useEffect, useRef, Suspense } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as Icons from 'lucide-react';
import LiveOTSection, { LIVE_OT_CASES } from '../components/LiveOTSection';
import TestimonialsSection, { TESTIMONIAL_VIDEOS } from '../components/TestimonialsSection';
import GoogleReviewsSection from '../components/GoogleReviewsSection';
import FAQSection from '../components/FAQSection';
import HeroSection from '../components/HeroSection';
import ConditionsSection from '../components/ConditionsSection';
import CarePathwaySection from '../components/CarePathwaySection';
import ZoomSceneSection from '../components/ZoomSceneSection';
import DoctorProfileSection from '../components/DoctorProfileSection';
import ExperienceAndMemberships from '../components/ExperienceAndMemberships';
import BookingForm from '../components/BookingForm';
import { wrapWords } from '../utils/text';
import { graph, jsonLdProps, breadcrumb, webPage, videoObject } from '@/lib/schema';

export default function Home() {
    // Guard against React Strict Mode's double-invoke of effects.
    // GSAP pin: mutates the DOM (inserts pinSpacer divs). If the effect
    // runs a second time before React properly unmounts, those spacers
    // conflict with React's fiber tree → removeChild / insertBefore crashes.
    const initialized = useRef(false);

    useEffect(() => {
        if (initialized.current) return; // Skip Strict Mode second run
        initialized.current = true;
        gsap.registerPlugin(ScrollTrigger);

        /* ── Split-words: wrap words before animating ── */
        document.querySelectorAll('.split-words').forEach(el => wrapWords(el as HTMLElement));

        const ctx = gsap.context(() => {

            /* The hero animates itself too — HeroSection.tsx runs .hero-line
               and .fade-up from its own scoped context. The copies that used to
               live here fought it for the same elements, and the parallax
               alongside them targeted #hero-img, an ID that component does not
               render. */

            /* The zoom scene animates itself — see ZoomSceneSection.tsx, which
               drives it from refs inside its own scoped gsap.context (and owns
               the only GSAP pin on the site). The duplicate timeline that used
               to live here targeted #zoom-img-wrap / #zoom-text, IDs that
               component no longer renders, so every homepage load logged
               "GSAP target not found" for selectors that could never match. */

            /* ── Section background theming ── */
            document.querySelectorAll('[data-bg]').forEach(section => {
                ScrollTrigger.create({
                    trigger: section,
                    start: 'top 55%',
                    end: 'bottom 45%',
                    onEnter: () => applySectionTheme(section as HTMLElement),
                    onEnterBack: () => applySectionTheme(section as HTMLElement),
                });
            });
            function applySectionTheme(section: HTMLElement) {
                const bg = section.dataset.bg;
                const theme = section.dataset.theme;
                if (bg) gsap.to(document.body, { backgroundColor: bg, duration: 0.8, ease: 'power2.inOut' });
                if (theme === 'dark') document.body.classList.add('on-dark');
                else document.body.classList.remove('on-dark');
            }

            /* ── Split-word reveal (now words are wrapped) ── */
            document.querySelectorAll('.split-words').forEach(heading => {
                gsap.to(heading.querySelectorAll('.word-inner'), {
                    y: '0%', duration: 1.1, stagger: 0.05, ease: 'power3.out',
                    scrollTrigger: { trigger: heading, start: 'top 85%' },
                });
            });

            /* ── Fade-in on scroll ── */
            gsap.utils.toArray('.fade-in-scroll').forEach(el => {
                gsap.from(el as HTMLElement, {
                    opacity: 0, y: 24, duration: 0.9, ease: 'power3.out',
                    scrollTrigger: { trigger: el as HTMLElement, start: 'top 85%' },
                });
            });

            /* ── Animated counters ── */
            gsap.utils.toArray('[data-count]').forEach(el => {
                const target = parseFloat((el as HTMLElement).dataset.count || '0');
                const obj = { v: 0 };
                gsap.to(obj, {
                    v: target, duration: 2.2, ease: 'expo.out',
                    scrollTrigger: { trigger: el as HTMLElement, start: 'top 80%' },
                    onUpdate: () => { (el as HTMLElement).textContent = Math.round(obj.v).toLocaleString('en-IN'); },
                });
            });

            /* ConditionsSection and CarePathwaySection stopped rendering the
               .condition-card / .pathway-card classes these two staggers
               targeted, and neither component uses GSAP at all now — the
               tweens matched nothing and only produced console warnings. Both
               sections still animate in via the generic .fade-in-scroll pass
               above. */

        });

        return () => {
            try {
                // ctx.revert() kills only the ScrollTriggers this context
                // created, and unwinds any pin spacers among them before React
                // reconciles — which is what the old NotFoundError: removeChild
                // guard was really after. It used to call
                // ScrollTrigger.getAll().kill(true), which reached outside this
                // component and tore down ZoomSceneSection's pinned trigger too;
                // that component owns the only pin on the site and already
                // reverts its own scoped context on unmount.
                ctx.revert();
                ScrollTrigger.clearScrollMemory();

                // applySectionTheme() toggles this class and paints the body
                // directly. The class is a plain DOM mutation, so gsap has no
                // record of it and revert() cannot undo it — leaving the site
                // stuck in dark mode on the next page if the visitor happened
                // to be at the footer when they navigated away.
                document.body.classList.remove('on-dark');
                document.body.style.removeProperty('background-color');
            } catch (_) { /* swallow any residual race */ }
            initialized.current = false; // allow re-init if component truly remounts
        };
    }, []);

    // LIVE_OT_CASES and TESTIMONIAL_VIDEOS don't share any ytIds today, but
    // dedupe by ytId anyway so the graph never risks two VideoObject nodes
    // with the same @id if that changes.
    const homeVideos = Array.from(
        new Map(
            [
                ...LIVE_OT_CASES.map((v) => ({ ytId: v.vid, title: v.title })),
                ...TESTIMONIAL_VIDEOS.map((v) => ({ ytId: v.vid, title: v.name })),
            ].map((v) => [v.ytId, v])
        ).values()
    );

    return (
        <>
            <script {...jsonLdProps(graph([
                webPage({
                    path: '/',
                    name: 'Dr. Rashmi Agrawal IVF Centre',
                    description: 'IVF, ICSI and IUI in Gurgaon with Dr. Rashmi Agrawal — MBBS (Gold Medalist), MS OBGYN, FNB Reproductive Medicine.',
                    medical: true,
                }),
                breadcrumb([{ name: 'Home', path: '/' }]),
                // LiveOTSection's carousel and TestimonialsSection's
                // click-gated players never got structured data — this is
                // what actually gets them indexed as video content.
                ...homeVideos.map((v) =>
                    videoObject({
                        ytId: v.ytId,
                        name: v.title,
                        description: `${v.title} — from Dr. Rashmi Agrawal, IVF Centre, Gurgaon.`,
                        // No uploadDate passed: videoObject() resolves the
                        // video's real upload date from
                        // constants/videoUploadDates.ts by ytId. A hardcoded
                        // placeholder here previously failed Search Console
                        // validation ("missing a time zone" / "invalid
                        // datetime value").
                    })
                ),
            ]))} />
            {/* ── Global style fixes injected inline ── */}
            <style>{`
                /* FAQ toggle rotation */
                .faq-toggle { transition: transform 0.3s ease; }
                .faq-toggle.rotated { transform: rotate(45deg); }

                /* Video card */
                .video-card { cursor: pointer; }

                /* Trust strip marquee */
                @keyframes marquee {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                .trust-track { animation: marquee 28s linear infinite; }
                .trust-strip:hover .trust-track { animation-play-state: paused; }

                /* Hero fade-up initial */
                .fade-up { transform: translateY(28px); }

                /* Reveal mask for hero lines */
                .reveal-mask { overflow: hidden; }

                /* Pathway card initial for gsap */
                .pathway-card { opacity: 0; }

                /* Condition card initial for gsap */
                .condition-card { opacity: 0; }

                /* Modal fade */
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

                /* Mobile horizontal scroll fallback */
                @media (max-width: 767px) {
                    #h-container { overflow-x: auto; -webkit-overflow-scrolling: touch; scroll-snap-type: x mandatory; }
                    #h-track { display: flex !important; width: max-content !important; }
                    #h-track > div { scroll-snap-align: start; }
                }

                /* Zoom scene */
                .zoom-pin { position: relative; display: flex; align-items: center; justify-content: center; width: 100%; height: 100vh; overflow: hidden; }
                #zoom-img-wrap {
                    position: relative;
                    width: 72vw;
                    height: 72vh;
                    border-radius: 2rem;
                    overflow: hidden;
                }
                #zoom-img-wrap img { width: 100%; height: 100%; object-fit: cover; }
                .zoom-text {
                    position: absolute;
                    inset: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    pointer-events: none;
                }
                .zoom-text-inner {
                    color: #fff;
                    font-size: clamp(2.5rem, 6vw, 5rem);
                    font-weight: 300;
                    text-align: center;
                    line-height: 1.1;
                    letter-spacing: -0.03em;
                    text-shadow: 0 2px 40px rgba(0,0,0,0.5);
                }
                .zoom-text-inner em { font-style: italic; color: rgba(255,255,255,0.75); }
            `}</style>

            {/* ── HERO ── */}
            <HeroSection />



            {/* ── CONDITIONS GRID ── */}
            <ConditionsSection />

            {/* ── CARE PATHWAY ── */}
            <CarePathwaySection />

            {/* ── DOCTOR PROFILE ── */}
            <DoctorProfileSection />

            {/* ── WORK EXPERIENCE & MEMBERSHIPS ── */}
            <ExperienceAndMemberships />

            {/* ── ZOOM SCENE ── */}
            <ZoomSceneSection />
            {/* ── LIVE OT ── */}
            <LiveOTSection />

            {/* ── PATIENT TESTIMONIALS ── */}
            <TestimonialsSection />

            {/* ── GOOGLE REVIEWS ── */}
            <GoogleReviewsSection />

            {/* ── FAQ ── */}
            <FAQSection />

            {/* ── BOOKING WIDGET ── */}
            <section id="book" className="section edge relative overflow-hidden" data-bg="#ffffff" data-theme="light">
                <div className="container-x">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <div className="chip mb-6 mx-auto"><span className="chip-dot"></span>Book a Consultation</div>
                        <h2 className="display-sm split-words font-black!">Take Your First Step With Clarity Today.</h2>
                        <p className="body-lg mt-6">Replace confusion and midnight internet research with a clear, written, professional plan. First time clinical consultation enquiries are always reviewed, and our dedicated team confirms bookings on WhatsApp promptly.</p>
                        <a href="https://wa.me/919811775369" target="_blank" rel="noreferrer" className="btn btn-ghost mt-6 inline-flex">
                            <Icons.MessageCircle style={{ width: '16px', height: '16px' }} /> WhatsApp Your Reports: +91 98117 75369
                        </a>
                    </div>

                    <div className="max-w-2xl mx-auto">
                        <Suspense fallback={<div className="h-96 rounded-[2.5rem] bg-slate-50 animate-pulse" />}>
                            <BookingForm />
                        </Suspense>
                    </div>
                </div>
            </section>
        </>
    );
}
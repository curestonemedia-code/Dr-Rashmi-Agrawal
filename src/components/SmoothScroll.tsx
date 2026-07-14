'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const NAV_OFFSET = -96;

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 1, // 'smoothWheel' is default behavior in v1.x
    });
    lenisRef.current = lenis;

    gsap.registerPlugin(ScrollTrigger);

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // Lenis owns scroll position, so the browser's native "jump to #hash"
    // behavior doesn't fire reliably through it — and a Next.js <Link> whose
    // href hash matches the current URL is a no-op to the router, so nothing
    // re-triggers on a second click. Handle same-page hash links ourselves on
    // every click instead of relying on native/router hash navigation.
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement | null)?.closest?.('a[href*="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;

      const url = new URL(anchor.href);
      if (!url.hash || url.pathname !== window.location.pathname) return;

      const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
      if (!target) return;

      e.preventDefault();
      if (window.location.hash !== url.hash) {
        history.pushState(null, '', url.hash);
      }
      lenis.scrollTo(target, { offset: NAV_OFFSET, duration: 1.2 });
    };
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
      lenis.destroy();
      lenisRef.current = null;
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  // Land on the right section after navigating from another page with a
  // hash in the URL (e.g. clicking "/#testimonials" from /about), once the
  // new page's sections have mounted.
  useEffect(() => {
    if (!window.location.hash) return;
    const id = decodeURIComponent(window.location.hash.slice(1));
    const timer = setTimeout(() => {
      const target = document.getElementById(id);
      if (!target) return;
      if (lenisRef.current) {
        lenisRef.current.scrollTo(target, { offset: NAV_OFFSET, immediate: true });
      } else {
        target.scrollIntoView({ block: 'start' });
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [pathname]);

  return <>{children}</>;
}

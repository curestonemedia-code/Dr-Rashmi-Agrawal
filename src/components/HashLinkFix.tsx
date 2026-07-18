'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const NAV_OFFSET = -96;

function scrollToId(id: string) {
  const target = document.getElementById(id);
  if (!target) return;
  const top = target.getBoundingClientRect().top + window.scrollY + NAV_OFFSET;
  window.scrollTo({ top });
}

export default function HashLinkFix() {
  const pathname = usePathname();

  useEffect(() => {
    // A click on a same-page hash link is a no-op to both the browser and
    // Next.js's router when the hash already matches the current URL, so a
    // second click on the same link does nothing. Handle same-page hash
    // clicks manually so every click re-scrolls, repeat clicks included.
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement | null)?.closest?.('a[href*="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;

      const url = new URL(anchor.href);
      if (!url.hash || url.pathname !== window.location.pathname) return;

      const id = decodeURIComponent(url.hash.slice(1));
      if (!document.getElementById(id)) return;

      e.preventDefault();
      if (window.location.hash !== url.hash) {
        history.pushState(null, '', url.hash);
      }
      scrollToId(id);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  // Land on the right section after navigating from another page with a
  // hash in the URL (e.g. clicking "/#testimonials" from /about), once the
  // new page's sections have mounted.
  useEffect(() => {
    if (!window.location.hash) return;
    const id = decodeURIComponent(window.location.hash.slice(1));
    const timer = setTimeout(() => scrollToId(id), 200);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

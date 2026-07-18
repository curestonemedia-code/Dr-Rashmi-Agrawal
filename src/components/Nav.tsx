'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Calendar, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '/treatments', label: 'Treatments' },
  { href: '/about', label: 'About' },
  { href: '/#testimonials', label: 'Patients' },
  { href: '/faqs', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  // Close the mobile menu on route change. Adjusted during render (not an
  // effect) per React's guidance for resetting state when a prop changes.
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMenuOpen(false);
  }

  // A plain scroll listener rather than a GSAP ScrollTrigger: Nav lives in the
  // root layout and never remounts on client-side navigation, so a
  // ScrollTrigger's cached start/end (computed once, for whichever page
  // happened to be mounted first) would go stale on any other page with a
  // different height — flipping `scrolled` back to false mid-scroll and
  // making the navbar background disappear. Reading live scrollY has no
  // stale state to go wrong.
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav id="navbar" className={scrolled || menuOpen ? 'scrolled' : ''}>
      <div className="nav-inner container-x edge">
        <Link href="/" className="brand-logo py-1">
          <img src="/logo_transparent.png" alt="Dr. Rashmi Agrawal Logo" className="h-10 md:h-12 w-auto object-contain" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">{link.label}</Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link href="/contact" className="btn btn-primary whitespace-nowrap shrink-0">
            <Calendar style={{ width: '16px', height: '16px' }} className="shrink-0" />
            Book Free Consultation
          </Link>
        </div>

        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="nav-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X style={{ width: '22px', height: '22px' }} /> : <Menu style={{ width: '22px', height: '22px' }} />}
          </button>
        </div>
      </div>

      <div className={`nav-mobile-menu md:hidden ${menuOpen ? 'open' : ''}`}>
        <div className="nav-mobile-links">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="nav-mobile-link" onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
        </div>
        <Link href="/contact" className="btn btn-primary justify-center" onClick={() => setMenuOpen(false)}>
          <Calendar style={{ width: '16px', height: '16px' }} />
          Book Free Consultation
        </Link>
      </div>
    </nav>
  );
}

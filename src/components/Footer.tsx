import Link from 'next/link';
import { MessageCircle, Phone, Mail, MapPin, Clock, Star, ArrowRight } from 'lucide-react';
import { CLINIC_PHONE, CLINIC_PHONE_INTL, CLINIC_EMAIL, CLINIC_ADDRESS, GOOGLE_REVIEWS_URL } from '@/constants/site';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <footer data-bg="#020617" data-theme="dark">
        <div className="container-x">
          <div className="grid md:grid-cols-12 gap-10 pb-12" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="md:col-span-5">
              <Link href="/" className="inline-block bg-white px-4 py-2.5 rounded-2xl mb-2 hover:bg-slate-50 transition-colors">
                <img
                  src="/logo_transparent.png"
                  alt="Dr. Rashmi Agrawal Logo"
                  className="h-10 w-auto object-contain"
                />
              </Link>
              <p className="mt-6 max-w-sm" style={{ color: 'var(--on-dark-muted)', fontSize: '0.9rem', lineHeight: '1.65' }}>
                MBBS (Gold Medalist), MS OBGYN · IVF &amp; Fertility Specialist in Gurgaon · Senior IVF Consultant at Nova IVF Fertility, Sector 27, Gurugram.
              </p>

              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full transition-colors hover:bg-white/10"
                style={{ border: '1px solid rgba(255,255,255,0.12)' }}
              >
                <span className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                </span>
                <span style={{ color: '#fff', fontSize: '0.8rem', fontWeight: 600 }}>5.0 on Google</span>
              </a>

              <div className="flex flex-wrap gap-3 mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-[1.03]"
                  style={{ background: 'var(--brand-light)', color: '#0f172a' }}
                >
                  Book Consultation
                </Link>
                <a
                  href={`https://wa.me/${CLINIC_PHONE_INTL.replace('+', '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:bg-white/10"
                  style={{ border: '1px solid rgba(255,255,255,0.15)', color: '#fff' }}
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </div>
            </div>

            <div className="md:col-span-3">
              <div className="eyebrow mb-4" style={{ color: 'var(--brand-light)' }}>Visit Us</div>
              <div style={{ color: '#fff', fontWeight: 500 }}>Dr. Rashmi Agrawal IVF Centre</div>
              <div className="mt-4 flex flex-col gap-3" style={{ fontSize: '0.875rem' }}>
                <a
                  href="https://maps.app.goo.gl/iASSY9GwRZZTEoR27"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 hover:text-white transition"
                  style={{ color: 'var(--on-dark-muted)', lineHeight: '1.6' }}
                >
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'var(--brand-light)' }} />
                  <span>{CLINIC_ADDRESS.streetAddress}, {CLINIC_ADDRESS.addressLocality}, {CLINIC_ADDRESS.addressRegion} {CLINIC_ADDRESS.postalCode}</span>
                </a>
                <a href={`tel:${CLINIC_PHONE_INTL}`} className="flex items-center gap-3 hover:text-white transition" style={{ color: 'var(--on-dark-muted)' }}>
                  <Phone className="w-4 h-4 shrink-0" style={{ color: 'var(--brand-light)' }} />
                  <span>{CLINIC_PHONE}</span>
                </a>
                <a href={`mailto:${CLINIC_EMAIL}`} className="flex items-center gap-3 hover:text-white transition" style={{ color: 'var(--on-dark-muted)' }}>
                  <Mail className="w-4 h-4 shrink-0" style={{ color: 'var(--brand-light)' }} />
                  <span>{CLINIC_EMAIL}</span>
                </a>
                <div className="flex items-center gap-3" style={{ color: 'var(--on-dark-muted)' }}>
                  <Clock className="w-4 h-4 shrink-0" style={{ color: 'var(--brand-light)' }} />
                  <span>Mon – Sat, 10:00 AM to 6:00 PM</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="eyebrow mb-4" style={{ color: 'var(--brand-light)' }}>Treatments</div>
              <div className="flex flex-col gap-2" style={{ fontSize: '0.875rem' }}>
                <Link href="/treatments/ivf" style={{ color: 'var(--on-dark-muted)' }} className="hover:text-white transition">IVF</Link>
                <Link href="/treatments/icsi" style={{ color: 'var(--on-dark-muted)' }} className="hover:text-white transition">ICSI</Link>
                <Link href="/treatments/iui" style={{ color: 'var(--on-dark-muted)' }} className="hover:text-white transition">IUI</Link>
                <Link href="/treatments/surgical-sperm-retrieval" style={{ color: 'var(--on-dark-muted)' }} className="hover:text-white transition">Surgical Sperm Retrieval</Link>
                <Link href="/treatments/pgt" style={{ color: 'var(--on-dark-muted)' }} className="hover:text-white transition">PGT</Link>
                <Link
                  href="/treatments"
                  className="inline-flex items-center gap-1 mt-1 hover:text-white transition"
                  style={{ color: 'var(--brand-light)', fontWeight: 600 }}
                >
                  View All <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="eyebrow mb-4" style={{ color: 'var(--brand-light)' }}>Explore</div>
              <div className="flex flex-col gap-2" style={{ fontSize: '0.875rem' }}>
                <Link href="/about" style={{ color: 'var(--on-dark-muted)' }} className="hover:text-white transition">About</Link>
                <Link href="/treatments" style={{ color: 'var(--on-dark-muted)' }} className="hover:text-white transition">Treatments</Link>
                <Link href="/#google-reviews" style={{ color: 'var(--on-dark-muted)' }} className="hover:text-white transition">Patient Reviews</Link>
                <Link href="/faqs" style={{ color: 'var(--on-dark-muted)' }} className="hover:text-white transition">FAQ</Link>
                <Link href="/contact" style={{ color: 'var(--on-dark-muted)' }} className="hover:text-white transition">Contact</Link>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4" style={{ color: 'var(--on-dark-muted)', fontSize: '0.8rem' }}>
            <div>© {year} Dr. Rashmi Agrawal · IVF Centre. All rights reserved.</div>
            <div>Designed with ♥ by Gulshan Chawla</div>
          </div>
        </div>
      </footer>

      <a href={`https://wa.me/${CLINIC_PHONE_INTL.replace('+', '')}`} className="fab" aria-label="WhatsApp">
        <MessageCircle style={{ width: '24px', height: '24px' }} />
      </a>
    </>
  );
}

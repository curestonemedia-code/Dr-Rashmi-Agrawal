import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <>
      <footer data-bg="#020617" data-theme="dark">
        <div className="container-x">
          <div className="grid md:grid-cols-12 gap-10 pb-12" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="md:col-span-5">
              <Link href="/" className="inline-block bg-white px-4 py-2.5 rounded-2xl mb-2 hover:bg-slate-50 transition-colors">
                <img 
                  src="/logo_transparent.png" 
                  alt="Dr. Rashmi Agarwal Logo" 
                  className="h-10 w-auto object-contain"
                />
              </Link>
              <p className="mt-6 max-w-sm" style={{ color: 'var(--on-dark-muted)', fontSize: '0.9rem', lineHeight: '1.65' }}>
                MS OBGYN (Gold Medalist) · IVF & Fertility Specialist · Senior Consultant at Dr. Rashmi Agarwal IVF Centre, providing advanced reproductive care.
              </p>
            </div>
            
            <div className="md:col-span-3">
              <div className="eyebrow mb-4" style={{ color: 'var(--brand-light)' }}>Clinical Hub</div>
              <div style={{ color: '#fff', fontWeight: 500 }}>Dr. Rashmi Agarwal IVF Centre</div>
              <div className="mt-2" style={{ color: 'var(--on-dark-muted)', fontSize: '0.875rem', lineHeight: '1.65' }}>
                NOVA IVF, Plot No 522, near Supermarket,<br/>Sector 27, Gurugram, Haryana 122009<br/>+91 88002 63884<br/>Cure@thecurestone.com
              </div>
            </div>
            
            <div className="md:col-span-2">
              <div className="eyebrow mb-4" style={{ color: 'var(--brand-light)' }}>Conditions</div>
              <div className="flex flex-col gap-2" style={{ fontSize: '0.875rem' }}>
                <Link href="/ivf" style={{ color: 'var(--on-dark-muted)' }} className="hover:text-white transition">IVF Treatment</Link>
                <Link href="/iui" style={{ color: 'var(--on-dark-muted)' }} className="hover:text-white transition">IUI Treatment</Link>
                <Link href="/fertility" style={{ color: 'var(--on-dark-muted)' }} className="hover:text-white transition">Female Fertility</Link>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <div className="eyebrow mb-4" style={{ color: 'var(--brand-light)' }}>Explore</div>
              <div className="flex flex-col gap-2" style={{ fontSize: '0.875rem' }}>
                <Link href="/#about" style={{ color: 'var(--on-dark-muted)' }} className="hover:text-white transition">About</Link>
                <Link href="/#record" style={{ color: 'var(--on-dark-muted)' }} className="hover:text-white transition">Record</Link>
                <Link href="/#faq" style={{ color: 'var(--on-dark-muted)' }} className="hover:text-white transition">FAQ</Link>
                <Link href="/#book" style={{ color: 'var(--on-dark-muted)' }} className="hover:text-white transition">Book</Link>
              </div>
            </div>
          </div>
          
          <div className="pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4" style={{ color: 'var(--on-dark-muted)', fontSize: '0.8rem' }}>
            <div>© 2026 Dr. Rashmi Agarwal · IVF Centre. All rights reserved.</div>
            <div>Designed with ♥ by Gulshan Chawla</div>
          </div>
        </div>
      </footer>

      <a href="https://wa.me/918800263884" className="fab" aria-label="WhatsApp">
        <MessageCircle style={{ width: '24px', height: '24px' }} />
      </a>
    </>
  );
}

'use client';
import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function KidneyStonesHero() {
  return (
    <section className="cond-hero edge" data-bg="#ffffff" data-theme="light">
        <div className="cond-hero-bg"></div>
        <div className="container-x relative">
            <div className="cond-breadcrumb">
                <Link href="/">Home</Link>
                <ChevronRight style={{ width: '14px', height: '14px' }} />
                <Link href="/#conditions">Conditions</Link>
                <ChevronRight style={{ width: '14px', height: '14px' }} />
                <span>Kidney Stones</span>
            </div>

            <div className="grid lg:grid-cols-12 gap-10 items-end">
                <div className="lg:col-span-8">
                    <div className="chip mb-6"><span className="chip-dot"></span>Kidney Stones · Urolithiasis</div>
                    <h1 className="display mb-6 split-words">Stones, dissolved. No cuts, no scars, no radiation.</h1>
                    <p className="body-lg max-w-2xl">The gold standard for kidney stone removal in 2026 — fluoroscopy-free RIRS and laser protocols achieving 98%+ single-session clearance across stones of every size, with same-day or next-day discharge.</p>
                </div>
                <div className="lg:col-span-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="card" style={{ padding: '1.25rem' }}>
                            <div className="body-sm">Clearance rate</div>
                            <div className="text-3xl font-semibold mt-1" style={{ letterSpacing: '-0.02em' }}>98<span className="mark">%</span></div>
                        </div>
                        <div className="card" style={{ padding: '1.25rem' }}>
                            <div className="body-sm">Discharge</div>
                            <div className="text-3xl font-semibold mt-1" style={{ letterSpacing: '-0.02em' }}>24<span className="mark">h</span></div>
                        </div>
                        <div className="card" style={{ padding: '1.25rem' }}>
                            <div className="body-sm">Radiation</div>
                            <div className="text-3xl font-semibold mt-1" style={{ letterSpacing: '-0.02em' }}>Zero</div>
                        </div>
                        <div className="card" style={{ padding: '1.25rem' }}>
                            <div className="body-sm">Incisions</div>
                            <div className="text-3xl font-semibold mt-1" style={{ letterSpacing: '-0.02em' }}>0</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

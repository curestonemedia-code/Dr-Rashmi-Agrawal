"use client";

import { useState } from "react";
import type { FaqItem } from "@/constants/faqs";

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  // A set rather than a single index: each question opens and closes on its
  // own, so a reader can open several answers at once. The first one starts
  // open as a visual cue that these expand.
  const [openItems, setOpenItems] = useState<Set<number>>(() => new Set([0]));

  const toggle = (i: number) =>
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <div className="bg-white rounded-3xl border border-slate-200/60 shadow-[0_4px_40px_rgba(0,0,0,0.03)] overflow-hidden">
      {items.map((faq, i) => {
        const isOpen = openItems.has(i);

        return (
          <div key={i} className={`border-b border-slate-200/80 last:border-b-0 transition-colors ${isOpen ? "bg-pink-50/30" : ""}`}>
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-center justify-between gap-4 py-5 px-6 text-left"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
            >
              <span className={`text-base md:text-lg font-semibold ${isOpen ? "text-pink-900" : "text-slate-800"}`}>
                {faq.q}
              </span>
              <span
                className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isOpen ? "bg-pink-600 text-white rotate-45" : "bg-slate-100 text-slate-500"
                }`}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </span>
            </button>

            {/* The answer stays in the DOM while collapsed (height animated to
                0 rather than unmounted) so crawlers can read it alongside the
                FAQPage JSON-LD. `inert` keeps collapsed text out of the tab
                order and screen-reader focus. */}
            <div
              id={`faq-panel-${i}`}
              inert={!isOpen}
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6 text-sm md:text-[15px] text-slate-600 leading-relaxed">
                  {faq.a}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

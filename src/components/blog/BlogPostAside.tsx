import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import BlogLeadForm from "./BlogLeadForm";

// Keep in sync with src/components/DoctorProfileSection.tsx.
const CREDENTIALS = [
  "MBBS (Gold Medalist) · MS (OBGY) DNB · FNB Reproductive Medicine",
  "1st Rank, IFS Fellowship Entrance Exam",
  "National 7th IVF Summit Award, IFS Achiever's Award",
];

const STATS = [
  { value: "10+", label: "Years" },
  { value: "9K+", label: "Patients" },
  { value: "5.0", label: "Google" },
];

export default function BlogPostAside({ postTitle }: { postTitle: string }) {
  return (
    <aside id="blog-enquiry" className="mt-12 scroll-mt-28 lg:mt-0" aria-label="Book a consultation">
      <div className="space-y-6 lg:sticky lg:top-28">
        <div className="rounded-3xl border border-[#ef8b92]/15 bg-white p-6 shadow-xl shadow-pink-600/5">
          <p className="text-[10px] font-black uppercase tracking-widest text-[#ef8b92]">Patient Enquiry</p>
          <h2 className="mb-1 mt-1 text-xl font-black text-slate-900">Get a call back</h2>
          <p className="mb-4 text-sm font-medium text-slate-500">Share your number — we&apos;ll reach out shortly.</p>
          <BlogLeadForm postTitle={postTitle} />
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <Image
              src="/dr rashmi.jpg"
              alt="Dr. Rashmi Agrawal"
              width={330}
              height={456}
              sizes="80px"
              className="h-20 w-20 shrink-0 rounded-2xl bg-slate-100 object-cover object-top"
            />
            <div>
              <h2 className="text-lg font-black leading-tight text-slate-900">Dr. Rashmi Agrawal</h2>
              <p className="mt-0.5 text-xs font-bold text-[#ef8b92]">Senior IVF &amp; Fertility Specialist</p>
              <div className="mt-1.5 flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-current" />
                ))}
                <span className="ml-1 text-[11px] font-bold text-slate-500">5.0 on Google</span>
              </div>
            </div>
          </div>

          <ul className="mt-5 space-y-2 text-xs font-medium leading-relaxed text-slate-600">
            {CREDENTIALS.map((line) => (
              <li key={line} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ef8b92]" />
                {line}
              </li>
            ))}
          </ul>

          <div className="mt-5 grid grid-cols-3 gap-2 border-t border-slate-100 pt-4 text-center">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="text-lg font-black text-slate-900">{s.value}</p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{s.label}</p>
              </div>
            ))}
          </div>

          <Link
            href="/about"
            className="mt-4 block text-center text-xs font-black text-[#ef8b92] hover:underline"
          >
            View full profile →
          </Link>
        </div>
      </div>
    </aside>
  );
}

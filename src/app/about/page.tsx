import type { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap,
  Award,
  Users,
  BookOpen,
  Trophy,
  Star,
  CalendarCheck2,
  MessageCircle,
  ChevronRight,
  MapPin,
} from "lucide-react";
import ExperienceAndMemberships from "@/components/ExperienceAndMemberships";

const TITLE = "Dr. Rashmi Agrawal | IVF Specialist in Gurgaon | About";
const DESCRIPTION =
  "Meet Dr. Rashmi Agrawal: MBBS (Gold Medalist), MS OBGYN, DNB, FNB Reproductive Medicine. 10+ years of experience, 9,000+ consultations, 5+ publications. Fertility doctor in Gurugram.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/about" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/about",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const awards = [
  "Topper in MBBS; winner of multiple subject quizzes",
  "Best Student Award, IGGMC MBBS Batch 2006",
  "1st Rank, IFS Reproductive Medicine Fellowship Entrance Exam 2017",
  "Dainik Jagran Health Icon Award 2024 - Reproductive Medicine",
];

const stats = [
  { icon: Users, value: "9,000+", label: "Consultations" },
  { icon: BookOpen, value: "5+", label: "Publications" },
  { icon: Trophy, value: "10+", label: "Awards" },
  { icon: Award, value: "10+", label: "Years Experience" },
];

const achievements = [
  {
    icon: Award,
    text: "Dainik Jagran Health Icon Award 2024",
    subtext: "Reproductive Medicine",
  },
  {
    icon: GraduationCap,
    text: "Gold Medalist in MBBS",
    subtext: "Indira Gandhi Government Medical College, Nagpur",
  },
  {
    icon: Trophy,
    text: "1st Rank, IFS Fellowship Entrance Exam",
    subtext: "Indian Fertility Society, 2017",
  },
  {
    icon: Star,
    text: "5/5 Patient Satisfaction",
    subtext: "Verified patient reviews on Google",
  },
];

const expertises = [
  "In Vitro Fertilization (IVF)",
  "Intracytoplasmic Sperm Injection (ICSI)",
  "Intrauterine Insemination (IUI)",
  "Egg Freezing & Preservation",
  "PCOS & Endometriosis Care",
  "Male Infertility Treatment",
  "Preimplantation Genetic Testing (PGT)",
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="cond-hero edge" data-bg="#f8fafc" data-theme="light">
        <div className="cond-hero-bg"></div>
        <div className="container-x relative text-center">
          <div className="cond-breadcrumb justify-center">
            <Link href="/">Home</Link>
            <ChevronRight style={{ width: "14px", height: "14px" }} />
            <span>About</span>
          </div>
          <div className="chip mb-6 mx-auto w-fit">
            <span className="chip-dot"></span>About Your Doctor
          </div>
          <h1 className="display-sm text-slate-900 mb-6">
            Medicine that remembers your name.
          </h1>
          <p className="body-lg text-slate-600 max-w-2xl mx-auto mb-10">
            Over 10 years helping couples who were told it would be difficult.
            Her story, training, and approach.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn btn-primary btn-lg">
              <CalendarCheck2 className="w-4 h-4" /> Book a Free Consultation
            </Link>
            <Link href="/#testimonials" className="btn btn-ghost btn-lg">
              See Patient Stories
            </Link>
          </div>
        </div>
      </section>

      {/* DOCTOR INTRODUCTION */}
      <section className="section edge">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-slate-200 shadow-2xl max-w-lg mx-auto lg:mx-0">
                <img
                  src="/dr rashmi.jpg"
                  alt="Dr. Rashmi Agrawal at the Gurugram centre"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="mt-6 bg-white border border-slate-100 p-6 rounded-[2rem] shadow-sm max-w-lg mx-auto lg:mx-0">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-pink-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-pink-200/50 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.15em]">
                      Clinic Location
                    </p>
                    <Link
                      href="https://maps.app.goo.gl/iASSY9GwRZZTEoR27"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-bold text-slate-800 hover:text-pink-600 transition-all underline"
                    >
                      <span className="text-sm font-bold text-slate-800 hover:text-pink-600 transition-all underline">
                        Gurugram
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">
                Dr. Rashmi Agrawal
              </h2>
              <p className="text-pink-600 font-bold text-sm uppercase tracking-wider mb-8">
                Senior IVF & Fertility Specialist — MBBS (Gold Medalist), MS
                (OBGY), DNB, FNB
              </p>
              <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed mb-12">
                <p>
                  Fertility medicine is the one branch where the outcome
                  isn&apos;t just a cured patient — it&apos;s a family changed
                  forever. That shapes how she works, consults, and treats.
                </p>
                <p>
                  She leads the Dr. Rashmi Agrawal IVF Centre in Gurugram:
                  9,000+ consultations, 3,000+ treatments, 5+ publications, and
                  the Gold Medal in her MBBS.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
                {stats.map((s, i) => (
                  <div
                    key={i}
                    className="bg-slate-50 border border-slate-100 p-5 rounded-3xl text-center"
                  >
                    <div className="w-10 h-10 bg-pink-50 text-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <s.icon className="w-5 h-5" />
                    </div>
                    <p className="text-xl font-black text-slate-900">
                      {s.value}
                    </p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mb-12">
                <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-6">
                  Distinguished Achievements
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {achievements.map((item, i) => (
                    <div
                      key={i}
                      className="flex gap-4 p-5 bg-slate-50 border border-slate-100 rounded-3xl"
                    >
                      <div className="shrink-0 w-10 h-10 bg-pink-50 rounded-xl flex items-center justify-center text-pink-600">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[13px] font-black text-slate-900 leading-tight mb-1">
                          {item.text}
                        </p>
                        <p className="text-[11px] font-semibold text-slate-500 leading-normal">
                          {item.subtext}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-6">
                  Surgical Expertise
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {expertises.map((exp, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-xs font-bold text-slate-700 shadow-sm"
                    >
                      <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                      {exp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ExperienceAndMemberships />

      {/* AWARDS & RECOGNITION */}
      <section className="section edge">
        <div className="container-x">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-10">
            Awards &amp; Recognition
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {awards.map((a, i) => (
              <div
                key={i}
                className="bg-slate-50/50 p-6 rounded-3xl border border-transparent hover:border-pink-100 hover:bg-white hover:shadow-xl hover:shadow-pink-500/5 transition-all flex gap-4"
              >
                <div className="shrink-0 w-10 h-10 bg-pink-50 rounded-xl flex items-center justify-center text-pink-600">
                  <Trophy className="w-5 h-5" />
                </div>
                <p className="text-slate-700 font-medium leading-relaxed pt-1.5">
                  {a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section
        className="cta-band edge section-tight"
        data-bg="#ef8b92"
        data-theme="dark"
      >
        <div className="container-x relative text-center">
          <h2 className="display-sm mb-6" style={{ color: "#fff" }}>
            Consult the Doctor, Not the Brand
          </h2>
          <p
            className="body-lg mb-10 max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            A 45-minute, unhurried first consultation: history, reports,
            ultrasound, and a clear plan.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn btn-white btn-lg">
              <CalendarCheck2 className="w-4 h-4" /> Book Your Free Consultation
            </Link>
            <a
              href="https://wa.me/918800263884"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg"
              style={{
                background: "rgba(255,255,255,0.1)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  WhatsappIcon,
  SparklesIcon,
  StarIcon,
} from "@hugeicons/core-free-icons";

const avatars = ["AO", "TK", "BM", "SF", "JI"];

const serviceChips = [
  { label: "Gel Manicure", color: "#ff6c78", from: "₦15,000" },
  { label: "Acrylic Extensions", color: "#8b5cf6", from: "₦25,000" },
  { label: "Nail Art", color: "#f59e0b", from: "₦5,000" },
  { label: "Home Service", color: "#10b981", from: "₦0 extra" },
];

const nailColors = [
  { bg: "#ff6c78", label: "Georgia Peach" },
  { bg: "#c084fc", label: "Lavender Dream" },
  { bg: "#fb7185", label: "Rose Bliss" },
  { bg: "#fbbf24", label: "Golden Hour" },
  { bg: "#34d399", label: "Mint Fresh" },
  { bg: "#f9a8d4", label: "Baby Pink" },
  { bg: "#a78bfa", label: "Violet" },
  { bg: "#ff6c78", label: "Classic Red" },
  { bg: "#6ee7b7", label: "Sage" },
];

export default function HeroSection() {
  return (
    <section className="bg-white min-h-screen flex items-center overflow-hidden relative pt-20">

      {/* Warm cream blob background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-40" style={{ background: "radial-gradient(circle, #fff0f1 0%, transparent 70%)" }} />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full opacity-30" style={{ background: "radial-gradient(circle, #fdd4d5 0%, transparent 70%)" }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT — Text */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#ff6c78]/10 text-[#ff6c78] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-[#ff6c78]/20 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff6c78] animate-pulse" />
              Lagos #1 Nail Studio
            </div>

            {/* Headline */}
            <h1 className="text-[clamp(2.75rem,5.5vw,4.5rem)] font-extrabold text-[#09090b] leading-[1.06] tracking-tight mb-6">
              Beautiful nails,<br />
              <span className="relative inline-block">
                <span
                  className="relative z-10"
                  style={{ background: "linear-gradient(135deg, #ff6c78 0%, #f43f5e 50%, #c026d3 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                >
                  delivered.
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" preserveAspectRatio="none">
                  <path d="M2 9C60 4 150 3 298 10" stroke="#ff6c78" strokeWidth="3" strokeLinecap="round" opacity="0.35" />
                </svg>
              </span>
            </h1>

            <p className="text-zinc-500 text-lg leading-relaxed mb-8 max-w-md">
              Expert gel, acrylics &amp; nail art — at our studio or your doorstep across Lagos. Book in seconds on WhatsApp.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href="#book"
                className="inline-flex items-center justify-center gap-2 text-white font-bold text-sm px-7 py-4 rounded-xl hover:scale-105 transition-transform"
                style={{ background: "linear-gradient(135deg, #ff6c78, #f43f5e)", boxShadow: "0 6px 28px #ff6c7840" }}
              >
                Book Appointment
                <HugeiconsIcon icon={ArrowRight01Icon} size={16} />
              </a>
              <a
                href="https://wa.me/234XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-bold text-sm px-7 py-4 rounded-xl border-2 border-zinc-200 text-[#09090b] hover:border-[#25d366] hover:text-[#25d366] transition-all"
              >
                <HugeiconsIcon icon={WhatsappIcon} size={16} />
                Chat on WhatsApp
              </a>
            </div>

            {/* Social proof */}
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="flex">
                  {avatars.map((a) => (
                    <div
                      key={a}
                      className="w-8 h-8 rounded-full border-2 border-white -ml-2 first:ml-0 flex items-center justify-center text-white text-[10px] font-bold"
                      style={{ background: "linear-gradient(135deg, #ff6c78, #f43f5e)" }}
                    >
                      {a}
                    </div>
                  ))}
                </div>
                <div>
                  <span className="text-[#09090b] font-bold text-sm">500+</span>
                  <span className="text-zinc-400 text-sm"> happy clients</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => (
                    <HugeiconsIcon key={i} icon={StarIcon} size={14} color="#f59e0b" />
                  ))}
                </div>
                <span className="text-[#09090b] font-bold text-sm">4.9</span>
                <span className="text-zinc-400 text-xs">/ 5</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#10b981]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                <span className="text-xs font-semibold">7-day warranty</span>
              </div>
            </div>
          </div>

          {/* RIGHT — Visual */}
          <div className="relative lg:pl-8">
            {/* Main nail color palette card */}
            <div className="relative bg-[#09090b] rounded-3xl p-6 shadow-2xl shadow-zinc-900/20 overflow-hidden">

              {/* Floating badge */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-zinc-400 text-xs uppercase tracking-widest font-semibold">Current Palette</p>
                  <p className="text-white font-bold text-lg">200+ Shades</p>
                </div>
                <div className="flex items-center gap-1.5 bg-[#ff6c78]/10 border border-[#ff6c78]/20 text-[#ff6c78] px-3 py-1.5 rounded-full text-xs font-bold">
                  <HugeiconsIcon icon={SparklesIcon} size={12} />
                  New In
                </div>
              </div>

              {/* Color grid */}
              <div className="grid grid-cols-3 gap-2.5 mb-6">
                {nailColors.map((c, i) => (
                  <div
                    key={i}
                    className="rounded-2xl relative overflow-hidden cursor-pointer hover:scale-105 transition-transform"
                    style={{ background: c.bg, height: i % 3 === 1 ? "88px" : "72px" }}
                  >
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="absolute bottom-2 left-2 right-2">
                      <p className="text-white text-[9px] font-semibold truncate drop-shadow">{c.label}</p>
                    </div>
                    {i === 0 && (
                      <div className="absolute top-2 right-2 w-4 h-4 rounded-full border-2 border-white bg-white/30" />
                    )}
                  </div>
                ))}
              </div>

              {/* Booking CTA inside card */}
              <div className="bg-zinc-800/60 rounded-2xl p-4 flex items-center justify-between border border-zinc-700">
                <div>
                  <p className="text-zinc-400 text-xs font-medium">Next available</p>
                  <p className="text-white font-bold text-sm">Today · from ₦8,000</p>
                </div>
                <a
                  href="#book"
                  className="flex items-center gap-2 text-white font-bold text-xs px-4 py-2.5 rounded-xl hover:scale-105 transition-transform"
                  style={{ background: "linear-gradient(135deg, #ff6c78, #f43f5e)" }}
                >
                  Book now
                  <HugeiconsIcon icon={ArrowRight01Icon} size={12} />
                </a>
              </div>
            </div>

            {/* Floating service chips */}
            <div className="absolute -left-4 top-8 flex flex-col gap-2 hidden lg:flex">
              {serviceChips.map((chip) => (
                <div
                  key={chip.label}
                  className="bg-white rounded-xl px-3 py-2 shadow-lg border border-zinc-100 flex items-center gap-2 whitespace-nowrap"
                >
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: chip.color }} />
                  <span className="text-[#09090b] text-xs font-semibold">{chip.label}</span>
                  <span className="text-zinc-400 text-xs ml-1">{chip.from}</span>
                </div>
              ))}
            </div>

            {/* Bottom floating WhatsApp widget */}
            <div className="mt-4 bg-white rounded-2xl p-4 border border-zinc-100 shadow-lg flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #25d366, #128c7e)" }}>
                <HugeiconsIcon icon={WhatsappIcon} size={20} color="white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[#09090b] font-bold text-sm">Instant WhatsApp booking</p>
                <p className="text-zinc-400 text-xs truncate">Confirm your appointment in minutes — no app needed</p>
              </div>
              <div className="w-2 h-2 rounded-full bg-[#25d366] flex-shrink-0 animate-pulse" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

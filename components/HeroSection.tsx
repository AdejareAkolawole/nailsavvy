"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, WhatsappIcon, MapPinIcon, StarIcon } from "@hugeicons/core-free-icons";

const ticker = ["Gel Manicure", "Acrylic Extensions", "Nail Art", "Home Service", "Classic Pedi", "Spa Manicure", "3D Nail Art", "Chrome Nails"];

const swatches = ["#ff6c78", "#c084fc", "#fb923c", "#34d399", "#f9a8d4", "#fbbf24", "#818cf8", "#f43f5e"];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col" style={{ background: "#fef8f5" }}>

      {/* ── Top peach accent strip ── */}
      <div className="absolute top-0 right-0 w-[45%] h-full pointer-events-none" style={{ background: "linear-gradient(135deg, #fff1f2 0%, #ffe4e6 50%, #fecdd3 100%)" }} />
      <div className="absolute top-0 right-0 w-[45%] h-full pointer-events-none opacity-60" style={{ background: "radial-gradient(ellipse at 80% 20%, #ff6c7830 0%, transparent 60%)" }} />

      {/* ── Vertical brand tag (desktop) ── */}
      <div className="absolute right-[calc(45%-20px)] top-1/2 -translate-y-1/2 flex-col items-center gap-3 hidden lg:flex z-10">
        <div className="w-px h-20 bg-gradient-to-b from-transparent to-zinc-300" />
        <span className="text-[10px] font-bold tracking-[0.3em] text-zinc-400 uppercase" style={{ writingMode: "vertical-rl" }}>NailSavvy Studio</span>
        <div className="w-px h-20 bg-gradient-to-t from-transparent to-zinc-300" />
      </div>

      {/* ── Main content ── */}
      <div className="flex-1 flex items-center relative z-10 pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-[1fr_420px] gap-8 lg:gap-12 items-center">

          {/* LEFT */}
          <div>
            {/* Location pill */}
            <div className="inline-flex items-center gap-1.5 bg-white border border-zinc-200 shadow-sm text-zinc-600 text-xs font-semibold px-3 py-1.5 rounded-full mb-8">
              <HugeiconsIcon icon={MapPinIcon} size={12} color="#ff6c78" />
              Lagos · Home Service Available
            </div>

            {/* Display headline — stacked editorial */}
            <div className="mb-8">
              <p className="text-zinc-300 text-[clamp(1.1rem,2vw,1.4rem)] font-extrabold uppercase tracking-[0.15em] leading-none mb-1">Your nails,</p>
              <h1 className="leading-none font-extrabold tracking-tight">
                <span
                  className="block text-[clamp(4rem,10vw,8rem)] leading-[0.95]"
                  style={{ background: "linear-gradient(135deg, #ff6c78 0%, #f43f5e 60%, #be123c 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                >
                  Perfect.
                </span>
              </h1>
              <p className="text-[#09090b] text-[clamp(1rem,2vw,1.5rem)] font-extrabold uppercase tracking-[0.12em] leading-none mt-2">Always on point.</p>
            </div>

            <p className="text-zinc-500 text-base leading-relaxed mb-8 max-w-sm">
              Gel, acrylics, nail art &amp; more — in our Lagos studio or delivered to your door. Booked in seconds via WhatsApp.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="#book"
                className="inline-flex items-center gap-2 text-white font-bold text-sm px-6 py-3.5 rounded-2xl transition-transform hover:scale-[1.03]"
                style={{ background: "linear-gradient(135deg, #ff6c78, #f43f5e)", boxShadow: "0 8px 24px #ff6c7838" }}
              >
                Book Appointment
                <HugeiconsIcon icon={ArrowRight01Icon} size={15} />
              </a>
              <a
                href="https://wa.me/234XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold text-sm px-6 py-3.5 rounded-2xl border-2 text-[#09090b] transition-all hover:border-[#25d366] hover:text-[#25d366]"
                style={{ borderColor: "#e5e7eb" }}
              >
                <HugeiconsIcon icon={WhatsappIcon} size={15} />
                WhatsApp Us
              </a>
            </div>

            {/* Nail shade strip */}
            <div>
              <p className="text-zinc-400 text-xs font-semibold uppercase tracking-widest mb-3">200+ shades in stock</p>
              <div className="flex gap-2 flex-wrap">
                {swatches.map((c, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white shadow-md hover:scale-125 transition-transform cursor-pointer"
                    style={{ background: c }}
                  />
                ))}
                <div className="w-8 h-8 rounded-full bg-zinc-100 border-2 border-white shadow-md flex items-center justify-center text-zinc-500 text-[10px] font-bold">
                  +192
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Booking card */}
          <div className="flex flex-col gap-4">

            {/* Appointment card */}
            <div className="bg-white rounded-3xl shadow-xl shadow-zinc-200/60 border border-zinc-100 overflow-hidden">
              {/* Card header */}
              <div className="px-6 py-5 flex items-center justify-between border-b border-zinc-100" style={{ background: "linear-gradient(135deg, #ff6c78, #f43f5e)" }}>
                <div>
                  <p className="text-white/80 text-xs font-semibold uppercase tracking-widest">Next Available</p>
                  <p className="text-white font-extrabold text-lg leading-tight">Today · Any time</p>
                </div>
                <div className="flex items-center gap-1 bg-white/20 rounded-full px-3 py-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  <span className="text-white text-xs font-bold">Open</span>
                </div>
              </div>

              {/* Services listed */}
              <div className="px-6 py-5 space-y-3">
                {[
                  { name: "Gel Manicure", price: "₦15,000", dur: "1h 30m", color: "#ff6c78" },
                  { name: "Acrylic Extensions", price: "₦25,000", dur: "2h", color: "#8b5cf6" },
                  { name: "Nail Art", price: "₦5,000", dur: "30m", color: "#f59e0b" },
                  { name: "Home Service", price: "+ Zone fee", dur: "At your door", color: "#10b981" },
                ].map((s) => (
                  <div key={s.name} className="flex items-center gap-3 group cursor-pointer">
                    <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: s.color }} />
                    <div className="flex-1 min-w-0">
                      <span className="text-[#09090b] font-semibold text-sm">{s.name}</span>
                      <span className="text-zinc-400 text-xs ml-2">{s.dur}</span>
                    </div>
                    <span className="font-bold text-sm flex-shrink-0" style={{ color: s.color }}>{s.price}</span>
                  </div>
                ))}
              </div>

              {/* Book button */}
              <div className="px-6 pb-6">
                <a
                  href="#book"
                  className="flex items-center justify-center gap-2 w-full text-white font-bold text-sm py-3.5 rounded-2xl hover:scale-[1.02] transition-transform"
                  style={{ background: "linear-gradient(135deg, #ff6c78, #f43f5e)", boxShadow: "0 4px 16px #ff6c7828" }}
                >
                  Book via WhatsApp
                  <HugeiconsIcon icon={WhatsappIcon} size={16} />
                </a>
              </div>
            </div>

            {/* Social proof pill */}
            <div className="bg-white rounded-2xl border border-zinc-100 shadow-sm px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex">
                  {["AO","TK","BM"].map((a) => (
                    <div
                      key={a}
                      className="w-7 h-7 rounded-full border-2 border-white -ml-2 first:ml-0 flex items-center justify-center text-white text-[9px] font-bold"
                      style={{ background: "linear-gradient(135deg, #ff6c78, #f43f5e)" }}
                    >
                      {a}
                    </div>
                  ))}
                </div>
                <div className="text-zinc-500 text-xs">
                  <span className="text-[#09090b] font-bold">500+</span> happy clients
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs font-bold text-[#09090b]">
                <HugeiconsIcon icon={StarIcon} size={14} color="#f59e0b" />
                4.9
                <span className="text-zinc-400 font-normal ml-0.5">rating</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Scrolling service ticker ── */}
      <div className="relative z-10 border-y border-zinc-200 bg-white overflow-hidden py-3.5">
        <div className="flex items-center gap-0 animate-[marquee_20s_linear_infinite]" style={{ width: "max-content" }}>
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="inline-flex items-center gap-3 text-zinc-500 text-sm font-semibold px-6 whitespace-nowrap">
              <span className="w-1 h-1 rounded-full bg-[#ff6c78] flex-shrink-0" />
              {t}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

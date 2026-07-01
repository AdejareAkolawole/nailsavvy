"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  SparklesIcon,
  ArrowRight01Icon,
  Home01Icon,
} from "@hugeicons/core-free-icons";

const services = [
  {
    id: 1,
    name: "Gel Manicure",
    price: "From ₦15,000",
    duration: "1h 30min",
    tag: "Most Popular",
    description: "Long-lasting gel polish, chip-free for up to 3 weeks. 200+ shades available.",
  },
  {
    id: 2,
    name: "Acrylic Extensions",
    price: "From ₦25,000",
    duration: "2h",
    tag: "Trending",
    description: "Custom-length acrylics shaped and finished to absolute perfection.",
  },
  {
    id: 3,
    name: "Nail Art",
    price: "From ₦5,000",
    duration: "30–60min",
    tag: null,
    description: "Minimalist line work to full 3D statement nails — bespoke to you.",
  },
  {
    id: 4,
    name: "Classic Pedicure",
    price: "From ₦12,000",
    duration: "1h",
    tag: null,
    description: "Full foot care — soak, scrub, exfoliation, massage, and polish.",
  },
  {
    id: 5,
    name: "Classic Manicure",
    price: "From ₦8,000",
    duration: "45min",
    tag: null,
    description: "Cuticle care, precise shaping, and a flawless polish finish.",
  },
  {
    id: 6,
    name: "Home Service",
    price: "Zone fee + service",
    duration: "We come to you",
    tag: "New",
    description: "All services delivered at your door. Instant booking, WhatsApp confirm.",
    isHome: true,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#09090b] py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="max-w-2xl mb-20">
          <div className="flex items-center gap-2 mb-4">
            <HugeiconsIcon icon={SparklesIcon} size={14} color="#ff6c78" />
            <p className="text-[#ff6c78] text-sm font-bold uppercase tracking-widest">Our Services</p>
          </div>
          <h2 className="text-[clamp(2.25rem,5vw,3.5rem)] font-extrabold text-white leading-tight tracking-tight mb-5">
            Everything you need.<br />
            <span className="text-zinc-500">Nothing you don&apos;t.</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Premium nail care in-studio or at your doorstep. Click any service to book instantly.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-800">
          {services.map((s) => (
            <a
              key={s.id}
              href="#book"
              className="group bg-[#09090b] p-8 hover:bg-zinc-900 transition-colors block relative min-w-0"
            >
              {/* Tag */}
              {s.tag && (
                <span className={`inline-block text-xs font-bold uppercase tracking-widest px-2.5 py-1 mb-5 ${s.tag === "Most Popular" ? "bg-[#ff6c78]/10 text-[#ff6c78] border border-[#ff6c78]/20" : "bg-zinc-800 text-zinc-400 border border-zinc-700"}`}>
                  {s.tag}
                </span>
              )}
              {!s.tag && <div className="mb-5 h-7" />}

              {/* Icon area */}
              <div className="w-11 h-11 rounded-xl bg-zinc-800 group-hover:bg-[#ff6c78]/10 border border-zinc-700 group-hover:border-[#ff6c78]/30 flex items-center justify-center mb-5 transition-all">
                {s.isHome
                  ? <HugeiconsIcon icon={Home01Icon} size={20} color="currentColor" className="text-zinc-400 group-hover:text-[#ff6c78] transition-colors" />
                  : <span className="text-zinc-500 group-hover:text-[#ff6c78] transition-colors text-lg">💅</span>
                }
              </div>

              <h3 className="text-white font-bold text-xl mb-2">{s.name}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">{s.description}</p>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[#ff6c78] font-bold text-sm">{s.price}</div>
                  <div className="text-zinc-600 text-xs mt-0.5">{s.duration}</div>
                </div>
                <div className="w-8 h-8 rounded-full border border-zinc-700 group-hover:border-[#ff6c78] group-hover:bg-[#ff6c78] flex items-center justify-center transition-all">
                  <HugeiconsIcon icon={ArrowRight01Icon} size={14} color="currentColor" className="text-zinc-600 group-hover:text-white transition-colors" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex items-center justify-between flex-wrap gap-4">
          <p className="text-zinc-500 text-sm">Not sure what to get? Our team will guide you.</p>
          <a
            href="#book"
            className="inline-flex items-center gap-2 bg-[#ff6c78] text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-[#e85d68] transition-colors shadow-lg shadow-[#ff6c78]/25"
          >
            Book now — it&apos;s easy
            <HugeiconsIcon icon={ArrowRight01Icon} size={16} color="white" />
          </a>
        </div>
      </div>
    </section>
  );
}

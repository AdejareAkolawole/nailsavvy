"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  SparklesIcon,
  ArrowRight01Icon,
  Home01Icon,
  StarIcon,
  Crown02Icon,
  HeartCheckIcon,
  Clock01Icon,
} from "@hugeicons/core-free-icons";

const services = [
  {
    id: 1,
    icon: StarIcon,
    name: "Gel Manicure",
    price: "From ₦15,000",
    duration: "1h 30min",
    tag: "Most Popular",
    tagColor: "bg-[#ff6c78]/10 text-[#ff6c78] border border-[#ff6c78]/20",
    accentColor: "#ff6c78",
    description: "Long-lasting gel polish, chip-free for up to 3 weeks. 200+ shades available.",
  },
  {
    id: 2,
    icon: Crown02Icon,
    name: "Acrylic Extensions",
    price: "From ₦25,000",
    duration: "2h",
    tag: "Trending",
    tagColor: "bg-violet-500/10 text-violet-400 border border-violet-500/20",
    accentColor: "#8b5cf6",
    description: "Custom-length acrylics shaped and finished to absolute perfection.",
  },
  {
    id: 3,
    icon: SparklesIcon,
    name: "Nail Art",
    price: "From ₦5,000",
    duration: "30–60min",
    tag: "Creative",
    tagColor: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
    accentColor: "#f59e0b",
    description: "Minimalist line work to full 3D statement nails — bespoke to you.",
  },
  {
    id: 4,
    icon: HeartCheckIcon,
    name: "Classic Pedicure",
    price: "From ₦12,000",
    duration: "1h",
    tag: "Self-Care",
    tagColor: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    accentColor: "#10b981",
    description: "Full foot care — soak, scrub, exfoliation, massage, and polish.",
  },
  {
    id: 5,
    icon: Clock01Icon,
    name: "Classic Manicure",
    price: "From ₦8,000",
    duration: "45min",
    tag: "Quick",
    tagColor: "bg-sky-500/10 text-sky-400 border border-sky-500/20",
    accentColor: "#0ea5e9",
    description: "Cuticle care, precise shaping, and a flawless polish finish.",
  },
  {
    id: 6,
    icon: Home01Icon,
    name: "Home Service",
    price: "Zone fee + service",
    duration: "We come to you",
    tag: "New",
    tagColor: "bg-rose-500/10 text-rose-400 border border-rose-500/20",
    accentColor: "#f43f5e",
    description: "All services delivered at your door. Book online in minutes, we come to you.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#09090b] py-16 md:py-24 lg:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="max-w-2xl mb-12 md:mb-20">
          <div className="flex items-center gap-2 mb-4">
            <HugeiconsIcon icon={SparklesIcon} size={14} color="#ff6c78" />
            <p className="text-[#ff6c78] text-sm font-bold uppercase tracking-widest">Our Services</p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight mb-5">
            Nails that speak<br />
            <span className="text-zinc-500">before you do.</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Six services, one standard — perfect. Book online, we handle the rest.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-800">
          {services.map((s) => (
            <a
              key={s.id}
              href="#book"
              className="group bg-[#09090b] p-6 sm:p-8 hover:bg-zinc-900 transition-colors block relative overflow-hidden"
            >
              {/* Colored top border on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: `linear-gradient(90deg, ${s.accentColor}, transparent)` }}
              />

              {/* Tag */}
              <div className="mb-5 h-6">
                <span className={`inline-block text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-md ${s.tagColor}`}>
                  {s.tag}
                </span>
              </div>

              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all border"
                style={{
                  backgroundColor: `${s.accentColor}15`,
                  borderColor: `${s.accentColor}30`,
                  color: s.accentColor,
                }}
              >
                <HugeiconsIcon icon={s.icon} size={20} />
              </div>

              <h3 className="text-white font-bold text-xl mb-2">{s.name}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">{s.description}</p>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm" style={{ color: s.accentColor }}>{s.price}</div>
                  <div className="text-zinc-600 text-xs mt-0.5">{s.duration}</div>
                </div>
                <div
                  className="w-8 h-8 rounded-full border flex items-center justify-center transition-all group-hover:scale-110"
                  style={{
                    borderColor: `${s.accentColor}40`,
                    color: s.accentColor,
                    backgroundColor: `${s.accentColor}10`,
                  }}
                >
                  <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">Not sure what to get? Our team will guide you.</p>
          <a
            href="#book"
            className="inline-flex items-center gap-2 bg-[#ff6c78] text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-[#e85d68] transition-colors shadow-lg shadow-[#ff6c78]/25"
          >
            Book now — it&apos;s easy
            <HugeiconsIcon icon={ArrowRight01Icon} size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

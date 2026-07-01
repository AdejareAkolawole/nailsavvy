"use client";

import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  SparklesIcon,
  ArrowRight01Icon,
  PlayIcon,
  TiktokIcon,
} from "@hugeicons/core-free-icons";

const services = [
  {
    id: 1,
    name: "Gel Manicure",
    price: "From ₦15,000",
    duration: "1h 30min",
    tag: "Most Popular",
    tagColor: "bg-[#ff6c78]",
    description: "Long-lasting gel polish that stays chip-free for up to 3 weeks. Choose from 200+ shades.",
    gradient: "from-[#fdd4d5] to-[#fbaaab]",
  },
  {
    id: 2,
    name: "Acrylic Extensions",
    price: "From ₦25,000",
    duration: "2h",
    tag: "Trending",
    tagColor: "bg-black",
    description: "Custom length acrylic extensions shaped and finished to absolute perfection.",
    gradient: "from-[#ffe4e6] to-[#fecdd3]",
  },
  {
    id: 3,
    name: "Nail Art",
    price: "From ₦5,000",
    duration: "30–60min",
    tag: null,
    tagColor: "",
    description: "Bespoke nail art — from minimalist line work to full 3D statement designs.",
    gradient: "from-[#fdf2f8] to-[#fce7f3]",
  },
  {
    id: 4,
    name: "Classic Pedicure",
    price: "From ₦12,000",
    duration: "1h",
    tag: null,
    tagColor: "",
    description: "Full foot care — soak, scrub, exfoliation, massage, and your choice of polish.",
    gradient: "from-[#fff1f2] to-[#ffe4e6]",
  },
  {
    id: 5,
    name: "Classic Manicure",
    price: "From ₦8,000",
    duration: "45min",
    tag: null,
    tagColor: "",
    description: "Cuticle care, precise shaping, and a flawless polish finish every time.",
    gradient: "from-[#fdf4ff] to-[#fae8ff]",
  },
  {
    id: 6,
    name: "Home Service",
    price: "Zone fee + service",
    duration: "We come to you",
    tag: "New",
    tagColor: "bg-[#ff6c78]",
    description: "All our services at your doorstep. Instant booking, immediate confirmation via WhatsApp.",
    gradient: "from-[#fff7ed] to-[#ffedd5]",
  },
];

export default function ServicesSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="services" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <HugeiconsIcon icon={SparklesIcon} size={16} color="#ff6c78" />
              <span className="text-[#ff6c78] text-xs tracking-[0.3em] uppercase font-medium">What We Offer</span>
            </div>
            <h2 className="font-script text-5xl md:text-6xl font-light text-black leading-tight">
              Services Built<br />
              <span className="italic">for Every Mood</span>
            </h2>
          </div>
          <p className="text-black/40 text-sm leading-relaxed max-w-xs md:text-right">
            Tap any service to watch it come to life on TikTok. Every finish is crafted by hand.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/5">
          {services.map((s) => (
            <div
              key={s.id}
              className="relative bg-white group cursor-pointer overflow-hidden"
              onMouseEnter={() => setHovered(s.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Image area */}
              <div className={`relative h-64 bg-gradient-to-br ${s.gradient} overflow-hidden`}>

                {/* Decorative circle */}
                <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-white/20" />
                <div className="absolute -left-4 -bottom-4 w-24 h-24 rounded-full bg-white/30" />

                {/* Service name large watermark */}
                <span className="absolute bottom-4 left-5 font-script text-5xl text-black/8 font-light select-none">
                  {s.name}
                </span>

                {/* Price pill */}
                <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-sm px-3 py-1.5 text-xs font-semibold text-black">
                  {s.price}
                </div>

                {/* Tag */}
                {s.tag && (
                  <div className={`absolute top-5 left-5 ${s.tagColor} text-white text-xs px-2.5 py-1 font-medium tracking-wide`}>
                    {s.tag}
                  </div>
                )}

                {/* TikTok hover overlay */}
                <a
                  href="https://www.tiktok.com/@nailsavvyng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`absolute inset-0 bg-black/75 flex flex-col items-center justify-center gap-3 transition-opacity duration-300 ${hovered === s.id ? "opacity-100" : "opacity-0"}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="w-16 h-16 rounded-full bg-[#ff6c78] flex items-center justify-center">
                    <HugeiconsIcon icon={PlayIcon} size={24} color="white" />
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <HugeiconsIcon icon={TiktokIcon} size={14} color="white" />
                    <span className="text-sm tracking-wide">Watch on TikTok</span>
                  </div>
                </a>
              </div>

              {/* Info */}
              <div className="p-6 border-b border-black/5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-script text-2xl text-black">{s.name}</h3>
                  <span className="text-black/30 text-xs mt-1 whitespace-nowrap">{s.duration}</span>
                </div>
                <p className="text-black/50 text-sm leading-relaxed">{s.description}</p>

                <div className="mt-4 flex items-center gap-1 text-[#ff6c78] text-xs font-medium group-hover:gap-2 transition-all">
                  <span>Book this service</span>
                  <HugeiconsIcon icon={ArrowRight01Icon} size={14} color="#ff6c78" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-black/8 pt-10">
          <p className="text-black/40 text-sm">Not sure what to get? Our team will help you choose.</p>
          <a
            href="#book"
            className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-[#ff6c78] transition-colors group"
          >
            Book a Service
            <HugeiconsIcon icon={ArrowRight01Icon} size={16} color="white" />
          </a>
        </div>
      </div>
    </section>
  );
}

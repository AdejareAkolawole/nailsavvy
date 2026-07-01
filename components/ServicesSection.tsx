"use client";

import { useState } from "react";

const services = [
  {
    id: 1,
    name: "Gel Manicure",
    price: "From ₦15,000",
    duration: "1h 30min",
    description: "Long-lasting gel polish that stays chip-free for up to 3 weeks.",
    videoPlaceholder: "https://www.tiktok.com/@nailsavvyng",
    emoji: "💅",
    tag: "Most Popular",
  },
  {
    id: 2,
    name: "Acrylic Extensions",
    price: "From ₦25,000",
    duration: "2h",
    description: "Custom length acrylic extensions shaped and finished to perfection.",
    videoPlaceholder: "https://www.tiktok.com/@nailsavvyng",
    emoji: "✨",
    tag: "Trending",
  },
  {
    id: 3,
    name: "Nail Art",
    price: "From ₦5,000",
    duration: "30–60min",
    description: "Bespoke nail art designs — from minimalist to statement-making.",
    videoPlaceholder: "https://www.tiktok.com/@nailsavvyng",
    emoji: "🎨",
    tag: null,
  },
  {
    id: 4,
    name: "Pedicure",
    price: "From ₦12,000",
    duration: "1h",
    description: "Full foot care treatment — soak, scrub, massage, and polish.",
    videoPlaceholder: "https://www.tiktok.com/@nailsavvyng",
    emoji: "🌸",
    tag: null,
  },
  {
    id: 5,
    name: "Manicure",
    price: "From ₦8,000",
    duration: "45min",
    description: "Classic manicure with cuticle care, shaping, and your choice of polish.",
    videoPlaceholder: "https://www.tiktok.com/@nailsavvyng",
    emoji: "💗",
    tag: null,
  },
  {
    id: 6,
    name: "Home Service",
    price: "Zone price + service",
    duration: "We come to you",
    description: "All our services delivered at your home. Instant booking, immediate confirmation.",
    videoPlaceholder: "https://www.tiktok.com/@nailsavvyng",
    emoji: "🏠",
    tag: "New",
  },
];

function ServiceCard({ service }: { service: typeof services[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative group cursor-pointer overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Instagram-style card */}
      <div className="aspect-square bg-[#fdd4d5] flex items-center justify-center relative overflow-hidden">
        {/* Emoji placeholder — in production this would be a video */}
        <span className="text-7xl">{service.emoji}</span>

        {/* Hover overlay — mimics clicking to see video */}
        <div className={`absolute inset-0 bg-black/70 flex flex-col items-center justify-center transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}>
          <a
            href={service.videoPlaceholder}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-white"
          >
            <div className="w-14 h-14 rounded-full bg-[#ff6c78] flex items-center justify-center">
              <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            <span className="text-sm tracking-wide">Watch on TikTok</span>
          </a>
        </div>

        {/* Tag badge */}
        {service.tag && (
          <span className="absolute top-3 left-3 bg-[#ff6c78] text-white text-xs px-2 py-0.5 font-medium tracking-wide">
            {service.tag}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="pt-3 pb-4 px-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-script text-xl text-black">{service.name}</h3>
          <span className="text-[#ff6c78] text-sm font-medium whitespace-nowrap">{service.price}</span>
        </div>
        <p className="text-black/50 text-xs mt-1">{service.duration}</p>
        <p className="text-black/70 text-sm mt-2 leading-relaxed">{service.description}</p>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#ff6c78] text-xs tracking-[0.3em] uppercase mb-3">What We Offer</p>
          <h2 className="font-script text-5xl md:text-6xl font-light text-black">Our Services</h2>
          <p className="text-black/50 mt-4 max-w-md mx-auto text-sm leading-relaxed">
            Tap any service to watch the magic happen. Every look crafted with precision.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#book"
            className="inline-block border border-black px-8 py-3.5 text-sm tracking-widest uppercase font-medium hover:bg-black hover:text-white transition-colors"
          >
            Book a Service
          </a>
        </div>
      </div>
    </section>
  );
}

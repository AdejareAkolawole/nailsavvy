"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  InstagramIcon,
  TiktokIcon,
  Facebook01Icon,
  ArrowRight01Icon,
  StarIcon,
  Crown02Icon,
  HeartCheckIcon,
  Clock01Icon,
} from "@hugeicons/core-free-icons";

const stats = [
  { value: "500+", label: "Happy Clients", icon: HeartCheckIcon, color: "#ff6c78", bg: "#ff6c78" },
  { value: "4.9/5", label: "Average Rating", icon: StarIcon, color: "#f59e0b", bg: "#f59e0b" },
  { value: "7-Day", label: "Nail Warranty", icon: Crown02Icon, color: "#8b5cf6", bg: "#8b5cf6" },
  { value: "< 1hr", label: "Booking Response", icon: Clock01Icon, color: "#10b981", bg: "#10b981" },
];

const socials = [
  { platform: "Instagram", handle: "@nailsavvyng", followers: "12.4K", icon: InstagramIcon, url: "https://instagram.com/nailsavvyng", color: "#e1306c" },
  { platform: "TikTok", handle: "@nailsavvyng", followers: "8.2K", icon: TiktokIcon, url: "https://tiktok.com/@nailsavvyng", color: "#000000" },
  { platform: "Facebook", handle: "NailSavvy NG", followers: "3.1K", icon: Facebook01Icon, url: "https://facebook.com/nailsavvyng", color: "#1877f2" },
];

export default function SocialProofSection() {
  return (
    <section id="gallery" className="py-16 md:py-24 lg:py-28 px-4 sm:px-6" style={{ background: "linear-gradient(180deg, #fff7f8 0%, #ffffff 60%)" }}>
      <div className="max-w-6xl mx-auto">

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 md:mb-24">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center border"
              style={{ background: `${s.bg}08`, borderColor: `${s.bg}20` }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${s.color}15`, color: s.color }}
              >
                <HugeiconsIcon icon={s.icon} size={20} />
              </div>
              <div
                className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-none mb-1"
                style={{ color: s.color }}
              >
                {s.value}
              </div>
              <div className="text-zinc-500 text-xs font-semibold uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Social + promo */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left */}
          <div>
            <p className="text-[#ff6c78] text-sm font-bold uppercase tracking-widest mb-4">Follow the Journey</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#09090b] leading-tight tracking-tight mb-5">
              Real nails. Real clients.<br />
              <span className="text-zinc-400">Every day on socials.</span>
            </h2>
            <p className="text-zinc-500 text-base leading-relaxed mb-8 md:mb-10 max-w-sm">
              Daily nail inspo, client reveals, and behind-the-scenes from our studio.
            </p>

            <div className="flex flex-col gap-3">
              {socials.map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border border-zinc-200 rounded-xl px-5 py-4 hover:border-transparent transition-all"
                  style={{ ["--hover-shadow" as string]: `0 0 0 2px ${s.color}40` }}
                  onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 0 0 2px ${s.color}40`)}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = "")}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
                      style={{ background: `${s.color}12`, color: s.color }}
                    >
                      <HugeiconsIcon icon={s.icon} size={18} />
                    </div>
                    <div>
                      <div className="text-[#09090b] font-semibold text-sm">{s.platform}</div>
                      <div className="text-zinc-400 text-xs">{s.handle}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-zinc-300 text-xs font-medium hidden sm:block">{s.followers} followers</span>
                    <div className="text-zinc-300 group-hover:text-[#ff6c78] transition-colors">
                      <HugeiconsIcon icon={ArrowRight01Icon} size={16} />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Promo card */}
          <div className="relative">
            <div className="rounded-2xl p-8 sm:p-10 lg:p-12 overflow-hidden" style={{ background: "linear-gradient(135deg, #09090b 0%, #1a0a0b 60%, #2a0a10 100%)" }}>
              {/* Decorative blobs */}
              <div className="absolute -right-8 -top-8 w-48 h-48 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, #ff6c7830 0%, transparent 70%)" }} />
              <div className="absolute -left-8 -bottom-8 w-40 h-40 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, #8b5cf620 0%, transparent 70%)" }} />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-[#ff6c78]/10 text-[#ff6c78] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-[#ff6c78]/20 mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff6c78] animate-pulse" />
                  Limited Offer
                </div>
                <h3 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
                  First visit?<br />
                  <span style={{ background: "linear-gradient(90deg, #ff6c78, #fbaaab)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    Get 10% off.
                  </span>
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-10 max-w-xs">
                  New clients get 10% off their first appointment. Book online — the discount applies automatically.
                </p>
                <a
                  href="#book"
                  className="inline-flex items-center gap-2 text-white font-bold text-sm px-7 py-4 rounded-xl transition-all hover:scale-105"
                  style={{ background: "linear-gradient(135deg, #ff6c78, #f43f5e)", boxShadow: "0 8px 32px #ff6c7840" }}
                >
                  Claim offer
                  <HugeiconsIcon icon={ArrowRight01Icon} size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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
  { value: "500+", label: "Happy Clients", icon: HeartCheckIcon },
  { value: "4.9★", label: "Average Rating", icon: StarIcon },
  { value: "7-Day", label: "Nail Warranty", icon: Crown02Icon },
  { value: "< 1hr", label: "Booking Response", icon: Clock01Icon },
];

const socialLinks = [
  {
    platform: "Instagram",
    handle: "@nailsavvyng",
    url: "https://www.instagram.com/nailsavvyng",
    icon: InstagramIcon,
    followers: "12.4K",
  },
  {
    platform: "TikTok",
    handle: "@nailsavvyng",
    url: "https://www.tiktok.com/@nailsavvyng",
    icon: TiktokIcon,
    followers: "8.2K",
  },
  {
    platform: "Facebook",
    handle: "NailSavvy NG",
    url: "https://www.facebook.com/nailsavvyng",
    icon: Facebook01Icon,
    followers: "3.1K",
  },
];

export default function SocialProofSection() {
  return (
    <section id="gallery" className="bg-black text-white">

      {/* Stats strip */}
      <div className="border-b border-white/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`py-10 px-6 flex flex-col items-center text-center ${i < 3 ? "border-r border-white/8" : ""}`}
            >
              <HugeiconsIcon icon={s.icon} size={20} color="#ff6c78" className="mb-3" />
              <div className="font-script text-4xl text-white font-light">{s.value}</div>
              <div className="text-white/30 text-xs tracking-widest uppercase mt-1.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Social + promo */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left — social */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <HugeiconsIcon icon={InstagramIcon} size={16} color="#ff6c78" />
              <span className="text-[#ff6c78] text-xs tracking-[0.3em] uppercase font-medium">See Our Work</span>
            </div>
            <h2 className="font-script text-5xl md:text-6xl font-light leading-tight mb-6">
              Follow the<br />
              <span className="text-[#ff6c78] italic">Journey</span>
            </h2>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm mb-10">
              Every post is a real client, a real story. Daily nail inspo, behind-the-scenes, and client reveals — all on our socials.
            </p>

            <div className="flex flex-col gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border border-white/10 px-5 py-4 hover:border-[#ff6c78] hover:bg-[#ff6c78]/5 transition-all duration-200"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:border-[#ff6c78] transition-colors">
                      <HugeiconsIcon icon={s.icon} size={18} color="white" />
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium">{s.platform}</div>
                      <div className="text-white/30 text-xs">{s.handle}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-white/20 text-xs">{s.followers} followers</span>
                    <HugeiconsIcon icon={ArrowRight01Icon} size={16} color="rgba(255,255,255,0.2)" className="group-hover:text-[#ff6c78] transition-colors" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — promo banner */}
          <div className="relative">
            <div className="bg-[#ff6c78] p-12 lg:p-14">
              <div className="mb-6">
                <HugeiconsIcon icon={Crown02Icon} size={32} color="rgba(0,0,0,0.2)" />
              </div>
              <p className="text-black/60 text-xs tracking-[0.3em] uppercase font-medium mb-4">Limited Offer</p>
              <h3 className="font-script text-5xl lg:text-6xl text-white font-light leading-tight mb-4">
                First Visit?<br />
                Get 10% Off.
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-10 max-w-xs">
                New clients get 10% off their first appointment. Book online — the discount applies automatically. No code needed.
              </p>
              <a
                href="#book"
                className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-white hover:text-black transition-colors"
              >
                Claim Offer
                <HugeiconsIcon icon={ArrowRight01Icon} size={16} color="currentColor" />
              </a>
            </div>
            {/* Decorative offset border */}
            <div className="absolute -bottom-3 -right-3 w-full h-full border border-white/10 -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}

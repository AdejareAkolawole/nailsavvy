"use client";

import Logo from "./Logo";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  InstagramIcon,
  TiktokIcon,
  Facebook01Icon,
  WhatsappIcon,
  Mail01Icon,
  MapPinIcon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";

const socials = [
  { icon: InstagramIcon, href: "https://instagram.com/nailsavvyng", label: "Instagram" },
  { icon: TiktokIcon, href: "https://tiktok.com/@nailsavvyng", label: "TikTok" },
  { icon: Facebook01Icon, href: "https://facebook.com/nailsavvyng", label: "Facebook" },
  { icon: WhatsappIcon, href: "https://wa.me/234XXXXXXXXXX", label: "WhatsApp" },
];

const links = {
  Services: ["Gel Manicure", "Acrylic Extensions", "Nail Art", "Classic Pedicure", "Home Service"],
  Company: ["About Us", "Our Team", "Gallery", "Testimonials", "Book Now"],
};

export default function Footer() {
  return (
    <footer className="bg-[#09090b] text-white border-t border-zinc-800">

      {/* CTA strip */}
      <div className="border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#ff6c78] animate-pulse" />
            <span className="text-zinc-300 text-sm font-medium">Get updates on new services, offers &amp; nail inspo on WhatsApp</span>
          </div>
          <a
            href="https://wa.me/234XXXXXXXXXX?text=Hi%20NailSavvy!%20I%27d%20love%20to%20stay%20updated."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#ff6c78] text-white font-bold text-xs px-5 py-3 rounded-xl hover:bg-[#e85d68] transition-colors whitespace-nowrap shadow-lg shadow-[#ff6c78]/25"
          >
            <HugeiconsIcon icon={WhatsappIcon} size={14} color="white" />
            Join on WhatsApp
          </a>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo variant="light" size={48} />
            <p className="text-zinc-500 text-sm mt-5 max-w-xs leading-relaxed">
              Nigeria&apos;s premium nail studio — expert manicures, pedicures, and nail art delivered in-studio and at your doorstep across Lagos.
            </p>
            <div className="mt-8 space-y-3">
              <a href="https://wa.me/234XXXXXXXXXX" className="flex items-center gap-3 text-zinc-500 hover:text-[#ff6c78] transition-colors text-sm group">
                <HugeiconsIcon icon={WhatsappIcon} size={15} color="currentColor" />
                WhatsApp Us
                <HugeiconsIcon icon={ArrowRight01Icon} size={12} color="currentColor" className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="mailto:hello@nailsavvyng.com" className="flex items-center gap-3 text-zinc-500 hover:text-[#ff6c78] transition-colors text-sm">
                <HugeiconsIcon icon={Mail01Icon} size={15} color="currentColor" />
                hello@nailsavvyng.com
              </a>
              <div className="flex items-center gap-3 text-zinc-600 text-sm">
                <HugeiconsIcon icon={MapPinIcon} size={15} color="currentColor" />
                Lagos, Nigeria
              </div>
            </div>
            <div className="flex gap-2 mt-8">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:border-[#ff6c78] hover:text-[#ff6c78] hover:bg-[#ff6c78]/10 transition-all"
                >
                  <HugeiconsIcon icon={s.icon} size={15} color="currentColor" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([cat, items]) => (
            <div key={cat}>
              <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-6">{cat}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-zinc-500 text-sm hover:text-[#ff6c78] transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-zinc-600 text-xs">© {new Date().getFullYear()} NailSavvy. All rights reserved.</p>
          <p className="text-zinc-700 text-xs">nailsavvyng.com</p>
        </div>
      </div>
    </footer>
  );
}

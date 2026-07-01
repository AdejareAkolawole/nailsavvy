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
  SparklesIcon,
} from "@hugeicons/core-free-icons";

const socials = [
  { icon: InstagramIcon, href: "https://www.instagram.com/nailsavvyng", label: "Instagram" },
  { icon: TiktokIcon, href: "https://www.tiktok.com/@nailsavvyng", label: "TikTok" },
  { icon: Facebook01Icon, href: "https://www.facebook.com/nailsavvyng", label: "Facebook" },
  { icon: WhatsappIcon, href: "https://wa.me/234XXXXXXXXXX", label: "WhatsApp" },
];

const links = {
  Services: ["Gel Manicure", "Acrylic Extensions", "Nail Art", "Classic Pedicure", "Home Service"],
  Company: ["About NailSavvy", "Our Team", "Gallery", "Testimonials", "Book Now"],
};

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/8">

      {/* Newsletter / CTA strip */}
      <div className="border-b border-white/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <HugeiconsIcon icon={SparklesIcon} size={18} color="#ff6c78" />
            <span className="text-white text-sm font-medium">
              Stay updated with new services, offers &amp; nail inspo
            </span>
          </div>
          <a
            href="https://wa.me/234XXXXXXXXXX?text=Hi%20NailSavvy!%20I%27d%20love%20to%20stay%20updated%20on%20your%20services%20and%20offers."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#ff6c78] text-white px-6 py-3 text-xs tracking-widest uppercase font-medium hover:bg-[#e85d68] transition-colors whitespace-nowrap"
          >
            <HugeiconsIcon icon={WhatsappIcon} size={15} color="white" />
            Join on WhatsApp
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo variant="light" size={52} />
            <p className="text-white/30 text-sm mt-5 max-w-xs leading-relaxed">
              Nigeria&apos;s premium nail studio — delivering expert manicures, pedicures, and nail art in-studio and at your doorstep across Lagos.
            </p>

            {/* Contact */}
            <div className="mt-8 space-y-3">
              <a href="https://wa.me/234XXXXXXXXXX" className="flex items-center gap-3 text-white/40 hover:text-[#ff6c78] transition-colors text-sm group">
                <HugeiconsIcon icon={WhatsappIcon} size={16} color="currentColor" />
                <span>WhatsApp Us</span>
                <HugeiconsIcon icon={ArrowRight01Icon} size={12} color="currentColor" className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="mailto:hello@nailsavvyng.com" className="flex items-center gap-3 text-white/40 hover:text-[#ff6c78] transition-colors text-sm group">
                <HugeiconsIcon icon={Mail01Icon} size={16} color="currentColor" />
                <span>hello@nailsavvyng.com</span>
              </a>
              <div className="flex items-center gap-3 text-white/25 text-sm">
                <HugeiconsIcon icon={MapPinIcon} size={16} color="currentColor" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-3 mt-8">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/40 hover:border-[#ff6c78] hover:text-[#ff6c78] transition-colors"
                >
                  <HugeiconsIcon icon={s.icon} size={16} color="currentColor" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-white text-xs tracking-widest uppercase mb-6 font-medium">{category}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/30 text-sm hover:text-[#ff6c78] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/20 text-xs">© {new Date().getFullYear()} NailSavvy. All rights reserved.</p>
          <p className="text-white/15 text-xs">nailsavvyng.com</p>
        </div>
      </div>
    </footer>
  );
}

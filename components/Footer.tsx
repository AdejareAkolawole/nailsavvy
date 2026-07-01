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
  { icon: InstagramIcon, href: "https://instagram.com/nailsavvyng", label: "Instagram", color: "#e1306c" },
  { icon: TiktokIcon, href: "https://tiktok.com/@nailsavvyng", label: "TikTok", color: "#ffffff" },
  { icon: Facebook01Icon, href: "https://facebook.com/nailsavvyng", label: "Facebook", color: "#1877f2" },
  { icon: WhatsappIcon, href: "https://wa.me/234XXXXXXXXXX", label: "WhatsApp", color: "#25d366" },
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#25d366] animate-pulse flex-shrink-0" />
            <span className="text-zinc-300 text-sm font-medium">Be first to know when we launch — join the waitlist</span>
          </div>
          <a
            href="#signup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white font-bold text-xs px-5 py-3 rounded-xl hover:scale-105 transition-transform whitespace-nowrap"
            style={{ background: "linear-gradient(135deg, #25d366, #128c7e)", boxShadow: "0 4px 16px #25d36630" }}
          >
            <HugeiconsIcon icon={WhatsappIcon} size={14} />
            Join Waitlist
          </a>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">

          {/* Brand */}
          <div className="col-span-2">
            <Logo variant="light" size={44} />
            <p className="text-zinc-500 text-sm mt-5 max-w-xs leading-relaxed">
              Nigeria&apos;s premium nail studio — expert manicures, pedicures, and nail art delivered in-studio and at your doorstep across Lagos.
            </p>
            <div className="mt-7 space-y-3">
              <a href="https://wa.me/234XXXXXXXXXX" className="group flex items-center gap-3 text-zinc-500 hover:text-[#25d366] transition-colors text-sm">
                <HugeiconsIcon icon={WhatsappIcon} size={15} />
                WhatsApp Us
                <span className="text-zinc-700 group-hover:text-[#25d366] transition-colors">
                  <HugeiconsIcon icon={ArrowRight01Icon} size={12} />
                </span>
              </a>
              <a href="mailto:hello@nailsavvyng.com" className="flex items-center gap-3 text-zinc-500 hover:text-[#ff6c78] transition-colors text-sm">
                <HugeiconsIcon icon={Mail01Icon} size={15} />
                hello@nailsavvyng.com
              </a>
              <div className="flex items-center gap-3 text-zinc-600 text-sm">
                <HugeiconsIcon icon={MapPinIcon} size={15} />
                Lagos, Nigeria
              </div>
            </div>
            <div className="flex gap-2 mt-7">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center hover:scale-110 transition-all"
                  style={{ ["--social-color" as string]: s.color }}
                  onMouseEnter={e => {
                    const el = e.currentTarget;
                    el.style.borderColor = s.color + "60";
                    el.style.color = s.color;
                    el.style.background = s.color + "15";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget;
                    el.style.borderColor = "";
                    el.style.color = "";
                    el.style.background = "";
                  }}
                >
                  <span className="text-zinc-400 group-hover:text-white transition-colors">
                    <HugeiconsIcon icon={s.icon} size={15} />
                  </span>
                </a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([cat, items]) => (
            <div key={cat}>
              <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-5">{cat}</h4>
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-zinc-600 text-xs">© {new Date().getFullYear()} NailSavvy. All rights reserved.</p>
          <p className="text-zinc-700 text-xs">nailsavvyng.com</p>
        </div>
      </div>
    </footer>
  );
}

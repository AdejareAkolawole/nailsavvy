"use client";

import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-16 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <Logo variant="light" size={50} />
            <p className="text-white/40 text-sm mt-4 max-w-xs leading-relaxed">
              Nigeria&apos;s go-to nail studio for premium nail care. In-studio and home service available across Lagos.
            </p>
            <div className="flex gap-4 mt-6">
              {["instagram", "tiktok", "facebook"].map((p) => (
                <a
                  key={p}
                  href={`https://www.${p}.com/nailsavvyng`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/40 hover:text-[#ff6c78] hover:border-[#ff6c78] transition-colors"
                >
                  <span className="text-xs capitalize">{p[0].toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white text-xs tracking-widest uppercase mb-5">Services</h4>
            <ul className="space-y-3 text-white/40 text-sm">
              {["Gel Manicure", "Acrylics", "Nail Art", "Pedicure", "Home Service"].map((s) => (
                <li key={s}><a href="#services" className="hover:text-[#ff6c78] transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs tracking-widest uppercase mb-5">Contact</h4>
            <ul className="space-y-3 text-white/40 text-sm">
              <li>
                <a href="https://wa.me/234XXXXXXXXXX" className="hover:text-[#ff6c78] transition-colors">
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a href="mailto:hello@nailsavvyng.com" className="hover:text-[#ff6c78] transition-colors">
                  hello@nailsavvyng.com
                </a>
              </li>
              <li className="text-white/40">Lagos, Nigeria</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">© {new Date().getFullYear()} NailSavvy. All rights reserved.</p>
          <p className="text-white/20 text-xs">nailsavvyng.com</p>
        </div>
      </div>
    </footer>
  );
}

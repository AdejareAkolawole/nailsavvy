"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm py-3" : "bg-white/80 backdrop-blur-md py-5 border-b border-zinc-100"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Logo variant="dark" size={44} />
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-zinc-600">
          <li><a href="#services" className="hover:text-[#ff6c78] transition-colors">Services</a></li>
          <li><a href="#gallery" className="hover:text-[#ff6c78] transition-colors">Gallery</a></li>
          <li><a href="#home-service" className="hover:text-[#ff6c78] transition-colors">Home Service</a></li>
          <li><a href="#about" className="hover:text-[#ff6c78] transition-colors">About</a></li>
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a href="#signup" className="text-zinc-600 text-sm font-medium hover:text-[#ff6c78] transition-colors px-3 py-2">
            Log in
          </a>
          <a
            href="#signup"
            className="bg-[#ff6c78] text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-[#e85d68] transition-colors shadow-sm shadow-[#ff6c78]/20"
          >
            Get Started
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 text-zinc-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-zinc-800 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}/>
          <span className={`block w-6 h-0.5 bg-zinc-800 transition-all ${menuOpen ? "opacity-0" : ""}`}/>
          <span className={`block w-6 h-0.5 bg-zinc-800 transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}/>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#fdd4d5] px-6 py-6 flex flex-col gap-5 text-sm font-medium">
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
          <a href="#home-service" onClick={() => setMenuOpen(false)}>Home Service</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#signup" onClick={() => setMenuOpen(false)} className="text-zinc-500 text-sm">Log in</a>
          <a href="#signup" onClick={() => setMenuOpen(false)} className="bg-[#ff6c78] text-white px-5 py-2.5 text-center rounded-xl font-bold">Get Started</a>
        </div>
      )}
    </nav>
  );
}

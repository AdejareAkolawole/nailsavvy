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
        scrolled ? "bg-white shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Logo variant={scrolled ? "dark" : "light"} size={44} />
        </a>

        {/* Desktop nav */}
        <ul className={`hidden md:flex items-center gap-8 text-sm font-medium tracking-wide ${scrolled ? "text-black" : "text-white"}`}>
          <li><a href="#services" className="hover:opacity-70 transition-opacity">Services</a></li>
          <li><a href="#gallery" className="hover:opacity-70 transition-opacity">Gallery</a></li>
          <li><a href="#home-service" className="hover:opacity-70 transition-opacity">Home Service</a></li>
          <li><a href="#about" className="hover:opacity-70 transition-opacity">About</a></li>
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#book"
            className="bg-[#ff6c78] text-white px-5 py-2 text-sm font-medium tracking-wide hover:bg-[#e85d68] transition-colors"
          >
            Book Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden flex flex-col gap-1.5 ${scrolled ? "text-black" : "text-white"}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}/>
          <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? "opacity-0" : ""}`}/>
          <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}/>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#fdd4d5] px-6 py-6 flex flex-col gap-5 text-sm font-medium">
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
          <a href="#home-service" onClick={() => setMenuOpen(false)}>Home Service</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#book" onClick={() => setMenuOpen(false)} className="bg-[#ff6c78] text-white px-5 py-2.5 text-center">Book Now</a>
        </div>
      )}
    </nav>
  );
}

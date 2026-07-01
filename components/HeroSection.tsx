"use client";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Peach gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-[#ff6c78]/30 z-10" />

      {/* Background pattern — repeating peach circles */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 20% 80%, #ff6c78 0%, transparent 50%),
                          radial-gradient(circle at 80% 20%, #ff6c78 0%, transparent 50%)`,
      }} />

      {/* Content */}
      <div className="relative z-20 text-center text-white px-6 max-w-4xl mx-auto">
        <p className="text-[#ff6c78] text-sm tracking-[0.3em] uppercase mb-6 font-sans-brand">
          Nigeria&apos;s Premier Nail Studio
        </p>
        <h1 className="font-script text-6xl md:text-8xl font-light leading-tight mb-6">
          Nails That <br />
          <span className="text-[#ff6c78] italic">Speak for You</span>
        </h1>
        <p className="text-white/70 text-lg md:text-xl font-light max-w-xl mx-auto mb-10 leading-relaxed">
          Premium nail services — in studio or at your doorstep. Gel, acrylics, nail art, manicure &amp; pedicure done by savvy professionals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#book"
            className="bg-[#ff6c78] text-white px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-[#e85d68] transition-colors"
          >
            Book Appointment
          </a>
          <a
            href="#services"
            className="border border-white/40 text-white px-8 py-4 text-sm tracking-widest uppercase font-medium hover:border-[#ff6c78] hover:text-[#ff6c78] transition-colors"
          >
            View Services
          </a>
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-8">
          <a
            href="https://wa.me/234XXXXXXXXXX"
            className="inline-flex items-center gap-2 text-white/60 hover:text-[#ff6c78] transition-colors text-sm"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat us on WhatsApp
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
      </div>
    </section>
  );
}

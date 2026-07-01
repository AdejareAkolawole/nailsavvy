"use client";

const socialPosts = [
  { platform: "instagram", handle: "@nailsavvyng", label: "Follow on Instagram" },
  { platform: "tiktok", handle: "@nailsavvyng", label: "Watch on TikTok" },
  { platform: "facebook", handle: "NailSavvy NG", label: "Like on Facebook" },
];

const stats = [
  { value: "500+", label: "Happy Clients" },
  { value: "4.9★", label: "Average Rating" },
  { value: "7-Day", label: "Nail Warranty" },
  { value: "24hr", label: "Booking Response" },
];

export default function SocialProofSection() {
  return (
    <section id="gallery" className="bg-[#000000] py-24 px-6 text-white">
      <div className="max-w-6xl mx-auto">

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-script text-4xl md:text-5xl text-[#ff6c78] font-light">{s.value}</div>
              <div className="text-white/50 text-xs tracking-widest uppercase mt-2">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Social links */}
        <div className="text-center mb-12">
          <p className="text-[#ff6c78] text-xs tracking-[0.3em] uppercase mb-3">See Our Work</p>
          <h2 className="font-script text-5xl text-white font-light">Follow the Journey</h2>
          <p className="text-white/40 mt-4 text-sm max-w-sm mx-auto">
            Real nails. Real clients. Every post is a story. Follow us for daily inspo.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {socialPosts.map((post) => (
            <a
              key={post.platform}
              href={`https://www.${post.platform}.com/nailsavvyng`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-white/20 px-6 py-4 text-white hover:border-[#ff6c78] hover:text-[#ff6c78] transition-colors group min-w-[200px] justify-center"
            >
              <SocialIcon platform={post.platform} />
              <div className="text-left">
                <div className="text-sm font-medium">{post.label}</div>
                <div className="text-xs text-white/40 group-hover:text-[#ff6c78]/60">{post.handle}</div>
              </div>
            </a>
          ))}
        </div>

        {/* Ad / promo banner */}
        <div className="mt-20 bg-[#ff6c78] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-white/80 text-xs tracking-widest uppercase mb-2">Limited Offer</p>
            <h3 className="font-script text-4xl md:text-5xl text-white font-light">
              First Visit? <br />Get 10% Off.
            </h3>
            <p className="text-white/70 text-sm mt-3 max-w-sm leading-relaxed">
              New clients get 10% off their first appointment. Book online and the discount applies automatically.
            </p>
          </div>
          <a
            href="#book"
            className="bg-black text-white px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-white hover:text-black transition-colors whitespace-nowrap"
          >
            Claim Offer
          </a>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ platform }: { platform: string }) {
  if (platform === "instagram") return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
  if (platform === "tiktok") return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
    </svg>
  );
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

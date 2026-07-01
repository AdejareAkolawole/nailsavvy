"use client";

import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  SparklesIcon,
  UserCheck01Icon,
  CheckmarkCircle01Icon,
  Crown02Icon,
  Home01Icon,
  StarIcon,
} from "@hugeicons/core-free-icons";

const perks = [
  { icon: SparklesIcon, text: "Book appointments 24/7 — no calls needed", color: "#ff6c78" },
  { icon: UserCheck01Icon, text: "Choose your nail tech by ratings & specialty", color: "#8b5cf6" },
  { icon: Home01Icon, text: "Schedule home service with live technician tracking", color: "#0ea5e9" },
  { icon: Crown02Icon, text: "Earn loyalty points on every visit", color: "#f59e0b" },
  { icon: CheckmarkCircle01Icon, text: "7-day warranty backed on every service", color: "#10b981" },
  { icon: StarIcon, text: "Leave reviews and get personalised service history", color: "#f43f5e" },
];

export default function BookingSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: POST to /api/waitlist when backend is ready
    setSubmitted(true);
  };

  return (
    <section id="signup" className="py-16 md:py-24 lg:py-28 px-4 sm:px-6 bg-[#09090b] relative overflow-hidden">

      {/* Background glows */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none opacity-30" style={{ background: "radial-gradient(ellipse, #ff6c78 0%, transparent 70%)" }} />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full pointer-events-none opacity-20" style={{ background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)" }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — perks */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <HugeiconsIcon icon={SparklesIcon} size={14} color="#ff6c78" />
              <p className="text-[#ff6c78] text-sm font-bold uppercase tracking-widest">The Platform</p>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight mb-5">
              More than a studio.<br />
              <span className="text-zinc-500">It&apos;s your nail OS.</span>
            </h2>
            <p className="text-zinc-400 text-base leading-relaxed mb-10 max-w-sm">
              NailSavvy is a full booking &amp; loyalty platform — built for clients who want total control over their nail experience.
            </p>

            <ul className="space-y-4">
              {perks.map((p) => (
                <li key={p.text} className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: `${p.color}18`, color: p.color }}
                  >
                    <HugeiconsIcon icon={p.icon} size={15} />
                  </div>
                  <span className="text-zinc-300 text-sm leading-relaxed">{p.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — signup card */}
          <div>
            <div className="bg-white rounded-3xl p-8 sm:p-10 relative overflow-hidden shadow-2xl shadow-black/30">
              {/* Rainbow top bar */}
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl" style={{ background: "linear-gradient(90deg, #ff6c78, #8b5cf6, #0ea5e9, #10b981)" }} />

              {submitted ? (
                <div className="flex flex-col items-center text-center py-10">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5" style={{ background: "linear-gradient(135deg, #10b981, #059669)" }}>
                    <HugeiconsIcon icon={CheckmarkCircle01Icon} size={30} color="white" />
                  </div>
                  <h3 className="text-[#09090b] font-extrabold text-2xl mb-3">You&apos;re on the list!</h3>
                  <p className="text-zinc-500 text-sm max-w-xs leading-relaxed">
                    We&apos;ll send your access link to <strong className="text-[#09090b]">{email}</strong> as soon as we launch. Get ready.
                  </p>
                </div>
              ) : (
                <>
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 bg-[#ff6c78]/10 text-[#ff6c78] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-[#ff6c78]/20 mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff6c78] animate-pulse" />
                    Early Access — Free
                  </div>

                  <h3 className="text-[#09090b] font-extrabold text-2xl sm:text-3xl mb-2 leading-tight">
                    Be first through the door.
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                    Join the waitlist and get priority access when we launch — plus a free first-visit discount waiting for you.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="email"
                      required
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full border border-zinc-200 bg-zinc-50 text-[#09090b] placeholder-zinc-400 px-4 py-3.5 text-sm rounded-xl focus:outline-none focus:border-[#ff6c78] transition-colors"
                    />
                    <button
                      type="submit"
                      className="flex items-center justify-center gap-2 w-full text-white font-bold py-4 text-sm rounded-xl hover:scale-[1.02] transition-transform"
                      style={{ background: "linear-gradient(135deg, #ff6c78, #f43f5e)", boxShadow: "0 6px 24px #ff6c7830" }}
                    >
                      Get Early Access
                      <HugeiconsIcon icon={ArrowRight01Icon} size={16} />
                    </button>
                  </form>

                  <div className="mt-6 pt-6 border-t border-zinc-100 flex items-center justify-between">
                    <div className="flex">
                      {["AO","TK","BM","SF"].map((a) => (
                        <div
                          key={a}
                          className="w-7 h-7 rounded-full border-2 border-white -ml-2 first:ml-0 flex items-center justify-center text-white text-[9px] font-bold"
                          style={{ background: "linear-gradient(135deg, #ff6c78, #f43f5e)" }}
                        >
                          {a}
                        </div>
                      ))}
                    </div>
                    <p className="text-zinc-400 text-xs"><span className="text-[#09090b] font-bold">200+</span> already joined</p>
                  </div>
                </>
              )}
            </div>

            {/* Sub note */}
            <p className="text-zinc-600 text-xs text-center mt-4">No credit card required · Launching soon in Lagos</p>
          </div>
        </div>
      </div>
    </section>
  );
}

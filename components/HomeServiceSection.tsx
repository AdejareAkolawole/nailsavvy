"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  Home01Icon,
  WhatsappIcon,
  CheckmarkCircle01Icon,
  ArrowRight01Icon,
  Camera01Icon,
  MapPinIcon,
  CrownIcon,
  Call02Icon,
} from "@hugeicons/core-free-icons";

const steps = [
  { icon: Home01Icon, num: "01", title: "Book Online", desc: "Pick your service, preferred date, and drop your location.", color: "#ff6c78" },
  { icon: Call02Icon, num: "02", title: "We Call You", desc: "Admin is notified instantly and calls to confirm your slot.", color: "#8b5cf6" },
  { icon: WhatsappIcon, num: "03", title: "Pay 50% Deposit", desc: "Send your receipt on WhatsApp to lock it in.", color: "#10b981" },
  { icon: Camera01Icon, num: "04", title: "Nail Reveal", desc: "Your finished nail photo is sent to you right after.", color: "#f59e0b" },
];

const zones = [
  { zone: "Zone 1", areas: "VI, Lekki Phase 1, Ikoyi", fee: "₦3,000", color: "#10b981" },
  { zone: "Zone 2", areas: "Ajah, Sangotedo, Lekki Phase 2", fee: "₦5,000", color: "#f59e0b" },
  { zone: "Zone 3", areas: "Yaba, Surulere, Maryland", fee: "₦5,000", color: "#f59e0b" },
  { zone: "Zone 4", areas: "Ikeja, Ojota, Gbagada", fee: "₦7,000", color: "#ff6c78" },
];

const perks = [
  { text: "Instant WhatsApp confirmation after booking", color: "#10b981" },
  { text: "50% deposit secures your appointment", color: "#ff6c78" },
  { text: "Technician arrives fully equipped at your door", color: "#8b5cf6" },
  { text: "Nail photo shared on WhatsApp after service", color: "#f59e0b" },
  { text: "7-day warranty on all nail services", color: "#10b981" },
];

export default function HomeServiceSection() {
  return (
    <section id="home-service" className="bg-[#09090b] py-16 md:py-24 lg:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 md:mb-20">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <HugeiconsIcon icon={Home01Icon} size={14} color="#ff6c78" />
              <p className="text-[#ff6c78] text-sm font-bold uppercase tracking-widest">Home Service</p>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight">
              We come to you.<br />
              <span className="text-zinc-500">No stress. No commute.</span>
            </h2>
          </div>
          <a
            href="#book"
            className="inline-flex items-center gap-2 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all hover:scale-105 self-start sm:self-end whitespace-nowrap"
            style={{ background: "linear-gradient(135deg, #ff6c78, #f43f5e)", boxShadow: "0 4px 20px #ff6c7835" }}
          >
            Book Home Service
            <HugeiconsIcon icon={ArrowRight01Icon} size={16} />
          </a>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-800 mb-12 md:mb-20">
          {steps.map((s) => (
            <div key={s.num} className="bg-[#09090b] p-6 sm:p-8 hover:bg-zinc-900/80 transition-colors group relative overflow-hidden">
              {/* Subtle color glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{ background: `radial-gradient(ellipse at top right, ${s.color}08 0%, transparent 70%)` }}
              />
              <div className="relative">
                <div className="flex items-center justify-between mb-6 sm:mb-8">
                  <span className="text-4xl font-extrabold transition-colors" style={{ color: `${s.color}30` }}>{s.num}</span>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all"
                    style={{ background: `${s.color}15`, border: `1px solid ${s.color}30`, color: s.color }}
                  >
                    <HugeiconsIcon icon={s.icon} size={18} />
                  </div>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Zone table + perks */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Zone table */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="text-[#ff6c78]">
                <HugeiconsIcon icon={MapPinIcon} size={16} />
              </div>
              <h3 className="text-white font-bold text-sm uppercase tracking-widest">Lagos Service Zones</h3>
            </div>
            <div className="rounded-2xl overflow-hidden border border-zinc-800">
              <div className="grid grid-cols-3 bg-zinc-800/60 px-4 sm:px-6 py-4 text-xs font-bold uppercase tracking-widest text-zinc-400">
                <span>Zone</span>
                <span>Areas</span>
                <span className="text-right">Add-on</span>
              </div>
              {zones.map((z, i) => (
                <div key={z.zone} className={`grid grid-cols-3 px-4 sm:px-6 py-4 items-center border-t border-zinc-800 ${i % 2 === 1 ? "bg-zinc-900/40" : ""}`}>
                  <span className="text-white font-semibold text-sm">{z.zone}</span>
                  <span className="text-zinc-400 text-xs pr-2">{z.areas}</span>
                  <span className="text-right font-bold text-sm" style={{ color: z.color }}>{z.fee}</span>
                </div>
              ))}
            </div>
            <p className="text-zinc-600 text-xs mt-3 flex items-center gap-1.5">
              <HugeiconsIcon icon={MapPinIcon} size={12} color="#52525b" />
              Zone fee added to service price. Not listed? Message us.
            </p>
          </div>

          {/* Perks */}
          <div className="rounded-2xl border border-zinc-800 p-6 sm:p-8 lg:p-10 overflow-hidden relative" style={{ background: "linear-gradient(135deg, #0f0f11 0%, #130a0f 100%)" }}>
            <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, #ff6c7815 0%, transparent 70%)" }} />
            <div className="absolute -left-6 -bottom-6 w-32 h-32 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, #8b5cf615 0%, transparent 70%)" }} />
            <div className="relative">
              <div className="flex items-center gap-2 mb-2">
                <div className="text-[#ff6c78]">
                  <HugeiconsIcon icon={CrownIcon} size={16} />
                </div>
                <span className="text-[#ff6c78] text-xs font-bold uppercase tracking-widest">What to Expect</span>
              </div>
              <h3 className="text-white font-extrabold text-2xl mb-6 sm:mb-8">
                Your booking, <span className="text-zinc-400">our promise</span>
              </h3>
              <ul className="space-y-4 mb-8 sm:mb-10">
                {perks.map((p) => (
                  <li key={p.text} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5" style={{ color: p.color }}>
                      <HugeiconsIcon icon={CheckmarkCircle01Icon} size={18} />
                    </div>
                    <span className="text-zinc-300 text-sm leading-relaxed">{p.text}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/234XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-white font-bold text-sm px-6 py-4 rounded-xl w-full hover:scale-105 transition-transform"
                style={{ background: "linear-gradient(135deg, #25d366, #128c7e)", boxShadow: "0 4px 20px #25d36630" }}
              >
                <HugeiconsIcon icon={WhatsappIcon} size={18} />
                Chat us on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

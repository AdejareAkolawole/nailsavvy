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
  { icon: Home01Icon, num: "01", title: "Book Online", desc: "Pick your service, preferred date, and drop your location." },
  { icon: Call02Icon, num: "02", title: "We Call You", desc: "Admin is notified instantly and calls to confirm your slot." },
  { icon: WhatsappIcon, num: "03", title: "Pay 50% Deposit", desc: "Upload your payment receipt on WhatsApp to lock it in." },
  { icon: Camera01Icon, num: "04", title: "Nail Reveal", desc: "Your finished nail photo is sent to you right after service." },
];

const zones = [
  { zone: "Zone 1", areas: "VI, Lekki Phase 1, Ikoyi", fee: "₦3,000" },
  { zone: "Zone 2", areas: "Ajah, Sangotedo, Lekki Phase 2", fee: "₦5,000" },
  { zone: "Zone 3", areas: "Yaba, Surulere, Maryland", fee: "₦5,000" },
  { zone: "Zone 4", areas: "Ikeja, Ojota, Gbagada", fee: "₦7,000" },
];

const perks = [
  "Instant WhatsApp confirmation after booking",
  "50% deposit secures your appointment",
  "Technician arrives fully equipped at your door",
  "Nail photo shared on WhatsApp after service",
  "7-day warranty on all nail services",
];

export default function HomeServiceSection() {
  return (
    <section id="home-service" className="bg-[#09090b] py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <HugeiconsIcon icon={Home01Icon} size={14} color="#ff6c78" />
              <p className="text-[#ff6c78] text-sm font-bold uppercase tracking-widest">Home Service</p>
            </div>
            <h2 className="text-[clamp(2.25rem,5vw,3.5rem)] font-extrabold text-white leading-tight tracking-tight">
              We come to you.<br />
              <span className="text-zinc-500">No stress. No commute.</span>
            </h2>
          </div>
          <a
            href="#book"
            className="inline-flex items-center gap-2 bg-[#ff6c78] text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-[#e85d68] transition-colors shadow-lg shadow-[#ff6c78]/25 self-start md:self-end whitespace-nowrap"
          >
            Book Home Service
            <HugeiconsIcon icon={ArrowRight01Icon} size={16} color="white" />
          </a>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-800 mb-20">
          {steps.map((s) => (
            <div key={s.num} className="bg-[#09090b] p-8 hover:bg-zinc-900 transition-colors group min-w-0">
              <div className="flex items-center justify-between mb-8">
                <span className="text-4xl font-extrabold text-zinc-800 group-hover:text-zinc-700 transition-colors">{s.num}</span>
                <div className="w-10 h-10 rounded-xl bg-zinc-800 group-hover:bg-[#ff6c78]/10 border border-zinc-700 group-hover:border-[#ff6c78]/30 flex items-center justify-center transition-all">
                  <HugeiconsIcon icon={s.icon} size={18} color="currentColor" className="text-zinc-400 group-hover:text-[#ff6c78] transition-colors" />
                </div>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Zone table + perks */}
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Zone table */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <HugeiconsIcon icon={MapPinIcon} size={16} color="#ff6c78" />
              <h3 className="text-white font-bold text-sm uppercase tracking-widest">Lagos Service Zones</h3>
            </div>
            <div className="rounded-2xl overflow-hidden border border-zinc-800">
              <div className="grid grid-cols-3 bg-zinc-800/60 px-6 py-4 text-xs font-bold uppercase tracking-widest text-zinc-400">
                <span>Zone</span>
                <span>Areas</span>
                <span className="text-right">Add-on</span>
              </div>
              {zones.map((z, i) => (
                <div key={z.zone} className={`grid grid-cols-3 px-6 py-4 items-center border-t border-zinc-800 ${i % 2 === 1 ? "bg-zinc-900/40" : ""}`}>
                  <span className="text-white font-semibold text-sm">{z.zone}</span>
                  <span className="text-zinc-400 text-xs pr-4">{z.areas}</span>
                  <span className="text-right text-[#ff6c78] font-bold text-sm">{z.fee}</span>
                </div>
              ))}
            </div>
            <p className="text-zinc-600 text-xs mt-3 flex items-center gap-1.5">
              <HugeiconsIcon icon={MapPinIcon} size={12} color="currentColor" />
              Zone fee is added to your service price. Not listed? Message us.
            </p>
          </div>

          {/* Perks */}
          <div className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8 lg:p-10">
            <div className="flex items-center gap-2 mb-2">
              <HugeiconsIcon icon={CrownIcon} size={16} color="#ff6c78" />
              <span className="text-[#ff6c78] text-xs font-bold uppercase tracking-widest">What to Expect</span>
            </div>
            <h3 className="text-white font-extrabold text-2xl mb-8">
              Your booking, <span className="text-zinc-400">our promise</span>
            </h3>
            <ul className="space-y-4 mb-10">
              {perks.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} size={18} color="#ff6c78" className="flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300 text-sm leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/234XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#ff6c78] text-white font-bold text-sm px-6 py-4 rounded-xl hover:bg-[#e85d68] transition-colors w-full justify-center shadow-lg shadow-[#ff6c78]/25"
            >
              <HugeiconsIcon icon={WhatsappIcon} size={18} color="white" />
              Chat us on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

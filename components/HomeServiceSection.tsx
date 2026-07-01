"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  Home01Icon,
  WhatsappIcon,
  CheckmarkCircle01Icon,
  ArrowRight01Icon,
  Camera01Icon,
  MapPinIcon,
  Clock01Icon,
  CrownIcon,
} from "@hugeicons/core-free-icons";

const zones = [
  { zone: "Zone 1", areas: "VI, Lekki Phase 1, Ikoyi", fee: "₦3,000" },
  { zone: "Zone 2", areas: "Ajah, Sangotedo, Lekki Phase 2", fee: "₦5,000" },
  { zone: "Zone 3", areas: "Yaba, Surulere, Maryland", fee: "₦5,000" },
  { zone: "Zone 4", areas: "Ikeja, Ojota, Gbagada", fee: "₦7,000" },
];

const steps = [
  { icon: Home01Icon, step: "01", title: "Book Online", desc: "Choose your service, date, and location." },
  { icon: WhatsappIcon, step: "02", title: "Instant Confirm", desc: "Admin is notified immediately and calls you." },
  { icon: CrownIcon, step: "03", title: "50% Deposit", desc: "Upload your payment receipt to secure the slot." },
  { icon: Camera01Icon, step: "04", title: "Nail Reveal", desc: "After service, your nail photo goes straight to you." },
];

export default function HomeServiceSection() {
  return (
    <section id="home-service" className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <HugeiconsIcon icon={Home01Icon} size={16} color="#ff6c78" />
            <span className="text-[#ff6c78] text-xs tracking-[0.3em] uppercase font-medium">We Come To You</span>
          </div>
          <h2 className="font-script text-5xl md:text-6xl font-light text-black leading-tight">
            Home Service,<br />
            <span className="italic">Done Right</span>
          </h2>
          <p className="text-black/40 text-sm mt-5 max-w-sm mx-auto leading-relaxed">
            Book a home session and we show up fully equipped. No stress, no commute — just great nails.
          </p>
        </div>

        {/* Process steps */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-black/5 mb-20">
          {steps.map((s) => (
            <div key={s.step} className="bg-white p-8 lg:p-10 group hover:bg-[#ff6c78] transition-colors duration-300">
              <div className="flex items-center justify-between mb-8">
                <span className="font-script text-5xl text-black/8 group-hover:text-white/20 transition-colors">{s.step}</span>
                <HugeiconsIcon icon={s.icon} size={22} color="currentColor" className="text-[#ff6c78] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-black font-semibold text-sm mb-2 group-hover:text-white transition-colors">{s.title}</h3>
              <p className="text-black/40 text-xs leading-relaxed group-hover:text-white/70 transition-colors">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Zone table + CTA */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Zone table */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <HugeiconsIcon icon={MapPinIcon} size={16} color="#ff6c78" />
              <h3 className="text-black font-semibold text-sm tracking-wide uppercase">Service Zones & Fees</h3>
            </div>
            <div className="border border-black/8 overflow-hidden">
              <div className="grid grid-cols-3 bg-black text-white text-xs tracking-widest uppercase px-6 py-4">
                <span>Zone</span>
                <span>Areas Covered</span>
                <span className="text-right">Add-on Fee</span>
              </div>
              {zones.map((z, i) => (
                <div
                  key={z.zone}
                  className={`grid grid-cols-3 px-6 py-5 items-center text-sm border-t border-black/5 ${i % 2 === 1 ? "bg-[#fdd4d5]/20" : "bg-white"}`}
                >
                  <span className="font-semibold text-black text-xs">{z.zone}</span>
                  <span className="text-black/50 text-xs pr-4">{z.areas}</span>
                  <span className="text-right text-[#ff6c78] font-semibold">{z.fee}</span>
                </div>
              ))}
            </div>
            <p className="text-black/30 text-xs mt-3 flex items-center gap-1.5">
              <HugeiconsIcon icon={MapPinIcon} size={12} color="currentColor" />
              Zone fees are added to your chosen service price. Not listed? Message us.
            </p>
          </div>

          {/* Checklist + CTA */}
          <div className="bg-[#fdd4d5]/30 p-10">
            <div className="flex items-center gap-2 mb-2">
              <HugeiconsIcon icon={Clock01Icon} size={16} color="#ff6c78" />
              <span className="text-[#ff6c78] text-xs tracking-[0.2em] uppercase font-medium">What to Expect</span>
            </div>
            <h3 className="font-script text-4xl text-black font-light mb-8">
              Your booking, <span className="italic">our promise</span>
            </h3>

            <ul className="space-y-4 mb-10">
              {[
                "Instant WhatsApp confirmation after booking",
                "50% deposit secures your appointment slot",
                "Technician arrives fully equipped at your door",
                "Final nail photo shared on WhatsApp upon completion",
                "7-day warranty on all nail services",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} size={18} color="#ff6c78" className="flex-shrink-0 mt-0.5" />
                  <span className="text-black/70 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#book"
              className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-[#ff6c78] transition-colors w-full justify-center"
            >
              Book Home Service
              <HugeiconsIcon icon={ArrowRight01Icon} size={16} color="white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

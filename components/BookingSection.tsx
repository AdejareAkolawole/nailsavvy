"use client";

import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  WhatsappIcon,
  Calendar01Icon,
  UserCheck01Icon,
  Call02Icon,
  SparklesIcon,
  Home01Icon,
  ArrowRight01Icon,
  CheckmarkCircle01Icon,
} from "@hugeicons/core-free-icons";

const services = [
  "Gel Manicure",
  "Acrylic Extensions",
  "Nail Art",
  "Classic Pedicure",
  "Classic Manicure",
  "Home Service",
];

export default function BookingSection() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", date: "", notes: "", homeService: false });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value }));
  };

  const waLink = () => {
    const msg = `Hi NailSavvy! I'd like to book:\n\n👤 ${form.name}\n📱 ${form.phone}\n💅 ${form.service}\n📅 ${form.date}\n🏠 Home service: ${form.homeService ? "Yes" : "No"}\n📝 ${form.notes || "No notes"}`;
    return `https://wa.me/234XXXXXXXXXX?text=${encodeURIComponent(msg)}`;
  };

  const inputClass = "w-full bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 px-4 py-3.5 text-sm rounded-xl focus:outline-none focus:border-[#ff6c78] transition-colors";

  return (
    <section id="book" className="bg-white py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Left */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <HugeiconsIcon icon={SparklesIcon} size={14} color="#ff6c78" />
              <p className="text-[#ff6c78] text-sm font-bold uppercase tracking-widest">Book an Appointment</p>
            </div>
            <h2 className="text-[clamp(2.25rem,5vw,3.5rem)] font-extrabold text-[#09090b] leading-tight tracking-tight mb-5">
              Ready for your<br />
              <span className="relative inline-block">
                <span className="relative z-10">dream nails?</span>
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 280 10" fill="none" preserveAspectRatio="none">
                  <path d="M2 7C60 2 150 2 278 8" stroke="#ff6c78" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
                </svg>
              </span>
            </h2>
            <p className="text-zinc-500 text-base leading-relaxed mb-12 max-w-xs">
              Fill in the form and we&apos;ll confirm your booking on WhatsApp in minutes.
            </p>

            {/* Trust signals */}
            <div className="space-y-5">
              {[
                { icon: WhatsappIcon, title: "WhatsApp Confirmation", desc: "Booking confirmed instantly — no waiting." },
                { icon: Calendar01Icon, title: "Flexible Scheduling", desc: "Pick a date and time that works for you." },
                { icon: Home01Icon, title: "In-Studio or Home", desc: "Your choice — we adapt to you." },
                { icon: CheckmarkCircle01Icon, title: "7-Day Warranty", desc: "Every service backed by our nail guarantee." },
              ].map((t) => (
                <div key={t.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#fff0f1] border border-[#ff6c78]/10 flex items-center justify-center flex-shrink-0">
                    <HugeiconsIcon icon={t.icon} size={18} color="#ff6c78" />
                  </div>
                  <div>
                    <div className="text-[#09090b] font-semibold text-sm">{t.title}</div>
                    <div className="text-zinc-400 text-xs mt-0.5">{t.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-[#09090b] rounded-2xl p-8 lg:p-10 border border-zinc-800">
            <h3 className="text-white font-bold text-xl mb-8">Your Details</h3>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <HugeiconsIcon icon={UserCheck01Icon} size={15} color="#52525b" />
                </div>
                <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} className={`${inputClass} pl-11`} />
              </div>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <HugeiconsIcon icon={Call02Icon} size={15} color="#52525b" />
                </div>
                <input name="phone" placeholder="WhatsApp No." value={form.phone} onChange={handleChange} className={`${inputClass} pl-11`} />
              </div>
            </div>

            <div className="relative mb-4">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <HugeiconsIcon icon={SparklesIcon} size={15} color="#52525b" />
              </div>
              <select name="service" value={form.service} onChange={handleChange} className={`${inputClass} pl-11 appearance-none`}>
                <option value="" disabled className="bg-[#09090b]">Select a Service</option>
                {services.map((s) => <option key={s} value={s} className="bg-[#09090b]">{s}</option>)}
              </select>
            </div>

            <div className="relative mb-4">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <HugeiconsIcon icon={Calendar01Icon} size={15} color="#52525b" />
              </div>
              <input type="date" name="date" value={form.date} onChange={handleChange} className={`${inputClass} pl-11`} />
            </div>

            <textarea
              name="notes"
              placeholder="Special requests, nail inspo description, reference photos..."
              value={form.notes}
              onChange={handleChange}
              rows={3}
              className={`${inputClass} resize-none mb-4`}
            />

            <label className="flex items-center gap-3 cursor-pointer mb-8 group">
              <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${form.homeService ? "bg-[#ff6c78] border-[#ff6c78]" : "border-zinc-700 group-hover:border-[#ff6c78]"}`}>
                {form.homeService && <span className="text-white text-xs font-bold">✓</span>}
              </div>
              <input type="checkbox" name="homeService" checked={form.homeService} onChange={handleChange} className="sr-only" />
              <div className="flex items-center gap-2">
                <HugeiconsIcon icon={Home01Icon} size={15} color="#71717a" />
                <span className="text-zinc-400 text-sm">I want home service</span>
              </div>
            </label>

            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-[#ff6c78] text-white font-bold py-4 text-sm rounded-xl hover:bg-[#e85d68] transition-colors shadow-lg shadow-[#ff6c78]/30"
            >
              <HugeiconsIcon icon={WhatsappIcon} size={20} color="white" />
              Confirm on WhatsApp
              <HugeiconsIcon icon={ArrowRight01Icon} size={16} color="white" />
            </a>
            <p className="text-zinc-600 text-xs text-center mt-4">Opens WhatsApp with your details pre-filled</p>
          </div>
        </div>
      </div>
    </section>
  );
}

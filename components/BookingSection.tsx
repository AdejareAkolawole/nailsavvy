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
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    notes: "",
    homeService: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const whatsappMessage = () => {
    const msg = `Hi NailSavvy! I'd like to book:\n\n👤 Name: ${form.name}\n📱 Phone: ${form.phone}\n💅 Service: ${form.service}\n📅 Date: ${form.date}\n🏠 Home Service: ${form.homeService ? "Yes" : "No"}\n📝 Notes: ${form.notes || "None"}`;
    return `https://wa.me/234XXXXXXXXXX?text=${encodeURIComponent(msg)}`;
  };

  const fieldClass = "w-full bg-white/4 border border-white/10 text-white placeholder-white/20 px-5 py-4 text-sm focus:outline-none focus:border-[#ff6c78] transition-colors";

  return (
    <section id="book" className="bg-black text-white py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Left — copy */}
          <div className="lg:sticky lg:top-24">
            <div className="flex items-center gap-2 mb-5">
              <HugeiconsIcon icon={SparklesIcon} size={16} color="#ff6c78" />
              <span className="text-[#ff6c78] text-xs tracking-[0.3em] uppercase font-medium">Ready to Glow?</span>
            </div>
            <h2 className="font-script text-5xl md:text-6xl font-light leading-tight mb-6">
              Book Your<br />
              <span className="text-[#ff6c78] italic">Appointment</span>
            </h2>
            <p className="text-white/40 text-sm leading-relaxed mb-12 max-w-xs">
              Fill in your details and we&apos;ll confirm your booking on WhatsApp in minutes.
            </p>

            {/* Trust signals */}
            <div className="space-y-5 border-t border-white/8 pt-10">
              {[
                { icon: WhatsappIcon, title: "WhatsApp Confirmation", desc: "Booking confirmed instantly via WhatsApp" },
                { icon: Calendar01Icon, title: "Flexible Scheduling", desc: "Pick a date and time that works for you" },
                { icon: Home01Icon, title: "In-Studio or Home", desc: "Choose where you want your service done" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <HugeiconsIcon icon={item.icon} size={18} color="#ff6c78" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium mb-0.5">{item.title}</div>
                    <div className="text-white/30 text-xs">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="border border-white/8 p-8 lg:p-10">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <HugeiconsIcon icon={UserCheck01Icon} size={16} color="rgba(255,255,255,0.2)" />
                </div>
                <input
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  className={`${fieldClass} pl-11`}
                />
              </div>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <HugeiconsIcon icon={Call02Icon} size={16} color="rgba(255,255,255,0.2)" />
                </div>
                <input
                  name="phone"
                  placeholder="WhatsApp Number"
                  value={form.phone}
                  onChange={handleChange}
                  className={`${fieldClass} pl-11`}
                />
              </div>
            </div>

            <div className="relative mb-4">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <HugeiconsIcon icon={SparklesIcon} size={16} color="rgba(255,255,255,0.2)" />
              </div>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className={`${fieldClass} pl-11 appearance-none`}
              >
                <option value="" disabled className="bg-black">Select a Service</option>
                {services.map((s) => <option key={s} value={s} className="bg-black">{s}</option>)}
              </select>
            </div>

            <div className="relative mb-4">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <HugeiconsIcon icon={Calendar01Icon} size={16} color="rgba(255,255,255,0.2)" />
              </div>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className={`${fieldClass} pl-11`}
              />
            </div>

            <textarea
              name="notes"
              placeholder="Any special requests, nail inspo, or reference photos to describe..."
              value={form.notes}
              onChange={handleChange}
              rows={4}
              className={`${fieldClass} mb-4 resize-none`}
            />

            <label className="flex items-center gap-3 cursor-pointer mb-8 group">
              <div className="relative">
                <input
                  type="checkbox"
                  name="homeService"
                  checked={form.homeService}
                  onChange={handleChange}
                  className="sr-only"
                />
                <div className={`w-5 h-5 border flex items-center justify-center transition-colors ${form.homeService ? "bg-[#ff6c78] border-[#ff6c78]" : "border-white/20 group-hover:border-[#ff6c78]"}`}>
                  {form.homeService && <span className="text-white text-xs">✓</span>}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <HugeiconsIcon icon={Home01Icon} size={15} color="rgba(255,255,255,0.4)" />
                <span className="text-white/50 text-sm">I want home service</span>
              </div>
            </label>

            <a
              href={whatsappMessage()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-[#ff6c78] text-white py-5 text-sm tracking-widest uppercase font-medium hover:bg-[#e85d68] transition-colors"
            >
              <HugeiconsIcon icon={WhatsappIcon} size={20} color="white" />
              Confirm on WhatsApp
              <HugeiconsIcon icon={ArrowRight01Icon} size={16} color="white" />
            </a>

            <p className="text-white/20 text-xs text-center mt-4">
              Clicking will open WhatsApp with your details pre-filled
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";

const services = [
  "Gel Manicure", "Acrylic Extensions", "Nail Art", "Pedicure", "Manicure", "Home Service"
];

export default function BookingSection() {
  const [form, setForm] = useState({
    name: "", phone: "", service: "", date: "", notes: "", homeService: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const whatsappMessage = () => {
    const msg = `Hi NailSavvy! I'd like to book:\n\nName: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\nDate: ${form.date}\nHome Service: ${form.homeService ? "Yes" : "No"}\nNotes: ${form.notes || "None"}`;
    return `https://wa.me/234XXXXXXXXXX?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="book" className="py-24 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#ff6c78] text-xs tracking-[0.3em] uppercase mb-3">Ready to Glow?</p>
          <h2 className="font-script text-5xl md:text-6xl font-light text-white">Book Your Appointment</h2>
          <p className="text-white/40 mt-4 text-sm max-w-sm mx-auto">
            Fill in your details and we&apos;ll confirm your booking on WhatsApp within minutes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-4">
            <input
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="bg-white/5 border border-white/10 text-white placeholder-white/30 px-4 py-3.5 text-sm focus:outline-none focus:border-[#ff6c78] transition-colors"
            />
            <input
              name="phone"
              placeholder="WhatsApp Number"
              value={form.phone}
              onChange={handleChange}
              className="bg-white/5 border border-white/10 text-white placeholder-white/30 px-4 py-3.5 text-sm focus:outline-none focus:border-[#ff6c78] transition-colors"
            />
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="bg-white/5 border border-white/10 text-white/70 px-4 py-3.5 text-sm focus:outline-none focus:border-[#ff6c78] transition-colors"
            >
              <option value="" disabled>Select a Service</option>
              {services.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="bg-white/5 border border-white/10 text-white/70 px-4 py-3.5 text-sm focus:outline-none focus:border-[#ff6c78] transition-colors"
            />
          </div>

          <div className="flex flex-col gap-4">
            <textarea
              name="notes"
              placeholder="Any special requests or nail inspo details..."
              value={form.notes}
              onChange={handleChange}
              rows={5}
              className="bg-white/5 border border-white/10 text-white placeholder-white/30 px-4 py-3.5 text-sm focus:outline-none focus:border-[#ff6c78] transition-colors resize-none"
            />
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="homeService"
                checked={form.homeService}
                onChange={handleChange}
                className="w-4 h-4 accent-[#ff6c78]"
              />
              <span className="text-white/60 text-sm">I want home service</span>
            </label>

            <a
              href={whatsappMessage()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ff6c78] text-white px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-[#e85d68] transition-colors text-center mt-auto flex items-center justify-center gap-2"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Confirm on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

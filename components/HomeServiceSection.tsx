"use client";

const zones = [
  { zone: "Zone 1", areas: "VI, Lekki Phase 1, Ikoyi", fee: "₦3,000" },
  { zone: "Zone 2", areas: "Ajah, Sangotedo, Lekki Phase 2", fee: "₦5,000" },
  { zone: "Zone 3", areas: "Yaba, Surulere, Maryland", fee: "₦5,000" },
  { zone: "Zone 4", areas: "Ikeja, Ojota, Gbagada", fee: "₦7,000" },
];

export default function HomeServiceSection() {
  return (
    <section id="home-service" className="py-24 px-6 bg-[#fdd4d5]/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#ff6c78] text-xs tracking-[0.3em] uppercase mb-3">We Come To You</p>
            <h2 className="font-script text-5xl md:text-6xl font-light text-black leading-tight">
              Home Service, <br />Instantly Booked
            </h2>
            <p className="text-black/60 mt-6 text-sm leading-relaxed max-w-sm">
              Book a home service and our team gets notified immediately. We confirm, you pay a 50% deposit,
              and we show up at your door. After the service, share your nail photo with us!
            </p>

            <div className="mt-8 space-y-3">
              {[
                "Instant booking confirmation via WhatsApp",
                "50% deposit to secure your slot",
                "Full service done in the comfort of your home",
                "Photo of finished nails sent to your WhatsApp",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#ff6c78] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="text-black/70 text-sm">{point}</span>
                </div>
              ))}
            </div>

            <a
              href="#book"
              className="inline-block mt-10 bg-[#ff6c78] text-white px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-[#e85d68] transition-colors"
            >
              Book Home Service
            </a>
          </div>

          {/* Zone table */}
          <div>
            <h3 className="font-script text-2xl text-black mb-6">Service Zones & Fees</h3>
            <div className="border border-[#fbaaab] overflow-hidden">
              <div className="grid grid-cols-3 bg-[#ff6c78] text-white text-xs tracking-widest uppercase px-5 py-3">
                <span>Zone</span>
                <span>Areas</span>
                <span className="text-right">Fee</span>
              </div>
              {zones.map((z, i) => (
                <div
                  key={z.zone}
                  className={`grid grid-cols-3 px-5 py-4 text-sm items-start ${i % 2 === 0 ? "bg-white" : "bg-[#fdd4d5]/30"}`}
                >
                  <span className="font-medium text-black">{z.zone}</span>
                  <span className="text-black/60 text-xs leading-relaxed">{z.areas}</span>
                  <span className="text-right text-[#ff6c78] font-medium">{z.fee}</span>
                </div>
              ))}
            </div>
            <p className="text-black/40 text-xs mt-3">* Zone fees are added to the service price. Contact us if your area isn&apos;t listed.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Phone, MessageCircle, ShieldCheck, Check, Sparkles } from 'lucide-react';

export const SplitSection: React.FC = () => {
  return (
    <section id="split" className="py-8 sm:py-10 bg-[#14181a] text-white relative overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#70a81b]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column Text */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-[#84cc16] text-xs font-bold uppercase tracking-widest mb-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Reservation</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-white font-medium tracking-tight leading-[1.18] mb-2.5">
              Best rate is always on the phone with us.
            </h2>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-3.5 max-w-2xl font-light">
              No booking fee, no middleman. Call or message the number below and we'll hold the room you actually want — not whichever one's left on a listings site.
            </p>

            {/* Direct Booking Advantages */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
              <div className="flex items-start gap-2.5">
                <div className="w-4 h-4 rounded-full bg-[#84cc16]/20 flex items-center justify-center text-[#84cc16] shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </div>
                <span className="text-xs sm:text-sm text-stone-200">
                  Exact room orientation &amp; floor selection
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-4 h-4 rounded-full bg-[#84cc16]/20 flex items-center justify-center text-[#84cc16] shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </div>
                <span className="text-xs sm:text-sm text-stone-200">
                  Complimentary early check-in when available
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-4 h-4 rounded-full bg-[#84cc16]/20 flex items-center justify-center text-[#84cc16] shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </div>
                <span className="text-xs sm:text-sm text-stone-200">
                  Direct WhatsApp concierge communication
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-4 h-4 rounded-full bg-[#84cc16]/20 flex items-center justify-center text-[#84cc16] shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </div>
                <span className="text-xs sm:text-sm text-stone-200">
                  No sudden cancellation or platform service fees
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="tel:+917052832649"
                className="inline-flex items-center gap-2 bg-[#84cc16] hover:bg-[#70a81b] text-[#14181a] font-bold text-xs sm:text-sm px-5 py-2.5 sm:py-3 rounded-xl shadow-md transition active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>Call +91 70528 32649</span>
              </a>

              <a
                href="https://wa.me/917052832649?text=Hello%20MTG%20Grand%20Hotel,%20I%20would%20like%20to%20reserve%20a%20room."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm px-4 py-2.5 sm:py-3 rounded-xl border border-white/20 transition active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </div>

          {/* Right Column Image Frame */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/3] bg-stone-900">
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
                alt="Skyline Grand Suite lounge at dusk"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Direct Badge */}
            <div className="absolute -bottom-5 -right-5 bg-white text-gray-900 p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-stone-100">
              <ShieldCheck className="w-8 h-8 text-[#70a81b]" />
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Guarantee
                </div>
                <div className="text-sm font-bold text-gray-900">
                  Best Rate Direct
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

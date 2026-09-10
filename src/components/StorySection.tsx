import React from 'react';
import { Sparkles, Phone, BedDouble, Clock, Star } from 'lucide-react';

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-8 sm:py-10 bg-white border-t border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column Text */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 text-[#70a81b] text-xs font-bold uppercase tracking-widest mb-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Philosophy</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-gray-900 font-medium tracking-tight leading-[1.18] mb-3">
              Fewer rooms, more conviction.
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-2.5 font-normal">
              MTG Grand was built on a simple refusal: no room here looks like a copy of another. Each one is designed around its own material and its own outlook — a valley, a skyline, a forest — so the room does the work a minibar and a mint on the pillow never could.
            </p>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3.5">
              We operate without intermediate booking platforms. When you reserve with us, you speak directly with our on-site team, ensuring you get the exact suite, orientation, and arrival amenities you envision.
            </p>

            {/* 3 Core Stats matching original hotel template */}
            <div className="grid grid-cols-3 gap-3 p-3 rounded-2xl bg-stone-50 border border-stone-200/80 mb-4">
              <div className="flex flex-col items-center sm:items-start">
                <div className="flex items-center gap-1.5 text-stone-900 font-serif text-xl sm:text-2xl font-bold">
                  <BedDouble className="w-4 h-4 text-[#70a81b]" />
                  <span>08</span>
                </div>
                <span className="text-[11px] sm:text-xs text-stone-500 font-medium mt-0.5 text-center sm:text-left">
                  Signature rooms
                </span>
              </div>

              <div className="flex flex-col items-center sm:items-start border-x border-stone-200 px-2 sm:px-3">
                <div className="flex items-center gap-1.5 text-stone-900 font-serif text-xl sm:text-2xl font-bold">
                  <Clock className="w-4 h-4 text-[#70a81b]" />
                  <span>24h</span>
                </div>
                <span className="text-[11px] sm:text-xs text-stone-500 font-medium mt-0.5 text-center sm:text-left">
                  Front desk &amp; concierge
                </span>
              </div>

              <div className="flex flex-col items-center sm:items-start">
                <div className="flex items-center gap-1.5 text-stone-900 font-serif text-xl sm:text-2xl font-bold">
                  <Star className="w-4 h-4 text-[#70a81b] fill-[#70a81b]" />
                  <span>4.9</span>
                </div>
                <span className="text-[11px] sm:text-xs text-stone-500 font-medium mt-0.5 text-center sm:text-left">
                  Verified guest rating
                </span>
              </div>
            </div>

            {/* Direct hotline CTA */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="tel:+917052832649"
                className="inline-flex items-center gap-2 bg-[#70a81b] hover:bg-[#5f8f15] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl shadow-xs transition active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>Call +91 70528 32649</span>
              </a>
              <span className="text-xs text-stone-500">
                Direct desk · No automated queues
              </span>
            </div>
          </div>

          {/* Right Column Imagery Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-stone-100">
              <img
                src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80"
                alt="Sierra Suite view over mountains and foggy valley"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Elegant Accent Border Offset */}
            <div className="hidden sm:block absolute -inset-4 border-2 border-[#70a81b]/30 rounded-3xl z-0 transform translate-x-3 translate-y-3 pointer-events-none" />

            {/* Floating Quote Badge */}
            <div className="absolute -bottom-6 -left-6 z-20 bg-[#14181a] text-white p-5 rounded-2xl shadow-xl max-w-xs border border-white/10 hidden sm:block">
              <p className="text-xs italic text-stone-300">
                "Rooms designed around the view outside your window, not a hotel chain template."
              </p>
              <span className="block text-[11px] font-bold text-lime-400 mt-2 uppercase tracking-wider">
                MTG Grand Architecture
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

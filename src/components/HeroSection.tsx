import React from 'react';
import {
  BedDouble,
  ShieldCheck,
  Headphones,
  Star,
  Clock,
  CheckCircle2,
  Phone,
  ArrowDown,
} from 'lucide-react';

interface HeroSectionProps {
  selectedRoom?: string;
  selectedRate?: string;
  searchQuery?: string;
  activeTab?: string;
  onRoomSelect?: (roomId: string) => void;
  onRateSelect?: (rate: string) => void;
  onSearchQueryChange?: (query: string) => void;
  onTabChange?: (tab: string) => void;
  onSearchSubmit?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section
      id="hero-section"
      className="relative flex flex-col justify-end pt-28 sm:pt-36 pb-6"
    >
      {/* Background Image with Dark Twilight Overlay matching Pinterest hotel template */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/hero-bg.jpg"
          alt="Luxury modern hotel villa at twilight"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-100 transform transition-transform duration-1000"
        />
        {/* Subtle Dark Dusk Gradient Overlay to match Pinterest image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0e11]/92 via-[#0b0e11]/65 to-[#0b0e11]/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e11]/90 via-transparent to-[#0b0e11]/45" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow / Tagline with Green Line Accent */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[#84cc16] font-semibold text-xs sm:text-sm tracking-wide flex items-center">
              Find Your Perfect Stay
              <span className="inline-block w-8 h-[2px] bg-[#84cc16] ml-2 rounded-full" />
            </span>
          </div>

          {/* Headline matching screenshot */}
          <h1 className="text-3xl sm:text-5xl lg:text-[58px] font-serif text-white font-medium tracking-tight leading-[1.12] mb-3">
            Find a place<br />
            you'll <span className="text-[#84cc16] font-serif">love</span> to stay.
          </h1>

          {/* Subtitle from original hotel site */}
          <p className="text-stone-200/90 text-sm sm:text-base max-w-xl font-normal leading-relaxed mb-6">
            Eight distinct rooms and suites, each built around a single idea — mountain, skyline, marble, or timber — so you choose the feeling you want to wake up to.
          </p>

          {/* Direct Sleek CTA Buttons (Replaces bulky Reserve Room card that covered hero) */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <a
              href="#rooms"
              className="inline-flex items-center gap-2 bg-[#84cc16] hover:bg-[#70a81b] text-[#14181a] font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-lg transition-all active:scale-95"
            >
              <BedDouble className="w-4 h-4" />
              <span>Explore 8 Signature Rooms</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl border border-white/20 backdrop-blur-sm transition-all active:scale-95"
            >
              <Phone className="w-3.5 h-3.5 text-[#84cc16]" />
              <span>Direct Booking Desk</span>
            </a>
          </div>

          {/* Three Trust Badges Below Search Bar matching screenshot */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
            {/* Badge 1: Verified Boutique Rooms */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#70a81b]/20 border border-[#84cc16]/50 flex items-center justify-center text-[#84cc16] shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-xs sm:text-sm font-semibold text-white leading-tight">
                  Verified Rooms
                </h2>
                <p className="text-[11px] text-gray-300 mt-0.5">
                  Hand-crafted boutique design
                </p>
              </div>
            </div>

            {/* Badge 2: 24/7 Concierge */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#70a81b]/20 border border-[#84cc16]/50 flex items-center justify-center text-[#84cc16] shrink-0">
                <Headphones className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-xs sm:text-sm font-semibold text-white leading-tight">
                  24/7 Concierge
                </h2>
                <p className="text-[11px] text-gray-300 mt-0.5">
                  Front desk assistance at all hours
                </p>
              </div>
            </div>

            {/* Badge 3: Best Direct Rate */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#70a81b]/20 border border-[#84cc16]/50 flex items-center justify-center text-[#84cc16] shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-xs sm:text-sm font-semibold text-white leading-tight">
                  Direct Rate
                </h2>
                <p className="text-[11px] text-gray-300 mt-0.5">
                  Zero booking fee or middleman
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4-Stat Metric Card at Bottom of Hero */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-6 md:mt-8">
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-5 border border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 items-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {/* Stat 1: 08 Signature Rooms */}
          <div className="flex items-center gap-3 pt-3 md:pt-0 first:pt-0">
            <div className="text-[#70a81b] p-2.5 rounded-xl bg-lime-50/70">
              <BedDouble className="w-6 h-6 stroke-[1.8]" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-serif text-gray-900 tracking-tight">
                08
              </div>
              <div className="text-xs text-gray-500 font-medium">
                Signature Rooms
              </div>
            </div>
          </div>

          {/* Stat 2: 4.9 Guest Rating */}
          <div className="flex items-center gap-3 pt-3 md:pt-0 md:pl-6">
            <div className="text-[#70a81b] p-2.5 rounded-xl bg-lime-50/70">
              <Star className="w-6 h-6 stroke-[1.8]" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-serif text-gray-900 tracking-tight">
                4.9★
              </div>
              <div className="text-xs text-gray-500 font-medium">
                Verified Guest Rating
              </div>
            </div>
          </div>

          {/* Stat 3: 24h Concierge Desk */}
          <div className="flex items-center gap-3 pt-3 md:pt-0 md:pl-6">
            <div className="text-[#70a81b] p-2.5 rounded-xl bg-lime-50/70">
              <Clock className="w-6 h-6 stroke-[1.8]" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-serif text-gray-900 tracking-tight">
                24h
              </div>
              <div className="text-xs text-gray-500 font-medium">
                Front Desk &amp; Service
              </div>
            </div>
          </div>

          {/* Stat 4: 100% Direct Rate */}
          <div className="flex items-center gap-3 pt-3 md:pt-0 md:pl-6">
            <div className="text-[#70a81b] p-2.5 rounded-xl bg-lime-50/70">
              <ShieldCheck className="w-6 h-6 stroke-[1.8]" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-serif text-gray-900 tracking-tight">
                100%
              </div>
              <div className="text-xs text-gray-500 font-medium">
                Direct Price Guarantee
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

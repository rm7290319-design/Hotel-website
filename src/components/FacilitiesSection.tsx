import React, { useState } from 'react';
import { hotelFacilities, HotelFacility } from '../data/rooms';
import { Dumbbell, Utensils, Building, SunDim, Clock, CheckCircle2, Maximize2, X, ChevronRight } from 'lucide-react';

export const FacilitiesSection: React.FC = () => {
  const [activeFacilityId, setActiveFacilityId] = useState<string>(hotelFacilities[0].id);
  const [fullscreenFacility, setFullscreenFacility] = useState<HotelFacility | null>(null);

  const activeFacility = hotelFacilities.find((f) => f.id === activeFacilityId) || hotelFacilities[0];

  const getIcon = (category: string) => {
    switch (category) {
      case 'Rooftop & Terrace':
        return <SunDim className="w-4 h-4" />;
      case 'Reception Area':
        return <Building className="w-4 h-4" />;
      case 'Breakfast & Dining':
        return <Utensils className="w-4 h-4" />;
      case 'Gym & Fitness':
        return <Dumbbell className="w-4 h-4" />;
      default:
        return <Building className="w-4 h-4" />;
    }
  };

  return (
    <section id="facilities" className="py-8 sm:py-10 bg-[#14181a] text-white relative overflow-hidden border-t border-white/10">
      {/* Subtle background ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#84cc16]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#b08d57]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-5 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-8 h-[2px] bg-[#84cc16]"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#84cc16]">
                Hotel Spaces &amp; Amenities
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-medium tracking-tight text-white">
              Spaces Designed for Your Stay
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 mt-1 max-w-xl font-normal">
              From our open-air sunset rooftop lounge and gourmet breakfast buffet to our tranquil bamboo gym and grand marble reception.
            </p>
          </div>

          {/* Quick nav pills */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {hotelFacilities.map((fac) => {
              const isActive = fac.id === activeFacilityId;
              return (
                <button
                  key={fac.id}
                  onClick={() => setActiveFacilityId(fac.id)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                    isActive
                      ? 'bg-[#84cc16] text-[#14181a] shadow-lg shadow-[#84cc16]/20 font-bold scale-[1.02]'
                      : 'bg-white/5 text-stone-300 hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
                >
                  {getIcon(fac.category)}
                  <span>{fac.category}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Showcase Card for Selected Facility */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-white/[0.03] border border-white/10 rounded-2xl p-4 sm:p-5 lg:p-6 backdrop-blur-md mb-5">
          {/* Image side */}
          <div className="lg:col-span-7 relative group overflow-hidden rounded-2xl border border-white/15 aspect-[16/10] bg-black">
            <img
              src={activeFacility.imageUrl}
              alt={activeFacility.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

            {/* Top pill */}
            <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-medium">
              {getIcon(activeFacility.category)}
              <span>{activeFacility.category}</span>
            </div>

            {/* Expand Fullscreen Button */}
            <button
              onClick={() => setFullscreenFacility(activeFacility)}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 hover:bg-[#84cc16] hover:text-[#14181a] backdrop-blur-md text-white border border-white/20 transition-all opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100"
              title="View full photo"
            >
              <Maximize2 className="w-4 h-4" />
            </button>

            {/* Bottom Caption on Image */}
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-xs text-[#84cc16] font-semibold tracking-wider uppercase">
                {activeFacility.subtitle}
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-medium text-white">
                {activeFacility.title}
              </h3>
            </div>
          </div>

          {/* Details side */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3.5">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-medium text-[#d2b27e] mb-2">
                <Clock className="w-4 h-4 text-[#84cc16]" />
                <span>{activeFacility.hours}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-normal text-white leading-tight">
                {activeFacility.title}
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mt-2 font-normal">
                {activeFacility.description}
              </p>
            </div>

            {/* Perks list */}
            <div className="space-y-2 pt-2 border-t border-white/10">
              <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400">
                Highlights &amp; Inclusions
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeFacility.perks.map((perk, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-stone-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#84cc16] shrink-0" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#84cc16] text-[#14181a] font-bold text-xs hover:bg-[#70a81b] transition shadow-md shadow-[#84cc16]/20 active:scale-95"
              >
                <span>Reserve Stay &amp; Access</span>
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/917052832649?text=Hello%20MTG%20Grand%20Hotel,%20I%20have%20an%20inquiry%20regarding%20hotel%20amenities."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs border border-white/15 transition active:scale-95"
              >
                <span>Ask Front Desk</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4-Card Overview Grid of All Spaces */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {hotelFacilities.map((fac) => {
            const isSelected = fac.id === activeFacilityId;
            return (
              <div
                key={fac.id}
                onClick={() => setActiveFacilityId(fac.id)}
                className={`group cursor-pointer rounded-2xl overflow-hidden border transition-all duration-300 ${
                  isSelected
                    ? 'border-[#84cc16] bg-white/[0.08] shadow-xl shadow-[#84cc16]/10 scale-[1.02]'
                    : 'border-white/10 bg-white/[0.02] hover:border-white/30 hover:bg-white/[0.05]'
                }`}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <img
                    src={fac.imageUrl}
                    alt={fac.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-2.5 left-2.5 px-2 py-1 rounded-md bg-black/60 backdrop-blur-sm text-[10px] font-bold text-white uppercase tracking-wider">
                    {fac.category}
                  </div>
                </div>

                <div className="p-4">
                  <h4 className="text-sm font-serif font-medium text-white group-hover:text-[#84cc16] transition-colors">
                    {fac.title}
                  </h4>
                  <p className="text-xs text-stone-400 mt-1 line-clamp-2">
                    {fac.subtitle}
                  </p>
                  <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-[11px]">
                    <span className="text-stone-400">{fac.hours.split('|')[0].trim()}</span>
                    <span className="text-[#84cc16] font-semibold group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-0.5">
                      View details &rarr;
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Photo Lightbox Modal */}
      {fullscreenFacility && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md">
          <div className="relative w-full max-w-5xl bg-[#14181a] border border-white/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-black/40">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#84cc16]">
                  {fullscreenFacility.category}
                </span>
                <h3 className="text-lg sm:text-xl font-serif font-medium text-white">
                  {fullscreenFacility.title}
                </h3>
              </div>
              <button
                onClick={() => setFullscreenFacility(null)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="flex-1 overflow-hidden relative bg-black flex items-center justify-center">
              <img
                src={fullscreenFacility.imageUrl}
                alt={fullscreenFacility.title}
                referrerPolicy="no-referrer"
                className="w-full max-h-[65vh] object-contain"
              />
            </div>

            {/* Modal Footer Description */}
            <div className="p-4 sm:p-6 bg-black/60 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-stone-300 max-w-2xl font-normal">
                {fullscreenFacility.description}
              </p>
              <a
                href="#contact"
                onClick={() => setFullscreenFacility(null)}
                className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#84cc16] text-[#14181a] font-bold text-xs hover:bg-[#70a81b] transition shrink-0"
              >
                <span>Reserve Stay</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

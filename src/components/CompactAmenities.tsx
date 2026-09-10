import React from 'react';
import { Wifi, Clock, ShieldCheck, Sparkles, Compass, DoorOpen, Car } from 'lucide-react';

export const CompactAmenities: React.FC = () => {
  const hotelAmenities = [
    {
      icon: Wifi,
      title: 'High-Speed Wi-Fi',
      desc: 'Fibre-backed mesh in every room, zero daily code.',
    },
    {
      icon: Clock,
      title: '24-Hour Concierge',
      desc: 'Someone on the desk at 3am, not just a card.',
    },
    {
      icon: Compass,
      title: 'Private Balconies',
      desc: 'Direct terrace opening into unimpeded views.',
    },
    {
      icon: DoorOpen,
      title: 'Flexible Check-In',
      desc: 'Early arrivals & late checkouts accommodated.',
    },
    {
      icon: Car,
      title: 'Valet & Parking',
      desc: 'Secure on-premise covered parking bays.',
    },
    {
      icon: ShieldCheck,
      title: 'Direct Rate Match',
      desc: 'Zero booking fee or middleman commission.',
    },
  ];

  return (
    <section id="amenities" className="bg-[#f4f2ec] border-y border-stone-200/80 py-4 sm:py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-2.5 pb-2 border-b border-stone-300/60">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#70a81b]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#5f8f15]">
              Amenities Included
            </span>
            <span className="text-stone-400 text-xs">•</span>
            <span className="text-xs text-stone-600 font-medium">
              Standard with every room and suite reservation
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-stone-500">
            <Sparkles className="w-3.5 h-3.5 text-[#70a81b]" />
            <span>Zero hidden resort fees · Direct hotel service</span>
          </div>
        </div>

        {/* Compact 6-Column Responsive Grid (Takes minimum vertical space) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3">
          {hotelAmenities.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-white/90 hover:bg-white rounded-xl p-2.5 sm:p-3 border border-stone-200/80 hover:border-[#84cc16]/60 transition-all shadow-xs hover:shadow-md flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 rounded-lg bg-lime-50 flex items-center justify-center text-[#70a81b]">
                    <IconComponent className="w-4 h-4 stroke-[2]" />
                  </div>
                  <span className="text-[10px] font-bold text-stone-400">0{index + 1}</span>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-gray-500 mt-0.5 leading-tight">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

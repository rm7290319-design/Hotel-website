import React from 'react';
import { Compass, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { hotelRooms } from '../data/rooms';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0e1214] text-stone-300 py-8 sm:py-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-6 border-b border-white/10">
          {/* Col 1: Brand Info */}
          <div className="space-y-2.5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border border-[#b08d57] bg-[#f4f0e6] p-1 flex items-center justify-center text-[#14181a] shadow-xs">
                <Compass className="w-4 h-4 text-[#b08d57]" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-serif font-medium tracking-wide text-white">
                  MTG Grand
                </span>
                <span className="text-[9px] tracking-[0.25em] font-semibold text-[#d2b27e] uppercase -mt-0.5">
                  HOTEL &amp; SUITES
                </span>
              </div>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed max-w-xs font-normal">
              Boutique rooms and suites designed around the view outside your window. Fewer rooms, more conviction.
            </p>
            <div className="text-[11px] text-[#d2b27e]">
              EST. FOR THE VIEW · MEERUT, UP
            </div>
          </div>

          {/* Col 2: The 8 Rooms */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-2.5">
              Signature Rooms
            </h4>
            <ul className="space-y-1.5 text-xs text-stone-400">
              {hotelRooms.slice(0, 5).map((room) => (
                <li key={room.id}>
                  <a href="#rooms" className="hover:text-[#84cc16] transition">
                    {room.title} <span className="text-stone-500 font-mono">({room.price})</span>
                  </a>
                </li>
              ))}
              <li>
                <a href="#rooms" className="text-[#84cc16] hover:underline transition">
                  View all 8 rooms &rarr;
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Experience & Amenities */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-2.5">
              The Experience
            </h4>
            <ul className="space-y-1.5 text-xs text-stone-400">
              <li>
                <a href="#facilities" className="hover:text-[#84cc16] transition text-[#84cc16] font-medium">
                  Rooftop, Gym &amp; Dining
                </a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-[#84cc16] transition">
                  High-Speed Fibre Wi-Fi
                </a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-[#84cc16] transition">
                  24-Hour Front Desk &amp; Concierge
                </a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-[#84cc16] transition">
                  Private Mountain &amp; City Balconies
                </a>
              </li>
              <li>
                <a href="#split" className="hover:text-[#84cc16] transition">
                  Direct Booking Guarantee
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-[#84cc16] transition">
                  Architectural Philosophy
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-2.5">
              Direct Desk
            </h4>
            <div className="space-y-2 text-xs text-stone-400">
              <a
                href="tel:+917052832649"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <Phone className="w-3.5 h-3.5 text-[#84cc16] shrink-0" />
                <span className="font-semibold text-white">+91 70528 32649</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#84cc16] shrink-0 mt-0.5" />
                <span>Meerut, Uttar Pradesh, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#84cc16] shrink-0" />
                <span>reservations@mtggrandhotel.com</span>
              </div>
              <div className="pt-1">
                <a
                  href="https://wa.me/917052832649?text=Hello%20MTG%20Grand%20Hotel,%20I%20would%20like%20to%20reserve%20a%20room."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#14181a] bg-[#84cc16] hover:bg-[#70a81b] px-3 py-1.5 rounded-lg transition active:scale-95"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-stone-500">
          <div>
            © {new Date().getFullYear()} MTG Grand Hotel &amp; Suites. All rights reserved.
          </div>
          <div className="flex items-center gap-5">
            <a
              href="https://instagram.com/rajmaurya.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-300 transition"
            >
              Instagram @rajmaurya.ai
            </a>
            <a href="#story" className="hover:text-stone-300 transition">
              About
            </a>
            <a href="#rooms" className="hover:text-stone-300 transition">
              Rooms
            </a>
            <a href="#contact" className="hover:text-stone-300 transition">
              Reservations
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

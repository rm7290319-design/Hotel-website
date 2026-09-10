import React, { useState, useEffect } from 'react';
import { Heart, ChevronDown, Menu, X, Phone, Compass } from 'lucide-react';

interface NavbarProps {
  savedCount: number;
  onOpenSaved: () => void;
  onContactClick: () => void;
  onSelectCategory: (category: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  savedCount,
  onOpenSaved,
  onContactClick,
  onSelectCategory,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [roomsDropdownOpen, setRoomsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="siteHeader"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#14181a]/95 backdrop-blur-md py-3 shadow-xl border-b border-white/10'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* MTG Grand Brand Logo */}
          <a
            href="#"
            id="brand-logo"
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-full border border-[#b08d57] bg-[#f4f0e6] p-1 flex items-center justify-center text-[#14181a] shadow-sm">
              <Compass className="w-5 h-5 text-[#b08d57]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-serif font-medium tracking-wide text-white flex items-center gap-1">
                MTG Grand
              </span>
              <span className="text-[9px] tracking-[0.25em] font-semibold text-[#d2b27e] uppercase -mt-0.5">
                HOTEL &amp; SUITES
              </span>
            </div>
          </a>

          {/* Navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/90">
            <a
              href="#story"
              className="hover:text-white transition-opacity opacity-85 hover:opacity-100"
            >
              The Hotel
            </a>

            {/* Rooms Dropdown */}
            <div className="relative">
              <button
                type="button"
                id="nav-rooms-btn"
                onClick={() => setRoomsDropdownOpen(!roomsDropdownOpen)}
                className="flex items-center gap-1.5 hover:text-white transition-opacity opacity-85 hover:opacity-100 focus:outline-none"
              >
                <span>Rooms &amp; Suites</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {roomsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-[#1b2023] border border-white/10 rounded-xl shadow-2xl py-2 z-50 text-xs">
                  <button
                    onClick={() => {
                      onSelectCategory('all');
                      setRoomsDropdownOpen(false);
                      document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-white/10 text-stone-200"
                  >
                    All 8 Signature Rooms
                  </button>
                  <button
                    onClick={() => {
                      onSelectCategory('Mountain');
                      setRoomsDropdownOpen(false);
                      document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-white/10 text-stone-200"
                  >
                    The Sierra Suite (Mountain)
                  </button>
                  <button
                    onClick={() => {
                      onSelectCategory('Skyline');
                      setRoomsDropdownOpen(false);
                      document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-white/10 text-stone-200"
                  >
                    Skyline Grand Suite (City)
                  </button>
                  <button
                    onClick={() => {
                      onSelectCategory('Luxury');
                      setRoomsDropdownOpen(false);
                      document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-white/10 text-stone-200"
                  >
                    The Opulence Suite (After Dark)
                  </button>
                  <button
                    onClick={() => {
                      onSelectCategory('Nature');
                      setRoomsDropdownOpen(false);
                      document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-white/10 text-stone-200"
                  >
                    Forest Loft (Forest Line)
                  </button>
                </div>
              )}
            </div>

            <a
              href="#amenities"
              className="hover:text-white transition-opacity opacity-85 hover:opacity-100"
            >
              Amenities
            </a>

            <a
              href="#facilities"
              className="hover:text-[#84cc16] transition-colors opacity-95 hover:opacity-100 flex items-center gap-1"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#84cc16]"></span>
              <span>Spaces</span>
            </a>

            <a
              href="#split"
              className="hover:text-white transition-opacity opacity-85 hover:opacity-100"
            >
              Stay With Us
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onContactClick();
              }}
              className="hover:text-white transition-opacity opacity-85 hover:opacity-100"
            >
              Contact
            </a>
          </nav>

          {/* Right Action buttons */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Wishlist button */}
            <button
              type="button"
              id="nav-wishlist-btn"
              onClick={onOpenSaved}
              className="flex items-center gap-2 text-sm text-white/90 hover:text-white transition py-2 px-3 rounded-lg hover:bg-white/5"
            >
              <Heart
                className={`w-4 h-4 ${savedCount > 0 ? 'fill-rose-500 text-rose-500' : ''}`}
              />
              <span>Saved</span>
              {savedCount > 0 && (
                <span className="bg-[#b08d57] text-white font-bold text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {savedCount}
                </span>
              )}
            </button>

            {/* Direct Telephone CTA matching original HTML */}
            <a
              href="tel:+917052832649"
              className="border border-white/35 hover:border-[#b08d57] hover:bg-[#b08d57] text-white text-sm font-semibold px-4 py-2 rounded-full transition-all shadow-sm flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+91 70528 32649</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-3">
            <button
              type="button"
              onClick={onOpenSaved}
              className="text-white relative p-1.5"
            >
              <Heart
                className={`w-5 h-5 ${savedCount > 0 ? 'fill-rose-500 text-rose-500' : ''}`}
              />
              {savedCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#b08d57] text-white font-bold text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                  {savedCount}
                </span>
              )}
            </button>

            <button
              type="button"
              id="menuBtn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2 rounded-lg hover:bg-white/10"
              aria-label="Open navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-6 pt-3 px-4 bg-[#14181a]/98 border border-white/10 rounded-2xl shadow-2xl flex flex-col gap-3 text-base font-medium text-stone-200">
            <a
              href="#story"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/10"
            >
              The Hotel
            </a>
            <a
              href="#rooms"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/10"
            >
              Rooms &amp; Suites (All 8)
            </a>
            <a
              href="#amenities"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/10"
            >
              Amenities
            </a>
            <a
              href="#facilities"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/10 text-[#84cc16] flex items-center justify-between"
            >
              <span>Spaces (Rooftop, Gym, Dining, Lobby)</span>
              <span className="text-[10px] bg-[#84cc16]/20 text-[#84cc16] px-2 py-0.5 rounded-full">New</span>
            </a>
            <a
              href="#split"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/10"
            >
              Stay With Us
            </a>
            <a
              href="#contact"
              onClick={() => {
                setMobileMenuOpen(false);
                onContactClick();
              }}
              className="px-3 py-2 rounded-lg hover:bg-white/10"
            >
              Contact Desk
            </a>
            <div className="pt-3 border-t border-white/10">
              <a
                href="tel:+917052832649"
                className="w-full text-center bg-[#b08d57] hover:bg-[#d2b27e] py-3 rounded-full text-[#14181a] font-bold transition flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call +91 70528 32649</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

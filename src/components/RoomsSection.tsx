import React, { useState, useRef } from 'react';
import {
  BedDouble,
  Heart,
  Star,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  SlidersHorizontal,
  Phone,
  Check,
  Eye,
  Maximize2,
} from 'lucide-react';
import { Room } from '../types';

interface RoomsSectionProps {
  rooms: Room[];
  savedRoomIds: string[];
  onToggleSave: (roomId: string) => void;
  onSelectRoomModal: (room: Room) => void;
  onReserveRoom: (room: Room) => void;
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CATEGORIES = [
  { id: 'all', label: 'All 8 Rooms' },
  { id: 'Mountain', label: 'Mountain View' },
  { id: 'Skyline', label: 'City Skyline' },
  { id: 'Luxury', label: 'Luxury & After Dark' },
  { id: 'Nature', label: 'Forest & Nature' },
  { id: 'Heritage', label: 'Marble & Gold' },
  { id: 'Minimalist', label: 'Quiet & Spare' },
];

export const RoomsSection: React.FC<RoomsSectionProps> = ({
  rooms,
  savedRoomIds,
  onToggleSave,
  onSelectRoomModal,
  onReserveRoom,
  selectedCategory,
  onSelectCategory,
}) => {
  const [viewMode, setViewMode] = useState<'rail' | 'grid'>('rail');
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredRooms = rooms.filter((r) => {
    if (selectedCategory === 'all') return true;
    return r.tagCategory.toLowerCase() === selectedCategory.toLowerCase();
  });

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="rooms" className="py-8 sm:py-10 bg-stone-50 border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2 text-[#70a81b] text-xs font-bold uppercase tracking-widest mb-1.5">
              <span className="w-2 h-2 rounded-full bg-[#70a81b]" />
              <span>Where You Sleep</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-gray-900 font-medium tracking-tight">
              Rooms &amp; Suites
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm mt-1 max-w-xl">
              Eight rooms. None of them interchangeable. Click or drag to browse each view and layout.
            </p>
          </div>

          {/* Right Controls: View Switcher and Rail Navigation */}
          <div className="flex items-center gap-2.5 self-start md:self-end">
            {/* Grid / Rail View Toggle */}
            <div className="bg-white rounded-xl p-1 border border-stone-200 shadow-xs flex items-center gap-1">
              <button
                type="button"
                onClick={() => setViewMode('rail')}
                className={`p-1.5 sm:p-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                  viewMode === 'rail'
                    ? 'bg-[#14181a] text-white'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
                title="Slider Rail View"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span className="hidden sm:inline">Slider</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`p-1.5 sm:p-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                  viewMode === 'grid'
                    ? 'bg-[#14181a] text-white'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
                title="Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
                <span className="hidden sm:inline">Grid</span>
              </button>
            </div>

            {/* Slider Navigation Arrows (shown in rail mode) */}
            {viewMode === 'rail' && (
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => scroll('left')}
                  className="w-9 h-9 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-stone-700 hover:bg-stone-100 shadow-xs active:scale-95 transition"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scroll('right')}
                  className="w-9 h-9 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-stone-700 hover:bg-stone-100 shadow-xs active:scale-95 transition"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Category Pills Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2.5 mb-4 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all border ${
                selectedCategory === cat.id
                  ? 'bg-[#14181a] text-white border-[#14181a] shadow-sm'
                  : 'bg-white text-stone-600 border-stone-200 hover:border-stone-400 hover:text-stone-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Empty state if filter doesn't match */}
        {filteredRooms.length === 0 && (
          <div className="bg-white rounded-2xl p-12 text-center border border-stone-200">
            <BedDouble className="w-10 h-10 text-stone-400 mx-auto mb-3" />
            <h3 className="text-lg font-serif text-gray-900 font-medium">
              No rooms match this filter
            </h3>
            <p className="text-sm text-gray-500 mt-1 mb-4">
              Select another view category or reset to see all 8 rooms.
            </p>
            <button
              onClick={() => onSelectCategory('all')}
              className="bg-[#14181a] text-white text-xs font-semibold px-4 py-2 rounded-lg"
            >
              Show All 8 Rooms
            </button>
          </div>
        )}

        {/* RAIL VIEW (Smooth side-scrolling) */}
        {viewMode === 'rail' && filteredRooms.length > 0 && (
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scroll-smooth scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0"
          >
            {filteredRooms.map((room) => {
              const isSaved = savedRoomIds.includes(room.id);
              return (
                <div
                  key={room.id}
                  className="w-[320px] sm:w-[380px] shrink-0 snap-start bg-white rounded-2xl sm:rounded-3xl border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
                >
                  {/* Image Container with Tag and Wishlist */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                    <img
                      src={room.imageUrl}
                      alt={room.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                    {/* Original Tag (e.g. MOUNTAIN VIEW, CITY SKYLINE) */}
                    <div className="absolute top-3.5 left-3.5">
                      <span className="bg-[#14181a]/85 backdrop-blur-md text-[#84cc16] text-[10px] font-bold tracking-wider px-3 py-1 rounded-full uppercase border border-white/10">
                        {room.tag}
                      </span>
                    </div>

                    {/* Wishlist Button */}
                    <button
                      type="button"
                      onClick={() => onToggleSave(room.id)}
                      aria-label={`Save ${room.title}`}
                      className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/60 transition active:scale-90"
                    >
                      <Heart
                        className={`w-4 h-4 transition ${
                          isSaved ? 'fill-rose-500 text-rose-500' : 'text-white'
                        }`}
                      />
                    </button>

                    {/* Rating & Room ID Badge */}
                    <div className="absolute bottom-3 left-3.5 flex items-center gap-2">
                      <span className="bg-black/60 backdrop-blur-md text-amber-300 text-xs font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
                        <Star className="w-3 h-3 fill-amber-300" />
                        <span>{room.rating}</span>
                      </span>
                      <span className="text-[11px] text-white/90 font-medium">
                        ({room.reviewsCount} reviews)
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-xl font-serif text-gray-900 font-medium group-hover:text-[#70a81b] transition">
                          {room.title}
                        </h3>
                      </div>

                      {/* Description from original HTML */}
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                        {room.description}
                      </p>

                      {/* Specs Badge */}
                      <div className="flex items-center gap-2 text-xs text-stone-500 font-medium bg-stone-50 p-2.5 rounded-xl border border-stone-100 mb-5">
                        <BedDouble className="w-3.5 h-3.5 text-[#70a81b] shrink-0" />
                        <span>{room.specs}</span>
                      </div>
                    </div>

                    {/* Price and Action Buttons */}
                    <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400 block">
                          Direct Rate
                        </span>
                        <div className="text-lg sm:text-xl font-bold font-serif text-gray-900">
                          {room.price}
                          <span className="text-xs font-normal text-gray-500 font-sans ml-1">
                            / night
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => onSelectRoomModal(room)}
                          className="p-2.5 rounded-xl border border-stone-200 hover:bg-stone-100 text-stone-700 transition"
                          title="View Room Details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>

                        <button
                          type="button"
                          onClick={() => onReserveRoom(room)}
                          className="bg-[#14181a] hover:bg-[#70a81b] text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition shadow-xs active:scale-95"
                        >
                          Reserve
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* GRID VIEW */}
        {viewMode === 'grid' && filteredRooms.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredRooms.map((room) => {
              const isSaved = savedRoomIds.includes(room.id);
              return (
                <div
                  key={room.id}
                  className="bg-white rounded-2xl border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[16/11] overflow-hidden bg-stone-100">
                    <img
                      src={room.imageUrl}
                      alt={room.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                    <div className="absolute top-3 left-3">
                      <span className="bg-[#14181a]/85 backdrop-blur-md text-[#84cc16] text-[9px] font-bold tracking-wider px-2.5 py-0.5 rounded-full uppercase border border-white/10">
                        {room.tag}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => onToggleSave(room.id)}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/60 transition active:scale-90"
                    >
                      <Heart
                        className={`w-3.5 h-3.5 ${
                          isSaved ? 'fill-rose-500 text-rose-500' : 'text-white'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1 text-amber-500 text-xs font-semibold mb-1">
                        <Star className="w-3 h-3 fill-amber-400" />
                        <span>{room.rating}</span>
                        <span className="text-gray-400 text-[11px]">
                          ({room.reviewsCount})
                        </span>
                      </div>

                      <h3 className="text-lg font-serif text-gray-900 font-medium group-hover:text-[#70a81b] transition line-clamp-1">
                        {room.title}
                      </h3>

                      <p className="text-gray-500 text-xs mt-1 mb-3 line-clamp-2">
                        {room.description}
                      </p>

                      <div className="text-[11px] text-stone-500 bg-stone-50 p-2 rounded-lg mb-3">
                        {room.specs}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                      <div>
                        <div className="text-base font-bold font-serif text-gray-900">
                          {room.price}
                        </div>
                        <span className="text-[10px] text-gray-400 block -mt-1">
                          / night
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => onReserveRoom(room)}
                        className="bg-[#14181a] hover:bg-[#70a81b] text-white text-xs font-semibold px-3 py-2 rounded-lg transition"
                      >
                        Reserve
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

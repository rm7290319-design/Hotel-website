import React from 'react';
import { Room } from '../types';
import {
  X,
  BedDouble,
  Compass,
  Star,
  Phone,
  MessageCircle,
  ShieldCheck,
  Check,
  Wifi,
  Clock,
  Sparkles,
} from 'lucide-react';

interface RoomModalProps {
  room: Room | null;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  onReserve: (room: Room) => void;
}

export const RoomModal: React.FC<RoomModalProps> = ({
  room,
  onClose,
  isSaved,
  onToggleSave,
  onReserve,
}) => {
  if (!room) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl my-8 border border-stone-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition active:scale-95"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Hero Image */}
        <div className="relative aspect-[16/9] w-full bg-stone-100">
          <img
            src={room.imageUrl}
            alt={room.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
          <div className="absolute bottom-4 left-4 bg-[#14181a]/90 backdrop-blur-sm text-[#84cc16] text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-lg border border-white/10">
            {room.tag}
          </div>
          <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-lg flex items-center gap-1.5">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="font-bold">{room.rating}</span>
            <span className="text-stone-300">({room.reviewsCount} reviews)</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center gap-2 text-xs text-stone-500 mb-1">
                <Compass className="w-3.5 h-3.5 text-[#70a81b]" />
                <span className="font-semibold text-stone-800">{room.viewType}</span>
                <span>•</span>
                <span>{room.bedType}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900">
                {room.title}
              </h3>
            </div>
            <div className="text-left sm:text-right bg-stone-50 sm:bg-transparent p-3 sm:p-0 rounded-xl">
              <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400 block">
                Direct Rate
              </span>
              <span className="text-2xl sm:text-3xl font-bold font-serif text-gray-900">
                {room.price}
                <span className="text-xs font-normal text-stone-500 font-sans ml-1">
                  / night
                </span>
              </span>
            </div>
          </div>

          <p className="text-sm text-gray-600 leading-relaxed mb-6 font-normal">
            {room.description}
          </p>

          {/* Specs Bar */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-stone-50 border border-stone-200/80 mb-6 text-center">
            <div>
              <div className="text-xs text-stone-500 mb-0.5">Bedding</div>
              <span className="text-sm font-bold text-gray-900">{room.bedType}</span>
            </div>
            <div className="border-x border-stone-200 px-2">
              <div className="text-xs text-stone-500 mb-0.5">Atmosphere</div>
              <span className="text-sm font-bold text-gray-900">{room.tagCategory}</span>
            </div>
            <div>
              <div className="text-xs text-stone-500 mb-0.5">Direct Perks</div>
              <span className="text-sm font-bold text-gray-900">Complimentary Wi-Fi</span>
            </div>
          </div>

          {/* Verification indicator */}
          <div className="flex items-center gap-2 text-xs font-medium text-stone-700 bg-lime-50/80 border border-lime-200/80 px-4 py-2.5 rounded-xl mb-6">
            <ShieldCheck className="w-4 h-4 text-[#70a81b] shrink-0" />
            <span>
              Best rate direct guarantee. No platform booking markup or hidden convenience fee.
            </span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => {
                onReserve(room);
                onClose();
              }}
              className="w-full sm:flex-1 bg-[#70a81b] hover:bg-[#5f8f15] text-white font-bold text-sm py-3.5 px-4 rounded-xl transition flex items-center justify-center gap-2 shadow-sm"
            >
              <BedDouble className="w-4 h-4" />
              <span>Reserve This Suite</span>
            </button>

            <a
              href={`https://wa.me/917052832649?text=Hello%20MTG%20Grand,%20I%20would%20like%20to%20reserve%20${encodeURIComponent(room.title)}%20(${room.price}/night).`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm py-3.5 px-5 rounded-xl transition flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Desk</span>
            </a>

            <button
              onClick={() => onToggleSave(room.id)}
              className={`w-full sm:w-auto px-5 py-3.5 rounded-xl border text-sm font-bold transition ${
                isSaved
                  ? 'border-rose-300 text-rose-600 bg-rose-50'
                  : 'border-stone-300 text-stone-700 hover:bg-stone-50'
              }`}
            >
              {isSaved ? 'Saved' : 'Save'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

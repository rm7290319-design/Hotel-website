import React from 'react';
import { Room } from '../types';
import { X, Heart, Eye, Trash2, BedDouble } from 'lucide-react';

interface SavedModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedRooms: Room[];
  onRemoveSaved: (id: string) => void;
  onSelectRoom: (room: Room) => void;
  onReserveRoom: (room: Room) => void;
}

export const SavedModal: React.FC<SavedModalProps> = ({
  isOpen,
  onClose,
  savedRooms,
  onRemoveSaved,
  onSelectRoom,
  onReserveRoom,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-stone-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center">
              <Heart className="w-5 h-5 fill-rose-500" />
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-gray-900">
                Saved Rooms &amp; Suites
              </h3>
              <p className="text-xs text-stone-500">
                {savedRooms.length} room{savedRooms.length !== 1 ? 's' : ''} bookmarked
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content list */}
        <div className="flex-1 overflow-y-auto py-4 space-y-3">
          {savedRooms.length === 0 ? (
            <div className="text-center py-12">
              <Heart className="w-12 h-12 text-stone-300 mx-auto mb-3" />
              <p className="text-sm text-stone-600 font-medium">
                You haven't bookmarked any rooms yet.
              </p>
              <p className="text-xs text-stone-400 mt-1">
                Click the heart icon on any of our 8 signature rooms to compare them here.
              </p>
            </div>
          ) : (
            savedRooms.map((room) => (
              <div
                key={room.id}
                className="flex items-center gap-4 p-3 rounded-2xl border border-stone-200/80 hover:border-lime-500/50 bg-stone-50/50 transition group"
              >
                <img
                  src={room.imageUrl}
                  alt={room.title}
                  referrerPolicy="no-referrer"
                  className="w-20 h-16 rounded-xl object-cover shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-bold uppercase text-lime-600 tracking-wider">
                    {room.tag}
                  </span>
                  <h4 className="text-sm font-bold text-gray-900 truncate">
                    {room.title}
                  </h4>
                  <span className="text-xs font-semibold text-gray-700 block">
                    {room.price}{' '}
                    <span className="text-[10px] font-normal text-stone-500">
                      / night
                    </span>
                  </span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => {
                      onClose();
                      onReserveRoom(room);
                    }}
                    className="px-3 py-1.5 rounded-lg bg-[#14181a] text-white text-xs font-semibold hover:bg-[#70a81b] transition"
                  >
                    Reserve
                  </button>
                  <button
                    onClick={() => {
                      onClose();
                      onSelectRoom(room);
                    }}
                    className="p-2 rounded-lg bg-white border border-stone-200 text-stone-700 hover:text-lime-600 hover:border-lime-500 transition"
                    title="View details"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onRemoveSaved(room.id)}
                    className="p-2 rounded-lg bg-white border border-stone-200 text-stone-400 hover:text-rose-500 hover:border-rose-300 transition"
                    title="Remove from saved"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

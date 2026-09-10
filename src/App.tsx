import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CompactAmenities } from './components/CompactAmenities';
import { RoomsSection } from './components/RoomsSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { StorySection } from './components/StorySection';
import { SplitSection } from './components/SplitSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { RoomModal } from './components/RoomModal';
import { SavedModal } from './components/SavedModal';
import { hotelRooms } from './data/rooms';
import { Room } from './types';

export default function App() {
  const [rooms, setRooms] = useState<Room[]>(hotelRooms);
  const [savedRoomIds, setSavedRoomIds] = useState<string[]>(['room-1', 'room-2']);
  const [selectedRoomModal, setSelectedRoomModal] = useState<Room | null>(null);
  const [isSavedModalOpen, setIsSavedModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Hero section search states
  const [activeTab, setActiveTab] = useState<string>('stay');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedRoomHero, setSelectedRoomHero] = useState<string>('all');
  const [selectedRate, setSelectedRate] = useState<string>('all');

  // Contact form active room selection
  const [contactInitialRoomId, setContactInitialRoomId] = useState<string>('room-1');

  const handleToggleSave = (roomId: string) => {
    setSavedRoomIds((prev) =>
      prev.includes(roomId) ? prev.filter((id) => id !== roomId) : [...prev, roomId]
    );
  };

  const handleHeroSearchSubmit = () => {
    let filtered = hotelRooms;

    // Filter by specific room if selected
    if (selectedRoomHero !== 'all') {
      filtered = filtered.filter((r) => r.id === selectedRoomHero);
    }

    // Filter by query text (view, name, tag)
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.tag.toLowerCase().includes(q) ||
          r.description.toLowerCase().includes(q) ||
          r.tagCategory.toLowerCase().includes(q) ||
          r.viewType.toLowerCase().includes(q)
      );
    }

    // Filter by rate range
    if (selectedRate === 'under-7k') {
      filtered = filtered.filter((r) => r.rawPrice < 7000);
    } else if (selectedRate === '7k-10k') {
      filtered = filtered.filter((r) => r.rawPrice >= 7000 && r.rawPrice <= 10000);
    } else if (selectedRate === '10k-13k') {
      filtered = filtered.filter((r) => r.rawPrice > 10000 && r.rawPrice <= 13000);
    } else if (selectedRate === 'above-13k') {
      filtered = filtered.filter((r) => r.rawPrice > 13000);
    }

    setRooms(filtered.length > 0 ? filtered : hotelRooms);

    // Scroll to rooms section
    const roomsElem = document.getElementById('rooms');
    if (roomsElem) {
      roomsElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReserveRoom = (room: Room) => {
    setContactInitialRoomId(room.id);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const savedRoomsList = hotelRooms.filter((r) => savedRoomIds.includes(r.id));

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfbfa] text-stone-900 font-sans selection:bg-[#84cc16] selection:text-[#14181a]">
      {/* Navbar with MTG Grand Hotel Branding */}
      <Navbar
        savedCount={savedRoomIds.length}
        onOpenSaved={() => setIsSavedModalOpen(true)}
        onContactClick={handleContactClick}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          setRooms(
            cat === 'all'
              ? hotelRooms
              : hotelRooms.filter(
                  (r) => r.tagCategory.toLowerCase() === cat.toLowerCase()
                )
          );
        }}
      />

      {/* Exact Pinterest Image Hotel Hero Section Template */}
      <HeroSection
        selectedRoom={selectedRoomHero}
        selectedRate={selectedRate}
        searchQuery={searchQuery}
        activeTab={activeTab}
        onRoomSelect={(id) => setSelectedRoomHero(id)}
        onRateSelect={(rate) => setSelectedRate(rate)}
        onSearchQueryChange={(query) => setSearchQuery(query)}
        onTabChange={(tab) => {
          setActiveTab(tab);
          if (tab === 'suites') {
            setSelectedCategory('Luxury');
            setRooms(hotelRooms.filter((r) => r.rawPrice >= 10000));
          } else {
            setSelectedCategory('all');
            setRooms(hotelRooms);
          }
        }}
        onSearchSubmit={handleHeroSearchSubmit}
      />

      {/* Compact Amenities Section (Reduced vertical space as requested) */}
      <CompactAmenities />

      {/* Restored 8 Hotel Rooms & Suites Section (Original HTML Rooms) */}
      <RoomsSection
        rooms={rooms}
        savedRoomIds={savedRoomIds}
        onToggleSave={handleToggleSave}
        onSelectRoomModal={(room) => setSelectedRoomModal(room)}
        onReserveRoom={handleReserveRoom}
        selectedCategory={selectedCategory}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          setRooms(
            cat === 'all'
              ? hotelRooms
              : hotelRooms.filter(
                  (r) => r.tagCategory.toLowerCase() === cat.toLowerCase()
                )
          );
        }}
      />

      {/* Hotel Spaces & Amenities Showcase: Rooftop, Gym, Reception, Dining */}
      <FacilitiesSection />

      {/* Philosophy & Story Section ("Fewer rooms, more conviction") */}
      <StorySection />

      {/* Split Section ("Stay With Us - Best rate is always on the phone with us") */}
      <SplitSection />

      {/* Direct Contact & Reservation Desk Form */}
      <ContactSection initialRoomId={contactInitialRoomId} />

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <RoomModal
        room={selectedRoomModal}
        onClose={() => setSelectedRoomModal(null)}
        isSaved={selectedRoomModal ? savedRoomIds.includes(selectedRoomModal.id) : false}
        onToggleSave={handleToggleSave}
        onReserve={handleReserveRoom}
      />

      <SavedModal
        isOpen={isSavedModalOpen}
        onClose={() => setIsSavedModalOpen(false)}
        savedRooms={savedRoomsList}
        onRemoveSaved={handleToggleSave}
        onSelectRoom={(room) => setSelectedRoomModal(room)}
        onReserveRoom={handleReserveRoom}
      />
    </div>
  );
}

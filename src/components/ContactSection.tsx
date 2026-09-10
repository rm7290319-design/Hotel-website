import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  Send,
  CheckCircle2,
  BedDouble,
  Calendar,
  Sparkles,
} from 'lucide-react';
import { hotelRooms } from '../data/rooms';

interface ContactSectionProps {
  initialRoomId?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialRoomId }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedRoom, setSelectedRoom] = useState(initialRoomId || 'room-1');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-8 sm:py-10 bg-white border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-[#70a81b] text-xs font-bold uppercase tracking-widest mb-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Concierge &amp; Bookings</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-gray-900 font-medium tracking-tight mb-2">
                Reach us directly.
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3.5">
                Speak directly with the hotel desk. We can check real-time availability across all 8 rooms, discuss custom arrival arrangements, or lock in direct guest rates.
              </p>

              {/* Contact Details List */}
              <div className="space-y-2.5 mb-3.5">
                {/* Phone */}
                <a
                  href="tel:+917052832649"
                  className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200/80 hover:border-[#70a81b] transition group"
                >
                  <div className="w-9 h-9 rounded-lg bg-lime-50 text-[#70a81b] flex items-center justify-center shrink-0 group-hover:bg-[#70a81b] group-hover:text-white transition">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Direct Front Desk
                    </div>
                    <div className="text-base font-bold text-gray-900 group-hover:text-[#70a81b] transition">
                      +91 70528 32649
                    </div>
                    <div className="text-xs text-stone-500 mt-0.5">
                      Available 24 hours daily
                    </div>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/917052832649?text=Hello%20MTG%20Grand%20Hotel,%20I%20would%20like%20to%20inquire%20about%20booking%20a%20room."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-200/80 hover:border-emerald-500 transition group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      WhatsApp Concierge
                    </div>
                    <div className="text-base font-bold text-gray-900 group-hover:text-emerald-600 transition">
                      Quick Chat on WhatsApp
                    </div>
                    <div className="text-xs text-stone-500 mt-0.5">
                      Fast response for photos &amp; dates
                    </div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-200/80">
                  <div className="w-10 h-10 rounded-xl bg-stone-200/80 text-stone-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Hotel Address
                    </div>
                    <div className="text-sm font-semibold text-gray-900">
                      MTG Grand Hotel &amp; Suites
                    </div>
                    <div className="text-xs text-stone-500 mt-0.5">
                      Meerut, Uttar Pradesh, India
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-200/80">
                  <div className="w-10 h-10 rounded-xl bg-stone-200/80 text-stone-700 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Reservations Email
                    </div>
                    <div className="text-sm font-semibold text-gray-900">
                      reservations@mtggrandhotel.com
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links from original HTML */}
            <div className="pt-4 border-t border-stone-200/80 text-xs text-stone-500">
              <span>Follow MTG Grand:</span>
              <div className="flex items-center gap-4 mt-2 font-medium text-stone-700">
                <a
                  href="https://instagram.com/rajmaurya.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#70a81b] transition"
                >
                  Instagram @rajmaurya.ai
                </a>
                <span>•</span>
                <a href="#story" className="hover:text-[#70a81b] transition">
                  About
                </a>
                <span>•</span>
                <a href="#amenities" className="hover:text-[#70a81b] transition">
                  Amenities
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Reservation Request Form */}
          <div className="lg:col-span-7">
            <div className="bg-stone-50 rounded-2xl p-4 sm:p-6 border border-stone-200/90 shadow-xs relative">
              {isSubmitted ? (
                <div className="py-8 text-center">
                  <div className="w-12 h-12 rounded-full bg-lime-100 text-[#70a81b] flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <h3 className="text-xl font-serif text-gray-900 font-bold mb-1.5">
                    Reservation Request Received!
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm max-w-md mx-auto mb-4">
                    Thank you, {fullName || 'Guest'}. Our front desk has received your request for{' '}
                    <strong>
                      {hotelRooms.find((r) => r.id === selectedRoom)?.title || 'your suite'}
                    </strong>
                    . We will call or message your phone ({phone || '+91 70528 32649'}) promptly to confirm your booking.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setNotes('');
                    }}
                    className="bg-[#14181a] hover:bg-[#70a81b] text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="border-b border-stone-200 pb-2.5 mb-1.5">
                    <h3 className="text-lg sm:text-xl font-serif text-gray-900 font-bold">
                      Direct Room Hold Request
                    </h3>
                    <p className="text-[11px] text-gray-500 mt-0.5">
                      No upfront charges. Our team will verify room availability and confirm with you.
                    </p>
                  </div>

                  {/* Room Selection */}
                  <div>
                    <label
                      htmlFor="form-room"
                      className="block text-[11px] font-bold uppercase tracking-wider text-gray-600 mb-1"
                    >
                      Selected Room / Suite *
                    </label>
                    <div className="relative">
                      <select
                        id="form-room"
                        required
                        value={selectedRoom}
                        onChange={(e) => setSelectedRoom(e.target.value)}
                        className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-gray-900 font-medium focus:outline-none focus:border-[#70a81b]"
                      >
                        {hotelRooms.map((room) => (
                          <option key={room.id} value={room.id}>
                            {room.title} — {room.tag} ({room.price}/night)
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label
                        htmlFor="form-name"
                        className="block text-[11px] font-bold uppercase tracking-wider text-gray-600 mb-1"
                      >
                        Full Name *
                      </label>
                      <input
                        id="form-name"
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#70a81b]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="form-phone"
                        className="block text-[11px] font-bold uppercase tracking-wider text-gray-600 mb-1"
                      >
                        Phone / WhatsApp *
                      </label>
                      <input
                        id="form-phone"
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#70a81b]"
                      />
                    </div>
                  </div>

                  {/* Dates */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label
                        htmlFor="form-checkin"
                        className="block text-[11px] font-bold uppercase tracking-wider text-gray-600 mb-1"
                      >
                        Check-in Date
                      </label>
                      <input
                        id="form-checkin"
                        type="date"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-[#70a81b]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="form-checkout"
                        className="block text-[11px] font-bold uppercase tracking-wider text-gray-600 mb-1"
                      >
                        Check-out Date
                      </label>
                      <input
                        id="form-checkout"
                        type="date"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-[#70a81b]"
                      />
                    </div>
                  </div>

                  {/* Email & Special Notes */}
                  <div>
                    <label
                      htmlFor="form-email"
                      className="block text-[11px] font-bold uppercase tracking-wider text-gray-600 mb-1"
                    >
                      Email Address (Optional)
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#70a81b]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="form-notes"
                      className="block text-[11px] font-bold uppercase tracking-wider text-gray-600 mb-1"
                    >
                      Special Requests or Arrival Time
                    </label>
                    <textarea
                      id="form-notes"
                      rows={2}
                      placeholder="e.g. Late check-in around 10pm, quiet high floor, extra pillows..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#70a81b]"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="submit-reservation-btn"
                    className="w-full bg-[#70a81b] hover:bg-[#5f8f15] text-white font-bold text-xs sm:text-sm py-2.5 sm:py-3 rounded-xl shadow-sm transition flex items-center justify-center gap-2 active:scale-98"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Reservation Request</span>
                  </button>

                  <div className="text-center text-[10px] text-gray-500">
                    We will hold your preferred room and confirm availability within 15 minutes.
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

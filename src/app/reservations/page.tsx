'use client';

export const dynamic = 'force-dynamic';

import Navigation from '@/components/restaurant/Navigation';
import Footer from '@/components/restaurant/Footer';
import { Calendar, Clock, Users, Phone, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function ReservationsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    specialRequests: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the reservation data to your backend
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const timeSlots = [
    '17:00', '17:30', '18:00', '18:30', '19:00', '19:30',
    '20:00', '20:30', '21:00', '21:30', '22:00',
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#1A1A1A] to-[#2A2A2A]">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <p className="text-[#D4A574] uppercase tracking-wider text-sm font-semibold mb-4">
            Book Your Experience
          </p>
          <h1 className="text-white mb-6">Reservations</h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Secure your table at Harvest & Hearth. We look forward to serving you an unforgettable culinary experience.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#2A2A2A]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Reservation Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg p-8 shadow-card">
                <h2 className="text-[#1A1A1A] mb-6">Make a Reservation</h2>

                {isSubmitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 font-semibold">
                      ✓ Reservation request submitted successfully!
                    </p>
                    <p className="text-green-700 text-sm mt-1">
                      We'll contact you shortly to confirm your reservation.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D4A574] focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D4A574] focus:border-transparent outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D4A574] focus:border-transparent outline-none transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  {/* Date, Time, and Guests */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="date" className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                        <Calendar className="inline w-4 h-4 mr-1" />
                        Date *
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D4A574] focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="time" className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                        <Clock className="inline w-4 h-4 mr-1" />
                        Time *
                      </label>
                      <select
                        id="time"
                        name="time"
                        required
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D4A574] focus:border-transparent outline-none transition-all"
                      >
                        <option value="">Select time</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="guests" className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                        <Users className="inline w-4 h-4 mr-1" />
                        Guests *
                      </label>
                      <select
                        id="guests"
                        name="guests"
                        required
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D4A574] focus:border-transparent outline-none transition-all"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? 'Guest' : 'Guests'}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Occasion */}
                  <div>
                    <label htmlFor="occasion" className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                      Special Occasion (Optional)
                    </label>
                    <select
                      id="occasion"
                      name="occasion"
                      value={formData.occasion}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D4A574] focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Select occasion</option>
                      <option value="birthday">Birthday</option>
                      <option value="anniversary">Anniversary</option>
                      <option value="business">Business Dinner</option>
                      <option value="date">Date Night</option>
                      <option value="celebration">Celebration</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label htmlFor="specialRequests" className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                      Special Requests or Dietary Restrictions
                    </label>
                    <textarea
                      id="specialRequests"
                      name="specialRequests"
                      rows={4}
                      value={formData.specialRequests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D4A574] focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Any allergies, dietary restrictions, or special requests..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#D4A574] text-white py-4 rounded-md text-sm font-semibold tracking-wider uppercase hover:bg-[#C89563] transition-all duration-200 hover:scale-[1.02] shadow-lg"
                  >
                    Confirm Reservation
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    * Required fields. We'll send you a confirmation email shortly.
                  </p>
                </form>
              </div>
            </div>

            {/* Contact Information Sidebar */}
            <div className="space-y-6">
              {/* Contact Card */}
              <div className="bg-white rounded-lg p-6 shadow-card">
                <h3 className="text-[#1A1A1A] mb-6 text-xl">Contact Us</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-[#D4A574] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-[#1A1A1A]">Address</p>
                      <p className="text-gray-600 text-sm">425 Oak Street Downtown</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-[#D4A574] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-[#1A1A1A]">Phone</p>
                      <a href="tel:555-HARVEST" className="text-gray-600 text-sm hover:text-[#D4A574] transition-colors">
                        555-HARVEST
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-[#D4A574] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-[#1A1A1A]">Email</p>
                      <a href="mailto:reservations@harvestandhearth.com" className="text-gray-600 text-sm hover:text-[#D4A574] transition-colors break-all">
                        reservations@harvestandhearth.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="bg-white rounded-lg p-6 shadow-card">
                <h3 className="text-[#1A1A1A] mb-6 text-xl">Hours of Operation</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-[#1A1A1A]">Monday - Thursday</span>
                    <span className="text-gray-600">5:00 PM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-[#1A1A1A]">Friday - Saturday</span>
                    <span className="text-gray-600">5:00 PM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-[#1A1A1A]">Sunday</span>
                    <span className="text-gray-600">4:00 PM - 9:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Info Card */}
              <div className="bg-[#F5F1E8] rounded-lg p-6">
                <h4 className="text-[#1A1A1A] font-semibold mb-3">Reservation Policy</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#D4A574] mr-2">•</span>
                    <span>Reservations are held for 15 minutes past the booking time</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D4A574] mr-2">•</span>
                    <span>For parties larger than 12, please call us directly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D4A574] mr-2">•</span>
                    <span>Cancellations accepted up to 24 hours in advance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D4A574] mr-2">•</span>
                    <span>Smart casual dress code appreciated</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

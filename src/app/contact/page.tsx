export const dynamic = 'force-dynamic';

import Navigation from '@/components/restaurant/Navigation';
import Footer from '@/components/restaurant/Footer';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#1A1A1A] to-[#2A2A2A]">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <p className="text-[#D4A574] uppercase tracking-wider text-sm font-semibold mb-4">
            Get in Touch
          </p>
          <h1 className="text-white mb-6">Contact Us</h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            We'd love to hear from you. Reach out with questions, feedback, or to plan your next special event.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#2A2A2A]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Location */}
            <div className="bg-white rounded-lg p-6 shadow-card hover:shadow-card-hover transition-all">
              <div className="w-12 h-12 bg-[#D4A574] rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-[#1A1A1A] font-semibold mb-2">Location</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                425 Oak Street Downtown<br />
                City, State 12345
              </p>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-lg p-6 shadow-card hover:shadow-card-hover transition-all">
              <div className="w-12 h-12 bg-[#D4A574] rounded-full flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-[#1A1A1A] font-semibold mb-2">Phone</h3>
              <a href="tel:555-HARVEST" className="text-gray-600 text-sm hover:text-[#D4A574] transition-colors">
                555-HARVEST<br />
                (555-427-8378)
              </a>
            </div>

            {/* Email */}
            <div className="bg-white rounded-lg p-6 shadow-card hover:shadow-card-hover transition-all">
              <div className="w-12 h-12 bg-[#D4A574] rounded-full flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-[#1A1A1A] font-semibold mb-2">Email</h3>
              <a href="mailto:reservations@harvestandhearth.com" className="text-gray-600 text-sm hover:text-[#D4A574] transition-colors break-all">
                reservations@<br />harvestandhearth.com
              </a>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-lg p-6 shadow-card hover:shadow-card-hover transition-all">
              <div className="w-12 h-12 bg-[#D4A574] rounded-full flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-[#1A1A1A] font-semibold mb-2">Hours</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Mon-Thu: 5-10 PM<br />
                Fri-Sat: 5-11 PM<br />
                Sun: 4-9 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

'use client';

import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-16">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="restaurant-logo text-2xl">AURUM</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Experience culinary excellence with refined flavors and elegant ambiance.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-[#D4A574] font-semibold tracking-wide uppercase text-sm">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#D4A574] transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-gray-400 hover:text-[#D4A574] transition-colors text-sm">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/reservations" className="text-gray-400 hover:text-[#D4A574] transition-colors text-sm">
                  Reservations
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#D4A574] transition-colors text-sm">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="text-[#D4A574] font-semibold tracking-wide uppercase text-sm">
              Hours
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex justify-between">
                <span>Mon - Thu:</span>
                <span>5:00 PM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Fri - Sat:</span>
                <span>5:00 PM - 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>4:00 PM - 9:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-[#D4A574] font-semibold tracking-wide uppercase text-sm">
              Contact
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>425 Oak Street Downtown</li>
              <li>
                <a href="tel:555-HARVEST" className="hover:text-[#D4A574] transition-colors">
                  555-HARVEST
                </a>
              </li>
              <li>
                <a href="mailto:reservations@harvestandhearth.com" className="hover:text-[#D4A574] transition-colors">
                  reservations@harvestandhearth.com
                </a>
              </li>
            </ul>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-gray-400 hover:text-[#D4A574] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4A574] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4A574] transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#3A3A3A] pt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2024 Harvest & Hearth. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

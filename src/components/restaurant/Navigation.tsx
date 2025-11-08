'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'MENU', href: '/menu' },
    { name: 'RESERVATIONS', href: '/reservations' },
    { name: 'ABOUT US', href: '/about' },
    { name: 'CONTACT', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2A2A2A] border-b border-[#3A3A3A]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="restaurant-logo text-white hover:text-[#D4A574] transition-colors">
            AURUM
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white text-sm font-medium tracking-wide hover:text-[#D4A574] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/reservations"
              className="inline-block bg-[#D4A574] text-white px-8 py-3 rounded-md text-sm font-semibold tracking-wider uppercase hover:bg-[#C89563] transition-all duration-200 hover:scale-105"
            >
              BOOK TABLE
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1A1A1A] border-t border-[#3A3A3A]">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-white text-sm font-medium tracking-wide hover:text-[#D4A574] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/reservations"
              className="block w-full text-center bg-[#D4A574] text-white px-8 py-3 rounded-md text-sm font-semibold tracking-wider uppercase hover:bg-[#C89563] transition-colors mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              BOOK TABLE
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

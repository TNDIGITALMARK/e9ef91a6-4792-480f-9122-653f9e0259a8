export const dynamic = 'force-dynamic';

import Navigation from '@/components/restaurant/Navigation';
import Footer from '@/components/restaurant/Footer';
import MenuCard from '@/components/restaurant/MenuCard';
import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';

export default function HomePage() {
  const menuHighlights = [
    {
      title: 'Roasted Duck Breast',
      description: 'Perfectly cooked duck with crispy skin, garnished with microgreens and berry reduction',
      price: '34',
      image: '/generated/duck-breast.png',
      category: 'Chef\'s Choice',
    },
    {
      title: 'Truffle Pasta',
      description: 'Fresh pasta with golden truffle cream sauce and parmesan, elegant presentation',
      price: '28',
      image: '/generated/truffle-pasta.png',
      category: 'Signature',
    },
    {
      title: 'Chocolate Lava Cake',
      description: 'Warm chocolate cake with molten center, vanilla ice cream, and fresh berries',
      price: '12',
      image: '/generated/chocolate-dessert.png',
      category: 'Dessert',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'An absolutely exceptional dining experience. The attention to detail and flavor profiles are outstanding.',
    },
    {
      name: 'Michael Chen',
      rating: 5,
      text: 'Best restaurant in the city! Every dish is a masterpiece. The ambiance is perfect for special occasions.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/generated/hero-dish.png"
            alt="Fine dining experience"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-white mb-6 drop-shadow-lg">
            Experience Culinary Excellence
          </h1>
          <p className="text-white/90 text-xl md:text-2xl mb-8 font-light leading-relaxed">
            Refined Flavors, Unforgettable Moments
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/reservations"
              className="bg-[#D4A574] text-white px-10 py-4 rounded-md text-sm font-semibold tracking-wider uppercase hover:bg-[#C89563] transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Reserve Your Table
            </Link>
            <Link
              href="/menu"
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-10 py-4 rounded-md text-sm font-semibold tracking-wider uppercase hover:bg-white/20 transition-all duration-200"
            >
              View Menu
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Menu Highlights Section */}
      <section className="py-20 bg-[#2A2A2A]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#D4A574] uppercase tracking-wider text-sm font-semibold mb-3">
              Our Specialties
            </p>
            <h2 className="text-white mb-4">Menu Highlights</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover our chef's signature creations, crafted with the finest ingredients and unparalleled expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {menuHighlights.map((item) => (
              <MenuCard key={item.title} {...item} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/menu"
              className="inline-block bg-[#D4A574] text-white px-10 py-4 rounded-md text-sm font-semibold tracking-wider uppercase hover:bg-[#C89563] transition-all duration-200 hover:scale-105"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#D4A574] uppercase tracking-wider text-sm font-semibold mb-3">
              What Our Guests Say
            </p>
            <h2 className="text-white mb-4">Customer Testimonials</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#2A2A2A] p-8 rounded-lg border border-[#3A3A3A] hover:border-[#D4A574] transition-colors"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-[#D4A574] text-[#D4A574]" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-[#D4A574] flex items-center justify-center text-white font-semibold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">Verified Guest</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/reservations"
              className="inline-block bg-[#D4A574] text-white px-10 py-4 rounded-md text-sm font-semibold tracking-wider uppercase hover:bg-[#C89563] transition-all duration-200 hover:scale-105"
            >
              Experience It Yourself
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-[#2A2A2A] border-t border-[#3A3A3A]">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="text-white mb-6">Reserve Your Experience</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Join us for an unforgettable culinary journey. Book your table today and discover why we're the city's premier dining destination.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/reservations"
              className="bg-[#D4A574] text-white px-10 py-4 rounded-md text-sm font-semibold tracking-wider uppercase hover:bg-[#C89563] transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Make a Reservation
            </Link>
            <a
              href="tel:555-HARVEST"
              className="text-white border-2 border-white/30 px-10 py-4 rounded-md text-sm font-semibold tracking-wider uppercase hover:border-[#D4A574] hover:text-[#D4A574] transition-all duration-200"
            >
              Call: 555-HARVEST
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

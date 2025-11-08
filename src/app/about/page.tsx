export const dynamic = 'force-dynamic';

import Navigation from '@/components/restaurant/Navigation';
import Footer from '@/components/restaurant/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Award, Heart, Users, Sparkles } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Passion',
      description: 'Every dish is crafted with love and dedication to culinary excellence',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Quality',
      description: 'We source only the finest ingredients for an unparalleled dining experience',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Community',
      description: 'Building lasting relationships with our guests and local partners',
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Innovation',
      description: 'Blending traditional techniques with modern culinary artistry',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#1A1A1A] to-[#2A2A2A]">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <p className="text-[#D4A574] uppercase tracking-wider text-sm font-semibold mb-4">
            Our Story
          </p>
          <h1 className="text-white mb-6">About Harvest & Hearth</h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            A culinary journey celebrating refined flavors, exceptional service, and unforgettable moments.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-[#2A2A2A]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-card">
              <Image
                src="/generated/hero-dish.png"
                alt="Fine dining at Harvest & Hearth"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-white mb-6">Our Culinary Philosophy</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  At Harvest & Hearth, we believe that dining is more than just a meal—it's an experience that engages all the senses.
                  Our chef-driven menu showcases the finest seasonal ingredients, transformed into culinary masterpieces through
                  innovative techniques and artistic presentation.
                </p>
                <p>
                  Founded with a passion for excellence and a commitment to sustainability, we've built relationships with local
                  farmers and artisans who share our dedication to quality. Every dish tells a story, blending traditional flavors
                  with contemporary creativity.
                </p>
                <p>
                  Our intimate dining room provides the perfect setting for celebrations, romantic evenings, or simply savoring
                  exceptional food with friends and family. We invite you to discover why Harvest & Hearth has become a beloved
                  destination for discerning diners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#D4A574] uppercase tracking-wider text-sm font-semibold mb-3">
              What Drives Us
            </p>
            <h2 className="text-white mb-4">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-[#2A2A2A] p-6 rounded-lg border border-[#3A3A3A] hover:border-[#D4A574] transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-[#D4A574] rounded-full flex items-center justify-center mb-4 text-white">
                  {value.icon}
                </div>
                <h3 className="text-white text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2A2A2A]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-white mb-6">Experience the Difference</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            We invite you to join us and discover why Harvest & Hearth is more than a restaurant—it's a destination for those who appreciate the art of fine dining.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/reservations"
              className="bg-[#D4A574] text-white px-10 py-4 rounded-md text-sm font-semibold tracking-wider uppercase hover:bg-[#C89563] transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Make a Reservation
            </Link>
            <Link
              href="/menu"
              className="text-white border-2 border-white/30 px-10 py-4 rounded-md text-sm font-semibold tracking-wider uppercase hover:border-[#D4A574] hover:text-[#D4A574] transition-all duration-200"
            >
              View Our Menu
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

'use client';

export const dynamic = 'force-dynamic';

import Navigation from '@/components/restaurant/Navigation';
import Footer from '@/components/restaurant/Footer';
import MenuCard from '@/components/restaurant/MenuCard';
import { useState } from 'react';

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Appetizers', 'Main Course', 'Desserts', 'Beverages'];

  const menuItems = [
    {
      title: 'Pan-Seared Salmon',
      description: 'Fresh Atlantic salmon with herb risotto and seasonal vegetables',
      price: '28',
      image: '/generated/salmon-dish.png',
      category: 'Main Course',
      isVegetarian: false,
    },
    {
      title: 'Wagyu Beef Tenderloin',
      description: 'Premium wagyu beef with truffle mashed potatoes and microgreens',
      price: '45',
      image: '/generated/wagyu-beef.png',
      category: 'Main Course',
      isSpicy: false,
    },
    {
      title: 'Wild Mushroom Ravioli',
      description: 'Handmade ravioli in brown butter sage sauce with parmesan',
      price: '24',
      image: '/generated/mushroom-ravioli.png',
      category: 'Main Course',
      isVegetarian: true,
    },
    {
      title: 'Roasted Duck Breast',
      description: 'Perfectly cooked duck with crispy skin, garnished with microgreens',
      price: '34',
      image: '/generated/duck-breast.png',
      category: 'Main Course',
    },
    {
      title: 'Truffle Pasta',
      description: 'Fresh pasta with golden truffle cream sauce and grated parmesan',
      price: '28',
      image: '/generated/truffle-pasta.png',
      category: 'Main Course',
      isVegetarian: true,
    },
    {
      title: 'Chocolate Lava Cake',
      description: 'Warm chocolate cake with molten center, vanilla ice cream, berries',
      price: '12',
      image: '/generated/chocolate-dessert.png',
      category: 'Desserts',
      isVegetarian: true,
    },
  ];

  const filteredItems = selectedCategory === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#1A1A1A] to-[#2A2A2A]">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <p className="text-[#D4A574] uppercase tracking-wider text-sm font-semibold mb-4">
            Our Complete Selection
          </p>
          <h1 className="text-white mb-6">Our Menu</h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Explore our carefully curated menu featuring seasonal ingredients and innovative culinary techniques.
            Each dish is crafted with passion and precision to deliver an unforgettable dining experience.
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="bg-[#2A2A2A] border-b border-[#3A3A3A] sticky top-20 z-40">
        <div className="max-w-[1400px] mx-auto px-6 py-6">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-semibold tracking-wide uppercase transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-[#D4A574] text-white shadow-lg'
                    : 'bg-[#3A3A3A] text-gray-300 hover:bg-[#4A4A4A] hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-20 bg-[#2A2A2A] min-h-[60vh]">
        <div className="max-w-[1400px] mx-auto px-6">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <MenuCard key={item.title} {...item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">No items found in this category.</p>
              <button
                onClick={() => setSelectedCategory('All')}
                className="mt-6 text-[#D4A574] hover:text-[#C89563] font-semibold transition-colors"
              >
                View All Items
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="text-white mb-6">Ready to Experience These Flavors?</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Reserve your table now and indulge in our exquisite culinary offerings.
            Our chefs are ready to create an unforgettable dining experience for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/reservations"
              className="bg-[#D4A574] text-white px-10 py-4 rounded-md text-sm font-semibold tracking-wider uppercase hover:bg-[#C89563] transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Make a Reservation
            </a>
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

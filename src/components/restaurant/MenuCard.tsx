'use client';

import Image from 'next/image';
import { Leaf, Flame } from 'lucide-react';

interface MenuCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  isVegetarian?: boolean;
  isSpicy?: boolean;
  category?: string;
}

export default function MenuCard({
  title,
  description,
  price,
  image,
  isVegetarian = false,
  isSpicy = false,
  category,
}: MenuCardProps) {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {category && (
          <div className="absolute top-4 right-4 bg-[#D4A574] text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
            {category}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-playfair text-xl font-semibold text-[#1A1A1A] group-hover:text-[#D4A574] transition-colors">
            {title}
          </h3>
          <div className="flex items-center space-x-2">
            {isVegetarian && (
              <span className="text-green-600" title="Vegetarian">
                <Leaf size={18} />
              </span>
            )}
            {isSpicy && (
              <span className="text-red-600" title="Spicy">
                <Flame size={18} />
              </span>
            )}
          </div>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>

        <div className="flex items-center justify-between">
          <span className="text-[#D4A574] text-2xl font-semibold">${price}</span>
          <button className="bg-[#D4A574] text-white px-6 py-2 rounded-md text-xs font-semibold uppercase tracking-wider hover:bg-[#C89563] transition-colors">
            Add to Order
          </button>
        </div>
      </div>
    </div>
  );
}

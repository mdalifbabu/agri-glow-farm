"use client";

import { ShoppingBag, Sun, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'হোম', href: '/' },
    { name: 'পণ্য', href: '/products' },
    { name: 'আমাদের সম্পর্কে', href: '/about' },
    { name: 'যোগাযোগ', href: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Sun className="h-8 w-8 text-amber-500" />
            <span className="ml-2 text-xl font-bold text-amber-800">
              AgriGlowFarm
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-amber-600 font-medium"
              >
                {item.name}
              </Link>
            ))}
            <button className="flex items-center text-white bg-amber-600 hover:bg-amber-700 px-4 py-2 rounded-md">
              <ShoppingBag className="h-5 w-5 mr-2" />
              কার্ট
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-amber-600"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white pb-3 px-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block py-2 text-gray-700 hover:text-amber-600 font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <button className="flex items-center justify-center w-full mt-2 text-white bg-amber-600 hover:bg-amber-700 px-4 py-2 rounded-md">
            <ShoppingBag className="h-5 w-5 mr-2" />
            কার্ট
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
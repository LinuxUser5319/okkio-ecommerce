import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Search, User, Heart } from 'lucide-react';
import AnimatedLogo from '../Logo/AnimatedLogo';
import './Header.css';

const Header = ({ cartItems = 0 }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex justify-between items-center py-2 text-sm text-gray-600 border-b">
          <div>Free shipping on orders above ₹999</div>
          <div className="flex space-x-4">
            <span>Track Order</span>
            <span>Contact Us</span>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <AnimatedLogo />
            <span className="text-2xl font-bold text-black">kkio.in</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-black transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-black transition-colors">Men</a>
            <a href="#" className="text-gray-700 hover:text-black transition-colors">Women</a>
            <a href="#" className="text-gray-700 hover:text-black transition-colors">Kids</a>
            <a href="#" className="text-gray-700 hover:text-black transition-colors">Accessories</a>
            <a href="#" className="text-gray-700 hover:text-black transition-colors">Sale</a>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
            <User className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
            <Heart className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
            <div className="relative">
              <ShoppingCart className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
              {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </div>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col space-y-4 p-4">
            <a href="#" className="text-gray-700 hover:text-black">Home</a>
            <a href="#" className="text-gray-700 hover:text-black">Men</a>
            <a href="#" className="text-gray-700 hover:text-black">Women</a>
            <a href="#" className="text-gray-700 hover:text-black">Kids</a>
            <a href="#" className="text-gray-700 hover:text-black">Accessories</a>
            <a href="#" className="text-gray-700 hover:text-black">Sale</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
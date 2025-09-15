import React, { useState } from 'react';
import { Search, Menu, X, ShoppingCart, Heart, User, ChevronDown } from 'lucide-react';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">👑</span>
              </div>
              <span className="text-white text-xl font-bold">DigitalEstates</span>
            </div>

            {/* Desktop Search Bar */}
            <div className="hidden md:flex flex-1 max-w-lg mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search domains..."
                  className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Desktop Right Side */}
            <div className="hidden md:flex items-center space-x-6">
              {/* Language Selector */}
              <div className="flex items-center space-x-1">
                <div className="w-6 h-4 bg-red-500 rounded-sm"></div>
                <span className="text-white text-sm">EN</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </div>

              {/* User Actions */}
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-1 text-slate-300 hover:text-white transition-colors">
                  <User className="w-5 h-5" />
                  <span className="text-sm">Login/Signup</span>
                </button>
                <button className="text-slate-300 hover:text-white transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="relative text-slate-300 hover:text-white transition-colors">
                  <ShoppingCart className="w-5 h-5" />
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-white hover:text-yellow-400 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Search Bar */}
          <div className="md:hidden pb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search domains..."
                className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-4 py-2 space-y-2">
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center space-x-1">
                  <div className="w-6 h-4 bg-red-500 rounded-sm"></div>
                  <span className="text-white text-sm">EN</span>
                </div>
                <div className="flex items-center space-x-4">
                  <button className="text-slate-300 hover:text-white">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="relative text-slate-300 hover:text-white">
                    <ShoppingCart className="w-5 h-5" />
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
                  </button>
                </div>
              </div>
              <button className="w-full text-left py-2 px-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded">
                Login/Signup
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Navigation */}
      <nav className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Main Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="relative">
                <button 
                  onClick={() => toggleDropdown('buy')}
                  className="flex items-center space-x-1 text-slate-300 hover:text-white transition-colors py-2"
                >
                  <span>Buy Domains</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === 'buy' && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-slate-800 border border-slate-600 rounded-lg shadow-lg z-10">
                    <div className="py-2">
                      <a href="#" className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-700">Browse Domains</a>
                      <a href="#" className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-700">Premium Domains</a>
                      <a href="#" className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-700">New Releases</a>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="relative">
                <button 
                  onClick={() => toggleDropdown('sell')}
                  className="flex items-center space-x-1 text-slate-300 hover:text-white transition-colors py-2"
                >
                  <span>Sell Domains</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === 'sell' && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-slate-800 border border-slate-600 rounded-lg shadow-lg z-10">
                    <div className="py-2">
                      <a href="#" className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-700">List Your Domain</a>
                      <a href="#" className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-700">Seller Dashboard</a>
                      <a href="#" className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-700">Pricing Guide</a>
                    </div>
                  </div>
                )}
              </div>

              <a href="#" className="text-slate-300 hover:text-white transition-colors py-2">
                Park Domains
              </a>
            </div>

            {/* Right Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-slate-300 hover:text-white transition-colors">Newsletter</a>
              
              <div className="relative">
                <button 
                  onClick={() => toggleDropdown('contact')}
                  className="flex items-center space-x-1 text-slate-300 hover:text-white transition-colors py-2"
                >
                  <span>Contact us</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === 'contact' && (
                  <div className="absolute top-full right-0 mt-1 w-48 bg-slate-800 border border-slate-600 rounded-lg shadow-lg z-10">
                    <div className="py-2">
                      <a href="#" className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-700">Support</a>
                      <a href="#" className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-700">Sales Inquiry</a>
                      <a href="#" className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-700">Partnership</a>
                    </div>
                  </div>
                )}
              </div>

              <a href="#" className="text-slate-300 hover:text-white transition-colors">About us</a>
            </div>

            {/* Mobile Navigation Toggle */}
            <div className="md:hidden">
              <button className="text-slate-300 hover:text-white">
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16 sm:py-24 lg:py-32">
            <div className="space-y-8">
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold">
                  <span className="block text-white">Premium</span>
                  <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 bg-clip-text text-transparent">
                    Domains
                  </span>
                </h1>
              </div>

              {/* Subtitle */}
              <div className="max-w-4xl mx-auto">
                <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 leading-relaxed">
                  Discover premium domain names that define the future of digital real 
                  estate. Your perfect digital address awaits.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold rounded-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Browse Premium Domains
                </button>
                <button className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-slate-600 text-white font-semibold rounded-lg hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300">
                  Learn More
                </button>
              </div>

              {/* Stats or Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2">10K+</div>
                  <div className="text-slate-400">Premium Domains</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2">50+</div>
                  <div className="text-slate-400">TLD Extensions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2">24/7</div>
                  <div className="text-slate-400">Expert Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-slate-900 border-t border-slate-700 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">👑</span>
                </div>
                <span className="text-white font-bold">DigitalEstates</span>
              </div>
              <p className="text-slate-400 text-sm">
                Your trusted partner for premium domain investments and digital real estate solutions.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Domain Search</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Domain Valuation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Domain Parking</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Transfer Services</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-slate-400 text-sm">
              © 2025 DigitalEstates. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
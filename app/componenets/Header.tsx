"use client"
import { Search, Menu, X, ShoppingCart, Heart, User, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import logo from "@/public/logo.svg"

import React, { useState } from 'react'

const Header = () => {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const [activeDropdown, setActiveDropdown] = useState(null);
    
      const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
      
      const toggleDropdown = (dropdown) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
      };
    
  return (
    <div>
              <header className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
                <div className="w-10 h-10 p-2 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center">
                  <Image src={logo} alt='logo image' height={30} width={30} />
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

    </div>
  )
}

export default Header
"use client"
import { Search, Menu, X, ShoppingCart, Heart, User, ChevronDown, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import logo from "@/public/logo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeDropdown = () => setActiveDropdown(null);

  // Enhanced navigation data with descriptions
  const dropdownMenus = {
    buy: [
      { 
        label: 'Premium domains marketplace', 
        href: '/premiummarketplace',
        description: 'Explore 500,000+ expert-curated, brandable domains to elevate your business.',
        icon: <ArrowRight className="w-4 h-4" />
      },
      { 
        label: 'Domain bundle', 
        href: '/domainbundles',
        description: 'Purchase related domains together at sale prices.',
        icon: <ArrowRight className="w-4 h-4" />
      },
    ],
    sell: [
      { 
        label: 'Contact us', 
        href: '/sellwithus',
        description: 'Submit your premium domains for review by your acquisitions team.',
        icon: <ArrowRight className="w-4 h-4" />
      },
    ],
    contact: [
      { 
        label: 'Support Center', 
        href: '/contact/support',
        description: 'Get help and answers to your questions.',
        icon: <ArrowRight className="w-4 h-4" />
      },
    ]
  };

  const mainNavItems = [
    { label: 'Park Domains', href: '/domainparking' },
  ];

  const rightNavItems = [
    { label: 'Newsletter', href: '/newsletter' },
  ];

  // Components
  const Logo = () => (
    <Link href="/" className="flex items-center space-x-3">
      <div className="w-10 h-10 p-2 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center">
        <Image src={logo} alt="DigitalEstates logo" height={30} width={30} />
      </div>
      <span className="text-white text-xl font-bold">DigitalEstates</span>
    </Link>
  );

  const SearchBar = ({ className = "" }) => (
    <div className={`relative ${className}`}>
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
      <input
        type="text"
        placeholder="Search domains..."
        className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
      />
    </div>
  );

  const LanguageSelector = () => (
    <div className="flex items-center space-x-1 cursor-pointer">
      <div className="w-6 h-4 bg-red-500 rounded-sm"></div>
      <span className="text-white text-sm">EN</span>
      <ChevronDown className="w-4 h-4 text-slate-400" />
    </div>
  );

  const UserActions = () => (
    <div className="flex items-center space-x-4">
      <Link 
        href="/auth/login" 
        className="flex items-center space-x-1 text-slate-300 hover:text-white transition-colors"
      >
        <User className="w-5 h-5" />
        <span className="text-sm">Login/Signup</span>
      </Link>
      
      <Link href="/wishlist" className="text-slate-300 hover:text-white transition-colors">
        <Heart className="w-5 h-5" />
      </Link>
      
      <Link href="/cart" className="relative text-slate-300 hover:text-white transition-colors">
        <ShoppingCart className="w-5 h-5" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          2
        </span>
      </Link>
    </div>
  );

  const EnhancedDropdownMenu = ({ items, isOpen, position = "left" }) => {
    if (!isOpen) return null;
    
    const positionClass = position === "right" ? "right-10" : "-left-4";
    
    return (
      <div className={`absolute top-full ${positionClass} z-50 min-w-[8rem] overflow-hidden text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 w-80 bg-white border border-slate-200 rounded-lg shadow-lg p-0`}>
        <div className="py-3">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={closeDropdown}
              className="group block px-2 py-1 hover:bg-gray-50 transition-all duration-200 border-b border-gray-100 last:border-b-0"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center  mb-2">
                    <h3 className="text-lg font-semibold text-gray-900  transition-colors">
                      {item.label}
                    </h3>
                    <div className="text-black mx-2">
                      {item.icon}
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  };

  const NavDropdown = ({ label, dropdownKey, items, position = "left" }) => (
    <div className="relative">
      <button 
        onClick={() => toggleDropdown(dropdownKey)}
        className="flex items-center space-x-1 text-slate-300 hover:text-white transition-colors py-2"
      >
        <span className="text-sm font-semibold">{label}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
          activeDropdown === dropdownKey ? 'rotate-180' : ''
        }`} />
      </button>
      <EnhancedDropdownMenu 
        items={items} 
        isOpen={activeDropdown === dropdownKey} 
        position={position}
      />
    </div>
  );

  const MobileMenu = () => (
    <div className="md:hidden bg-slate-800 border-t border-slate-700">
      <div className="px-4 py-2 space-y-2">
        <div className="flex items-center justify-between py-2">
          <LanguageSelector />
          <div className="flex items-center space-x-4">
            <Link href="/wishlist" className="text-slate-300 hover:text-white">
              <Heart className="w-5 h-5" />
            </Link>
            <Link href="/cart" className="relative text-slate-300 hover:text-white">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </Link>
          </div>
        </div>
        
        <Link 
          href="/auth/login"
          className="block w-full text-left py-2 px-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          Login/Signup
        </Link>
        
        {/* Mobile navigation items */}
        <div className="space-y-1 pt-2 border-t border-slate-700">
          {Object.entries(dropdownMenus).map(([key, items]) => (
            <div key={key} className="space-y-1">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2 py-1">
                {key === 'buy' ? 'Buy Domains' : key === 'sell' ? 'Sell Domains' : 'Contact'}
              </div>
              {items.map((item, index) => (
                <div key={index} className="bg-slate-700/50 rounded-lg mx-2 mb-2">
                  <Link
                    href={item.href}
                    className="block p-3 text-slate-300 hover:text-white transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="font-medium mb-1">{item.label}</div>
                    <div className="text-xs text-slate-400">{item.description}</div>
                  </Link>
                </div>
              ))}
            </div>
          ))}
          
          {mainNavItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block py-2 px-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          
          {rightNavItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block py-2 px-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );

  // Close dropdown when clicking outside
  const handleOverlayClick = () => {
    if (activeDropdown) {
      closeDropdown();
    }
  };

  return (
    <div>
      {/* Overlay for closing dropdowns */}
      {activeDropdown && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={handleOverlayClick}
        />
      )}

      {/* Header */}
      <header className="bg-[#0F172A] backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Logo />

            {/* Desktop Search Bar */}
            <SearchBar className="hidden md:flex flex-1 max-w-lg mx-8" />

            {/* Desktop Right Side */}
            <div className="hidden md:flex items-center space-x-6">
              <LanguageSelector />
              <UserActions />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-white hover:text-yellow-400 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Search Bar */}
          <div className="md:hidden pb-4">
            <SearchBar />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && <MobileMenu />}
      </header>

      {/* Navigation */}
      <nav className="bg-[#1E293B] backdrop-blur-sm py-2 border-b border-slate-700/50 relative z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Main Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <NavDropdown 
                label="Buy Domains" 
                dropdownKey="buy" 
                items={dropdownMenus.buy} 
              />
              <NavDropdown 
                label="Sell Domains" 
                dropdownKey="sell" 
                items={dropdownMenus.sell} 
              />
              
              {mainNavItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-slate-300 hover:text-white transition-colors text-sm font-semibold py-2"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Right Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {rightNavItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-slate-300 text-sm font-semibold hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              
              <NavDropdown 
                label="Contact us" 
                dropdownKey="contact" 
                items={dropdownMenus.contact} 
                position="right"
                

          
              />
                {/* ADD THE ABOUT US LINK HERE */}
  <Link
    href="/about"
    className="text-slate-300 text-sm font-semibold hover:text-white transition-colors"
  >
    About us
  </Link>
            </div>

            {/* Mobile Navigation Toggle */}
            <div className="md:hidden">
              <button 
                className="text-slate-300 hover:text-white"
                aria-label="Mobile navigation menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
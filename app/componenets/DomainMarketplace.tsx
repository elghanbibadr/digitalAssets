import React, { useState, useMemo } from 'react';
import { Search, Eye, Grid, List, Filter, ChevronDown, ChevronUp } from 'lucide-react';

const DomainMarketplace = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('newest');
  
  // Filter states
  const [onSale, setOnSale] = useState(true);
  const [selectedListingTypes, setSelectedListingTypes] = useState(['all']);
  const [selectedCharacterTypes, setSelectedCharacterTypes] = useState(['any']);
  const [selectedCategories, setSelectedCategories] = useState(['all']);
  const [selectedExtensions, setSelectedExtensions] = useState(['all']);
  const [includeMisspelled, setIncludeMisspelled] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [domainLength, setDomainLength] = useState([1, 50]);
  const [mustInclude, setMustInclude] = useState('');
  const [mustNotInclude, setMustNotInclude] = useState('');
  
  // Dropdown states
  const [expandedSections, setExpandedSections] = useState({
    listingType: true,
    characterType: true,
    misspelledWords: true,
    keywords: true,
    extension: true,
    onSale: true,
    category: true,
    priceRange: true,
    domainLength: true
  });

  // Hardcoded domain data with more comprehensive data for filtering
  const allDomains = [
    {
      name: 'carseatbelts.com',
      category: 'auto-automotive',
      logo: '🚗',
      bgColor: 'bg-blue-100',
      price: 2500,
      length: 14,
      extension: '.com',
      listingType: 'buy-now',
      onSale: true,
      keywords: ['car', 'seat', 'belts', 'safety', 'auto']
    },
    {
      name: 'AutoMechanic.pro',
      category: 'auto-automotive',
      logo: '🔧',
      bgColor: 'bg-slate-700',
      price: 5000,
      length: 12,
      extension: '.pro',
      listingType: 'make-offer',
      onSale: true,
      keywords: ['auto', 'mechanic', 'repair', 'service']
    },
    {
      name: 'LegalEagle.ai',
      category: 'general-business',
      logo: '🦅',
      bgColor: 'bg-slate-700',
      price: 15000,
      length: 11,
      extension: '.ai',
      listingType: 'lease',
      onSale: false,
      keywords: ['legal', 'eagle', 'law', 'attorney']
    },
    {
      name: 'HealthBloom.com',
      category: 'health-wellness',
      logo: '🌸',
      bgColor: 'bg-red-400',
      price: 8000,
      length: 13,
      extension: '.com',
      listingType: 'buy-now',
      onSale: true,
      keywords: ['health', 'bloom', 'wellness', 'medical']
    },
    {
      name: 'CoastalAngler.com',
      category: 'fishing-marine',
      logo: '🎣',
      bgColor: 'bg-slate-700',
      price: 3500,
      length: 15,
      extension: '.com',
      listingType: 'make-offer',
      onSale: true,
      keywords: ['coastal', 'angler', 'fishing', 'marine']
    },
    {
      name: 'CityNews.us',
      category: 'general-business',
      logo: '📰',
      bgColor: 'bg-white border',
      price: 1200,
      length: 9,
      extension: '.us',
      listingType: 'lease-to-own',
      onSale: false,
      keywords: ['city', 'news', 'media', 'local']
    },
    {
      name: 'AdventureNow.co',
      category: 'activities-recreation',
      logo: '⛰️',
      bgColor: 'bg-white border',
      price: 4500,
      length: 13,
      extension: '.co',
      listingType: 'buy-now',
      onSale: true,
      keywords: ['adventure', 'now', 'recreation', 'outdoor']
    },
    {
      name: 'GeoHomes.io',
      category: 'geographic-location',
      logo: '🏠',
      bgColor: 'bg-white border',
      price: 12000,
      length: 9,
      extension: '.io',
      listingType: 'make-offer',
      onSale: true,
      keywords: ['geo', 'homes', 'location', 'property']
    },
    {
      name: 'MediQuick.co',
      category: 'home-health-medical',
      logo: '⚕️',
      bgColor: 'bg-slate-700',
      price: 6500,
      length: 10,
      extension: '.co',
      listingType: 'lease',
      onSale: false,
      keywords: ['medi', 'quick', 'medical', 'health']
    },
    {
      name: 'Innovate.ai',
      category: 'technology',
      logo: '💡',
      bgColor: 'bg-white border',
      price: 25000,
      length: 9,
      extension: '.ai',
      listingType: 'buy-now',
      onSale: true,
      keywords: ['innovate', 'innovation', 'tech', 'ai']
    }
  ];

  // Filter options
  const listingTypes = [
    { key: 'all', label: 'All Types' },
    { key: 'buy-now', label: 'Buy Now' },
    { key: 'make-offer', label: 'Make Offer' },
    { key: 'lease', label: 'Lease' },
    { key: 'lease-to-own', label: 'Lease to Own' }
  ];

  const characterTypes = [
    { key: 'any', label: 'Any' },
    { key: 'letters-only', label: 'Letters Only' },
    { key: 'numbers-only', label: 'Numbers Only' },
    { key: 'alphanumeric', label: 'Alphanumeric' }
  ];

  const categories = [
    { key: 'all', label: 'All Categories' },
    { key: 'auto-automotive', label: 'Auto & Automotive' },
    { key: 'fishing-marine', label: 'Fishing & Marine' },
    { key: 'home-health-medical', label: 'Home, Health & Medical' },
    { key: 'health-wellness', label: 'Health & Wellness' },
    { key: 'technology', label: 'Technology' },
    { key: 'activities-recreation', label: 'Activities & Recreation' },
    { key: 'geographic-location', label: 'Geographic & Location' },
    { key: 'general-business', label: 'General Business' },
    { key: 'classified-listings', label: 'Classified & Listings' }
  ];

  const extensions = [
    { key: 'all', label: 'All Extensions' },
    { key: '.com', label: '.com' },
    { key: '.io', label: '.io' },
    { key: '.ai', label: '.ai' },
    { key: '.co', label: '.co' },
    { key: '.net', label: '.net' },
    { key: '.org', label: '.org' },
    { key: '.us', label: '.us' },
    { key: '.now', label: '.now' },
    { key: '.pro', label: '.pro' }
  ];

  // Filter logic
  const filteredDomains = useMemo(() => {
    return allDomains.filter(domain => {
      // On Sale filter
      if (onSale && !domain.onSale) return false;

      // Listing Type filter
      if (!selectedListingTypes.includes('all') && !selectedListingTypes.includes(domain.listingType)) {
        return false;
      }

      // Category filter
      if (!selectedCategories.includes('all') && !selectedCategories.includes(domain.category)) {
        return false;
      }

      // Extension filter
      if (!selectedExtensions.includes('all') && !selectedExtensions.includes(domain.extension)) {
        return false;
      }

      // Character Type filter (simplified logic)
      if (!selectedCharacterTypes.includes('any')) {
        const domainName = domain.name.split('.')[0].toLowerCase();
        const hasNumbers = /\d/.test(domainName);
        const hasLetters = /[a-z]/.test(domainName);
        
        if (selectedCharacterTypes.includes('letters-only') && hasNumbers) return false;
        if (selectedCharacterTypes.includes('numbers-only') && hasLetters) return false;
        if (selectedCharacterTypes.includes('alphanumeric') && (!hasNumbers || !hasLetters)) return false;
      }

      // Price Range filter
      if (domain.price < priceRange[0] || domain.price > priceRange[1]) {
        return false;
      }

      // Domain Length filter
      if (domain.length < domainLength[0] || domain.length > domainLength[1]) {
        return false;
      }

      // Must Include keywords
      if (mustInclude.trim()) {
        const includeKeywords = mustInclude.toLowerCase().split(',').map(k => k.trim());
        const domainText = domain.name.toLowerCase() + ' ' + domain.keywords.join(' ');
        if (!includeKeywords.some(keyword => domainText.includes(keyword))) {
          return false;
        }
      }

      // Must Not Include keywords
      if (mustNotInclude.trim()) {
        const excludeKeywords = mustNotInclude.toLowerCase().split(',').map(k => k.trim());
        const domainText = domain.name.toLowerCase() + ' ' + domain.keywords.join(' ');
        if (excludeKeywords.some(keyword => domainText.includes(keyword))) {
          return false;
        }
      }

      return true;
    });
  }, [onSale, selectedListingTypes, selectedCategories, selectedExtensions, selectedCharacterTypes, priceRange, domainLength, mustInclude, mustNotInclude]);

  // Sort logic
  const sortedDomains = useMemo(() => {
    const sorted = [...filteredDomains];
    switch (sortBy) {
      case 'price-low':
        return sorted.sort((a, b) => a.price - b.price);
      case 'price-high':
        return sorted.sort((a, b) => b.price - a.price);
      case 'length':
        return sorted.sort((a, b) => a.length - b.length);
      case 'newest':
      default:
        return sorted;
    }
  }, [filteredDomains, sortBy]);

  // Helper functions
  const toggleSelection = (array, setArray, item, isAll = false) => {
    if (isAll) {
      setArray(['all']);
    } else {
      const newArray = array.filter(t => t !== 'all');
      if (newArray.includes(item)) {
        const filtered = newArray.filter(t => t !== item);
        setArray(filtered.length ? filtered : ['all']);
      } else {
        setArray([...newArray, item]);
      }
    }
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const formatPrice = (price) => {
    if (price >= 1000000) return `$${(price / 1000000).toFixed(1)}M`;
    if (price >= 1000) return `$${(price / 1000).toFixed(0)}K`;
    return `$${price}`;
  };

return (
  <div className="min-h-screen bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex gap-8">
        {/* Sidebar Filters */}
          <div className="w-80 space-y-2">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Filter className="w-5 h-5 text-gray-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
                </div>

                {/* On Sale */}
                <div className="border-b border-gray-200 pb-4 mb-4">
                  <button
                    onClick={() => toggleSection('onSale')}
                    className="flex items-center justify-between w-full text-left"
                  >
                    <h4 className="font-semibold text-gray-900">On Sale</h4>
                    {expandedSections.onSale ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {expandedSections.onSale && (
                    <div className="mt-3">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setOnSale(!onSale)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            onSale ? 'bg-black' : 'bg-gray-200'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              onSale ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                        <span className="text-sm text-gray-600">Yes</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Find domains at discounted prices</p>
                    </div>
                  )}
                </div>

                {/* By Category */}
                <div className="border-b border-gray-200 pb-4 mb-4">
                  <button
                    onClick={() => toggleSection('category')}
                    className="flex items-center justify-between w-full text-left"
                  >
                    <h4 className="font-semibold text-gray-900">By Category</h4>
                    {expandedSections.category ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {expandedSections.category && (
                    <div className="mt-3 space-y-2 max-h-48 overflow-y-auto">
                      {categories.map(category => (
                        <label key={category.key} className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedCategories.includes(category.key)}
                            onChange={() => toggleSelection(selectedCategories, setSelectedCategories, category.key, category.key === 'all')}
                            className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                          />
                          <span className="text-sm text-gray-700">{category.label}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Listing Type */}
                <div className="border-b border-gray-200 pb-4 mb-4">
                  <button
                    onClick={() => toggleSection('listingType')}
                    className="flex items-center justify-between w-full text-left"
                  >
                    <h4 className="font-semibold text-gray-900">Listing Type</h4>
                    {expandedSections.listingType ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {expandedSections.listingType && (
                    <div className="mt-3 space-y-2">
                      {listingTypes.map(type => (
                        <label key={type.key} className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedListingTypes.includes(type.key)}
                            onChange={() => toggleSelection(selectedListingTypes, setSelectedListingTypes, type.key, type.key === 'all')}
                            className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                          />
                          <span className="text-sm text-gray-700">{type.label}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Character Type */}
                <div className="border-b border-gray-200 pb-4 mb-4">
                  <button
                    onClick={() => toggleSection('characterType')}
                    className="flex items-center justify-between w-full text-left"
                  >
                    <h4 className="font-semibold text-gray-900">Character Type</h4>
                    {expandedSections.characterType ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {expandedSections.characterType && (
                    <div className="mt-3 space-y-2">
                      {characterTypes.map(type => (
                        <label key={type.key} className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedCharacterTypes.includes(type.key)}
                            onChange={() => toggleSelection(selectedCharacterTypes, setSelectedCharacterTypes, type.key, type.key === 'any')}
                            className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                          />
                          <span className="text-sm text-gray-700">{type.label}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Misspelled Words */}
                <div className="border-b border-gray-200 pb-4 mb-4">
                  <button
                    onClick={() => toggleSection('misspelledWords')}
                    className="flex items-center justify-between w-full text-left"
                  >
                    <h4 className="font-semibold text-gray-900">Misspelled Words</h4>
                    {expandedSections.misspelledWords ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {expandedSections.misspelledWords && (
                    <div className="mt-3">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <button
                          onClick={() => setIncludeMisspelled(!includeMisspelled)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            includeMisspelled ? 'bg-black' : 'bg-gray-200'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              includeMisspelled ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                        <span className="text-sm text-gray-700">Include misspelled domains</span>
                      </label>
                    </div>
                  )}
                </div>

                {/* Keywords */}
                <div className="border-b border-gray-200 pb-4 mb-4">
                  <button
                    onClick={() => toggleSection('keywords')}
                    className="flex items-center justify-between w-full text-left"
                  >
                    <h4 className="font-semibold text-gray-900">Keywords</h4>
                    {expandedSections.keywords ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {expandedSections.keywords && (
                    <div className="mt-3 space-y-3">
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">Must Include</label>
                        <input
                          type="text"
                          value={mustInclude}
                          onChange={(e) => setMustInclude(e.target.value)}
                          placeholder="e.g. tech, ai, startup"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                        />
                        <p className="text-xs text-gray-500 mt-1">Separate with commas</p>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">Must Not Include</label>
                        <input
                          type="text"
                          value={mustNotInclude}
                          onChange={(e) => setMustNotInclude(e.target.value)}
                          placeholder="e.g. adult, gambling, pharma"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                        />
                        <p className="text-xs text-gray-500 mt-1">Separate with commas</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Extension */}
                <div className="border-b border-gray-200 pb-4 mb-4">
                  <button
                    onClick={() => toggleSection('extension')}
                    className="flex items-center justify-between w-full text-left"
                  >
                    <h4 className="font-semibold text-gray-900">Extension</h4>
                    {expandedSections.extension ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {expandedSections.extension && (
                    <div className="mt-3 space-y-2 max-h-48 overflow-y-auto">
                      {extensions.map(ext => (
                        <label key={ext.key} className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedExtensions.includes(ext.key)}
                            onChange={() => toggleSelection(selectedExtensions, setSelectedExtensions, ext.key, ext.key === 'all')}
                            className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                          />
                          <span className="text-sm text-gray-700">{ext.label}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Price Range */}
                <div className="border-b border-gray-200 pb-4 mb-4">
                  <button
                    onClick={() => toggleSection('priceRange')}
                    className="flex items-center justify-between w-full text-left"
                  >
                    <h4 className="font-semibold text-gray-900">Price Range</h4>
                    {expandedSections.priceRange ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {expandedSections.priceRange && (
                    <div className="mt-3">
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>$0</span>
                        <span>$1,000,000</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="1000000"
                        step="1000"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <div className="text-sm text-gray-600 mt-2 text-center">
                        Up to {formatPrice(priceRange[1])}
                      </div>
                    </div>
                  )}
                </div>

                {/* Domain Length */}
                <div className="pb-4">
                  <button
                    onClick={() => toggleSection('domainLength')}
                    className="flex items-center justify-between w-full text-left"
                  >
                    <h4 className="font-semibold text-gray-900">Domain Length</h4>
                    {expandedSections.domainLength ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {expandedSections.domainLength && (
                    <div className="mt-3">
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>1 chars</span>
                        <span>50 chars</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="50"
                        value={domainLength[1]}
                        onChange={(e) => setDomainLength([1, parseInt(e.target.value)])}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <div className="text-sm text-gray-600 mt-2 text-center">
                        {domainLength[0]} - {domainLength[1]} characters
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Search Domains
              </h1>
              <p className="text-gray-600">
                Showing {sortedDomains.length} results
              </p>
            </div>

            <div className="flex items-center gap-4">
              {/* View Toggle */}
              <div className="flex bg-white rounded-lg border p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded ${
                    viewMode === "grid"
                      ? "bg-black text-white"
                      : "text-gray-600"
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded ${
                    viewMode === "list"
                      ? "bg-black text-white"
                      : "text-gray-600"
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>

              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              >
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="length">Domain Length</option>
              </select>
            </div>
          </div>

          {/* Domain Grid */}
          <div
            className={`grid gap-6 ${
              viewMode === "grid"
                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-1"
            }`}
          >
            {sortedDomains.map((domain, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {domain.name}
                      </h3>
                      <div className="flex gap-2 items-center">
                        <span className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">
                          {categories.find((c) => c.key === domain.category)
                            ?.label || domain.category}
                        </span>
                        {domain.onSale && (
                          <span className="inline-block px-2 py-1 text-xs bg-green-100 text-green-600 rounded">
                            On Sale
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="text-lg font-bold text-gray-900">
                      {formatPrice(domain.price)}
                    </span>
                  </div>

                  {/* Logo/Icon Display */}
                  <div
                    className={`w-full h-32 ${domain.bgColor} rounded-lg mb-4 flex items-center justify-center text-4xl`}
                  >
                    {domain.logo}
                  </div>

                  {/* Domain Info */}
                  <div className="mb-4 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Length: {domain.length} chars</span>
                      <span>
                        Type:{" "}
                        {
                          listingTypes.find(
                            (t) => t.key === domain.listingType
                          )?.label
                        }
                      </span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className="w-full bg-slate-800 hover:bg-slate-900 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
                    <Eye className="w-4 h-4" />
                    Make Inquiry
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
)}
export default DomainMarketplace ;
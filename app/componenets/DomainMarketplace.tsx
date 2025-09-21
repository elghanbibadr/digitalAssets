import React, { useState, useMemo, useEffect } from 'react';
import { Eye, Grid, List, Filter, ChevronDown, ChevronUp, Loader2, AlertCircle } from 'lucide-react';

interface Domain {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  length: number;
  extension: string;
  listingType: string;
  onSale: boolean;
  keywords: string[];
  logo: string;
  bgColor: string;
}

interface FilterOption {
  key: string;
  label: string;
}

interface ExpandedSections {
  listingType: boolean;
  characterType: boolean;
  misspelledWords: boolean;
  keywords: boolean;
  extension: boolean;
  onSale: boolean;
  category: boolean;
  priceRange: boolean;
  domainLength: boolean;
}

const DomainMarketplace = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<string>('newest');
  
  // Strapi data states
  const [domains, setDomains] = useState<Domain[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  // Filter states
  const [onSale, setOnSale] = useState<boolean>(true);
  const [selectedListingTypes, setSelectedListingTypes] = useState<string[]>(['all']);
  const [selectedCharacterTypes, setSelectedCharacterTypes] = useState<string[]>(['any']);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['all']);
  const [selectedExtensions, setSelectedExtensions] = useState<string[]>(['all']);
  const [includeMisspelled, setIncludeMisspelled] = useState<boolean>(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000000]);
  const [domainLength, setDomainLength] = useState<[number, number]>([1, 50]);
  const [mustInclude, setMustInclude] = useState<string>('');
  const [mustNotInclude, setMustNotInclude] = useState<string>('');
  
  // Dropdown states
  const [expandedSections, setExpandedSections] = useState<ExpandedSections>({
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

  // Fetch ALL domains from Strapi with pagination
  useEffect(() => {
    const fetchAllDomains = async () => {
      try {
        setLoading(true);
        const allDomains: Domain[] = [];
        let page = 1;
        const pageSize = 100; // Fetch 100 at a time for efficiency
        let hasMore = true;

        while (hasMore) {
          const response = await fetch(
            `http://localhost:1337/api/domains?pagination[page]=${page}&pagination[pageSize]=${pageSize}`
          );
          
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          
          const data = await response.json();
          
          // Transform Strapi data to component format
          const transformedDomains: Domain[] = data.data.map((domain: any) => ({
            id: domain.id,
            name: domain.name,
            description: domain.description || '',
            category: domain.category,
            price: domain.price || 0,
            length: domain.length,
            extension: domain.extension,
            listingType: domain.listingType,
            onSale: domain.onSale,
            keywords: domain.keywords || [],
            logo: domain.logo || generatePlaceholderLogo(domain.name),
            bgColor: generateBgColor(domain.category)
          }));
          
          allDomains.push(...transformedDomains);
          
          // Check if we have more pages
          const { pagination } = data.meta;
          hasMore = page < pagination.pageCount;
          page++;
        }
        
        console.log(`Fetched ${allDomains.length} domains total`);
        setDomains(allDomains);
        setError(null);
      } catch (err) {
        console.error('Error fetching domains:', err);
        setError('Failed to load domains. Please check if Strapi is running on http://localhost:1337');
      } finally {
        setLoading(false);
      }
    };

    fetchAllDomains();
  }, []);

  // Helper function to generate placeholder logo
  const generatePlaceholderLogo = (domainName: string): string => {
    if (!domainName) return '🌐';
    
    const firstLetter = domainName.charAt(0).toLowerCase();
    const logoMap: { [key: string]: string } = {
      'a': '🅰️', 'b': '🅱️', 'c': '🔤', 'd': '📊', 'e': '💎', 'f': '🔥', 'g': '🎯', 'h': '🏠',
      'i': '💡', 'j': '🎭', 'k': '🔑', 'l': '📚', 'm': '💰', 'n': '🌟', 'o': '🎯', 'p': '📈',
      'q': '❓', 'r': '🚀', 's': '⭐', 't': '🎪', 'u': '☂️', 'v': '✌️', 'w': '🌍', 'x': '❌',
      'y': '💛', 'z': '⚡'
    };
    
    return logoMap[firstLetter] || '🌐';
  };

  // Helper function to generate background color based on category
  const generateBgColor = (category: string): string => {
    const colorMap: { [key: string]: string } = {
      'technology': 'bg-blue-100',
      'health': 'bg-green-100',
      'automotive': 'bg-red-100',
      'business': 'bg-purple-100',
      'outdoor': 'bg-green-200',
      'home': 'bg-yellow-100',
      'sports': 'bg-orange-100',
      'general': 'bg-gray-100'
    };
    
    return colorMap[category] || 'bg-white border';
  };

  // Filter options
  const listingTypes: FilterOption[] = [
    { key: 'all', label: 'All Types' },
    { key: 'buy-now', label: 'Buy Now' },
    { key: 'make-offer', label: 'Make Offer' },
    { key: 'lease', label: 'Lease' },
    { key: 'lease-to-own', label: 'Lease to Own' }
  ];

  const characterTypes: FilterOption[] = [
    { key: 'any', label: 'Any' },
    { key: 'letters-only', label: 'Letters Only' },
    { key: 'numbers-only', label: 'Numbers Only' },
    { key: 'alphanumeric', label: 'Alphanumeric' }
  ];

  // Generate categories dynamically from fetched domains
  const categories: FilterOption[] = useMemo(() => {
    const uniqueCategories = [...new Set(domains.map(d => d.category))];
    return [
      { key: 'all', label: 'All Categories' },
      ...uniqueCategories.map(cat => ({
        key: cat,
        label: cat.charAt(0).toUpperCase() + cat.slice(1).replace('-', ' & ')
      }))
    ];
  }, [domains]);

  // Generate extensions dynamically from fetched domains
  const extensions: FilterOption[] = useMemo(() => {
    const uniqueExtensions = [...new Set(domains.map(d => d.extension))];
    return [
      { key: 'all', label: 'All Extensions' },
      ...uniqueExtensions.map(ext => ({
        key: ext,
        label: ext
      }))
    ];
  }, [domains]);

  // Filter logic
  const filteredDomains = useMemo(() => {
    return domains.filter(domain => {
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
        const domainName = domain.name.toLowerCase();
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
        const domainText = domain.name.toLowerCase() + ' ' + (domain.keywords || []).join(' ') + ' ' + (domain.description || '').toLowerCase();
        if (!includeKeywords.some(keyword => domainText.includes(keyword))) {
          return false;
        }
      }

      // Must Not Include keywords
      if (mustNotInclude.trim()) {
        const excludeKeywords = mustNotInclude.toLowerCase().split(',').map(k => k.trim());
        const domainText = domain.name.toLowerCase() + ' ' + (domain.keywords || []).join(' ') + ' ' + (domain.description || '').toLowerCase();
        if (excludeKeywords.some(keyword => domainText.includes(keyword))) {
          return false;
        }
      }

      return true;
    });
  }, [domains, onSale, selectedListingTypes, selectedCategories, selectedExtensions, selectedCharacterTypes, priceRange, domainLength, mustInclude, mustNotInclude]);

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
  const toggleSelection = (
    array: string[], 
    setArray: React.Dispatch<React.SetStateAction<string[]>>, 
    item: string, 
    isAll: boolean = false
  ) => {
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

  const toggleSection = (section: keyof ExpandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const formatPrice = (price: number): string => {
    if (price >= 1000000) return `$${(price / 1000000).toFixed(1)}M`;
    if (price >= 1000) return `$${(price / 1000).toFixed(0)}K`;
    return `$${price}`;
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading all domains...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-8 h-8 text-red-500 mx-auto mb-4" />
          <p className="text-red-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

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
                  Showing {sortedDomains.length} of {domains.length} total domains
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
              {sortedDomains.map((domain) => (
                <div
                  key={domain.id}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {domain.name}{domain.extension}
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
                      {domain.price > 0 && (
                        <span className="text-lg font-bold text-gray-900">
                          {formatPrice(domain.price)}
                        </span>
                      )}
                    </div>

                    {/* Logo/Icon Display */}
                    <div className="bg-black w-[200px] h-20 rounded-lg mb-4 flex items-center justify-center text-4xl">
                      {/* Logo placeholder */}
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
                      {domain.description && (
                        <p className="mt-2 text-xs text-gray-500 line-clamp-2">
                          {domain.description}
                        </p>
                      )}
                      {domain.keywords && domain.keywords.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-1">
                          {domain.keywords.slice(0, 3).map((keyword, idx) => (
                            <span key={idx} className="inline-block px-1 py-0.5 text-xs bg-blue-50 text-blue-600 rounded">
                              {keyword}
                            </span>
                          ))}
                          {domain.keywords.length > 3 && (
                            <span className="text-xs text-gray-400">
                              +{domain.keywords.length - 3} more
                            </span>
                          )}
                        </div>
                      )}
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

            {/* No Results */}
            {sortedDomains.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 mb-4">No domains found matching your criteria.</p>
                <button 
                  onClick={() => {
                    setSelectedCategories(['all']);
                    setSelectedExtensions(['all']);
                    setSelectedListingTypes(['all']);
                    setMustInclude('');
                    setMustNotInclude('');
                    setPriceRange([0, 1000000]);
                    setDomainLength([1, 50]);
                  }}
                  className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomainMarketplace;
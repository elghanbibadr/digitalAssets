"use client";

import React, { useState, useMemo } from "react";
import {
  Eye,
  Filter,
  ChevronDown,
  ChevronUp,
  Package,
} from "lucide-react";

// Type definitions
interface Domain {
  name: string;
  price: number;
  length: number;
  category: string;
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

const DomainBundles: React.FC = () => {
  const [sortBy, setSortBy] = useState<string>("newest");

  // Filter states
  const [onSale, setOnSale] = useState<boolean>(true);
  const [selectedListingTypes, setSelectedListingTypes] = useState<string[]>(["all"]);
  const [selectedCharacterTypes, setSelectedCharacterTypes] = useState<string[]>(["any"]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(["all"]);
  const [selectedExtensions, setSelectedExtensions] = useState<string[]>(["all"]);
  const [includeMisspelled, setIncludeMisspelled] = useState<boolean>(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000000]);
  const [domainLength, setDomainLength] = useState<[number, number]>([1, 50]);
  const [mustInclude, setMustInclude] = useState<string>("");
  const [mustNotInclude, setMustNotInclude] = useState<string>("");

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
    domainLength: true,
  });

  // Sample domain data - replace with actual data
  const allDomains: Domain[] = [
    {
      name: "TechStartup.com",
      price: 50000,
      length: 11,
      category: "technology",
      extension: ".com",
      listingType: "buy-now",
      onSale: true,
      keywords: ["tech", "startup", "business"],
      logo: "🚀",
      bgColor: "bg-blue-100"
    },
    {
      name: "HealthHub.io",
      price: 25000,
      length: 9,
      category: "health-wellness",
      extension: ".io",
      listingType: "make-offer",
      onSale: false,
      keywords: ["health", "wellness", "hub"],
      logo: "🏥",
      bgColor: "bg-green-100"
    }
  ];

  // Filter options
  const listingTypes: FilterOption[] = [
    { key: "all", label: "All Types" },
    { key: "buy-now", label: "Buy Now" },
    { key: "make-offer", label: "Make Offer" },
    { key: "lease", label: "Lease" },
    { key: "lease-to-own", label: "Lease to Own" },
  ];

  const characterTypes: FilterOption[] = [
    { key: "any", label: "Any" },
    { key: "letters-only", label: "Letters Only" },
    { key: "numbers-only", label: "Numbers Only" },
    { key: "alphanumeric", label: "Alphanumeric" },
  ];

  const categories: FilterOption[] = [
    { key: "all", label: "All Categories" },
    { key: "auto-automotive", label: "Auto & Automotive" },
    { key: "fishing-marine", label: "Fishing & Marine" },
    { key: "home-health-medical", label: "Home, Health & Medical" },
    { key: "health-wellness", label: "Health & Wellness" },
    { key: "technology", label: "Technology" },
    { key: "activities-recreation", label: "Activities & Recreation" },
    { key: "geographic-location", label: "Geographic & Location" },
    { key: "general-business", label: "General Business" },
    { key: "classified-listings", label: "Classified & Listings" },
  ];

  const extensions: FilterOption[] = [
    { key: "all", label: "All Extensions" },
    { key: ".com", label: ".com" },
    { key: ".io", label: ".io" },
    { key: ".ai", label: ".ai" },
    { key: ".co", label: ".co" },
    { key: ".net", label: ".net" },
    { key: ".org", label: ".org" },
    { key: ".us", label: ".us" },
    { key: ".now", label: ".now" },
    { key: ".pro", label: ".pro" },
  ];

  // Filter logic
  const filteredDomains = useMemo(() => {
    return allDomains.filter((domain) => {
      // On Sale filter
      if (onSale && !domain.onSale) return false;

      // Listing Type filter
      if (
        !selectedListingTypes.includes("all") &&
        !selectedListingTypes.includes(domain.listingType)
      ) {
        return false;
      }

      // Category filter
      if (
        !selectedCategories.includes("all") &&
        !selectedCategories.includes(domain.category)
      ) {
        return false;
      }

      // Extension filter
      if (
        !selectedExtensions.includes("all") &&
        !selectedExtensions.includes(domain.extension)
      ) {
        return false;
      }

      // Character Type filter
      if (!selectedCharacterTypes.includes("any")) {
        const domainName = domain.name.split(".")[0].toLowerCase();
        const hasNumbers = /\d/.test(domainName);
        const hasLetters = /[a-z]/.test(domainName);

        if (selectedCharacterTypes.includes("letters-only") && hasNumbers)
          return false;
        if (selectedCharacterTypes.includes("numbers-only") && hasLetters)
          return false;
        if (
          selectedCharacterTypes.includes("alphanumeric") &&
          (!hasNumbers || !hasLetters)
        )
          return false;
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
        const includeKeywords = mustInclude
          .toLowerCase()
          .split(",")
          .map((k) => k.trim());
        const domainText =
          domain.name.toLowerCase() + " " + domain.keywords.join(" ");
        if (!includeKeywords.some((keyword) => domainText.includes(keyword))) {
          return false;
        }
      }

      // Must Not Include keywords
      if (mustNotInclude.trim()) {
        const excludeKeywords = mustNotInclude
          .toLowerCase()
          .split(",")
          .map((k) => k.trim());
        const domainText =
          domain.name.toLowerCase() + " " + domain.keywords.join(" ");
        if (excludeKeywords.some((keyword) => domainText.includes(keyword))) {
          return false;
        }
      }

      return true;
    });
  }, [
    allDomains,
    onSale,
    selectedListingTypes,
    selectedCategories,
    selectedExtensions,
    selectedCharacterTypes,
    priceRange,
    domainLength,
    mustInclude,
    mustNotInclude,
  ]);

  // Sort logic
  const sortedDomains = useMemo(() => {
    const sorted = [...filteredDomains];
    switch (sortBy) {
      case "price-low":
        return sorted.sort((a, b) => a.price - b.price);
      case "price-high":
        return sorted.sort((a, b) => b.price - a.price);
      case "length":
        return sorted.sort((a, b) => a.length - b.length);
      case "newest":
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
      setArray(["all"]);
    } else {
      const newArray = array.filter((t) => t !== "all");
      if (newArray.includes(item)) {
        const filtered = newArray.filter((t) => t !== item);
        setArray(filtered.length ? filtered : ["all"]);
      } else {
        setArray([...newArray, item]);
      }
    }
  };

  const toggleSection = (section: keyof ExpandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const formatPrice = (price: number): string => {
    if (price >= 1000000) return `$${(price / 1000000).toFixed(1)}M`;
    if (price >= 1000) return `$${(price / 1000).toFixed(0)}K`;
    return `$${price}`;
  };

  const SectionHeader: React.FC<{
    title: string;
    section: keyof ExpandedSections;
    onClick: () => void;
    isExpanded: boolean;
  }> = ({ title, onClick, isExpanded }) => (
    <button
      onClick={onClick}
      className="flex items-center justify-between w-full text-left"
    >
      <h4 className="font-semibold text-gray-900">{title}</h4>
      {isExpanded ? (
        <ChevronUp className="w-4 h-4" />
      ) : (
        <ChevronDown className="w-4 h-4" />
      )}
    </button>
  );

  const ToggleSwitch: React.FC<{
    checked: boolean;
    onChange: () => void;
    label?: string;
  }> = ({ checked, onChange, label }) => (
    <div className="flex items-center gap-3">
      <button
        onClick={onChange}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
          checked ? "bg-black" : "bg-gray-200"
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            checked ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
      {label && <span className="text-sm text-gray-600">{label}</span>}
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="space-y-4 text-center my-20 px-4">
        <div className="inline-block bg-blue-400/20 text-blue-600 p-4 rounded-full mb-6">
          <Package className="w-12 h-12" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900">Domain Bundles</h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-600">
            Save big with curated domain packages. Get multiple premium domains
            at discounted rates, perfect for expanding your brand portfolio.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mt-10 mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-80 w-full space-y-2">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Filter className="w-5 h-5 text-gray-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
                </div>

                {/* On Sale */}
                <div className="border-b border-gray-200 pb-4 mb-4">
                  <SectionHeader
                    title="On Sale"
                    section="onSale"
                    onClick={() => toggleSection("onSale")}
                    isExpanded={expandedSections.onSale}
                  />
                  {expandedSections.onSale && (
                    <div className="mt-3">
                      <ToggleSwitch
                        checked={onSale}
                        onChange={() => setOnSale(!onSale)}
                        label="Yes"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Find domains at discounted prices
                      </p>
                    </div>
                  )}
                </div>

                {/* By Category */}
                <div className="border-b border-gray-200 pb-4 mb-4">
                  <SectionHeader
                    title="By Category"
                    section="category"
                    onClick={() => toggleSection("category")}
                    isExpanded={expandedSections.category}
                  />
                  {expandedSections.category && (
                    <div className="mt-3 space-y-2 max-h-48 overflow-y-auto">
                      {categories.map((category) => (
                        <label
                          key={category.key}
                          className="flex items-center gap-3 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={selectedCategories.includes(category.key)}
                            onChange={() =>
                              toggleSelection(
                                selectedCategories,
                                setSelectedCategories,
                                category.key,
                                category.key === "all"
                              )
                            }
                            className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                          />
                          <span className="text-sm text-gray-700">
                            {category.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Listing Type */}
                <div className="border-b border-gray-200 pb-4 mb-4">
                  <SectionHeader
                    title="Listing Type"
                    section="listingType"
                    onClick={() => toggleSection("listingType")}
                    isExpanded={expandedSections.listingType}
                  />
                  {expandedSections.listingType && (
                    <div className="mt-3 space-y-2">
                      {listingTypes.map((type) => (
                        <label
                          key={type.key}
                          className="flex items-center gap-3 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={selectedListingTypes.includes(type.key)}
                            onChange={() =>
                              toggleSelection(
                                selectedListingTypes,
                                setSelectedListingTypes,
                                type.key,
                                type.key === "all"
                              )
                            }
                            className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                          />
                          <span className="text-sm text-gray-700">
                            {type.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Character Type */}
                <div className="border-b border-gray-200 pb-4 mb-4">
                  <SectionHeader
                    title="Character Type"
                    section="characterType"
                    onClick={() => toggleSection("characterType")}
                    isExpanded={expandedSections.characterType}
                  />
                  {expandedSections.characterType && (
                    <div className="mt-3 space-y-2">
                      {characterTypes.map((type) => (
                        <label
                          key={type.key}
                          className="flex items-center gap-3 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={selectedCharacterTypes.includes(type.key)}
                            onChange={() =>
                              toggleSelection(
                                selectedCharacterTypes,
                                setSelectedCharacterTypes,
                                type.key,
                                type.key === "any"
                              )
                            }
                            className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                          />
                          <span className="text-sm text-gray-700">
                            {type.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Misspelled Words */}
                <div className="border-b border-gray-200 pb-4 mb-4">
                  <SectionHeader
                    title="Misspelled Words"
                    section="misspelledWords"
                    onClick={() => toggleSection("misspelledWords")}
                    isExpanded={expandedSections.misspelledWords}
                  />
                  {expandedSections.misspelledWords && (
                    <div className="mt-3">
                      <ToggleSwitch
                        checked={includeMisspelled}
                        onChange={() => setIncludeMisspelled(!includeMisspelled)}
                        label="Include misspelled domains"
                      />
                    </div>
                  )}
                </div>

                {/* Keywords */}
                <div className="border-b border-gray-200 pb-4 mb-4">
                  <SectionHeader
                    title="Keywords"
                    section="keywords"
                    onClick={() => toggleSection("keywords")}
                    isExpanded={expandedSections.keywords}
                  />
                  {expandedSections.keywords && (
                    <div className="mt-3 space-y-3">
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">
                          Must Include
                        </label>
                        <input
                          type="text"
                          value={mustInclude}
                          onChange={(e) => setMustInclude(e.target.value)}
                          placeholder="e.g. tech, ai, startup"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          Separate with commas
                        </p>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">
                          Must Not Include
                        </label>
                        <input
                          type="text"
                          value={mustNotInclude}
                          onChange={(e) => setMustNotInclude(e.target.value)}
                          placeholder="e.g. adult, gambling, pharma"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          Separate with commas
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Extension */}
                <div className="border-b border-gray-200 pb-4 mb-4">
                  <SectionHeader
                    title="Extension"
                    section="extension"
                    onClick={() => toggleSection("extension")}
                    isExpanded={expandedSections.extension}
                  />
                  {expandedSections.extension && (
                    <div className="mt-3 space-y-2 max-h-48 overflow-y-auto">
                      {extensions.map((ext) => (
                        <label
                          key={ext.key}
                          className="flex items-center gap-3 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={selectedExtensions.includes(ext.key)}
                            onChange={() =>
                              toggleSelection(
                                selectedExtensions,
                                setSelectedExtensions,
                                ext.key,
                                ext.key === "all"
                              )
                            }
                            className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                          />
                          <span className="text-sm text-gray-700">
                            {ext.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Price Range */}
                <div className="border-b border-gray-200 pb-4 mb-4">
                  <SectionHeader
                    title="Price Range"
                    section="priceRange"
                    onClick={() => toggleSection("priceRange")}
                    isExpanded={expandedSections.priceRange}
                  />
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
                        onChange={(e) =>
                          setPriceRange([0, parseInt(e.target.value)])
                        }
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="text-sm text-gray-600 mt-2 text-center">
                        Up to {formatPrice(priceRange[1])}
                      </div>
                    </div>
                  )}
                </div>

                {/* Domain Length */}
                <div className="pb-4">
                  <SectionHeader
                    title="Domain Length"
                    section="domainLength"
                    onClick={() => toggleSection("domainLength")}
                    isExpanded={expandedSections.domainLength}
                  />
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
                        onChange={(e) =>
                          setDomainLength([1, parseInt(e.target.value)])
                        }
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
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
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Available Bundles
              </h2>
              <p className="text-gray-600">
                Showing {sortedDomains.length} bundles
              </p>
            </div>

            {/* Domain Grid */}
            <div className="grid gap-6 grid-cols-1">
              {sortedDomains.length > 0 ? (
                sortedDomains.map((domain, index) => (
                  <div
                    key={`${domain.name}-${index}`}
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
                ))
              ) : (
                <div className="flex flex-col items-center justify-center min-h-96 py-16 px-4">
                  <div className="w-20 mx-auto h-20 mb-6">
                    <Package className="h-20 w-20 text-slate-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No bundles found
                  </h3>
                  <p className="text-gray-600 text-center">
                    Try adjusting your filters to see more results.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomainBundles;
"use client"
import { ShoppingCart, ArrowRight } from 'lucide-react';

export default function EmptyCart() {
  const handleBrowseDomains = () => {
    // Handle navigation to domains marketplace
    console.log('Navigate to domains marketplace');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <ShoppingCart className="h-8 w-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">Your Cart</h1>
          <span className="text-gray-500">0 items</span>
        </div>
      </div>

      {/* Empty State Content */}
      <div className="flex flex-col items-center justify-center px-4 py-16 text-center">
        {/* Large Cart Icon */}
        <div className="mb-8">
          <ShoppingCart className="h-24 w-24 text-gray-300 mx-auto" />
        </div>

        {/* Empty Cart Message */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Your cart is empty
        </h2>

        {/* Description */}
        <p className="text-gray-600 max-w-md mb-8 leading-relaxed">
          Browse our marketplace to find premium domains for your next project.
        </p>

        {/* Browse Domains Button */}
        <button
          onClick={handleBrowseDomains}
          className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 flex items-center gap-2"
        >
          Browse Domains
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
import { Settings, SlidersHorizontal } from 'lucide-react';

export default function NoDomainsFound() {
  const handleClearFilters = () => {
    // Handle clearing all filters
    console.log('Clear all filters');
  };

  return (
    <div className="">
      {/* Header */}
      <div className="px-4 py-6 sm:px-6 lg:px-8 ">
        <h1 className="text-3xl font-bold text-gray-900">Featured Domains</h1>
      </div>

      {/* Empty State Content */}
      <div className="flex flex-col items-center justify-center px-4 py-16 text-center min-h-96">
        {/* Settings/Filter Icon */}
        <div className="mb-8">
          <div className="relative w-24 h-24 bg-slate-200/40 rounded-full flex items-center justify-center mx-auto mb-6">
            <SlidersHorizontal className="w-12 h-12 text-slate-400" />
            {/* Decorative lines to represent filters */}
           
          </div>
        </div>

        {/* No Domains Message */}
        <h3 className='font-semibold text-2xl text-slate-900 mb-4' >
          No domains found
        </h3>

        {/* Description */}
        <p className="text-gray-600 max-w-md mb-8 leading-relaxed">
          Try adjusting your search terms or filters to find the perfect domain.
        </p>

        {/* Clear All Filters Button */}
        <button
          onClick={handleClearFilters}
          className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
        >
          Clear All Filters
        </button>
      </div>
    </div>
  );
}
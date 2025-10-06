import { useState } from "react";
import { X, ChevronDown, Heart } from "lucide-react";

interface FilterOptions {
  categories: string;
  features: string;
}

interface StoreFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
  onFavoritesToggle?: () => void;
  showFavoritesOnly?: boolean;
}

export function StoreFilters({
  searchQuery,
  onSearchChange,
  filters,
  onFiltersChange,
  onFavoritesToggle,
  showFavoritesOnly = false,
}: StoreFiltersProps) {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleClearSearch = () => {
    onSearchChange("");
  };

  const handleCategoryChange = (value: string) => {
    onFiltersChange({ ...filters, categories: value });
  };

  const handleFeatureChange = (value: string) => {
    onFiltersChange({ ...filters, features: value });
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Search Bar */}
      <div className="relative flex items-center gap-2 px-4 py-3 rounded-full border border-gray-300 bg-white">
        <input
          type="text"
          placeholder="Search for a store"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setIsSearchFocused(false)}
          className="flex-1 text-base font-normal leading-[100%] text-gray-900 bg-transparent border-none outline-none placeholder:text-gray-900"
        />
        {searchQuery && (
          <button
            onClick={handleClearSearch}
            className="p-1 hover:bg-gray-100 rounded transition-colors"
            aria-label="Clear search"
          >
            <X size={16} className="text-gray-900" />
          </button>
        )}
      </div>

      {/* Filters Row */}
      <div className="flex items-center gap-4 flex-wrap">
        {/* Categories Dropdown */}
        <div className="relative">
          <select
            value={filters.categories}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="appearance-none flex items-center h-10 min-w-[240px] px-4 pr-10 rounded-md border border-gray-300 bg-white text-base font-normal leading-[100%] text-gray-900 cursor-pointer focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
          >
            <option value="all">All categories</option>
            <option value="hotels">Hotels</option>
            <option value="restaurants">Restaurants</option>
            <option value="retail">Retail</option>
            <option value="travel">Travel</option>
          </select>
          <ChevronDown
            size={16}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-900 pointer-events-none"
          />
        </div>

        {/* Features Dropdown */}
        <div className="relative">
          <select
            value={filters.features}
            onChange={(e) => handleFeatureChange(e.target.value)}
            className="appearance-none flex items-center h-10 w-[240px] min-w-[240px] px-4 pr-10 rounded-md border border-gray-300 bg-white text-base font-normal leading-[100%] text-gray-900 cursor-pointer focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
          >
            <option value="">Feature</option>
            <option value="cash-back">Cash Back</option>
            <option value="points">Points</option>
            <option value="discounts">Discounts</option>
            <option value="free-nights">Free Nights</option>
          </select>
          <ChevronDown
            size={16}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-900 pointer-events-none"
          />
        </div>

        {/* Favorites Button */}
        <button
          onClick={onFavoritesToggle}
          className={`flex items-center gap-2 px-3 py-3 rounded-md border transition-colors ${
            showFavoritesOnly
              ? "border-black bg-black text-white"
              : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
          }`}
        >
          <Heart size={16} className={showFavoritesOnly ? "fill-white" : ""} />
          <span className="text-base font-normal leading-[100%]">
            Favorites
          </span>
        </button>
      </div>
    </div>
  );
}

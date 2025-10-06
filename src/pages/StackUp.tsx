import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { StoreFilters } from "@/components/StoreFilters";
import { StoreCard } from "@/components/StoreCard";

// Mock data for stores
const STORES = [
  {
    id: "marriott-1",
    name: "Marriott",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/0d04a803908e71491531caf720334c7ca97397ac?width=436",
    benefits: [
      { icon: "dollar" as const, value: "10 pts/dollar" },
      { icon: "credit-card" as const, value: "5% cash back" },
      { icon: "key" as const, value: "2x pts over $300" },
      { icon: "link" as const, value: "10 pts/dollar" },
      { icon: "tag" as const, value: "10% off $150 or more" },
    ],
  },
  {
    id: "marriott-2",
    name: "Marriott",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/0d04a803908e71491531caf720334c7ca97397ac?width=436",
    benefits: [
      { icon: "dollar" as const, value: "10 pts/dollar" },
      { icon: "credit-card" as const, value: "5% cash back" },
      { icon: "key" as const, value: "2x pts over $300" },
      { icon: "link" as const, value: "10 pts/dollar" },
      { icon: "tag" as const, value: "10% off $150 or more" },
    ],
  },
  {
    id: "marriott-3",
    name: "Marriott",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/0d04a803908e71491531caf720334c7ca97397ac?width=436",
    benefits: [
      { icon: "dollar" as const, value: "10 pts/dollar" },
      { icon: "credit-card" as const, value: "5% cash back" },
      { icon: "key" as const, value: "2x pts over $300" },
      { icon: "link" as const, value: "10 pts/dollar" },
      { icon: "tag" as const, value: "10% off $150 or more" },
    ],
  },
  {
    id: "marriott-4",
    name: "Marriott",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/0d04a803908e71491531caf720334c7ca97397ac?width=436",
    benefits: [
      { icon: "dollar" as const, value: "10 pts/dollar" },
      { icon: "credit-card" as const, value: "5% cash back" },
      { icon: "key" as const, value: "2x pts over $300" },
      { icon: "link" as const, value: "10 pts/dollar" },
      { icon: "tag" as const, value: "10% off $150 or more" },
    ],
  },
  {
    id: "marriott-5",
    name: "Marriott",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/0d04a803908e71491531caf720334c7ca97397ac?width=436",
    benefits: [
      { icon: "dollar" as const, value: "10 pts/dollar" },
      { icon: "credit-card" as const, value: "5% cash back" },
      { icon: "key" as const, value: "2x pts over $300" },
      { icon: "link" as const, value: "10 pts/dollar" },
      { icon: "tag" as const, value: "10% off $150 or more" },
    ],
  },
  {
    id: "marriott-6",
    name: "Marriott",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/0d04a803908e71491531caf720334c7ca97397ac?width=436",
    benefits: [
      { icon: "dollar" as const, value: "10 pts/dollar" },
      { icon: "credit-card" as const, value: "5% cash back" },
      { icon: "key" as const, value: "2x pts over $300" },
      { icon: "link" as const, value: "10 pts/dollar" },
      { icon: "tag" as const, value: "10% off $150 or more" },
    ],
  },
];

export default function StackUp() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    categories: "all",
    features: "",
  });
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [favoritedStores, setFavoritedStores] = useState<Set<string>>(
    new Set(),
  );

  const handleFavoriteToggle = (storeId: string) => {
    const newFavorites = new Set(favoritedStores);
    if (newFavorites.has(storeId)) {
      newFavorites.delete(storeId);
    } else {
      newFavorites.add(storeId);
    }
    setFavoritedStores(newFavorites);
  };

  const handleFavoritesFilterToggle = () => {
    setShowFavoritesOnly(!showFavoritesOnly);
  };

  // Filter stores based on search and filters
  const filteredStores = STORES.filter((store) => {
    const matchesSearch = store.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesFavorites =
      !showFavoritesOnly || favoritedStores.has(store.id);

    return matchesSearch && matchesFavorites;
  });

  return (
    <div className="flex w-full min-h-screen bg-white">
      <Sidebar />

      <main className="flex flex-col flex-1 items-center pt-[60px] px-4 gap-6">
        <div className="w-full max-w-[800px] flex flex-col gap-6">
          {/* Header */}
          <div className="flex items-center justify-between w-full">
            <h1 className="text-black font-bold text-2xl leading-[120%] tracking-[-0.48px]">
              Stack up
            </h1>
            <div className="flex items-center justify-center px-2 py-1 gap-2.5 rounded bg-[#EDEDED]">
              <span className="text-black font-bold text-base leading-[140%]">
                Redeem $80.50
              </span>
            </div>
          </div>

          {/* Search and Filters */}
          <StoreFilters
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            filters={filters}
            onFiltersChange={setFilters}
            onFavoritesToggle={handleFavoritesFilterToggle}
            showFavoritesOnly={showFavoritesOnly}
          />

          {/* Results Header */}
          <div className="flex items-start gap-4">
            <span className="text-black font-bold text-base leading-[140%]">
              Results
            </span>
            <span className="text-black font-normal text-base leading-[140%]">
              {filteredStores.length} stores
            </span>
          </div>

          {/* Store Grid */}
          <div className="flex flex-wrap items-start gap-4 w-full">
            {filteredStores.map((store) => (
              <StoreCard
                key={store.id}
                store={store}
                onFavoriteToggle={handleFavoriteToggle}
                isFavorited={favoritedStores.has(store.id)}
              />
            ))}

            {filteredStores.length === 0 && (
              <div className="flex items-center justify-center w-full py-12">
                <p className="text-gray-500 text-base">
                  {showFavoritesOnly
                    ? "No favorite stores found. Add some stores to your favorites first!"
                    : "No stores found matching your search criteria."}
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

import { useState } from "react";
import { SearchFilters } from "../components/SearchFilters";
import { CreditCardList } from "../components/CreditCardList";
import { Sidebar } from "../components/Sidebar";

export default function Explore() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    creditScore: "",
    cardFeatures: "",
    annualFee: "",
    categoryRewards: "",
    cardType: "",
  });

  return (
    <div className="flex w-full h-screen bg-white">
      <Sidebar />
      <div className="flex-1 flex flex-col items-center pt-[60px] px-4 overflow-y-auto">
        <div className="w-full max-w-[861px] flex flex-col gap-6">
          {/* Header */}
          <div className="flex items-center justify-between w-full">
            <h1 className="text-black font-bold text-2xl leading-[120%] tracking-[-0.48px]">
              Explore credit cards
            </h1>
            <button className="text-black font-bold text-base leading-[140%] hover:underline">
              Advertiser disclosure
            </button>
          </div>

          {/* Search and Filters */}
          <SearchFilters
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            filters={filters}
            onFiltersChange={setFilters}
          />

          {/* Results Header */}
          <div className="flex items-start gap-4">
            <span className="text-black font-bold text-base leading-[140%]">
              Results
            </span>
            <span className="text-black font-normal text-base leading-[140%]">
              25 Cards
            </span>
          </div>

          {/* Credit Cards List */}
          <CreditCardList />
        </div>
      </div>
    </div>
  );
}

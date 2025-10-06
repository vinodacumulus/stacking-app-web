import { useState } from "react";
import { X, TrendingUp, Heart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SearchFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  filters: {
    creditScore: string;
    cardFeatures: string;
    annualFee: string;
    categoryRewards: string;
    cardType: string;
  };
  onFiltersChange: (filters: any) => void;
}

export function SearchFilters({
  searchQuery,
  onSearchChange,
  filters,
  onFiltersChange,
}: SearchFiltersProps) {
  const handleFilterChange = (key: string, value: string) => {
    onFiltersChange({
      ...filters,
      [key]: value,
    });
  };

  const clearSearch = () => {
    onSearchChange("");
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Search Bar */}
      <div className="relative w-full">
        <Input
          type="text"
          placeholder="Search for a card"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full h-12 px-4 rounded-full border border-stack-border-default bg-white text-base"
        />
        {searchQuery && (
          <button
            onClick={clearSearch}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1"
          >
            <X size={16} className="text-stack-text-default" />
          </button>
        )}
      </div>

      {/* Filters Row */}
      <div className="flex flex-wrap items-center gap-4 w-full">
        {/* Credit Score Filter */}
        <Select
          value={filters.creditScore}
          onValueChange={(value) => handleFilterChange("creditScore", value)}
        >
          <SelectTrigger className="min-w-[240px] h-10 px-4 border border-stack-border-default rounded-md">
            <SelectValue placeholder="Credit score" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="excellent">Excellent (750+)</SelectItem>
            <SelectItem value="good">Good (670-749)</SelectItem>
            <SelectItem value="fair">Fair (580-669)</SelectItem>
            <SelectItem value="poor">Poor (below 580)</SelectItem>
          </SelectContent>
        </Select>

        {/* Card Features Filter */}
        <Select
          value={filters.cardFeatures}
          onValueChange={(value) => handleFilterChange("cardFeatures", value)}
        >
          <SelectTrigger className="w-[240px] h-10 px-4 border border-stack-border-default rounded-md">
            <SelectValue placeholder="Card features" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="cashback">Cash Back</SelectItem>
            <SelectItem value="travel">Travel Rewards</SelectItem>
            <SelectItem value="gas">Gas Rewards</SelectItem>
            <SelectItem value="dining">Dining Rewards</SelectItem>
          </SelectContent>
        </Select>

        {/* Annual Fee Filter */}
        <Select
          value={filters.annualFee}
          onValueChange={(value) => handleFilterChange("annualFee", value)}
        >
          <SelectTrigger className="w-[240px] h-10 px-4 border border-stack-border-default rounded-md">
            <SelectValue placeholder="Annual fee" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none">No Annual Fee</SelectItem>
            <SelectItem value="low">$1 - $99</SelectItem>
            <SelectItem value="medium">$100 - $299</SelectItem>
            <SelectItem value="high">$300+</SelectItem>
          </SelectContent>
        </Select>

        {/* Category Rewards Filter */}
        <Select
          value={filters.categoryRewards}
          onValueChange={(value) =>
            handleFilterChange("categoryRewards", value)
          }
        >
          <SelectTrigger className="w-[240px] h-10 px-4 border border-stack-border-default rounded-md">
            <SelectValue placeholder="Category rewards" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="rotating">Rotating Categories</SelectItem>
            <SelectItem value="fixed">Fixed Categories</SelectItem>
            <SelectItem value="flat">Flat Rate</SelectItem>
          </SelectContent>
        </Select>

        {/* Card Type Filter */}
        <Select
          value={filters.cardType}
          onValueChange={(value) => handleFilterChange("cardType", value)}
        >
          <SelectTrigger className="min-w-[240px] h-10 px-4 border border-stack-border-default rounded-md">
            <SelectValue placeholder="Card type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="visa">Visa</SelectItem>
            <SelectItem value="mastercard">Mastercard</SelectItem>
            <SelectItem value="amex">American Express</SelectItem>
            <SelectItem value="discover">Discover</SelectItem>
          </SelectContent>
        </Select>

        {/* Action Buttons */}
        <Button
          variant="outline"
          className="flex items-center gap-2 px-3 py-3 h-10 border border-stack-border-default rounded-md"
        >
          <TrendingUp size={16} className="text-stack-text-default" />
          <span className="text-stack-text-default font-normal text-base">
            Max Stack
          </span>
        </Button>

        <Button
          variant="outline"
          className="flex items-center gap-2 px-3 py-3 h-10 border border-stack-border-default rounded-md"
        >
          <Heart size={16} className="text-stack-text-neutral" />
          <span className="text-stack-text-neutral font-normal text-base">
            Favorites
          </span>
        </Button>
      </div>
    </div>
  );
}

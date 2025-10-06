import { useState } from "react";
import { Heart, DollarSign, CreditCard, Key, Link, Tag } from "lucide-react";

interface StoreBenefit {
  icon: "dollar" | "credit-card" | "key" | "link" | "tag";
  value: string;
}

interface Store {
  id: string;
  name: string;
  image: string;
  benefits: StoreBenefit[];
}

interface StoreCardProps {
  store: Store;
  onFavoriteToggle?: (storeId: string) => void;
  isFavorited?: boolean;
}

export function StoreCard({
  store,
  onFavoriteToggle,
  isFavorited = false,
}: StoreCardProps) {
  const [localFavorited, setLocalFavorited] = useState(isFavorited);

  const handleFavoriteClick = () => {
    setLocalFavorited(!localFavorited);
    onFavoriteToggle?.(store.id);
  };

  const getBenefitIcon = (iconType: StoreBenefit["icon"]) => {
    const iconProps = { size: 20, className: "text-gray-500" };

    switch (iconType) {
      case "dollar":
        return <DollarSign {...iconProps} />;
      case "credit-card":
        return <CreditCard {...iconProps} />;
      case "key":
        return <Key {...iconProps} />;
      case "link":
        return <Link {...iconProps} />;
      case "tag":
        return <Tag {...iconProps} />;
      default:
        return <DollarSign {...iconProps} />;
    }
  };

  return (
    <div className="flex flex-col w-full min-w-[240px] max-w-[250px] p-4 gap-4 rounded-md border border-gray-300 bg-white">
      {/* Header with image and favorite button */}
      <div className="flex flex-col gap-2.5">
        <div className="flex h-[45px] items-center justify-center bg-gray-100 rounded">
          <img
            src={store.image}
            alt={`${store.name} logo`}
            className="h-full object-contain"
          />
        </div>
        <button
          onClick={handleFavoriteClick}
          className="self-end p-1"
          aria-label={
            localFavorited ? "Remove from favorites" : "Add to favorites"
          }
        >
          <Heart
            size={18}
            className={`${
              localFavorited ? "fill-red-500 stroke-red-500" : "stroke-gray-500"
            } transition-colors`}
          />
        </button>
      </div>

      {/* Store name and benefits */}
      <div className="flex flex-col gap-3">
        <h3 className="text-base font-bold text-gray-900 leading-[140%]">
          {store.name}
        </h3>

        {/* Benefits list */}
        <div className="flex flex-col gap-3">
          {store.benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="flex-1">{getBenefitIcon(benefit.icon)}</div>
              <div className="flex-1 text-right">
                <span className="text-sm font-bold text-gray-700 leading-[140%]">
                  {benefit.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* See full details button */}
      <button className="flex items-center justify-center w-full px-2 py-2 rounded-md border border-black bg-black text-white hover:bg-black/90 transition-colors">
        <span className="text-base font-normal leading-[100%]">
          See full details
        </span>
      </button>
    </div>
  );
}

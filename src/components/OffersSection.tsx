import { Star, DollarSign, Link, CreditCard, Key, Percent } from "lucide-react";

interface Offer {
  id: string;
  name: string;
  cashBack: string;
  image: string;
}

const OFFERS: Offer[] = [
  {
    id: "stubhub",
    name: "Stubhub",
    cashBack: "Earn up to 5% Stack cash",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/810caf0b7fbadab55d58d6231ae93b01a38582dd?width=432",
  },
  {
    id: "marriott",
    name: "Marriott",
    cashBack: "Earn up to 5% Stack cash",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/810caf0b7fbadab55d58d6231ae93b01a38582dd?width=432",
  },
  {
    id: "expedia",
    name: "Expedia",
    cashBack: "Earn up to 5% Stack cash",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/810caf0b7fbadab55d58d6231ae93b01a38582dd?width=432",
  },
  {
    id: "marriott-2",
    name: "Marriott",
    cashBack: "Earn up to 5% Stack cash",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/810caf0b7fbadab55d58d6231ae93b01a38582dd?width=432",
  },
];

interface OfferCardProps {
  offer: Offer;
}

function OfferCard({ offer }: OfferCardProps) {
  return (
    <div className="flex flex-col min-w-[240px] p-3 gap-4 rounded-stack-md border border-stack-border-default bg-white">
      {/* Image */}
      <div
        className="flex h-14 p-1 flex-col items-end justify-end rounded-stack-md bg-stack-bg-tertiary"
        style={{
          backgroundImage: `url(${offer.image})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Star size={20} className="text-stack-text-secondary" />
      </div>

      {/* Content */}
      <div className="flex flex-col w-full gap-2">
        <span className="text-stack-text-default font-sans text-base font-bold leading-[140%]">
          {offer.name}
        </span>

        <span className="text-stack-text-secondary font-sans text-sm font-normal leading-[140%]">
          {offer.cashBack}
        </span>

        {/* Icons */}
        <div className="flex items-start gap-0.5">
          <div className="flex p-1 justify-center items-start rounded-full bg-stack-bg-tertiary">
            <DollarSign size={16} className="text-[#5A5A5A]" />
          </div>
          <div className="flex p-1 justify-center items-start rounded-full bg-stack-bg-tertiary">
            <Link size={16} className="text-[#5A5A5A]" />
          </div>
          <div className="flex p-1 justify-center items-start rounded-full bg-stack-bg-tertiary">
            <CreditCard size={16} className="text-[#5A5A5A]" />
          </div>
          <div className="flex p-1 justify-center items-start rounded-full bg-stack-bg-tertiary">
            <Key size={16} className="text-[#5A5A5A]" />
          </div>
          <div className="flex p-1 justify-center items-start rounded-full bg-stack-bg-tertiary">
            <Percent size={16} className="text-[#5A5A5A]" />
          </div>
        </div>

        {/* Button */}
        <button className="flex p-2 justify-center items-center w-full rounded-stack-md border border-stack-border-brand bg-stack-bg-brand text-stack-text-on-brand">
          <span className="font-sans text-base font-normal leading-[100%]">
            See full details
          </span>
        </button>
      </div>
    </div>
  );
}

function ReferralCard() {
  return (
    <div className="flex min-w-[240px] p-4 items-start gap-2 rounded-stack-md bg-white">
      <div className="flex flex-col justify-between items-start flex-1 min-w-[160px] gap-4">
        <div className="flex flex-col items-start gap-2 w-full">
          <h3 className="text-stack-text-default font-sans text-2xl font-bold leading-[120%] tracking-[-0.48px] w-full">
            Give $20, Get $20
          </h3>
          <p className="text-stack-text-secondary font-sans text-base font-normal leading-[140%] w-full">
            Refer your friend to Stack, and both of you will earn $20 value
          </p>
        </div>

        <button className="flex p-3 justify-center items-center gap-2 rounded-stack-md border border-stack-border-brand bg-stack-bg-brand text-stack-text-on-brand">
          <span className="font-sans text-base font-normal leading-[100%]">
            Refer a friend
          </span>
        </button>
      </div>
    </div>
  );
}

export function OffersSection() {
  return (
    <div className="flex flex-col p-4 gap-7 w-full rounded-stack-md bg-[#DEDEDE]">
      {/* Header */}
      <div className="flex justify-between items-center w-full">
        <h2 className="text-black font-sans text-2xl font-bold leading-[120%] tracking-[-0.48px]">
          Check out offers now, get Stack cash back
        </h2>
        <button className="text-black font-sans text-base font-bold leading-[140%] hover:underline">
          See all
        </button>
      </div>

      {/* Cards */}
      <div className="flex items-center gap-4 w-full overflow-x-auto">
        <ReferralCard />
        {OFFERS.map((offer) => (
          <OfferCard key={offer.id} offer={offer} />
        ))}
      </div>
    </div>
  );
}

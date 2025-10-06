import { CreditCardItem } from "./CreditCardItem";

// Mock data for credit cards
const creditCards = [
  {
    id: "1",
    name: "Chase Freedom Unlimited",
    maxStack: "$100 Max Stack",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/6c1b02d30a3a74c6ad0fe891df29d0450b04d60e?width=971",
    annualFee: "$95",
    rewardsRate: "2-5x",
    introOffer: "75,000 pts",
    apr: "18.99%-28.49%",
  },
  {
    id: "2",
    name: "Chase Freedom Unlimited",
    maxStack: "$100 Max Stack",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/6c1b02d30a3a74c6ad0fe891df29d0450b04d60e?width=971",
    annualFee: "$95",
    rewardsRate: "2-5x",
    introOffer: "75,000 pts",
    apr: "18.99%-28.49%",
  },
  {
    id: "3",
    name: "Chase Freedom Unlimited",
    maxStack: "$100 Max Stack",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/6c1b02d30a3a74c6ad0fe891df29d0450b04d60e?width=971",
    annualFee: "$95",
    rewardsRate: "2-5x",
    introOffer: "75,000 pts",
    apr: "18.99%-28.49%",
  },
  {
    id: "4",
    name: "Chase Freedom Unlimited",
    maxStack: "$100 Max Stack",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/6c1b02d30a3a74c6ad0fe891df29d0450b04d60e?width=971",
    annualFee: "$95",
    rewardsRate: "2-5x",
    introOffer: "75,000 pts",
    apr: "18.99%-28.49%",
  },
  {
    id: "5",
    name: "Chase Freedom Unlimited",
    maxStack: "$100 Max Stack",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/6c1b02d30a3a74c6ad0fe891df29d0450b04d60e?width=971",
    annualFee: "$95",
    rewardsRate: "2-5x",
    introOffer: "75,000 pts",
    apr: "18.99%-28.49%",
  },
  {
    id: "6",
    name: "Chase Freedom Unlimited",
    maxStack: "$100 Max Stack",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/6c1b02d30a3a74c6ad0fe891df29d0450b04d60e?width=971",
    annualFee: "$95",
    rewardsRate: "2-5x",
    introOffer: "75,000 pts",
    apr: "18.99%-28.49%",
  },
];

export function CreditCardList() {
  return (
    <div className="flex flex-col gap-4 w-full">
      {creditCards.map((card) => (
        <CreditCardItem key={card.id} card={card} />
      ))}
    </div>
  );
}

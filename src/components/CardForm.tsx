import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Plus, Check } from "lucide-react";
import { StackLogo } from "./StackLogo";

interface CreditCard {
  id: string;
  name: string;
  image: string;
  isAdded: boolean;
}

const CREDIT_CARDS: CreditCard[] = [
  {
    id: "blue-cash-everyday",
    name: "Blue Cash Everyday Card",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/ed524d274a04f1631db575a14c0695db1d5d6578?width=798",
    isAdded: false,
  },
  {
    id: "chase-freedom-unlimited",
    name: "Chase Freedom Unlimited",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/472909a0edd8f3ceb62c6e8c8ccf167775aea480?width=798",
    isAdded: true,
  },
  {
    id: "citi-diamond-preferred",
    name: "Citi Diamond Preferred Card",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/c0c70e7e4158ace5466ee2ee85bc231f66535488?width=798",
    isAdded: false,
  },
  {
    id: "chase-sapphire-preferred",
    name: "Chase Sapphire Preferred Card",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/3b66fa38a8ebff5f1e704624ad7587c35fa9abd2?width=798",
    isAdded: false,
  },
  {
    id: "capital-one-venture",
    name: "Capital One VentureOne Rewards Card",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/a4f7224aa37098910b1433b39a2576fa8578cd59?width=798",
    isAdded: false,
  },
];

export function CardForm() {
  const navigate = useNavigate();
  const [cards, setCards] = useState<CreditCard[]>(CREDIT_CARDS);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCards = cards.filter((card) =>
    card.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const toggleCard = (cardId: string) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === cardId ? { ...card, isAdded: !card.isAdded } : card,
      ),
    );
  };

  const handleBack = () => {
    navigate("/onboarding/deals");
  };

  const handleSkip = () => {
    // Skip to next step or complete onboarding
    navigate("/");
  };

  const handleContinue = () => {
    console.log(
      "Selected cards:",
      cards.filter((card) => card.isAdded),
    );
    navigate("/onboarding/memberships");
  };

  return (
    <div className="flex flex-col items-center gap-8 max-w-[618px] w-full">
      <StackLogo width={180} height={42} />

      <div className="flex flex-col items-start gap-2 w-full">
        <h1 className="text-black font-sans text-2xl font-bold leading-[120%] tracking-[-0.48px]">
          Add cards to create your wallet
        </h1>
        <p className="text-black font-sans text-base font-normal leading-[140%] w-full">
          Add your cards to your wallet to see how your benefits and loyalty
          programs stack up. Enter your credit card numbers later when you're
          ready.
        </p>
      </div>

      <div className="flex items-center gap-2 w-full px-4 py-3 rounded-full border border-stack-border-default bg-white">
        <input
          type="text"
          placeholder="Search for your card"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 text-stack-text-tertiary font-sans text-base font-normal leading-[100%] bg-transparent border-none outline-none placeholder:text-stack-text-tertiary"
        />
        <Search size={16} className="text-black" />
      </div>

      <div className="flex flex-col gap-4 w-full">
        {filteredCards.map((card) => (
          <div
            key={card.id}
            className="flex items-center gap-2 p-4 rounded-stack-md border border-stack-border-default bg-white w-full"
          >
            <div className="relative w-[75px] h-[46px] flex-shrink-0">
              <div className="absolute inset-0 rounded-[4px] bg-[#F37B7B]" />
              <img
                src={card.image}
                alt={card.name}
                className="absolute inset-0 w-full h-full object-cover rounded-[4px]"
                style={{
                  transform: "scale(1.2)",
                  transformOrigin: "center",
                }}
              />
            </div>

            <div className="flex-1 text-stack-text-default font-sans text-base font-bold leading-[140%]">
              {card.name}
            </div>

            <button
              onClick={() => toggleCard(card.id)}
              className={`flex items-center gap-2 px-3 py-3 rounded-stack-md border transition-colors ${
                card.isAdded
                  ? "border-stack-border-brand bg-stack-bg-brand text-stack-text-on-brand"
                  : "border-stack-border-secondary bg-stack-bg-tertiary text-stack-text-default"
              }`}
            >
              {card.isAdded ? (
                <>
                  <Check size={16} />
                  <span className="font-sans text-base font-normal leading-[100%]">
                    Added
                  </span>
                </>
              ) : (
                <>
                  <Plus size={16} />
                  <span className="font-sans text-base font-normal leading-[100%]">
                    Add
                  </span>
                </>
              )}
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center w-full">
        <button
          onClick={handleBack}
          className="px-3 py-3 rounded-stack-md text-stack-text-secondary font-sans text-base font-normal leading-[100%] hover:bg-stack-bg-tertiary transition-colors"
        >
          Back
        </button>

        <div className="flex items-center gap-4">
          <button
            onClick={handleSkip}
            className="px-3 py-3 rounded-stack-md text-stack-text-secondary font-sans text-base font-normal leading-[100%] hover:bg-stack-bg-tertiary transition-colors"
          >
            Skip
          </button>
          <button
            onClick={handleContinue}
            className="flex px-6 py-3 justify-center items-center rounded-stack-md border border-stack-border-brand bg-stack-bg-brand text-stack-text-on-brand font-sans text-base font-normal leading-[100%] hover:bg-opacity-90 transition-colors"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

import { Button } from "@/components/ui/button";

interface CreditCard {
  id: string;
  name: string;
  maxStack: string;
  image: string;
  annualFee: string;
  rewardsRate: string;
  introOffer: string;
  apr: string;
}

interface CreditCardItemProps {
  card: CreditCard;
}

export function CreditCardItem({ card }: CreditCardItemProps) {
  const handleApplyNow = () => {
    console.log("Apply now clicked for:", card.name);
    // Handle apply now action
  };

  return (
    <div className="flex flex-col gap-2 w-full p-4 rounded-md border border-stack-border-default bg-white">
      <div className="flex items-center gap-3 w-full">
        {/* Card Image */}
        <div className="relative w-[91px] h-14 flex-shrink-0">
          <img
            src={card.image}
            alt={card.name}
            className="absolute inset-0 w-full h-full object-cover rounded-[4px]"
          />
        </div>

        {/* Card Content */}
        <div className="flex flex-col justify-center gap-2 flex-1">
          {/* Card Title and Badge */}
          <div className="flex items-center gap-2.5 w-full">
            <h3 className="text-stack-text-default font-bold text-xl leading-[120%]">
              {card.name}
            </h3>
            <div className="flex px-1 py-0.5 justify-center items-center rounded-[4px] bg-[#DEEBF9]">
              <span className="text-stack-text-default font-bold text-base leading-[140%]">
                {card.maxStack}
              </span>
            </div>
          </div>

          {/* Card Details */}
          <div className="flex items-center gap-1">
            <div className="flex items-center gap-2">
              <span className="text-stack-text-secondary font-bold text-sm leading-[140%]">
                Annual fee
              </span>
              <span className="text-stack-text-default font-bold text-sm leading-[140%]">
                {card.annualFee}
              </span>
            </div>

            <span className="text-stack-border-tertiary font-normal text-base leading-[140%]">
              |
            </span>

            <div className="flex items-center gap-2">
              <span className="text-stack-text-secondary font-bold text-sm leading-[140%]">
                Rewards rate
              </span>
              <span className="text-stack-text-default font-bold text-sm leading-[140%]">
                {card.rewardsRate}
              </span>
            </div>

            <span className="text-stack-border-tertiary font-normal text-base leading-[140%]">
              |
            </span>

            <div className="flex items-center gap-2">
              <span className="text-stack-text-secondary font-bold text-sm leading-[140%]">
                Intro offer
              </span>
              <span className="text-stack-text-default font-bold text-sm leading-[140%]">
                {card.introOffer}
              </span>
            </div>

            <span className="text-stack-border-tertiary font-normal text-base leading-[140%]">
              |
            </span>

            <div className="flex items-center gap-2">
              <span className="text-stack-text-secondary font-bold text-sm leading-[140%]">
                APR
              </span>
              <span className="text-stack-text-default font-bold text-sm leading-[140%]">
                {card.apr}
              </span>
            </div>
          </div>
        </div>

        {/* Apply Button */}
        <Button
          onClick={handleApplyNow}
          className="px-3 py-3 rounded-md border border-black bg-stack-brand text-stack-brand-foreground hover:bg-stack-brand/90"
        >
          <span className="font-normal text-base leading-[100%]">
            Apply now
          </span>
        </Button>
      </div>
    </div>
  );
}

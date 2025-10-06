import { DollarSign, Info } from "lucide-react";

interface CreditCardInfoProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
}

function CreditCardInfo({
  icon,
  title,
  description,
  buttonText,
  onButtonClick,
}: CreditCardInfoProps) {
  return (
    <div className="flex min-w-[240px] p-6 items-start gap-6 flex-1 rounded-stack-md border border-stack-border-default bg-white">
      {icon}

      <div className="flex flex-col items-start gap-4 flex-1 min-w-[160px]">
        <div className="flex flex-col items-start gap-2 w-full">
          <h3 className="text-stack-text-default font-sans text-2xl font-bold leading-[120%] tracking-[-0.48px] w-full">
            {title}
          </h3>
          <p className="text-stack-text-secondary font-sans text-base font-normal leading-[140%] w-full">
            {description}
          </p>
        </div>

        <button
          onClick={onButtonClick}
          className="flex p-3 justify-center items-center gap-2 rounded-stack-md border border-stack-border-brand bg-stack-bg-brand text-stack-text-on-brand"
        >
          <span className="font-sans text-base font-normal leading-[100%]">
            {buttonText}
          </span>
        </button>
      </div>
    </div>
  );
}

function SponsoredAd() {
  return (
    <div className="flex h-[200px] p-4 flex-col justify-center items-start gap-2 w-full rounded-stack-md bg-[#DEDEDE]">
      <div className="flex items-center gap-2">
        <span className="text-stack-text-secondary font-sans text-sm font-bold leading-[140%]">
          Sponsored ad
        </span>
        <Info size={16} className="text-stack-text-secondary" />
      </div>
      <div className="flex items-center gap-2.5 flex-1 w-full rounded-stack-md bg-white"></div>
    </div>
  );
}

export function CreditCardsSection() {
  const handleConnectCard = () => {
    console.log("Connect credit card clicked");
    // Handle navigation or action
  };

  const handleFindCard = () => {
    console.log("Find your fit clicked");
    // Handle navigation or action
  };

  return (
    <div className="flex flex-col gap-7 w-full">
      {/* Main Cards Section */}
      <div className="flex flex-col p-4 gap-7 w-full rounded-stack-md bg-[#DEDEDE]">
        {/* Header */}
        <div className="flex justify-between items-center w-full">
          <h2 className="text-black font-sans text-2xl font-bold leading-[120%] tracking-[-0.48px]">
            Credit cards
          </h2>
          <button className="text-black font-sans text-base font-bold leading-[140%] hover:underline">
            Discover more cards
          </button>
        </div>

        {/* Cards */}
        <div className="flex items-center gap-4 w-full">
          <CreditCardInfo
            icon={<DollarSign size={32} className="text-black flex-shrink-0" />}
            title="Already have a credit card?"
            description="Earn more by using every perk. From airline miles to latte stamps—don't let a single reward go unused. We centralize your loyalty programs, cash back, and points so you can spend smarter and redeem faster."
            buttonText="Connect my credit card"
            onButtonClick={handleConnectCard}
          />

          <CreditCardInfo
            icon={<DollarSign size={32} className="text-black flex-shrink-0" />}
            title="One card. Endless ways to win."
            description="Track your spending, earn rewards, and unlock personalized perks—all from a single card that adapts to how (and where) you live. Whether you're budget-conscious, points-obsessed, or just want more value for your swipe—it's all here."
            buttonText="Find your fit"
            onButtonClick={handleFindCard}
          />
        </div>
      </div>

      {/* Sponsored Ad */}
      <SponsoredAd />
    </div>
  );
}

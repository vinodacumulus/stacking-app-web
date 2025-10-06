import React from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

interface HeroProps {
  className?: string;
}

export function Hero({ className }: HeroProps) {
  const navigate = useNavigate();

  const handleCTA = () => {
    navigate("/onboarding");
  };

  return (
    <section
      className={cn(
        "flex w-full px-6 py-40 lg:px-6 lg:py-40 items-center gap-8 bg-white bg-opacity-80",
        className,
      )}
    >
      <div className="flex flex-col lg:flex-row items-center gap-8 w-full max-w-7xl mx-auto">
        {/* Illustration */}
        <div className="flex-shrink-0">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/bc36d96953cf22032272f67e5008f31845545245?width=800"
            alt="Person using laptop for online shopping with credit cards and shopping bags"
            className="w-96 h-96 lg:w-[400px] lg:h-[400px] object-contain"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center items-start gap-8 flex-1 text-center lg:text-left">
          {/* Title and Subtitle */}
          <div className="flex flex-col items-start gap-2 w-full">
            <h1 className="w-full text-stack-text-default font-sans text-4xl md:text-5xl lg:text-6xl font-bold leading-[120%] tracking-[-1.8px]">
              Meet your money's new best friend: Stack
            </h1>
            <p className="w-full text-stack-text-default-secondary font-sans text-xl md:text-2xl lg:text-[32px] font-normal leading-[120%] mt-2">
              All your perks, cash back, and spend insights—finally in one
              place.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center lg:justify-start items-center">
            <button
              onClick={handleCTA}
              className="flex px-3 py-3 justify-center items-center gap-2 rounded-stack-md border border-stack-brand bg-stack-brand text-stack-brand-foreground font-sans text-base font-normal leading-[100%] hover:bg-opacity-90 transition-colors"
            >
              Turn points into power moves
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { FeatureCard } from "./FeatureCard";
import { cn } from "@/lib/utils";

interface FeaturesProps {
  className?: string;
}

export function Features({ className }: FeaturesProps) {
  const features = [
    {
      title: "Smart stacking",
      description:
        "We detect eligible perks, rewards, and cash back before you check out. No more missed deals—or browser extension chaos.",
      imageUrl:
        "https://api.builder.io/api/v1/image/assets/TEMP/fc115023fef9161ab85e908f46b0e5b48f372b09?width=400",
      imageAlt: "E-wallet illustration with cards and money",
    },
    {
      title: "Spend Sync",
      description:
        "From subscriptions to splurges, keep tabs on your money like the financially fluent adult you are (or are becoming).",
      imageUrl:
        "https://api.builder.io/api/v1/image/assets/TEMP/c373b2b32d55aa8979fbfd7a19490aac432e0984?width=400",
      imageAlt:
        "In-app purchases illustration with phone and payment interface",
    },
    {
      title: "Auto magic savings",
      description:
        "We surface the rewards you forgot you had—loyalty points, gift cards, cash back—and make them easy to use before they expire.",
      imageUrl:
        "https://api.builder.io/api/v1/image/assets/TEMP/a4e44d5a0789d2455158164898029cb725f50789?width=400",
      imageAlt: "Online savings illustration with piggy bank and money",
    },
    {
      title: "Bank-level security",
      description:
        "We treat your data like a vault does its gold. Private, protected, and never sold.",
      imageUrl:
        "https://api.builder.io/api/v1/image/assets/TEMP/f5d1168d08d4a52bb5958f47b2d4eeae85481aee?width=400",
      imageAlt: "Safe illustration with security elements",
    },
  ];

  return (
    <section
      className={cn(
        "flex w-full px-6 md:px-16 py-16 flex-col items-start gap-12 bg-stack-bg-default",
        className,
      )}
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              imageUrl={feature.imageUrl}
              imageAlt={feature.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

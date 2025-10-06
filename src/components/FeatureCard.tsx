import React from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  className?: string;
}

export function FeatureCard({
  title,
  description,
  imageUrl,
  imageAlt,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row items-start gap-6 min-w-[240px] flex-1",
        className,
      )}
    >
      {/* Image */}
      <div className="flex-shrink-0">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-48 h-48 md:w-[200px] md:h-[200px] object-contain"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col items-start gap-4 flex-1 min-w-[160px]">
        <div className="flex flex-col items-start gap-2 w-full">
          <h3 className="w-full text-stack-text-default font-sans text-2xl font-bold leading-[120%] tracking-[-0.48px]">
            {title}
          </h3>
          <p className="w-full text-stack-text-default-secondary font-sans text-base font-normal leading-[140%]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

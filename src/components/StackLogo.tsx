import React from "react";

interface StackLogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export function StackLogo({
  className = "",
  width = 180,
  height = 42,
}: StackLogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 618 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <path
          d="M0 17.4984H35V17.9293C34.7717 27.3973 27.0243 35 17.5016 35C7.97896 35 0 27.1658 0 17.4984Z"
          fill="#38A1FF"
        />
        <path
          d="M6.26172 6.25516H28.7417V6.53174C28.5938 12.6132 23.6186 17.4952 17.5049 17.4952C11.3913 17.4952 6.26172 12.4653 6.26172 6.25516Z"
          fill="#38A1FF"
        />
        <path
          d="M11.2466 0H23.7569V0.154369C23.6765 3.53763 20.9075 6.25838 17.5017 6.25838C14.096 6.25838 11.2466 3.45401 11.2466 0Z"
          fill="#38A1FF"
        />
        <text
          x="45"
          y="29"
          fill="black"
          fontFamily="Inter"
          fontSize="32"
          fontWeight="600"
          letterSpacing="-0.02em"
        >
          Stack
        </text>
      </svg>
    </div>
  );
}

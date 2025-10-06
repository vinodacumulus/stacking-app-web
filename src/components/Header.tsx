import React from "react";
import { useNavigate } from "react-router-dom";
import { StackLogo } from "./StackLogo";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Handle sign in
    console.log("Sign in clicked");
  };

  const handleGetStarted = () => {
    navigate("/onboarding");
  };

  return (
    <header
      className={cn(
        "flex w-full px-8 py-8 items-center gap-6 border-b border-stack-border-default bg-stack-bg-default",
        className,
      )}
    >
      {/* Logo */}
      <div className="flex items-center">
        <StackLogo width={180} height={42} />
      </div>

      {/* Navigation - Empty for now but takes up flex space */}
      <div className="flex-1 flex justify-center items-center h-8">
        {/* Navigation pills would go here */}
      </div>

      {/* Auth Buttons */}
      <div className="flex items-center gap-3">
        <button
          onClick={handleSignIn}
          className="flex px-3 py-3 justify-center items-center gap-2 rounded-stack-md text-stack-text-neutral font-sans text-base font-normal leading-[100%] hover:bg-gray-100 transition-colors"
        >
          Sign in
        </button>

        <button
          onClick={handleGetStarted}
          className="flex px-3 py-3 justify-center items-center gap-2 rounded-stack-md border border-stack-brand bg-stack-brand text-stack-brand-foreground font-sans text-base font-normal leading-[100%] hover:bg-opacity-90 transition-colors"
        >
          Get started
        </button>
      </div>
    </header>
  );
}

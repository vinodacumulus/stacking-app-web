import { useNavigate, useLocation } from "react-router-dom";
import { Info } from "lucide-react";
import { StackLogo } from "./StackLogo";

interface NavItemProps {
  label: string;
  isSelected?: boolean;
  onClick?: () => void;
}

function NavItem({ label, isSelected, onClick }: NavItemProps) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-2.5 px-4 py-2 cursor-pointer ${
        isSelected
          ? "border-l-[3px] border-l-black bg-white"
          : "border-l-[3px] border-l-transparent hover:bg-gray-100"
      }`}
    >
      <span className="text-black font-sans text-sm font-normal leading-[140%]">
        {label}
      </span>
    </div>
  );
}

export function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/dashboard" },
    { label: "Wallet", path: "/wallet" },
    { label: "Transactions", path: "/transactions" },
    { label: "Track my Stack", path: "/track" },
    { label: "Explore credit cards", path: "/explore" },
    { label: "Stack up", path: "/stack-up" },
    { label: "Settings", path: "/settings" },
    { label: "Log out", path: "/logout" },
  ];

  const handleNavigation = (path: string) => {
    if (path === "/logout") {
      // Handle logout logic
      navigate("/");
    } else {
      navigate(path);
    }
  };

  return (
    <div className="flex flex-col w-[289px] h-full bg-[#EEE] py-6">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-4 mb-10">
        <StackLogo width={180} height={42} />
      </div>

      {/* Navigation */}
      <div className="flex flex-col flex-1">
        {navItems.map((item) => (
          <NavItem
            key={item.path}
            label={item.label}
            isSelected={location.pathname === item.path}
            onClick={() => handleNavigation(item.path)}
          />
        ))}
      </div>

      {/* Sponsored Ad */}
      <div className="flex flex-col px-4 py-3 gap-1">
        <div className="flex items-center gap-2">
          <span className="text-stack-text-secondary font-sans text-sm font-bold leading-[140%]">
            Sponsored ad
          </span>
          <Info size={16} className="text-stack-text-secondary" />
        </div>
        <div className="h-[303px] rounded-stack-md bg-white"></div>
      </div>
    </div>
  );
}

import { Sidebar } from "./Sidebar";
import { StackTasks } from "./StackTasks";
import { OffersSection } from "./OffersSection";
import { CreditCardsSection } from "./CreditCardsSection";

export function DashboardLayout() {
  return (
    <div className="flex w-full h-screen bg-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1 p-6 pt-[60px] gap-4 overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center w-full">
          <h1 className="text-black font-sans text-2xl font-bold leading-[120%] tracking-[-0.48px]">
            Welcome Bindu!
          </h1>
          <div className="flex items-center gap-2.5">
            <div className="flex px-2 py-1 justify-center items-center gap-2.5 rounded-[4px] bg-[#EDEDED]">
              <span className="text-black font-sans text-base font-bold leading-[140%]">
                Redeem $80.50
              </span>
            </div>
          </div>
        </div>

        {/* Stack Tasks */}
        <StackTasks />

        {/* Offers Section */}
        <OffersSection />

        {/* Credit Cards Section */}
        <CreditCardsSection />
      </div>
    </div>
  );
}

import { Sidebar } from "@/components/Sidebar";
import { Input } from "@/components/ui/input";
import { X, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StackReward {
  type: string;
  value: string;
  isLink?: boolean;
}

interface Transaction {
  id: string;
  date: string;
  storeName: string;
  storeType: string;
  amount: string;
  stackRewards: StackReward[];
  utilizationScore: number; // out of 4
}

const mockTransactions: Transaction[] = [
  {
    id: "1",
    date: "Mar 30, 2025",
    storeName: "Marriott",
    storeType: "Hotel",
    amount: "$89.99",
    stackRewards: [
      { type: "Cash", value: "$4.50" },
      { type: "Credit", value: "Alaska - 180 pts" },
      { type: "Loyalty", value: "180/180 pts" },
      { type: "Coupons", value: "$0.00/$5.00" },
    ],
    utilizationScore: 3,
  },
  {
    id: "2",
    date: "Mar 30, 2025",
    storeName: "Amazon",
    storeType: "Shopping",
    amount: "$219.99",
    stackRewards: [
      { type: "Cash", value: "$4.50" },
      { type: "Credit", value: "Alaska - 180 pts" },
      { type: "Loyalty", value: "Connect loyalty", isLink: true },
      { type: "Coupons", value: "$0.00/$5.00" },
    ],
    utilizationScore: 3,
  },
  {
    id: "3",
    date: "Mar 30, 2025",
    storeName: "IHG Hotels & Resorts",
    storeType: "Hotel",
    amount: "$134.21",
    stackRewards: [
      { type: "Cash", value: "$4.50" },
      { type: "Credit", value: "Link account", isLink: true },
      { type: "Loyalty", value: "Connect loyalty", isLink: true },
      { type: "Coupons", value: "$0.00/$5.00" },
    ],
    utilizationScore: 3,
  },
];

function StarRating({
  score,
  maxStars = 4,
}: {
  score: number;
  maxStars?: number;
}) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: maxStars }, (_, index) => (
        <Star
          key={index}
          size={24}
          className={
            index < score
              ? "fill-[#FCC952] text-[#FCC952]"
              : "text-[#9D9D9D] stroke-2"
          }
        />
      ))}
    </div>
  );
}

function StackRewardsCell({ rewards }: { rewards: StackReward[] }) {
  return (
    <div className="flex flex-col gap-1">
      {rewards.map((reward, index) => (
        <div key={index} className="flex justify-between items-center">
          <span className="text-[#757575] font-bold text-sm">
            {reward.type}
          </span>
          <span
            className={cn(
              "font-bold text-sm",
              reward.isLink ? "text-[#0A0A0A]" : "text-[#1E1E1E]",
            )}
          >
            {reward.value}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function Transactions() {
  return (
    <div className="flex w-full min-h-screen bg-white">
      <Sidebar />
      <main className="flex flex-col flex-1 p-6 pt-[60px] gap-6">
        {/* Header */}
        <header className="flex items-center justify-between w-full">
          <h1 className="text-black font-bold text-2xl leading-[120%] tracking-[-0.48px]">
            Transactions
          </h1>
        </header>

        {/* Content */}
        <div className="flex flex-col gap-6 max-w-[930px]">
          {/* Search */}
          <div className="relative">
            <Input
              placeholder="Search for a store"
              className="w-full px-4 py-3 rounded-full border border-[#D9D9D9] bg-white text-base font-normal"
            />
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <X size={16} className="text-[#1E1E1E]" />
            </button>
          </div>

          {/* Table */}
          <div className="border border-[#D9D9D9] rounded-lg overflow-hidden">
            {/* Table Header */}
            <div className="flex items-center gap-5 px-4 py-3 bg-[#F5F5F5] rounded-t-lg">
              <div className="w-[102px] text-black font-bold text-base">
                Date
              </div>
              <div className="w-[210px] text-black font-bold text-base">
                Store
              </div>
              <div className="w-[114px] text-black font-bold text-base text-right">
                Amount
              </div>
              <div className="w-[213px] text-black font-bold text-base">
                Stack rewards
              </div>
              <div className="flex-1 text-black font-bold text-base text-center">
                Utilization score
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-[#D9D9D9]">
              {mockTransactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-start gap-5 p-4"
                >
                  {/* Date */}
                  <div className="w-[102px] text-[#757575] text-base font-normal">
                    {transaction.date}
                  </div>

                  {/* Store */}
                  <div className="w-[210px] flex flex-col gap-2">
                    <div className="text-[#1E1E1E] font-bold text-base">
                      {transaction.storeName}
                    </div>
                    <div className="text-[#1E1E1E] text-base">
                      {transaction.storeType}
                    </div>
                  </div>

                  {/* Amount */}
                  <div className="w-[114px] flex flex-col items-end">
                    <div className="text-[#1E1E1E] font-bold text-base">
                      {transaction.amount}
                    </div>
                  </div>

                  {/* Stack Rewards */}
                  <div className="w-[213px]">
                    <StackRewardsCell rewards={transaction.stackRewards} />
                  </div>

                  {/* Utilization Score */}
                  <div className="flex-1 flex justify-center">
                    <StarRating score={transaction.utilizationScore} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

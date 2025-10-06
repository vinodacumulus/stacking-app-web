import { Sidebar } from "@/components/Sidebar";
import { WalletEmptyState } from "@/components/WalletEmptyState";

export default function Wallet() {
  return (
    <div className="flex w-full min-h-screen bg-white">
      <Sidebar />
      <main className="flex flex-col flex-1 p-6 pt-[60px] gap-6">
        <header className="flex items-center justify-between w-full">
          <h1 className="text-black font-sans text-2xl font-bold leading-[120%] tracking-[-0.48px]">
            My wallet
          </h1>
        </header>

        <section className="flex w-full justify-center">
          <WalletEmptyState />
        </section>
      </main>
    </div>
  );
}

import { useNavigate } from "react-router-dom";

export function WalletEmptyState() {
  const navigate = useNavigate();

  return (
    <div className="flex w-full max-w-2xl p-10 flex-col items-center gap-9 rounded-md bg-[#F5F5F5] text-center">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/3a466ffde8afb5cdf7da4b254a009849e56a7555?width=600"
        alt="E-wallet illustration with cards and money"
        className="w-60 h-60 object-contain"
      />
      <div className="flex flex-col items-center gap-2 w-full">
        <h2 className="text-black font-sans text-2xl font-bold leading-[120%] tracking-[-0.48px]">
          Add cards and loyalty to create your wallet
        </h2>
        <p className="text-black text-base leading-[140%]">
          See how your benefits and loyalty programs stack up.
        </p>
        <button
          onClick={() => navigate("/onboarding/cards")}
          className="mt-2 inline-flex items-center justify-center px-4 py-3 rounded-md border border-black bg-black text-white hover:bg-black/90"
        >
          Add card or loyalty
        </button>
      </div>
    </div>
  );
}

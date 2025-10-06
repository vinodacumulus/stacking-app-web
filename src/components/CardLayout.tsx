import { CardForm } from "./CardForm";

export function CardLayout() {
  return (
    <div className="flex w-full min-h-screen bg-white">
      {/* Left side - Form */}
      <div className="flex flex-col justify-center items-center flex-1 p-5 lg:p-10">
        <div className="flex flex-col justify-center items-center flex-1 gap-10 w-full max-w-[618px]">
          <CardForm />
        </div>
      </div>

      {/* Right side - Illustration */}
      <div className="hidden lg:flex flex-col justify-center items-center flex-1 bg-stack-bg-brand-tertiary p-10 gap-10">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/4ec77d2af522b16e7b496476a654ab3f89d8b27a?width=800"
          alt="Bills payment illustration showing financial management and credit card organization"
          className="w-full max-w-[400px] h-auto aspect-square object-contain"
        />
        <div className="w-full max-w-[490px] text-center">
          <p className="text-black font-sans text-xl font-normal leading-[120%]">
            Folks who shop with apps like Rakuten earn an average of $XXX/year
          </p>
          <br />
          <p className="text-black font-sans text-xl font-normal leading-[120%]">
            With Stack, you can save XX% more by stacking your credit card,
            loyalty memberships
          </p>
        </div>
      </div>
    </div>
  );
}

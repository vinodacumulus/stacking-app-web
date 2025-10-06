import { MembershipsForm } from "./MembershipsForm";

export function MembershipsLayout() {
  return (
    <div className="flex w-full min-h-screen bg-white">
      {/* Left side - Form */}
      <div className="flex flex-col justify-center items-center flex-1 p-5 lg:p-10">
        <div className="flex flex-col justify-center items-center flex-1 gap-10 w-full max-w-[618px]">
          <MembershipsForm />
        </div>
      </div>

      {/* Right side - Illustration */}
      <div className="hidden lg:flex flex-col justify-center items-center flex-1 bg-stack-bg-brand-tertiary p-10 gap-10">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/32349c651a125c5b9d1de128c58df2eb41078995?width=800"
          alt="Penthouse building illustration representing loyalty programs and premium rewards"
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

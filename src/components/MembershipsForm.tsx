import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Plus, Check } from "lucide-react";
import { StackLogo } from "./StackLogo";

interface LoyaltyProgram {
  id: string;
  name: string;
  logo: React.ReactNode;
  isAdded: boolean;
}

const LOYALTY_PROGRAMS: LoyaltyProgram[] = [
  {
    id: "marriott-bonvoy",
    name: "Marriott Bonvoy Boundless",
    logo: (
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/511c7ac1aefb584ce6936039eb9956217ae5234d?width=150"
        alt="Marriott Bonvoy logo"
        className="max-h-full max-w-full object-contain"
      />
    ),
    isAdded: true,
  },
  {
    id: "world-of-hyatt",
    name: "World of Hyatt",
    logo: (
      <svg
        viewBox="0 0 75 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <path
          d="M25.0039 20.4333C25.7196 20.4333 26.1649 21.4067 26.1664 22.7278C26.1649 24.0181 25.7402 24.971 25.0527 25.0077H24.6449V20.4333H25.0039ZM23.5314 19.9351V25.5092H25.2233C26.5233 25.5092 27.2764 24.4711 27.2786 22.7275V22.7239C27.2764 20.9852 26.5233 19.9351 25.2233 19.9351H23.5314ZM14.1183 22.7308V20.4337H14.4152C15.0211 20.4337 15.2702 20.8731 15.2702 21.5647C15.2702 22.3469 14.9708 22.7308 14.4149 22.7308H14.1183ZM16.7292 25.5095L15.5633 23.0444C16.1274 22.8058 16.393 22.3271 16.393 21.5643C16.393 20.4704 15.7842 19.9351 14.4349 19.9351H13.0049V25.5092H14.1183V23.23H14.4349C14.4449 23.23 14.4533 23.229 14.463 23.229L15.5411 25.5092H16.7292V25.5095ZM4.81518 19.9351L4.13362 23.0311L3.43674 19.9351H2.87737L2.19487 23.0324L1.49799 19.9351H0.396118L1.64924 25.5092H2.20893L2.90424 22.3538L3.58799 25.5079L3.58737 25.5092H4.14737L5.41393 19.9354L4.81518 19.9351ZM8.92299 25.0903C8.41924 25.0903 8.07612 24.6223 8.07612 22.722C8.07612 20.8224 8.41924 20.3534 8.92299 20.3534C9.42799 20.3534 9.77049 20.8224 9.77143 22.722C9.77049 24.6223 9.42799 25.0903 8.92331 25.0903H8.92299ZM10.9927 22.7181C10.9905 21.8039 10.7796 21.0603 10.3817 20.564C10.0121 20.1025 9.53268 19.8587 8.92331 19.8587C8.31456 19.8587 7.83518 20.1025 7.46487 20.564C7.06706 21.0603 6.85612 21.8039 6.85456 22.7181H6.85393V22.7262H6.85456C6.85612 23.6408 7.06706 24.3837 7.46487 24.88C7.83518 25.3415 8.31456 25.5859 8.92331 25.5859C9.53268 25.5859 10.0121 25.3415 10.3817 24.88C10.7796 24.3837 10.9905 23.6408 10.9927 22.7262V22.7181Z"
          fill="#0072CE"
        />
      </svg>
    ),
    isAdded: true,
  },
  {
    id: "wyndham-rewards",
    name: "Wyndham Rewards",
    logo: (
      <svg
        viewBox="0 0 77 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <g clipPath="url(#clip0_472_190)">
          <path
            d="M9.18066 2.26361H10.5831L12.3524 7.74212L14.1742 2.23739H15.2752L17.097 7.74212L18.8664 2.26361H20.2294L17.6344 9.7081H16.5203L14.6985 4.39997L12.8898 9.7081H11.7758L9.18066 2.26361Z"
            fill="#202D5D"
          />
          <path
            d="M23.7813 6.74603L20.8455 2.26361H22.3789L24.4497 5.54023L26.5468 2.26361H28.0409L25.1051 6.70671V9.65567H23.7944V6.74603H23.7813Z"
            fill="#202D5D"
          />
          <path
            d="M28.7487 2.26361H29.9545L33.9127 7.37514V2.26361H35.1971V9.65567H34.1093L30.02 4.39996V9.65567H28.7356V2.26361H28.7487Z"
            fill="#202D5D"
          />
          <path
            d="M36.7437 2.26361H39.496C41.8159 2.26361 43.428 3.8626 43.428 5.94653V5.97275C43.428 8.05668 41.8159 9.66878 39.496 9.66878H36.7437V2.26361ZM39.5091 8.47609C41.0688 8.47609 42.078 7.42757 42.078 5.98585V5.95964C42.078 4.51792 41.0688 3.44319 39.5091 3.44319H38.0543V8.47609H39.5091Z"
            fill="#202D5D"
          />
          <path
            d="M44.6731 2.26361H45.9706V5.34363H49.4963V2.26361H50.7938V9.65567H49.4963V6.54943H45.9706V9.66878H44.6731V2.26361Z"
            fill="#202D5D"
          />
          <path
            d="M55.0141 2.21118H56.2199L59.4703 9.65567H58.0942L57.3471 7.87319H53.8477L53.0875 9.65567H51.7506L55.0141 2.21118ZM56.8753 6.71982L55.5908 3.75775L54.3195 6.71982H56.8753Z"
            fill="#202D5D"
          />
          <path
            d="M60.545 2.26361H61.9343L64.1887 5.76304L66.443 2.26361H67.8323V9.65567H66.5347V4.36064L64.2018 7.84697H64.1624L61.8426 4.38686V9.66878H60.5713V2.26361H60.545Z"
            fill="#202D5D"
          />
        </g>
      </svg>
    ),
    isAdded: false,
  },
  {
    id: "hilton-honors",
    name: "Hilton Honors",
    logo: (
      <svg
        viewBox="0 0 75 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.5 1.43417V29.1809H15.0052V27.9883H3.69235V2.62705H71.3071V27.9883H59.8936V29.1809H72.5V1.43417H2.5Z"
          fill="#231F20"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.3546 31.273V29.0045H18.4618V31.273H17.4559V25.8719H18.4618V28.1017H21.3546V25.8719H22.3607V31.273H21.3546Z"
          fill="#231F20"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27.8488 8.82979C27.8488 9.60765 27.2125 10.2378 26.4274 10.2378C25.6421 10.2378 25.0057 9.60765 25.0057 8.82979C25.0057 8.05194 25.6421 7.42178 26.4274 7.42178C27.2125 7.42178 27.8488 8.05194 27.8488 8.82979Z"
          fill="#231F20"
        />
      </svg>
    ),
    isAdded: false,
  },
  {
    id: "ihg-one-rewards",
    name: "IHG One Rewards",
    logo: (
      <svg
        viewBox="0 0 75 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <g clipPath="url(#clip0_472_66)">
          <path
            d="M16.9572 0.693787H15.1779V5.80271H8.75255V0.693787H6.98889V12.307H8.75255V7.00108H15.1779V12.307H16.9572V0.693787Z"
            fill="black"
          />
          <path
            d="M1.76095 0.693787H0V12.3078H1.76095V0.693787Z"
            fill="black"
          />
          <path
            d="M29.5882 6.71811V11.2195C29.0899 11.5529 28.2535 11.8158 27.3099 11.8158C24.5514 11.8158 22.6646 9.41227 22.6646 6.37741C22.6646 3.51768 24.3197 1.16705 27.0788 1.16705C28.9832 1.16705 30.069 2.04419 30.8697 3.02657H30.9588V1.00903C30.3892 0.868758 28.8051 0.500244 27.1499 0.500244C23.1453 0.500244 20.7068 3.37741 20.7068 6.53527C20.7068 9.99111 23.341 12.4999 27.1856 12.4999C29.0899 12.4999 30.5672 11.7807 31.3681 11.5526V6.71795H29.5882V6.71811Z"
            fill="black"
          />
        </g>
      </svg>
    ),
    isAdded: false,
  },
];

export function MembershipsForm() {
  const navigate = useNavigate();
  const [programs, setPrograms] = useState<LoyaltyProgram[]>(LOYALTY_PROGRAMS);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPrograms = programs.filter((program) =>
    program.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const toggleProgram = (programId: string) => {
    setPrograms((prevPrograms) =>
      prevPrograms.map((program) =>
        program.id === programId
          ? { ...program, isAdded: !program.isAdded }
          : program,
      ),
    );
  };

  const handleBack = () => {
    navigate("/onboarding/cards");
  };

  const handleSkip = () => {
    // Skip to next step or complete onboarding
    navigate("/");
  };

  const handleContinue = () => {
    console.log(
      "Selected loyalty programs:",
      programs.filter((program) => program.isAdded),
    );
    navigate("/onboarding/signup");
  };

  return (
    <div className="flex flex-col items-center gap-8 max-w-[618px] w-full">
      <StackLogo width={180} height={42} />

      <div className="flex flex-col items-start gap-2 w-full">
        <h1 className="text-black font-sans text-2xl font-bold leading-[120%] tracking-[-0.48px]">
          Add memberships to your wallet
        </h1>
        <p className="text-black font-sans text-base font-normal leading-[140%] w-full">
          Add your loyalty to your wallet to see how your benefits and loyalty
          programs stack up. Connect your rewards program when you're ready.
        </p>
      </div>

      <div className="flex items-center gap-2 w-full px-4 py-3 rounded-full border border-stack-border-default bg-white">
        <input
          type="text"
          placeholder="Search for your rewards program"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 text-stack-text-tertiary font-sans text-base font-normal leading-[100%] bg-transparent border-none outline-none placeholder:text-stack-text-tertiary"
        />
        <Search size={16} className="text-black" />
      </div>

      <div className="flex flex-col gap-4 w-full">
        {filteredPrograms.map((program) => (
          <div
            key={program.id}
            className="flex items-center gap-2 p-4 rounded-stack-md border border-stack-border-default bg-white w-full"
          >
            <div className="flex items-center justify-center w-[75px] h-[45px] flex-shrink-0">
              {program.logo}
            </div>

            <div className="flex-1 text-stack-text-default font-sans text-base font-bold leading-[140%]">
              {program.name}
            </div>

            <button
              onClick={() => toggleProgram(program.id)}
              className={`flex items-center gap-2 px-3 py-3 rounded-stack-md border transition-colors ${
                program.isAdded
                  ? "border-stack-border-brand bg-stack-bg-brand text-stack-text-on-brand"
                  : "border-stack-border-secondary bg-stack-bg-tertiary text-stack-text-default"
              }`}
            >
              {program.isAdded ? (
                <>
                  <Check size={16} />
                  <span className="font-sans text-base font-normal leading-[100%]">
                    Added
                  </span>
                </>
              ) : (
                <>
                  <Plus size={16} />
                  <span className="font-sans text-base font-normal leading-[100%]">
                    Add
                  </span>
                </>
              )}
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center w-full">
        <button
          onClick={handleBack}
          className="px-3 py-3 rounded-stack-md text-stack-text-secondary font-sans text-base font-normal leading-[100%] hover:bg-stack-bg-tertiary transition-colors"
        >
          Back
        </button>

        <div className="flex items-center gap-4">
          <button
            onClick={handleSkip}
            className="px-3 py-3 rounded-stack-md text-stack-text-secondary font-sans text-base font-normal leading-[100%] hover:bg-stack-bg-tertiary transition-colors"
          >
            Skip
          </button>
          <button
            onClick={handleContinue}
            className="flex px-6 py-3 justify-center items-center rounded-stack-md border border-stack-border-brand bg-stack-bg-brand text-stack-text-on-brand font-sans text-base font-normal leading-[100%] hover:bg-opacity-90 transition-colors"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

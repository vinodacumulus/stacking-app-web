import { useNavigate } from "react-router-dom";

export function SignupForm() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/onboarding/memberships");
  };

  const handleFacebookSignup = () => {
    // Handle Facebook signup
    console.log("Facebook signup clicked");
  };

  const handleGoogleSignup = () => {
    // Handle Google signup
    console.log("Google signup clicked");
  };

  const handleAppleSignup = () => {
    // Handle Apple signup
    console.log("Apple signup clicked");
  };

  return (
    <div className="flex flex-col items-center gap-10 max-w-[618px] w-full">
      <div className="flex flex-col items-start gap-2 w-full">
        <h1 className="text-black font-sans text-2xl font-bold leading-[120%] tracking-[-0.48px]">
          Last step! Save your progress and view your stack
        </h1>
        <p className="text-black font-sans text-base font-normal leading-[140%] w-full">
          Sign up securely in seconds—use your Google or Facebook account for
          fast, password-free access.
        </p>
      </div>

      <div className="flex flex-col gap-4 w-full">
        {/* Facebook Button */}
        <button
          onClick={handleFacebookSignup}
          className="flex items-center justify-center gap-4 h-[54px] px-4 w-full rounded-[10px] bg-[#1877F2] hover:bg-[#166FE5] transition-colors"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="24"
              height="24"
              transform="translate(0.5 0.5)"
              fill="#1877F2"
            />
            <path
              d="M24 12.5698C24 6.21857 18.8513 1.06985 12.5 1.06985C6.14872 1.06985 1 6.21857 1 12.5698C1 18.3098 5.20538 23.0674 10.7031 23.9301V15.8941H7.7832V12.5698H10.7031V10.0363C10.7031 7.15407 12.42 5.56204 15.0468 5.56204C16.305 5.56204 17.6211 5.78665 17.6211 5.78665V8.61672H16.171C14.7424 8.61672 14.2969 9.50319 14.2969 10.4126V12.5698H17.4863L16.9765 15.8941H14.2969V23.9301C19.7946 23.0674 24 18.3098 24 12.5698Z"
              fill="white"
            />
          </svg>
          <span className="text-white font-bold text-xl">
            Sign up with Facebook
          </span>
        </button>

        {/* Google Button */}
        <button
          onClick={handleGoogleSignup}
          className="flex items-center justify-center gap-4 h-[54px] px-4 w-full rounded-[10px] bg-white border border-gray-200 hover:bg-gray-50 transition-colors shadow-[0_0_3px_0_rgba(0,0,0,0.08),0_2px_3px_0_rgba(0,0,0,0.17)]"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="24"
              height="24"
              transform="translate(0.5 0.5)"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M23.54 12.7614C23.54 11.9459 23.4668 11.1618 23.3309 10.4091H12.5V14.8575H18.6891C18.4225 16.295 17.6123 17.513 16.3943 18.3284V21.2139H20.1109C22.2855 19.2118 23.54 16.2636 23.54 12.7614Z"
              fill="#4285F4"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.4999 23.9998C15.6049 23.9998 18.2081 22.9701 20.1108 21.2137L16.3942 18.3282C15.3644 19.0182 14.0472 19.426 12.4999 19.426C9.50467 19.426 6.96945 17.403 6.06513 14.6848H2.22308V17.6644C4.11536 21.4228 8.00445 23.9998 12.4999 23.9998Z"
              fill="#34A853"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.06523 14.6851C5.83523 13.9951 5.70455 13.258 5.70455 12.5001C5.70455 11.7421 5.83523 11.0051 6.06523 10.3151V7.33552H2.22318C1.44432 8.88802 1 10.6444 1 12.5001C1 14.3557 1.44432 16.1121 2.22318 17.6646L6.06523 14.6851Z"
              fill="#FBBC05"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.4999 5.57386C14.1883 5.57386 15.7042 6.15409 16.896 7.29364L20.1944 3.99523C18.2029 2.13955 15.5997 1 12.4999 1C8.00445 1 4.11536 3.57705 2.22308 7.33545L6.06513 10.315C6.96945 7.59682 9.50468 5.57386 12.4999 5.57386Z"
              fill="#EA4335"
            />
          </svg>
          <span className="text-[rgba(0,0,0,0.54)] font-medium text-xl">
            Sign up with Google
          </span>
        </button>

        {/* Apple Button */}
        <button
          onClick={handleAppleSignup}
          className="flex items-center justify-center gap-4 h-[54px] px-4 w-full rounded-[10px] bg-black hover:bg-gray-900 transition-colors shadow-[0_0_3px_0_rgba(0,0,0,0.08),0_2px_3px_0_rgba(0,0,0,0.17)]"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="24"
              height="24"
              transform="translate(0 0.5)"
              fill="black"
            />
            <path
              d="M21.2806 18.924C20.9328 19.7275 20.5211 20.4672 20.0441 21.1472C19.3938 22.0743 18.8614 22.716 18.4511 23.0724C17.8151 23.6573 17.1336 23.9568 16.4039 23.9739C15.88 23.9739 15.2483 23.8248 14.5129 23.5224C13.775 23.2214 13.097 23.0724 12.477 23.0724C11.8268 23.0724 11.1294 23.2214 10.3835 23.5224C9.63644 23.8248 9.03463 23.9824 8.5745 23.998C7.87472 24.0278 7.17722 23.7198 6.48099 23.0724C6.03662 22.6848 5.48081 22.0204 4.81496 21.0791C4.10057 20.0739 3.51323 18.9084 3.0531 17.5795C2.56032 16.1442 2.31329 14.7543 2.31329 13.4087C2.31329 11.8673 2.64636 10.5379 3.31348 9.42385C3.83778 8.52901 4.53528 7.82313 5.40826 7.30494C6.28124 6.78674 7.2245 6.52268 8.2403 6.50578C8.79611 6.50578 9.52499 6.67771 10.4308 7.0156C11.334 7.35463 11.9139 7.52656 12.1682 7.52656C12.3583 7.52656 13.0026 7.32552 14.0948 6.92474C15.1276 6.55306 15.9993 6.39916 16.7134 6.45979C18.6485 6.61595 20.1023 7.37876 21.0691 8.75304C19.3385 9.80164 18.4824 11.2703 18.4994 13.1544C18.515 14.622 19.0474 15.8432 20.0937 16.8129C20.5679 17.2629 21.0975 17.6107 21.6867 17.8578C21.5589 18.2283 21.424 18.5832 21.2806 18.924ZM16.8426 1.46014C16.8426 2.6104 16.4224 3.6844 15.5847 4.67848C14.5739 5.86024 13.3513 6.54312 12.0254 6.43537C12.0085 6.29737 11.9987 6.15213 11.9987 5.99952C11.9987 4.89527 12.4794 3.7135 13.3331 2.74725C13.7593 2.25801 14.3013 1.85123 14.9586 1.52672C15.6146 1.20706 16.235 1.03028 16.8185 1.00001C16.8355 1.15378 16.8426 1.30756 16.8426 1.46012V1.46014Z"
              fill="white"
            />
          </svg>
          <span className="text-white font-medium text-xl">
            Sign up with Apple
          </span>
        </button>
      </div>

      <div className="flex justify-start w-full">
        <button
          onClick={handleBack}
          className="px-3 py-3 rounded-stack-md text-stack-text-secondary font-sans text-base font-normal leading-[100%] hover:bg-stack-bg-tertiary transition-colors"
        >
          Back
        </button>
      </div>
    </div>
  );
}

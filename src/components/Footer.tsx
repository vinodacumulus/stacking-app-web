import React from "react";
import { cn } from "@/lib/utils";
import { StackLogo } from "./StackLogo";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer
      className={cn(
        "flex w-full px-8 py-8 pb-40 items-start gap-4 border-t border-stack-border-default bg-stack-bg-default",
        className,
      )}
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-4 flex-wrap">
          {/* Brand and Social */}
          <div className="flex flex-col items-start gap-6 w-full md:w-64 flex-shrink-0">
            {/* Brand Logo */}
            <div className="flex justify-center items-center">
              <StackLogo width={180} height={42} />
            </div>
            {/* Old placeholder hidden */}
            <div className="flex justify-center items-center hidden">
              <svg
                width="28"
                height="39"
                viewBox="0 0 28 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.6667 2H7.83333C6.28624 2 4.80251 2.61458 3.70854 3.70854C2.61458 4.80251 2 6.28624 2 7.83333C2 9.38043 2.61458 10.8642 3.70854 11.9581C4.80251 13.0521 6.28624 13.6667 7.83333 13.6667M13.6667 2V13.6667M13.6667 2H19.5C20.266 2 21.0246 2.15088 21.7323 2.44404C22.4401 2.73719 23.0831 3.16687 23.6248 3.70854C24.1665 4.25022 24.5961 4.89328 24.8893 5.60101C25.1824 6.30875 25.3333 7.06729 25.3333 7.83333C25.3333 8.59938 25.1824 9.35792 24.8893 10.0657C24.5961 10.7734 24.1665 11.4164 23.6248 11.9581C23.0831 12.4998 22.4401 12.9295 21.7323 13.2226C21.0246 13.5158 20.266 13.6667 19.5 13.6667M13.6667 13.6667H7.83333M13.6667 13.6667H19.5M13.6667 13.6667V25.3333M7.83333 13.6667C6.28624 13.6667 4.80251 14.2812 3.70854 15.3752C2.61458 16.4692 2 17.9529 2 19.5C2 21.0471 2.61458 22.5308 3.70854 23.6248C4.80251 24.7188 6.28624 25.3333 7.83333 25.3333M19.5 13.6667C18.734 13.6667 17.9754 13.8175 17.2677 14.1107C16.5599 14.4039 15.9169 14.8335 15.3752 15.3752C14.8335 15.9169 14.4039 16.5599 14.1107 17.2677C13.8175 17.9754 13.6667 18.734 13.6667 19.5C13.6667 20.266 13.8175 21.0246 14.1107 21.7323C14.4039 22.4401 14.8335 23.0831 15.3752 23.6248C15.9169 24.1665 16.5599 24.5961 17.2677 24.8893C17.9754 25.1824 18.734 25.3333 19.5 25.3333C20.266 25.3333 21.0246 25.1824 21.7323 24.8893C22.4401 24.5961 23.0831 24.1665 23.6248 23.6248C24.1665 23.0831 24.5961 22.4401 24.8893 21.7323C25.1824 21.0246 25.3333 20.266 25.3333 19.5C25.3333 18.734 25.1824 17.9754 24.8893 17.2677C24.5961 16.5599 24.1665 15.9169 23.6248 15.3752C23.0831 14.8335 22.4401 14.4039 21.7323 14.1107C21.0246 13.8175 20.266 13.6667 19.5 13.6667ZM7.83333 25.3333C6.28624 25.3333 4.80251 25.9479 3.70854 27.0419C2.61458 28.1358 2 29.6196 2 31.1667C2 32.7138 2.61458 34.1975 3.70854 35.2915C4.80251 36.3854 6.28624 37 7.83333 37C9.38043 37 10.8642 36.3854 11.9581 35.2915C13.0521 34.1975 13.6667 32.7138 13.6667 31.1667V25.3333M7.83333 25.3333H13.6667"
                  stroke="#1E1E1E"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {/* X/Twitter */}
              <a
                href="#"
                className="text-stack-text-default hover:text-stack-text-neutral transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.2737 10.1635L23.2023 0H21.0872L13.3313 8.82305L7.14125 0H0L9.3626 13.3433L0 24H2.11504L10.3002 14.6806L16.8388 24H23.98M2.8784 1.5619H6.12769L21.0856 22.5148H17.8355"
                    fill="currentColor"
                  />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="text-stack-text-default hover:text-stack-text-neutral transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.98 2.163C16.184 2.163 16.564 2.175 17.83 2.233C21.082 2.381 22.601 3.924 22.749 7.152C22.807 8.417 22.818 8.797 22.818 12.001C22.818 15.206 22.806 15.585 22.749 16.85C22.6 20.075 21.085 21.621 17.83 21.769C16.564 21.827 16.186 21.839 12.98 21.839C9.77598 21.839 9.39598 21.827 8.13098 21.769C4.87098 21.62 3.35998 20.07 3.21198 16.849C3.15398 15.584 3.14198 15.205 3.14198 12C3.14198 8.796 3.15498 8.417 3.21198 7.151C3.36098 3.924 4.87598 2.38 8.13098 2.232C9.39698 2.175 9.77598 2.163 12.98 2.163ZM12.98 0C9.72098 0 9.31298 0.014 8.03298 0.072C3.67498 0.272 1.25298 2.69 1.05298 7.052C0.99398 8.333 0.97998 8.741 0.97998 12C0.97998 15.259 0.99398 15.668 1.05198 16.948C1.25198 21.306 3.66998 23.728 8.03198 23.928C9.31298 23.986 9.72098 24 12.98 24C16.239 24 16.648 23.986 17.928 23.928C22.282 23.728 24.71 21.31 24.907 16.948C24.966 15.668 24.98 15.259 24.98 12C24.98 8.741 24.966 8.333 24.908 7.053C24.712 2.699 22.291 0.273 17.929 0.073C16.648 0.014 16.239 0 12.98 0ZM12.98 5.838C9.57698 5.838 6.81798 8.597 6.81798 12C6.81798 15.403 9.57698 18.163 12.98 18.163C16.383 18.163 19.142 15.404 19.142 12C19.142 8.597 16.383 5.838 12.98 5.838ZM12.98 16C10.771 16 8.97998 14.21 8.97998 12C8.97998 9.791 10.771 8 12.98 8C15.189 8 16.98 9.791 16.98 12C16.98 14.21 15.189 16 12.98 16ZM19.386 4.155C18.59 4.155 17.945 4.8 17.945 5.595C17.945 6.39 18.59 7.035 19.386 7.035C20.181 7.035 20.825 6.39 20.825 5.595C20.825 4.8 20.181 4.155 19.386 4.155Z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#"
                className="text-stack-text-default hover:text-stack-text-neutral transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.595 3.184C16.991 2.938 8.96398 2.939 5.36498 3.184C1.46798 3.45 1.00898 5.804 0.97998 12C1.00898 18.185 1.46398 20.549 5.36498 20.816C8.96498 21.061 16.991 21.062 20.595 20.816C24.492 20.55 24.951 18.196 24.98 12C24.951 5.815 24.496 3.451 20.595 3.184ZM9.97998 16V8L17.98 11.993L9.97998 16Z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="text-stack-text-default hover:text-stack-text-neutral transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.98 0H5.97998C3.21898 0 0.97998 2.239 0.97998 5V19C0.97998 21.761 3.21898 24 5.97998 24H19.98C22.742 24 24.98 21.761 24.98 19V5C24.98 2.239 22.742 0 19.98 0ZM8.97998 19H5.97998V8H8.97998V19ZM7.47998 6.732C6.51398 6.732 5.72998 5.942 5.72998 4.968C5.72998 3.994 6.51398 3.204 7.47998 3.204C8.44598 3.204 9.22998 3.994 9.22998 4.968C9.22998 5.942 8.44698 6.732 7.47998 6.732ZM20.98 19H17.98V13.396C17.98 10.028 13.98 10.283 13.98 13.396V19H10.98V8H13.98V9.765C15.376 7.179 20.98 6.988 20.98 12.241V19Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Columns - Blurred as in design */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-4 flex-1">
            {/* Column 1 */}
            <div className="flex flex-col items-start gap-3 w-full md:w-64 filter blur-sm opacity-50">
              <div className="font-bold text-stack-text-default text-base mb-4">
                Use cases
              </div>
              <div className="text-stack-text-default text-base">UI design</div>
              <div className="text-stack-text-default text-base">UX design</div>
              <div className="text-stack-text-default text-base">
                Wireframing
              </div>
              <div className="text-stack-text-default text-base">
                Diagramming
              </div>
              <div className="text-stack-text-default text-base">
                Brainstorming
              </div>
              <div className="text-stack-text-default text-base">
                Online whiteboard
              </div>
              <div className="text-stack-text-default text-base">
                Team collaboration
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col items-start gap-3 w-full md:w-64 filter blur-sm opacity-50">
              <div className="font-bold text-stack-text-default text-base mb-4">
                Explore
              </div>
              <div className="text-stack-text-default text-base">Design</div>
              <div className="text-stack-text-default text-base">
                Prototyping
              </div>
              <div className="text-stack-text-default text-base">
                Development features
              </div>
              <div className="text-stack-text-default text-base">
                Design systems
              </div>
              <div className="text-stack-text-default text-base">
                Collaboration features
              </div>
              <div className="text-stack-text-default text-base">
                Design process
              </div>
              <div className="text-stack-text-default text-base">FigJam</div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col items-start gap-3 w-full md:w-64 filter blur-sm opacity-50">
              <div className="font-bold text-stack-text-default text-base mb-4">
                Resources
              </div>
              <div className="text-stack-text-default text-base">Blog</div>
              <div className="text-stack-text-default text-base">
                Best practices
              </div>
              <div className="text-stack-text-default text-base">Colors</div>
              <div className="text-stack-text-default text-base">
                Color wheel
              </div>
              <div className="text-stack-text-default text-base">Support</div>
              <div className="text-stack-text-default text-base">
                Developers
              </div>
              <div className="text-stack-text-default text-base">
                Resource library
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

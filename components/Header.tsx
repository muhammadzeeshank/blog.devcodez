import Container from "./container";

export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-gray-100 dark:bg-gray-800 pt-16">
      <Container className="flex flex-col items-center text-center">
        <div className="w-full flex flex-col items-center">{children}</div>

        <div className="relative w-full flex flex-col items-center">
          {/* Half-Circle Background Effect at the Bottom */}
          <div className="w-full overflow-hidden leading-none">
            <svg
              className="w-full h-24"
              viewBox="0 0 1200 200"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M0,250 C300,-70 900,-70 1200,250 Z"
                className="fill-gray-200 dark:fill-gray-700"
              ></path>
            </svg>
          </div>
          {/* Downward Arrow */}
          <div className="absolute top-1/2">
            <svg
              className="w-6 h-6 text-neutral-600 dark:text-neutral-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* First Arrow */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 6l-7 7-7-7"
              ></path>

              {/* Second Arrow Below */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 12l-7 7-7-7"
              ></path>
            </svg>
          </div>
        </div>
      </Container>
    </div>
  );
}

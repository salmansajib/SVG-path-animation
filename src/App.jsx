import { motion } from "motion/react";

function App() {
  return (
    <main>
      <div className=" min-h-screen grid place-content-center bg-zinc-950">
        <h1 className="text-6xl text-gray-100 max-w-2xl text-center leading-snug">
          Scale Your{" "}
          <span className="relative">
            Marketing{" "}
            <svg
              className="absolute -top-5 -left-3 -right-1 bottom-0"
              viewBox="0 0 370 129"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1.25,
                  ease: "easeInOut",
                }}
                d="M217.5 2C160.333 10 59 38.2 29 51C-8.5 67 -4.49999 102 29 114.5C62.5 127 290 136 343 114.5C396 93 355.438 58.9007 311.438 51.9007C267.438 44.9007 99.4376 21.4007 76.9376 2.90067"
                stroke="#67FF49"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </span>{" "}
          With Simple AI Tools
        </h1>
      </div>
    </main>
  );
}

export default App;

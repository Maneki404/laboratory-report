import ReportsAnim from "@/components/ReportsAnim";

import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"], weight: "600" });

function HomeDesktop() {
  return (
    <div className="z-20">
      <div
        className={
          montserrat.className +
          " top-[20vh] left-[5vw] h-[60vh] w-[60vw] absolute flex justify-center items-center text-[5vw]"
        }
      >
        <span>
          Generate laboratory{" "}
          <span className="ml-[17vw]">
            reports <em>easily</em>
          </span>
        </span>
      </div>
      <a
        className={
          montserrat.className +
          " bottom-[26vh] left-[1.5vw] w-[60vw] absolute flex items-center justify-end text-[2vw]"
        }
        href="/create"
      >
        <em className="mr-[3.4vw] hover:bg-purple-950 hover:bg-opacity-5 pr-5 pl-5 rounded-xl">
          Get started now →
        </em>
      </a>
      <ReportsAnim className="top-[0] right-[5vw] h-[100vh] flex w-[30vw]" />
    </div>
  );
}

export default HomeDesktop;

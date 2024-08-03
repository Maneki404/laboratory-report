import ReportsAnim from "@/components/ReportsAnim";

import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"], weight: "600" });

function HomeDesktop() {
  return (
    <div className="z-20">
      <div
        className={
          montserrat.className +
          " top-[20vh] left-[5vw] h-[60vh] w-[60vw] absolute flex flex-col justify-center items-center text-[5vw]"
        }
      >
        <div>
          Generate laboratory{" "}
          <div className="ml-[17vw]">
            reports <em className="underline-offset-4 underline">easily</em>
          </div>
        </div>
        <a
          className={
            montserrat.className +
            " w-[60vw] flex mt-[4vh] items-center justify-end text-[2vw]"
          }
          href="/create"
        >
          <em className="mr-[3.4vw] hover:bg-purple-950 hover:bg-opacity-5 pr-5 pl-5 pt-[0.5vh] pb-[0.5vh] rounded-xl">
            Get started now →
          </em>
        </a>
      </div>
      <ReportsAnim className="top-[0] right-[5vw] h-[100vh] flex w-[30vw]" />
    </div>
  );
}

export default HomeDesktop;

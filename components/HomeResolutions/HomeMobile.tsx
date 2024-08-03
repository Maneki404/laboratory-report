import ReportsAnim from "@/components/ReportsAnim";

import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"], weight: "600" });

function HomeMobile() {
  return (
    <div className="z-20">
      <div
        className={
          montserrat.className +
          " top-[20vh] left-0 h-[50vh] w-[100vw] absolute flex justify-start flex-col items-start text-[6vw]"
        }
      >
        <div className="w-[100%] text-start ml-[3vw] mt-[10vh]">
          Generate laboratory reports{" "}
          <em className="underline-offset-4 underline">easily</em>
        </div>
        <a
          className={
            montserrat.className +
            " mt-[7.7vh] ml-[3vw] flex items-center justify-end text-[2.5vw]"
          }
          href="/create"
        >
          <em className="bg-_nav-button-solid text-white hover:bg-_nav-button-hover hover:bg-opacity-5 pr-5 pl-5 pt-[1.3vh] pb-[1.3vh] rounded-2xl">
            Get started now →
          </em>
        </a>
        <ReportsAnim className="top-[13vh] right-[10vw] flex w-[40vw]" />
      </div>
    </div>
  );
}

export default HomeMobile;

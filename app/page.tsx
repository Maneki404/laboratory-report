import Background from "@/components/Background";
import Reports from "@/components/Reports";

import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"], weight: "600" });

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Background />
      <div className="bg-gradient-to-b from-purple-100 to-transparent w-screen h-52 z-10 absolute top-0"></div>
      <div
        className={
          montserrat.className +
          " top-[20vh] left-[5vw] h-[60vh] w-[60vw] absolute z-30 flex justify-center items-center text-[5vw]"
        }
      >
        <span>
          Create laboratory{" "}
          <span className="ml-[17vw]">
            reports <em>easily</em>
          </span>
        </span>
      </div>
      <a
        className={
          montserrat.className +
          " bottom-[26vh] left-[1.5vw] w-[60vw] absolute z-30 flex items-center justify-end text-[2vw]"
        }
        href="/create"
      >
        <em className="mr-[3.4vw] hover:bg-purple-950 hover:bg-opacity-5 pr-5 pl-5 rounded-xl">
          Get started now →
        </em>
      </a>
      <Reports className="top-[0] right-[5vw] h-[100vh] flex w-[30vw]" />
    </div>
  );
}

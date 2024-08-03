import { MdOutlineScience } from "react-icons/md";

import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"], weight: "variable" });

function Report() {
  return (
    <div
      className={
        montserrat.className +
        " w-full h-full text-[1.4vh] pt-[3vh] pl-[3vw] pr-[3vw] pb-[1vh] font-[500] flex flex-col flex-grow"
      }
    >
      <div className="flex flex-row items-center justify-between mb-[2vh]">
        {/* Logo */}
        <div className="flex flex-row">
          <MdOutlineScience size={"3vh"} />
          <div className="flex flex-col ml-1 justify-center">
            <div className="leading-none text-[1.6vh]">Nucleon</div>
            <div className="leading-none text-[0.9vh] font-[400]">
              Laboratory & Research
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[40%] text-[0.9vh]">
          {/* Date */}
          <div className="flex w-full flex-row justify-center">
            <div>Date:</div>
            <div className="flex-grow ml-[3%] mr-[3%]  border-b-black border-b"></div>
            <div>/</div>
            <div className="flex-grow  ml-[3%] mr-[3%] border-b-black border-b"></div>
            <div>/</div>
            <div className="flex-grow  ml-[3%] mr-[3%] border-b-black border-b"></div>
          </div>
          {/* Document ID */}
          <div className="flex w-full flex-row justify-center pt-[1vh]">
            <div>Document ID:</div>
            <div className="flex-grow ml-[3%] mr-[3%]  border-b-black border-b border-dashed"></div>
          </div>
        </div>
      </div>
      <div className="w-full h-[0.25vh] bg-gray-300 rounded-full mb-[2vh]"></div>
      <div className="flex flex-row font-[700] mb-[1vh]">
        PATIENT INFORMATION
      </div>
      <div className="flex flex-row">
        {/* Name - Last Name */}
        <div className="flex w-full">
          <div className="leading-loose">First Name:</div>
          <div className="flex-grow ml-2 mr-2 border-b-black border-b"></div>
        </div>
        <div className="flex w-full">
          <div className="leading-loose">Last Name:</div>
          <div className="flex-grow ml-2 mr-2 border-b-black border-b"></div>
        </div>
      </div>
      {/* ID Number */}
      <div className="flex flex-row">
        <div className="flex w-full">
          <div className="leading-loose">ID Number:</div>
          <div className="flex-grow ml-2 mr-2 border-b-black border-b"></div>
        </div>
        <div className="flex w-full">
          <div className="flex-grow"></div>
        </div>
      </div>
      <div className="w-full h-[0.25vh] bg-gray-300 rounded-full mb-[2vh] mt-[2vh]"></div>
      <div className="flex flex-row font-[700] mb-[1vh]">
        DIAGNOSIS INFORMATION
      </div>
      <div className="flex flex-row">
        <div className="flex w-full">
          <div className="leading-loose mr-[2vw]">Diagnosis Title:</div>
          <div className="flex-grow ml-2 mr-2 border-b-black border-b"></div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex w-full">
          <div className="leading-loose mr-[1vw]">Diagnosis Details:</div>
          <div className="flex-grow ml-2 mr-2 border-b-black border-b"></div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex w-full">
          <div className="w-full h-[1.4vh] mr-2 border-b-black border-b"></div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex w-full">
          <div className="w-full h-[1.4vh] mr-2 border-b-black border-b"></div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex w-full">
          <div className="w-full h-[1.4vh] mr-2 border-b-black border-b"></div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex w-full">
          <div className="w-full h-[1.4vh] mr-2 border-b-black border-b"></div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex w-full">
          <div className="w-full h-[1.4vh] mr-2 border-b-black border-b"></div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex w-full">
          <div className="w-full h-[1.4vh] mr-2 border-b-black border-b"></div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex w-full">
          <div className="w-full h-[1.4vh] mr-2 border-b-black border-b"></div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex w-full">
          <div className="leading-loose mr-[1vw] mt-[1vh]">
            Photo of the Physical Report:
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-grow">
        <div className="flex flex-row h-full">
          <div className="w-full h-full pt-[1vh] flex items-end justify-center text-[0.7vh]">
            © 2024 Reporter TR, Inc. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Report;

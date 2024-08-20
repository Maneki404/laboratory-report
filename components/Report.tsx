import { useSelector } from "react-redux";
import { getState } from "@/lib/slices/formSlice";

import { MdOutlineScience } from "react-icons/md";

import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"], weight: "variable" });

function Report() {
  const form = useSelector(getState);
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
          {form.firstName != null && form.firstName != "" ? (
            <div className="break-words line-clamp-3 whitespace-normal max-w-[9.5vw] ml-2 mr-0 items-center font-semibold pt-[0.4vh] border-b-transparent border-b">
              {form.firstName}
            </div>
          ) : (
            <div className="flex-grow ml-2 mr-2 border-b-black border-b"></div>
          )}
        </div>
        <div className="flex w-full">
          <div className="leading-loose">Last Name:</div>
          {form.secondName != null && form.secondName != "" ? (
            <div className="break-words line-clamp-3 whitespace-normal max-w-[9.5vw] ml-2 mr-0 items-center font-semibold pt-[0.4vh] border-b-transparent border-b">
              {form.secondName}
            </div>
          ) : (
            <div className="flex-grow ml-2 mr-2 border-b-black border-b"></div>
          )}
        </div>
      </div>
      {/* ID Number */}
      <div className="flex flex-row">
        <div className="flex w-full">
          <div className="leading-loose">ID Number:</div>
          {form.IDNumber != null && form.IDNumber.toString() != "" ? (
            <div className="flex-grow ml-2 mr-0 flex items-center font-semibold pt-[0.4vh] border-b-transparent border-b">
              {form.IDNumber}
            </div>
          ) : (
            <div className="flex-grow ml-2 mr-2 border-b-black border-b"></div>
          )}
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
          <div className="leading-loose mr-[0.5vw] text-nowrap">
            Diagnosis Title:
          </div>
          {form.diagnosisTitle != null && form.diagnosisTitle != "" ? (
            <div className="break-words ml-3 line-clamp-3 whitespace-normal text-justify font-semibold pt-[0.4vh] border-b-transparent border-b]">
              {form.diagnosisTitle}
            </div>
          ) : (
            <div className="flex-grow ml-3 mr-2 border-b-black border-b"></div>
          )}
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex w-full">
          <div className="leading-loose mr-[1vw] text-nowrap">
            Diagnosis Details:
          </div>
        </div>
        {form.diagnosisDetails != null && form.diagnosisDetails != "" ? (
          <div className="break-words line-clamp-[12] whitespace-normal text-justify font-semibold pt-[0.4vh] border-b-transparent border-b">
            {form.diagnosisDetails}
          </div>
        ) : (
          <div className="flex-grow mr-2 border-b-black border-b mt-[1.5vh]"></div>
        )}
      </div>
      {form.diagnosisDetails == null || form.diagnosisDetails == "" ? (
        <div>
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
        </div>
      ) : null}
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

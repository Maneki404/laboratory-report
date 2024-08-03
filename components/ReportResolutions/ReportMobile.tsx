"use client";

import FormItems from "@/components/FormItems";
import Report from "@/components/Report";
import { motion } from "framer-motion";

function ReportMobile() {
  return (
    <div className="flex flex-col h-[86vh] w-full absolute top-[14vh] items-center">
      <div className="z-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="w-[75vw] h-[83vh] ml-[4vw] mr-[4vw] bg-white rounded-sm shadow-sm bg-opacity-15 p-[2vw]"
          children={<FormItems />}
        />
      </div>
      <div className="z-20 absolute top-[87vh]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, rotate: [-15, 0], x: [-200, 0] }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="w-[75vw] h-[83vh] mb-[4vh] mt-[2vh] ml-[4vw] mr-[4vw] bg-white rounded-md shadow-2xl "
          children={<Report />}
        />
      </div>
    </div>
  );
}

export default ReportMobile;

"use client";

import FormItems from "@/components/FormItems";
import Report from "@/components/Report";
import { motion } from "framer-motion";
import { useState } from "react";

function ReportMobile() {
  const [visibleReport, setVisibleReport] = useState(false);
  const [visibleForm, setVisibleForm] = useState(true);
  return (
    <div className="flex flex-col h-[85vh] w-full absolute top-[13vh] items-center">
      <div className="z-20">
        <motion.div
          transition={{ duration: 0.8 }}
          className="w-[75vw] h-[83vh] ml-[4vw] mr-[4vw] bg-white rounded-sm shadow-sm bg-opacity-15 p-[2vw]"
          children={<FormItems visibleForm={visibleForm} />}
        />
      </div>
      <div className="z-20 absolute top-[100vh]">
        <motion.div
          onViewportLeave={() => {
            setVisibleReport(false);
            setVisibleForm(true);
          }}
          onViewportEnter={() => {
            setVisibleReport(true);
            setVisibleForm(false);
          }}
          animate={{
            opacity: visibleReport ? 1 : 0,
            rotate: visibleReport ? 0 : -15,
            x: visibleReport ? 0 : -200,
          }}
          transition={{ duration: 0.8 }}
          className="w-[75vw] h-[83vh] mb-[4vh] mt-[10vh] ml-[4vw] mr-[4vw] bg-white rounded-md shadow-2xl "
          children={<Report />}
        />
      </div>
    </div>
  );
}

export default ReportMobile;

"use client";

import FormItems from "@/components/FormItems";
import Report from "@/components/Report";
import { motion } from "framer-motion";

function Create() {
  return (
    <div className="flex flex-row h-[86vh] w-full absolute top-[14vh] justify-between">
      <div className="z-20 ml-[5vw]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, rotate: [-15, 0], x: [-200, 0] }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="w-[60vh] h-[80vh] bg-white rounded-md shadow-2xl "
          children={<Report />}
        />
      </div>
      <div className="z-20 mr-[5vw]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="w-[50vw] h-[80vh] bg-white rounded-sm shadow-sm bg-opacity-15 p-[2vw]"
          children={<FormItems />}
        />
      </div>
    </div>
  );
}

export default Create;

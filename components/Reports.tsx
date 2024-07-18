"use client";

import Lottie from "lottie-react";
import reports from "@/animations/reports.json";
import { useState } from "react";
import Loading from "./Loading";

function Reports({ className = "" }) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className={className + " absolute z-10"}>
      {isLoading ? <Loading /> : <></>}
      <Lottie
        animationData={reports}
        loop
        autoplay
        className="reports"
        onEnterFrame={() => setIsLoading(false)}
      />
    </div>
  );
}

export default Reports;

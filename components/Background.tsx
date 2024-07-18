"use client";

import Lottie from "lottie-react";
import background from "@/animations/background.json";
import { useState } from "react";
import Loading from "./Loading";

function Background() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="background">
      {isLoading ? <Loading /> : <></>}
      <Lottie
        animationData={background}
        loop
        autoplay
        className="gradient"
        {...defaultOptions}
        onEnterFrame={() => setIsLoading(false)}
      />
      <div className="bg-gradient-to-b from-purple-100 to-transparent w-screen h-52 z-10 absolute top-0"></div>
    </div>
  );
}

export default Background;

const defaultOptions = {
  rendererSettings: {
    preserveAspectRatio: "none",
  },
};

"use client";

import Lottie from "lottie-react";
import background from "@/animations/background.json";
import { useEffect, useState } from "react";
import Loading from "./Loading";

function Background() {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
  }, []);
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
    </div>
  );
}

export default Background;

const defaultOptions = {
  rendererSettings: {
    preserveAspectRatio: "none",
  },
};

"use client";

import Lottie from "lottie-react";
import background from "@/animations/background.json";

function Background() {
  return (
    <div className="background">
      <Lottie
        animationData={background}
        loop
        autoplay
        className="gradient"
        {...defaultOptions}
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

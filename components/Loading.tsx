// TODO: Loading screen keep stuck on first start, goes back to normal in refresh and there are more than one instances you can see by scrolling to bottom while loading.

"use client";
import React, { useEffect, useState } from "react";

function Loading() {
  const [timeout, setTimeoutState] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeoutState(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return timeout ? (
    <></>
  ) : (
    <div className="bg-white absolute z-50 w-screen h-screen flex items-center justify-center text-center">
      <div className="hypnotic"></div>
    </div>
  );
}

export default Loading;

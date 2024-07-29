"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { getState, none, still } from "@/lib/slices/hamburgerSlice";

import { motion } from "framer-motion";
import HamburgerContent from "../HamburgerContent";
import { useEffect, useState } from "react";

function HamburgerMenu() {
  const state = useAppSelector(getState);
  const dispatch = useAppDispatch();
  // const [display, setDisplay] = useState(true);

  // const [isMounted, setIsMounted] = useState(false);

  // useEffect(() => {
  //   setIsMounted(true);

  //   return () => {
  //     setIsMounted(false);
  //   };
  // }, []);

  const variants = {
    open: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2,
        staggerDirection: -1,
      },
      height: [0, "17vh"],
      opacity: [0, 1],
      // display: display ? "flex" : "none",
    },
    closed: {
      transition: { staggerChildren: 0.07, staggerDirection: 1, delay: 0.3 },
      height: ["17vh", 0],
      opacity: [1, 0],
      // display: display ? "flex" : "none",
    },
    still: {},
    none: {
      display: "none",
    },
  };

  return state !== "none" ? (
    <motion.ul
      animate={
        state === "none"
          ? "none"
          : state === "open"
          ? "open"
          : state === "close"
          ? "closed"
          : "still"
      }
      variants={variants}
      className="hamburger-menu"
      onAnimationComplete={() => {
        if (state === "close") dispatch(none());
        else if (state === "open") dispatch(still());
      }}
    >
      <HamburgerContent />
    </motion.ul>
  ) : (
    <></>
  );
}

export default HamburgerMenu;

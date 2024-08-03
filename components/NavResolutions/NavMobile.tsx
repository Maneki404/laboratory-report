"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { open, close, getState } from "@/lib/slices/hamburgerSlice";

import { Button } from "@mantine/core";
import { Burger } from "@mantine/core";

import colors from "@/constants/colors";
import "@/styles/globals.css";

import { LuAtom } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import { LuSun } from "react-icons/lu";
import { FiMoon } from "react-icons/fi";

import { Pacifico } from "next/font/google";
import { useState } from "react";
const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });

function NavMobile() {
  const [theme, setTheme] = useState("light");

  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(getState) === "open";
  const isStill = useAppSelector(getState) === "still";

  const toggleHamburger = () => {
    if (isOpen || isStill) {
      dispatch(close());
    } else {
      dispatch(open());
    }
  };

  return (
    <div className="bg-transparent z-50 fixed w-screen h-[10vh]">
      <div className="bg-gradient-to-b from-purple-200 via-pink-300 via-[67%] to-transparent w-screen h-[14vh] -z-10 absolute top-0"></div>
      <div className="flex flex-row ml-[3vw] mr-[3vw] items-center justify-between h-full">
        <a
          className="w-[45vw] h-full flex flex-row items-center justify-center"
          href="/"
        >
          <div className="w-10 flex items-center justify-center">
            <LuAtom className="logo-icon flex" />
          </div>
          <div
            className={
              pacifico.className +
              " w-full h-full pl-1 text-start flex justify-start items-center logo-text text-gray-950"
            }
          >
            Reporter
          </div>
        </a>
        <div className="w-2/5 h-full text-end flex flex-row gap-[5%] justify-end items-center">
          <Button
            size="compact-sm"
            className="flex items-center justify-center"
            variant="outline"
            color={colors["_nav-button-solid"]}
            onClick={() => {
              theme === "light" ? setTheme("dark") : setTheme("light");
            }}
          >
            {theme === "light" ? (
              <FiMoon size={"70%"} className="flex w-full" />
            ) : (
              <LuSun size={"70%"} className="flex w-full" />
            )}
          </Button>
          <Button
            size="compact-sm"
            className="flex"
            variant="filled"
            color={colors["_nav-button-solid"]}
            component="a"
            href="/create"
          >
            <FiPlus className="flex w-full" size={"70%"} />
          </Button>
          <Burger
            className="z-40"
            size="sm"
            opened={isOpen || isStill}
            onClick={toggleHamburger}
            aria-label="Toggle navigation"
          />
        </div>
      </div>
    </div>
  );
}

export default NavMobile;

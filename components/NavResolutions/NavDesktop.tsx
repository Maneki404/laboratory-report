"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { open, close, getState, still } from "@/lib/slices/hamburgerSlice";

import { Button } from "@mantine/core";
import { Burger } from "@mantine/core";

import colors from "@/constants/colors";
import "@/styles/globals.css";

import { LuAtom } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import { LuSun } from "react-icons/lu";
import { FiMoon } from "react-icons/fi";

import { Pacifico } from "next/font/google";
import NavMenu from "../NavMenu";
import { useState } from "react";
const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });

function NavDesktop() {
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
    <div className="bg-transparent z-20 absolute w-screen h-[12vh]">
      <div className="flex flex-row ml-[3vw] mr-[3vw] items-center justify-between h-full">
        <a
          className="w-[20vw] h-full flex flex-row items-center justify-center"
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
            size="compact-lg"
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
            size="compact-lg"
            className="flex"
            variant="filled"
            color={colors["_nav-button-solid"]}
            component="a"
            href="/create"
          >
            <div className="mr-[5%] button-text">Create</div>
            <FiPlus className="flex w-full" size={"70%"} />
          </Button>
          <div className="h-full flex justify-center items-center">
            <NavMenu size={36} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavDesktop;

"use client";

import { Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Burger } from "@mantine/core";

import colors from "@/constants/colors";
import NavLink from "../NavLink";
import "@/styles/globals.css";

import { LuAtom } from "react-icons/lu";
import { IoCreateOutline } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import { LuSun } from "react-icons/lu";
import { FaRegMoon } from "react-icons/fa";
import { FiMoon } from "react-icons/fi";

import { Pacifico } from "next/font/google";
import NavMenu from "../NavMenu";
import { useState } from "react";
const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });

function NavMobile() {
  const [theme, setTheme] = useState("light");
  const [opened, { toggle }] = useDisclosure();
  return (
    <div className="bg-transparent z-20 absolute w-screen h-[8vh]">
      <div className="flex flex-row ml-[3vw] mr-[3vw] items-center justify-between h-full">
        <a
          className="w-[20vw] h-full flex flex-row items-center justify-center"
          href="/"
        >
          <div className="w-10 flex items-center justify-center">
            <LuAtom className="w-[2.8vw] h-[2.8vw] flex" />
          </div>
          <div
            className={
              pacifico.className +
              " w-full h-full pl-1 text-start flex justify-start items-center text-[2.8vw] text-gray-950"
            }
          >
            Reporter
          </div>
        </a>
        {/* <div className="w-[15vw] flex flex-row items-center justify-center"></div> */}
        {/* <div className="w-[50vw] mr-7 ml-7 flex flex-row justify-center">
          <NavLink name="Home" href="/" />
          <NavLink name="About" href="/about" />
          <NavLink name="Contact" href="/contact" />
        </div> */}
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
          <div className="h-full flex justify-center items-center">
            <NavMenu />
          </div>
          <Burger
            size="sm"
            opened={opened}
            onClick={toggle}
            aria-label="Toggle navigation"
          />
        </div>
      </div>
    </div>
  );
}

export default NavMobile;

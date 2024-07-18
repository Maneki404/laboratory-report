"use client";

import { Button } from "@mantine/core";

import colors from "@/constants/colors";
import NavLink from "./NavLink";

import { LuAtom } from "react-icons/lu";
import { IoCreateOutline } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { FaRegMoon } from "react-icons/fa";

import { Pacifico } from "next/font/google";
import NavMenu from "./NavMenu";
import { useState } from "react";
const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });

function Nav() {
  const [theme, setTheme] = useState("light");
  return (
    <div className="bg-transparent z-20 absolute w-screen h-20">
      <div className="flex flex-row ml-10 mr-10 items-center h-full">
        <a
          className="w-[15vw] flex flex-row items-center justify-center"
          href="/"
        >
          <div className="w-10 flex items-center justify-center">
            <LuAtom className="w-full h-1/2 flex" />
          </div>
          <div
            className={
              pacifico.className +
              " w-full pt-4 pb-4 pl-2 text-start text-3xl text-gray-950"
            }
          >
            Reporter
          </div>
        </a>
        <div className="w-[15vw] flex flex-row items-center justify-center"></div>
        <div className="w-[50vw] mr-7 ml-7 flex flex-row justify-center">
          <NavLink name="Home" href="/" />
          <NavLink name="About" href="/about" />
          <NavLink name="Contact" href="/contact" />
        </div>
        <div className="w-[30vw] text-end flex flex-row justify-end items-center">
          <Button
            className="mr-4"
            variant="subtle"
            color={colors["_theme-icon"]}
            onClick={() => {
              theme === "light" ? setTheme("dark") : setTheme("light");
            }}
          >
            {theme === "light" ? <FaRegMoon size={23} /> : <LuSun size={25} />}
          </Button>
          <Button
            className="mr-4"
            variant="filled"
            color={colors["_nav-button-solid"]}
            rightSection={<IoCreateOutline size={19} />}
          >
            Create
          </Button>
          <div className="w-[4vw] flex justify-center items-center">
            <NavMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;

"use client";

import { Button } from "@mantine/core";
import colors from "@/constants/colors";
import { LuAtom } from "react-icons/lu";
import { IoCreateOutline } from "react-icons/io5";

import { Pacifico } from "next/font/google";
import NavLink from "./NavLink";
const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });

function Nav() {
  return (
    <div className="bg-transparent z-20 absolute w-screen h-20">
      <div className="flex flex-row ml-10 mr-10 items-center h-full">
        <div className="w-full flex flex-row items-center justify-center">
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
        </div>
        <div className="w-full mr-7 ml-7 flex flex-row">
          <NavLink name="About" href="/" />
          <NavLink name="About" href="/" />
          <NavLink name="About" href="/" />
          <NavLink name="About" href="/" />
          <NavLink name="About" href="/" />
        </div>
        <div className="w-full p-4 text-end">
          <Button
            className="rounded-full"
            variant="filled"
            color={colors["_nav-button-solid"]}
            rightSection={<IoCreateOutline size={19} />}
          >
            Create
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Nav;

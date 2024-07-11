"use client";

import { Button } from "@mantine/core";
import colors from "@/constants/colors";

import { Pacifico } from "next/font/google";
const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });

function Nav() {
  return (
    <div className="bg-transparent z-20 absolute w-screen">
      <div className="flex flex-row ml-10 mr-10 items-center">
        <div
          className={
            pacifico.className + " w-full p-4 text-start text-3xl text-gray-950"
          }
        >
          Reporter
        </div>
        <div className="w-full mr-7 ml-7 flex flex-row">
          <div className="w-full p-4 text-center text-gray-950">Hello</div>
          <div className="w-full p-4 text-center text-gray-950">Hello</div>
          <div className="w-full p-4 text-center text-gray-950">Hello</div>
          <div className="w-full p-4 text-center text-gray-950">Hello</div>
          <div className="w-full p-4 text-center text-gray-950">Hello</div>
        </div>
        <div className="w-full p-4 text-end">
          <Button
            className="rounded-full"
            variant="filled"
            color={colors["_nav-button-solid"]}
          >
            Create
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Nav;

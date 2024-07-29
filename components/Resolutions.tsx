"use client";

import { useAppSelector } from "@/lib/hooks";
import { getState } from "@/lib/slices/hamburgerSlice";

import useWindowSize from "@/hooks/useWindowSize";

import Loading from "./Loading";
import NavDesktop from "./NavResolutions/NavDesktop";
import NavMobile from "./NavResolutions/NavMobile";
import HamburgerMenu from "./HamburgerResolutions/HamburgerMenu";

function Resolutions({ name = "" }) {
  const state = useAppSelector(getState);
  const { width, height } = useWindowSize();

  if (width == 0) return <Loading />;

  if (width < 768) {
    switch (name) {
      case "nav":
        return <NavMobile />;
      case "hamburger":
        return <HamburgerMenu />;
      default:
        return null;
    }
  } else {
    switch (name) {
      case "nav":
        return <NavDesktop />;
      default:
        return null;
    }
  }
}

export default Resolutions;

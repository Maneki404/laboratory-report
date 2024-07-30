"use client";

import useWindowSize from "@/hooks/useWindowSize";

import Loading from "./Loading";
import NavDesktop from "./NavResolutions/NavDesktop";
import NavMobile from "./NavResolutions/NavMobile";
import HamburgerMenu from "./HamburgerResolutions/HamburgerMenu";

function Resolutions({ name = "" }) {
  const { width, height } = useWindowSize();

  if (width == 0) return <Loading />;
  else if (width < 768) {
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

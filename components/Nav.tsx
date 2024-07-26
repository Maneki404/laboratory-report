"use client";

import useWindowSize from "@/hooks/useWindowSize";
import NavDesktop from "./NavResolutions/NavDesktop";
import NavMobile from "./NavResolutions/NavMobile";
import Loading from "./Loading";

function Nav() {
  const { width, height } = useWindowSize();
  if (width == 0) return <Loading />;
  if (width < 768) return <NavMobile />;
  else return <NavDesktop />;
}

export default Nav;

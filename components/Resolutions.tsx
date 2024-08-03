"use client";

import useWindowSize from "@/hooks/useWindowSize";

import Loading from "./Loading";
import NavDesktop from "./NavResolutions/NavDesktop";
import NavMobile from "./NavResolutions/NavMobile";
import HamburgerMenu from "./HamburgerResolutions/HamburgerMenu";
import HomeDesktop from "./HomeResolutions/HomeDesktop";
import HomeMobile from "./HomeResolutions/HomeMobile";
import FooterMobile from "./FooterResolutions/FooterMobile";
import FooterDesktop from "./FooterResolutions/FooterDesktop";
import ReportMobile from "./ReportResolutions/ReportMobile";
import ReportDesktop from "./ReportResolutions/ReportDesktop";

function Resolutions({ name = "" }) {
  const { width, height } = useWindowSize();

  if (width == 0) return <Loading />;
  else if (width < 768) {
    switch (name) {
      case "nav":
        return <NavMobile />;
      case "hamburger":
        return <HamburgerMenu />;
      case "home":
        return <HomeMobile />;
      case "footer":
        return <FooterMobile />;
      case "report":
        return <ReportMobile />;
      default:
        return null;
    }
  } else {
    switch (name) {
      case "nav":
        return <NavDesktop />;
      case "home":
        return <HomeDesktop />;
      case "footer":
        return <FooterDesktop />;
      case "report":
        return <ReportDesktop />;
      default:
        return null;
    }
  }
}

export default Resolutions;

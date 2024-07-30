import { FaTrashAlt } from "react-icons/fa";
import { IoLogOut, IoSettingsSharp } from "react-icons/io5";

import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: -15,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

function HamburgerContent() {
  return (
    <div className="w-fit flex flex-col">
      <motion.li variants={variants}>
        <em className="hamburger-text">Hello Maneki!</em>
      </motion.li>
      <motion.li variants={variants}>
        <a href="/settings" className="hamburger-items">
          <IoSettingsSharp />
          Settings
        </a>
      </motion.li>
      <motion.li variants={variants}>
        <a href="/logout" className="hamburger-items">
          <IoLogOut />
          Logout
        </a>
      </motion.li>
      <motion.li variants={variants} className="text-red-700 pb-[1vh]">
        <a href="/delete-account" className="hamburger-items">
          <FaTrashAlt />
          Delete my account
        </a>
      </motion.li>
    </div>
  );
}

export default HamburgerContent;

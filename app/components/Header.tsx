"use client";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Logo from "./Logo";
import { motion, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";
const Header = () => {
  const path = usePathname();
  const [show, setShow] = useState(false);
  const { scrollY } = useScroll();

  const handleScroll = () => {
    if (scrollY.get() > 50) {
      setShow(true);
    } else {
      setShow(false);
    }
    if(scrollY.getVelocity() > 0) {
        setShow(true);
    }
    if(scrollY.getVelocity() < 0) {
        setShow(false);
    }

  };
  useEffect(() => {
    handleScroll();
    scrollY.on("change", handleScroll);

    //eslint-disable-next-line
  }, [scrollY]);
  if (path !== "/") {
    return (
      <div className="border-b border-black flex h-20 w-full px-10 justify-between items-center bg-black/30 fixed z-10 text-white">
        <Logo />
        <Navbar />
      </div>
    );
  }
  return (
    <header className="w-screen ">
      <motion.div
        variants={{
          visible: {
            y: 0,
          },
          hidden: {
            y: "-100%",
          },
        }}
        initial="visible"
        animate={!show ? "visible" : "hidden"}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex h-20 w-screen md:w-full px-10  justify-between items-center bg-black/30 fixed z-10 text-white"
      >
        <Logo />
        <Navbar />
      </motion.div>
    </header>
  );
};

export default Header;

// bg-[#C4FE01]/70

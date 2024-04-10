"use client";

import BrazilFlag from "../icons/BrazilFlag";
import UsFlag from "../icons/UsFlag";
import SunIcon from "../icons/SunIcon";
import MoonIcon from "../icons/MoonIcon";
import Switch from "./Switch";
import Menu from "../icons/Menu";
import { useEffect, useState } from "react";
import Close from "../icons/Close";
import { getCurrentBreakpoint } from "@/utils/getCurrentBreakpoint";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [transition, setTransition] = useState(false);

  const handleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  useEffect(() => {
    if (showMenu === true) document.body.classList.add("no-scroll");
    else document.body.classList.remove("no-scroll");

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [showMenu]);

  useEffect(() => {
    const handleOrientationChange = () => {
      const currentBreakpoint = getCurrentBreakpoint();

      if (currentBreakpoint !== "" && currentBreakpoint !== "sm") {
        setShowMenu(false);
        setTransition(false);
        document.body.classList.remove("no-scroll");
      }
    };

    window.addEventListener("resize", handleOrientationChange);

    return () => {
      window.removeEventListener("resize", handleOrientationChange);
    };
  }, []);

  return (
    <nav className="dark:text-secondary-50 px-3 py-1 border-b-[3px] bg-surface-800 border-secondary-900 flex flex-row fixed top w-full z-30">
      <span
        className="md:hidden cursor-pointer mr-auto"
        onClick={() => {
          setTransition(true);
          handleMenu();
        }}
      >
        <Menu />
      </span>

      <ul
        className={`transition-width ease-in-out duration-700 flex bg-surface-700 absolute flex-col h-[100vh] left-[0px] top-[0px] items-center justify-center text-[18px] ${
          showMenu ? "w-[350px] " : "w-[0px]"
        } gap-1 md:transition-none md:text-base md:flex md:flex-row md:h-auto md:w-auto md:bg-transparent md:left-auto md:top-auto md:static md:mr-auto`}
      >
        <span
          className="absolute right-1 top-1 cursor-pointer md:hidden"
          onClick={handleMenu}
        >
          <Close />
        </span>

        {[
          ["Home", "#home"],
          ["About", "#about"],
          ["Experience", "#experience"],
          ["Projects", "#projects"],
          ["Contact", "#contact"],
        ].map(([title, url], index) => {
          return (
            <li
              key={index}
              className={`${
                transition ? "transition-all duration-200 ease-in-out" : ""
              } hover:bg-surface-500 border-b-2 border-transparent hover:border-secondary-200 w-full hover:text-secondary-200 text-center ${
                showMenu ? "opacity-100" : "opacity-0"
              }  md:transition-none md:border-b-0 md:opacity-100`}
            >
              <a
                className="block w-full h-full p-1 md:p-[0px] md:inline-block md:w-auto md:h-auto"
                href={url}
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                {title}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="flex gap-1">
        <div className="flex gap-[10px] items-center">
          <BrazilFlag />
          <UsFlag />
        </div>
        <div className="flex gap-[10px] items-center">
          <SunIcon />
          <Switch />
          <MoonIcon />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

"use client";

import BrazilFlag from "../icons/BrazilFlag";
import UsFlag from "../icons/UsFlag";
import SunIcon from "../icons/SunIcon";
import MoonIcon from "../icons/MoonIcon";
import Switch from "./Switch";
import Menu from "../icons/Menu";
import { useEffect, useState } from "react";
import Close from "../icons/Close";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [transition, setTransition] = useState(false);
  const matches = useBreakpoint("md", "min-width");

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
    if (matches) {
      setShowMenu(false);
      setTransition(false);
      document.body.classList.remove("no-scroll");
    }
  }, [matches]);

  return (
    <nav className="top fixed z-30 flex w-full flex-row gap-1 border-b-[3px] border-secondary-900 bg-surface-800 px-2 py-1 md:px-2 lg:px-3 dark:text-secondary-50">
      <span
        className="mr-auto cursor-pointer md:hidden"
        onClick={() => {
          setTransition(true);
          handleMenu();
        }}
      >
        <Menu />
      </span>

      <ul
        className={`${transition ? "transition-transform duration-700 ease-in-out" : ""} ${
          showMenu ? "translate-x-[0]" : "-translate-x-full"
        } absolute left-[0px] top-[0px] flex h-[100vh] w-[250px] basis-[484px] flex-col items-center justify-center gap-[20px]  bg-surface-700 text-[18px] md:static md:mr-auto md:flex md:h-auto md:w-auto md:translate-x-[0] md:flex-row md:bg-transparent md:text-base md:transition-none`}
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
          ["Experiences", "#experiences"],
          ["Projects", "#projects"],
          ["Contact", "#contact"],
        ].map(([title, url], index) => {
          return (
            <li
              key={index}
              className={`${
                transition ? "transition-all duration-200 ease-in-out" : ""
              } w-fit border-b-2 border-transparent text-center hover:border-secondary-200 hover:bg-surface-500 hover:text-secondary-200 ${
                showMenu ? "opacity-100" : "opacity-0"
              } w-full md:border-b-0 md:opacity-100 md:transition-none`}
            >
              <a
                className="block h-full w-full p-1 md:inline-block md:h-auto md:w-auto md:p-[0px]"
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
        <li
          className={`${
            transition ? "transition-all duration-200 ease-in-out" : ""
          } ${
            showMenu ? "opacity-100" : "opacity-0"
          } w-fit text-center md:opacity-100 md:transition-none`}
        >
          <a
            className="block rounded-md bg-secondary-600 px-[10px] py-[5px] transition-colors hover:bg-secondary-500 hover:text-white"
            href={process.env.NEXT_PUBLIC_RESUME_LINK}
          >
            Resume
          </a>
        </li>
      </ul>
      <div className="flex basis-[186px] gap-[10px]">
        <div className="flex basis-[64px] items-center gap-[10px]">
          <BrazilFlag />
          <UsFlag />
        </div>
        <div className="flex basis-[112px] items-center gap-[10px]">
          <span>
            <SunIcon />
          </span>
          <Switch />
          <span>
            <MoonIcon />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

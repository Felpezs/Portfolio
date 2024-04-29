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
import { getDictionary } from "@/get-dictionary";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale } from "@/i18n-config";

const Navbar = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["navbar"];
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [transition, setTransition] = useState(false);
  const matches = useBreakpoint("md", "min-width");

  const pathName = usePathname();
  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

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
    <nav className="top fixed z-30 flex w-full flex-row gap-1 border-b-[3px] border-secondary-600 bg-surface-500 px-2 py-1 text-secondary-50 md:px-2 lg:px-3 dark:border-secondary-900 dark:bg-surface-700 dark:text-secondary-50">
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
        } absolute left-[0px] top-[0px] flex h-[100vh] w-[250px] basis-[484px] flex-col items-center justify-center gap-[20px]  bg-surface-500 text-[18px] md:static md:mr-auto md:flex md:h-auto md:w-auto md:translate-x-[0] md:flex-row md:bg-transparent md:text-base md:transition-none`}
      >
        <span
          className="absolute right-1 top-1 cursor-pointer md:hidden"
          onClick={handleMenu}
        >
          <Close />
        </span>

        {[
          ["Home", "#home"],
          [dictionary.about, "#about"],
          [dictionary.experiences, "#experiences"],
          [dictionary.projects, "#projects"],
          [dictionary.contact, "#contact"],
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
            className="block rounded-md bg-secondary-500 px-[10px] py-[5px] transition-colors hover:bg-secondary-600 hover:text-white dark:hover:bg-secondary-300"
            href={pathName.endsWith("pt-BR") ? process.env.NEXT_PUBLIC_RESUME_LINK_BR:process.env.NEXT_PUBLIC_RESUME_LINK_EN}
          >
            {dictionary.resume}
          </a>
        </li>
      </ul>
      <div className="flex basis-[186px] gap-[10px]">
        <div className="flex basis-[64px] items-center gap-[10px]">
          <Link href={redirectedPathName("pt-BR")}>
            <BrazilFlag />
          </Link>
          <Link href={redirectedPathName("en-US")}>
            <UsFlag />
          </Link>
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

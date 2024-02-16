import React from "react";
import BrazilFlag from "../icons/BrazilFlag";
import UsFlag from "../icons/UsFlag";
import SunIcon from "../icons/SunIcon";
import MoonIcon from "../icons/MoonIcon";
import Switch from "./Switch";

const Navbar = () => {
  return (
    <nav className="dark:text-secondary-50 px-3 py-1 border-b-[3px] bg-surface-800 border-secondary-900 flex flex-row fixed top w-full">
      <ul className="flex flex-row gap-1 mr-auto">
        {[
          ["Home", "#"],
          ["About", "#"],
          ["Experience", "#"],
          ["Projects", "#"],
          ["Contact", "#"],
        ].map(([title, url], index) => {
          return (
            <li key={index}>
              <a className="hover:text-secondary-200" href={url}>
                {title}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="flex gap-1">
        <div className="flex gap-[10px]">
          <BrazilFlag />
          <UsFlag />
        </div>
        <div className="flex gap-[10px]">
          <SunIcon />
          <Switch />
          <MoonIcon />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

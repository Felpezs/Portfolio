import { useState } from "react";

const Switch = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    document.querySelector("html")?.classList.toggle("dark");
    setIsDarkMode((prevState) => !prevState);
  };

  return (
    <div
      className="relative h-[24px] basis-[52px] cursor-pointer rounded-full bg-secondary-600 px-[4px] py-[2px] dark:bg-secondary-800"
      onClick={toggleTheme}
    >
      <div
        className={`absolute ${isDarkMode ? "left-[calc(100%-4px)] -translate-x-full" : "left-[4px]"} h-1 w-1 rounded-full bg-white transition-all duration-300`}
      ></div>
    </div>
  );
};

export default Switch;

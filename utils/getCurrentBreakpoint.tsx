import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config";

const fullConfig = resolveConfig(tailwindConfig);

type Screens = keyof typeof fullConfig.theme.screens;

export const getBreakpointValue = (value: Screens): number =>
  parseInt(
    fullConfig.theme.screens[value].slice(
      0,
      fullConfig.theme.screens[value].indexOf("px")
    )
  );

export const getCurrentBreakpoint = (): string => {
  let currentBreakpoint: string = "";
  let biggestBreakpointValue = 0;

  for (const breakpoint of Object.keys(fullConfig.theme.screens)) {
    const breakpointValue = getBreakpointValue(breakpoint as Screens);
    if (
      breakpointValue > biggestBreakpointValue &&
      window.innerWidth >= breakpointValue
    ) {
      biggestBreakpointValue = breakpointValue;
      currentBreakpoint = breakpoint as Screens;
    }
  }
  return currentBreakpoint;
};

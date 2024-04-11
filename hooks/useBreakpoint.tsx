import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config";
import { useMediaQuery } from "react-responsive";
import { getBreakpointValue } from "@/utils/getCurrentBreakpoint";
import { useEffect, useState } from "react";

const fullConfig = resolveConfig(tailwindConfig);

type Screens = keyof typeof fullConfig.theme.screens;

type MediaQuery =
  | "min-width"
  | "max-width"
  | "min-device-width"
  | "max-device-width";

export const useBreakpoint = (breakpoint: Screens, query: MediaQuery) => {
  const [match, setMatch] = useState(false);
  const value = getBreakpointValue(breakpoint);

  const matchMedia = useMediaQuery({ query: `(${query}:${value}px)` });

  useEffect(() => {
    setMatch(matchMedia);
  }, [matchMedia]);

  return match;
};

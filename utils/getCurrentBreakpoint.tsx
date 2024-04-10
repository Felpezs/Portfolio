import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config";

const fullConfig = resolveConfig(tailwindConfig);

type Screens = keyof typeof fullConfig.theme.screens;

export const getBreakpointValue = (value: Screens): number =>
  parseInt(
    fullConfig.theme.screens[value].slice(
      0,
      fullConfig.theme.screens[value].indexOf("px"),
    ),
  );

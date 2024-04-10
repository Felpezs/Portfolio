import React from "react";

type DotProps = {
  isActive: Boolean;
};

const DotIndicator = ({ isActive }: DotProps) => {
  return (
    <div
      className={` rounded-full inline-block ${
        isActive
          ? "bg-secondary-600 w-[16px] h-[16px]"
          : "bg-neutral-600 w-[12px] h-[12px]"
      }`}
    ></div>
  );
};

export default DotIndicator;

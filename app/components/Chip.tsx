import React from "react";

export type ChipProps = {
  children: string;
};

const Chip: React.FC<ChipProps> = ({ children }) => {
  return (
    <div className="w-fit h-[20px] bg-secondary-200 rounded-full px-[16px] border-[2px] border-secondary-300 flex items-center">
      <p className="text-xs text-black font-medium">{children}</p>
    </div>
  );
};

export default Chip;

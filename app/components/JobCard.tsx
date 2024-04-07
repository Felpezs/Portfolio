"use client";

import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { ChipProps } from "./Chip";

type JobCardProps = {
  fromDate: string;
  toDate: string;
  company: string;
  description: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  children?: React.ReactElement<ChipProps> | React.ReactElement<ChipProps>[];
};

export type JobCardRef = {
  setIsActive: Dispatch<SetStateAction<boolean>>;
};

const JobCard = forwardRef<JobCardRef | null, JobCardProps>(function JobCard(
  { fromDate, toDate, company, description, onClick, children },
  ref
) {
  const [isActive, setIsActive] = useState<boolean>(false);

  useImperativeHandle(
    ref,
    () => {
      return {
        setIsActive,
      };
    },
    []
  );

  return (
    <div className="flex gap-1">
      <p className="text-base text-neutral-600 min-w-[120px] text-right">
        {fromDate}-{toDate}
      </p>
      <div className="h-auto min-w-[4px]">
        <hr
          className={`h-full border-none transition ${
            isActive
              ? "w-[4px] text-white bg-white"
              : "w-[2px] text-neutral-700 bg-neutral-700 mx-auto"
          }`}
        />
      </div>
      <div onClick={onClick} className="cursor-pointer">
        <h3 className="text-white mb-1">{company}</h3>
        <p className="text-neutral-500 mb-1">{description}</p>
        <div className="flex gap-[10px] mb-1 flex-wrap">{children}</div>
      </div>
    </div>
  );
});

export default JobCard;

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

  const deactivatedHr = (
    <hr className="h-full border-none w-[2px] text-neutral-700 bg-neutral-700 mx-auto" />
  );
  const activatedHr = (
    <hr className="h-full border-none w-[4px] text-white bg-white" />
  );

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
    <div className="flex gap-1 w-6/12 min-h-[230px]">
      <p className="text-base text-neutral-600 min-w-[120px] text-right">
        {fromDate}-{toDate}
      </p>
      <div className="h-auto min-w-[4px]">
        {isActive ? activatedHr : deactivatedHr}
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

"use client";

import {
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
  children?: React.ReactElement<ChipProps> | React.ReactElement<ChipProps>[];
};

type Ref = {
  setIsActive: Dispatch<SetStateAction<boolean>>;
};

const JobCard = forwardRef<Ref, JobCardProps>(function JobCard(
  { fromDate, toDate, company, description, children },
  ref
) {
  const [isActive, setIsActive] = useState<boolean>(false);

  const deactivatedHr = (
    <hr className="h-auto border-none w-[2px] text-neutral-700 bg-neutral-700" />
  );
  const activatedHr = (
    <hr className="h-auto border-none w-[4px] text-white bg-white" />
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
      {isActive ? activatedHr : deactivatedHr}
      <div>
        <h3 className="text-white mb-1">{company}</h3>
        <p className="text-neutral-500 mb-1">{description}</p>
        <div className="flex gap-[10px] mb-1 flex-wrap">{children}</div>
      </div>
    </div>
  );
});

export default JobCard;

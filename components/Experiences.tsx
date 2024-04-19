"use client";
import data from "@/json/jobs.json";
import { useState } from "react";
import Chip from "./Chip";

const Experiences = () => {
  const [activeJob, setActiveJob] = useState(data.jobs[0].index ?? null);
  const jobs = data.jobs;

  return (
    <>
      <h2 className="col-span-full mb-2 text-center text-3xl text-white md:text-left lg:text-4xl">
        Experiences
      </h2>
      <ul className="col-span-full mb-2 h-fit overflow-hidden rounded-md bg-surface-600 text-base text-secondary-50 md:col-span-3 md:mb-[0px] lg:col-span-4 lg:max-w-[300px]">
        {jobs.map((job) => (
          <li
            key={job.index}
            className={`cursor-pointer  border-l-4 px-2 py-1 transition-colors  ${activeJob == job.index ? "border-secondary-300 text-secondary-200" : "border-transparent hover:border-secondary-300 hover:text-secondary-200"}`}
            onClick={() => {
              setActiveJob(job.index);
            }}
          >
            {job.company}
          </li>
        ))}
      </ul>
      <div className="col-span-full min-h-[300px] text-white md:col-span-5 lg:col-span-8">
        <div className="mb-1 flex items-center justify-between">
          <h3 className="text-balance pr-1 text-lg lg:text-2xl">
            {jobs[activeJob].role}
          </h3>
          <span className="text-base text-neutral-300">
            {jobs[activeJob].date}
          </span>
        </div>
        <h3 className="mb-1 text-lg text-secondary-300">
          {jobs[activeJob].company}
        </h3>
        <p className="mb-1 text-base text-neutral-500 lg:text-lg">
          {jobs[activeJob].description}
        </p>
        <div className="flex flex-wrap gap-[10px]">
          {jobs[activeJob].technologies.map((technology, index) => (
            <Chip key={index}>{technology}</Chip>
          ))}
        </div>
      </div>
    </>
  );
};

export default Experiences;

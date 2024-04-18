"use client";
import data from "@/json/jobs.json";
import { useState } from "react";
import Chip from "./Chip";

const Experiences = () => {
  const [activeJob, setActiveJob] = useState(data.jobs[0].index ?? null);
  const jobs = data.jobs;

  return (
    <>
      <h2 className="col-span-full mb-2 text-3xl text-white lg:text-4xl">
        Experiences
      </h2>
      <ul className="col-span-1 h-fit rounded-md bg-surface-600 text-lg text-secondary-50 sm:col-span-3">
        {jobs.map((job) => (
          <li
            key={job.index}
            className={`cursor-pointer border-l-4 p-1 transition-colors  ${activeJob == job.index ? "border-secondary-300 text-secondary-200" : "border-transparent hover:border-secondary-300 hover:text-secondary-200"}`}
            onClick={() => {
              setActiveJob(job.index);
            }}
          >
            {job.company}
          </li>
        ))}
      </ul>
      <div className="col-span-9 min-h-[300px] text-white">
        <div className="mb-1 flex items-center justify-between">
          <h3 className="text-2xl">{jobs[activeJob].role}</h3>
          <span className="text-neutral-300">{jobs[activeJob].date}</span>
        </div>
        <h3 className="mb-1 text-secondary-300">{jobs[activeJob].company}</h3>
        <p className="mb-1 text-lg text-neutral-500">
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

"use client";
import { jobs } from "@/json/jobs.json";
import JobCard, { JobCardRef } from "@/app/components/JobCard";
import Chip from "@/app/components/Chip";
import { useEffect, useRef, useState } from "react";

const Experiences = () => {
  const jobCardRefs = useRef<(JobCardRef | null)[]>([]);
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);

  useEffect(() => {
    jobCardRefs.current[0]?.setIsActive(true);
    setActiveCardIndex(0);
  }, []);

  const onCardClick = (key: number) => {
    if (key === activeCardIndex) return;

    jobCardRefs.current[activeCardIndex]?.setIsActive(false);
    jobCardRefs.current[key]?.setIsActive(true);
    setActiveCardIndex(key);
  };

  return (
    <>
      <h2 className="text-white text-center mb-2">Experiences</h2>
      {jobs.map((job, i) => {
        return (
          <JobCard
            key={job.index}
            company={job.company}
            description={job.description}
            fromDate={job.fromDate}
            toDate={job.toDate}
            ref={(el) => (jobCardRefs.current[i] = el)}
            onClick={() => onCardClick(job.index)}
          >
            {job.technologies.map((technology, index) => (
              <Chip key={index}>{technology}</Chip>
            ))}
          </JobCard>
        );
      })}
    </>
  );
};

export default Experiences;

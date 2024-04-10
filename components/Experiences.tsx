"use client";
import data from "@/json/jobs.json";
import JobCard, { JobCardRef } from "@/components/JobCard";
import Chip from "@/components/Chip";
import { useEffect, useRef, useState } from "react";
import Carousel from "@/components/Carousel/Carousel";

const Experiences = () => {
  const jobCardRefs = useRef<(JobCardRef | null)[]>([]);
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);

  useEffect(() => {
    jobCardRefs.current[0]?.setIsActive(true);
  }, []);

  const onCardClick = (key: number) => {
    if (key === activeCardIndex) return;

    jobCardRefs.current[activeCardIndex]?.setIsActive(false);
    jobCardRefs.current[key]?.setIsActive(true);
    setActiveCardIndex(key);
  };

  return (
    <>
      <h2 className="mb-2 text-center text-white">Experiences</h2>
      <div className="flex gap-1">
        <div className="flex min-h-[230px] w-full flex-col lg:w-6/12">
          {data.jobs.map((job, i) => {
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
        </div>
        <Carousel
          className="hidden w-6/12 lg:block"
          carouselItems={data.jobs[activeCardIndex].projects}
        />
      </div>
    </>
  );
};

export default Experiences;

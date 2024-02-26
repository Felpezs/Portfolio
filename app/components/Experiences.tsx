"use client";
import data from "@/json/jobs.json";
import JobCard, { JobCardRef } from "@/app/components/JobCard";
import Chip from "@/app/components/Chip";
import { useEffect, useRef, useState } from "react";
import Carousel from "@/app/components/Carousel/Carousel";
import CarouselItem from "./Carousel/CarouselItem";

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
      <div className="flex gap-1">
        <div className="flex flex-col w-6/12 min-h-[230px]">
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
        <div className="w-6/12">
          <Carousel>
            <CarouselItem imgSrc={data.jobs[0].projects[0].imageSrc} />
            <CarouselItem imgSrc={data.jobs[0].projects[1].imageSrc} />
            <CarouselItem imgSrc={data.jobs[0].projects[2].imageSrc} />
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Experiences;

"use client";

import Button from "./Button";
import Chip from "./Chip";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <>
      <h2 className="text-white text-center">Projects</h2>
      <p className="text-neutral-500 text-lg text-center">
        What I&apos;ve been building
      </p>
      <div className="flex items-stretch gap-1 justify-center">
        <ProjectCard
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsIFvpWuFeaq8my6px7_2YpoelERwQt5YyrFpAOTdRyQ&s"
          projectTitle="Vampetaço"
          imageAlt=""
          description="lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet "
        >
          <Chip>My chip</Chip>
        </ProjectCard>
        <ProjectCard
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsIFvpWuFeaq8my6px7_2YpoelERwQt5YyrFpAOTdRyQ&s"
          projectTitle="Vampetaço"
          imageAlt=""
          description=""
        >
          <Chip>My chip</Chip>
        </ProjectCard>
        <ProjectCard
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsIFvpWuFeaq8my6px7_2YpoelERwQt5YyrFpAOTdRyQ&s"
          projectTitle="Vampetaço"
          imageAlt=""
          description=""
        >
          <Chip>My chip</Chip>
        </ProjectCard>
      </div>
      <Button
        onClick={() => {}}
        variant="primary"
        className="my-[0px] mx-auto block"
      >
        See All
      </Button>
    </>
  );
};

export default Projects;

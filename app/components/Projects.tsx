"use client";

import Button from "./Button";
import Chip from "./Chip";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <>
      <h2 className="text-white text-center mb-2">Projects</h2>
      <p className="text-neutral-500 text-lg text-center mb-2">
        What I&apos;ve been building
      </p>
      <div className="flex items-stretch gap-1 justify-center mb-2">
        <ProjectCard
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsIFvpWuFeaq8my6px7_2YpoelERwQt5YyrFpAOTdRyQ&s"
          projectTitle="Vampetaço"
          imageAlt=""
          description="lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet "
          projectUrl=""
        >
          <Chip>My chip</Chip>
        </ProjectCard>
        <ProjectCard
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsIFvpWuFeaq8my6px7_2YpoelERwQt5YyrFpAOTdRyQ&s"
          projectTitle="Vampetaço"
          imageAlt=""
          description=""
          projectUrl=""
        >
          <Chip>My chip</Chip>
        </ProjectCard>
        <ProjectCard
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsIFvpWuFeaq8my6px7_2YpoelERwQt5YyrFpAOTdRyQ&s"
          projectTitle="Vampetaço"
          imageAlt=""
          description=""
          projectUrl=""
        >
          <Chip>My chip</Chip>
        </ProjectCard>
      </div>
      <a
        href="https://github.com/Felpezs"
        target="_blank"
        referrerPolicy="no-referrer"
        className="block w-fit mx-auto"
      >
        <Button variant="primary">See All</Button>
      </a>
    </>
  );
};

export default Projects;

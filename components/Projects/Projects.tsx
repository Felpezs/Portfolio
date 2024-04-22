"use client";

import Button from "../Button";
import ProjectCard from "./ProjectCard";
import data from "@/json/projects.json";

const Projects = () => {
  return (
    <>
      <h2 className="mb-1 text-center text-3xl text-white lg:text-4xl">
        Projects
      </h2>
      <p className="mb-2 text-center text-lg text-neutral-500">
        What I&apos;ve been building
      </p>
      <div className="mb-2 flex flex-wrap justify-center gap-1">
        {data.projects.map((project) => (
          <ProjectCard
            key={project.index}
            imageSrc={project.imageSrc}
            imageAlt={project.imageAlt}
            description={project.description}
            projectTitle={project.title}
            projectUrl={project.url}
            technologies={project.technologies}
          />
        ))}
      </div>
      <a
        href="https://github.com/Felpezs"
        target="_blank"
        referrerPolicy="no-referrer"
        className="mx-auto block w-fit"
      >
        <Button variant="primary">See All</Button>
      </a>
    </>
  );
};

export default Projects;

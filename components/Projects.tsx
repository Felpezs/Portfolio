"use client";

import Button from "./Button";
import Chip from "./Chip";
import ProjectCard from "./ProjectCard";
import data from "@/json/projects.json";

const Projects = () => {
  return (
    <>
      <h2 className="text-white text-center mb-2">Projects</h2>
      <p className="text-neutral-500 text-lg text-center mb-2">
        What I&apos;ve been building
      </p>
      <div className="flex items-stretch gap-1 justify-center mb-2">
        {data.projects.map((project, index) => (
          <ProjectCard
            key={project.index}
            imageSrc={project.imageSrc}
            imageAlt={project.imageAlt}
            description={project.description}
            projectTitle={project.title}
            projectUrl={project.url}
          >
            {project.technologies.map((stack, index) => (
              <Chip key={stack.index}>{stack.name}</Chip>
            ))}
          </ProjectCard>
        ))}
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

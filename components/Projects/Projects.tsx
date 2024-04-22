"use client";

import { getDictionary } from "@/get-dictionary";
import Button from "../Button";
import ProjectCard from "./ProjectCard";
import data from "@/json/projects.json";
import { Locale } from "@/i18n-config";

const Projects = ({
  dictionary,
  lang,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["projects"];
  lang: Locale;
}) => {
  return (
    <>
      <h2 className="mb-1 text-center text-3xl text-white lg:text-4xl">
        {dictionary.title}
      </h2>
      <p className="mb-2 text-center text-lg text-neutral-500">
        {dictionary.subtitle}
      </p>
      <div className="mb-2 flex flex-wrap justify-center gap-1">
        {data.projects.map((project) => (
          <ProjectCard
            key={project.index}
            imageSrc={project.imageSrc}
            imageAlt={project.imageAlt}
            description={project.description[lang]}
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
        <Button variant="primary">{dictionary.button}</Button>
      </a>
    </>
  );
};

export default Projects;

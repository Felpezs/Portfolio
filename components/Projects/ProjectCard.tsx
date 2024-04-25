import React from "react";
import Chip from "../Chip";
import Image from "next/image";

type ProjectCardProps = {
  imageSrc: string;
  imageAlt: string;
  projectUrl: string;
  projectTitle: string;
  description: string;
  technologies: { index: number; name: string }[];
};

const navigate = (url: string) => {
  window.open(url);
};

const ProjectCard = ({
  imageSrc,
  imageAlt,
  projectTitle,
  projectUrl,
  description,
  technologies,
}: ProjectCardProps) => {
  return (
    <div
      className="flex h-[450px] max-w-[350px] flex-grow basis-[300px] cursor-pointer flex-col rounded-[20px] border-[1px] border-transparent bg-surface-700 p-1 transition-all ease-in-out hover:scale-105 hover:border-secondary-300 dark:bg-surface-500"
      onClick={() => navigate(projectUrl)}
    >
      <Image
        alt={imageAlt}
        src={imageSrc}
        width={387}
        height={200}
        className="mb-1 rounded-[10px]"
      />
      <h3 className="mb-1 text-white">{projectTitle}</h3>
      <div className="mb-1 flex flex-wrap gap-[10px]">
        {technologies.map((technology) => (
          <Chip key={technology.index}>{technology.name}</Chip>
        ))}
      </div>
      <p className="grow overflow-y-auto text-neutral-300 dark:text-neutral-500">
        {description}
      </p>
    </div>
  );
};

export default ProjectCard;

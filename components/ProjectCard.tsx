import React from "react";
import { ChipProps } from "./Chip";
import Image from "next/image";

type ProjectCardProps = {
  imageSrc: string;
  imageAlt: string;
  projectUrl: string;
  projectTitle: string;
  description: string;
  children: React.ReactElement<ChipProps> | React.ReactElement<ChipProps>[];
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
  children,
}: ProjectCardProps) => {
  return (
    <div
      className="min-h-[450px] w-[427px] cursor-pointer rounded-[20px] border-[1px] border-transparent bg-surface-600 p-1 transition-all ease-in-out hover:scale-105 hover:border-secondary-300"
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
      <div className="mb-1 flex flex-wrap gap-[10px]">{children}</div>
      <p className="text-neutral-500">{description}</p>
    </div>
  );
};

export default ProjectCard;

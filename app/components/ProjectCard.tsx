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

const navigate = () => {
  //Navigate to url
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
      className="bg-surface-600 min-h-[450px] w-[427px] p-1 rounded-[20px] transition-all ease-in-out hover:scale-105 cursor-pointer"
      onClick={() => navigate()}
    >
      <Image
        alt={imageAlt}
        src={imageSrc}
        width={387}
        height={200}
        className="rounded-t-[20px] mb-1"
      />
      <h3 className="text-white mb-1">{projectTitle}</h3>
      <div className="mb-1 flex gap-[10px] flex-wrap">{children}</div>
      <p className="text-neutral-500">{description}</p>
    </div>
  );
};

export default ProjectCard;

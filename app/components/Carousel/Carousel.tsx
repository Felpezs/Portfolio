import { useState } from "react";
import CarouselItem from "./CarouselItem";

type Project = {
  index: number;
  description: string;
  imageSrc: string;
};

type CarouselProps = {
  projects: Project[];
};

const Carousel = ({ projects }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const getCarouselElements = () => {
    const lenght = projects.length;
    const prevIndex = (currentIndex - 1 + lenght) % lenght;
    const nextIndex = (currentIndex + 1 + lenght) % lenght;

    return { prevIndex, nextIndex };
  };

  return (
    <>
      {projects.map((project) => (
        <CarouselItem key={project.index} imgSrc={project.imageSrc} />
      ))}
    </>
  );
};

export default Carousel;

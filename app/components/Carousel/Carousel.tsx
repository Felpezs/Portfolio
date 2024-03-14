import React, { useState } from "react";
import Arrow from "../icons/Arrow";
import DotIndicator from "../icons/DotIndicator";
import CarouselItem from "./CarouselItem";

export type CarouselItemProps = {
  imageSrc: string;
  description: string;
  index: number;
};

type CarouselProps = {
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
  carouselItems: CarouselItemProps[];
};

const Carousel = ({ carouselItems, className }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const getPrevIndex = (currentIndex: number) =>
    (currentIndex - 1 + carouselItems.length) % carouselItems.length;

  const getNextIndex = (currentIndex: number) =>
    (currentIndex + 1) % carouselItems.length;

  const getCarouselItemsToShow = () => {
    if (carouselItems.length < 3) return carouselItems;

    const prevIndex = getPrevIndex(currentIndex);
    const nextIndex = getNextIndex(currentIndex);

    const indexes = [prevIndex, currentIndex, nextIndex].sort();

    return indexes.map((index) => carouselItems[index]);
  };

  const handleClickPrev = () =>
    setCurrentIndex((prevState) => getPrevIndex(prevState));

  const handleClickNext = () =>
    setCurrentIndex((prevState) => getNextIndex(prevState));

  return (
    <div className={className}>
      <div className="relative flex align-items h-[279px] mb-[20px] *:absolute *:top-[50%] *:transition-all *:-translate-y-1/2  *:-translate-x-1/2 *:duration-1000 ">
        {getCarouselItemsToShow().map((item, index) => {
          let className = "left-[30%] z-0 w-[297px] opacity-80";

          if (index === currentIndex)
            className = "left-[50%] z-10 opacity-100 w-[419px]";

          if (index === getNextIndex(currentIndex))
            className = "left-[70%] z-0 w-[297px] opacity-80";

          return (
            <CarouselItem
              key={item.index}
              description={item.description}
              imgSrc={item.imageSrc}
              className={className}
            />
          );
        })}
      </div>
      <div className="flex items-center gap-[10px] justify-center h-[46px]">
        <Arrow onClick={handleClickPrev} />
        {carouselItems.map((carouselItem, index) => (
          <DotIndicator
            key={carouselItem.index}
            isActive={index === currentIndex}
          />
        ))}
        <Arrow rotate onClick={handleClickNext} />
      </div>
      <p className="text-neutral-500 mt-1">
        {carouselItems[currentIndex].description}
      </p>
    </div>
  );
};

export default Carousel;

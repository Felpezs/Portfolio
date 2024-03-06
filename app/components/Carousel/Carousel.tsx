import React, { Children, ReactElement, useEffect, useState } from "react";
import { CarouselItemProps } from "./CarouselItem";
import Arrow from "../icons/Arrow";
import DotIndicator from "../icons/DotIndicator";

type CarouselProps = {
  children:
    | React.ReactElement<CarouselItemProps>
    | React.ReactElement<CarouselItemProps>[];
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
};

const Carousel = ({ children, className }: CarouselProps) => {
  const carouselItems = Children.toArray(children);

  const middleOfCarouselItems = Math.floor(carouselItems.length / 2);

  const [currentIndex, setCurrentIndex] = useState<number>(
    middleOfCarouselItems
  );

  useEffect(() => {
    console.log("Current index:" + currentIndex);
  }, [currentIndex]);

  const prevIndex =
    (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  const nextIndex = (currentIndex + 1) % carouselItems.length;

  const getCarouselItemsToShow = () => {
    if (carouselItems.length <= 3) return carouselItems;

    const indexes = [prevIndex, currentIndex, nextIndex];

    return indexes.map((index) => carouselItems[index]);
  };

  const handleClickPrev = () => {
    setCurrentIndex((prevState) => prevState - 1);
  };

  const handleClickNext = () => {
    setCurrentIndex((prevState) => prevState + 1);
  };

  return (
    <div className={className}>
      <div className="flex justify-center items-center transition transform duration-[5s] h-[279px] flex-shrink-0 mb-[20px]">
        {getCarouselItemsToShow().map((item, index) => {
          return React.cloneElement(
            item as React.ReactElement<CarouselItemProps>,
            {
              className:
                "first:w-[297px] last:w-[297px] " +
                `${
                  index === 1
                    ? "absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
                    : ""
                }`,
            }
          );
        })}
      </div>
      <div className="flex items-center gap-[10px] justify-center h-[46px]">
        <Arrow onClick={handleClickPrev} />
        {carouselItems.map((carouselItem, index) => (
          <DotIndicator
            key={(carouselItem as React.ReactElement<CarouselItemProps>).key}
            isActive={index === 0}
          />
        ))}
        <Arrow rotate onClick={handleClickNext} />
      </div>
      <p className="text-neutral-500 mt-1">
        {
          (carouselItems[currentIndex] as React.ReactElement<CarouselItemProps>)
            .props.description
        }
      </p>
    </div>
  );
};

export default Carousel;

import React, { Children, ReactElement, useState } from "react";
import { CarouselItemProps } from "./CarouselItem";

type CarouselProps = {
  children:
    | React.ReactElement<CarouselItemProps>
    | React.ReactElement<CarouselItemProps>[];
};

const Carousel = ({ children }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const carouselItems = Children.toArray(children);

  const prevIndex =
    (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  const nextIndex = (currentIndex + 1) % carouselItems.length;

  const getCarouselItemsToShow = () => {
    if (carouselItems.length <= 3) return carouselItems;

    const indexes = [prevIndex, currentIndex, nextIndex];

    return indexes.map((index) => carouselItems[index]);
  };

  const handleClick = (index: number) => {
    setCurrentIndex(index);
  };
  const a = carouselItems[0] as ReactElement<CarouselItemProps>;

  return (
    <div className="flex justify-center items-center transition transform duration-[5s] min-h-[275px] flex-shrink-0">
      {getCarouselItemsToShow().map((item, index) => {
        return React.cloneElement(
          item as React.ReactElement<CarouselItemProps>,
          {
            className:
              "first:w-[297px] last:w-[297px] " +
              `${
                index === 1
                  ? "absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-auto h-auto"
                  : ""
              }`,
          }
        );
      })}
    </div>
  );
};

export default Carousel;

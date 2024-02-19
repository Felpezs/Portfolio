import React, { Children, useCallback, useEffect, useState } from "react";
import CarouselItem, { CarouselItemProps } from "./CarouselItem";

type CarouselProps = {
  children:
    | React.ReactElement<CarouselItemProps>
    | [
        React.ReactElement<CarouselItemProps>,
        React.ReactElement<CarouselItemProps>,
      ]
    | [
        React.ReactElement<CarouselItemProps>,
        React.ReactElement<CarouselItemProps>,
        React.ReactElement<CarouselItemProps>
      ];
};

const Carousel = ({ children }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [prevIndex, setPrevIndex] = useState<number>(0);
  const [nextIndex, setNextIndex] = useState<number>(0);

  const getCarouselElements = useCallback(() => {
    const length = Children.count(children);
    const prevIndex = (currentIndex - 1 + length) % length;
    const nextIndex = (currentIndex + 1 + length) % length;
    setPrevIndex(prevIndex);
    setNextIndex(nextIndex);
  }, [currentIndex, children]);

  useEffect(() => {
    getCarouselElements();
  }, [getCarouselElements]);

  return <>{Children.toArray(children)[1]}</>;
};

export default Carousel;

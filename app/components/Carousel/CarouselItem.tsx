import Image from "next/image";
import React from "react";

export type CarouselItemProps = {
  imgSrc: string;
  description: string;
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
};

const CarouselItem = ({ imgSrc, className }: CarouselItemProps) => {
  return (
    <Image
      src={imgSrc}
      alt=""
      width={419}
      height={275}
      className={"rounded-[40px] " + className}
      id="slide"
    />
  );
};

export default CarouselItem;

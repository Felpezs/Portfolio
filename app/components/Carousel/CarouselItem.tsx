import Image from "next/image";
import React from "react";

type CarouselItemProps = {
  imgSrc: string;
};

const CarouselItem = ({ imgSrc }: CarouselItemProps) => {
  return (
    <div className="w-fit">
      <Image
        src={imgSrc}
        alt=""
        width={419}
        height={275}
        className="rounded-[40px]"
      />
    </div>
  );
};

export default CarouselItem;

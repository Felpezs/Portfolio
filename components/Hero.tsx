"use client";

import { useTypewriter } from "react-simple-typewriter";
import ArrowCircle from "./icons/ArrowCircle";
import { getDictionary } from "@/get-dictionary";

const Hero = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["hero"];
}) => {
  const [text] = useTypewriter({
    words: dictionary.typewriterDynamic,
    loop: 0,
  });
  return (
    <>
      <h3 className="mb-1 text-neutral-600 md:text-xl lg:text-3xl">
        {dictionary.presentation}
      </h3>
      <h1 className="mb-1 text-balance text-white md:text-4xl lg:text-6xl">
        Felipe Eduardo
      </h1>
      <h1 className="mb-1 text-balance text-white md:text-4xl lg:text-6xl">
        {dictionary.typewriterStatic + " " + text}
      </h1>
      <h3 className="mb-1 text-neutral-600 md:text-xl lg:text-3xl">
        {dictionary.description}
      </h3>
      <div className="flex justify-center py-1">
        <a href="#about">
          <ArrowCircle />
        </a>
      </div>
    </>
  );
};

export default Hero;

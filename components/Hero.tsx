"use client";

import { useTypewriter } from "react-simple-typewriter";
import ArrowCircle from "./icons/ArrowCircle";

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "a Software Developer",
      "Turning Designs Into Interactive Experiences",
      "a FrontEnd Developer",
      "a Tech Enthusiast",
    ],
    loop: 0,
  });
  return (
    <>
      <h3 className="mb-1 text-neutral-600 md:text-xl lg:text-3xl">
        Hello, I am
      </h3>
      <h1 className="mb-1 text-balance text-white md:text-4xl lg:text-6xl">
        Felipe Eduardo
      </h1>
      <h1 className="mb-1 text-balance text-white md:text-4xl lg:text-6xl">
        I&apos;m {text}
      </h1>
      <h3 className="mb-1 text-neutral-600 md:text-xl lg:text-3xl">
        I’m a developer specialized in the development of user interfaces,
        providing great experiences for the users.
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

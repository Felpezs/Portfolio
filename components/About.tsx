"use client";
import { getDictionary } from "@/get-dictionary";
import Button from "./Button";

const About = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["about"];
}) => {
  return (
    <>
      <h2 className="text-3xl text-white lg:text-4xl">{dictionary.title}</h2>
      <p className="text-base text-neutral-500 md:text-lg">
        {dictionary.content[0]}
      </p>
      <p className="text-base text-neutral-500 md:text-lg">
        {dictionary.content[1]}
      </p>
      <p className="text-left text-base text-neutral-500 md:text-lg">
        {dictionary.content[2]}
      </p>
      <Button
        variant="primary"
        onClick={() => {
          window.location.href = "#experiences";
        }}
        className="lg:ml-auto"
      >
        {dictionary.button}
      </Button>
    </>
  );
};

export default About;

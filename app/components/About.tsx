"use client";
import Button from "./Button";

const About = () => {
  return (
    <section className="col-span-7 flex flex-col gap-2">
      <h2 className="text-white">About me</h2>
      <p className="text-neutral-500 text-lg">
        Hello, I&apos;m Felipe Eduardo, a Frontend developer. I hold a
        Bachelor&apos;s degree in Information Systems from the School of
        Technology - UNICAMP. With over 4 years of experience in development, I
        am currently focused on creating exceptional interfaces for global
        users.
      </p>
      <p className="text-neutral-500 text-lg">
        I am passionate about assisting individuals in solving their problems
        and continuously exploring new technologies and methodologies to address
        challenges.
      </p>
      <p className="text-neutral-500 text-lg">
        What truly motivates me is the realization that my expertise is making a
        positive impact on others&apos; lives!
      </p>
      <Button variant="primary" onClick={() => {}} className="ml-auto">
        Check my Projects
      </Button>
    </section>
  );
};

export default About;

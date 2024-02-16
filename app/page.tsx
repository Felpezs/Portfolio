"use client";

import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import ArrowIcon from "./components/icons/ArrowIcon";
import Button from "./components/Button";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="grid grid-cols-12 auto-cols-max gap-x-1 mx-3">
        <section className="col-span-full gap-y-1 my-5 px-[16.89%]">
          <h3 className="text-neutral-600 mb-1">Hello, I am</h3>
          <h1 className="text-white mb-1">Felipe Eduardo</h1>
          <h1 className="text-white mb-1">I&apos;m a software developer</h1>
          <h3 className="text-neutral-600 mb-1 text-balance">
            I’m a developer specialized in the development of user interfaces,
            providing great experiences for the users.
          </h3>
          <div className="flex justify-center py-1">
            <ArrowIcon />
          </div>
        </section>
        <section className="col-span-5 justify-center">
          <Image
            alt="My photo with an abstract object"
            src={"/shaped_photo.png"}
            width={452}
            height={577}
            className="m-auto"
          />
        </section>
        <section className="col-span-7 flex flex-col gap-2">
          <h2 className="text-white">About me</h2>
          <p className="text-neutral-500 text-lg">
            Hello, I&apos;m Felipe Eduardo, a Frontend developer. I hold a
            Bachelor&apos;s degree in Information Systems from the School of
            Technology - UNICAMP. With over 4 years of experience in
            development, I am currently focused on creating exceptional
            interfaces for global users.
          </p>
          <p className="text-neutral-500 text-lg">
            I am passionate about assisting individuals in solving their
            problems and continuously exploring new technologies and
            methodologies to address challenges.
          </p>
          <p className="text-neutral-500 text-lg">
            What truly motivates me is the realization that my expertise is
            making a positive impact on others&apos; lives!
          </p>
          <Button variant="primary" onClick={() => {}} className="ml-auto">
            Check my Projects
          </Button>
        </section>
      </div>
    </main>
  );
}

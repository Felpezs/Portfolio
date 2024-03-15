import Image from "next/image";
import Navbar from "@/app/components/Navbar/Navbar";
import ArrowCircle from "@/app/components/icons/ArrowCircle";
import About from "@/app/components/About";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="grid grid-cols-12 auto-cols-max gap-x-1 gap-y-5 mx-3">
        <section className="col-span-full gap-y-1 mt-5 px-[16.89%]">
          <h3 className="text-neutral-600 mb-1">Hello, I am</h3>
          <h1 className="text-white mb-1">Felipe Eduardo</h1>
          <h1 className="text-white mb-1">I&apos;m a software developer</h1>
          <h3 className="text-neutral-600 mb-1 text-balance">
            I’m a developer specialized in the development of user interfaces,
            providing great experiences for the users.
          </h3>
          <div className="flex justify-center py-1">
            <ArrowCircle />
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
          <About />
        </section>
        <section className="col-span-full">
          <Experiences />
        </section>
        <section className="col-span-full *:mb-2">
          <Projects />
        </section>
      </div>
    </main>
  );
}

import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import ArrowCircle from "@/components/icons/ArrowCircle";
import About from "@/components/About";
import Experiences from "../components/Experiences";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="grid auto-cols-max grid-cols-4 gap-x-1 px-2 md:grid-cols-8 md:px-3 lg:grid-cols-12 [&>*:not(:first-child):not(last-child)]:mb-5">
        <section
          id="home"
          className="col-span-full mt-[80px] flex h-screen flex-col justify-center gap-y-1"
        >
          <h3 className="mb-1 text-neutral-600 md:text-xl lg:text-3xl">
            Hello, I am
          </h3>
          <h1 className="mb-1 text-balance text-white md:text-4xl lg:text-6xl">
            Felipe Eduardo
          </h1>
          <h1 className="mb-1 text-balance text-white md:text-4xl lg:text-6xl">
            I&apos;m a software developer
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
        </section>
        <section
          id="about"
          className="col-span-full grid grid-cols-subgrid place-items-center"
        >
          <Image
            alt="My photo with an abstract object"
            src={"/shaped_photo.png"}
            width={452}
            height={577}
            className="mx-auto hidden lg:col-span-5 lg:block"
          />
          <div className="col-span-full flex flex-col items-center gap-2 lg:col-span-7">
            <About />
          </div>
        </section>
        <section
          id="experiences"
          className="col-span-full grid grid-cols-subgrid"
        >
          <Experiences />
        </section>
        <section id="projects" className="col-span-full">
          <Projects />
        </section>
        <section id="contact" className="col-span-full">
          <Contact />
        </section>
      </div>
      <Footer />
    </main>
  );
}

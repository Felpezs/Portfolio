import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import About from "@/components/About";
import Experiences from "../../components/Experiences";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import Hero from "@/components/Hero";

export default async function HomePage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <main>
      <Navbar dictionary={dictionary.navbar} />
      <div className="grid auto-cols-max grid-cols-4 gap-x-1 px-2 md:grid-cols-8 md:px-3 lg:grid-cols-12 [&>*:not(:first-child):not(last-child)]:mb-5">
        <section
          id="home"
          className="col-span-full mt-[80px] flex h-screen flex-col justify-center gap-y-1"
        >
          <Hero dictionary={dictionary.hero} />
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
          <div className="col-span-full flex flex-col items-center gap-2 lg:col-span-7 lg:items-start">
            <About dictionary={dictionary.about} />
          </div>
        </section>
        <section
          id="experiences"
          className="col-span-full grid grid-cols-subgrid"
        >
          <Experiences dictionary={dictionary.experiences} lang={lang} />
        </section>
        <section id="projects" className="col-span-full">
          <Projects dictionary={dictionary.projects} lang={lang} />
        </section>
        <section id="contact" className="col-span-full">
          <Contact dictionary={dictionary.contact}/>
        </section>
      </div>
      <Footer dictionary={dictionary.footer}/>
    </main>
  );
}

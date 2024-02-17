import Image from "next/image";
import Navbar from "@/app/components/Navbar/Navbar";
import ArrowIcon from "@/app/components/icons/ArrowIcon";
import About from "@/app/components/About";
import { jobs } from "@/json/jobs.json";
import JobCard from "@/app/components/JobCard";
import Chip from "@/app/components/Chip";

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
        <About />
        <section className="col-span-full">
          <h2 className="text-white text-center mb-2">Experiences</h2>
          {jobs.map((job) => (
            <JobCard
              key={job.index}
              company={job.company}
              description={job.description}
              fromDate={job.fromDate}
              toDate={job.toDate}
            >
              {job.technologies.map((technology, index) => (
                <Chip key={index}>{technology}</Chip>
              ))}
            </JobCard>
          ))}
        </section>
      </div>
    </main>
  );
}

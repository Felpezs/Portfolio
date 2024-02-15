import Navbar from "./components/Navbar/Navbar";
import ArrowIcon from "./components/icons/ArrowIcon";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="grid grid-cols-12 gap-x-1 mx-3">
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
      </div>
    </main>
  );
}

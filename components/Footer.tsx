import { getDictionary } from "@/get-dictionary";
import ArrowCircle from "./icons/ArrowCircle";

const Footer = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["footer"];
}) => {
  return (
    <footer className="flex flex-col justify-between gap-2 border-t-[3px] border-secondary-600 bg-surface-500 px-3 py-1 text-neutral-300 sm:flex-row dark:border-secondary-900 dark:bg-surface-700 dark:text-neutral-600">
      <p className="max-w-[700px]">
        {dictionary.description[0]}{" "}
        <span className="text-neutral-50">Figma</span>{" "}
        {dictionary.description[1]}{" "}
        <span className="text-neutral-50">NextJS</span>,{" "}
        <span className="text-neutral-100">TailwindCSS</span>{" "}
        {dictionary.description[2]}{" "}
        <span className="text-neutral-50">Typescript</span>. By Felipe Eduardo
        with ❤️
      </p>
      <div className="flex items-center justify-between gap-1 dark:text-neutral-600">
        <a
          href="https://github.com/Felpezs"
          target="_blank"
          referrerPolicy="no-referrer"
          className="hover:text-neutral-500"
        >
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/felipeed/"
          target="_blank"
          referrerPolicy="no-referrer"
          className="hover:text-neutral-500"
        >
          Linkedin
        </a>
        <a href="#home">
          <ArrowCircle rotate height={24} width={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

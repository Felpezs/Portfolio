import Avatar from "./Avatar";
import Linkedin from "../icons/Linkedin";
import Github from "../icons/Github";
import Form from "./Form";
import { getDictionary } from "@/get-dictionary";

const Contact = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["contact"];
}) => {
  return (
    <div className="flex min-h-[410px] flex-col gap-2 rounded-[20px] bg-surface-700 px-3 py-1 md:flex-row md:justify-between md:gap-4 dark:bg-surface-600">
      <div className="flex flex-grow flex-col gap-2 md:basis-[500px]">
        <Avatar />
        <div>
          <p className="mb-1 text-xl tracking-wider text-white md:text-2xl">
            {dictionary.title}
          </p>
          <p className="mb-1 text-base text-neutral-300 dark:text-neutral-500">
            {dictionary.description[0]}{" "}
            <span className="text-neutral-50">felipeedfreire@gmail.com</span>{" "}
            {dictionary.description[1]}
          </p>
          <div className="flex gap-[8px]">
            <a
              className="h-[48px] w-[48px] cursor-pointer rounded-[8px] bg-surface-500 p-[12px] dark:bg-surface-700"
              href="https://www.linkedin.com/in/felipeed/"
              target="_blank"
              referrerPolicy="no-referrer"
              aria-label="Reach me on Linkedin!"
            >
              <Linkedin />
            </a>
            <a
              href="https://github.com/Felpezs"
              target="_blank"
              referrerPolicy="no-referrer"
              aria-label="Check my projects on Github!"
              className="h-[48px] w-[48px] cursor-pointer rounded-[8px] bg-surface-500 p-[12px] dark:bg-surface-700"
            >
              <Github />
            </a>
          </div>
        </div>
      </div>
      <Form dictionary={dictionary} />
    </div>
  );
};

export default Contact;

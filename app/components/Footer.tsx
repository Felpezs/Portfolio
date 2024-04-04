import ArrowCircle from "./icons/ArrowCircle";

const Footer = () => {
  return (
    <div className="border-t-[3px] border-secondary-900 text-neutral-600 py-1 px-3 mt-5 flex justify-between">
      <p className="max-w-[700px]">
        Designed in <span className="text-neutral-100">Figma</span> and
        developed in Visual Studio Code. Built with{" "}
        <span className="text-neutral-100">Next.js</span>,{" "}
        <span className="text-neutral-100">TailwindCSS</span> and{" "}
        <span className="text-neutral-100">Typescript</span>. By Felipe Eduardo
        with ❤️
      </p>
      <div className="flex text-neutral-600 justify-between min-w-[221px] items-center">
        <a
          href="https://github.com/Felpezs"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/felipeed/"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          Linkedin
        </a>
        <a href="#main">
          <ArrowCircle rotate height={24} width={24} />
        </a>
      </div>
    </div>
  );
};

export default Footer;

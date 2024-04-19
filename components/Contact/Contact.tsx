import Avatar from "./Avatar";
import Linkedin from "../icons/Linkedin";
import Github from "../icons/Github";
import Form from "./Form";

const Contact = () => {
  return (
    <div className="flex min-h-[410px] flex-col gap-2 rounded-[20px] bg-surface-700 px-3 py-1 md:flex-row md:justify-between md:gap-4">
      <div className="flex flex-grow flex-col gap-2 md:basis-[500px]">
        <Avatar />
        <div>
          <p className="mb-1 text-xl tracking-wider text-white md:text-2xl">
            Interested in working with me ?
          </p>
          <p className="mb-1 text-base text-neutral-500">
            I’m always looking forward for new opportunities. Send an email to{" "}
            <span className="text-neutral-50">felipeedfreire@gmail.com</span> or
            reach me out in a social media.
          </p>
          <div className="flex gap-[8px]">
            <a
              className="h-[48px] w-[48px] cursor-pointer rounded-[8px] bg-surface-500 p-[12px]"
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
              className="h-[48px] w-[48px] cursor-pointer rounded-[8px] bg-surface-500 p-[12px]"
            >
              <Github />
            </a>
          </div>
        </div>
      </div>
      <Form />
    </div>
  );
};

export default Contact;

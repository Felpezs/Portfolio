"use client";
import { FormEvent } from "react";
import Button from "../Button";
import Arrow from "../icons/Arrow";
import Avatar from "./Avatar";
import Linkedin from "../icons/Linkedin";
import Github from "../icons/GIthub";

const Contact = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="bg-surface-700 min-h-[410px] rounded-[20px] flex justify-between px-3 py-1">
      <div className="w-[592px] flex flex-col gap-2">
        <Avatar />
        <div>
          <p className="text-white text-lg mb-1 tracking-wider">
            Interested in working with me ?
          </p>
          <p className="text-neutral-500 text-base mb-1">
            I’m always looking forward for new opportunities. Send an email to
            felipeedfreire@gmail.com or reach me out in a social media.
          </p>
          <div className="flex gap-[8px]">
            <a
              className="w-[48px] h-[48px] p-[12px] bg-surface-500 rounded-[8px] cursor-pointer"
              href="https://www.linkedin.com/in/felipeed/"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              <Linkedin />
            </a>
            <a
              href="https://github.com/Felpezs"
              target="_blank"
              referrerPolicy="no-referrer"
              className="w-[48px] h-[48px] p-[12px] bg-surface-500 rounded-[8px] cursor-pointer"
            >
              <Github />
            </a>
          </div>
        </div>
      </div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col flex-grow ml-[140px] gap-[16px]"
      >
        <input
          className="bg-surface-500 text-white rounded-[16px] transition-all  px-[16px] py-[12px] border-2  border-surface-400 placeholder:text-white focus:border-secondary-600 outline-none"
          type="text"
          required
          placeholder="Name"
        />
        <input
          className="bg-surface-500 text-white rounded-[16px] transition-all  px-[16px] py-[12px] border-2  border-surface-400 placeholder:text-white focus:border-secondary-600 outline-none"
          type="email"
          required
          placeholder="E-mail"
        />
        <textarea
          className="bg-surface-500 text-white rounded-[16px] transition-all  px-[16px] py-[12px] border-2  border-surface-400 placeholder:text-white focus:border-secondary-600 outline-none flex-grow"
          required
          placeholder="Your message"
        />
        <Button
          onClick={() => {}}
          variant="secondary"
          className="mt-[16px]"
          icon={<Arrow rotate color="white" />}
        >
          Send me a message
        </Button>
      </form>
    </div>
  );
};

export default Contact;

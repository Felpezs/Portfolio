"use client";
import { FormEvent } from "react";
import Button from "../Button";
import Arrow from "../icons/Arrow";
import Avatar from "./Avatar";

const Contact = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="bg-surface-700 min-h-[410px] rounded-[20px] flex justify-between px-3 py-1">
      <div className="w-[592px] flex flex-col gap-2">
        <Avatar />
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
          placeholder="Email"
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

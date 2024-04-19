"use client";

import { FormEvent, useState } from "react";
import Button from "../Button";
import Arrow from "../icons/Arrow";

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`response status: ${response.status}`);
      }
      alert("Message successfully sent");
    } catch (err) {
      alert("Error, please try resubmitting the form");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex max-w-[600px] flex-grow basis-[400px] flex-col gap-[16px] md:basis-[600px]"
    >
      <input
        className="rounded-[16px] border-2 border-surface-400 bg-surface-500  px-[16px] py-[12px] text-white  outline-none transition-all placeholder:text-white focus:border-secondary-600"
        type="text"
        required
        placeholder="Name"
        name="name"
      />
      <input
        className="rounded-[16px] border-2 border-surface-400 bg-surface-500  px-[16px] py-[12px] text-white  outline-none transition-all placeholder:text-white focus:border-secondary-600"
        type="email"
        required
        placeholder="E-mail"
        name="email"
      />
      <textarea
        className="flex-grow rounded-[16px] border-2 border-surface-400  bg-surface-500 px-[16px] py-[12px]  text-white outline-none transition-all placeholder:text-white focus:border-secondary-600"
        required
        placeholder="Your message"
        name="body"
      />
      <Button
        variant="secondary"
        className="mt-[16px]"
        icon={<Arrow rotate color="white" />}
        isLoading={isLoading}
      >
        Send me a message
      </Button>
    </form>
  );
};

export default Form;

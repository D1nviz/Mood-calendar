"use client";

import React from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import SubmitButton from "./ui/SubmitButton";
import { sendEmail } from "@/actions/sendEmail";

const ContactForm = () => {
  const formAction = async (formData: FormData) => {
    const { error } = await sendEmail(formData);
    if (error) {
      return toast.error(error);
    }

    toast.success("Email sent successfully!", {
      style: {
        background: "#212121",
        color: "#f6f6f6",
      },
    });
  };
  return (
    <>
      <Toaster position="top-center" />
      <motion.section
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        id="contact"
        className="bg-dark-secondary p-7 rounded-md mb-20 w-[min(100%,38rem)] text-center mx-auto mt-16 relative"
      >
        <h2 className="text-xl">
          Please contact me directly at{" "}
          <a
            className="font-semibold underline underline-offset-2"
            href="mailto:eugene.hetsyanyn@gmail.com"
          >
            eugene.hetsyanyn@gmail.com
          </a>{" "}
          or through this form.
        </h2>

        <form className="flex flex-col mt-10 text-black" action={formAction}>
          <input
            className="h-14 px-4 rounded-lg text-text-color-primary  bg-dark-tertiary outline-none placeholder:text-zinc-400 focus:outline-zinc-400 outline-1 duration-200"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
            autoComplete="off"
          />
          <textarea
            className="h-52 my-3 rounded-lg text-text-color-primary  p-4 bg-dark-tertiary placeholder:text-zinc-400  outline-none focus:outline-zinc-400 outline-1 duration-200"
            name="message"
            placeholder="Your message"
            required
            maxLength={5000}
          />
          <SubmitButton />
        </form>
      </motion.section>
    </>
  );
};

export default ContactForm;

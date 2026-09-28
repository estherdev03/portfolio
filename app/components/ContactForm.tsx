"use client";

import React, { useState } from "react";
import { LuSend } from "react-icons/lu";
import { sendEmail } from "./actions";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{
    success: boolean;
    error: Record<string, string>;
  } | null>(null);

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const result = await sendEmail(formData);

    setIsLoading(false);
    setStatus(result);
    if (!result.success) {
      throw new Error("Failed to send message");
    }
    form.reset();
  };

  return (
    <form
      action=""
      className="flex flex-col h-full gap-4"
      onSubmit={(e) => {
        toast.promise(
          handleSubmit(e),
          {
            pending: "Sending message...",
            success: "Message sent successfully 🎉",
            error: "Failed to send message",
          },
          {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            progress: undefined,
            theme: "dark",
          },
        );
      }}
    >
      <div className=" grid grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="text-xs capitalize">
            Your name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="p-1 rounded-md w-full mt-0.5 border border-neutral-600 bg-neutral-800/60 text-neutral-300 px-3"
          />
          {!status?.success && status?.error["name"] && (
            <div className="text-red-500 text-xs mt-1">
              {status?.error["name"]}
            </div>
          )}
        </div>
        <div>
          <label htmlFor="email" className=" text-xs capitalize">
            Your email <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="p-1 rounded-md w-full mt-0.5 border border-neutral-600 bg-neutral-800/60 text-neutral-300 px-3"
          />
          {!status?.success && status?.error["email"] && (
            <div className="text-red-500 text-xs mt-1">
              {status?.error["email"]}
            </div>
          )}
        </div>
      </div>
      <div>
        <label htmlFor="company" className=" text-xs capitalize">
          Company / Organization (Optional)
        </label>
        <input
          type="text"
          name="company"
          id="company"
          className="p-1 rounded-md w-full mt-0.5 border border-neutral-600 bg-neutral-800/60 text-neutral-300 px-3"
        />
      </div>
      <div className="flex flex-col flex-1">
        <label htmlFor="message" className=" text-xs capitalize">
          Message / Role Details <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          id="message"
          className=" p-1 rounded-md w-full flex-1 min-h-32 resize-none mt-0.5 border border-neutral-600 bg-neutral-800/60 text-neutral-300 px-3"
        />
        {!status?.success && status?.error["message"] && (
          <div className="text-red-500 text-xs mt-1">
            {status?.error["message"]}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2">
        {!status?.success && status?.error["server"] && (
          <div className="text-red-500 text-xs">{status?.error["server"]}</div>
        )}
        <button
          className={`bg-white text-black w-full rounded-md py-2 flex items-center justify-center gap-2 cursor-pointer`}
        >
          <LuSend />
          <span>Send Inquiry</span>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;

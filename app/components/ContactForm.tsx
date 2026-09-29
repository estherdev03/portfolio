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
      className="flex flex-col h-full gap-4.5"
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5">
        <div className="flex flex-col gap-1.5 text-[13px] text-neutral-300">
          <label htmlFor="name">
            Your name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="name"
            className={`h-11 rounded-[9px] w-full border bg-neutral-800/50 text-neutral-50 px-3.5 text-[15px] outline-none focus:border-neutral-400 transition-colors ${status?.error["name"] ? "border-red-400" : "border-[#333]"}`}
          />
          {!status?.success && status?.error["name"] && (
            <div className="text-red-400 text-xs">{status?.error["name"]}</div>
          )}
        </div>
        <div className="flex flex-col gap-1.5 text-[13px] text-neutral-300">
          <label htmlFor="email">
            Your email <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            name="email"
            id="email"
            autoComplete="email"
            className={`h-11 rounded-[9px] w-full border bg-neutral-800/50 text-neutral-50 px-3.5 text-[15px] outline-none focus:border-neutral-400 transition-colors ${status?.error["email"] ? "border-red-400" : "border-[#333]"}`}
          />
          {!status?.success && status?.error["email"] && (
            <div className="text-red-400 text-xs">{status?.error["email"]}</div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-1.5 text-[13px] text-neutral-300">
        <label htmlFor="company">
          Company / Organization{" "}
          <span className="text-neutral-500">(Optional)</span>
        </label>
        <input
          type="text"
          name="company"
          id="company"
          autoComplete="organization"
          className="h-11 rounded-[9px] w-full border bg-neutral-800/50 text-neutral-50 px-3.5 text-[15px] outline-none focus:border-neutral-400 transition-colors border-[#333]"
        />
      </div>
      <div className="flex flex-col gap-1.5 text-[13px] text-neutral-300 flex-1">
        <label htmlFor="message">
          Message / Role Details <span className="text-red-400">*</span>
        </label>
        <textarea
          name="message"
          id="message"
          className={`flex-1 min-h-37.5 resize-y rounded-[9px] w-full border bg-neutral-800/50 text-neutral-50 px-3.5 py-3 text-[15px] leading-normal outline-none focus:border-neutral-400 transition-colors ${status?.error["message"] ? "border-red-400" : "border-[#333]"}`}
        />
        {!status?.success && status?.error["message"] && (
          <div className="text-red-400 text-xs">{status?.error["message"]}</div>
        )}
      </div>
      <div className="flex flex-col gap-2">
        {!status?.success && status?.error["server"] && (
          <div className="text-red-400 text-xs">{status?.error["server"]}</div>
        )}
        <button
          disabled={isLoading}
          className="h-11.5 w-full rounded-[10px] bg-neutral-50 text-neutral-950 text-[15px] font-medium flex items-center justify-center gap-2 cursor-pointer hover:bg-neutral-200 transition-colors disabled:opacity-70 disabled:cursor-wait"
        >
          <LuSend />
          <span>{isLoading ? "Sending…" : "Send Inquiry"}</span>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;

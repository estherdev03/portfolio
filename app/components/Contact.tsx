"use client";
import { IoCopyOutline, IoLocationOutline } from "react-icons/io5";
import Container from "./Container";
import { RiGithubLine } from "react-icons/ri";
import { FiLinkedin } from "react-icons/fi";
import { LuCalendarDays } from "react-icons/lu";
import { FaCheck, FaRegEnvelope } from "react-icons/fa6";
import { useRef, useState } from "react";
import ContactForm from "./ContactForm";
import { toast } from "react-toastify";

const Contact = () => {
  const emailAddressRef = useRef<HTMLDivElement>(null);

  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    if (emailAddressRef.current) {
      try {
        const copiedEmail = emailAddressRef.current.textContent;
        await navigator.clipboard.writeText(copiedEmail);
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
        toast.success("Copy successfully 👍", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          progress: undefined,
          theme: "dark",
        });
      } catch (error) {
        console.log(`Cannot copied: ${error}`);
      }
    }
  };

  return (
    <Container id="contact">
      <div className="w-3/5 ">
        <div className="flex flex-col items-center gap-4">
          <div className=" flex items-center gap-2 bg-neutral-800 text-neutral-300 px-4 py-0.5 rounded-xl text-xs">
            <FaRegEnvelope />
            <div>Open for Winter 2027</div>
          </div>
          <div className=" text-5xl font-semibold">
            Let&apos;s Start a Conversation
          </div>
          <div className="w-3/4 font-light text-center text-neutral-400">
            I am actively interviewing for software engineering internship
            opportunities. Whether you have an open role, want to discuss my
            projects, or just want to connect, I&apos;d love to hear from you.
          </div>
          <div className=" w-full grid grid-cols-5 gap-8 pt-6">
            <div className="col-span-2 flex flex-col gap-5">
              <div className="border border-neutral-800 bg-neutral-900 p-5 rounded-xl">
                <div className="font-semibold text-lg">Direct Contact</div>
                <div className="">
                  <label
                    htmlFor=""
                    className="uppercase font-light text-xs text-neutral-300"
                  >
                    Email Address
                  </label>
                  <div className=" p-1 rounded-md w-full text-sm mt-1 h-12 border border-neutral-600 bg-neutral-800/60 text-neutral-300 px-3 flex items-center justify-between">
                    <div ref={emailAddressRef}>esthertrandev@gmail.com</div>
                    <div
                      className={`cursor-pointer hover:bg-neutral-700/60 p-1.5 rounded-md ${isCopied ? "pointer-events-none cursor-not-allowed" : ""}`}
                      onClick={copyToClipboard}
                    >
                      {isCopied ? (
                        <FaCheck className=" text-green-500 text-lg" />
                      ) : (
                        <IoCopyOutline className=" text-lg" />
                      )}
                    </div>
                  </div>
                </div>
                <div className="uppercase font-light text-xs text-neutral-300 mt-5">
                  Location & Relocation
                </div>
                <div className=" flex items-start gap-2 mt-1">
                  <IoLocationOutline className="text-2xl" />
                  <div className=" text-xs font-light">
                    San Francisco Bay Area, CA (Authorized to work in the US,
                    open to relocate for summer/fall)
                  </div>
                </div>
                <div className="uppercase font-light text-xs text-neutral-300 mt-4">
                  Professional Networks
                </div>
                <div className="grid grid-cols-2 mt-2 gap-5">
                  <div className=" flex items-center justify-center gap-2 border border-neutral-300 rounded-md h-7 cursor-pointer">
                    <RiGithubLine />
                    <div className=" text-xs ">Github</div>
                  </div>
                  <div className=" flex items-center gap-2 border border-neutral-300 rounded-md justify-center h-7 cursor-pointer">
                    <FiLinkedin />
                    <div className=" text-xs">LinkedIn</div>
                  </div>
                </div>
              </div>
              <div className="border border-neutral-800 bg-neutral-900 p-5 rounded-xl flex items-center gap-3 text-neutral-400">
                <LuCalendarDays className="text-2xl" />
                <div className=" text-sm font-light">
                  I check email daily and reply promptly to all internship
                  inquiries.
                </div>
              </div>
            </div>

            <div className="col-span-3 border border-neutral-800 bg-neutral-900 p-6 rounded-xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;

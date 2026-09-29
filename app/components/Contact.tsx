"use client";
import { IoCopyOutline, IoLocationOutline } from "react-icons/io5";
import Container from "./Container";
import { RiGithubLine } from "react-icons/ri";
import { FiLinkedin } from "react-icons/fi";
import { LuCalendarDays } from "react-icons/lu";
import { FaCheck } from "react-icons/fa6";
import { useRef, useState } from "react";
import ContactForm from "./ContactForm";
import SectionHeading from "./SectionHeading";
import { toast } from "react-toastify";
import Link from "next/link";

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
      <div className="flex flex-col gap-10">
        <SectionHeading
          centered
          eyebrow="05 / Contact"
          title="Let's Start a Conversation"
          description="I am actively interviewing for software engineering internship opportunities. Whether you have an open role, want to discuss my projects, or just want to connect, I'd love to hear from you."
        />
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-5 items-stretch">
          <div className="flex flex-col gap-4 min-w-0">
            <div className="border border-neutral-800 bg-[#111] p-6 rounded-[14px] flex flex-col gap-5.5">
              <div className="font-semibold text-lg">Direct Contact</div>
              <div className="flex flex-col gap-2">
                <div className="text-[11px] uppercase tracking-[0.08em] text-neutral-400">
                  Email Address
                </div>
                <div className="h-12 border border-[#333] bg-neutral-800/50 rounded-[10px] pl-3.5 pr-1.5 flex items-center justify-between gap-2">
                  <div
                    ref={emailAddressRef}
                    className="truncate text-sm text-neutral-200"
                  >
                    esthertrandev@gmail.com
                  </div>
                  <button
                    aria-label="Copy email"
                    className={`w-9 h-9 shrink-0 flex items-center justify-center rounded-lg cursor-pointer hover:bg-neutral-800 transition-colors ${isCopied ? "pointer-events-none" : ""}`}
                    onClick={copyToClipboard}
                  >
                    {isCopied ? (
                      <FaCheck className="text-green-500 text-base" />
                    ) : (
                      <IoCopyOutline className="text-base text-neutral-300" />
                    )}
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-[11px] uppercase tracking-[0.08em] text-neutral-400">
                  Location & Relocation
                </div>
                <div className="flex items-start gap-2.5 text-sm text-neutral-300 leading-normal">
                  <IoLocationOutline className="shrink-0 text-[17px] mt-px" />
                  <div>
                    San Francisco Bay Area, CA (Authorized to work in the US,
                    open to relocate for summer/fall)
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-[11px] uppercase tracking-[0.08em] text-neutral-400">
                  Professional Networks
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  <Link
                    href={"https://github.com/estherdev03"}
                    target="_blank"
                    className="h-10 flex items-center justify-center gap-2 border border-neutral-700 rounded-[9px] text-sm text-neutral-200 cursor-pointer hover:bg-neutral-900 hover:text-white transition-colors"
                  >
                    <RiGithubLine />
                    <div>Github</div>
                  </Link>
                  <div className="h-10 flex items-center justify-center gap-2 border border-neutral-700 rounded-[9px] text-sm text-neutral-200 cursor-pointer hover:bg-neutral-900 hover:text-white transition-colors">
                    <FiLinkedin />
                    <div>LinkedIn</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-neutral-800 bg-[#111] px-5 py-4.5 rounded-[14px] flex items-center gap-3.5 text-neutral-400">
              <LuCalendarDays className="shrink-0 text-xl" />
              <div className="text-sm font-light leading-normal">
                I check email daily and reply promptly to all internship
                inquiries.
              </div>
            </div>
          </div>

          <div className="min-w-0 border border-neutral-800 bg-[#111] p-[clamp(20px,3vw,28px)] rounded-[14px]">
            <ContactForm />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;

"use client";
import Link from "next/link";
import { IoMdArrowUp } from "react-icons/io";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";

const Footer = () => {
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-neutral-900 bg-neutral-950">
      <div className="mx-auto w-full max-w-290 px-[clamp(16px,4vw,32px)] py-7 flex flex-wrap items-center justify-between gap-5">
        <div className="flex flex-col gap-0.5">
          <div className="text-base font-semibold">Esther Tran</div>
          <div className="capitalize text-[13px] text-neutral-400 font-light">
            Junior software engineer
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <Link
            href={"https://github.com/estherdev03"}
            target="_blank"
            className="w-9.5 h-9.5 flex items-center justify-center rounded-lg text-lg text-neutral-400 cursor-pointer hover:bg-[#1a1a1a] hover:text-white transition-colors"
          >
            <LuGithub />
          </Link>
          <Link
            href={"#"}
            className="w-9.5 h-9.5 flex items-center justify-center rounded-lg text-lg text-neutral-400 cursor-pointer hover:bg-[#1a1a1a] hover:text-white transition-colors"
          >
            <LuLinkedin />
          </Link>
          <Link
            href={"mailto:esthertrandev@gmail.com"}
            className="w-9.5 h-9.5 flex items-center justify-center rounded-lg text-lg text-neutral-400 cursor-pointer hover:bg-[#1a1a1a] hover:text-white transition-colors"
          >
            <MdOutlineMailOutline />
          </Link>
          <div
            className="ml-2 h-9 flex items-center gap-1.5 px-3 border border-neutral-800 rounded-lg text-[13px] text-neutral-300 cursor-pointer hover:bg-[#1a1a1a] transition-colors"
            onClick={() => scrollToTop()}
          >
            <div>Top</div>
            <IoMdArrowUp />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

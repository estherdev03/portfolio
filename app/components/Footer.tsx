"use client";
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
    <div className="flex items-center justify-center py-6 bg-neutral-900">
      <div className="w-3/5">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <div className=" text-lg font-semibold"> Esther Tran</div>
            <div className=" capitalize text-xs text-neutral-400 font-light ">
              Junior software engineer
            </div>
          </div>
          <div className=" flex items-center gap-5 text-lg text-neutral-400">
            <LuGithub className="cursor-pointer" />
            <LuLinkedin className="cursor-pointer" />
            <MdOutlineMailOutline className="cursor-pointer" />
            <div
              className="flex items-center gap-1 text-sm font-light border border-neutral-800 px-2 py-1 rounded-md cursor-pointer"
              onClick={() => scrollToTop()}
            >
              <div>Top</div>
              <IoMdArrowUp />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

"use client";
import Link from "next/link";
import { FiLinkedin } from "react-icons/fi";
import {
  IoArrowDownOutline,
  IoLocationOutline,
  IoNewspaperOutline,
} from "react-icons/io5";
import { MdOutlineMailOutline, MdOutlineSchool } from "react-icons/md";
import { RiGithubLine } from "react-icons/ri";

const Hero = () => {
  const projectNavigateHandler = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };
  const contactNavigateHandler = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <section
      className="border-b border-neutral-800/80 pt-[clamp(120px,16vw,176px)] pb-[clamp(64px,9vw,112px)] bg-[radial-gradient(ellipse_60%_50%_at_20%_0%,rgba(16,185,129,.07),transparent_70%)]"
      id="about"
    >
      <div className="mx-auto w-full max-w-290 px-[clamp(16px,4vw,32px)] flex flex-col gap-6">
        <div className="flex items-center gap-2.5 max-w-full w-fit px-3.5 py-1.5 bg-emerald-950/55 rounded-full border border-emerald-300/45">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <div className="text-emerald-300 text-[13px] leading-snug">
            Actively seeking Winter 2027 Software Engineering Internships
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="m-0 font-display text-[clamp(40px,7.4vw,80px)] leading-[1.02] font-semibold tracking-[-0.035em] text-balance">
            Hi, I&apos;m Esther Tran
          </h1>
          <div className="text-[clamp(20px,2.6vw,30px)] font-light text-neutral-300 tracking-[-0.01em]">
            CS Student & Junior Software Engineer
          </div>
        </div>
        <p className="m-0 max-w-[62ch] text-neutral-400 text-[clamp(15px,1.4vw,17px)] leading-[1.7] text-pretty">
          I&apos;m a third-year Computer Science student with a strong
          foundation in data structures, algorithms, and web systems. I care
          deeply about writing clean, typed, and well-tested code that scales
          predictably. When I&apos;m not coding, you can find me practicing
          LeetCode patterns, contributing to student hackathons, or reading
          engineering postmortems.
        </p>
        <div className="flex flex-wrap gap-2.5">
          <div className="flex items-center gap-2 px-3.5 py-1.75 bg-neutral-800/60 border border-[#333] rounded-lg text-[13px] text-neutral-400 max-w-full">
            <MdOutlineSchool className="shrink-0 text-base text-neutral-300" />
            <span>University of Calgary, Calgary - B.Sc Computer Science</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.75 bg-neutral-800/60 border border-[#333] rounded-lg text-[13px] text-neutral-400 max-w-full">
            <IoLocationOutline className="shrink-0 text-base text-neutral-300" />
            <span>Calgary, Alberta (Open to remote/relocation)</span>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <div
            className="flex items-center gap-2 bg-neutral-50 px-5 py-2.75 text-neutral-950 rounded-[10px] text-[15px] font-medium cursor-pointer hover:bg-neutral-200 transition-colors"
            onClick={projectNavigateHandler}
          >
            <span>Explore projects</span>
            <IoArrowDownOutline />
          </div>
          <div className="flex items-center gap-2 px-5 py-2.5 text-neutral-50 rounded-[10px] text-[15px] font-medium border border-neutral-700 cursor-pointer hover:bg-neutral-900 transition-colors">
            <IoNewspaperOutline /> <span>View Resume</span>
          </div>
          <div
            className="px-2 py-2.5 text-[15px] text-neutral-400 hover:text-neutral-50 transition-colors cursor-pointer"
            onClick={contactNavigateHandler}
          >
            Get in touch →
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-5 border-t border-neutral-900 max-w-180">
          <Link
            href="https://github.com/estherdev03"
            target="_blank"
            className="flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-50 transition-colors"
          >
            <RiGithubLine className="text-[17px]" />
            estherdev03
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-50 transition-colors"
          >
            <FiLinkedin className="text-[17px]" />
            LinkedIn
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-50 transition-colors break-all"
          >
            <MdOutlineMailOutline className="shrink-0 text-[17px]" />
            esthertrandev@gmail.com
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

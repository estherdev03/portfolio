"use client";
import Link from "next/link";
import { useState } from "react";

import {
  IoArrowDownOutline,
  IoLocationOutline,
  IoNewspaperOutline,
} from "react-icons/io5";
import { MdOutlineMailOutline, MdOutlineSchool } from "react-icons/md";
import { RiGithubLine } from "react-icons/ri";
import ResumeModal from "./ResumeModal";

const COMMITS = [
  { hash: "a1f3c9e", type: "fix", message: "off-by-one error (again)" },
  {
    hash: "7b2d4e1",
    type: "feat",
    message: "trade sleep for one more LeetCode",
  },
  { hash: "e9c0a52", type: "chore", message: "read someone else's postmortem" },
  { hash: "3d8f6b7", type: "refactor", message: "rename x → x2 → finalX" },
  { hash: "c41e0d9", type: "docs", message: "explain code I wrote at 2am" },
  { hash: "5f7a2b8", type: "test", message: "make it green without cheating" },
];

const TerminalCard = () => {
  const [run, setRun] = useState(0);

  return (
    <div className="hidden lg:block w-full border border-neutral-800 bg-[#111] rounded-[14px] overflow-hidden shadow-[0_24px_60px_-24px_rgba(16,185,129,.18)]">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[#222]">
        <span className="h-2.5 w-2.5 rounded-full bg-neutral-700"></span>
        <span className="h-2.5 w-2.5 rounded-full bg-neutral-700"></span>
        <span className="h-2.5 w-2.5 rounded-full bg-neutral-700"></span>
        <span className="ml-2 font-mono text-xs text-neutral-500">
          ~/esther — zsh
        </span>
        <button
          type="button"
          onClick={() => setRun((r) => r + 1)}
          className="ml-auto font-mono text-xs text-neutral-500 hover:text-emerald-300 transition-colors cursor-pointer"
        >
          ↻ replay
        </button>
      </div>
      <div
        key={run}
        className="p-6 font-mono text-[13px] leading-[1.9] text-neutral-300"
      >
        <div>
          <span className="text-emerald-300">$</span> git log --author=esther
        </div>
        {COMMITS.map(({ hash, type, message }, i) => (
          <div
            key={hash}
            className="flex gap-3 animate-[et-in_0.4s_ease-out_both]"
            style={{ animationDelay: `${0.3 + i * 0.25}s` }}
          >
            <span className="shrink-0 text-amber-300/80">{hash}</span>
            <span className="min-w-0">
              <span className="text-emerald-300">{type}:</span>{" "}
              <span className="text-neutral-400">{message}</span>
            </span>
          </div>
        ))}
        <div
          className="animate-[et-in_0.4s_ease-out_both]"
          style={{ animationDelay: `${0.3 + COMMITS.length * 0.25}s` }}
        >
          <span className="text-emerald-300">$</span>{" "}
          <span className="inline-block w-2 h-4 align-middle bg-emerald-300/80 animate-pulse"></span>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const [showResume, setShowResume] = useState(false);
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
      <div className="mx-auto w-full max-w-290 px-[clamp(16px,4vw,32px)] grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] gap-x-14 gap-y-12 lg:items-center">
        <div className="flex flex-col gap-6 min-w-0">
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
          <p className="m-0 text-neutral-400 text-[clamp(15px,1.4vw,17px)] leading-[1.7] text-pretty text-justify">
            I&apos;m a fourth-year Computer Science student with a strong
            foundation in data structures, algorithms, and web systems. I care
            deeply about writing clean, typed, and well-tested code that scales
            predictably. When I&apos;m not coding, you can find me practicing
            LeetCode patterns or reading engineering postmortems.
          </p>
          <div className="flex flex-wrap gap-2.5">
            <div className="flex items-center gap-2 px-3.5 py-1.75 bg-neutral-800/60 border border-[#333] rounded-lg text-[13px] text-neutral-400 max-w-full">
              <MdOutlineSchool className="shrink-0 text-base text-neutral-300" />
              <span>
                University of Calgary, Calgary - B.Sc. Computer Science
              </span>
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
            <div
              className="flex items-center gap-2 px-5 py-2.5 text-neutral-50 rounded-[10px] text-[15px] font-medium border border-neutral-700 cursor-pointer hover:bg-neutral-900 transition-colors"
              onClick={() => setShowResume(true)}
            >
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
            {/* <Link
              href="#"
              className="flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-50 transition-colors"
            >
              <FiLinkedin className="text-[17px]" />
              LinkedIn
            </Link> */}
            <Link
              href="mailto:thimytuyen.tran@ucalgary.ca"
              className="flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-50 transition-colors break-all"
            >
              <MdOutlineMailOutline className="shrink-0 text-[17px]" />
              thimytuyen.tran@ucalgary.ca
            </Link>
          </div>
        </div>
        <TerminalCard />
      </div>
      {showResume && <ResumeModal closeModal={() => setShowResume(false)} />}
    </section>
  );
};

export default Hero;

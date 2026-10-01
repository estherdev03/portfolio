import Link from "next/link";
import {
  FiArrowUpRight,
  FiExternalLink,
  FiGithub,
  FiLayers,
} from "react-icons/fi";
import { ProjectName } from "./Projects";

const ProjectCard = ({
  id,
  mainHeader,
  secondaryHeader,
  title,
  description,
  detail,
  githubRepo,
  demoUrl,
  features,
  techtags,
  benchmark,
  handleClick,
}: {
  id: ProjectName;
  mainHeader: string;
  secondaryHeader: string;
  title: string;
  description: string;
  detail: string;
  githubRepo: string;
  demoUrl: string;
  features: React.ReactNode;
  techtags: React.ReactNode;
  benchmark: React.ReactNode;
  handleClick: (projectName: ProjectName) => void;
}) => {
  const projectOrder = Object.values(ProjectName);
  const position = `0${projectOrder.indexOf(id) + 1} / 0${projectOrder.length}`;

  return (
    <article className="border border-neutral-800 bg-[#0f0f0f] rounded-[18px] overflow-hidden transition-colors hover:border-[#3a3a3a]">
      <div className="px-[clamp(20px,3.2vw,40px)] pt-[clamp(22px,3.2vw,40px)] pb-[clamp(22px,3vw,32px)] flex flex-col gap-5.5">
        <div className="flex flex-wrap justify-between items-center gap-3">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.06em]">
            <span className="text-neutral-50">{position}</span>
            <span className="w-6 h-px bg-neutral-700"></span>
            <span className="text-neutral-400">{mainHeader}</span>
          </div>
          <span className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border border-emerald-800/80 bg-emerald-950/60 text-emerald-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            {secondaryHeader}
          </span>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="m-0 font-display text-[clamp(28px,4vw,42px)] font-semibold tracking-[-0.035em] leading-[1.06]">
            {title}
          </h3>
          <p className="m-0 max-w-[68ch] text-neutral-400 text-[clamp(15px,1.4vw,17px)] leading-relaxed font-light text-pretty">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {benchmark}
        </div>
      </div>
      <div className="mx-[clamp(20px,3.2vw,40px)] border-t border-[#222]"></div>
      <div className="px-[clamp(20px,3.2vw,40px)] py-[clamp(22px,3vw,32px)] grid grid-cols-1 lg:grid-cols-2 gap-[clamp(24px,4vw,56px)]">
        <div className="flex flex-col gap-3">
          <div className="text-xs uppercase tracking-[0.08em] text-neutral-500 font-semibold">
            Overview
          </div>
          <p className="m-0 text-neutral-300 leading-[1.75] text-[15px] text-pretty">
            {detail}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-xs uppercase tracking-[0.08em] text-neutral-500 font-semibold">
            Key Engineering Features
          </div>
          <ul className="numbered-list text-sm font-light leading-[1.55] text-neutral-300 [&>li]:py-2.5 [&>li]:border-b [&>li]:border-[#1c1c1c]">
            {features}
          </ul>
        </div>
      </div>
      <div className="px-[clamp(20px,3.2vw,40px)] py-[clamp(16px,2.4vw,22px)] border-t border-neutral-900 bg-neutral-950 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-1.5 flex-[1_1_360px]">
          {techtags}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Link
            href={githubRepo}
            target="_blank"
            className="flex items-center gap-2 px-3.5 py-2.25 border border-[#333] rounded-[10px] text-neutral-200 text-sm font-medium whitespace-nowrap hover:bg-[#1a1a1a] hover:text-white transition-colors"
          >
            <FiGithub className="text-base" />
            Source
          </Link>
          <Link
            href={demoUrl}
            target="_blank"
            rel="noopener"
            className="flex items-center gap-2 px-3.5 py-2.25 border border-emerald-500/50 bg-emerald-950/50 rounded-[10px] text-emerald-300 text-sm font-medium whitespace-nowrap hover:bg-emerald-900/60 hover:text-emerald-200 transition-colors"
          >
            <FiExternalLink className="text-base" />
            Live demo
          </Link>
          <div
            className="flex items-center gap-2 bg-neutral-50 px-4 py-2.5 text-neutral-950 rounded-[10px] text-sm font-medium cursor-pointer whitespace-nowrap hover:bg-neutral-200 transition-colors"
            onClick={() => {
              handleClick(id);
            }}
          >
            <FiLayers className="text-base" />
            Architecture & Specs
            <FiArrowUpRight className="text-[15px]" />
          </div>
        </div>
      </div>
    </article>
  );
};
export default ProjectCard;

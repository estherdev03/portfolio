import { FiGithub, FiLayers } from "react-icons/fi";
import { BsExclamationCircle } from "react-icons/bs";
import { FaRegCheckCircle } from "react-icons/fa";
import { BiBulb } from "react-icons/bi";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";
import Link from "next/link";

export interface ProjectDetailProps {
  main_tag: string;
  secondary_tag: string;
  title: string;
  description: string;
  techTags: React.ReactNode;
  category: React.ReactNode;
  architect: string;
  technical: React.ReactNode;
  testing: string;
  takeaway: string;
  github_url: string;
  demo_url: string;
}

interface Props extends ProjectDetailProps {
  closeModal: () => void;
}

const ProjectDetailModal = ({
  main_tag,
  secondary_tag,
  title,
  description,
  techTags,
  category,
  architect,
  technical,
  testing,
  takeaway,
  github_url,
  demo_url,
  closeModal,
}: Props) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-0 sm:p-6"
      onClick={(e) => {
        if (e.target == e.currentTarget) {
          closeModal();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        className="w-full max-w-220 h-full sm:h-auto max-h-full sm:max-h-[88vh] bg-[#111] border border-[#333] rounded-none sm:rounded-2xl flex flex-col overflow-hidden animate-[et-in_.22s_ease-out]"
      >
        <div className="px-[clamp(20px,3vw,32px)] py-5 border-b border-neutral-800 flex items-start justify-between gap-3">
          <div className="flex flex-col gap-2.5 min-w-0">
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-0.75 rounded-full text-[13px] bg-neutral-800 text-neutral-300">
                {main_tag}
              </span>
              <span className="px-3 py-0.5 rounded-full text-[13px] border border-emerald-800/80 bg-emerald-950/60 text-emerald-300">
                {secondary_tag}
              </span>
            </div>
            <div className="font-display text-[clamp(24px,3.4vw,36px)] font-semibold tracking-[-0.03em] leading-[1.1]">
              {title}
            </div>
          </div>
          <button
            aria-label="Close"
            className="w-10 h-10 shrink-0 flex items-center justify-center border border-[#333] rounded-[10px] text-neutral-300 text-lg cursor-pointer hover:bg-neutral-800 hover:text-white transition-colors"
            onClick={closeModal}
          >
            <MdOutlineClose />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-[clamp(20px,3vw,32px)] flex flex-col gap-7">
          <p className="m-0 text-neutral-400 text-[15px] leading-relaxed font-light">
            {description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {category}
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.08em] text-neutral-400 font-semibold">
              Technologies & tools
            </div>
            <div className="flex items-center flex-wrap gap-1.5">
              {techTags}
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.08em] text-neutral-400 font-semibold">
              <FiLayers className="text-[15px]" />
              System Architecture & Design
            </div>
            <p className="m-0 text-neutral-300 text-[15px] leading-[1.7] font-light">
              {architect}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.08em] text-neutral-400 font-semibold">
              <BsExclamationCircle className="text-[15px]" />
              Technical Hurdles & How I Solved Them
            </div>
            <ul className="numbered-list flex flex-col gap-3 text-[15px] leading-relaxed font-light text-neutral-300 [--number-size:12px]">
              {technical}
            </ul>
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.08em] text-neutral-400 font-semibold">
              <FaRegCheckCircle className="text-[15px] text-green-500" />
              Testing & Quality Strategy
            </div>
            <p className="m-0 text-neutral-300 text-[15px] leading-[1.7] font-light">
              {testing}
            </p>
          </div>
          <div className="p-5 border border-[#333] bg-neutral-900 rounded-xl flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.08em] text-neutral-200 font-semibold">
              <BiBulb className="text-[15px] text-yellow-400" />
              Key Takeaway for an Engineering Team
            </div>
            <p className="m-0 text-neutral-400 text-sm leading-[1.65] font-light">
              {takeaway}
            </p>
          </div>
        </div>
        <div className="px-[clamp(20px,3vw,32px)] py-4 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2.5">
            <Link
              className="flex items-center gap-2 bg-neutral-50 px-4 py-2.5 text-neutral-950 rounded-[10px] text-sm font-medium cursor-pointer hover:bg-neutral-200 transition-colors"
              href={github_url}
              target="_blank"
            >
              <FiGithub />
              <span className="whitespace-nowrap">View Source on Github</span>
            </Link>
            <Link
              className="flex items-center gap-2 bg-neutral-800 px-4 py-2.5 text-neutral-50 rounded-[10px] text-sm font-medium border border-neutral-700 cursor-pointer hover:bg-[#333] transition-colors"
              href={demo_url}
              target="_blank"
            >
              <FaArrowUpRightFromSquare />
              <span className="whitespace-nowrap">Live Demo</span>
            </Link>
          </div>
          <div
            className="p-2 text-sm text-neutral-400 cursor-pointer hover:text-neutral-50 transition-colors"
            onClick={closeModal}
          >
            Close Window
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;

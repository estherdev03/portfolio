import Link from "next/link";
import { FiGithub, FiLayers } from "react-icons/fi";
import { ProjectName } from "./Projects";

const ProjectCard = ({
  id,
  mainHeader,
  secondaryHeader,
  title,
  description,
  detail,
  githubRepo,
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
  features: React.ReactNode;
  techtags: React.ReactNode;
  benchmark: React.ReactNode;
  handleClick: (projectName: ProjectName) => void;
}) => {
  return (
    <div className="border border-neutral-800 bg-neutral-900 p-6 rounded-lg">
      <div className="flex border-b border-neutral-800/80 pb-5 justify-between">
        <div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <div className="w-fit h-fit px-3 rounded-xl text-sm items-center bg-neutral-800 text-neutral-300 py-0.5">
                {mainHeader}
              </div>
              <div className="w-fit h-fit px-3 py-0.5 border border-emerald-800/80 rounded-xl text-sm items-center text-emerald-300 bg-emerald-950/60">
                {secondaryHeader}
              </div>
            </div>
            <div className="text-5xl mb-4">{title}</div>
            <div className=" text-neutral-400 font-light">{description}</div>
          </div>
        </div>
        <Link href={githubRepo}>
          <FiGithub className="text-2xl" />
        </Link>
      </div>
      <div className=" flex flex-col border-b border-neutral-800/80 pb-5 gap-6 mt-4">
        <div className="text-neutral-300 leading-relaxed">{detail}</div>
        <div className="grid grid-cols-3 place-items-center bg-neutral-800/40 border border-neutral-700/60 p-3 rounded-lg">
          {benchmark}
        </div>
        <div>
          <div className=" uppercase text-neutral-500 font-semibold text-xs pb-2">
            Key Engineering Features
          </div>
          <ul className="list-disc list-inside font-light text-sm space-y-1 text-neutral-300">
            {features}
          </ul>
        </div>
      </div>
      <div className="flex items-center mt-5 space-x-5">
        <div className=" flex items-center gap-2 flex-wrap">{techtags}</div>
        <div
          className="flex items-center gap-2 bg-white px-4 py-2 text-neutral-900 rounded-md cursor-pointer"
          onClick={() => {
            handleClick(id);
          }}
        >
          <FiLayers />
          <div className=" whitespace-nowrap text-sm">Architecture & Specs</div>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;

import { FiGithub, FiLayers } from "react-icons/fi";
import { BsExclamationCircle } from "react-icons/bs";
import { FaRegCheckCircle } from "react-icons/fa";
import { BiBulb } from "react-icons/bi";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";

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
      className=" flex items-center justify-center h-screen backdrop-blur-3xl flex-wrap fixed inset-0 z-50"
      onClick={(e) => {
        if (e.target == e.currentTarget) {
          closeModal();
        }
      }}
    >
      <div className=" w-1/2 h-4/5 border border-neutral-400 rounded-xl flex flex-col p-6 overflow-y-scroll bg-neutral-900">
        <div className="flex items-center justify-between">
          <div className=" flex items-center gap-2">
            <div className="w-fit h-fit px-3 rounded-xl text-sm items-center bg-neutral-800 text-neutral-300 py-0.5">
              {main_tag}
            </div>
            <div className="w-fit h-fit px-3 py-0.5 border border-emerald-800/80 rounded-xl text-sm items-center text-emerald-300 bg-emerald-950/60">
              {secondary_tag}
            </div>
          </div>
          <div
            className="cursor-pointer text-neutral-400 p-1 rounded-lg hover:bg-neutral-800 hover:text-neutral-100"
            onClick={closeModal}
          >
            <MdOutlineClose className=" text-2xl " />
          </div>
        </div>
        <div className=" text-4xl font-semibold mt-2">{title}</div>
        <div className="border-b border-neutral-500 text-neutral-400 py-2 font-light text-sm">
          {description}
        </div>
        <div className=" uppercase my-2 text-sm font-semibold text-neutral-400">
          Technologies & tools
        </div>
        <div className=" border-b border-neutral-500 flex items-center flex-wrap gap-2 pb-3">
          {techTags}
        </div>
        <div className=" grid grid-cols-3 gap-5 border-b border-neutral-500 py-5">
          {category}
        </div>
        <div>
          <div className=" flex items-center gap-2 text-neutral-400 pt-4 py-1">
            <FiLayers />
            <div className=" uppercase text-sm font-semibold">
              System Architecture & Design
            </div>
          </div>
          <div className=" font-light pb-6 text-neutral-300 ">{architect}</div>
        </div>
        <div className=" pb-6">
          <div className=" flex items-center gap-2 text-neutral-400 mb-1">
            <BsExclamationCircle />
            <div className=" uppercase text-sm font-semibold">
              Technical Hurdles & How I Solved Them
            </div>
          </div>
          <ul className=" list-disc list-inside font-light text-neutral-300">
            {technical}
          </ul>
        </div>
        <div className=" border-b border-neutral-500 flex flex-col items-start gap-1 pb-3">
          <div className=" flex items-center gap-2">
            <FaRegCheckCircle className=" text-green-500" />
            <div className=" uppercase text-neutral-400 text-sm font-semibold">
              Testing & Quality Strategy
            </div>
          </div>
          <div className=" text-neutral-300 font-light">{testing}</div>
          <div className="p-4 border border-neutral-600 rounded-lg mb-4 flex  flex-col gap-2 mt-4">
            <div className=" flex items-center gap-1">
              <BiBulb className=" text-yellow-400" />
              <div className=" uppercase font-semibold text-sm text-neutral-300">
                Key Takeaway for an Engineering Team
              </div>
            </div>
            <div className=" text-neutral-400 text-sm font-light">
              {takeaway}
            </div>
          </div>
        </div>
        <div className="my-5 flex items-center justify-between gap-5">
          <div className=" flex items-center gap-5">
            <div className="flex items-center gap-2 bg-white px-4 py-2 text-neutral-900 rounded-md cursor-pointer">
              <FiGithub />
              <div className=" whitespace-nowrap text-sm">
                View Source on Github
              </div>
            </div>
            <div className="flex items-center gap-2 bg-neutral-600 px-4 py-2 text-neutral-100 rounded-md cursor-pointer border border-neutral-500">
              <FaArrowUpRightFromSquare />
              <div className=" whitespace-nowrap text-sm">Live Demo</div>
            </div>
          </div>
          <div
            className=" text-sm text-neutral-400 cursor-pointer hover:text-neutral-200"
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

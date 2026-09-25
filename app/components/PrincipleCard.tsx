import { DiVim } from "react-icons/di";
import TechTag from "./TechTag";

const PrincipleCard = ({
  icon,
  header,
  title,
  description,
  hasFooter = false,
  techTags,
}: {
  icon: React.ReactNode;
  header: string;
  title: string;
  description: string;
  hasFooter?: boolean;
  techTags?: React.ReactNode;
}) => {
  return (
    <>
      <div className="border border-neutral-800 bg-neutral-900 p-5 rounded-lg flex flex-col gap-2">
        <div className=" flex items-center justify-between ">
          <div className="bg-neutral-800 p-2 text-lg rounded-md flex items-center justify-center">
            {icon}
          </div>
          <div className=" text-xs font-light px-3 py-0.5 bg-neutral-800 text-neutral-300 rounded-lg text-center">
            {header}
          </div>
        </div>
        <div className=" font-semibold text-lg">{title}</div>
        <div className=" font-light text-sm text-neutral-300">
          {description}
        </div>
        {hasFooter && (
          <div className="border-t border-neutral-800/80 mt-6 flex items-center flex-wrap gap-2 pt-3">
            {techTags}
          </div>
        )}
      </div>
    </>
  );
};

export default PrincipleCard;

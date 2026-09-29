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
      <div className="border border-neutral-800 bg-[#111] p-[clamp(20px,2.6vw,28px)] rounded-[14px] flex flex-col gap-3">
        <div className="flex items-center justify-between gap-3 mb-1.5">
          <div className="w-9.5 h-9.5 bg-neutral-900 rounded-[9px] flex items-center justify-center text-lg text-neutral-200">
            {icon}
          </div>
          <div className="text-xs px-2.5 py-0.75 bg-neutral-900 text-neutral-300 rounded-full text-center">
            {header}
          </div>
        </div>
        <div className="text-lg font-semibold tracking-[-0.01em]">{title}</div>
        <div className="text-sm font-light leading-[1.65] text-neutral-400">
          {description}
        </div>
        {hasFooter && (
          <div className="border-t border-[#222] mt-1.5 flex items-center flex-wrap gap-1.5 pt-4">
            {techTags}
          </div>
        )}
      </div>
    </>
  );
};

export default PrincipleCard;

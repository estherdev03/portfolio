const SelfLearningCard = ({
  icon,
  header,
  title,
  description,
  techTags,
  headerClassname,
}: {
  icon: React.ReactNode;
  header: string;
  title: string;
  description: string;
  techTags: React.ReactNode;
  iconClassname?: string;
  headerClassname?: string;
}) => {
  return (
    <>
      <div className="border border-neutral-800 bg-[#111] p-6 rounded-[14px] flex flex-col gap-2.5">
        <div className="flex items-center justify-between mb-1.5">
          <div className="w-9.5 h-9.5 bg-neutral-900 rounded-[9px] flex items-center justify-center text-lg">
            {icon}
          </div>
          <div
            className={
              "text-xs px-2.5 py-0.5 rounded-full text-center " +
              headerClassname
            }
          >
            {header}
          </div>
        </div>
        <div className="text-lg font-semibold tracking-[-0.01em]">{title}</div>
        <div className="flex-1 text-sm font-light leading-[1.65] text-neutral-400">
          {description}
        </div>
        <div className="border-t border-[#222] mt-1.5 flex items-center flex-wrap pt-4 gap-1.5">
          {techTags}
        </div>
      </div>
    </>
  );
};
export default SelfLearningCard;

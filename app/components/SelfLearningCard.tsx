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
      <div className="border border-neutral-800 bg-neutral-900 p-5 rounded-lg flex flex-col gap-2">
        <div className=" flex items-center justify-between ">
          <div
            className={
              "bg-neutral-800 p-2 text-lg rounded-md flex items-center justify-center "
            }
          >
            {icon}
          </div>
          <div
            className={
              " text-xs font-light px-3 py-0.5 rounded-lg text-center" +
              headerClassname
            }
          >
            {header}
          </div>
        </div>
        <div className=" font-semibold text-lg pt-2">{title}</div>
        <div className=" font-light text-sm text-neutral-300">
          {description}
        </div>
        <div className="border-t border-neutral-800/80 mt-4 flex items-center flex-wrap pt-4 gap-2">
          {techTags}
        </div>
      </div>
    </>
  );
};
export default SelfLearningCard;

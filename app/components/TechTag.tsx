import React from "react";
const TechTag = ({
  children,
  classname,
}: {
  children: React.ReactNode;
  classname?: string;
}) => {
  return (
    <div
      className={
        "w-fit h-6.5 flex items-center border border-neutral-800 bg-[#141414] text-neutral-300 text-xs px-2.5 rounded-md " +
        (classname ?? "")
      }
    >
      {children}
    </div>
  );
};
export default TechTag;

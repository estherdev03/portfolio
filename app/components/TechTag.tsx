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
        " w-fit h-6 flex items-center bg-neutral-800 text-neutral-300 text-xs px-4 rounded-md " +
        classname
      }
    >
      {children}
    </div>
  );
};
export default TechTag;

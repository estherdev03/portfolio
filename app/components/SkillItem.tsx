import React from "react";

const SkillItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" w-fit h-fit px-4 py-1 bg-neutral-800/40 border border-neutral-700/60 text-neutral-300 rounded-md font-light text-sm">
      {children}
    </div>
  );
};
export default SkillItem;

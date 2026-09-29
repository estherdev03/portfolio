import React from "react";

const SkillItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-fit h-fit px-3 py-1.25 bg-neutral-800/40 border border-[#333] text-neutral-300 rounded-[7px] text-[13px]">
      {children}
    </div>
  );
};
export default SkillItem;

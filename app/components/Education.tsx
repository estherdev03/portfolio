import { CiCalendar } from "react-icons/ci";
import { FaAward, FaRegCircleCheck } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { LuBookOpenText } from "react-icons/lu";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

const COURSEWORK = [
  {
    group: "Core Computer Science",
    items: [
      {
        code: "CPSC 331",
        name: "Data Structures, Algorithms & Their Analysis",
      },
      { code: "CPSC 413", name: "Design & Analysis of Algorithms" },
      { code: "CPSC 351", name: "Theoretical Foundations of Computer Science" },
      { code: "CPSC 449", name: "Programming Paradigms" },
    ],
  },
  {
    group: "Systems & Applications",
    items: [
      { code: "CPSC 457", name: "Principles of Operating Systems" },
      { code: "CPSC 471", name: "Database Management Systems" },
      { code: "CPSC 526", name: "Network Systems Security" },
      { code: "CPSC 544", name: "Machine Learning" },
    ],
  },
];

const Education = () => {
  return (
    <Container id="education">
      <SectionHeading eyebrow="01 / Education" title="Education" />
      <div className="border border-neutral-800 bg-[#111] rounded-[14px] overflow-hidden">
        <div className="p-[clamp(20px,3vw,32px)] flex flex-wrap justify-between items-start gap-5 border-b border-[#222]">
          <div className="flex flex-col gap-1.5 min-w-0">
            <div className="font-display text-[clamp(22px,2.8vw,30px)] font-semibold tracking-[-0.02em]">
              University of Calgary
            </div>
            <div className="text-[17px] text-neutral-200">
              Bachelor of Science in Computer Science
            </div>
            <div className="text-[15px] text-neutral-400">
              Minor in Mathematics
            </div>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <div className="flex items-center gap-2 text-neutral-200">
              <CiCalendar className="text-base" />
              <span>Expected graduation: May 2027</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-400">
              <IoLocationOutline className="text-base" />
              Alberta, Canada
            </div>
          </div>
        </div>
        <div className="p-[clamp(20px,3vw,32px)] flex flex-col gap-3.5 border-b border-[#222]">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.08em] text-neutral-400 font-medium">
            <FaAward className="text-yellow-300 text-base" />
            <div>Honors and recognitions</div>
          </div>
          <div className="flex items-center gap-2.5 text-[15px]">
            <FaRegCircleCheck className="text-green-400 text-base" />
            <div>Dean&apos;s Honors List (2023 - 2025)</div>
          </div>
          <div className="flex items-center gap-2.5 text-[15px]">
            <FaRegCircleCheck className="text-green-400 text-base" />
            <div>President&apos;s Admission Scholarship</div>
          </div>
          <div className="flex items-center gap-2.5 text-[15px]">
            <FaRegCircleCheck className="text-green-400 text-base" />
            <div>Weeratne Memorial Scholarship</div>
          </div>
        </div>
        <div className="p-[clamp(20px,3vw,32px)] flex flex-col gap-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.08em] text-neutral-400 font-medium">
            <LuBookOpenText className="text-base text-neutral-300" />
            <div>Relevant coursework</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {COURSEWORK.map(({ group, items }) => (
              <div
                key={group}
                className="p-5 bg-neutral-800/35 border border-[#2a2a2a] rounded-[10px] flex flex-col gap-3"
              >
                <div className="text-[15px] font-medium">{group}</div>
                <ul className="m-0 p-0 list-none flex flex-col gap-2">
                  {items.map(({ code, name }) => (
                    <li
                      key={code}
                      className="flex gap-3 text-sm text-neutral-400 leading-snug"
                    >
                      <span className="w-17 shrink-0 pt-px font-mono text-xs text-neutral-500">
                        {code}
                      </span>
                      <span>{name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Education;

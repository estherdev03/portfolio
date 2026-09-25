import { CiCalendar } from "react-icons/ci";
import { FaAward, FaRegCircleCheck } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { LuBookOpenText } from "react-icons/lu";
import Container from "./Container";

const Education = () => {
  return (
    <Container id="education">
      <div className="w-3/5 flex flex-col gap-5">
        <div className="text-5xl font-semibold pb-4">Education</div>
        <div className=" flex flex-col justify-between p-5 gap-4 border border-neutral-800 bg-neutral-900 shadow-xs rounded-lg">
          <div className="flex justify-between items-center border-b border-neutral-800/80 pb-4">
            <div className="flex gap-1 flex-col">
              <div className="text-3xl pb-2">University of Calgary</div>
              <div className="text-lg ">
                Bachelor of Science in Computer Science
              </div>
              <div className="text-gray-400">Minor in Mathematics</div>
            </div>
            <div className="flex flex-col items-end gap-1">
              <div className="flex items-center gap-1">
                <CiCalendar className="text-lg" />
                <span>Expected graduation: May 2027</span>
              </div>
              <div className="flex items-center gap-1 text-gray-400">
                <IoLocationOutline className="text-lg" />
                Alberta, Canada
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-2 border-b border-neutral-800/80 pb-4">
            <div className="flex items-center gap-1">
              <FaAward className="text-yellow-300 text-lg" />
              <div className="uppercase">Honors and recognitions</div>
            </div>
            <div className="flex items-center gap-2">
              <FaRegCircleCheck className="text-green-400 text-sm" />
              <div>President Entrance Award</div>
            </div>
            <div className=" flex items-center gap-2">
              <FaRegCircleCheck className=" text-green-400 text-sm" />
              <div>Dean&apos;s Honors List</div>
            </div>
          </div>
          <div className="pb-5">
            <div className="flex items-center gap-2 pb-4">
              <LuBookOpenText className="text-lg" />
              <div className="uppercase">Relevant Computer Coursework</div>
            </div>
            <div className="grid grid-cols-2 grid-rows-1 gap-10">
              <div className="text-sm h-fit p-5 bg-neutral-800/40 flex flex-col rounded-lg border border-neutral-700/60 gap-2">
                <div>Core Computer Science</div>
                <ul className="text-neutral-400 list-disc list-inside space-y-1">
                  <li>CS 61B: Data Structures & Algorithms</li>
                  <li>CS 61B: Data Structures & Algorithms</li>
                  <li>CS 61B: Data Structures & Algorithms</li>
                  <li>CS 61B: Data Structures & Algorithms</li>
                </ul>
              </div>
              <div className="text-sm h-fit p-5 bg-neutral-800/40 flex flex-col items-stretch rounded-lg border border-neutral-700/60 gap-2">
                <div>Systems and Applications</div>
                <ul className="text-neutral-400 list-disc list-inside space-y-1">
                  <li>CS 61B: Data Structures & Algorithms</li>
                  <li>CS 61B: Data Structures & Algorithms</li>
                  <li>CS 61B: Data Structures & Algorithms</li>
                  <li>CS 61B: Data Structures & Algorithms</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Education;

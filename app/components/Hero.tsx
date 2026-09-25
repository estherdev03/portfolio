import Link from "next/link";
import { FiLinkedin } from "react-icons/fi";
import {
  IoArrowDownOutline,
  IoLocationOutline,
  IoNewspaperOutline,
} from "react-icons/io5";
import { MdOutlineSchool } from "react-icons/md";
import { RiGithubLine } from "react-icons/ri";

const Hero = () => {
  return (
    <div
      className="h-full flex flex-col justify-center items-center py-32 border-b border-neutral-800/80"
      id="about"
    >
      <div className="w-3/5 flex flex-col gap-5">
        <div className="flex items-center gap-2 w-fit h-fit px-4 py-1.5 bg-emerald-950/50 rounded-2xl border border-emerald-200">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <div className="text-emerald-300 text-sm ">
            Actively seeking Winter 2027 Software Engineering Internships
          </div>
        </div>
        <div className="text-7xl font-semibold">Hi, I&apos;m Esther Tran</div>
        <div className="text-3xl font-light text-gray-300">
          CS Student & Junior Software Engineer
        </div>
        <div className="text-gray-400 text-justify">
          I&apos;m a third-year Computer Science student with a strong
          foundation in data structures, algorithms, and web systems. I care
          deeply about writing clean, typed, and well-tested code that scales
          predictably. When I&apos;m not coding, you can find me practicing
          LeetCode patterns, contributing to student hackathons, or reading
          engineering postmortems.
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center px-5 py-1 bg-neutral-800/70 rounded-md font-thin text-sm w-fit border border-neutral-200/60">
            <MdOutlineSchool className="mr-2 text-neutral-300 text-lg" />
            <span className="text-neutral-400">
              University of Calgary, Calgary - B.Sc Computer Science
            </span>
          </div>
          <div className="flex items-center px-5 py-1 bg-neutral-800/70 rounded-md font-thin text-sm w-fit border border-neutral-200/60">
            <IoLocationOutline className="mr-2 text-neutral-300 text-lg" />
            <span className="text-neutral-400">
              Calgary, Alberta (Open to remote/relocation)
            </span>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-7">
            <Link
              href="#projects"
              className="flex items-center gap-2 bg-white w-fit h-fit px-5 py-2 text-black rounded-lg"
            >
              Explore projects <IoArrowDownOutline />
            </Link>
            <div className="flex items-center gap-2 bg-white w-fit h-fit px-5 py-2 text-black rounded-lg">
              <IoNewspaperOutline /> View Resume
            </div>
            <Link href="#contact" className="text-gray-400">
              Get in touch
            </Link>
            <span>|</span>
            <Link
              href="https://github.com/estherdev03"
              className="text-xl text-gray-400"
            >
              <RiGithubLine />
            </Link>
            <Link href="#" className="text-xl text-gray-400">
              <FiLinkedin />
            </Link>
            <Link href="#" className=" text-gray-400">
              esthertrandev@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

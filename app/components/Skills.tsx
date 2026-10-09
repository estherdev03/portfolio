import {
  Go,
  Java,
  Javascript,
  Python,
  _React,
  TypescriptIcon,
  Nestjs,
  DockerIcon,
  NodejsIcon,
  FastapiIcon,
} from "@dev.icons/react";
import SkillItem from "./SkillItem";
import { FiServer, FiTool } from "react-icons/fi";
import { LuBinary } from "react-icons/lu";
import { RiComputerLine } from "react-icons/ri";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
const Skills = () => {
  return (
    <Container id="skills">
      <SectionHeading eyebrow="02 / Skills" title="Technical Skills" />
      <div className="flex flex-wrap justify-center gap-2.5">
        <div className="w-22 flex flex-col items-center justify-center gap-2.5 px-2 py-4.5 border border-neutral-900 bg-[#0d0d0d] rounded-xl transition-colors hover:border-neutral-700 hover:bg-[#141414]">
          <div className="flex h-9 w-9 items-center justify-center text-4xl leading-none [&>svg]:block">
            <TypescriptIcon />
          </div>
          <span className="text-xs text-neutral-400">TypeScript</span>
        </div>
        <div className="w-22 flex flex-col items-center justify-center gap-2.5 px-2 py-4.5 border border-neutral-900 bg-[#0d0d0d] rounded-xl transition-colors hover:border-neutral-700 hover:bg-[#141414]">
          <div className="flex h-9 w-9 items-center justify-center text-4xl leading-none [&>svg]:block">
            <Javascript />
          </div>
          <span className="text-xs text-neutral-400">JavaScript</span>
        </div>
        <div className="w-22 flex flex-col items-center justify-center gap-2.5 px-2 py-4.5 border border-neutral-900 bg-[#0d0d0d] rounded-xl transition-colors hover:border-neutral-700 hover:bg-[#141414]">
          <div className="flex h-9 w-9 items-center justify-center text-4xl leading-none [&>svg]:block">
            <Python />
          </div>
          <span className="text-xs text-neutral-400">Python</span>
        </div>
        <div className="w-22 flex flex-col items-center justify-center gap-2.5 px-2 py-4.5 border border-neutral-900 bg-[#0d0d0d] rounded-xl transition-colors hover:border-neutral-700 hover:bg-[#141414]">
          <div className="flex h-9 w-9 items-center justify-center text-4xl leading-none [&>svg]:block">
            <Nestjs />
          </div>
          <span className="text-xs text-neutral-400">NestJS</span>
        </div>
        <div className="w-22 flex flex-col items-center justify-center gap-2.5 px-2 py-4.5 border border-neutral-900 bg-[#0d0d0d] rounded-xl transition-colors hover:border-neutral-700 hover:bg-[#141414]">
          <div className="flex h-9 w-9 items-center justify-center text-4xl leading-none [&>svg]:block">
            <FastapiIcon />
          </div>
          <span className="text-xs text-neutral-400">FastAPI</span>
        </div>
        <div className="w-22 flex flex-col items-center justify-center gap-2.5 px-2 py-4.5 border border-neutral-900 bg-[#0d0d0d] rounded-xl transition-colors hover:border-neutral-700 hover:bg-[#141414]">
          <div className="flex h-9 w-9 items-center justify-center text-4xl leading-none [&>svg]:block">
            <NodejsIcon />
          </div>
          <span className="text-xs text-neutral-400">Node.js</span>
        </div>
        <div className="w-22 flex flex-col items-center justify-center gap-2.5 px-2 py-4.5 border border-neutral-900 bg-[#0d0d0d] rounded-xl transition-colors hover:border-neutral-700 hover:bg-[#141414]">
          <div className="flex h-9 w-9 items-center justify-center text-4xl leading-none [&>svg]:block">
            <_React />
          </div>
          <span className="text-xs text-neutral-400">React</span>
        </div>
        <div className="w-22 flex flex-col items-center justify-center gap-2.5 px-2 py-4.5 border border-neutral-900 bg-[#0d0d0d] rounded-xl transition-colors hover:border-neutral-700 hover:bg-[#141414]">
          <div className="flex h-9 w-9 items-center justify-center text-4xl leading-none [&>svg]:block">
            <DockerIcon />
          </div>
          <span className="text-xs text-neutral-400">Docker</span>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="border border-neutral-800 bg-[#111] p-[clamp(20px,2.6vw,28px)] rounded-[14px] flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 shrink-0 bg-neutral-900 rounded-lg flex items-center justify-center text-[17px] text-neutral-200">
              <RiComputerLine />
            </div>
            <div className="text-lg font-medium">Frontend & UI</div>
          </div>
          <div className="flex flex-wrap gap-2">
            <SkillItem>ReactJS</SkillItem>
            <SkillItem>TailwindCSS</SkillItem>
            <SkillItem>NextJS</SkillItem>
            <SkillItem>Vite</SkillItem>
          </div>
        </div>
        <div className="border border-neutral-800 bg-[#111] p-[clamp(20px,2.6vw,28px)] rounded-[14px] flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 shrink-0 bg-neutral-900 rounded-lg flex items-center justify-center text-[17px] text-neutral-200">
              <FiServer />
            </div>
            <div className="text-lg font-medium">Backend & Databases</div>
          </div>
          <div className="flex flex-wrap gap-2">
            <SkillItem>NodeJS</SkillItem>
            <SkillItem>NestJS</SkillItem>
            <SkillItem>ExpressJS</SkillItem>
            <SkillItem>FastAPI</SkillItem>
            <SkillItem>SQLAlchemy</SkillItem>
            <SkillItem>MongoDB</SkillItem>
            <SkillItem>PostgresSQL</SkillItem>
          </div>
        </div>
        <div className="border border-neutral-800 bg-[#111] p-[clamp(20px,2.6vw,28px)] rounded-[14px] flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 shrink-0 bg-neutral-900 rounded-lg flex items-center justify-center text-[17px] text-neutral-200">
              <FiTool />
            </div>
            <div className="text-lg font-medium">Developer Tools & DevOps</div>
          </div>
          <div className="flex flex-wrap gap-2">
            <SkillItem>Git & Github</SkillItem>
            <SkillItem>Docker</SkillItem>
            <SkillItem>Linux/Unix Shell</SkillItem>
            <SkillItem>{"CI/CD (Github Action)"}</SkillItem>
            <SkillItem>Postman</SkillItem>
          </div>
        </div>
        <div className="border border-neutral-800 bg-[#111] p-[clamp(20px,2.6vw,28px)] rounded-[14px] flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 shrink-0 bg-neutral-900 rounded-lg flex items-center justify-center text-[17px] text-neutral-200">
              <LuBinary />
            </div>
            <div className="text-lg font-medium">Core Fundamentals</div>
          </div>
          <div className="flex flex-wrap gap-2">
            <SkillItem>Data Structures & Algorithms</SkillItem>
            <SkillItem>{"Object-Oriented Design (OOP)"}</SkillItem>
            <SkillItem>Concurrency & Multithreading </SkillItem>
            <SkillItem>Distributed System</SkillItem>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Skills;

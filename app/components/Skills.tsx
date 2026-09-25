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
const Skills = () => {
  return (
    <Container id="skills">
      <div className="w-3/5">
        <div className="text-5xl font-semibold pb-10">Technical Skills</div>
        <div className="flex flex-col gap-8 items-center">
          <div className=" w-3/4 flex items-center justify-center gap-7 my-6">
            <TypescriptIcon className="text-5xl" />
            <Javascript className="text-5xl" />
            <Go className=" text-5xl" />
            <Python className=" text-5xl" />
            <Java className=" text-5xl" />
            <Nestjs className=" text-5xl" />
            <FastapiIcon className=" text-5xl" />
            <NodejsIcon className=" text-5xl" />
            <_React className=" text-5xl" />
            <DockerIcon className=" text-5xl" />
          </div>
          <div className="w-full flex flex-col justify-center border border-neutral-800 bg-neutral-900 p-6 rounded-lg">
            <div className=" flex items-center gap-2 pb-6 flex-wrap">
              <div className="bg-neutral-800/40 w-fit h-fit p-2 rounded-sm flex items-center">
                <RiComputerLine />
              </div>
              <div className="text-xl">Frontend & UI</div>
            </div>
            <div className="flex items-center gap-5 flex-wrap">
              <SkillItem>ReactJS</SkillItem>
              <SkillItem>TailwindCSS</SkillItem>
              <SkillItem>NextJS</SkillItem>
              <SkillItem>Vite</SkillItem>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center border border-neutral-800 bg-neutral-900 p-6 rounded-lg">
            <div className=" flex items-center gap-2 pb-6">
              <div className="bg-neutral-800/40 w-fit h-fit p-2 rounded-sm flex items-center">
                <FiServer />
              </div>
              <div className="text-xl">Backend & Databases</div>
            </div>
            <div className="flex items-center gap-5 flex-wrap">
              <SkillItem>NodeJS</SkillItem>
              <SkillItem>NestJS</SkillItem>
              <SkillItem>ExpressJS</SkillItem>
              <SkillItem>FastAPI</SkillItem>
              <SkillItem>SQLAlchemy</SkillItem>
              <SkillItem>MongoDB</SkillItem>
              <SkillItem>PostgresSQL</SkillItem>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center border border-neutral-800 bg-neutral-900 p-6 rounded-lg">
            <div className=" flex items-center gap-2 pb-6">
              <div className="bg-neutral-800/40 w-fit h-fit p-2 rounded-sm flex items-center">
                <FiTool />
              </div>
              <div className="text-xl">Developer Tools & DevOps</div>
            </div>
            <div className="flex items-center gap-5 flex-wrap">
              <SkillItem>Git & Github</SkillItem>
              <SkillItem>Docker</SkillItem>
              <SkillItem>Linux/Unix Shell</SkillItem>
              <SkillItem>{"CI/CD (Github Action)"}</SkillItem>
              <SkillItem>Postman</SkillItem>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center border border-neutral-800 bg-neutral-900 p-6 rounded-lg">
            <div className=" flex items-center gap-2 pb-6">
              <div className="bg-neutral-800/40 w-fit h-fit p-2 rounded-sm flex items-center">
                <LuBinary />
              </div>
              <div className="text-xl">Core Fundamentals</div>
            </div>
            <div className="flex items-center gap-5 flex-wrap">
              <SkillItem>Data Structures & Algorithms</SkillItem>
              <SkillItem>{"Object-Oriented Design (OOP)"}</SkillItem>
              <SkillItem>Concurrency & Multithreading </SkillItem>
              <SkillItem>Distributed System</SkillItem>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Skills;

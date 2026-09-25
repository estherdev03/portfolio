import { IoCompassOutline, IoShieldCheckmarkOutline } from "react-icons/io5";
import Container from "./Container";
import PrincipleCard from "./PrincipleCard";
import { LuBookOpen, LuSparkles, LuZap } from "react-icons/lu";
import TechTag from "./TechTag";
import SelfLearningCard from "./SelfLearningCard";
import { IoMdCloudOutline } from "react-icons/io";
import { FaNetworkWired } from "react-icons/fa6";
import { VscLayers } from "react-icons/vsc";
import { PiNetwork } from "react-icons/pi";

const Principles = () => {
  const robustIcon = <IoShieldCheckmarkOutline />;
  const efficicentIcon = <LuZap />;
  const maintainIcon = <LuBookOpen />;
  const growthIcon = <LuSparkles />;

  const cloudTechTag = (
    <>
      <TechTag classname=" border border-neutral-700/80">Amazon ECS</TechTag>
      <TechTag classname=" border border-neutral-700/80">AWS Lambda</TechTag>
      <TechTag classname=" border border-neutral-700/80">S3 & DynamoDB</TechTag>
      <TechTag classname=" border border-neutral-700/80">IAM & VPC</TechTag>
    </>
  );
  const architectTechTag = (
    <>
      <TechTag classname=" border border-neutral-700/80">
        Raft Consensus
      </TechTag>
      <TechTag classname=" border border-neutral-700/80">CAP Theorem</TechTag>
      <TechTag classname=" border border-neutral-700/80">Data Sharding</TechTag>
      <TechTag classname=" border border-neutral-700/80">Kafka / SQS</TechTag>
    </>
  );
  const engineerTechTag = (
    <>
      <TechTag classname=" border border-neutral-700/80">
        Domain-Driven Design
      </TechTag>
      <TechTag classname=" border border-neutral-700/80">Microservices</TechTag>
      <TechTag classname=" border border-neutral-700/80">
        gRPC / Protobuf
      </TechTag>
      <TechTag classname=" border border-neutral-700/80">
        Resilience Patterns
      </TechTag>
    </>
  );

  return (
    <Container id="principles">
      <div className="w-3/5">
        <div className="capitalize text-5xl font-semibold mb-2">
          How I approach software engineering
        </div>
        <div className="font-light">
          Core principles I prioritize when writing code, reviewing pull
          requests, and designing systems.
        </div>
        <div className=" grid grid-cols-2 gap-4 mt-10  border-b border-neutral-800/80 pb-10">
          <PrincipleCard
            icon={robustIcon}
            header="Robustness"
            title="Type Safety & Defensive Engineering"
            description="I value TypeScript and strict typing (Pydantic / Zod) to catch boundary
            bugs at compile time and make complex systems self-documenting for team
            collaboration."
          />
          <PrincipleCard
            icon={efficicentIcon}
            header="Efficiency"
            title="Performance & Algorithmic Rigor"
            description="Whether it's hybrid search retrieval with reciprocal rank fusion, database query indexing, or state machines, I always consider resource limits and asymptotic complexity."
          />
          <PrincipleCard
            icon={maintainIcon}
            header="Maintainability"
            title="Clean Architecture & Decoupled Design"
            description="I believe in keeping business rules deterministic and decoupled from probabilistic models or third-party I/O, ensuring every calculation is explainable and testable.

"
          />
          <PrincipleCard
            icon={growthIcon}
            header="Growth Mindset"
            title="Continuous Curiosity & High Ownership"
            description="As an aspiring software engineer, my greatest strength is my eagerness to dive deep into unfamiliar frameworks, read source code, and build working systems from scratch."
          />
        </div>
        <div className=" flex flex-col gap-6">
          <div className=" flex items-center justify-between pt-10">
            <div className="flex flex-col">
              <div className=" flex items-center gap-2">
                <IoCompassOutline className=" text-2xl" />
                <div className="text-2xl font-semibold">
                  Active Self-Directed Learning
                </div>
              </div>
              <div className=" font-light text-sm pt-1">
                Independent study in cloud infrastructure, distributed systems,
                and software engineering.
              </div>
            </div>
            <div className=" inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-700 text-emerald-800 dark:text-emerald-300 text-xs font-semibold w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
              <div>Active Study</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <SelfLearningCard
              icon={<IoMdCloudOutline className=" text-sky-300" />}
              headerClassname=" border bg-sky-950/80 border-sky-800 text-sky-200"
              header="Cloud"
              title="AWS Cloud Infrastructure"
              description="Deploying scalable containerized applications and serverless workflows with ECS, Lambda, S3, and strict IAM security."
              techTags={cloudTechTag}
            />
            <SelfLearningCard
              icon={<PiNetwork className=" text-indigo-300" />}
              headerClassname=" border border-indigo-800 text-indigo-200 bg-indigo-950/80"
              header="Architecture"
              title="Distributed Systems"
              description="Studying consensus protocols (Raft), CAP trade-offs, horizontal sharding, Redis caching, and Kafka/SQS event streaming."
              techTags={architectTechTag}
            />
            <SelfLearningCard
              icon={<VscLayers className=" text-emerald-300" />}
              headerClassname=" border border-emerald-800 text-emerald-200 bg-emerald-950/80"
              header="Engineering"
              title="Software & System Design"
              description="Applying Domain-Driven Design (DDD), clean architecture, high-speed gRPC/Protobuf APIs, and resilience mechanisms."
              techTags={engineerTechTag}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Principles;

import { IoCompassOutline, IoShieldCheckmarkOutline } from "react-icons/io5";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
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
      <TechTag>Amazon ECS</TechTag>
      <TechTag>AWS Lambda</TechTag>
      <TechTag>S3 & DynamoDB</TechTag>
      <TechTag>IAM & VPC</TechTag>
    </>
  );
  const architectTechTag = (
    <>
      <TechTag>
        Raft Consensus
      </TechTag>
      <TechTag>CAP Theorem</TechTag>
      <TechTag>Data Sharding</TechTag>
      <TechTag>Kafka / SQS</TechTag>
    </>
  );
  const engineerTechTag = (
    <>
      <TechTag>
        Domain-Driven Design
      </TechTag>
      <TechTag>Microservices</TechTag>
      <TechTag>
        gRPC / Protobuf
      </TechTag>
      <TechTag>
        Resilience Patterns
      </TechTag>
    </>
  );

  return (
    <Container id="principles">
      <SectionHeading
        eyebrow="04 / Principles"
        title="How I approach software engineering"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
      <div className="flex flex-col gap-5 pt-8 border-t border-neutral-900">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2.5">
              <IoCompassOutline className="shrink-0 text-[22px]" />
              <div className="text-[22px] font-semibold tracking-[-0.02em]">
                Active Self-Directed Learning
              </div>
            </div>
            <div className="text-sm font-light text-neutral-400">
              Independent study in cloud infrastructure, distributed systems,
              and software engineering.
            </div>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-700 text-emerald-300 text-xs font-semibold w-fit">
            <span className="w-1.75 h-1.75 rounded-full bg-emerald-500 shrink-0"></span>
            <div>Active Study</div>
          </div>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
    </Container>
  );
};
export default Principles;

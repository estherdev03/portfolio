"use client";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { MdOutlineClose, MdOutlineFileDownload } from "react-icons/md";

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mt-4 mb-1.5 border-b-[1.5px] border-[#1f3864] pb-0.5 text-[15px] font-bold uppercase text-[#1f3864]">
    {children}
  </h2>
);

const Bullets = ({ items }: { items: React.ReactNode[] }) => (
  <ul className="ml-4 list-none">
    {items.map((item, i) => (
      <li
        key={i}
        className="relative pl-3 before:absolute before:left-0 before:content-['•']"
      >
        {item}
      </li>
    ))}
  </ul>
);

const ResumeLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="text-[#0563c1] underline not-italic"
  >
    {children}
  </a>
);

const Project = ({
  title,
  category,
  stack,
  source,
  demo,
  bullets,
}: {
  title: string;
  category: string;
  stack: string;
  source: string;
  demo: string;
  bullets: React.ReactNode[];
}) => (
  <div className="mb-3">
    <div className="flex flex-wrap justify-between gap-x-4">
      <span className="font-bold">{title}</span>
      <span>{category}</span>
    </div>
    <div className="italic">
      {stack} | <ResumeLink href={source}>Source</ResumeLink> |{" "}
      <ResumeLink href={demo}>Demo</ResumeLink>
    </div>
    <Bullets items={bullets} />
  </div>
);

const ResumeModal = ({ closeModal }: { closeModal: () => void }) => {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.classList.add("overflow-hidden");
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("overflow-hidden");
    };
  }, [closeModal]);

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-0 sm:p-6"
      onClick={(e) => {
        if (e.target == e.currentTarget) {
          closeModal();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Resume"
        className="w-full max-w-232 h-full sm:h-auto max-h-full sm:max-h-[92vh] bg-[#111] border border-[#333] rounded-none sm:rounded-2xl flex flex-col overflow-hidden animate-[et-in_.22s_ease-out]"
      >
        <div className="px-5 py-3 bg-[#111] border-b border-neutral-800 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400"></span>
            <span className="text-sm font-medium text-neutral-50 truncate">
              Esther Tran&apos;s Resume
            </span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/Esther_Tran_Resume.pdf"
              download="Esther_Tran_Resume.pdf"
              className="flex items-center gap-2 bg-neutral-50 px-3.5 h-9 text-neutral-950 rounded-[10px] text-sm font-medium cursor-pointer hover:bg-neutral-200 transition-colors"
            >
              <MdOutlineFileDownload className="text-lg" />
              <span className="whitespace-nowrap">Download Resume</span>
            </a>
            <button
              aria-label="Close"
              className="w-9 h-9 shrink-0 flex items-center justify-center border border-[#333] rounded-[10px] text-neutral-300 text-lg cursor-pointer hover:bg-neutral-800 hover:text-white transition-colors"
              onClick={closeModal}
            >
              <MdOutlineClose />
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto bg-[#111] p-3 sm:p-6">
          <article className="mx-auto max-w-[8.5in] bg-white px-[clamp(16px,6vw,64px)] py-[clamp(20px,5vw,48px)] font-[Arial,Helvetica,sans-serif] text-[13px] leading-[1.35] text-black shadow-xl">
            {/* Header */}
            <header className="text-center">
              <h1 className="text-[28px] font-bold tracking-wide text-[#1f3864]">
                ESTHER TRAN
              </h1>
              <div>
                Calgary, Alberta (open to remote/relocation) | (587) 830 6106 |{" "}
                <ResumeLink href="mailto:thimytuyen.tran@ucalgary.ca">
                  thimytuyen.tran@ucalgary.ca
                </ResumeLink>
              </div>
              <div>
                GitHub:{" "}
                <ResumeLink href="https://github.com/estherdev03">
                  estherdev03
                </ResumeLink>{" "}
                | Portfolio:{" "}
                <ResumeLink href="https://esthertran.dev">
                  esthertran.dev
                </ResumeLink>
              </div>
            </header>

            <SectionTitle>Profile</SectionTitle>
            <p className="text-justify">
              Fourth-year Computer Science student, minor in Mathematics, at the
              University of Calgary and two-time Dean&apos;s Honours List
              recipient, seeking a Winter 2027 Software Engineering Internship.
              Builds and ships production systems end to end, from a
              hybrid-search AI assistant for Canadian immigration to a secure
              full-stack platform with two-factor authentication and OAuth2,
              each deployed and publicly accessible. Brings a strong foundation
              in algorithms and systems, a disciplined approach to strictly
              typed, testable code and the drive to learn unfamiliar
              technologies quickly and own work from design through deployment.
            </p>

            <SectionTitle>Highlights of Qualifications</SectionTitle>
            <Bullets
              items={[
                <>
                  <b>Full-Stack Development:</b> Built and deployed three
                  production web applications end to end using TypeScript,
                  React/Next.js, NestJS, Express, and FastAPI, with frontends on
                  Vercel and containerized backends on Railway.
                </>,
                <>
                  <b>AI &amp; Information Retrieval:</b> Designed a hybrid RAG
                  pipeline (BM25 + pgvector + Reciprocal Rank Fusion + Cohere
                  reranking) over 516 NOC occupation groups and benchmarked four
                  retrieval pipelines using NDCG@10.
                </>,
                <>
                  <b>Software Quality &amp; Testing:</b> Built a fully
                  deterministic, auditable rule engine covered by an automated
                  pytest suite, uses strict typing (TypeScript, Pydantic, Zod)
                  to catch boundary bugs before runtime.
                </>,
                <>
                  <b>Application Security:</b> Implemented JWT authentication,
                  bcrypt hashing, TOTP two-factor authentication, Google/GitHub
                  OAuth2, and an httpOnly-cookie BFF proxy, completed coursework
                  in Network Systems Security.
                </>,
                <>
                  <b>Self-Directed Learning:</b> Independently studying AWS
                  cloud infrastructure, distributed systems (Raft, CAP,
                  sharding, Kafka/SQS), and system design patterns such as DDD
                  and gRPC microservices.
                </>,
              ]}
            />

            <SectionTitle>Education</SectionTitle>
            <div className="flex flex-wrap justify-between gap-x-4">
              <span className="font-bold">
                Bachelor of Science in Computer Science, Minor in Mathematics
              </span>
              <span>Expected graduation: May 2027</span>
            </div>
            <div className="italic">
              University of Calgary, Calgary, Alberta
            </div>
            <div className="mt-2 font-bold">Relevant Courses</div>
            <Bullets
              items={[
                <>
                  <b>
                    Data Structures, Algorithms &amp; Their Analysis, Design
                    &amp; Analysis of Algorithms:
                  </b>{" "}
                  algorithm design, correctness proofs, and asymptotic
                  complexity
                </>,
                <>
                  <b>Principles of Operating Systems:</b> processes,
                  concurrency, scheduling, and memory management
                </>,
                <>
                  <b>Database Management Systems:</b> relational modelling, SQL,
                  indexing, and transactions
                </>,
                <>
                  <b>Network Systems Security, Machine Learning:</b> secure
                  system design and applied ML methods
                </>,
                <>
                  <b>
                    Theoretical Foundations of Computer Science, Programming
                    Paradigms:
                  </b>{" "}
                  computability, formal languages, functional and logic
                  programming
                </>,
              ]}
            />

            <SectionTitle>Skills</SectionTitle>
            <Bullets
              items={[
                <>
                  <b>Languages:</b> TypeScript, JavaScript, Python, Go, Java,
                  SQL
                </>,
                <>
                  <b>Frontend:</b> React, Next.js, Tailwind CSS, Vite, Zustand,
                  React Hook Form, Zod
                </>,
                <>
                  <b>Backend &amp; Databases:</b> Node.js, NestJS, Express,
                  FastAPI, SQLAlchemy, TypeORM, PostgreSQL, pgvector, MongoDB
                </>,
                <>
                  <b>Tools &amp; DevOps:</b> Git/GitHub, Docker, Docker Compose,
                  GitHub Actions (CI/CD), Linux shell, Postman, pytest
                </>,
                <>
                  <b>Fundamentals:</b> Data structures &amp; algorithms,
                  object-oriented design, concurrency &amp; multithreading,
                  distributed systems
                </>,
              ]}
            />

            <SectionTitle>Projects</SectionTitle>
            <Project
              title="MaplePath: AI Express Entry Immigration Assistant"
              category="AI & RAG"
              stack="Python 3.12, LangGraph, FastAPI, PostgreSQL/pgvector, Cohere Rerank, Next.js, Docker, pytest"
              source="https://github.com/estherdev03/MaplePath"
              demo="https://maple-path-black.vercel.app"
              bullets={[
                "Architected an event-driven LangGraph orchestrator with typed state that routes applicant intake through extraction, NOC retrieval, classification, and eligibility evaluation",
                "Built a hybrid search pipeline combining BM25, pgvector semantic embeddings, Reciprocal Rank Fusion, and Cohere reranking across 516 NOC 2021 unit groups",
                "Benchmarked four retrieval pipelines against ground-truth labelled data using hit rate and NDCG@10 to select the most accurate approach",
                "Engineered a 100% deterministic Pydantic rule engine for CRS points, FSW 67-point grid checks, and IELTS/CELPIP/PTE/TEF/TCF-to-CLB conversions, verified by an automated pytest suite",
                "Shipped a responsive Next.js frontend with live CRS simulation and interactive NOC code exploration",
              ]}
            />
            <Project
              title="Pomodoro App: Productivity & Session Tracking Platform"
              category="Backend & Security"
              stack="TypeScript, NestJS 11, TypeORM, PostgreSQL, Next.js 16, Zustand, Passport.js, Docker"
              source="https://github.com/estherdev03/pomodoro-app"
              demo="https://pomodoro-murex-beta.vercel.app"
              bullets={[
                "Developed a modular NestJS backend exposing 15 REST endpoints, with TypeORM migrations and Docker Compose for reproducible development",
                "Engineered authentication with bcrypt, JWT access tokens, optional TOTP two-factor authentication (QR setup and verification), and Google + GitHub OAuth2",
                "Implemented a session lifecycle API (start, end, current, history) managing 25-minute focus, 5-minute short break, and 15-minute long break intervals",
                "Built a reactive Next.js frontend with Zustand and React Hook Form + Zod, mirrored by class-validator DTOs on the server, behind an httpOnly-cookie BFF proxy",
                "Deployed the frontend to Vercel and the containerized backend and PostgreSQL database to Railway",
              ]}
            />
            <Project
              title="MERN Canva: Browser-Based Graphic Design Tool"
              category="Full Stack & Graphics"
              stack="React, Node.js, Express 5, MongoDB/Mongoose, Tailwind CSS, Cloudinary API, Passport.js"
              source="https://github.com/estherdev03/mern-canva"
              demo="https://mern-canva-navy.vercel.app"
              bullets={[
                "Built a multi-layer canvas editor supporting real-time drag, resize, rotate, z-index layering, font customization, and colour picking",
                "Architected a media pipeline connecting Express 5 to the Cloudinary API for instant uploads, asset management, and transformed image delivery",
                "Implemented hybrid authentication with email/password JWT login and Google OAuth 2.0 via Passport.js",
                "Designed six Mongoose models for designs, users, and reusable templates, and enabled high-resolution PNG/JPEG export via client-side rasterization",
              ]}
            />

            <SectionTitle>Awards &amp; Scholarships</SectionTitle>
            <Bullets
              items={[
                <>
                  <b>Dean&apos;s Honours List,</b> University of Calgary,
                  Calgary, Alberta (2023–2025)
                </>,
                <>
                  <b>President&apos;s Admission Scholarship,</b> University of
                  Calgary, Calgary, Alberta
                </>,
                <>
                  <b>Weeratne Memorial Scholarship,</b> University of Calgary,
                  Calgary, Alberta
                </>,
              ]}
            />
          </article>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default ResumeModal;

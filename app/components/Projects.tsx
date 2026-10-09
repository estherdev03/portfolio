"use client";
import TechTag from "./TechTag";
import ProjectCard from "./ProjectCard";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import ProjectDetailModal, { ProjectDetailProps } from "./ProjectDetailModal";
import { useEffect, useState } from "react";

export enum ProjectName {
  maplepath = "maplepath",
  pomodoro = "pomodoro",
  canva_clone = "canva_clone",
}

const Projects = () => {
  // ------ MaplePath -----
  const maplePathFeatures = (
    <>
      <li>
        Architected an event-driven LangGraph orchestrator with typed state
        routing applicant intake through extraction, NOC retrieval,
        classification, and eligibility evaluation.
      </li>
      <li>
        Built a hybrid search pipeline combining BM25 keyword search, pgvector
        semantic embeddings, Reciprocal Rank Fusion (RRF), and Cohere reranking.
      </li>
      <li>
        Benchmarked NOC retrieval pipelines against ground-truth labeled
        datasets in noc/evaluate.py, evaluating hit rates and NDCG@10 scores.
      </li>
      <li>
        Engineered a 100% deterministic, auditable rule engine with Pydantic for
        CRS points, language conversions (IELTS, CELPIP, PTE, TEF, TCF to CLB),
        and FSW 67-point grid checks.
      </li>
      <li>
        Shipped a responsive Next.js frontend with live interactive CRS
        simulation and NOC code exploration.
      </li>
    </>
  );
  const maplePathTechTags = (
    <>
      <TechTag>Python 3.12</TechTag>
      <TechTag>LangGraph</TechTag>
      <TechTag>FastAPI</TechTag>
      <TechTag>pgvector</TechTag>
      <TechTag>PostgreSQL</TechTag>
      <TechTag>Cohere Rerank</TechTag>
      <TechTag>NextJS</TechTag>
      <TechTag>Docker</TechTag>
      <TechTag>pytest</TechTag>
    </>
  );
  const maplePathBenchmark = (
    <>
      <div className="highlight-tile">
        <div>NDCG@10 Benchmark</div>
        <div>Retrieval eval</div>
      </div>
      <div className="highlight-tile">
        <div>LangGraph State</div>
        <div>Orchestration</div>
      </div>
      <div className="highlight-tile">
        <div>100% Auditable CRS</div>
        <div>Scoring engine</div>
      </div>
    </>
  );
  // ------ Pomodoro -----
  const pomodoroFeatures = (
    <>
      <li>
        Developed a modular NestJS 11 backend with TypeORM, PostgreSQL
        migrations, and Docker Compose for reproducible local and containerized
        development.
      </li>
      <li>
        Engineered enterprise authentication featuring bcrypt hashing, JWT
        access tokens, optional Two-Factor Authentication (TOTP authenticator
        app QR code generation and verification), and Google + GitHub OAuth2
        strategies.
      </li>
      <li>
        Implemented Pomodoro session lifecycle API (/pomodoro-session/start,
        /end, /current, /history) managing focus (25m), short breaks (5m), and
        long breaks (15m).
      </li>
      <li>
        Built reactive Next.js 16 frontend with Zustand state store, React Hook
        Form + Zod client validation, backed by class-validator DTOs on the
        server.
      </li>
      <li>
        Deployed distributed production architecture with frontend hosted on
        Vercel and containerized backend + PostgreSQL on Railway.
      </li>
    </>
  );
  const pomodoroTechTags = (
    <>
      <TechTag>TypeScript</TechTag>
      <TechTag>NextJS</TechTag>
      <TechTag>React</TechTag>
      <TechTag>NestJS</TechTag>
      <TechTag>PostgreSQL</TechTag>
      <TechTag>TypeORM</TechTag>
      <TechTag>Docker</TechTag>
      <TechTag>2FA (TOTP)</TechTag>
      <TechTag>Zustand</TechTag>
      <TechTag>TailwindCSS</TechTag>
      <TechTag>PassportJS</TechTag>
    </>
  );
  const pomodoroBenchmark = (
    <>
      <div className="highlight-tile">
        <div>15 REST Endpoints</div>
        <div>NestJS API</div>
      </div>
      <div className="highlight-tile">
        <div>httpOnly Cookie Proxy</div>
        <div>Next.js BFF Layer</div>
      </div>
      <div className="highlight-tile">
        <div>25 / 5 / 15 min</div>
        <div>Session Lifecycle</div>
      </div>
    </>
  );
  // ------ MERN Canva -----
  const canvaFeatures = (
    <>
      <li>
        Built an interactive multi-layer visual canvas editor supporting
        real-time drag-and-drop element positioning, resizing, z-index layering,
        font customization, and color picking.
      </li>
      <li>
        Architected media asset pipeline connecting Express 5 with Cloudinary
        API for instant image uploads, background asset management, and
        transformed image delivery.
      </li>
      <li>
        Implemented hybrid authentication supporting email/password registration
        with JWT authentication alongside Google OAuth 2.0 via Passport.js.
      </li>
      <li>
        Integrated client-side canvas rasterization via html-to-image allowing
        users to export and download high-resolution graphic designs directly in
        PNG/JPEG formats.
      </li>
      <li>
        Designed clean MongoDB schemas for Design documents, User profiles, and
        reusable Design Templates.
      </li>
    </>
  );
  const canvaTechTags = (
    <>
      <TechTag>React</TechTag>
      <TechTag>NodeJS</TechTag>
      <TechTag>Express</TechTag>
      <TechTag>MongoDB</TechTag>
      <TechTag>Mongoose</TechTag>
      <TechTag>TailwindCSS</TechTag>
      <TechTag>Cloudinary API</TechTag>
      <TechTag>PassportJS</TechTag>
      <TechTag>html-to-image</TechTag>
    </>
  );
  const canvaBenchmark = (
    <>
      <div className="highlight-tile">
        <div>Drag · Resize · Rotate</div>
        <div>Canvas Editor</div>
      </div>
      <div className="highlight-tile">
        <div>6 Mongoose Models</div>
        <div>MongoDB Schema</div>
      </div>
      <div className="highlight-tile">
        <div>PNG Export</div>
        <div>html-to-image</div>
      </div>
    </>
  );

  // Project Detail List for Project Detail Modal
  const ProjectsDetailList: {
    maplepath: ProjectDetailProps;
    pomodoro: ProjectDetailProps;
    canva_clone: ProjectDetailProps;
  } = {
    maplepath: {
      main_tag: "AI & RAG",
      secondary_tag: "Featured Architecture",
      title: "MaplePath AI",
      description: `Production AI Express Entry assistant: LangGraph multi-step
          orchestration, hybrid search (BM25 + pgvector + Cohere), and
          deterministic CRS scoring`,
      techTags: (
        <>
          <TechTag>Python 3.12</TechTag>
          <TechTag>LangGraph</TechTag>
          <TechTag>FastAPI</TechTag>
          <TechTag>pgvector</TechTag>
          <TechTag>PostgreSQL</TechTag>
          <TechTag>Cohere Rerank</TechTag>
          <TechTag>NextJS</TechTag>
          <TechTag>Docker</TechTag>
          <TechTag>pytest</TechTag>
        </>
      ),
      category: (
        <>
          <div className="stat-tile">
            <div>BM25 + pgvector + RRF</div>
            <div>Hybrid Retrieval</div>
          </div>
          <div className="stat-tile">
            <div>7-Node LangGraph</div>
            <div>Orchestration</div>
          </div>
          <div className="stat-tile">
            <div>100% Auditable CRS</div>
            <div>Scoring Engine</div>
          </div>
        </>
      ),
      architect: ` Decouples probabilistic AI capabilities from regulatory immigration
            rules. The FastAPI backend orchestrates a LangGraph state machine:
            unstructured user text is parsed into typed Pydantic models with
            constrained field extraction; candidate NOC 2021 job unit groups are
            retrieved via hybrid BM25 + pgvector search and reranked; LLM
            chooses strictly among retrieved official candidate groups to
            prevent hallucinations; and pure Python rule engines
            deterministically calculate CRS points and eligibility.`,
      technical: (
        <>
          <li>
            Eliminating LLM hallucination of non-existent Canadian NOC job codes
            (resolved by passing candidate context strictly from the hybrid
            retrieval layer and forcing the model to select from candidates).
          </li>
          <li>
            Handling complex official language test score conversions across 5
            distinct testing systems (IELTS, CELPIP, PTE, TEF, TCF) into
            Canadian Language Benchmarks (CLB / NCLC).
          </li>
          <li>
            Benchmarking and tuning hybrid search parameters (BM25 weights,
            vector distance metrics, RRF constant k) against ground-truth
            evaluation sets using NDCG@10.
          </li>
        </>
      ),
      testing: `Comprehensive automated pytest test suite mirroring backend
            architecture (tests/), validating graph routing transitions,
            deterministic CRS point conversions, and retrieval ranking
            benchmarks.`,
      takeaway: ` Mastered modern agentic workflow patterns with LangGraph, hybrid
              vector + keyword retrieval, and the crucial software engineering
              practice of isolating AI reasoning from auditable deterministic
              business logic.`,
      github_url: "https://github.com/estherdev03/MaplePath",
      demo_url: "https://maple-path-black.vercel.app",
    },
    pomodoro: {
      main_tag: "Backend & Security",
      secondary_tag: "Production Deployed",
      title: "Pomodoro App",
      description: `Full-stack productivity & session tracking system with 2FA (TOTP), multi-provider OAuth2, and containerized PostgreSQL`,
      techTags: (
        <>
          <TechTag>TypeScript</TechTag>
          <TechTag>NextJS</TechTag>
          <TechTag>React</TechTag>
          <TechTag>NestJS</TechTag>
          <TechTag>PostgreSQL</TechTag>
          <TechTag>TypeORM</TechTag>
          <TechTag>Docker</TechTag>
          <TechTag>2FA (TOTP)</TechTag>
          <TechTag>Zustand</TechTag>
          <TechTag>TailwindCSS</TechTag>
          <TechTag>PassportJS</TechTag>
        </>
      ),
      category: (
        <>
          <div className="stat-tile">
            <div>2FA (TOTP) + OAuth2</div>
            <div>Authentication</div>
          </div>
          <div className="stat-tile">
            <div>NestJS + TypeORM</div>
            <div>Backend API</div>
          </div>
          <div className="stat-tile">
            <div>Vercel + Railway</div>
            <div>Deployment</div>
          </div>
        </>
      ),
      architect: `Designed with a clean decoupled client-server architecture. The NestJS backend provides specialized modular services (auth, users, pomodoro-session) communicating with PostgreSQL through TypeORM entities. The Next.js frontend interacts via a type-safe HTTP client with automatic token refreshing and Zustand global state management.`,
      technical: (
        <>
          <li>
            Implementing secure Two-Factor Authentication (TOTP) lifecycle:
            secret generation, QR code generation, provisional secret
            verification, and permanent activation.
          </li>
          <li>
            Synchronizing active session timers between client state and server
            database records to prevent session loss on page refresh or network
            interruption.
          </li>
          <li>
            Managing cross-origin cookie authentication and OAuth callback
            redirection between Vercel frontend and Railway backend domains.
          </li>
        </>
      ),
      testing: `Jest unit and e2e harness scaffolded for every NestJS module (auth, users, pomodoro-session), with a global ValidationPipe enforcing class-validator DTOs on all API payloads and Zod schemas validating auth forms on the client.`,
      takeaway: ` Deepened proficiency in NestJS dependency injection patterns, enterprise auth protocols (TOTP, OAuth2, JWT), and deploying full-stack containerized applications to cloud platforms.`,
      github_url: "https://github.com/estherdev03/pomodoro-app",
      demo_url: "https://pomodoro-murex-beta.vercel.app",
    },
    canva_clone: {
      main_tag: "Full Stack & Graphics",
      secondary_tag: "Live Interactive App",
      title: "Canva Clone (MERN Canva)",
      description: `Full-stack browser graphic design tool with multi-layer canvas editor, Cloudinary cloud asset storage & Google OAuth`,
      techTags: (
        <>
          <TechTag>React</TechTag>
          <TechTag>NodeJS</TechTag>
          <TechTag>Express</TechTag>
          <TechTag>MongoDB</TechTag>
          <TechTag>Mongoose</TechTag>
          <TechTag>TailwindCSS</TechTag>
          <TechTag>Cloudinary API</TechTag>
          <TechTag>PassportJS</TechTag>
          <TechTag>html-to-image</TechTag>
        </>
      ),
      category: (
        <>
          <div className="stat-tile">
            <div>Z-Indexed DOM Layers</div>
            <div>Canvas State</div>
          </div>
          <div className="stat-tile">
            <div>Cloudinary</div>
            <div>Cloud Assets</div>
          </div>
          <div className="stat-tile">
            <div>Vercel + Atlas</div>
            <div>Deployment</div>
          </div>
        </>
      ),
      architect: `Powered by a MERN stack architecture with Express 5 REST endpoints managing user projects, design state documents, and Cloudinary image signatures. The React 19 frontend manages active canvas state (elements array, selected element, bounding boxes, layers) and renders modifications with sub-millisecond responsiveness.`,
      technical: (
        <>
          <li>
            Managing complex nested element manipulation state (coordinates,
            rotation, scale, z-index ordering) without causing full canvas
            re-render lag.
          </li>
          <li>
            Securely proxying and handling authenticated Cloudinary media
            uploads with secret signing.
          </li>
          <li>
            Synchronizing canvas state persistence to MongoDB while supporting
            seamless template instantiation.
          </li>
        </>
      ),
      testing: `Manual end-to-end validation of OAuth redirection flows, canvas element boundary collisions, and export rendering fidelity across different browser viewports.`,
      takeaway: `Gained extensive experience in state management for graphical canvas interfaces, third-party cloud media SDK integrations, and modern full-stack JavaScript architectures.`,
      github_url: "https://github.com/estherdev03/mern-canva",
      demo_url: "https://mern-canva-navy.vercel.app",
    },
  };

  const [showDetailModal, setShowDetailModal] = useState(false);
  const [projectDetail, setProjectDetail] = useState<ProjectDetailProps>(
    ProjectsDetailList["maplepath"], //Maplepath is the default detail
  );

  const openModal = (projectName: ProjectName) => {
    setProjectDetail({ ...ProjectsDetailList[projectName] });
    setShowDetailModal(true);
  };

  const closeModal = () => {
    setShowDetailModal(false);
  };

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", showDetailModal);
    return () => document.body.classList.remove("overflow-hidden"); //clean up
  }, [showDetailModal]);

  return (
    <>
      <Container id="projects">
        <SectionHeading eyebrow="03 / Projects" title="Featured Projects" />
        <div className="flex flex-col gap-6">
          <ProjectCard
            id={ProjectName.maplepath}
            mainHeader="AI & RAG"
            secondaryHeader="Featured Architecture"
            title="MaplePath"
            description="Production AI Express Entry assistant: LangGraph multi-step
              orchestration, hybrid search (BM25 + pgvector + Cohere), and
              deterministic CRS scoring"
            githubRepo="https://github.com/estherdev03/MaplePath"
            demoUrl="https://maple-path-black.vercel.app"
            detail="An intelligent, auditable immigration assistant for Canada's
          Express Entry skilled immigration system. Converts applicant natural
          language into validated profile schemas, retrieves and classifies NOC
          2021 occupation codes with hybrid search, and deterministically
          computes Comprehensive Ranking System (CRS) points and FSW/CEC/FST
          eligibility."
            features={maplePathFeatures}
            techtags={maplePathTechTags}
            benchmark={maplePathBenchmark}
            handleClick={openModal}
          />
          <ProjectCard
            id={ProjectName.pomodoro}
            mainHeader="Backend & Security"
            secondaryHeader="Production Deployed"
            title="Pomodoro App"
            description="Full-stack productivity & session tracking system with 2FA (TOTP), multi-provider OAuth2, and containerized PostgreSQL"
            githubRepo="https://github.com/estherdev03/pomodoro-app"
            demoUrl="https://pomodoro-murex-beta.vercel.app"
            detail="A full-stack productivity web application built around the Pomodoro technique. Delivers structured focus session tracking, 
          short & long break intervals, persistent session history, and enterprise-grade security including JWT authentication, two-factor 
          authentication (TOTP), and Google/GitHub OAuth2."
            features={pomodoroFeatures}
            techtags={pomodoroTechTags}
            benchmark={pomodoroBenchmark}
            handleClick={openModal}
          />
          <ProjectCard
            id={ProjectName.canva_clone}
            mainHeader="Full Stack & Graphics"
            secondaryHeader="Live Interactive App"
            title="Canva Clone (MERN Canva)"
            description="Full-stack browser graphic design tool with multi-layer canvas editor, Cloudinary cloud asset storage & Google OAuth"
            githubRepo="https://github.com/estherdev03/mern-canva"
            demoUrl="https://mern-canva-navy.vercel.app"
            detail="An interactive full-stack graphic design platform inspired by Canva. Features a rich visual canvas workspace for composing multi-element graphics with custom text, geometric shapes, and cloud-stored images, alongside template browsing and instant client-side image rendering export."
            features={canvaFeatures}
            techtags={canvaTechTags}
            benchmark={canvaBenchmark}
            handleClick={openModal}
          />
        </div>
      </Container>
      {showDetailModal && (
        <ProjectDetailModal {...projectDetail} closeModal={closeModal} />
      )}
    </>
  );
};

export default Projects;

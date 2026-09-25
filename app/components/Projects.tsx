import TechTag from "./TechTag";
import ProjectCard from "./ProjectCard";
import Container from "./Container";

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
      <div className="text-center">
        <div>NDCG@10 Benchmark</div>
        <div className="text-sm">Retrieval Eval</div>
      </div>
      <div className=" text-center">
        <div>NDCG@10 Benchmark</div>
        <div className=" text-sm">Retrieval Eval</div>
      </div>
      <div className=" text-center">
        <div>NDCG@10 Benchmark</div>
        <div className=" text-sm">Retrieval Eval</div>
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
        Form, and Zod client & server schema validation.
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
      <div className="text-center">
        <div>NDCG@10 Benchmark</div>
        <div className="text-sm">Retrieval Eval</div>
      </div>
      <div className=" text-center">
        <div>NDCG@10 Benchmark</div>
        <div className=" text-sm">Retrieval Eval</div>
      </div>
      <div className=" text-center">
        <div>NDCG@10 Benchmark</div>
        <div className=" text-sm">Retrieval Eval</div>
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
      <div className="text-center">
        <div>NDCG@10 Benchmark</div>
        <div className="text-sm">Retrieval Eval</div>
      </div>
      <div className=" text-center">
        <div>NDCG@10 Benchmark</div>
        <div className=" text-sm">Retrieval Eval</div>
      </div>
      <div className=" text-center">
        <div>NDCG@10 Benchmark</div>
        <div className=" text-sm">Retrieval Eval</div>
      </div>
    </>
  );

  return (
    <Container id="projects">
      <div className="w-3/5 flex flex-col gap-10">
        <div className="text-5xl font-semibold pb-4">Featured Projects</div>
        <ProjectCard
          mainHeader="AI & RAG"
          secondaryHeader="Featured Architecture"
          title="MaplePath"
          description="Production AI Express Entry assistant: LangGraph multi-step
              orchestration, hybrid search (BM25 + pgvector + Cohere), and
              deterministic CRS scoring"
          githubRepo="#"
          detail="An intelligent, auditable immigration assistant for Canada's
          Express Entry skilled immigration system. Converts applicant natural
          language into validated profile schemas, retrieves and classifies NOC
          2021 occupation codes with hybrid search, and deterministically
          computes Comprehensive Ranking System (CRS) points and FSW/CEC/FST
          eligibility."
          features={maplePathFeatures}
          techtags={maplePathTechTags}
          benchmark={maplePathBenchmark}
        />
        <ProjectCard
          mainHeader="Backend & Security"
          secondaryHeader="Production Deployed"
          title="Pomodoro App"
          description="Full-stack productivity & session tracking system with 2FA (TOTP), multi-provider OAuth2, and containerized PostgreSQL"
          githubRepo="#"
          detail="A full-stack productivity web application built around the Pomodoro technique. Delivers structured focus session tracking, 
          short & long break intervals, persistent session history, and enterprise-grade security including JWT authentication, two-factor 
          authentication (TOTP), and Google/GitHub OAuth2."
          features={pomodoroFeatures}
          techtags={pomodoroTechTags}
          benchmark={pomodoroBenchmark}
        />
        <ProjectCard
          mainHeader="Full Stack & Graphics"
          secondaryHeader="Live Interactive App"
          title="Canva Clone (MERN Canva)"
          description="Full-stack browser graphic design tool with multi-layer canvas editor, Cloudinary cloud asset storage & Google OAuth"
          githubRepo="#"
          detail="An interactive full-stack graphic design platform inspired by Canva. Features a rich visual canvas workspace for composing multi-element graphics with custom text, geometric shapes, and cloud-stored images, alongside template browsing and instant client-side image rendering export."
          features={canvaFeatures}
          techtags={canvaTechTags}
          benchmark={canvaBenchmark}
        />
      </div>
    </Container>
  );
};

export default Projects;

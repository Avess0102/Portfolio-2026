import { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  personal: {
    name: "Saurabh Sambhe",
    title: "Full Stack Developer | Angular · .NET · Gen AI (RAG, Agents)",
    subtitle: "Building and scaling a global digital logistics platform used across 100+ countries.",
    avatarUrl: "https://ui-avatars.com/api/?name=Saurabh+Sambhe&background=111111&color=fff&size=400&bold=true&format=svg",
    bioSummary: "Full Stack Developer with 3.5 years of experience building and scaling ECU360, a global digital logistics platform. Specialized in Angular and .NET with MS SQL, with hands-on experience in the MERN stack, Next.js, and production Gen AI applications (RAG, agentic tool calling, evals).",
    detailedBio: [
      "I'm a full-stack developer at Allcargo ECU Limited (ECU Worldwide), where I work on ECU360 — a global digital logistics platform serving customers across 100+ countries. My day-to-day is Angular and .NET with MS SQL, building high-traffic modules like Sailing Schedule, Quote, and Trucking Instruction, optimizing SQL for large-scale data retrieval, and reviewing code for the team.",
      "Outside my core stack, I've been building production Gen AI applications — RAG pipelines over vector search (pgvector), framework-free LLM agent loops with tool calling, and eval suites that measure retrieval and answer accuracy against real failure modes rather than vibes. I also work comfortably across the MERN stack and Next.js.",
      "I've solved 500+ problems across LeetCode, Codeforces, and CodeChef, hold a SQL Advanced certification from HackerRank, and am JLPT N5 certified in Japanese. I enjoy mentoring junior developers and turning ambiguous product requirements into clean, reactive, well-tested UI."
    ],
    email: "saurabhsambhe02@gmail.com",
    location: "Mumbai, India",
    resumeUrl: "/resume.pdf",
    phone: "+91-7499328730"
  },
  projects: [
    {
      id: "proj-1",
      title: "CargoMind — Agentic RAG for Logistics Documents",
      description: "A document-intelligence app where users upload freight quotes, invoices, and contracts and get cited answers via semantic search over embedded PDF chunks.",
      longDescription: "CargoMind is a deployed document-intelligence app for logistics documents. Users upload freight quotes, invoices, and contracts and get answers with clickable citations, powered by semantic search over PDF chunks embedded (bge-small, 384-dim) into PostgreSQL + pgvector. A framework-free LLM agent loop (Llama 3.3 70B, tool calling) combines document search with a safe AST-based calculator tool, streaming live reasoning steps and cited answers to a Next.js UI over SSE.",
      tags: ["FastAPI", "Next.js", "TypeScript", "PostgreSQL", "pgvector", "Groq API", "SSE"],
      category: "ai",
      imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800&h=500",
      demoUrl: "#",
      githubUrl: "#",
      featured: true,
      highlights: [
        "Semantic search over PDF chunks embedded (bge-small, 384-dim) into PostgreSQL + pgvector.",
        "Framework-free LLM agent loop (Llama 3.3 70B) with document search and a safe AST-based calculator tool.",
        "Live reasoning steps and cited answers streamed to a Next.js UI over SSE.",
        "21-question eval suite measuring retrieval hit-rate@5 and answer accuracy across five failure-mode categories, incl. calculations and unanswerable queries.",
        "Deployed on Render (API) + Vercel (frontend), with rate-limit backoff to improve reliability."
      ]
    },
    {
      id: "proj-2",
      title: "Crypto Factory — Real-Time Cryptocurrency Tracker",
      description: "A full-stack crypto tracker polling the CoinGecko API with MongoDB persistence.",
      longDescription: "Crypto Factory is a full-stack cryptocurrency tracker that polls the CoinGecko API for live market data and persists it to MongoDB, with a Next.js and Redux frontend and an Express API backend.",
      tags: ["Next.js", "TypeScript", "Express", "MongoDB", "Redux"],
      category: "web",
      imageUrl: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=800&h=500",
      githubUrl: "#",
      featured: false,
      highlights: [
        "Polls the CoinGecko API for real-time cryptocurrency market data.",
        "MongoDB persistence layer for historical price data.",
        "Next.js + TypeScript frontend with Redux for state management, backed by an Express API."
      ]
    },
    {
      id: "proj-3",
      title: "Multi-Modal Message Notification Router — HackerRank Orchestrate Hackathon",
      description: "A personalized AI router that triages WhatsApp text, image, and voice messages into notify / digest / mute.",
      longDescription: "Built for the HackerRank Orchestrate Hackathon, this router triages WhatsApp messages (text, image, and voice) into notify / digest / mute using Gemini for reasoning and Groq Whisper for transcription across 13 relational datasets. A history-based retrieval layer personalizes decisions per user, backed by a deterministic scam-detection safeguard that resolves ~10% of cases without an LLM call, plus disk caching for resumable runs, retry/backoff handling, and schema validation for robustness.",
      tags: ["Gemini", "Groq Whisper", "Python", "Schema Validation", "Caching"],
      category: "ai",
      imageUrl: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?auto=format&fit=crop&q=80&w=800&h=500",
      githubUrl: "#",
      featured: false,
      highlights: [
        "Triages WhatsApp text, image, and voice messages into notify / digest / mute using Gemini for reasoning and Groq Whisper for transcription across 13 relational datasets.",
        "History-based retrieval layer for personalization plus a deterministic scam-detection safeguard resolving ~10% of cases without an LLM call.",
        "Disk caching for resumable runs, retry/backoff handling, and schema validation for robustness.",
        "Achieved 90% action-routing accuracy; placed in the top 11% (Rank 212 of 1,983 participants)."
      ]
    }
  ],
  skills: [
    // Frontend
    { name: "Angular", level: 95, category: "Frontend", iconName: "Code" },
    { name: "TypeScript", level: 90, category: "Frontend", iconName: "Code" },
    { name: "React.js", level: 82, category: "Frontend", iconName: "React" },
    { name: "Next.js", level: 80, category: "Frontend", iconName: "Layout" },
    { name: "RxJS", level: 85, category: "Frontend", iconName: "GitMerge" },
    { name: "Redux", level: 78, category: "Frontend", iconName: "Layers" },
    { name: "Tailwind CSS", level: 85, category: "Frontend", iconName: "Layers" },
    { name: "HTML5 & CSS3", level: 90, category: "Frontend", iconName: "Layout" },

    // Backend
    { name: ".NET", level: 88, category: "Backend", iconName: "Server" },
    { name: "Node.js & Express.js", level: 82, category: "Backend", iconName: "Server" },
    { name: "MS SQL", level: 90, category: "Backend", iconName: "Database" },
    { name: "FastAPI (Python)", level: 78, category: "Backend", iconName: "Cpu" },
    { name: "PostgreSQL (pgvector)", level: 78, category: "Backend", iconName: "Database" },
    { name: "MongoDB / MySQL", level: 75, category: "Backend", iconName: "Database" },
    { name: "JWT Authentication", level: 85, category: "Backend", iconName: "Server" },
    { name: "Microservices & RESTful APIs", level: 85, category: "Backend", iconName: "Server" },
    { name: "LINQ", level: 80, category: "Backend", iconName: "Code" },

    // DevOps & Tools
    { name: "Azure DevOps (CI/CD)", level: 85, category: "DevOps & Tools", iconName: "GitBranch" },
    { name: "Azure Blob Storage", level: 80, category: "DevOps & Tools", iconName: "Cloud" },
    { name: "Git & GitHub", level: 92, category: "DevOps & Tools", iconName: "GitBranch" },
    { name: "Linux", level: 75, category: "DevOps & Tools", iconName: "Terminal" },
    { name: "AI-Assisted Development (Copilot, Claude)", level: 85, category: "DevOps & Tools", iconName: "Cpu" },

    // Specialized (Gen AI)
    { name: "RAG Pipelines & Vector Search", level: 85, category: "Specialized", iconName: "Cpu" },
    { name: "LLM Agents & Tool Calling", level: 85, category: "Specialized", iconName: "Cpu" },
    { name: "Prompt Engineering & LLM Evals", level: 82, category: "Specialized", iconName: "BookOpen" },
    { name: "Embeddings & Semantic Search", level: 80, category: "Specialized", iconName: "BarChart" },
    { name: "LLM APIs (Groq, Gemini, Anthropic)", level: 82, category: "Specialized", iconName: "Cpu" },

    // Soft Skills
    { name: "Agile / Scrum", level: 90, category: "Soft Skills", iconName: "Users" },
    { name: "Code Review & Mentoring", level: 88, category: "Soft Skills", iconName: "ShieldAlert" },
    { name: "Problem Solving (500+ DSA)", level: 92, category: "Soft Skills", iconName: "ShieldAlert" },
    { name: "Cross-team Collaboration", level: 88, category: "Soft Skills", iconName: "Users" }
  ],
  experience: [
    {
      id: "exp-1",
      role: "Senior Full Stack Developer",
      company: "Allcargo ECU Limited (ECU Worldwide)",
      location: "Mumbai, India",
      period: "June 2024 – Present",
      description: [
        "Led UI/UX development of the Sailing Schedule and Quote modules — two of the platform's highest-traffic features — serving customers in 100+ countries; improved usability and responsiveness.",
        "Reduced data retrieval time by 80% for the ICOPS module by optimizing MS SQL queries and introducing client-side filtering with RxJS, sustaining performance under peak traffic.",
        "Developed .NET Windows Services with SQL Server for data synchronization across all data centers, replacing Azure Logic Apps and delivering a 70% cost reduction.",
        "Implemented JWT-based authentication in a .NET Core microservices architecture, separating quote and booking services with RESTful APIs to improve modularity and security.",
        "Reviewed pull requests and mentored 2 junior developers on Angular best practices, component design, and code quality standards."
      ],
      current: true
    },
    {
      id: "exp-2",
      role: "Graduate Engineer Trainee (Full Stack)",
      company: "Allcargo ECU Limited (ECU Worldwide)",
      location: "Mumbai, India",
      period: "June 2023 – May 2024",
      description: [
        "Resolved 125+ production issues through debugging, log analysis, and patch releases deployed via Azure DevOps CI/CD pipelines, improving platform stability for global users.",
        "Delivered 5 major value propositions in collaboration with the product team, shipping customer-facing feature enhancements across the platform."
      ]
    },
    {
      id: "exp-3",
      role: "Development Intern",
      company: "Allcargo ECU Limited (ECU Worldwide)",
      location: "Mumbai, India",
      period: "January 2023 – May 2023",
      description: [
        "Integrated an Amazon Lex chatbot into the ECU360 platform, streamlining user interaction with logistics services.",
        "Implemented Azure Blob Storage for files and images on ECU360, offloading static assets and improving page-load performance by 90%."
      ]
    }
  ],
  education: [
    {
      id: "edu-1",
      degree: "B.Tech, Computer Science Engineering — CGPA 8.24",
      institution: "Shri Guru Gobind Singhji Institute of Engineering and Technology, Nanded, India",
      period: "Aug 2019 – May 2023",
      description: "500+ problems solved (LeetCode, Codeforces, CodeChef) · SQL Advanced — HackerRank · RAG — Udemy · JLPT N5"
    }
  ],
  achievements: [
    {
      id: "ach-1",
      title: "500+ Problems Solved",
      subtitle: "Across LeetCode, Codeforces & CodeChef.",
      iconName: "Code"
    },
    {
      id: "ach-2",
      title: "SQL (Advanced)",
      subtitle: "HackerRank certification.",
      iconName: "Database"
    },
    {
      id: "ach-3",
      title: "Retrieval-Augmented Generation",
      subtitle: "RAG certification — Udemy.",
      iconName: "Brain"
    },
    {
      id: "ach-4",
      title: "JLPT N5 — Japanese",
      subtitle: "Certified beginner proficiency in Japanese.",
      iconName: "Languages"
    },
    {
      id: "ach-5",
      title: "B.Tech, CSE — CGPA 8.24",
      subtitle: "SGGSIE&T, Nanded · 2019 – 2023.",
      iconName: "GraduationCap"
    },
    {
      id: "ach-6",
      title: "125+ Production Issues Resolved",
      subtitle: "Debugging & patch releases via Azure DevOps CI/CD.",
      iconName: "ShieldCheck"
    },
    {
      id: "ach-7",
      title: "Design Thinking",
      subtitle: "Certification — Udemy.",
      iconName: "Lightbulb"
    }
  ],
  socials: [
    { platform: "github", url: "https://github.com/Avess0102", label: "GitHub" },
    { platform: "linkedin", url: "https://www.linkedin.com/in/saurabh-sambhe", label: "LinkedIn" },
    { platform: "email", url: "mailto:saurabhsambhe02@gmail.com", label: "Email" }
  ]
};

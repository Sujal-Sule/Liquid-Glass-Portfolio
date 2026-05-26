export interface ProjectData {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  year: string;
  description: string;

  // Extended SEO content for dedicated pages
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];

  // Rich content
  problem: string;
  solution: string;
  features: string[];
  techStack: { name: string; role: string }[];
  architecture: string;
  hackathon?: {
    name: string;
    organizer: string;
    year: string;
    award: string;
    role: string;
  };

  // Links
  live?: string;
  github?: string;

  // Image (imported separately in components)
  imageIndex: number;
}

export const projects: ProjectData[] = [
  {
    id: "PROJECT 01",
    slug: "skillswap",
    title: "SkillSwap Platform",
    tagline: "AI-Powered Collaborative Skill Exchange",
    year: "2025",
    description:
      "A collaborative skill exchange platform focused on connecting users through learning, mentorship, and real-world collaboration.",
    seoTitle:
      "SkillSwap — AI-Powered Skill Exchange Platform | Sujal Sule Project",
    seoDescription:
      "SkillSwap is a full-stack collaborative skill exchange platform built with React, TypeScript, FastAPI, MongoDB, Gemini AI, and WebSockets. Enabling real-time peer-to-peer learning and AI-powered skill matching. Built by Sujal Sule.",
    seoKeywords: [
      "SkillSwap",
      "skill exchange platform",
      "peer-to-peer learning",
      "AI skill matching",
      "React TypeScript project",
      "FastAPI MongoDB",
      "WebSocket collaboration",
      "Gemini AI integration",
      "Sujal Sule project",
      "hackathon project India",
      "MERN stack application",
    ],
    problem:
      "Traditional learning platforms operate on a one-directional model — someone teaches, someone learns. There's no efficient way for peers to discover complementary skills, match with learning partners, and collaborate in real time. Students and developers often have skills to share but lack a structured platform for mutual exchange.",
    solution:
      "SkillSwap introduces a bidirectional skill exchange model where users list skills they can teach and skills they want to learn. The platform uses Google Gemini AI to intelligently match users based on complementary skill profiles, learning goals, and availability. Real-time WebSocket-powered collaboration workspaces enable paired users to work together instantly — sharing code, resources, and feedback in a synchronized environment.",
    features: [
      "AI-powered skill matching using Google Gemini for intelligent peer pairing based on complementary expertise",
      "Real-time collaborative workspaces with WebSocket-based synchronization for live coding and resource sharing",
      "User skill profiles with teach/learn categorization and proficiency tracking",
      "Firebase-powered real-time state synchronization across all connected clients",
      "Custom peer-to-peer workspace matching mechanics for optimal learning partnerships",
      "Responsive glassmorphism UI built with React and Tailwind CSS for a premium user experience",
      "FastAPI backend with MongoDB for high-performance API endpoints and flexible data storage",
      "Vercel deployment with wildcard subdomain routing for scalable hosting",
    ],
    techStack: [
      { name: "React.js", role: "Frontend UI framework with component-driven architecture" },
      { name: "TypeScript", role: "Type-safe development across the full stack" },
      { name: "Vite", role: "Lightning-fast build tooling and development server" },
      { name: "FastAPI", role: "High-performance Python backend for API endpoints" },
      { name: "Python", role: "Server-side logic, AI integration, and data processing" },
      { name: "MongoDB", role: "NoSQL document database for flexible user and skill data" },
      { name: "Firebase", role: "Real-time database synchronization and authentication" },
      { name: "Google Gemini AI", role: "Intelligent skill matching and recommendation engine" },
      { name: "WebSockets", role: "Real-time bidirectional communication for live collaboration" },
      { name: "Vercel", role: "Edge deployment with serverless functions and CDN" },
    ],
    architecture:
      "SkillSwap follows a modern full-stack architecture with a React/TypeScript frontend communicating via REST APIs to a FastAPI/Python backend. MongoDB stores user profiles, skill graphs, and collaboration history. Firebase provides real-time state synchronization for collaborative workspaces, while WebSocket connections enable instant messaging and live workspace updates. Google Gemini AI processes skill profiles through vector embeddings to compute optimal peer matches. The entire system is deployed on Vercel with wildcard subdomain routing for clean URL structure.",
    hackathon: {
      name: "Glitch the Grid",
      organizer: "GDG IIPS DAVV",
      year: "2026",
      award: "2nd Runner Up 🏆",
      role: "Full-Stack Developer (Solo Creator)",
    },
    live: "https://skillswap.sujalsule.in",
    github: "https://github.com/Sujal-Sule",
    imageIndex: 0,
  },
  {
    id: "PROJECT 02",
    slug: "safepulse",
    title: "SafePulse",
    tagline: "AI-Driven Smart Crowd Monitoring & Emergency Response",
    year: "2025",
    description:
      "An AI-driven crowd monitoring and emergency response system designed for smart city and public safety management.",
    seoTitle:
      "SafePulse — Smart Crowd Safety & Emergency Response System | Sujal Sule",
    seoDescription:
      "SafePulse is an AI-driven crowd monitoring and emergency response system for smart cities. Built with React, Mapbox GL, Python, Firebase & Supabase. Features real-time crowd density mapping and automated emergency alerting. By Sujal Sule.",
    seoKeywords: [
      "SafePulse",
      "crowd monitoring system",
      "smart city safety",
      "emergency response platform",
      "Mapbox crowd management",
      "real-time crowd density",
      "React Mapbox project",
      "public safety technology",
      "Sujal Sule SafePulse",
      "hackathon finalist project",
      "IoT crowd management",
    ],
    problem:
      "Large public gatherings — festivals, concerts, protests, sports events — pose significant crowd safety risks. Traditional crowd management relies on manual observation and reactive responses. City authorities lack real-time spatial intelligence to detect dangerous crowd density buildups, predict stampede risks, and coordinate emergency responses before situations become critical.",
    solution:
      "SafePulse provides a real-time smart crowd containment and emergency response dashboard for smart city environments. Using Mapbox GL-powered spatial visualization, it maps crowd density across geographic zones in real time. Custom animated gauge widgets display threat levels, crowd flow direction, and containment zone status. The system integrates automated emergency alerting that triggers coordinated responses when crowd density exceeds safety thresholds.",
    features: [
      "Real-time spatial crowd density mapping using Mapbox GL with color-coded heat zones",
      "Custom animated gauge dashboards showing crowd flow metrics, containment status, and threat levels",
      "Automated emergency alert triggering when crowd density exceeds configurable safety thresholds",
      "Interactive zone management with drag-to-define containment perimeters",
      "Motion layout transitions for smooth, animated dashboard state changes using Framer Motion",
      "Firebase-powered real-time data streaming from IoT sensor endpoints",
      "Supabase backend for persistent data storage and historical crowd analytics",
      "Responsive design optimized for command center monitors and mobile field devices",
    ],
    techStack: [
      { name: "React.js", role: "Interactive dashboard UI with real-time state management" },
      { name: "TypeScript", role: "Type-safe development for complex spatial data handling" },
      { name: "Vite", role: "Fast development builds and optimized production bundles" },
      { name: "Mapbox GL", role: "High-performance map rendering with crowd density layers" },
      { name: "Python", role: "Backend data processing and IoT sensor integration" },
      { name: "Firebase", role: "Real-time data streaming from distributed sensor networks" },
      { name: "Supabase", role: "Persistent storage for historical crowd analytics data" },
      { name: "Framer Motion", role: "Animated gauge widgets and smooth layout transitions" },
      { name: "Vercel", role: "Edge deployment with global CDN for low-latency access" },
    ],
    architecture:
      "SafePulse uses a real-time streaming architecture where IoT sensor data flows through Firebase into the React frontend. Mapbox GL renders crowd density as geographic heat layers updated at sub-second intervals. The Python backend processes raw sensor telemetry into actionable metrics — density scores, flow vectors, and risk assessments — that drive the dashboard gauges built with custom Framer Motion animations. Supabase provides the persistence layer for historical analysis and trend detection. The system is designed for horizontal scaling across multiple city zones.",
    hackathon: {
      name: "Project Morpheus",
      organizer: "SIT Lonavala — National Innovation Hackathon",
      year: "2026",
      award: "Finalist",
      role: "Full-Stack Developer",
    },
    live: "https://safepulse.teamcodezilla.in",
    github: "https://github.com/Sujal-Sule",
    imageIndex: 1,
  },
  {
    id: "PROJECT 03",
    slug: "echobook",
    title: "EchoBook",
    tagline: "Immersive AI-Powered Dynamic Storytelling",
    year: "2025",
    description:
      "A modern social/content-sharing web platform focused on interaction, engagement, and scalable user experiences.",
    seoTitle:
      "EchoBook — Gemini AI Dynamic Storytelling Platform | Sujal Sule",
    seoDescription:
      "EchoBook is an immersive AI-powered storytelling platform using Google Gemini's multimodal API for real-time voice and text narrative generation. Built with Next.js, React, FastAPI, WebSockets & Firebase. By Sujal Sule.",
    seoKeywords: [
      "EchoBook",
      "AI storytelling platform",
      "Gemini Live API project",
      "dynamic storytelling",
      "multimodal AI",
      "Next.js AI application",
      "real-time voice interaction",
      "Google Cloud hackathon",
      "Sujal Sule EchoBook",
      "interactive AI narrative",
      "WebSocket AI streaming",
    ],
    problem:
      "Traditional storytelling media — books, audiobooks, interactive fiction — is static. The narrative doesn't adapt to the reader's mood, choices, or conversational input. Existing AI chatbots can generate text but lack the immersive, multi-sensory experience of true interactive storytelling. There's no platform that combines voice interaction, text chat, and dynamic narrative generation into a cohesive, immersive experience.",
    solution:
      "EchoBook creates an immersive dynamic storytelling experience powered by Google Gemini's multimodal agency. Users interact through both voice and text, and the AI generates responsive narrative content that adapts to their input in real time. The platform synchronizes environmental content flows — sound, text, visual cues — with user interactions to create a truly immersive storytelling session. Multi-turn prompting architecture ensures narrative consistency across extended sessions.",
    features: [
      "Real-time voice and text interaction using Gemini Live API's multimodal capabilities",
      "Dynamic narrative generation that adapts to user choices, mood, and conversational context",
      "Multi-turn prompting architecture maintaining story consistency across extended sessions",
      "Environmental content synchronization — visual cues and ambient elements matching story tone",
      "Real-time state managers synchronizing responsive content flows with vocal and chat logs",
      "Optimized server routes under strict latency ceilings for smooth interaction loops",
      "WebSocket-powered streaming for low-latency AI response delivery",
      "Firebase authentication and session persistence for returning users",
    ],
    techStack: [
      { name: "Next.js", role: "Server-rendered React framework with API routes and SSR" },
      { name: "React.js", role: "Interactive UI with real-time state management" },
      { name: "TypeScript", role: "Type-safe development across frontend and backend" },
      { name: "FastAPI", role: "High-performance Python API for Gemini AI orchestration" },
      { name: "Python", role: "AI prompt engineering and response processing pipelines" },
      { name: "WebSockets", role: "Real-time streaming for low-latency AI narrative delivery" },
      { name: "Firebase", role: "User authentication and session state persistence" },
      { name: "Gemini Live API", role: "Google's multimodal AI for voice and text generation" },
      { name: "Vercel", role: "Edge deployment with serverless function support" },
    ],
    architecture:
      "EchoBook is built on a Next.js frontend with server-side rendering for fast initial loads. The FastAPI backend serves as the AI orchestration layer, managing multi-turn conversation state and constructing optimized prompts for Google Gemini's Live API. WebSocket connections stream AI-generated narrative content to the frontend in real time, minimizing perceived latency. Firebase handles user authentication and persists session history for narrative continuity. The architecture is optimized for sub-200ms response times through aggressive prompt caching and connection pooling.",
    hackathon: {
      name: "Gemini Live Agent Challenge",
      organizer: "Google Cloud — Global Hackathon",
      year: "2026",
      award: "Participant & Builder",
      role: "AI Integration & Frontend Lead",
    },
    live: "https://echobook.sujalsule.in",
    github: "https://github.com/Sujal-Sule",
    imageIndex: 2,
  },
  {
    id: "PROJECT 04",
    slug: "safeflow",
    title: "SafeFlow",
    tagline: "Intelligent Traffic & Crowd Flow Management",
    year: "2025",
    description:
      "An intelligent traffic and crowd flow management system built to improve urban mobility, safety, and real-time monitoring.",
    seoTitle:
      "SafeFlow — Intelligent Traffic & Crowd Flow Management System | Sujal Sule",
    seoDescription:
      "SafeFlow is an intelligent traffic and crowd flow management system with Leaflet-based real-time map visualization, flow analytics, and urban mobility optimization. Built with React, TypeScript, Python & FastAPI. By Sujal Sule.",
    seoKeywords: [
      "SafeFlow",
      "traffic management system",
      "crowd flow management",
      "Leaflet crowd management",
      "urban mobility platform",
      "real-time traffic monitoring",
      "smart city traffic",
      "React Leaflet project",
      "Sujal Sule SafeFlow",
      "flow analytics dashboard",
      "Python traffic system",
    ],
    problem:
      "Urban environments face increasing challenges with traffic congestion and crowd flow management. Traditional traffic systems rely on fixed-timing signals and manual observation, failing to adapt to real-time conditions. During events, emergencies, or peak hours, the lack of intelligent flow management leads to gridlocks, safety hazards, and inefficient resource allocation for city authorities.",
    solution:
      "SafeFlow provides an intelligent, map-based traffic and crowd flow management dashboard that visualizes real-time movement patterns across urban zones. Using Leaflet for interactive map rendering, it displays flow direction vectors, congestion hotspots, and throughput metrics. The system suggests optimal rerouting strategies and provides predictive analytics for upcoming congestion based on historical patterns and current flow rates.",
    features: [
      "Interactive Leaflet-based map visualization with real-time traffic flow overlays",
      "Flow direction vectors and congestion hotspot identification on geographic layers",
      "Throughput metrics and capacity utilization gauges per traffic zone",
      "Historical pattern analysis for predictive congestion forecasting",
      "Optimal rerouting suggestions based on real-time flow data",
      "Responsive dashboard design for control room monitors and mobile access",
      "RESTful API endpoints for integration with external traffic sensor systems",
      "Real-time data streaming for sub-second dashboard updates",
    ],
    techStack: [
      { name: "React.js", role: "Interactive dashboard with real-time map integration" },
      { name: "TypeScript", role: "Type-safe development for complex geospatial data" },
      { name: "Vite", role: "Optimized builds and fast hot-module replacement" },
      { name: "Leaflet", role: "Open-source map rendering with custom traffic layers" },
      { name: "Python", role: "Backend flow analysis and prediction algorithms" },
      { name: "FastAPI", role: "High-performance API endpoints for real-time data" },
    ],
    architecture:
      "SafeFlow follows a client-server architecture with a React/TypeScript frontend rendering Leaflet maps with custom traffic overlay layers. The FastAPI/Python backend processes incoming sensor data streams, computes flow metrics (velocity, density, throughput), and serves them via REST endpoints. Historical data is analyzed using time-series algorithms to generate congestion predictions. The system is designed for modular zone management, allowing city authorities to monitor and manage individual traffic sectors independently.",
    live: "https://safeflow.teamcodezilla.in",
    github: "https://github.com/Sujal-Sule",
    imageIndex: 3,
  },
  {
    id: "PROJECT 05",
    slug: "origyn",
    title: "Origyn",
    tagline: "Blockchain-Powered Supply Chain Traceability",
    year: "2026",
    description:
      "A blockchain-powered supply chain traceability platform with real-time tracking, IoT telemetry, and dual-client architecture.",
    seoTitle:
      "Origyn — Blockchain Supply Chain Traceability Platform | Sujal Sule",
    seoDescription:
      "Origyn is a blockchain-powered supply chain traceability platform with real-time product tracking, IoT telemetry simulation, JWT authentication, and a dual-client system (React web + Expo mobile). Built by Sujal Sule for the BGI Hackathon.",
    seoKeywords: [
      "Origyn blockchain",
      "supply chain traceability",
      "blockchain tracking platform",
      "Web3 supply chain",
      "React Web3 project",
      "Expo React Native",
      "IoT telemetry",
      "product provenance",
      "Sujal Sule Origyn",
      "BGI hackathon",
      "FastAPI blockchain",
    ],
    problem:
      "Global supply chains suffer from opacity — consumers and businesses cannot verify the origin, journey, and handling conditions of products. Counterfeit goods, regulatory non-compliance, and quality control failures cost industries billions annually. Traditional tracking systems are centralized, easily tampered with, and lack real-time visibility into product conditions during transit.",
    solution:
      "Origyn leverages blockchain technology to create an immutable, transparent record of every product's journey through the supply chain. From raw material sourcing to final delivery, each handoff and condition check is recorded on-chain. Real-time IoT telemetry (temperature, humidity, location) is streamed via background simulation tasks and visualized on interactive map layers. A dual-client system — React web dashboard plus Expo React Native mobile app — ensures stakeholders can track products from any device.",
    features: [
      "Blockchain-based immutable product provenance records for supply chain transparency",
      "Real-time IoT telemetry simulation streaming temperature, humidity, and location data",
      "Interactive Mapbox/Recharts tracking visualization with animated route overlays",
      "JWT-authenticated REST API endpoints for secure supply chain data access",
      "Dual-client architecture: React web dashboard + Expo React Native mobile application",
      "Background Python tasks for continuous IoT sensor data simulation and streaming",
      "Critical condition warning alerts when telemetry exceeds safety thresholds",
      "FastAPI backend with efficient async request handling for real-time data",
    ],
    techStack: [
      { name: "React.js", role: "Web dashboard with data visualization and tracking maps" },
      { name: "TypeScript", role: "Type-safe development across web and mobile clients" },
      { name: "Vite", role: "Fast build tooling for the web client" },
      { name: "FastAPI", role: "High-performance backend with async endpoint handling" },
      { name: "Python", role: "IoT simulation, blockchain integration, and data processing" },
      { name: "Expo / React Native", role: "Cross-platform mobile client for field tracking" },
      { name: "WebSockets", role: "Real-time telemetry streaming to connected clients" },
      { name: "Web3", role: "Blockchain integration for immutable provenance records" },
      { name: "Recharts", role: "Data visualization for supply chain analytics" },
      { name: "Mapbox", role: "Geographic route tracking and location visualization" },
    ],
    architecture:
      "Origyn uses a microservice-inspired architecture where the FastAPI backend serves as the central API gateway, handling JWT authentication, blockchain writes, and telemetry ingestion. A background Python process simulates IoT sensor data streams, which are pushed to connected clients via WebSockets. The React web dashboard provides administrative views with Recharts analytics and Mapbox route tracking, while the Expo React Native app offers field workers a mobile-first tracking experience. Blockchain integration ensures that product provenance records are immutable and auditable.",
    hackathon: {
      name: "BGI Hackathon",
      organizer: "Blockchain Supply Chain Challenge",
      year: "2026",
      award: "First Web3 & Blockchain Build",
      role: "Full-Stack Web3 Developer (Solo Creator)",
    },
    github: "https://github.com/Sujal-Sule/Origyn",
    imageIndex: -1, // No homepage image
  },
  {
    id: "PROJECT 06",
    slug: "aarogya-ai",
    title: "AAROGYA AI",
    tagline: "AI-Powered Preventive Health Ecosystem",
    year: "2025",
    description:
      "A preventive health ecosystem featuring Gemini-driven medical advice, real-time yoga posture correction, RAG analysis, and fall detection.",
    seoTitle:
      "AAROGYA AI — Preventive Health Platform with AI & Pose Estimation | Sujal Sule",
    seoDescription:
      "AAROGYA AI is a preventive health ecosystem with Gemini-driven medical advice, TensorFlow-powered yoga posture correction, RAG document analysis, and real-time fall detection. Built by Sujal Sule for HACKATRON at IIITM Gwalior.",
    seoKeywords: [
      "AAROGYA AI",
      "AI health platform",
      "preventive healthcare AI",
      "yoga posture correction",
      "TensorFlow pose estimation",
      "medical RAG analysis",
      "Gemini AI healthcare",
      "fall detection system",
      "IIITM Gwalior hackathon",
      "Sujal Sule AAROGYA",
      "health tech India",
    ],
    problem:
      "Preventive healthcare in India faces accessibility challenges. Many people lack access to timely medical consultations, fitness guidance, and health monitoring. Elderly individuals are at risk of undetected falls. Existing health apps focus on either fitness OR medical advice, but rarely integrate both with real-time monitoring capabilities. Medical document analysis is time-consuming for both patients and doctors.",
    solution:
      "AAROGYA AI creates a comprehensive preventive health ecosystem that combines multiple AI-powered capabilities into a single platform. Google Gemini provides intelligent medical consultation simulation. TensorFlow-based human pose estimation enables real-time yoga posture correction with interactive canvas guidelines. A custom RAG (Retrieval-Augmented Generation) engine analyzes uploaded medical documents to extract key insights. Active fall detection monitors users in real time and triggers alerts for caregivers.",
    features: [
      "Gemini AI-powered medical consultation simulation with contextual health advice",
      "Real-time yoga posture correction using TensorFlow human pose keypoint estimation",
      "Interactive canvas guidelines overlaid on live camera feed for posture feedback",
      "Custom RAG (Retrieval-Augmented Generation) engine for medical document analysis",
      "Active fall detection with real-time monitoring and caregiver alert system",
      "Multi-modal health dashboard with exercise tracking and medical history",
      "Firebase-powered real-time data sync and user authentication",
      "Responsive design for desktop health stations and mobile devices",
    ],
    techStack: [
      { name: "React.js", role: "Interactive health dashboard and posture correction UI" },
      { name: "TypeScript", role: "Type-safe development for medical data handling" },
      { name: "Vite", role: "Fast development builds for rapid hackathon prototyping" },
      { name: "FastAPI", role: "Backend API for AI model serving and health data processing" },
      { name: "Python", role: "AI/ML pipeline orchestration and medical data processing" },
      { name: "Firebase", role: "Real-time data sync, authentication, and cloud storage" },
      { name: "Google Gemini", role: "Medical consultation simulation and document analysis" },
      { name: "TensorFlow", role: "Human pose estimation for yoga posture correction" },
      { name: "OpenCV", role: "Computer vision for fall detection and pose preprocessing" },
    ],
    architecture:
      "AAROGYA AI follows a modular architecture where each health feature operates as an independent service connected through the FastAPI backend. The pose estimation pipeline processes webcam frames through TensorFlow's MoveNet model, extracting 17 keypoints that are compared against ideal pose templates. The RAG engine uses embedding-based retrieval from uploaded medical documents to augment Gemini AI responses with patient-specific context. Fall detection runs a continuous monitoring loop using OpenCV motion analysis, triggering Firebase push notifications when falls are detected. Firebase provides the real-time data layer connecting all modules.",
    hackathon: {
      name: "HACKATRON by IIITM Gwalior",
      organizer: "Infotsav '25",
      year: "2025",
      award: "Participant & Creator",
      role: "Lead Full-Stack & AI Developer (Solo Creator)",
    },
    github: "https://github.com/Sujal-Sule/Team_CodeZilla_AAROGYA.AI",
    imageIndex: -1, // No homepage image
  },
];

// Helper to get only homepage-visible projects (those with images)
export const homepageProjects = projects.filter((p) => p.imageIndex >= 0);

// Helper to get project by slug
export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);

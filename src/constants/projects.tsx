// interface Project {
//   id: number;
//   name: string;
//   desc: string;
//   description: string;
//   stack: string[];
//   backgroundImage: string;
// }

// export const projects: Project[] = [
//   {
//     id: 1,
//     name: "E-Commerce Platform",
//     desc: "A modern e-commerce solution with seamless user experience",
//     description: "A comprehensive e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, payment integration, and order management.",
//     stack: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
//     backgroundImage: "/images/p1.webp"
//   },
//   {
//     id: 2,
//     name: "Healthcare Management System",
//     desc: "Streamlining healthcare operations and patient management",
//     description: "An integrated healthcare management system designed to improve patient care and streamline administrative tasks. Includes appointment scheduling, patient records, billing, and reporting features.",
//     stack: ["React", "TypeScript", "Firebase", "Tailwind CSS", "Chart.js"],
//     backgroundImage: "/images/p2.webp"
//   },
//   {
//     id: 3,
//     name: "Real Estate Platform",
//     desc: "Connecting property buyers, sellers, and agents efficiently",
//     description: "A feature-rich real estate platform that connects property buyers, sellers, and agents. Includes property listings, search functionality, virtual tours, and agent profiles.",
//     stack: ["Next.js", "PostgreSQL", "Prisma", "AWS", "Google Maps API"],
//     backgroundImage: "/images/p3.webp"
//   },
//   {
//     id: 4,
//     name: "Financial Dashboard",
//     desc: "Visualizing financial data for informed decision-making",
//     description: "A comprehensive financial dashboard that provides real-time insights into financial performance. Features include data visualization, trend analysis, and customizable reports.",
//     stack: ["Vue.js", "D3.js", "Node.js", "MySQL", "Redis"],
//     backgroundImage: "/images/p4.webp"
//   }
// ];







interface Project {
  id: number;
  name: string;
  desc: string;
  description: string;
  stack: string[];
  problem?: string;
  backgroundImage: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "AI Health Assistant",
    backgroundImage: "/images/p1.webp",
    desc: "AI-powered virtual health assistant for clinics.",
    problem:
      "Clinics face high volumes of repetitive patient queries and administrative tasks, leading to staff overload and slow response times.",
    description:
      "We built an AI-powered virtual assistant that automates patient queries, appointment scheduling, and follow-ups. This solution reduced staff workload, improved response times, and enhanced patient satisfaction by streamlining clinic operations.",
    stack: ["React", "Next.js", "FastAPI", "PostgreSQL", "TailwindCSS"],
  },
  {
    id: 2,
    name: "E-Commerce Dashboard",
    backgroundImage: "/images/p2.webp",
    desc: "Analytics dashboard for online stores.",
    problem:
      "Store owners struggle to gain real-time insights into sales, inventory, and customer behavior, making it hard to make data-driven decisions.",
    description:
      "We developed a real-time dashboard that aggregates sales, inventory, and customer data, giving store owners actionable insights. This enabled data-driven decisions, improved inventory management, and boosted overall business performance.",
    stack: ["React", "Redux", "Node.js", "MongoDB", "Chart.js"],
  },
  {
    id: 3,
    name: "Remote Team Workspace",
    backgroundImage: "/images/p3.webp",
    desc: "Collaboration platform for distributed teams.",
    problem:
      "Distributed teams lack a unified platform for communication, file sharing, and task management, leading to inefficiencies and miscommunication.",
    description:
      "We created a unified platform for remote teams to chat, share files, and manage tasks in real time. This streamlined communication, reduced miscommunication, and increased productivity for distributed teams.",
    stack: ["Next.js", "Firebase", "TypeScript", "TailwindCSS"],
  },
  {
    id: 4,
    name: "Smart Home IoT Hub",
    backgroundImage: "/images/p4.webp",
    desc: "Centralized control for smart home devices.",
    problem:
      "Smart home users often juggle multiple apps and interfaces, making it difficult to manage and automate devices efficiently.",
    description:
      "We built a centralized web app that lets users monitor and control all their smart home devices from one place, with automation and energy analytics. This simplified device management and improved the smart home experience.",
    stack: ["React", "Node.js", "GraphQL", "AWS", "IoT Core"],
  },
];
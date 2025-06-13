
interface ProcessStep {
  number: number;
  title: string;
  video?: string; // Optional property for video URL
  poster?: string; // Optional property for image URL
  description: string;
}

export const processSteps: ProcessStep[] = [
    {
      number: 1,
      title: "Research & Planing",
      video: "/videos/pr.webm",
      poster: "/poster/pr.webp",
      description: "We start by understanding your business goals, target audience, and project requirements. This helps us create a tailored strategy that aligns with your vision.",
    },
    {
      number: 2,
      title: "Design & Prototyping",
      video: "/videos/des.webm",
      poster: "/poster/des.webp",
      description: "Our design team creates wireframes and prototypes to visualize the user experience. We focus on creating intuitive interfaces that engage users and drive conversions.",
    },
    {
      number: 3,
      title: "Development & Implementation",
      video: "/videos/dev.webm",
      poster: "poster/dev.webp",
      description: "Our developers bring the designs to life using the latest technologies. We ensure that the final product is not only visually appealing but also functional and efficient.",
    },
    {
      number: 4,
      title: "Testing & Iteration",
      video: "/videos/testing.webm",
      poster: "poster/tes.webp",
      description: "We conduct thorough testing to identify and fix any issues before launch. This includes usability testing, performance testing, and quality assurance.",
    },
    {
      number: 5,
      title: "Quality Assurance & Delivery",
      video: "/videos/dep.webm",
      poster: "poster/dep.webp",
      description: "Once everything is in place, we launch your project and monitor its performance. We provide ongoing support to ensure everything runs smoothly.",
    },
  ]

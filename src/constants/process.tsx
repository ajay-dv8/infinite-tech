
interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
    {
      number: 1,
      title: "Research & Discovery",
      description: "We start by understanding your business goals, target audience, and project requirements. This helps us create a tailored strategy that aligns with your vision.",
    },
    {
      number: 2,
      title: "Design",
      description: "Our design team creates wireframes and prototypes to visualize the user experience. We focus on creating intuitive interfaces that engage users and drive conversions.",
    },
    {
      number: 3,
      title: "Development",
      description: "Our developers bring the designs to life using the latest technologies. We ensure that the final product is not only visually appealing but also functional and efficient.",
    },
    {
      number: 4,
      title: "Testing",
      description: "We conduct thorough testing to identify and fix any issues before launch. This includes usability testing, performance testing, and quality assurance.",
    },
    {
      number: 5,
      title: "Launch",
      description: "Once everything is in place, we launch your project and monitor its performance. We provide ongoing support to ensure everything runs smoothly.",
    },
  ]

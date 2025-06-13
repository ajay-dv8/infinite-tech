import { MonitorCheckIcon } from "../../public/icons/monitor";
import { CartIcon } from "../../public/icons/cart";
import { PenToolIcon } from "../../public/icons/pen";
import { SparklesIcon } from "../../public/icons/sparkles";
import { LayersIcon } from "../../public/icons/layers";
import { ChartPieIcon } from "../../public/icons/pie-chart";
import { GripIcon } from "../../public/icons/grip";
import { VibrateIcon } from "../../public/icons/mobile";
import { StethoscopeIcon } from "../../public/icons/stethoscope";
import { HandCoinsIcon } from "../../public/icons/handcoin";
import { ChartLineIcon } from "../../public/icons/line-chart";
import { HomeIcon } from "../../public/icons/home";
import { WorkflowIcon } from "../../public/icons/workflow";
import { infiniteScrollTypes } from "@/lib/types";

// THIS HAS ITEMS FOR SERVICES AND INDUSTRY



export const services: infiniteScrollTypes[] = [
  {
    title: "Web Development",
    icon: <MonitorCheckIcon size={70}/>,
    description: "Custom web solutions built with cutting-edge technologies for optimal performance and scalability.",
  },
  
  {
    title: "eCommerce Solutions",
    icon: <CartIcon size={70}/>,
    description: "Powerful online stores with seamless checkout experiences and robust inventory management.",
  },

  {
    title: "UI/UX Design",
    icon: <PenToolIcon size={70}/>,
    description: "User-centered designs that combine aesthetics with intuitive functionality for maximum engagement.",
  },

  {
    title: "Website Redesign",
    icon: <SparklesIcon size={70}/>,
    description: "Transform your existing website with modern design principles and enhanced user experience.",
  },

  {
    title: "Mobile Apps",
    icon: <VibrateIcon size={70}/>,
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
  },

  // {
  //   title: "SaaS Development",
  //   icon: <LayersIcon size={70}/>,
  //   description: "Cloud-based software solutions that scale with your business needs and customer demands.",
  // },

  {
    title: "ERP Solutions",
    icon: <ChartPieIcon size={70}/>,
    description: "Turn your data into actionable insights with advanced analytics and visualization tools.",
  },

  // {
  //   title: "API Integration",
  //   icon: <GripIcon size={70}/>,
  //   description: "Seamless integration services to connect your systems and streamline business processes.",
  // },

  // {
  //   title: "Healthcare Solutions",
  //   icon: <StethoscopeIcon size={70}/>,
  //   description: "Specialized software solutions for healthcare providers, ensuring compliance and efficiency.",
  // },

  {
    title: "Fintech Solutions",
    icon: <HandCoinsIcon size={70}/>,
    description: "Secure and innovative financial technology solutions for modern banking and payments.",
  },

  {
    title: "Business Intelligence",
    icon: <ChartLineIcon size={70}/>,
    description: "Data-driven insights and reporting tools to optimize your business decisions.",
  },

  // {
  //   title: "Real Estate Tech",
  //   icon: <HomeIcon size={70}/>,
  //   description: "Digital solutions for property management, listings, and real estate operations.",
  // },

  // {
  //   title: "Workflow Automation",
  //   icon: <WorkflowIcon size={70}/>,
  //   description: "Automate repetitive tasks and optimize business processes for increased productivity.",
  // },
]



// industries
export const industries: infiniteScrollTypes[] = [
  {
    title: "Healthcare",
    icon: <StethoscopeIcon size={40}/>,
    description: "We build fast, scalable, and responsive web applicationWe design custom healthcare software that enhances patient care and optimizes healthcare workflows. From EHR systems to telemedicine platforms, we help providers improve efficiency and stay compliant, all while supporting better patient outcomes."
  },
  {
    title: "Hospitality",
    icon: <StethoscopeIcon size={40}/>,
    description: "We build fast, scalable, and responsive web applicationWe design custom healthcare software that enhances patient care and optimizes healthcare workflows. From EHR systems to telemedicine platforms, we help providers improve efficiency and stay compliant, all while supporting better patient outcomes."
  },
  {
    title: "Fintech",
    icon: <LayersIcon size={40}/>,
    description: "We develop secure, scalable fintech solutions for digital banking, payments, and financial services. Our platforms help businesses navigate complex regulatory landscapes and deliver seamless, reliable user experiences in an ever-evolving market.",
  },
  {
    title: "eCommerce",
    icon: <HandCoinsIcon size={40}/>,
    description: "We create retail and wholesale solutions that connect online and in-store experiences. From inventory management to e-commerce platforms, our software helps businesses increase sales, streamline operations, and foster customer loyalty.",
  },
  {
    title: "Manufacturing",
    icon: <WorkflowIcon size={40}/>,
    description: "Our manufacturing software streamlines operations by automating production and optimizing supply chains. We deliver real-time insights that help businesses make data-driven decisions, improve efficiency, and reduce operational costs. ",
  },
  {
    title: "Real Estate",
    icon: <HomeIcon size={40}/>,
    description: "We deliver real estate software that simplifies property management and lead generation. Our solutions help real estate businesses manage portfolios, communicate with clients, and grow their operations with ease.",
  },
  {
    title: "Logistics",
    icon: <ChartLineIcon size={40}/>,
    description: "We develop logistics software that enhances route optimization, fleet management, and shipment tracking. Our solutions help businesses reduce costs, improve delivery accuracy, and scale operations with greater control and efficiency.",
  },
  {
    title: "others",
    icon: <GripIcon size={40}/>,
    description: "",
  },
  {
    title: "custom Brands",
    icon: <LayersIcon size={50}/>,
    description: "We build fast, scalable, and responsive web applications.",
  },
]


export const moreIndustries: infiniteScrollTypes[] = [
  {
    title: "custom Brands",
    icon: <LayersIcon size={20}/>,
    description: "We build fast, scalable, and responsive web applications.",
  },
  // {
  //   title: "Insurance",
  //   icon: <UserRoundCheckIcon size={20}/>,
  //   description: "We create custom insurance software that simplifies insurance processes. From automated claims to policy management, our solutions reduce administrative costs and improve service quality, allowing companies to scale and meet customer demands with ease.",
  // },
  
  // {
  //   title: "Construction",
  //   icon: <LayoutPanelTopIcon size={20}/>,
  //   description: "We build construction software that helps companies manage projects, allocate resources, and ensure safety on-site. Our tools improve project timelines, reduce costs, and help teams stay on track from start to finish.",
  // },
]
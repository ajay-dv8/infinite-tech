
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
    description: "We build fast, scalable, and responsive web applications.",
  },
  
  {
    title: "eCommerce Solutions",
    icon: <CartIcon size={70}/>,
    description: "We build fast, scalable, and responsive web applications.",
  },

  {
    title: "UI/UX Design",
    icon: <PenToolIcon size={70}/>,
    description: "We build fast, scalable, and responsive web applications.",
  },

  {
    title: "Website Redesign",
    icon: <SparklesIcon size={70}/>,
    description: "We build fast, scalable, and responsive web applications.",
  },

  {
    title: "Mobile Apps",
    icon: <VibrateIcon size={70}/>,
    description: "We build fast, scalable, and responsive web applications.",
  },

  {
    title: "Custom Software Solutions",
    icon: <GripIcon size={70}/>,
    description: "We build fast, scalable, and responsive web applications.",
  },
  
  {
    title: "Enterprise Software Solutions",
    icon: <ChartPieIcon size={70}/>,
    description: "We build fast, scalable, and responsive web applications.",
  },
  
  {
    title: "Graphic Design",
    icon: <LayersIcon size={70}/>,
    description: "We build fast, scalable, and responsive web applications.",
  },
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
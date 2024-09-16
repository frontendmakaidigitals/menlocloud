"use client";
import Footer_01 from "@/components/footer/Footer_01";
import Header_01 from "@/components/header/Header_01";
import SwiperNavButtons from "@/components/SwiperNavButton";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const data = [
  {
    img: "https://s7d9.scene7.com/is/image/slalom/insight-globalbas-turtle-finserv-thumb-520x490?fmt=webp-alpha",
    title: "2024 industry outlook: Financial services",
    hoverColor: "#F48FB1",
  },
  {
    img: "https://s7d9.scene7.com/is/image/slalom/insight-globalbas-turtle-finserv-thumb-520x490?fmt=webp-alpha",
    title: "2024 industry outlook: Financial services",
    hoverColor: "#90CAF9",
  },
  {
    img: "https://s7d9.scene7.com/is/image/slalom/insight-globalbas-turtle-finserv-thumb-520x490?fmt=webp-alpha",
    title: "2024 industry outlook: Financial services",
    hoverColor: "#B39DDB",
  },
  {
    img: "https://s7d9.scene7.com/is/image/slalom/insight-globalbas-turtle-finserv-thumb-520x490?fmt=webp-alpha",
    title: "2024 industry outlook: Financial services",
    hoverColor: "#80CBC4",
  },
  {
    img: "https://s7d9.scene7.com/is/image/slalom/insight-globalbas-turtle-finserv-thumb-520x490?fmt=webp-alpha",
    title: "2024 industry outlook: Financial services",
    hoverColor: "#E6EE9C",
  },
  {
    img: "https://s7d9.scene7.com/is/image/slalom/insight-globalbas-turtle-finserv-thumb-520x490?fmt=webp-alpha",
    title: "2024 industry outlook: Financial services",
    hoverColor: "#FFF59D",
  },
  {
    img: "https://s7d9.scene7.com/is/image/slalom/insight-globalbas-turtle-finserv-thumb-520x490?fmt=webp-alpha",
    title: "2024 industry outlook: Financial services",
    hoverColor: "#FFAB91",
  },
];

const tabs = [
  {
    name: "Data & Analytics",
    data: "Formulate the best data strategy and seamlessly deploy data solutions and technologies with MenloCloud expert guidance. Unlock the full potential of your data assets and drive informed decision-making. We offer a comprehensive range of services, from data collection and integration to advanced analytics and insights generation",
    points: [
      "Predictive Insights",
      "Data Visualization",
      "Business Intelligence",
      "Analytical Reporting",
      "Data Strategy",
    ],
  },
  {
    name: "Artificial Intelligence",
    data: "Assisting you in leveraging AI to automate repetitive functions, push beyond traditional limitations, and transform user experiences in an ethical manner. Our expertise includes machine learning, natural language processing, computer vision, and robotic process automation. We start by understanding your unique business challenges and objectives, then design and implement AI solutions tailored to your needs.",
    points: [
      "Natural Language Processing",
      "Predictive Analytics",
      "Deep Learning",
      "Robotic Process Automation",
      "Smart Algorithms",
    ],
  },
  {
    name: "Applied AI ",
    data: "Deploy conventional and generative AI to optimize existing processes, explore innovative solutions, and redefine user experiences responsibly. We combine Conventional and Generative AI and provide a holistic approach to solving complex challenges and unlocking new opportunities in the AI landscape. ",
    points: [
      "Conventional Models",
      "Generative Adversarial Networks",
      "Data Synthesis",
      "Pattern Recognition",
      "Algorithm Development",
    ],
  },
  {
    name: "Software Engineering",
    data: "With our advanced software development efficiency, solve intricate technical problems, and create impactful, reliable software solutions. We provide custom applications, integration of third-party systems, and enhancement of existing software. We focus on delivering solutions that are user-friendly, secure, and optimized for performance. From web and mobile applications to enterprise software and cloud-based solutions, we provide expertise in a wide range of technologies and platforms.",
    points: [
      "System Design",
      "Code Development",
      "Quality Assurance",
      "Version Control",
      "User Experience",
      "Debugging Processes",
    ],
  },
  {
    name: "Cloud Modernisation",
    data: "With cloud modernization, transform your existing infrastructure into a robust, scalable, and agile environment. Our approach involves assessing your current systems, developing a strategic cloud migration plan, streamline operations, reduce costs and implementing cutting-edge cloud solutions that enhance performance and efficiency. ",
    points: [
      "Cloud Migration",
      "Hybrid Cloud",
      "Containerization Technologies",
      "Serverless Computing",
      "Automated Provisioning",
    ],
  },
  {
    name: "Systems Implementation",
    data: "Our systems implementation services include the configuration and customization of software, migration of data, and integration with other systems. We apply industry best practices to ensure that the implementation is executed flawlessly, with attention to detail in every aspect of the process. This includes rigorous testing to validate functionality, performance, and security before the system goes live.",
    points: [
      "Deployment Planning",
      "User Training",
      "Operational Testing",
      "Technical Support",
      "System Customization",
    ],
  },
  {
    name: "Strategy",
    data: "Our strategic approach encompasses various areas, including business transformation, market entry, digital strategy, and organizational development. We design tailored strategies that leverage your strengths, address weaknesses, and capitalize on emerging trends. Our goal is to create a strategic roadmap that not only guides your immediate actions but also positions you for long-term success and adaptability.",
    points: [
      "Strategic Planning",
      "Market Analysis",
      "Competitive Positioning",
      "Long-Term Vision",
      "Strategic Alignment",
      "Risk Management",
      "Tactical Execution",
    ],
  },
  {
    name: "Privacy & Security",
    data: "We also focus on privacy management, Safeguarding information with cutting-edge privacy and security practices, establishing data governance frameworks, conducting privacy impact assessments, and ensuring transparent data collection and usage practices. A proactive approach to privacy and security that protects your organization and supports your business objectives.",
    points: [
      "Data Protection",
      "Cybersecurity Measures",
      "Access Control",
      "Encryption Protocols",
      "Security Audits",
      "Threat Detection",
      "Compliance Standards",
    ],
  },
  {
    name: "Organizational Change",
    data: "Enhancing company approach with top level cultural & hierarchy transformation, We provide comprehensive support for implementing change initiatives, including process redesign, technology adoption, and cultural transformation. Our team assists with designing and executing effective training programs to equip your employees with the skills and knowledge needed to adapt to new systems and processes.",
    points: [
      "Change Management",
      "Transformation Strategy",
      "Process Improvement",
      "Adaptation Strategies",
      "Implementation Planning",
    ],
  },
];
function Services() {
  const [mobileTabs, setMobileTabs] = useState(false);
  const [tabSelected, setTabSelected] = useState(0);

  const swiperRef = useRef(null);
  return (
    <>
      <Header_01 />
      <main className="main-wrapper relative overflow-hidden">
        <div className="w-full mb-20  h-[85vh] xl:h-screen bg-no-repeat bg-center bg-cover bg-[url('https://images.pexels.com/photos/3991976/pexels-photo-3991976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
          <div className="bg-gradient-to-b w-full h-full bg-gray-950/20">
            <div className="global-container flex flex-col justify-around  w-full h-full">
              <div></div>
              <div></div>
              <div className="mt-32 xl:mt-0">
                <h1 className="font-dmSans text-start font-bold text-gray-50">
                  <span className="text-sky-500">Passionate</span> <br /> and{" "}
                  <br /> Sustainable
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Service Section */}
      </main>
      <Footer_01 />
    </>
  );
}

export default Services;

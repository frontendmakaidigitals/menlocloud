"use client";
import { cn } from "@/lib/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState, useEffect } from "react";
import Header_01 from "@/components/header/Header_01";
import Footer_01 from "@/components/footer/Footer_01";
import "/styles/globals.css";
import { AnimatePresence, color, motion } from "framer-motion";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Link from "next/link";
const benefits = [
  {
    name: "Enhanced scalability",
    icon: "https://cdn3d.iconscout.com/3d/premium/thumb/data-filtering-3d-icon-download-in-png-blend-fbx-gltf-file-formats--analytics-logo-seo-big-science-pack-network-communication-icons-7915324.png",
    color: "#FFCDD2",
    description:
      "Easily scale your resources up or down to meet changing demands.",
  },
  {
    name: "Reduced costs",
    icon: "https://cdn3d.iconscout.com/3d/premium/thumb/data-3d-icon-download-in-png-blend-fbx-gltf-file-formats--storage-document-network-programming-and-development-pack-design-icons-7232746.png?f=webp",
    color: "#FFECB3",
    description:
      " Optimize your IT infrastructure and reduce operational expenses.",
  },
  {
    name: "Improved agility",
    icon: "https://static.vecteezy.com/system/resources/previews/014/919/437/original/dashboard-3d-render-icon-png.png",
    color: "#F5F5F5",
    description: " Respond quickly to market changes and customer needs.",
  },
  {
    name: "Increased reliability",
    icon: "https://cdn3d.iconscout.com/3d/premium/thumb/cloud-ai-3d-icon-download-in-png-blend-fbx-gltf-file-formats--processor-network-chip-gear-machine-learning-pack-science-technology-icons-6622077.png?f=webp",
    color: "#D1C4E9",
    description:
      "Benefit from the reliability and security of cloud platforms.",
  },
];
const tabs = [
  {
    name: "Cloud Advisory Services",
    title: "Your Trusted Guide to Cloud Success",
    gradient: "bg-gradient-to-tr from-gray-300 via-yellow-500 to-amber-400",
    img: "/assets/img_placeholder/advisory-img.jpg",
    description:
      "Cloud advisory services provide expert guidance and strategic insights to help businesses navigate the complex landscape of cloud computing. Our team of seasoned professionals offers tailored advice to optimize your cloud adoption journey, ensuring maximum value and return on investment.",
    benefit: [
      {
        title: "Strategic Planning",
        description:
          " Develop a comprehensive cloud strategy aligned with your business objectives.",
      },
      {
        title: "Technology Selection",
        description:
          " Choose the right cloud platforms and services to meet your specific needs.",
      },
      {
        title: "Cost Optimization",
        description:
          "  Identify opportunities to reduce cloud costs and improve efficiency.",
      },
      {
        title: "Risk Management",
        description:
          " Assess and mitigate potential risks associated with cloud adoption.",
      },
      {
        title: "Governance and Compliance",
        description:
          "  Establish effective governance frameworks and ensure compliance with industry regulations.",
      },
    ],
    our: [
      {
        title: "Cloud Assessment",
        description:
          "  Evaluate your current IT environment and identify potential areas for improvement.",
      },
      {
        title: "Cloud Migration Planning",
        description:
          " Develop a detailed migration plan to minimize disruption and maximize benefits.",
      },
      {
        title: "Cloud Optimization",
        description:
          "  Optimize your cloud infrastructure for performance, cost-efficiency, and security.",
      },
      {
        title: "Cloud Governance",
        description:
          " Establish effective policies and procedures to manage your cloud environment. ",
      },
      {
        title: "Cloud Security and Compliance:",
        description:
          "Assess your security posture and ensure compliance with industry regulations.",
      },
    ],
    description2:
      "Ready to leverage the power of cloud computing? Contact our cloud advisory experts today to discuss your specific needs and learn how we can help you achieve your goals.",
  },
  {
    name: "Cloud Foundation Services",
    title: "The Building Blocks of Your Cloud Journey",
    gradient: "bg-gradient-to-br from-purple-200 via-indigo-400 to-violet-600",
    img: "/assets/img_placeholder/foundation.jpg",
    description:
      "Cloud foundation services provide the essential infrastructure and platform components that form the bedrock of your cloud environment. These services are crucial for establishing a solid foundation for your cloud initiatives and ensuring a successful transition to the cloud.",
    benefit: [
      {
        title: "Reliable Infrastructure",
        description:
          " Benefit from a robust and scalable cloud infrastructure that can handle your growing workloads.",
      },
      {
        title: "Platform Flexibility:",
        description:
          " Choose the right cloud platforms and services to meet your specific needs.",
      },
      {
        title: "Enhanced Security",
        description:
          " Protect your data and applications with state-of-the-art security measures.",
      },
      {
        title: "Cost Optimization",
        description:
          " Optimize resource utilization and reduce costs through efficient infrastructure management.",
      },
      {
        title: "Scalability and Flexibility",
        description:
          " Easily scale your resources up or down to meet changing demands.",
      },
    ],
    our: [
      {
        title: "Infrastructure as a Service (IaaS)",
        description:
          " Provision virtual servers, storage, and networking resources on demand.",
      },
      {
        title: "Platform as a Service (PaaS)",
        description:
          "  Develop and deploy applications on a pre-configured platform.",
      },
      {
        title: "Database as a Service (DBaaS)",
        description:
          "  Manage databases efficiently and securely in the cloud.",
      },
      {
        title: "Container Orchestration",
        description: " Deploy and manage containerized applications at scale",
      },
      {
        title: "Network Services",
        description:
          " Establish secure and reliable network connections for your cloud environment.",
      },
    ],
    description2:
      "Ready to build a strong foundation for your cloud journey? Contact our cloud foundation experts today to discuss your specific needs and learn how we can help you achieve your goals.",
  },
  {
    name: "Cloud Migration Services",
    title: "Accelerate Your Digital Transformation",
    gradient: "bg-gradient-to-tr from-red-200 via-rose-400 to-pink-600",
    img: "/assets/img_placeholder/migration.jpg",
    description:
      "Cloud migration is the process of transferring data, applications, and infrastructure from a traditional on-premises environment to a cloud-based platform. This transition offers numerous benefits for businesses, including increased scalability, improved flexibility, reduced costs, and enhanced security.",
    benefit: [
      {
        title: "Scalability",
        description:
          "  Easily scale your resources up or down to meet fluctuating demand, ensuring optimal performance and cost-efficiency.",
      },
      {
        title: "Flexibility",
        description:
          " Adapt to changing business needs and market conditions with agility.",
      },
      {
        title: "Reduced Costs",
        description:
          "Optimize your IT infrastructure and reduce operational expenses.",
      },
      {
        title: "Enhanced Security",
        description:
          " Benefit from the robust security measures provided by cloud providers.",
      },
    ],
    our: [
      {
        title: "Assessment",
        description:
          " Evaluate your current IT environment and identify potential challenges.",
      },
      {
        title: "Planning",
        description:
          "  : Develop a tailored migration strategy, outlining timelines and resources.",
      },
      {
        title: "Migration",
        description:
          " Transfer data, applications, and infrastructure to the cloud.",
      },
      {
        title: "Testing",
        description: "Rigorously test to ensure seamless functionality",
      },
      {
        title: "Optimization",
        description:
          "  Fine-tune your cloud environment for optimal performance.",
      },
    ],
    description2:
      "Ready to embark on your cloud journey? Contact our experts today to discuss your specific needs and learn how cloud migration can transform your business.",
  },
  {
    name: "Cloud Modernization Services",
    title: "Elevate Your Digital Transformation",
    gradient: "bg-gradient-to-br from-lime-200 via-green-400 to-emerald-600",
    img: "https://virtualization.network/Images/News/d997ec3f-1dea-4362-b641-fd6233cd964f_VMware-Delivers-the-Next-Wave.jpg",
    description:
      "Cloud modernization is the process of optimizing existing applications and infrastructure to fully leverage the benefits of cloud computing. By modernizing your IT environment, you can improve performance, enhance scalability, reduce costs, and drive innovation.",

    benefit: [
      {
        title: "Improved Performance",
        description:
          " Evaluate your current IT environment and identify potential challenges.",
      },
      {
        title: "Enhanced Scalability",
        description:
          "Develop a tailored migration strategy, outlining timelines and resources.",
      },
      {
        title: "Reduced Costs",
        description:
          " Transfer data, applications, and infrastructure to the cloud.",
      },
      {
        title: "Increased Innovation",
        description:
          "Accelerate development cycles and bring new products and services to market faster.",
      },
    ],
    our: [
      {
        title: "Application Modernization",
        description:
          " Refactor legacy applications to improve performance, scalability, and maintainability in the cloud.",
      },
      {
        title: "Infrastructure Optimization",
        description:
          "Optimize your cloud infrastructure for maximum efficiency and cost-effectiveness.",
      },
      {
        title: "Data Migration",
        description: " Migrate data to the cloud seamlessly and securely.",
      },
      {
        title: "DevOps Transformation",
        description:
          "Adopt DevOps practices to streamline development, testing, and deployment processes.",
      },
      {
        title: "Containerization",
        description:
          " Utilize containers to package applications and their dependencies, enabling portability and scalability.",
      },
    ],
    description2:
      "eady to unlock the full potential of your cloud environment? Contact our experts today to discuss your specific needs and learn how cloud modernization can transform your business.",
  },
  {
    name: "Cloud Infrastructure Services",
    title: "The Foundation of Your Digital Transformation",
    gradient: "bg-gradient-to-r from-yellow-200 via-lime-400 to-green-600",
    img: "/assets/img_placeholder/infra.jpg",
    description:
      "Cloud infrastructure services provide the essential building blocks for your cloud environment, enabling you to deploy and manage applications and data in a scalable, flexible, and secure manner. These services form the foundation of your digital transformation, empowering you to innovate, improve efficiency, and drive business growth.",

    benefit: [
      {
        title: "Scalability",
        description:
          "Easily scale your resources up or down to meet changing demands, ensuring optimal performance and cost-efficiency.",
      },
      {
        title: "Flexibility",
        description:
          "Choose from a wide range of infrastructure options to meet your specific needs and preferences.",
      },
      {
        title: "Reliability",
        description:
          "Benefit from the reliability and redundancy of cloud infrastructure, minimizing downtime and disruptions.",
      },
      {
        title: "Security",
        description:
          "Protect your data and applications with advanced security measures provided by cloud providers.",
      },
      {
        title: "Cost-Efficiency",
        description:
          "Optimize resource utilization and reduce IT infrastructure costs through pay-as-you-go pricing models.",
      },
    ],
    our: [
      {
        title: "Compute",
        description:
          " Provision virtual servers (VMs) and other compute resources to run your applications.",
      },
      {
        title: "Storage",
        description:
          "Store data securely and reliably in various storage options, including object storage, block storage, and file storage.",
      },
      {
        title: "Networking",
        description:
          "Establish secure and reliable network connections between your cloud resources and on-premises environments.",
      },
      {
        title: "Database",
        description:
          "Manage databases efficiently and securely in the cloud, using options like relational databases, NoSQL databases, and data warehouses.",
      },
      {
        title: "Container Orchestration",
        description:
          " Deploy and manage containerized applications at scale using tools like Kubernetes.",
      },
    ],
    description2:
      "Ready to build a robust and scalable cloud infrastructure? Contact our cloud infrastructure experts today to discuss your specific needs and learn how we can help you achieve your goals.",
  },
];
function Home() {
  const swiperRef = useRef(null);
  const [tabSelected, setTabSelected] = useState(0);
  const [mobileTabs, setMobileTabs] = useState(false);
  return (
    <div className="page-wrapper relative z-[1] bg-white">
      <Header_01 />

      <main className="main-wrapper relative ">
        {/*...::: Hero Section Start :::... */}

        <section
          id="section-hero"
          className="h-[75vh] relative xl:h-screen overflow-hidden  py-24 bg-center bg-no-repeat bg-cover bg-[url('/assets/img_placeholder/cloud-bg.jpg')] "
        >
          <div className="absolute min-w-[1200px] overflow-hidden w-full h-full "></div>
          <div className="w-full h-full bg-gradient-to-b from-gray-900/40 to-gray-900/10 absolute top-0 left-0" />
          <div className="global-container overflow-hidden relative z-5 w-full h-full flex flex-col justify-end items-start">
            <div className=" w-full lg:w-2/3">
              <p className="text-gray-50 font-Satoshi font-bold py-5 text-2xl  lg:text-5xl xxl:text-6xl">
                Accelerate Your Digital Journey with Cloud Transformation
              </p>
              <p className="text-gray-100 text-xl">
                Leverage cutting-edge cloud technology to drive innovation and
                efficiency.
              </p>
            </div>
          </div>
        </section>
        <section className="my-10 py-24 bg-center bg-cover bg-no-repeat  ">
          <div className="">
            <p className="global-container mb-2 text-3xl lg:text-5xl tracking-tight font-Satoshi font-bold w-full lg:w-2/3 text-center">
              Importance of
              <span className="bg-gradient-to-r font-Telma px-1 from-blue-600 to-indigo-400 bg-clip-text text-transparent">
                {" "}
                Cloud Transformation
              </span>{" "}
              in Today’s Digital Landscape
            </p>
          </div>

          <div className="w-full mt-10 global-container grid grid-cols-1 lg:grid-cols-4 gap-5">
            {benefits.map((elem, index) => (
              <motion.div
                key={index}
                className={`w-full bg-gray-100 relative p-7 rounded-lg overflow-hidden`}
                initial={{ opacity: 0, y: 20 }} // Starting state
                animate={{ opacity: 1, y: 0 }} // End state
                transition={{ duration: 0.5, delay: index * 0.1 }} // Transition timing
              >
                <p className="text-xl relative z-10 text-center lg:text-2xl font-Satoshi font-[600] ">
                  {elem.name}
                </p>
                <p className=" text-md font-Satoshi relative z-10 text-center lg:text-lg">
                  {elem.description}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="mt-16 ">
            <p className=" mb-2 global-container text-lg lg:text-xl tracking-tight font-Satoshi font-bold w-full lg:w-2/3 text-center">
              At MenloCloud, we specialize in helping businesses of all sizes
              achieve their cloud transformation goals. Our team of experts has
              the knowledge and experience to guide you through every step of
              the process, from migration to optimization.
            </p>
            <div className="mt-5  w-full flex justify-center ">
              <button className="text-gray-900 overflow-hidden group rounded-lg relative font-Satoshi font-semibold py-2 px-5 bg-gray-200">
                <p className="relative z-10">Schedule a consultation</p>
                <div className="bg-sky-500 w-1 h-1 group-hover:scale-[70] absolute -bottom-1 left-1/2 -translate-1/2 rounded-full transition-all duration-300" />
              </button>
            </div>
          </div>
        </section>
        <div className={`${tabs[tabSelected].gradient} py-16`}>
          <div className="mb-10">
            <p className="global-container mb-2 text-3xl lg:text-5xl tracking-tight font-Satoshi font-bold w-full lg:w-2/3 text-center">
              Unlocking the Power of
              <span className="bg-gradient-to-r font-Telma px-1 from-blue-600 to-indigo-400 bg-clip-text text-transparent">
                {" "}
                Cloud
              </span>{" "}
            </p>
          </div>
          <div
            className={`bg-sky-400 block  lg:hidden px-4 py-3 transition-all duration-200   w-full `}
          >
            <p
              onClick={() => setMobileTabs(!mobileTabs)}
              className="flex w-full px-5 capitalize items-center gap-1 font-[700] font-Satoshi"
            >
              {tabs[tabSelected].name}
              <span>
                <MdOutlineKeyboardArrowDown
                  className={`text-2xl ${
                    mobileTabs ? "rotate-180" : "rotate-0"
                  }`}
                />
              </span>
            </p>
            <div
              className={`transition-all duration-300 ${
                mobileTabs ? "max-h-[100vh] py-4 " : "max-h-0"
              }  bg-sky-400 `}
            >
              {mobileTabs
                ? tabs.map((service, index) => {
                    if (tabSelected !== index) {
                      return (
                        <p
                          key={index}
                          onClick={() => {
                            setTabSelected(index);
                            setMobileTabs(false);
                          }}
                          className={`mt-5 px-5 text-[1rem] xxl:text-[.8vw] hover:underline cursor-pointer font-Satoshi uppercase font-[500]`}
                        >
                          {service.name}
                        </p>
                      );
                    }
                  })
                : null}
            </div>
          </div>
          <div className="relative hidden mt-5 lg:flex flex-row gap-5 justify-center items-center global-container">
            {tabs.map((tab, index) => (
              <div className="!w-auto" key={index}>
                <p
                  onClick={() => setTabSelected(index)}
                  className={` ${
                    tabSelected == index
                      ? "bg-gray-900 text-gray-100"
                      : "bg-gray-100 hover:bg-blue-100 text-gray-900"
                  } xl:text-sm xxl:text-[1rem] px-4 py-2 rounded-full cursor-pointer`}
                >
                  {tab.name}
                </p>
              </div>
            ))}
          </div>
          <div className="global-container mt-10 xl:mt-20 grid grid-cols-1 px-0 xl:px-14 gap-8">
            <div>
              <p className="text-lg text-start xl:text-2xl xxl:text-3xl font-Satoshi font-[600]">
                {tabs[tabSelected].name}
                {" :"}
                <span className="font-medium"> {tabs[tabSelected].title}</span>
              </p>
              <p className="text-md xl:text-sm xxl:text-lg font-Satoshi mt-4">
                {tabs[tabSelected].description}
              </p>

              <div className="grid grid-cols-1 mt-12 lg:grid-cols-2 gap-x-5 gap-y-10 place-items-center">
                <div className="border-b lg:border-b-0 lg:border-r border-dashed border-gray-900 py-10">
                  <p className="font-Satoshi font-bold text-lg xl:text-xl xxl:text-2xl mt-5">
                    Key Benefits of {tabs[tabSelected].name}
                  </p>
                  <ul className="list-disc px-5 mt-2 w-full">
                    {tabs[tabSelected].benefit.map((point, index) => (
                      <li
                        key={index}
                        className="text-md mt-1 xl:text-sm font-Satoshi font-bold xxl:text-lg"
                      >
                        {point.title} :{" "}
                        <span className="font-medium">{point.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-Satoshi font-bold text-lg xl:text-xl xxl:text-2xl mt-5">
                    Our {tabs[tabSelected].name} Include:
                  </p>
                  <ul className="list-disc px-5 mt-2 w-full">
                    {tabs[tabSelected].our.map((point, index) => (
                      <li
                        key={index}
                        className="text-md mt-1 xl:text-sm font-Satoshi font-bold xxl:text-lg"
                      >
                        {point.title} :{" "}
                        <span className="font-medium">{point.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className=" global-container">
            <div
              style={{
                backgroundImage: `url('${tabs[tabSelected].img}')`,
              }}
              className="w-full mt-14 relative h-[400px] lg:h-[600px] rounded-xl shadow-xl border border-gray-300 bg-no-repeat bg-green-300 bg-center bg-cover"
            ></div>
          </div>
          <p className="global-container font-Satoshi text-lg font-medium mt-16 text-center">
            {tabs[tabSelected].description2}
          </p>

          <div className="mt-5  w-full flex justify-center ">
            <button className="text-gray-50 overflow-hidden group rounded-lg relative font-Satoshi font-semibold py-2 px-5 bg-gray-900">
              <p className="relative z-10">Lets Connect</p>
              <div className="bg-sky-500 w-1 h-1 group-hover:scale-[50] absolute -bottom-1 left-1/2 -translate-1/2 rounded-full transition-all duration-300" />
            </button>
          </div>
        </div>

        <section className="my-10 py-20 bg-center bg-cover bg-no-repeat rounded-2xl global-container bg-black">
          <div className="">
            <p className="global-container mb-2 text-3xl text-gray-100 lg:text-5xl tracking-tight font-Satoshi font-bold w-full lg:w-2/3 text-center">
              Schedule a consultation to assess your{" "}
              <span className="bg-gradient-to-r font-Telma px-1 from-blue-600 to-indigo-400 bg-clip-text text-transparent">
                {" "}
                Data challenges.
              </span>{" "}
            </p>
            <p className="global-container text-center w-full lg:w-2/3 font-Satoshi text-md text-gray-200">
              Learn how we can tailor our data analytics solutions to unlock the
              potential of your business’s data.
            </p>
          </div>
          <div className="mt-5  w-full flex justify-center ">
            <button className="text-gray-900 overflow-hidden group rounded-lg relative font-Satoshi font-semibold py-2 px-5 bg-gray-200">
              <p className="relative z-10">Lets Connect</p>
              <div className="bg-sky-500 w-1 h-1 group-hover:scale-[50] absolute -bottom-1 left-1/2 -translate-1/2 rounded-full transition-all duration-300" />
            </button>
          </div>
        </section>
      </main>

      <Footer_01 />
    </div>
  );
}

export default Home;

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

          <div className="w-full mt-10 global-container grid grid-cols-4 gap-5">
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
        <div className="bg-[url('/assets/img_placeholder/bg.jpg')] bg-top bg-cover bg-no-repeat py-32">
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
                      : "bg-gray-300 text-gray-900"
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
                {tabs[tabSelected].name}{" :"}
                <span className="font-medium"> {tabs[tabSelected].title}</span>
              </p>
              <p className="text-md xl:text-sm xxl:text-lg font-Satoshi mt-4">
                {tabs[tabSelected].description}
              </p>

              <div className="grid grid-cols-1 mt-12 lg:grid-cols-2 gap-5 place-items-center">
                <div className="border-r border-dashed border-gray-900">
                  <p className="font-Satoshi  font-[500] text-lg xl:text-xl xxl:text-2xl mt-5">
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
                  <p className="font-Satoshi font-[500] text-lg xl:text-xl xxl:text-2xl mt-5">
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
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url('${tabs[tabSelected].img}')`,
            }}
            className="w-full mt-14 global-container relative min-h-[550px] rounded-xl shadow-xl border border-gray-300 bg-no-repeat bg-green-300 bg-center bg-cover"
          ></div>
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

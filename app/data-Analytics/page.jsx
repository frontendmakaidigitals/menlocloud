"use client";
import { cn } from "@/lib/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState, useEffect } from "react";
import Header_01 from "@/components/header/Header_01";
import Footer_01 from "@/components/footer/Footer_01";
import "/styles/globals.css";
import { AnimatePresence, color, motion } from "framer-motion";
import { GoArrowRight } from "react-icons/go";
import SwiperNavButtons from "@/components/SwiperNavButton";
import Link from "next/link";
const outcomes = [
  {
    name: " Enhanced Innovation",
    icon: "/assets/img_placeholder/outcome-1.png",
    color: "#FFCDD2",
    description: "Unlock new opportunities through advanced analytics and AI.",
  },
  {
    name: "Operational Efficiency",
    icon: "https://cdn3d.iconscout.com/3d/premium/thumb/business-productivity-3d-icon-download-in-png-blend-fbx-gltf-file-formats--efficiency-time-management-analytics-pack-icons-9820174.png?f=webp",
    color: "#FFECB3",
    description: " Streamline processes through automation and data insights.",
  },
  {
    name: "Predictive Power",
    icon: "https://cdn3d.iconscout.com/3d/premium/thumb/thunderbolt-3d-icon-download-in-png-blend-fbx-gltf-file-formats--lightning-thunder-weather-energy-power-essential-pack-user-interface-icons-8231196.png?f=webp",
    color: "#F5F5F5",
    description:
      " Leverage machine learning to anticipate business trends and customer needs.",
  },
  {
    name: "Informed Decision-Making",
    icon: "https://cdn3d.iconscout.com/3d/premium/thumb/right-decision-3d-icon-download-in-png-blend-fbx-gltf-file-formats--positive-making-solution-check-verify-planning-strategy-pack-business-icons-5059784.png?f=webp",
    color: "#D1C4E9",
    description: " Enable data-driven strategies for competitive advantage.",
  },
  {
    name: "Customer Personalization",
    icon: "https://cdn3d.iconscout.com/3d/premium/thumb/badge-3d-icon-download-in-png-blend-fbx-gltf-file-formats--recognition-badges-star-reward-and-pack-sports-games-icons-5431316.png",
    color: "#D1C4E9",
    description:
      "Improve customer experiences through real-time, data-backed insights.",
  },
];
const challenges = [
  {
    name: "Siloed Data Across Multiple Systems",
    icon: "/assets/img_placeholder/chall-1.png",
    color: "#FFCDD2",
    description:
      "Disconnected data sources limit holistic business insights, making it difficult to gain a unified understanding of performance.",
  },
  {
    name: "Manual and Inefficient Data Management",
    icon: "/assets/img_placeholder/chall-2.png",
    color: "#FFECB3",
    description:
      " Labor-intensive processes slow down data analysis, leading to delayed decisions and operational inefficiencies.",
  },
  {
    name: "Lack of Actionable, Data-Driven Insights",
    icon: "/assets/img_placeholder/chall-3.png",
    color: "#F5F5F5",
    description:
      " Without clear visibility into the data, leaders struggle to make timely, informed decisions that drive business growth.",
  },
  {
    name: "Difficulty Scaling with Growing Data Volumes",
    icon: "/assets/img_placeholder/chall-4.png",
    color: "#D1C4E9",
    description:
      " As data increases, manual processes and outdated systems fail to keep up, leading to bottlenecks and a need for scalable, automated solutions.",
  },
  {
    name: "Untapped Potential in AI and Machine Learning:",
    icon: "/assets/img_placeholder/chall-5.png",
    color: "#D1C4E9",
    description:
      "Many businesses are not leveraging advanced analytics, AI, or ML to forecast trends or optimize decision-making, leaving valuable insights and opportunities unexplored.",
  },
];

const benefits = [
  {
    name: "Data Ingestion",
    icon: "https://cdn3d.iconscout.com/3d/premium/thumb/data-filtering-3d-icon-download-in-png-blend-fbx-gltf-file-formats--analytics-logo-seo-big-science-pack-network-communication-icons-7915324.png",
    color: "#FFCDD2",
    description:
      "Seamlessly integrate data from multiple sources (databases, APIs, cloud).",
  },
  {
    name: "Data Pipelines for ML & Gen AI",
    icon: "https://cdn3d.iconscout.com/3d/premium/thumb/data-3d-icon-download-in-png-blend-fbx-gltf-file-formats--storage-document-network-programming-and-development-pack-design-icons-7232746.png?f=webp",
    color: "#FFECB3",
    description:
      " Build robust pipelines designed to handle AI workloads and machine learning models, ensuring data is clean, organized, and accessible.",
  },
  {
    name: "Custom Dashboards & Reports",
    icon: "https://static.vecteezy.com/system/resources/previews/014/919/437/original/dashboard-3d-render-icon-png.png",
    color: "#F5F5F5",
    description:
      " Deliver real-time, visually appealing dashboards to provide actionable insights for decision-making.",
  },
  {
    name: "Machine Learning and AI Integration",
    icon: "https://cdn3d.iconscout.com/3d/premium/thumb/cloud-ai-3d-icon-download-in-png-blend-fbx-gltf-file-formats--processor-network-chip-gear-machine-learning-pack-science-technology-icons-6622077.png?f=webp",
    color: "#D1C4E9",
    description:
      " Use predictive models and generative AI to unlock advanced analytics and forecasting capabilities",
  },
  {
    name: "Scalable Infrastructure",
    icon: "https://www.cloud.studio/wp-content/uploads/2022/08/Group-412-1.webp",
    color: "#D1C4E9",
    description:
      "Create cloud-optimized data pipelines that scale as your data grows, ensuring high performance and low cost.",
  },
];

const showcases = [
  {
    name: "Data Engineering & Analytics Expertise",
    color: "#29B6F6",
    description:
      "Our team consists of seasoned data engineers and data scientists who specialize in building scalable, automated data solutions.",
  },
  {
    name: "AI and ML Specialization",
    icon: "https://icons.iconarchive.com/icons/microsoft/fluentui-emoji-3d/512/Building-Construction-3d-icon.png",
    color: "#B388FF",
    description:
      " Ensure data accuracy, consistency, and reliability through comprehensive data validation processes, while continually refining methods to adapt to evolving data needs.",
  },
  {
    name: "Industry Experience",
    icon: "https://cdn3d.iconscout.com/3d/premium/thumb/finance-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--invoice-bill-receipt-online-money-service-pack-marketing-branding-illustrations-4159684.png?f=webp",
    color: "#FFFF00",
    description:
      " Implement machine learning models to turn historical data into predictive insights, helping you forecast trends and make data-driven decisions.",
  },
  {
    name: "Proven Track Record",
    icon: "https://static.vecteezy.com/system/resources/previews/047/398/260/original/cartoon-public-trolleybus-3d-icon-on-the-transparent-background-vehicles-for-transportation-concept-png.png",
    color: "#64FFDA",
    description:
      "Leverage Generative AI to unlock new levels of innovation by enabling your business to create, simulate, and automate processes based on data patterns and insights.",
  },
];

const data = [
  {
    title: "Robust Data Pipeline Design and Development",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Build scalable, automated pipelines that integrate data from multiple sources for seamless analysis.",
  },
  {
    title: "Comprehensive Data Quality Assurance",
    img: "https://cdni.iconscout.com/illustration/premium/thumb/customer-support-assistant-illustration-download-in-svg-png-gif-file-formats--call-logo-technical-headset-information-technology-pack-business-illustrations-1800927.png",
    description:
      "Ensure data accuracy, consistency, and reliability through comprehensive data validation processes.",
  },
  {
    title: "Advanced Analytics & ML Integration.",
    hoverColor: "#B39DDB",
    description:
      "Implement machine learning models to turn historical data into predictive insights, helping you forecast trends and make data-driven decisions.",
  },
  {
    title: "Generative AI Solutions Integration.",
    img: "https://strapi-wasabi-bucket.apyhi.com/What_is_AI_Vector_Generator_1_9dbca2ad63.webp",
    description:
      "Leverage Generative AI to unlock new levels of innovation by enabling your business to create, simulate, and automate processes based on data patterns and insights.",
  },

  {
    title: "Actionable Dashboards and Real-Time Reporting",
    hoverColor: "#FFF59D",
    description:
      "Design intuitive dashboards that provide real-time visibility into key metrics, empowering decision-makers with up-to-date information.",
  },
  {
    title: "Cloud Optimization for Data and AI",
    hoverColor: "#FFAB91",
    description:
      "Optimize cloud infrastructure for cost-effective, scalable solutions that support growing data volumes and AI workloads.",
  },
];

const cta = [
  {
    name: "Consultation",
    img: "/assets/img_placeholder/consult.png",
    description:
      "We will meet to understand your business needs and data landscape.",
  },
  {
    name: "Solution Proposal",
    img: "/assets/img_placeholder/solution.png",
    description:
      "We will design a custom plan with a roadmap for your data transformation.",
  },
  {
    name: "Implementation",
    img: "/assets/img_placeholder/implementation.png",
    description:
      "From data pipelines to dashboards, we handle end-to-end implementation.",
  },
];

function Home() {
  const swiperRef = useRef(null);

  return (
    <div className="page-wrapper relative z-[1] bg-white">
      <Header_01 />

      <main className="main-wrapper relative ">
        {/*...::: Hero Section Start :::... */}

        <section
          id="section-hero"
          className="h-[75vh] relative xl:h-screen overflow-hidden  py-24 bg-center bg-no-repeat bg-cover bg-[url('/assets/img_placeholder/data-bg.jpg')] "
        >
          <div className="absolute min-w-[1200px] overflow-hidden w-full h-full "></div>
          <div className="w-full h-full bg-gradient-to-b from-gray-900/40 to-gray-900/10 absolute top-0 left-0" />
          <div className="global-container overflow-hidden relative z-5  h-full flex flex-col justify-end items-start">
            <div className=" w-full lg:w-2/3">
              <p className="text-gray-50 font-Satoshi font-bold py-5 text-3xl  lg:text-6xl xxl:text-7xl">
                Turn Your Data into Your Company&apos;s Strongest Asset
              </p>
              <p className="text-gray-100 text-xl">
                <span className="text-lg xl:text-xl text-gray-800 font-bold font-Satoshi">
                  Menlo
                  <span className="text-sky-500 font-Clash font-[600]">
                    cloud
                  </span>
                </span>{" "}
                Transforming Data into Strategic Advantage
              </p>
            </div>
          </div>
        </section>

        <section className="my-10 py-24 bg-center bg-cover bg-no-repeat  ">
          <div className="">
            <p className="global-container mb-2 text-3xl lg:text-6xl tracking-tight font-Satoshi font-bold w-full lg:w-2/3 text-center">
              The Business Value of
              <span className="bg-gradient-to-r font-Telma px-1 from-blue-600 to-indigo-400 bg-clip-text text-transparent">
                {" "}
                Data Analytics
              </span>{" "}
            </p>
          </div>

          <div className=" mt-10 global-container grid grid-cols-1 lg:grid-cols-3 gap-5">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={index}
                className={`w-full bg-gray-100 relative p-7 rounded-lg overflow-hidden`}
                initial={{ opacity: 0, y: 20 }} // Starting state
                animate={{ opacity: 1, y: 0 }} // End state
                transition={{ duration: 0.5, delay: index * 0.1 }} // Transition timing
              >
                <div className="absolute top-1/2 left-1/2 opacity-[.2] -translate-x-1/2 -translate-y-1/2">
                  <img src={outcome.icon} />
                </div>
                <p className="text-xl relative z-10 lg:text-2xl font-Satoshi font-[600] ">
                  {outcome.name}
                </p>
                <p className=" text-md font-Satoshi relative z-10 lg:text-lg">
                  {outcome.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
        <section className="my-10 py-24   bg-no-repeat bg-center bg-cover bg-[url('https://img.freepik.com/free-vector/winter-blue-pink-gradient-background-vector_53876-117275.jpg?t=st=1727263918~exp=1727267518~hmac=baee65c2b8a027912f6643866ef0cda0cf4509c8dc6635623954698757fbbfd1&w=1060')]">
          <div className="">
            <p className="global-container mb-2   text-3xl lg:text-6xl tracking-tight font-Satoshi font-bold w-full lg:w-2/3 text-center">
              Challenges Businesses Face with
              <span className="bg-gradient-to-r font-Telma px-1 from-blue-600 to-indigo-400 bg-clip-text text-transparent">
                {" "}
                Data
              </span>{" "}
            </p>
          </div>

          <div className=" mt-20 global-container grid grid-cols-1 lg:grid-cols-3  gap-10 ">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="w-full bg-slate-100 relative shadow-md px-7 py-8 rounded-lg"
              >
                <motion.div
                  style={{
                    backgroundColor: challenge.color,
                  }}
                  className="absolute overflow-hidden p-3 flex justify-center items-center -top-7 left-7 size-14 z-20   rounded-full"
                >
                  <img src={challenge.icon} className="w-full" />
                </motion.div>
                <p className="text-2xl text-gray-900 font-Satoshi font-[600] mt-5">
                  {challenge.name}
                </p>
                <p className="mt-4 text-gray-800">{challenge.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="my-28 global-container">
          <div>
            <div className="flex  justify-between items-center">
              <p className="text-3xl w-full text-center lg:text-start lg:text-6xl  font-Satoshi font-[600]  lg:w-2/3">
                How Our Data Analytics{" "}
                <span className="bg-gradient-to-r font-Telma px-1 from-blue-600 to-indigo-400 bg-clip-text text-transparent">
                  Solutions
                </span>{" "}
                Help
              </p>
              <div className="hidden lg:flex">
                <SwiperNavButtons swiperRef={swiperRef} />
              </div>
            </div>
            <Swiper
              ref={swiperRef}
              spaceBetween={20}
              slidesPerView={1.3}
              breakpoints={{
                320: {
                  slidesPerView: 1.3, // 2 slides for screens >= 640px
                },
                768: {
                  slidesPerView: 3, // 3 slides for screens >= 768px
                },
                1024: {
                  slidesPerView: 3, // 4 slides for screens >= 1024px
                },
                1604: {
                  slidesPerView: 4, // 4 slides for screens >= 1024px
                },
              }}
              className=" mt-10 xl:mt-10"
            >
              {benefits.map((elem, index) => {
                return (
                  <SwiperSlide key={index} className="  w-full cursor-grab ">
                    <motion.div
                      whileHover={{ backgroundColor: elem.hoverColor }}
                      className={` px-5 py-7 min-h-[500px] flex flex-col justify-between items-start rounded-xl bg-slate-100 `}
                    >
                      <div className=" ">
                        <p className="font-medium text-sky-950 font-Satoshi text-lg flex items-center gap-2">
                          Step {index + 1}{" "}
                          <span className="text-2xl">
                            <GoArrowRight />
                          </span>
                        </p>
                        <p className="text-2xl  xl:text-lg xxl:text-2xl font-Satoshi text-sky-900 mt-2 font-semibold">
                          {elem.name}
                        </p>
                        <p className="xl:text-sm  xxl:text-lg font-Satoshi tracking-tight mt-2 font-medium">
                          {elem.description}
                        </p>
                      </div>
                      <div className="flex justify-center mt-5  w-full">
                        <img src={elem.icon} className="w-2/3" />
                      </div>
                    </motion.div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </section>

        <section className="global-container my-28">
          <div className="w-full flex justify-center mb-14">
            <p className="text-3xl w-full text-center  lg:text-6xl  font-Satoshi font-[600]  lg:w-2/3">
              Our
              <span className="bg-gradient-to-r font-Telma px-1 from-blue-600 to-indigo-400 bg-clip-text text-transparent">
                Expertise
              </span>{" "}
              and
              <span className="bg-gradient-to-r font-Telma px-1 from-blue-600 to-indigo-400 bg-clip-text text-transparent">
                Success
              </span>{" "}
            </p>
          </div>
          <div className="w-full grid grid-cols-1 lg:grid-cols-4  gap-5 ">
            {showcases.map((exp, index) => (
              <div
                key={index}
                className="w-full px-10 py-10 rounded-lg"
                style={{
                  backgroundColor: exp.color,
                }}
              >
                <p className="text-3xl xl:text-2xl xxl:text-3xl font-Satoshi font-[600] mt-5">
                  {exp.name}
                </p>
                <p className="mt-4 text-md xl:text-sm xxl:text-md">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section className="global-container my-28">
          <div className="w-full flex justify-center mb-14">
            <p className="text-3xl w-full text-center  lg:text-6xl  font-Satoshi font-[600]  lg:w-2/3">
              A Showcase of Our
              <span className="bg-gradient-to-r font-Telma px-1 from-blue-600 to-indigo-400 bg-clip-text text-transparent">
                Data Analytics
              </span>{" "}
              Services
            </p>
          </div>
          <div className="w-full grid grid-cols-1 lg:grid-cols-3  gap-10 ">
            {data.map((exp, index) => (
              <div key={index} className="w-full p-6 rounded-lg bg-gray-200">
                <p className="text-xl lg:text-3xl font-Satoshi font-[600] mt-5">
                  {exp.title}
                </p>
                <p className="mt-4 font-Satoshi font-medium">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>

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
            <Link href={`/contact`}>
              {" "}
              <button className="text-gray-900 overflow-hidden group rounded-lg relative font-Satoshi font-semibold py-2 px-5 bg-gray-200">
                <p className="relative z-10">Lets Connect</p>
                <div className="bg-sky-500 w-1 h-1 group-hover:scale-[50] absolute -bottom-1 left-1/2 -translate-1/2 rounded-full transition-all duration-300" />
              </button>
            </Link>
          </div>
        </section>
        <section className="  my-14 global-container">
          <div className="w-full flex justify-center mb-14">
            <p className="text-3xl w-full text-center  lg:text-6xl  font-Satoshi font-[600]  lg:w-2/3">
              What Happens
              <span className="bg-gradient-to-r font-Telma px-1 from-blue-600 to-indigo-400 bg-clip-text text-transparent">
                Next?
              </span>{" "}
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
            {cta.map((elem, index) => (
              <div
                key={index}
                className="w-full flex flex-col justify-center items-center"
              >
                <div className={"size-20  "}>
                  <img src={elem.img} />
                </div>
                <p className="font-Satoshi font-bold text-center text-xl mt-5 lg:text-2xl">
                  {elem.name}
                </p>
                <p className="text-md font-Satoshi font-medium text-center mt-2">
                  {" "}
                  {elem.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer_01 />
    </div>
  );
}

export default Home;

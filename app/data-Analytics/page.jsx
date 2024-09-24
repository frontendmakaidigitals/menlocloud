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
import Marquee from "@/components/magicui/marquee";
const outcomes = [
  {
    name: "Optimized Decision Making",
    icon: "https://cdn3d.iconscout.com/3d/premium/thumb/healthcare-3d-icon-download-in-png-blend-fbx-gltf-file-formats--heart-love-hands-medical-caregiver-nursing-home-pack-icons-5700707.png?f=webp",
    color: "#FFCDD2",
    description:
      "Everyone is empowered to support your organization’s strategy, operations, and performance.",
  },
  {
    name: "Modernized Data Environment",
    icon: "https://icons.iconarchive.com/icons/microsoft/fluentui-emoji-3d/512/Building-Construction-3d-icon.png",
    color: "#FFECB3",
    description:
      "Reduce manual processes, spend less on technology, and data teams focus on the highest-value work.",
  },
  {
    name: "A Data Driven View of Customers",
    icon: "https://cdn3d.iconscout.com/3d/premium/thumb/finance-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--invoice-bill-receipt-online-money-service-pack-marketing-branding-illustrations-4159684.png?f=webp",
    color: "#F5F5F5",
    description:
      "Understand customer preferences to improve their experience, mitigate risks, and drive more revenue.",
  },
  {
    name: "Proactive Data Governance",
    icon: "https://static.vecteezy.com/system/resources/previews/047/398/260/original/cartoon-public-trolleybus-3d-icon-on-the-transparent-background-vehicles-for-transportation-concept-png.png",
    color: "#D1C4E9",
    description:
      "Be ready for M&A, divestiture, investments, and expansion opportunities while managing risk.",
  },
];
const clientLogo = [
  {
    username: "@jack",
    img: "/assets/img_placeholder/clients/Sharmin.png",
  },
  {
    username: "@jack",
    img: "/assets/img_placeholder/clients/TeaVillaCafe.png",
  },
  {
    username: "@jack",
    img: "/assets/img_placeholder/clients/BSHH.png",
  },
  {
    username: "@jack",
    img: "/assets/img_placeholder/clients/Roofsol1.png",
  },
  {
    username: "@jack",
    img: "/assets/img_placeholder/clients/MOD.png",
  },
  {
    username: "@jack",
    img: "/assets/img_placeholder/clients/Zipro.png",
  },
];

const data = [
  {
    img: "https://s7d9.scene7.com/is/image/slalom/insight-globalbas-turtle-finserv-thumb-520x490?fmt=webp-alpha",
    title: "Data Collection",
    hoverColor: "#F48FB1",
    description:
      "The first step is collecting data from various sources like customer interactions, website traffic, social media, and internal databases. This can include both structured (e.g., sales figures) and unstructured data (e.g., social media posts), with the goal of gathering accurate, comprehensive information for analysis.",
  },
  {
    img: "https://s7d9.scene7.com/is/image/slalom/insight-globalbas-turtle-finserv-thumb-520x490?fmt=webp-alpha",
    title: "Data Cleaning and Preparation",
    hoverColor: "#90CAF9",
    description:
      "Raw data is often messy and incomplete. Data cleaning involves removing duplicates, filling in missing information, and fixing inconsistencies. This step is critical to ensure the data is reliable and ready for analysis.",
  },
  {
    img: "https://s7d9.scene7.com/is/image/slalom/insight-globalbas-turtle-finserv-thumb-520x490?fmt=webp-alpha",
    title: "Data Exploration",
    hoverColor: "#B39DDB",
    description:
      "Once the data is cleaned, analysts explore it to identify trends, patterns, and outliers. This stage, known as Exploratory Data Analysis (EDA), uses visual tools like graphs, histograms, and heatmaps to provide a preliminary understanding of the dataset.",
  },
  {
    img: "https://s7d9.scene7.com/is/image/slalom/insight-globalbas-turtle-finserv-thumb-520x490?fmt=webp-alpha",
    title: "Data Transformation",
    hoverColor: "#80CBC4",
    description:
      "After exploration, the data may need to be transformed or structured in a way that is suitable for analysis. This can involve aggregating data, filtering unnecessary elements, and creating new metrics or features from the raw data.",
  },
  {
    img: "https://s7d9.scene7.com/is/image/slalom/insight-globalbas-turtle-finserv-thumb-520x490?fmt=webp-alpha",
    title: "Data Analysis and Modeling",
    hoverColor: "#E6EE9C",
    description:
      "Once the data is cleaned, analysts explore it to identify trends, patterns, and outliers. This stage, known as Exploratory Data Analysis (EDA), uses visual tools like graphs, histograms, and heatmaps to provide a preliminary understanding of the dataset.",
  },
  {
    img: "https://s7d9.scene7.com/is/image/slalom/insight-globalbas-turtle-finserv-thumb-520x490?fmt=webp-alpha",
    title: "Visualization",
    hoverColor: "#FFF59D",
    description:
      "Raw data is often messy and incomplete. Data cleaning involves removing duplicates, filling in missing information, and fixing inconsistencies. This step is critical to ensure the data is reliable and ready for analysis.",
  },
  {
    img: "https://s7d9.scene7.com/is/image/slalom/insight-globalbas-turtle-finserv-thumb-520x490?fmt=webp-alpha",
    title: "Decision-Making",
    hoverColor: "#FFAB91",
    description:
      "The final step involves interpreting the analysis results and applying them to business strategies. Whether it's optimizing marketing campaigns, improving customer experiences, or forecasting sales, the insights derived from data analytics drive informed decision-making.",
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
          <div className="global-container overflow-hidden relative z-5 w-full h-full flex flex-col justify-end items-start">
            <div className=" w-full lg:w-2/3">
              <p className="text-gray-50 font-Satoshi font-bold py-5 text-3xl  lg:text-6xl xxl:text-7xl">
                Gain a strategic advantage with your Data.
              </p>
              <p className="text-gray-100 text-xl">
                Menlocloud data analytics consulting services will transform
                your organization and set you up to make data-driven decisions.
              </p>
            </div>
          </div>
        </section>
        <section className="global-container mt-20">
          <div className=" gap-8 grid place-items-center grid-cols-1 lg:grid-cols-2">
            <div>
              <p className="text-3xl  xxl:text-5xl font-Satoshi font-bold">
                Unlock Your Business Potential with Data-Driven Insights and
                Strategies
              </p>
              <p className="mt-8 font-Satoshi font-medium">
                Harnessing data analytics empowers businesses to make informed
                decisions, optimise operations, and enhance customer
                experiences. By leveraging actionable insights, companies can
                drive growth and stay ahead of the competition.
              </p>
              <ul className="list-disc mt-8 font-Satoshi font-semibold">
                <div className="px-4">
                  <li className="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li className="mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li className="mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                </div>
              </ul>
            </div>
            <div className="max-h-[600px] overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1642432556591-72cbc671b707?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
        </section>

        <section className="my-10 py-24 bg-center bg-cover bg-no-repeat  ">
          <div className="">
            <p className="global-container mb-2 text-3xl lg:text-5xl tracking-tight font-Satoshi font-bold w-full lg:w-2/3 text-center">
              Data Analytics Consulting{" "}
              <span className="bg-gradient-to-r font-Telma px-1 from-blue-600 to-indigo-400 bg-clip-text text-transparent">
                {" "}
                Services{" "}
              </span>{" "}
            </p>
            <p className="text-center font-Satoshi text-md ">
              We design, develop, and deploy solutions across all stages of the
              data lifecycle.
            </p>
          </div>

          <div className="w-full mt-10 global-container grid grid-cols-1 lg:grid-cols-4  gap-10 ">
            {outcomes.map((outcome, index) => (
              <div
                key={index}
                className="w-full px-7 py-8 rounded-lg"
                style={{
                  backgroundColor: outcome.color,
                }}
              >
                <p className="text-xl font-Satoshi font-[600]">Planning</p>
                <p className="text-4xl font-Satoshi font-[600] mt-5">
                  {outcome.name}
                </p>
                <p className="mt-4">{outcome.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="my-28 global-container">
          <div>
            <div className="flex  justify-between items-center">
              <p className="text-3xl w-full text-center lg:text-start  lg:text-6xl  font-Satoshi font-[600]  lg:w-2/3">
                How it{" "}
                <span className="bg-gradient-to-r font-Telma px-1 from-blue-600 to-indigo-400 bg-clip-text text-transparent">
                  Works{" "}
                </span>{" "}
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
              className=" mt-5 xl:mt-10"
            >
              {data.map((elem, index) => {
                return (
                  <SwiperSlide key={index} className="  w-full cursor-grab ">
                    <motion.div
                      whileHover={{ backgroundColor: elem.hoverColor }}
                      className={` px-5 py-7 rounded-xl bg-slate-100 `}
                    >
                      <div className="">
                        <p className="font-medium text-sky-950 font-Satoshi text-lg flex items-center gap-2">
                          Step {index + 1}{" "}
                          <span className="text-2xl">
                            <GoArrowRight />
                          </span>
                        </p>
                        <p className="xl:text-lg xxl:text-2xl font-Satoshi text-sky-900 mt-2 font-semibold">
                          {elem.title}
                        </p>
                        <p className="xl:text-sm min-h-[200px] xxl:text-lg font-Satoshi tracking-tight mt-2 font-medium">
                          {elem.description}
                        </p>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </section>

        <section className="mt-28">
          <p className="global-container mb-10 text-3xl lg:text-6xl font-Satoshi font-[600] w-full lg:w-2/3  text-center">
            Our{" "}
            <span className="bg-gradient-to-r font-Telma px-1 from-blue-600 to-indigo-400 bg-clip-text text-transparent">
              {" "}
              Clients{" "}
            </span>
          </p>
          <Marquee reverse className=" [--duration:20s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
        </section>

        <section className="mt-10 py-24 bg-center bg-cover bg-no-repeat  bg-black ">
          <div className="">
            <p className="global-container mb-2 text-3xl text-gray-100 lg:text-5xl tracking-tight font-Satoshi font-bold w-full lg:w-2/3 text-center">
              Talk strategy with an{" "}
              <span className="bg-gradient-to-r font-Telma px-1 from-blue-600 to-indigo-400 bg-clip-text text-transparent">
                {" "}
                Expert{" "}
              </span>{" "}
            </p>
            <p className="global-container text-center w-full lg:w-2/3 font-Satoshi text-md text-gray-200">
              Sign up to meet with one of our analytics experts who will review
              your data struggles and help map out steps to achieve data-driven
              decision making.
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

const secondRow = clientLogo;
const ReviewCard = ({ img, index }) => {
  return (
    <figure
      className={cn(
        `relative size-28 lg:size-40 flex justify-center items-center cursor-pointer overflow-hidden rounded-xl border p-4`,
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]"
        // dark styles
      )}
    >
      <img className=" " width="auto" alt="" src={img} />
    </figure>
  );
};

"use client";
import { cn } from "@/lib/utils";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useAccordion from "@/components/hooks/useAccordion";
import useTabs from "@/components/hooks/useTabs";
import { useRef } from "react";
import Header_01 from "@/components/header/Header_01";
import Footer_01 from "@/components/footer/Footer_01";
import WordRotate from "@/components/magicui/word-rotate";
import DotPattern from "@/components/magicui/dot-pattern";
import "/styles/globals.css";
import Marquee from "@/components/magicui/marquee";
import { color, motion } from "framer-motion";
import NumberTicker from "@/components/magicui/number-ticker";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import SwiperNavButtons from "@/components/SwiperNavButton";
const techLogos = [
  {
    username: "@jack",

    img: "https://www.netscout.com/sites/default/files/2022-02/17/images/cloud-lockup-logo-500px.png",
  },
  {
    username: "@john",

    img: "/assets/img_placeholder/Power_Bi.png",
  },
  {
    username: "@jill",

    img: "https://www.logo.wine/a/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.svg",
  },
  {
    username: "@jane",

    img: "/assets/img_placeholder/google-analytics.png",
  },

  {
    username: "@jack3",

    img: "https://cdn.icon-icons.com/icons2/2699/PNG/512/pytorch_logo_icon_169823.png",
  },
];

const industries = [
  {
    name: "Healthcare",
    icon: "/assets/img_placeholder/healthcare.png",
    color: "#FFCDD2",
    description:
      "you can transform healthcare with our cutting-edge solutions like telemedicine and AI tools, enhancing patient care and operational efficiency.",
  },
  {
    name: "Construction",
    icon: "/assets/img_placeholder/hook.png",
    color: "#FFECB3",
    description:
      "you can revolutionize construction with our smart building technologies and project management software, improving efficiency and safety on-site.",
  },
  {
    name: "Finance",
    icon: "/assets/img_placeholder/budget.png",
    color: "#CFD8DC",
    description:
      "you can innovate finance with our advanced fintech solutions and AI-driven analytics, enhancing security, efficiency, and decision-making.",
  },
  {
    name: "transportation",
    icon: "/assets/img_placeholder/delivery-truck.png",
    color: "#FFCCBC",
    description:
      "you can transform transportation with our smart routing and autonomous vehicle technologies, enhancing efficiency and safety in transit systems.",
  },
  {
    name: "entertainment",
    icon: "/assets/img_placeholder/popcorn.png",
    color: "#B3E5FC",
    description:
      "you can revolutionize entertainment with our immersive technologies and innovative content delivery systems, creating engaging and interactive experiences.",
  },
  {
    name: "retail",
    icon: "/assets/img_placeholder/store.png",
    color: "#FFAB91",
    description:
      "you can elevate retail with our smart analytics and seamless e-commerce solutions, enhancing customer experiences and operational efficiency.",
  },
  {
    name: "manufacturing",
    icon: "/assets/img_placeholder/manufacturing.png",
    color: "#E0E0E0",
    description:
      "you can transform manufacturing with our advanced automation and IoT solutions, optimizing production processes and enhancing efficiency.",
  },
  {
    name: "automation",
    icon: "/assets/img_placeholder/bot.png",
    color: "#FFE082",
    description:
      "you can drive automation with our intelligent systems and robotics, boosting efficiency and accuracy across various industries.",
  },
];
const experiences = [
  { name: "Years of Experience", number: 12, color: "#1E88E5" },
  { name: "In-House Experts", number: 400, color: "#212121" },
  { name: "Projects Delivered", number: 1000, color: "#00796B" },
  { name: "Happy Clients", number: 400, color: "#D81B60" },
];

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

function Home() {
  const [activeIndex, handleAccordion] = useAccordion(0);

  const parentVariants = {
    hover: {
      scale: 1.05, // Scale up the parent a bit
    },
  };
  const swiperRef = useRef(null);
  const headerVariant = {
    initial: {
      fontSize: "2.4rem",
      y: 100, // Start below
    },
    hover: {
      y: 0,
      fontSize: "2rem",
      transition: {
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  const contentVariant = {
    initial: {
      y: 150, // Start below
      opacity: 0,
    },
    hover: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };
  const buttonVariant = {
    initial: {
      y: 120,
    },
    hover: {
      y: 0,
      transition: {
        delay: 0.3,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  return (
    <div className="page-wrapper relative z-[1] bg-white">
      {/*...::: Header Start :::... */}
      <Header_01 />
      {/*...::: Header End :::... */}
      <main className="main-wrapper relative overflow-hidden">
        {/*...::: Hero Section Start :::... */}
        <section id="section-hero">
          <div className="relative z-[1] overflow-hidden rounded-bl-[30px] rounded-br-[30px] bg-black pb-20 pt-28 lg:rounded-bl-[50px] lg:rounded-br-[50px] lg:pb-24 lg:pt-32 xl:pt-40 xxl:pb-[133px] xxl:pt-[195px]">
            <div className="global-container">
              <div className="mb-14 flex text-gray-200 flex-col items-center text-center lg:mb-20">
                <div className="mb-6 max-w-[630px]   lg:max-w-[868px] xl:max-w-[1206px]">
                  <p className="jos slide-from-bottom text-2xl lg:text-7xl">
                    Delivering intelligent outcomes with{" "}
                    <WordRotate
                      words={["Big Data", "Analyitcs", "Machine Learning"]}
                    />
                  </p>
                </div>

                <p className="jos slide-from-bottom mb-11 max-w-[700px] text-sm lg:text-lg font-semibold sm:text-xl xl:max-w-[980px]">
                  <span className="font-bold font-Satoshi">
                    Menlo
                    <span className="text-sky-500 font-Clash font-[600]">
                      cloud
                    </span>{" "}
                  </span>
                  is a robust organization using modern technologies like AI, ML
                  and Data Science
                </p>
                <div
                  className="jos flex flex-wrap justify-center gap-6"
                  data-jos_animation="fade"
                >
                  <button className="button text-gray-900 rounded-[50px] border-2 border-black bg-gray-100 py-4   after:bg-[#2962FF] hover:border-[#2962FF] hover:text-gray-100">
                    Read More
                  </button>
                  <button className="button rounded-[50px] border-2 border-gray-100 bg-transparent py-4 text-gray-200 after:bg-[#2962FF] hover:border-[#2962FF] hover:text-white">
                    About Us
                  </button>
                </div>
              </div>
              <div
                className="jos hero-img overflow-hidden rounded-2xl bg-black"
                data-jos_animation="zoom"
              >
                <video width="100%" height="auto" autoPlay muted loop>
                  <source
                    src={`/assets/img_placeholder/th-1/dev video.mp4`}
                  ></source>
                </video>
              </div>
            </div>
            <div className="blue-gradient-1 absolute -right-[200px]  lg:-right-[150px] top-[370px] -z-[1]  h-[200px] w-[200px] lg:w-[500px] lg:h-[500px] animate-spin rounded-[500px]"></div>

            <div className="blue-gradient-2 absolute -right-[200px] lg:right-[57px] top-[620px] -z-[1] h-[300px] w-[300px] lg:w-[450px] lg:h-[450px] animate-spin rounded-[450px]"></div>
          </div>
        </section>
        {/*...::: Hero Section End :::... */}
        <section className="mt-32 ">
          <h2 className="global-container mb-10 text-center">
            Our Tech Experties
          </h2>
          <Marquee className=" [--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
        </section>

        <section className="global-container mt-32">
          <h2 className="text-center">We Turn Good Ideas Into Great Things</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5 place-items-center">
            {experiences.map((exp, index) => (
              <div key={index} className="mt-20 flex gap-1 flex-col items-center">
                <NumberTicker
                  value={`${exp.number}`}
                  className={`text-7xl font-[900] font-Satoshi`}
                  color={exp.color}
                />
                <p className="font-Satoshi text-xl font-medium">{exp.name}</p>
              </div>
            ))}
          </div>
        </section>
        {/*...::: Service Section Start :::... */}
        <section id="section-service">
          {/* Section Spacer */}
          <div className="pb-20 pt-20 xl:pb-[150px] xl:pt-[130px]">
            {/* Section Container */}
            <div className="global-container">
              {/* Section Content Block */}
              <div className="jos mb-10 lg:mb-10 xl:mb-10">
                <div className="global-container">
                  <h2 className="text-center">Services</h2>
                </div>
              </div>
              {/* Section Content Block */}
              {/* Service List */}

              <ul className="jos px-4 py-4 bg-background  relative overflow-hidden grid grid-cols-1 gap-x-5 gap-y-5  sm:grid-cols-2 lg:grid-cols-4">
                {/* Service Item */}
                <DotPattern
                  className={cn(
                    "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
                  )}
                />
                <motion.li
                  variants={parentVariants}
                  initial="initial"
                  whileHover="hover"
                  className="overflow-hidden group h-[450px] relative cursor-pointer   shadow-md border border-gray-400  rounded-[10px] w-full bg-red-500"
                >
                  <div className="w-full bg-no-repeat bg-center bg-cover h-full bg-[url('https://images.pexels.com/photos/3153204/pexels-photo-3153204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] scale-[1.2] group-hover:scale-[1.5] duration-300  absolute top-0 left-0 transition-all"></div>
                  <motion.div className="relative h-full flex flex-col justify-end  items-end z-3 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent text-gray-50 font-bold  font-Satoshi px-5 py-7 rounded-[10px] w-full ">
                    <motion.p
                      variants={headerVariant}
                      className="w-full leading-snug"
                    >
                      Web Development
                    </motion.p>

                    <div className="">
                      <motion.p
                        variants={contentVariant}
                        className=" text-sm font-medium"
                      >
                        Some random text written may be lorem ipsum{" "}
                      </motion.p>
                      <div className="w-full">
                        <motion.button
                          variants={buttonVariant}
                          className="bg-blue-500 hover:bg-blue-400 font-Satoshi font-medium rounded-lg text-sm px-4 py-2 mt-2"
                        >
                          Learn More
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                </motion.li>
                <motion.li
                  variants={parentVariants}
                  initial="initial"
                  whileHover="hover"
                  className="overflow-hidden group h-[450px] relative cursor-pointer   shadow-md border border-gray-400  rounded-[10px] w-full bg-red-500"
                >
                  <div className="w-full bg-no-repeat bg-center bg-cover h-full bg-[url('https://images.pexels.com/photos/5475760/pexels-photo-5475760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] scale-[1.2] group-hover:scale-[1.5] duration-300  absolute top-0 left-0 transition-all"></div>
                  <motion.div className="relative h-full flex flex-col justify-end  items-end z-3 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent text-gray-50 font-bold  font-Satoshi px-5 py-7 rounded-[10px] w-full ">
                    <motion.p
                      variants={headerVariant}
                      className="w-full leading-snug"
                    >
                      Digital Transformation
                    </motion.p>

                    <div className="">
                      <motion.p
                        variants={contentVariant}
                        className=" text-sm font-medium"
                      >
                        Some random text written may be lorem ipsum{" "}
                      </motion.p>
                      <div className="w-full">
                        <motion.button
                          variants={buttonVariant}
                          className="bg-blue-500 hover:bg-blue-400 font-Satoshi font-medium rounded-lg text-sm px-4 py-2 mt-2"
                        >
                          Learn More
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                </motion.li>
                <motion.li
                  variants={parentVariants}
                  initial="initial"
                  whileHover="hover"
                  className="overflow-hidden group h-[450px] relative cursor-pointer   shadow-md border border-gray-400  rounded-[10px] w-full bg-red-500"
                >
                  <div className="w-full bg-no-repeat bg-center bg-cover h-full bg-[url('https://images.pexels.com/photos/5380590/pexels-photo-5380590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] scale-[1.2] group-hover:scale-[1.5] duration-300  absolute top-0 left-0 transition-all"></div>
                  <motion.div className="relative h-full flex flex-col justify-end  items-end z-3 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent text-gray-50 font-bold  font-Satoshi px-5 py-7 rounded-[10px] w-full ">
                    <motion.p
                      variants={headerVariant}
                      className="w-full leading-snug"
                    >
                      White Label Services
                    </motion.p>

                    <div className="">
                      <motion.p
                        variants={contentVariant}
                        className=" text-sm font-medium"
                      >
                        Some random text written may be lorem ipsum{" "}
                      </motion.p>
                      <div className="w-full">
                        <motion.button
                          variants={buttonVariant}
                          className="bg-blue-500 hover:bg-blue-400 font-Satoshi font-medium rounded-lg text-sm px-4 py-2 mt-2"
                        >
                          Learn More
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                </motion.li>
                <motion.li
                  variants={parentVariants}
                  initial="initial"
                  whileHover="hover"
                  className="overflow-hidden group h-[450px] relative cursor-pointer   shadow-md border border-gray-400  rounded-[10px] w-full bg-red-500"
                >
                  <div className="w-full bg-no-repeat bg-right bg-cover h-full bg-[url('https://images.pexels.com/photos/5082578/pexels-photo-5082578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] scale-[1.2] group-hover:scale-[1.5] duration-300  absolute top-0 left-0 transition-all"></div>
                  <motion.div className="relative h-full flex flex-col justify-end  items-end z-3 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent text-gray-50 font-bold  font-Satoshi px-5 py-7 rounded-[10px] w-full ">
                    <motion.p
                      variants={headerVariant}
                      className="w-full leading-snug"
                    >
                      App Development
                    </motion.p>

                    <div className="">
                      <motion.p
                        variants={contentVariant}
                        className=" text-sm font-medium"
                      >
                        Some random text written may be lorem ipsum{" "}
                      </motion.p>
                      <div className="w-full">
                        <motion.button
                          variants={buttonVariant}
                          className="bg-blue-500 hover:bg-blue-400 font-Satoshi font-medium rounded-lg text-sm px-4 py-2 mt-2"
                        >
                          Learn More
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                </motion.li>
                <motion.li
                  variants={parentVariants}
                  initial="initial"
                  whileHover="hover"
                  className="overflow-hidden group h-[450px] relative cursor-pointer   shadow-md border border-gray-400  rounded-[10px] w-full bg-red-500"
                >
                  <div className="w-full bg-no-repeat bg-center bg-cover h-full bg-[url('https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] scale-[1.2] group-hover:scale-[1.5] duration-300  absolute top-0 left-0 transition-all"></div>
                  <motion.div className="relative h-full flex flex-col justify-end  items-end z-3 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent text-gray-50 font-bold  font-Satoshi px-5 py-7 rounded-[10px] w-full ">
                    <motion.p
                      variants={headerVariant}
                      className="w-full leading-snug"
                    >
                      Hire <br />
                      Developers
                    </motion.p>

                    <div className="">
                      <motion.p
                        variants={contentVariant}
                        className=" text-sm font-medium"
                      >
                        Some random text written may be lorem ipsum{" "}
                      </motion.p>
                      <div className="w-full">
                        <motion.button
                          variants={buttonVariant}
                          className="bg-blue-500 hover:bg-blue-400 font-Satoshi font-medium rounded-lg text-sm px-4 py-2 mt-2"
                        >
                          Learn More
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                </motion.li>
                <motion.li
                  variants={parentVariants}
                  initial="initial"
                  whileHover="hover"
                  className="overflow-hidden group h-[450px] relative cursor-pointer   shadow-md border border-gray-400  rounded-[10px] w-full bg-red-500"
                >
                  <div className="w-full bg-no-repeat bg-center bg-cover h-full bg-[url('https://images.pexels.com/photos/5922204/pexels-photo-5922204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] scale-[1.2] group-hover:scale-[1.5] duration-300  absolute top-0 left-0 transition-all"></div>
                  <motion.div className="relative h-full flex flex-col justify-end  items-end z-3 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent text-gray-50 font-bold  font-Satoshi px-5 py-7 rounded-[10px] w-full ">
                    <motion.p
                      variants={headerVariant}
                      className="w-full  leading-snug"
                    >
                      Hire <br /> Marketers
                    </motion.p>

                    <div className="">
                      <motion.p
                        variants={contentVariant}
                        className=" text-sm font-medium"
                      >
                        Some random text written may be lorem ipsum{" "}
                      </motion.p>
                      <div className="w-full">
                        <motion.button
                          variants={buttonVariant}
                          className="bg-blue-500 hover:bg-blue-400 font-Satoshi font-medium rounded-lg text-sm px-4 py-2 mt-2"
                        >
                          Learn More
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                </motion.li>
                <motion.li
                  variants={parentVariants}
                  initial="initial"
                  whileHover="hover"
                  className="overflow-hidden group h-[450px] relative cursor-pointer   shadow-md border border-gray-400  rounded-[10px] w-full bg-red-500"
                >
                  <div className="w-full bg-no-repeat bg-center bg-cover h-full bg-[url('https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] scale-[1.2] group-hover:scale-[1.5] duration-300  absolute top-0 left-0 transition-all"></div>
                  <motion.div className="relative h-full flex flex-col justify-end  items-end z-3 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent text-gray-50 font-bold  font-Satoshi px-5 py-7 rounded-[10px] w-full ">
                    <motion.p
                      variants={headerVariant}
                      className="w-full  leading-snug"
                    >
                      Hire <br />
                      Testers
                    </motion.p>

                    <div className="">
                      <motion.p
                        variants={contentVariant}
                        className=" text-sm font-medium"
                      >
                        Some random text written may be lorem ipsum{" "}
                      </motion.p>
                      <div className="w-full">
                        <motion.button
                          variants={buttonVariant}
                          className="bg-blue-500 hover:bg-blue-400 font-Satoshi font-medium rounded-lg text-sm px-4 py-2 mt-2"
                        >
                          Learn More
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                </motion.li>
                <motion.li
                  variants={parentVariants}
                  initial="initial"
                  whileHover="hover"
                  className="overflow-hidden group h-[450px] relative cursor-pointer   shadow-md border border-gray-400  rounded-[10px] w-full bg-red-500"
                >
                  <div className="w-full bg-no-repeat bg-center bg-cover h-full bg-[url('https://images.pexels.com/photos/6322370/pexels-photo-6322370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] scale-[1.2] group-hover:scale-[1.5] duration-300  absolute top-0 left-0 transition-all"></div>
                  <motion.div className="relative h-full flex flex-col justify-end  items-end z-3 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent text-gray-50 font-bold  font-Satoshi px-5 py-7 rounded-[10px] w-full ">
                    <motion.p
                      variants={headerVariant}
                      className="w-full leading-snug"
                    >
                      Hire <br /> Designers
                    </motion.p>

                    <div className="">
                      <motion.p
                        variants={contentVariant}
                        className=" text-sm font-medium"
                      >
                        Some random text written may be lorem ipsum{" "}
                      </motion.p>
                      <div className="w-full">
                        <motion.button
                          variants={buttonVariant}
                          className="bg-blue-500 hover:bg-blue-400 font-Satoshi font-medium rounded-lg text-sm px-4 py-2 mt-2"
                        >
                          Learn More
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                </motion.li>

                {/* Service Item */}
              </ul>
              <div className="w-full  overflow-hidden flex justify-center mt-6 relative">
                <button className="button group rounded-[50px]  relative   bg-black py-3 text-white  ">
                  <div className="bg-blue-500  size-1 group-hover:scale-[50] transition-all duration-500 rounded-full absolute top-[110%] left-1/2 -translate-x-1/2  -translate-y-1/2"></div>
                  <span className="relative z-5"> Explore more</span>
                </button>
              </div>
              {/* Service List */}
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>

        {/*...::: Service Section End :::... */}

        <section className="my-16">
          <div className="global-container ">
            <h2 className="text-center text-black">Broad indusrty usage</h2>
          </div>
          <div className="w-full global-container mt-10 grid grid-cols-1  xl:grid-cols-4 gap-5">
            {industries.map((industry, index) => (
              <div
                className="bg-gray-50 group relative shadow-sm cursor-pointer overflow-hidden rounded-xl px-5 py-7 flex flex-col justify-center items-center "
                key={index}
              >
                <div
                  className="size-2 transition-all duration-500 top-1/4 group-hover:scale-[70] absolute rounded-full "
                  style={{ backgroundColor: industry.color }}
                ></div>
                <div
                  style={{ backgroundColor: industry.color }}
                  className="relative z-5 size-24 flex justify-center items-center rounded-full  overflow-hidden"
                >
                  <img className="w-2/3" src={industry.icon} />
                </div>
                <p className="font-[700] text-2xl capitalize mt-2 font-Satoshi relative z-5">
                  {industry.name}
                </p>
                <p className="text-center relative z-5 text-gray-500 text-sm mt-1 capitalize ">
                  {industry.description}{" "}
                </p>
              </div>
            ))}
          </div>
        </section>
        {/*...::: Funfact Section End :::... */}
        <section className="mt-28">
          <h2 className="global-container text-center mb-10">
            Awards & Certifications
          </h2>
          <Marquee reverse className=" [--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
        </section>
        {/*...::: FAQ Section Start :::... */}
        <section className="mt-12">
          <div className="w-full flex flex-col justify-center items-center">
            <p className=" text-2xl my-5 lg:text-6xl">We are</p>
            <h1 className=" font-[800] gradient-text w-fit animate-gradient">
              Menlo<span className="font-Clash">cloud</span>
            </h1>

            <div className="w-full overflow-hidden flex justify-center mt-6 relative">
              <button className="overflow-hidden group rounded-[50px] px-7 font-satoshi relative bg-black py-3 text-white  ">
                <div className="bg-blue-500  size-1 group-hover:scale-[50] transition-all duration-500 rounded-full absolute top-[110%] left-1/2 -translate-x-1/2  -translate-y-1/2"></div>
                <span className="relative z-5"> Join Our Team</span>
              </button>
            </div>
          </div>
        </section>
        {/*...::: FAQ Section End :::... */}
        <section className="mb-40 mt-20 global-container">
          <div>
            <div className="flex  justify-between items-center">
              <h2 className="text-gray-900">2024 Industry Outlooks </h2>
              <div className="hidden lg:flex">
                <SwiperNavButtons swiperRef={swiperRef} />
              </div>
            </div>
            <Swiper
              ref={swiperRef}
              spaceBetween={10}
              slidesPerView={1.3}
              loop={true}
              breakpoints={{
                320: {
                  slidesPerView: 1.3, // 2 slides for screens >= 640px
                },
                768: {
                  slidesPerView: 3, // 3 slides for screens >= 768px
                },
                1024: {
                  slidesPerView: 4, // 4 slides for screens >= 1024px
                },
              }}
              className="mt-10"
            >
              {data.map((elem, index) => {
                return (
                  <SwiperSlide key={index} className="  w-full cursor-pointer ">
                    <motion.div
                      whileHover={{ backgroundColor: elem.hoverColor }}
                      className={`h-[30rem] rounded-xl bg-gray-100 `}
                    >
                      <div
                        className="w-full h-64 bg-no-repeat rounded-xl bg-center bg-cover "
                        style={{ backgroundImage: `url(${elem.img})` }}
                      ></div>
                      <p className="text-3xl font-semibold mt-5 px-3">
                        {elem.title}
                        {index}
                      </p>
                    </motion.div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </section>
        {/*...::: Testimonial Section Start :::... */}
        <section className="testimonial-section mt-60">
          {/* Section Spacer */}
          <div className="bg-black pb-40 pt-20 xl:pb-[200px] xl:pt-[130px]">
            {/* Section Container */}
            <div className="global-container">
              {/* Section Content Block */}
              <div className="jos mb-10 text-center lg:mb-16 xl:mb-20">
                <div className="mx-auto max-w-[300px] lg:max-w-[600px] xl:max-w-[680px]">
                  <h2 className="text-white">
                    Positive feedback from our users
                  </h2>
                </div>
              </div>
              {/* Section Content Block */}

              {/* Testimonial List */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Testimonial Item */}
                <div
                  className="jos flex flex-col gap-y-8 rounded-[10px] border-[1px] border-colorCodGray p-[30px] text-white"
                  data-jos_animation="fade-left"
                  data-jos_delay="0.1"
                >
                  <div className="block">
                    <img
                      src="/assets/img_placeholder/th-1/rating.svg"
                      alt="rating"
                      width="146"
                      height="25"
                    />
                  </div>
                  <p>
                    “This AI SaaS tool has revolutionized the way we process and
                    analyze data. This is a game-changer for our business.”
                  </p>
                  <div className="flex items-center gap-x-4">
                    <div className="h-[60px] w-[60px] overflow-hidden rounded-full">
                      <img
                        src="/assets/img_placeholder/th-1/testimonial-img-1.jpg"
                        alt="testimonial-img"
                        width="60"
                        height="60"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <span className="block text-lg font-semibold leading-[1.6]">
                        Max Weber
                      </span>
                      <span className="block text-sm font-light leading-[1.4]">
                        HR Manager
                      </span>
                    </div>
                  </div>
                </div>
                {/* Testimonial Item */}
                {/* Testimonial Item */}
                <div
                  className="jos flex flex-col gap-y-8 rounded-[10px] border-[1px] border-colorCodGray p-[30px] text-white"
                  data-jos_animation="fade-left"
                  data-jos_delay="0.2"
                >
                  <div className="block">
                    <img
                      src="/assets/img_placeholder/th-1/rating.svg"
                      alt="rating"
                      width="146"
                      height="25"
                    />
                  </div>
                  <p>
                    It answers immediately, and we ve seen a significant
                    reduction in response time. Our customers love it and so do
                    we!
                  </p>
                  <div className="flex items-center gap-x-4">
                    <div className="h-[60px] w-[60px] overflow-hidden rounded-full">
                      <img
                        src="/assets/img_placeholder/th-1/testimonial-img-2.jpg"
                        alt="testimonial-img"
                        width="60"
                        height="60"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <span className="block text-lg font-semibold leading-[1.6]">
                        Douglas Smith
                      </span>
                      <span className="block text-sm font-light leading-[1.4]">
                        Businessman
                      </span>
                    </div>
                  </div>
                </div>
                {/* Testimonial Item */}
                {/* Testimonial Item */}
                <div
                  className="jos flex flex-col gap-y-8 rounded-[10px] border-[1px] border-colorCodGray p-[30px] text-white"
                  data-jos_animation="fade-left"
                  data-jos_delay="0.3"
                >
                  <div className="block">
                    <img
                      src="/assets/img_placeholder/th-1/rating.svg"
                      alt="rating"
                      width="146"
                      height="25"
                    />
                  </div>
                  <p>
                    It is accurate, fast and supports multiple languages
                    support. It is a must for any international business
                    success.
                  </p>
                  <div className="flex items-center gap-x-4">
                    <div className="h-[60px] w-[60px] overflow-hidden rounded-full">
                      <img
                        src="/assets/img_placeholder/th-1/testimonial-img-3.jpg"
                        alt="testimonial-img"
                        width="60"
                        height="60"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <span className="block text-lg font-semibold leading-[1.6]">
                        Abraham Maslo
                      </span>
                      <span className="block text-sm font-light leading-[1.4]">
                        Founder @ Marketing Company
                      </span>
                    </div>
                  </div>
                </div>
                {/* Testimonial Item */}
                {/* Testimonial Item */}
                <div
                  className="jos flex flex-col gap-y-8 rounded-[10px] border-[1px] border-colorCodGray p-[30px] text-white"
                  data-jos_animation="fade-right"
                  data-jos_delay="0.1"
                >
                  <div className="block">
                    <img
                      src="/assets/img_placeholder/th-1/rating.svg"
                      alt="rating"
                      width="146"
                      height="25"
                    />
                  </div>
                  <p>
                    Security is a top concern for us, and AI SaaS takes it
                    seriously. It s a reassuring layer of protection for our
                    organization.
                  </p>
                  <div className="flex items-center gap-x-4">
                    <div className="h-[60px] w-[60px] overflow-hidden rounded-full">
                      <img
                        src="/assets/img_placeholder/th-1/testimonial-img-4.jpg"
                        alt="testimonial-img"
                        width="60"
                        height="60"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <span className="block text-lg font-semibold leading-[1.6]">
                        Jack Fayol
                      </span>
                      <span className="block text-sm font-light leading-[1.4]">
                        HR Manager
                      </span>
                    </div>
                  </div>
                </div>
                {/* Testimonial Item */}
                {/* Testimonial Item */}
                <div
                  className="jos flex flex-col gap-y-8 rounded-[10px] border-[1px] border-colorCodGray p-[30px] text-white"
                  data-jos_animation="fade-right"
                  data-jos_delay="0.2"
                >
                  <div className="block">
                    <img
                      src="/assets/img_placeholder/th-1/rating.svg"
                      alt="rating"
                      width="146"
                      height="25"
                    />
                  </div>
                  <p>
                    We were concerned about integrating their APIs were well
                    documented, and their support team was super cool.
                  </p>
                  <div className="flex items-center gap-x-4">
                    <div className="h-[60px] w-[60px] overflow-hidden rounded-full">
                      <img
                        src="/assets/img_placeholder/th-1/testimonial-img-5.jpg"
                        alt="testimonial-img"
                        width="60"
                        height="60"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <span className="block text-lg font-semibold leading-[1.6]">
                        Karen Lynn
                      </span>
                      <span className="block text-sm font-light leading-[1.4]">
                        Software Engineer
                      </span>
                    </div>
                  </div>
                </div>
                {/* Testimonial Item */}
                {/* Testimonial Item */}
                <div
                  className="jos flex flex-col gap-y-8 rounded-[10px] border-[1px] border-colorCodGray p-[30px] text-white"
                  data-jos_animation="fade-right"
                  data-jos_delay="0.3"
                >
                  <div className="block">
                    <img
                      src="/assets/img_placeholder/th-1/rating.svg"
                      alt="rating"
                      width="146"
                      height="25"
                    />
                  </div>
                  <p>
                    The return on investment has exceeded our expectations. it s
                    an investment in the future of our business.
                  </p>
                  <div className="flex items-center gap-x-4">
                    <div className="h-[60px] w-[60px] overflow-hidden rounded-full">
                      <img
                        src="/assets/img_placeholder/th-1/testimonial-img-6.jpg"
                        alt="testimonial-img"
                        width="60"
                        height="60"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <span className="block text-lg font-semibold leading-[1.6]">
                        Henry Ochi
                      </span>
                      <span className="block text-sm font-light leading-[1.4]">
                        Bank Manager
                      </span>
                    </div>
                  </div>
                </div>
                {/* Testimonial Item */}
              </div>
              {/* Testimonial List */}
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: Testimonial Section Start :::... */}

        {/* Body Background Shape 1 */}
        <div className="blue-gradient-1 absolute -left-[15px] top-[61%] -z-[1] h-[400px] w-[400px] -rotate-[-9.022deg] rounded-[400px]"></div>

        {/* Body Background Shape 2 */}
        <div className="blue-gradient-2 absolute -left-[100px] top-[64%] -z-[1] h-[360px] w-[360px] -rotate-[-9.022deg] rounded-[360px]"></div>
      </main>
      {/*...::: Footer Start :::... */}
      <Footer_01 />
      {/*...::: Footer End :::... */}
    </div>
  );
}

export default Home;
const firstRow = techLogos;
const ReviewCard = ({ img, index }) => {
  return (
    <figure
      className={cn(
        `relative size-40 flex justify-center items-center cursor-pointer overflow-hidden rounded-xl border p-4`,
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]"
        // dark styles
      )}
    >
      <img className=" " width="auto" alt="" src={img} />
    </figure>
  );
};

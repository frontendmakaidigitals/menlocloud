"use client";
import { cn } from "@/lib/utils";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useAccordion from "@/components/hooks/useAccordion";
import useTabs from "@/components/hooks/useTabs";
import Header_01 from "@/components/header/Header_01";
import Footer_01 from "@/components/footer/Footer_01";
import WordRotate from "@/components/magicui/word-rotate";

import "/styles/globals.css";
import Marquee from "@/components/magicui/marquee";
import { color, motion } from "framer-motion";

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

function Home() {
  const [activeIndex, handleAccordion] = useAccordion(0);

  const parentVariants = {
    hover: {
      scale: 1.05, // Scale up the parent a bit
    },
  };

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
          <h2 className="global-container mb-10">Our Tech Experties</h2>
          <Marquee className=" [--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
        </section>
        {/*...::: Service Section Start :::... */}
        <section id="section-service">
          {/* Section Spacer */}
          <div className="pb-20 pt-20 xl:pb-[150px] xl:pt-[130px]">
            {/* Section Container */}
            <div className="global-container">
              {/* Section Content Block */}
              <div className="jos mb-10 lg:mb-10 xl:mb-10">
                <div className="md:max-w-sm lg:max-w-xl xl:max-w-[746px]">
                  <h2>Services</h2>
                </div>
              </div>
              {/* Section Content Block */}
              {/* Service List */}
              <ul className="jos grid grid-cols-1 gap-x-5 gap-y-5  sm:grid-cols-2 lg:grid-cols-4">
                {/* Service Item */}

                <motion.li
                  variants={parentVariants}
                  initial="initial"
                  whileHover="hover"
                  className="overflow-hidden group h-[450px] relative cursor-pointer   shadow-md border border-gray-400  rounded-[10px] w-full bg-red-500"
                >
                  <div className="w-full bg-no-repeat bg-center bg-cover h-full bg-[url('https://images.pexels.com/photos/27915621/pexels-photo-27915621/free-photo-of-robot-waiter.jpeg?auto=compress&cs=tinysrgb&w=600')] scale-[1.2] group-hover:scale-[1.5] duration-300  absolute top-0 left-0 transition-all"></div>
                  <motion.div className="relative h-full flex flex-col justify-end  items-end z-3 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent text-gray-50 font-bold  font-Satoshi px-5 py-7 rounded-[10px] w-full ">
                    <motion.p
                      variants={headerVariant}
                      className="w-full leading-snug"
                    >
                      Applied Ai
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
                      Data Analyitcs
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
                  <div className="w-full bg-no-repeat bg-center bg-cover h-full bg-[url('https://images.pexels.com/photos/5474296/pexels-photo-5474296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] scale-[1.2] group-hover:scale-[1.5] duration-300  absolute top-0 left-0 transition-all"></div>
                  <motion.div className="relative h-full flex flex-col justify-end  items-end z-3 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent text-gray-50 font-bold  font-Satoshi px-5 py-7 rounded-[10px] w-full ">
                    <motion.p
                      variants={headerVariant}
                      className="w-full leading-snug"
                    >
                      Software Engineering
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
                  <div className="w-full bg-no-repeat bg-right bg-cover h-full bg-[url('https://images.pexels.com/photos/8438942/pexels-photo-8438942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] scale-[1.2] group-hover:scale-[1.5] duration-300  absolute top-0 left-0 transition-all"></div>
                  <motion.div className="relative h-full flex flex-col justify-end  items-end z-3 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent text-gray-50 font-bold  font-Satoshi px-5 py-7 rounded-[10px] w-full ">
                    <motion.p
                      variants={headerVariant}
                      className="w-full leading-snug"
                    >
                      Artificial Intelligence
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
                  <div className="w-full bg-no-repeat bg-center bg-cover h-full bg-[url('https://images.pexels.com/photos/16423102/pexels-photo-16423102/free-photo-of-home-security-camera.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] scale-[1.2] group-hover:scale-[1.5] duration-300  absolute top-0 left-0 transition-all"></div>
                  <motion.div className="relative h-full flex flex-col justify-end  items-end z-3 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent text-gray-50 font-bold  font-Satoshi px-5 py-7 rounded-[10px] w-full ">
                    <motion.p
                      variants={headerVariant}
                      className="w-full leading-snug"
                    >
                      Privacy and Security
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
                  <div className="w-full bg-no-repeat bg-center bg-cover h-full bg-[url('https://img.freepik.com/free-photo/woman-scrolling-laptop_53876-167050.jpg?w=740&t=st=1725881122~exp=1725881722~hmac=46816e5c3070b090b0fd180db9c7107bd6b724fe031f611530bbb21398805c2c')] scale-[1.2] group-hover:scale-[1.5] duration-300  absolute top-0 left-0 transition-all"></div>
                  <motion.div className="relative h-full flex flex-col justify-end  items-end z-3 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent text-gray-50 font-bold  font-Satoshi px-5 py-7 rounded-[10px] w-full ">
                    <motion.p
                      variants={headerVariant}
                      className="w-full leading-snug"
                    >
                      Cloud Modernization
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
                      className="w-full leading-snug"
                    >
                      Strategy
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
                  <div className="w-full bg-no-repeat bg-center bg-cover h-full bg-[url('https://images.pexels.com/photos/6328791/pexels-photo-6328791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] scale-[1.2] group-hover:scale-[1.5] duration-300  absolute top-0 left-0 transition-all"></div>
                  <motion.div className="relative h-full flex flex-col justify-end  items-end z-3 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent text-gray-50 font-bold  font-Satoshi px-5 py-7 rounded-[10px] w-full ">
                    <motion.p
                      variants={headerVariant}
                      className="w-full leading-snug"
                    >
                      System Implementation
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

        {/*...::: Content Section Start_1 :::... */}
        <section id="content-section-1">
          {/* Section Spacer */}
          <div className="pb-20 xl:pb-[150px]">
            {/* Section Container */}
            <div className="global-container">
              <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20 xl:gap-28 xxl:gap-32">
                {/* Content Left Block */}
                <div
                  className="jos  order-2 overflow-hidden rounded-md md:order-1"
                  data-jos_animation="fade-left"
                >
                  <img
                    src="https://plus.unsplash.com/premium_photo-1681400548054-93f9d085a872?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3F1YXJlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D"
                    alt="content-img-1"
                    width="526"
                    height="450"
                    className="h-auto w-full"
                  />
                </div>
                {/* Content Left Block */}
                {/* Content Right Block */}
                <div
                  className="jos order-1 md:order-2"
                  data-jos_animation="fade-right"
                >
                  {/* Section Content Block */}
                  <div className="mb-6">
                    <h2>Standing at the forefront of professional services</h2>
                  </div>
                  {/* Section Content Block */}
                  <div className="text-lg leading-[1.4] lg:text-[21px]">
                    <p className="mb-7 last:mb-0">
                      <span className=" font-bold font-Satoshi">
                        Menlo
                        <span className="text-sky-500 font-Clash font-[600]">
                          cloud
                        </span>
                      </span>{" "}
                      is a pioneering professional services firm driving value
                      through integrating business, technology, and human
                      elements.
                    </p>
                    <p className="mb-7 last:mb-0">
                      From strategy, development to digital product creation and
                      beyond, we offer a comprehensive range of services
                      designed to fast-track your vision with practical,
                      integrated solutions. We attentively listen and share our
                      expertise throughout the process, equipping your teams to
                      sustain progress long after our involvement.
                    </p>
                  </div>
                </div>
                {/* Content Right Block */}
              </div>
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: Content Section End_1 :::... */}

        {/*...::: Content Section Start_2 :::... */}
        <section id="content-section-2">
          {/* Section Spacer */}
          <div className="pb-20 xl:pb-[150px]">
            {/* Section Container */}
            <div className="global-container">
              <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20 xl:grid-cols-[minmax(0,_1.2fr)_1fr] xl:gap-28 xxl:gap-32">
                {/* Content Left Block */}
                <div
                  className="jos order-2 overflow-hidden rounded-md"
                  data-jos_animation="fade-left"
                >
                  <img
                    src="https://plus.unsplash.com/premium_photo-1681400548054-93f9d085a872?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3F1YXJlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D"
                    alt="content-img-2"
                    width="526"
                    height="450"
                    className="h-auto w-full"
                  />
                </div>
                {/* Content Left Block */}
                {/* Content Right Block */}
                <div className="jos order-1" data-jos_animation="fade-right">
                  {/* Section Content Block */}
                  <div className="mb-6">
                    <h2> Required by Everyone, Everywhere</h2>
                  </div>
                  {/* Section Content Block */}
                  <div className="text-lg leading-[1.4] lg:text-[21px]">
                    <p className="mb-7 last:mb-0">
                      Artificial Intelligence (AI), Machine Learning (ML), and
                      Data Science are no longer just technological luxuries but
                      essential tools across all sectors.
                    </p>

                    <div className="text-lg leading-[1.4] lg:text-[21px]">
                      <p className="mb-7 last:mb-0">
                        The necessity of these technologies extends beyond
                        specific industries; they are crucial for everyone,
                        everywhere and are pivotal in addressing complex
                        challenges and seizing new opportunities. As digital
                        transformation accelerates, embracing these technologies
                        becomes indispensable for achieving efficiency,
                        fostering growth, and staying competitive in an
                        increasingly data-driven world.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Content Right Block */}
              </div>
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: Content Section End :::... */}

        {/*...::: Funfact Section Start :::... */}
        <section id="funfact-section">
          <div className="mx-auto max-w-[1500px] px-5">
            <div className="jos grid grid-cols-1 overflow-hidden rounded-[30px] bg-black lg:rounded-[50px] xl:grid-cols-[minmax(400px,_1fr)_1.5fr] xxl:grid-cols-[1fr_minmax(800px,_1fr)]">
              {/* Funfact Left Block */}
              <div className="object-fill w-full relative overflow-hidden rounded-[30px] lg:rounded-[50px]">
                <img
                  src="https://images.unsplash.com/photo-1667035100694-ff123f76f17d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Description"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Video Play Button */}

                {/* Video Play Button */}
              </div>

              {/* Funfacct Left Block */}

              {/* Funfact Right Block */}
              <div className="self-center px-6 py-16 sm:py-20 md:px-16 xl:px-10 xl:py-24 xxl:py-32 xxl:pl-16 xxl:pr-28">
                {/* Section Content Block */}
                <div className="mb-8 lg:mb-16 xl:mb-6">
                  <h2 className="text-white">
                    Industry specific usage with AI & ML
                  </h2>
                </div>
                {/* Section Content Block */}
                <div className="text-left text-lg leading-[1.4] text-white lg:text-[21px]">
                  <p className="mb-7 last:mb-0">
                    <span className="font-bold font-Satoshi">
                      Menlo
                      <span className="text-sky-500 font-Clash font-[600]">
                        cloud
                      </span>{" "}
                    </span>
                    offers a wealth of experience and measurable success in your
                    field, while also sharing insights from cross-industries to
                    help you discover novel ways to adapt and lead.
                  </p>
                </div>
                {/* Horizontal Separator */}
                <div className="my-14 h-[1px] w-full bg-colorCodGray"></div>
                {/* Counter Scroll */}
                <div className="jos brand-slider" data-jos_animation="fade">
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    autoplay={{
                      delay: 4000,
                      disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    loop={true}
                    breakpoints={{
                      768: {
                        slidesPerView: 3,
                      },
                      992: {
                        slidesPerView: 3,
                      },
                      1200: {
                        slidesPerView: 3,
                      },
                    }}
                    className=""
                  >
                    <SwiperSlide>
                      <div className="text-sm flex items-center text-gray-50">
                        <div className="size-7 flex items-center justify-center mr-1 bg-blue-500">
                          DA
                        </div>
                        <p> Data & Analytics</p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="text-sm flex items-center text-gray-50">
                        <div className="size-7 flex items-center justify-center mr-1 bg-blue-500">
                          AI
                        </div>
                        <p> Artificial Intelligence</p>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="text-sm flex items-center text-gray-50">
                        <div className="size-7 flex items-center justify-center mr-1 bg-blue-500">
                          CM
                        </div>
                        <p>Cloud Modernisation</p>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="text-sm flex items-center text-gray-50">
                        <div className="size-7 flex items-center justify-center mr-1 bg-blue-500">
                          OC
                        </div>
                        <p> Organizational Change</p>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="text-sm flex items-center text-gray-50">
                        <div className="size-7 flex items-center justify-center mr-1 bg-blue-500">
                          SI
                        </div>
                        <p> System Implementation</p>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="text-sm flex items-center text-gray-50">
                        <div className="size-7 flex items-center justify-center mr-1 bg-blue-500">
                          SE
                        </div>
                        <p> Software Engineering</p>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
                {/* Counter Scroll */}
              </div>
              {/* Funfact Right Block */}
            </div>
          </div>
        </section>

        <section className="my-28">
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

        {/*...::: FAQ Section Start :::... */}
        <section className="faq-section mt-40">
          {/* Section Spacer */}
          <div className="pb-20 xl:pb-[150px]">
            {/* Section Container */}
            <div className="global-container">
              <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2">
                {/* FAQ Left Block */}
                <div
                  className="jos flex flex-col"
                  data-jos_animation="fade-right"
                >
                  {/* Section Content Block */}
                  <div className="mb-6">
                    <div className="mx-auto md:mx-0 md:max-w-none">
                      <h2>Freely ask us for more information</h2>
                    </div>
                  </div>
                  {/* Section Content Block */}
                  <div className="text-lg leading-[1.4] lg:text-[21px]">
                    <p className="mb-7 last:mb-0">
                      Our AI, ML and Data Analytics solutions can be quickly
                      deployed, enabling companies or individuals to start
                      benefiting from its capabilities without lengthy setup and
                      development times in fast-paced industries.
                    </p>
                    <button className="button mt-5 rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-[#2962FF] hover:border-[#2962FF] hover:text-white">
                      Ask us more Questions
                    </button>
                  </div>
                </div>
                {/* FAQ Left Block */}

                {/* FAQ Right Block */}
                <div
                  className="jos md:ml-10 lg:ml-20 xl:ml-32"
                  data-jos_animation="fade-left"
                >
                  {/* Accordion*/}
                  <ul className="accordion">
                    {/* Accordion items */}
                    <li
                      className={`accordion-item border-b-[1px] border-[#DBD6CF] pb-6 pt-6 first:pt-0 last:border-b-0 last:pb-0 ${
                        activeIndex === 0 ? "active" : ""
                      }`}
                      onClick={() => handleAccordion(0)}
                    >
                      <div className="accordion-header flex items-center justify-between font-dmSans text-xl font-bold leading-[1.2] -tracking-[0.5px] text-black lg:text-[24px]">
                        <p>How can AI benefit my business?</p>
                        <div className="accordion-icon">
                          <img
                            src="/assets/img_placeholder/plus.svg"
                            width={24}
                            height={24}
                            alt="plus"
                          />
                        </div>
                      </div>
                      <div className="accordion-content text-[#2C2C2C]">
                        <p>
                          It can significantly enhance business operations by
                          uncovering actionable insights, can optimize
                          workflows, predict trends, and personalize customer
                          experiences and much more.
                        </p>
                      </div>
                    </li>
                    {/* Accordion items */}
                    {/* Accordion items */}
                    <li
                      className={`accordion-item border-b-[1px] border-[#DBD6CF] pb-6 pt-6 first:pt-0 last:border-b-0 last:pb-0 ${
                        activeIndex === 1 ? "active" : ""
                      }`}
                      onClick={() => handleAccordion(1)}
                    >
                      <div className="accordion-header flex items-center justify-between font-dmSans text-xl font-bold leading-[1.2] -tracking-[0.5px] text-black lg:text-[24px]">
                        <p>What are the common challenges ?</p>
                        <div className="accordion-icon">
                          <img
                            src="/assets/img_placeholder/plus.svg"
                            width={24}
                            height={24}
                            alt="plus"
                          />
                        </div>
                      </div>
                      <div className="accordion-content text-[#2C2C2C]">
                        <p>
                          Having accurate and sufficient data is crucial for
                          effective AI and ML models, Integration with existing
                          systems and ensuring that stakeholders understand and
                          can act on data insights.
                        </p>
                      </div>
                    </li>
                    {/* Accordion items */}
                    {/* Accordion items */}
                    <li
                      className={`accordion-item border-b-[1px] border-[#DBD6CF] pb-6 pt-6 first:pt-0 last:border-b-0 last:pb-0 ${
                        activeIndex === 2 ? "active" : ""
                      }`}
                      onClick={() => handleAccordion(2)}
                    >
                      <div className="accordion-header flex items-center justify-between font-dmSans text-xl font-bold leading-[1.2] -tracking-[0.5px] text-black lg:text-[28px]">
                        <p>How to handle data privacy and security ?</p>
                        <div className="accordion-icon">
                          <img
                            src="/assets/img_placeholder/plus.svg"
                            width={24}
                            height={24}
                            alt="plus"
                          />
                        </div>
                      </div>
                      <div className="accordion-content text-[#2C2C2C]">
                        <p>
                          Implementing robust data encryption, access controls,
                          and anonymization techniques to safeguard personal
                          data. Compliance with regulations such as GDPR and
                          CCPA is crucial.
                        </p>
                      </div>
                    </li>
                  </ul>
                  {/* Accordion*/}
                </div>
                {/* FAQ Right Block */}
              </div>
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: FAQ Section End :::... */}

        {/*...::: Testimonial Section Start :::... */}
        <section className="testimonial-section">
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

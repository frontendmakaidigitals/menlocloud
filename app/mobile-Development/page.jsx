"use client";
import Footer_01 from "@/components/footer/Footer_01";
import Header_01 from "@/components/header/Header_01";
import "swiper/css/navigation";
import "swiper/css";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { GoArrowRight } from "react-icons/go";
import SwiperNavButtons from "@/components/SwiperNavButton";
import { motion } from "framer-motion";
import { Timeline } from "@/components/ui/timeline";
import Link from "next/link";
const sectors = [
  {
    name: "E-Learning App",
    color: "#FFCDD2",
    tags: ["Native-IOS", "Android"],
    img: "/assets/img_placeholder/app-image/Elearning.png",
  },
  {
    name: "Dating App",
    color: "#FFCDD2",
    tags: ["React Native", "Node Js", "React Js"],
    img: "/assets/img_placeholder/app-image/Dating.png",
  },
  {
    name: "Fitness Tracking App",
    color: "#FFCDD2",
    tags: ["Native-IOS", "Android"],
    img: "/assets/img_placeholder/app-image/Fitness Tracker.png",
  },
  {
    name: "Social Media App",
    color: "#FFCDD2",
    tags: ["React Native", "Node Js", "React Js"],
    img: "/assets/img_placeholder/app-image/SocialMedia.png",
  },
  {
    name: "Fintech",
    color: "#FFCDD2",
    tags: ["Native-IOS", "Android"],
    img: "/assets/img_placeholder/app-image/Fintech.png",
  },
  {
    name: "Healthcare App",
    color: "#FFCDD2",
    tags: ["React Native"],
    img: "/assets/img_placeholder/app-image/Healthcare.png",
  },
  {
    name: "Agritech App",
    color: "#FFCDD2",
    tags: ["React Native", "Node Js"],
    img: "/assets/img_placeholder/app-image/Aggriculture.png",
  },
];
const industryTabs = [
  {
    name: "Edtech",
    img: "/assets/img_placeholder/app-image/Elearning.png",
  },
  {
    name: "Dating",
    img: "/assets/img_placeholder/app-image/Dating.png",
  },
  {
    name: "Agritech",
    img: "/assets/img_placeholder/app-image/Aggriculture.png",
  },
  {
    name: "Social Media",
    img: "/assets/img_placeholder/app-image/SocialMedia.png",
  },
  { name: "Gaming" },
  {
    name: "Fintech",
    img: "/assets/img_placeholder/app-image/Fintech.png",
  },
  { name: "Enterprise" },
  {
    name: "Hospital & Healthcare",
    img: "/assets/img_placeholder/app-image/Healthcare.png",
  },
  { name: "OTT" },
  { name: "Logistics & Transportation" },
  {
    name: "Health, Wellness & Fitness",
    img: "/assets/img_placeholder/app-image/Fitness Tracker.png",
  },
];
const mobileServices = [
  {
    title: "App prototyping & Design",
    icon: "/assets/img_placeholder/prototype.png",
    description:
      "Creating a prototype and design is crucial for giving users a great experience. Our experienced mobile app developers mix creativity with designs that focus on users, making prototypes that match your ideas.",
  },
  {
    title: "App Development",
    icon: "/assets/img_placeholder/development.png",
    description:
      "Your unique app ideas combined with our app development prowess get millions of downloads on the App Store and Play Store. We're experts in iOS, Android, and React Native development.",
  },
  {
    title: "App Deployment",
    icon: "/assets/img_placeholder/deployment.png",
    description:
      "Right from inception till deployment, we take care of it. Our expert team is experienced in getting an app submitted on AppStore & PlayStore and also get them live, so you’re ready to take it to the market.",
  },
  {
    title: "App Testing",
    icon: "/assets/img_placeholder/testing.png",
    description:
      "Just like salt is essential for food, app testing is a must for mobile app development services. We not only create apps without bugs but also assist you through the app store approval process.",
  },
  {
    title: "App Maintenance",
    icon: "/assets/img_placeholder/maintenance.png",
    description:
      "As part of our mobile app development services, we assist clients in maintaining and improving app performance in the ever-evolving tech landscape.",
  },
];
const data = [
  {
    title: "Requirements Gathering",
    content: (
      <div>
        <p className="text-neutral-800 text-xs md:text-lg  font-normal mb-2 lg:mb-2">
          We will gather your requirements to understand the project
          specifications.
        </p>
        <div className="w-full">
          <img
            src="https://img.freepik.com/free-vector/group-friends-sitting-table-talking-drinking-coffee-tea-tiny-people-friends-meeting-cheer-up-friend-friendship-support-concept_335657-623.jpg"
            alt="startup template"
            className="rounded-lg object-cover h-60 md:h-44 lg:h-[30rem] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    title: " Scope of Work & Estimates",
    content: (
      <div>
        <p className="text-neutral-800 text-xs md:text-lg  font-normal mb-2 lg:mb-2">
          We will evaluate the project internally with our development team to
          come up with a proposal that details the project timelines & costs.
        </p>

        <div className="">
          <img
            src="https://img.freepik.com/free-vector/team-leader-teamwork-concept_74855-6671.jpg?size=626&ext=jpg&ga=GA1.1.1819120589.1727308800&semt=ais_hybrid"
            alt="startup template"
            className="rounded-lg object-cover h-60 md:h-44 lg:h-[30rem] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    title: " Contract Finalization",
    content: (
      <div>
        <p className="text-neutral-800 text-xs md:text-lg  font-normal mb-2 lg:mb-2">
          Once the proposal has been approved, we will share a statement of work
          that will detail the length of engagement, pricing, and payment terms.
        </p>

        <div className="">
          <img
            src="https://img.freepik.com/free-vector/customer-relationship-management-concept-illustration_114360-7652.jpg"
            alt="startup template"
            className="rounded-lg object-cover h-60 md:h-44 lg:h-[30rem] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Kickoff Call",
    content: (
      <div>
        <p className="text-neutral-800 text-xs md:text-lg  font-normal mb-2 lg:mb-2">
          We will initiate an introduction call with a Project Manager to
          kick-off the project.
        </p>

        <div className="">
          <img
            src="https://img.freepik.com/free-vector/call-center-concept-illustration_114360-2045.jpg"
            alt="startup template"
            className="rounded-lg object-cover h-60 md:h-44 lg:h-[30rem] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    title: "On-Going Work",
    content: (
      <div>
        <p className="text-neutral-800 text-xs md:text-lg  font-normal mb-2 lg:mb-2">
          The development team will start working on your project for a minimum
          of 8 hours/5 days a week. We will share detailed work logs and project
          updates on a weekly basis or as suitable for you.
        </p>

        <div className="">
          <img
            src="https://img.freepik.com/free-vector/process-concept-illustration_114360-4229.jpg"
            alt="startup template"
            className="rounded-lg object-cover h-60 md:h-44 lg:h-[30rem] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
];
function GenAI() {
  const swiperRef = useRef(null);
  const [tabId, setTabId] = useState(0);
  return (
    <>
      <Header_01 />
      <main className="main-wrapper relative ">
        <div className="w-full h-auto lg:h-[85vh] xl:h-screen bg-no-repeat bg-center bg-cover bg-[url('https://img.freepik.com/free-vector/white-abstract-background-3d-paper-style_23-2148403777.jpg?t=st=1727430799~exp=1727434399~hmac=3771cb4fc6a037df42da22cca671df6dc2f461ccdd02b7f4c77e68b204c3f452&w=1380')]">
          <div className="bg-gradient-to-b w-full h-full from-gray-800/50 via-transparent to-gray-700/40">
            <div className="global-container  flex flex-col lg:flex-row items-center justify-around  w-full h-full">
              <div className="mt-32 xl:mt-0 w-full lg:w-2/3">
                <p className="font-Satoshi text-3xl xl:text-4xl xxl:text-6xl w-full lg:w-2/3 font-bold text-center lg:text-start text-black">
                  Custom Mobile App Development Services
                </p>
                <p className="mt-3 font-Satoshi font-semibold leading-relaxed text-sm xl:text-lg text-gray-800 text-center lg:text-start w-full lg:w-2/4">
                  Building highly scalable apps may not be easy, but using them
                  should be
                </p>

                <div className="w-full flex justify-center lg:justify-start">
                  <Link href={`/contact`}>
                    <button className="text-gray-100 overflow-hidden group rounded-lg relative  py-2 px-5 bg-sky-500   mt-5">
                      <span className="relative z-10 font-Satoshi font-medium text-xl">
                        Know more
                      </span>
                      <div className="size-3 bg-black absolute top-full group-hover:scale-[60] transition-all duration-500 left-1/2 -translate-x-1/2 rounded-full" />
                    </button>
                  </Link>
                </div>
              </div>

              <div
                className="w-full xl:w-[230px] xxl:w-[280px] lg:m-0 relative
              "
              >
                <img
                  className="relative z-[10]"
                  src={`/assets/img_placeholder/heroIphone.png`}
                />
              </div>
            </div>
          </div>
        </div>

        <section className="my-20">
          <div className="w-full global-container lg:w-2/3 flex flex-col justify-center items-center">
            <p className="global-container text-3xl  lg:text-6xl  font-Satoshi font-[600] text-center">
              Buid your Dream
              <span className="bg-gradient-to-r  font-Telma px-1 from-blue-600 to-indigo-400 bg-clip-text text-transparent">
                {" "}
                App{" "}
              </span>
            </p>
          </div>

          <div className="w-full global-container flex justify-center items-center gap-14 mt-20">
            <motion.div
              whileInView={{ opacity: [0, 1], x: [200, 0] }}
              className="w-full xl:w-[230px] xxl:w-[260px]"
            >
              <img src={`/assets/img_placeholder/sec-2-img-1.png`} />
            </motion.div>
            <motion.div className="w-full xl:w-[250px] xxl:w-[280px]">
              <img src={`/assets/img_placeholder/sec-2-img-2.png`} />
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1], x: [-200, 0] }}
              className="w-full xl:w-[230px] xxl:w-[260px]"
            >
              <img src={`/assets/img_placeholder/sec-2-img-3.png`} />
            </motion.div>
          </div>
        </section>

        <section className="my-28 global-container">
          <div>
            <div className="flex  justify-between items-center">
              <p className="text-3xl w-full text-center lg:text-start  lg:text-6xl  font-Satoshi font-[600]  lg:w-2/3">
                Trusted By
                <span className="bg-gradient-to-r font-Telma px-1 from-blue-600 to-indigo-400 bg-clip-text text-transparent">
                  Everyone
                </span>{" "}
              </p>
              <div className="hidden lg:flex">
                <SwiperNavButtons swiperRef={swiperRef} />
              </div>
            </div>
            <Swiper
              ref={swiperRef}
              spaceBetween={20}
              slidesPerView={1.1}
              breakpoints={{
                320: {
                  slidesPerView: 1.3, // 2 slides for screens >= 640px
                },
                768: {
                  slidesPerView: 3.3, // 3 slides for screens >= 768px
                },
                1024: {
                  slidesPerView: 3.3, // 4 slides for screens >= 1024px
                },
                1604: {
                  slidesPerView: 3.3, // 4 slides for screens >= 1024px
                },
              }}
              className=" mt-5 xl:mt-10"
            >
              {sectors.map((elem, index) => {
                return (
                  <SwiperSlide key={index} className="  w-full cursor-grab ">
                    <motion.div
                      whileHover={{ backgroundColor: elem.hoverColor }}
                      className={` px-5 py-7 rounded-xl bg-slate-100 `}
                    >
                      <div className="min-h-[200px] ">
                        <p className="font-medium text-sky-950 font-Satoshi text-lg flex items-center gap-2">
                          Industry {index + 1}{" "}
                          <span className="text-2xl">
                            <GoArrowRight />
                          </span>
                        </p>
                        <p className="xl:text-lg xxl:text-2xl font-Satoshi text-sky-900 mt-2 font-semibold">
                          {elem.name}
                        </p>
                        <div className="flex items-center flex-wrap gap-3 mt-4">
                          {elem.tags.map((tag, index) => (
                            <p
                              key={index}
                              className="px-3 font-Satoshi font-[400] rounded-full py-1 bg-lime-400"
                            >
                              {tag}
                            </p>
                          ))}
                        </div>
                      </div>
                      <motion.div
                        whileInView={{ y: [200, 0] }}
                        viewport={{ once: true }}
                        transition={{ staggerChildren: 0.5 }}
                        className="w-full flex justify-center items-center"
                      >
                        <img
                          className="xl:w-[220px] xxl:w-[250px]"
                          src={elem.img}
                        />
                      </motion.div>
                    </motion.div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </section>
        <section className="mt-28 bg-gradient-to-bl from-rose-100 py-20 to-teal-100">
          <div className="global-container w-full place-items-center grid grid-cols-1 gap-y-7 lg:gap-7 lg:grid-cols-4">
            <motion.div className="w-full  order-last lg:order-1 ">
              <img src={industryTabs[tabId].img} />
            </motion.div>
            <div className="col-span-3 ">
              <p className="text-3xl w-full text-center lg:text-start  lg:text-6xl  font-Satoshi font-bold">
                Industries We Serve
              </p>
              <p className="font-Satoshi text-center lg:text-start font-medium text-lg mt-5">
                We’ve worked with hundreds of clients across the globe, served
                them our mobile app development services and our major clientele
                belongs to the following industries:
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3 mt-10">
                {industryTabs.map((elem, index) => (
                  <button
                    key={index}
                    onClick={() => setTabId(index)}
                    className={`px-5 overflow-hidden font-Satoshi font-[400] text-xl relative group py-2 border  delay-100 rounded-full ${tabId == index ? "bg-sky-400" : "border-gray-900 hover:border-transparent"}`}
                  >
                    <span
                      className={`relative z-10  ${tabId == index ? "text-slate-100" : "group-hover:text-slate-100"}`}
                    >
                      {elem.name}
                    </span>
                    <div className="size-1 absolute top-full bg-sky-500  rounded-full transition-all duration-500 group-hover:scale-[90]  left-1/2 -translate-x-1/2" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="mb-28 py-20 bg-black">
          <div className="global-container grid grid-cols-1 lg:grid-cols-2 place-items-center gap-7">
            <div>
              <p className="text-3xl text-center lg:text-start lg:text-6xl text-gray-50 font-Satoshi font-[600]">
                Your App, Your Way
              </p>
              <p className="mt-5 text-center lg:text-start font-Satoshi text-gray-200 font-medium text-xl lg:text-2xl">
                Explore Our Development Options
              </p>
              <div className="w-full flex  justify-center lg:justify-start">
                <Link href={"/contact"}>
                  <button className="text-gray-100 overflow-hidden group rounded-lg relative  py-2 px-5 bg-slate-100  mt-5">
                    <span className="relative text-black z-10 font-Satoshi font-medium text-xl">
                      Know more
                    </span>
                    <div className="size-3 bg-sky-500 absolute top-full group-hover:scale-[60] transition-all duration-300 left-1/2 -translate-x-1/2 rounded-full" />
                  </button>
                </Link>
              </div>
            </div>

            <div className="">
              <img src={"/assets/img_placeholder/app-Options.jpg"} />
            </div>
          </div>
        </section>
        <section className="my-28 relative">
          <div className="w-full flex glboal-container justify-center mb-14">
            <p className="text-3xl w-full text-center  lg:text-6xl  font-Satoshi font-[600]  lg:w-2/3">
              <span className="bg-gradient-to-r font-Telma px-1 from-blue-600 to-indigo-400 bg-clip-text text-transparent">
                Mobile App
              </span>{" "}
              Development Services
            </p>
          </div>
          <div className="global-container grid grid-cols-1 lg:grid-cols-3 place-items-end">
            <div className=" flex flex-col gap-10 col-span-2">
              {mobileServices.map((elem, index) => (
                <div key={index} className="">
                  <div className="flex items-center gap-3">
                    <div className="size-16 p-3 overflow-hidden bg-lime-300 rounded-full">
                      <img src={elem.icon} />
                    </div>
                    <p className="font-Satoshi font-semibold text-2xl">
                      {elem.title}
                    </p>
                  </div>
                  <div>
                    <p className="font-Satoshi mt-4 font-medium text-md">
                      {elem.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className=" transition-all duration-700  w-full xl:w-[300px] xxl:w-[350px]">
              <img
                src={"/assets/img_placeholder/app-image/Fitness Tracker.png"}
              />
            </div>
          </div>
        </section>

        <section className=" my-28">
          <div className="w-full global-container lg:w-2/3 flex flex-col justify-center items-center">
            <h2 className=" text-3xl  lg:text-6xl  font-Satoshi font-[600] text-center">
              Our Process - Your{" "}
              <span className="bg-gradient-to-r  font-Telma px-1 from-blue-600 to-indigo-400 bg-clip-text text-transparent">
                {" "}
                App Projects{" "}
              </span>{" "}
            </h2>
            <p className="text-center mt-2 text-md">
              We have a simple process to collaborate with our clients:
            </p>
          </div>
          <Timeline data={data} />
        </section>

        <section className="my-10 py-20 bg-center bg-cover bg-no-repeat rounded-2xl global-container bg-black">
          <div className="">
            <p className="global-container mb-2 text-3xl text-gray-100 lg:text-5xl tracking-tight font-Satoshi font-bold w-full lg:w-2/3 text-center">
              Schedule a consultation to assess your{" "}
              <span className="bg-gradient-to-r font-Telma px-1 from-blue-600 to-indigo-400 bg-clip-text text-transparent">
                {" "}
                Mobile App challenges.
              </span>{" "}
            </p>
            <p className="global-container text-center w-full lg:w-2/3 font-Satoshi text-md text-gray-200">
              Learn how we can tailor our data analytics solutions to unlock the
              potential of your business’s data.
            </p>
          </div>
          <div className="mt-5  w-full flex justify-center ">
            <Link href={`/contact`}>
              <button className="text-gray-900 overflow-hidden group rounded-lg relative font-Satoshi font-semibold py-2 px-5 bg-gray-200">
                <p className="relative z-10">Lets Connect</p>
                <div className="bg-sky-500 w-1 h-1 group-hover:scale-[50] absolute -bottom-1 left-1/2 -translate-1/2 rounded-full transition-all duration-300" />
              </button>
            </Link>
          </div>
        </section>
      </main>
      <Footer_01 />
    </>
  );
}

export default GenAI;

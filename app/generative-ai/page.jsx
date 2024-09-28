"use client";
import Footer_01 from "@/components/footer/Footer_01";
import Header_01 from "@/components/header/Header_01";
import "swiper/css/navigation";
import "swiper/css";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AnimatePresence, motion } from "framer-motion";
import { Timeline } from "@/components/ui/timeline";
import SwiperNavButtons from "@/components/SwiperNavButton";
import Link from "next/link";
const Aiservices = [
  {
    name: "Gen Ai Lanuchpad",
    color: "#FFA726",
    img: "https://cdn3d.iconscout.com/3d/premium/thumb/launch-3d-icon-download-in-png-blend-fbx-gltf-file-formats--rocket-startup-spaceship-web-design-pack-development-icons-7250849.png?f=webp",
    description:
      "Learn how to use Gen AI to bring real value to your business. You get fundamental training, art-of-the-possible workshops, a maturity assessment, and identification of the most valuable Gen AI use case, along with a plan for how to implement it.",
  },
  {
    name: "Gen AI Roadmap",
    color: "#42A5F5",
    img: "https://cdn3d.iconscout.com/3d/premium/thumb/roadmap-3d-icon-download-in-png-blend-fbx-gltf-file-formats--work-map-route-location-strategy-development-pack-design-icons-5624882.png?f=webp",
    description:
      "Embrace Gen AI with confidence.Get fundamental training, a maturity assessment, art-of-the-possible workshops, architecture design and cost calculator, and a roadmap to implement your first Gen AI use case and a framework for driving organizational change.",
  },
  {
    name: "Gen AI Chatbot",
    color: "#7E57C2",
    img: "https://cdn3d.iconscout.com/3d/premium/thumb/chat-3d-icon-download-in-png-blend-fbx-gltf-file-formats--message-chatting-bubble-speech-communication-pack-icons-5602882.png?f=webp",
    description:
      "Get an interactive, private chatbot designed for your specific use case. The chatbot uses your proprietary data so it can understand and leverage your institutional knowledge when users interact with it.",
  },
];

const parentAnimate = {
  initial: { scale: 1 },
  whileHover: { scale: 1.05, transition: { duration: 0.3 } },
  exit: { scale: 0 },
};
const titleAnimate = {
  initial: { fontSize: "2.3rem" },
  whileHover: { fontSize: "1.8rem", transition: { duration: 0.3 } },
  exit: { scale: 0 },
};

const childAnimate = {
  initial: { maxHeight: 0, opacity: 0 },
  whileHover: { maxHeight: 100, opacity: 1, transition: { duration: 0.3 } },
  exit: { maxHeight: 0, opacity: 0 },
};
const data = [
  {
    title: "Fundamental Training",
    content: (
      <div>
        <p className="text-neutral-800 text-xs md:text-lg  font-normal mb-2 lg:mb-2">
          Get everyone onboard and equip technical and non-technical employees
          with a solid foundation in Gen AI fundamentals with virtual training
          and resources.
        </p>
        <div className="w-full">
          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="startup template"
            className="rounded-lg object-cover h-60 md:h-44 lg:h-[30rem] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Maturity Assessment",
    content: (
      <div>
        <p className="text-neutral-800 text-xs md:text-lg  font-normal mb-2 lg:mb-2">
          Uncover your Gen AI capabilities through our maturity assessment and
          benchmarking process. Learn where you stand and how you stack up
          against others in your industry.
        </p>

        <div className="">
          <img
            src="https://images.unsplash.com/photo-1581091877018-dac6a371d50f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="startup template"
            className="rounded-lg object-cover h-60 md:h-44 lg:h-[30rem] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Art-of-the-Possible Workshops",
    content: (
      <div>
        <p className="text-neutral-800 text-xs md:text-lg  font-normal mb-2 lg:mb-2">
          Our AI experts guide you through the use case development process to
          tie Gen AI use cases to corporate initiatives and then select your
          starting use case.
        </p>

        <div className="">
          <img
            src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="startup template"
            className="rounded-lg object-cover h-60 md:h-44 lg:h-[30rem] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Actionable Proposal",
    content: (
      <div>
        <p className="text-neutral-800 text-xs md:text-lg  font-normal mb-2 lg:mb-2">
          Get a focused plan for your recommended Gen AI use case, including a
          tactical implementation plan and business requirements document.
        </p>

        <div className="">
          <img
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1720&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="startup template"
            className="rounded-lg object-cover h-60 md:h-44 lg:h-[30rem] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
];
const steps = [
  {
    title: " Generative AI  Development",
    icon: "https://cdn3d.iconscout.com/3d/premium/thumb/web-development-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--html-logo-technology-design-pack-business-illustrations-4496032.png?f=webp",
    description:
      "While necessary, the investment in generative AI is risky, especially without the right use case in mind. Working alongside your business stakeholders, we define strategic use cases for generative AI that will bring lasting value. ",
  },
  {
    title: " Generative AI Strategy",
    icon: "https://cdn3d.iconscout.com/3d/premium/thumb/strategy-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--business-roadmap-roadman-idea-pack-illustrations-3010218.png",
    description:
      "We’ll uncover the possibilities of generative AI for your organization and then provide a comprehensive and tangible plan — including the people, processes, technology, and data — to achieve that vision. ",
  },
  {
    title: " Generative AI Execution",
    icon: "https://cdn3d.iconscout.com/3d/premium/thumb/analysis-report-3d-icon-download-in-png-blend-fbx-gltf-file-formats--analytics-logo-analytic-pie-chart-statistics-seo-web-pack-icons-4497657.png",
    description:
      "We are not only advisors; we have AI specialists with the experience and knowledge of emerging technologies to build the best solutions for your team. Our engineers align themselves with your business objectives to build innovative solutions that stand the test of time.",
  },
];

const roadmap = [
  {
    name: "Current State Assessment",
    description:
      "Including business drivers and risks plus Gen AI Maturity and Data Readiness Assessments",
  },
  {
    name: "Change Management Framework",
    description:
      "Gen AI training, updates to acceptable use and governance policies, and Gen AI blueprints",
  },
  {
    name: "Future State Guidance",
    description:
      "Including Gen AI use case prioritization, architecture design, and solution cost calculator",
  },
  {
    name: "Actionable Next Steps",
    description:
      "With a business requirements document, implementation plan, SOW, and communication plan",
  },
];
const chatBot = [
  {
    name: "Efficiency and Accuracy",
    description:
      "Conversation and content creation capabilities are fine-tuned to meet specific business needs, understanding and generating text that aligns with your brand, messaging, processes, and industry jargon.",
  },
  {
    name: "Privacy and Security",
    description:
      "Every input to and output from the chatbot remains securely within your organization’s domain.",
  },
  {
    name: "Regulation Compliance",
    description:
      "Data is processed in the correct locale to comply with regulations around the storage, movement, and processing of data.",
  },
  {
    name: "Jumpstart Gen AI Capabilities",
    description:
      "Quickly gain momentum and trust across the organization, remove mystery around Gen AI, and inspire new use cases.",
  },
];
function GenAI() {
  const swiperRef = useRef(null);
  return (
    <>
      <Header_01 />
      <main className="main-wrapper relative ">
        <div className="w-full  h-[85vh] xl:h-screen bg-no-repeat bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1636690424408-4330adc3e583?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
          <div className="bg-gradient-to-b w-full h-full from-gray-800/50 via-transparent to-gray-700/40">
            <div className="global-container flex flex-col justify-around  w-full h-full">
              <div></div>
              <div></div>
              <div className="mt-32 xl:mt-0">
                <h2 className="font-Satoshi font-bold text-gray-950">
                  Generative AI
                </h2>
                <p className="mt-3 font-Satoshi font-semibold leading-relaxed text-sm xl:text-lg text-gray-800 w-full lg:w-2/4">
                  With a relentless focus on “why,” we combine our services to
                  discover, design, and build the most impactful outcomes for
                  you. We don’t come with predetermined processes. Rather, we
                  roll up our sleeves and craft practical, end-to-end solutions
                  in partnership with your teams.
                </p>
              </div>
            </div>
          </div>
        </div>
        <section className="global-container mt-20 grid grid-cols-1 lg:grid-cols-2  gap-10">
          <div className="xl:h-[650px] overflow-hidden bg-no-repeat bg-center bg-cover rounded-xl bg-[url('https://images.unsplash.com/photo-1677691824188-3e266886cb27?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"></div>
          <div className="flex flex-col justify-center items-start">
            <p className="text-3xl lg:text-5xl font-Satoshi font-bold">
              Pragmatically move from AI experimentation to execution.
            </p>
            <p className="text-md font-Satoshi font-medium mt-8">
              Our pragmatic, structured approach will help you move from
              prototype phase to strategic use of generative AI in your
              business. You will benefit from quick time to value with
              practically sized solutions, while building a foundation that
              allows you to remain nimble in an ever-changing landscape.
            </p>
            <p className="text-2xl font-Satoshi text-blue-500 font-semibold mt-8">
              Our philosophy drives long term success →
            </p>
            <ul className="list-disc px-4 mt-2 font-Satoshi font-medium">
              <li className="text-md mt-1">
                Everything starts with a strong data analytics foundation
              </li>
              <li className="text-md mt-1">
                AI should be part of your solution, not the solution
              </li>
              <li className="text-md mt-1"> Data literacy is paramount </li>
            </ul>
          </div>
        </section>
        <section className="my-20">
          <div className="w-full global-container lg:w-2/3 flex flex-col justify-center items-center">
            <p className="global-container text-3xl  lg:text-6xl  font-Satoshi font-[600] text-center">
              Generative AI
              <span className="bg-gradient-to-r  font-Telma px-1 from-blue-600 to-indigo-400 bg-clip-text text-transparent">
                {" "}
                Services{" "}
              </span>
            </p>
            <p className="text-center mt-1 text-md">
              Our generative AI services range from a readiness assessment and
              use case identification — to strategy and execution — to
              developing private corporate LLMs.
            </p>
          </div>

          <div className="global-container grid place-items-center grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            <AnimatePresence mode="wait">
              {Aiservices.map((service, index) => (
                <motion.div
                  variants={parentAnimate}
                  initial="initial"
                  whileHover="whileHover"
                  exit="exit"
                  key={index}
                  style={{ backgroundColor: service?.color }}
                  className="mt-10 border-[10px] cursor-pointer border-gray-200 group  rounded-2xl w-full lg:w-[350px] h-[450px]  relative overflow-hidden"
                >
                  <div className="size-36   absolute top-16 -translate-x-1/2 left-1/2 -translate-y-0">
                    <img className="w-full" src={service.img} />
                  </div>
                  <div className="size-4 group-hover:scale-[80] xxl:group-hover:scale-[110]  absolute transition-all duration-700  -top-4 -left-4 bg-gray-200 rounded-full"></div>
                  <div className="size-3 group-hover:scale-[90] xxl:group-hover:scale-[120] absolute transition-all duration-700 -top-4 -left-4 bg-white delay-200 rounded-full"></div>
                  <div className="w-full relative   z-10 h-full flex py-5 px-5 flex-col justify-end items-start">
                    <motion.p
                      variants={titleAnimate}
                      className="  pr-8 font-bold font-Satoshi leading-snug group-hover:text-gray-900 transition-all duration-500 text-gray-100"
                    >
                      {service.name}
                    </motion.p>
                    <motion.p
                      variants={childAnimate}
                      className="leading-snug  mt-1 overflow-hidden text-sm text-gray-200 group-hover:text-gray-800  transition-all duration-500"
                    >
                      {service.description}
                    </motion.p>
                    <div className="w-full flex justify-between items-center">
                      <button className="px-4 bg-lime-300 py-2 font-Satoshi font-semibold text-sm mt-2   rounded-full">
                        Learn more
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>
        <section className=" my-32">
          <div className="w-full global-container lg:w-2/3 flex flex-col justify-center items-center">
            <h2 className=" text-3xl  lg:text-6xl  font-Satoshi font-[600] text-center">
              The Essential{" "}
              <span className="bg-gradient-to-r  font-Telma px-1 from-blue-600 to-indigo-400 bg-clip-text text-transparent">
                {" "}
                Gen AI Strategy{" "}
              </span>{" "}
            </h2>
            <p className="text-center mt-2 text-md">
              Jumpstart your AI journey with this baseline strategy package.
              Identify the Gen AI use case that will provide the fastest
              time-to-value and get a plan to implement. How it works →
            </p>
          </div>
          <Timeline data={data} />
          <div className="global-container text-center w-full  lg:w-2/3 mt-32">
            <p className="text-center mb-10 text-xl font-Satoshi font-semibold">
              At the conclusion of the Enhanced Gen AI Strategy, you will get a
              use case roadmap and a framework for driving organizational change
              with AI.
            </p>
          </div>
          <div className="global-container mt-16 grid  grid-cols-1 gap-4 lg:grid-cols-2 xxl:grid-cols-4 ">
            {roadmap.map((road, index) => (
              <div
                key={index}
                className="px-6 py-6 shadow-md bg-gray-200 rounded-xl"
              >
                <p className="font-Satoshi font-bold text-lg">{road.name}</p>
                <p className="font-Satoshi font-medium text-md mt-2">
                  {road.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className=" py-20 w-full bg-center bg-no-repeat bg-cover bg-[url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] ">
          <div className="global-container w-full lg:w-2/3 flex flex-col justify-center text-center">
            <p className="text-gray-900 font-Satoshi font-bold text-2xl xl:text-4xl">
              The Gen AI Chatbot QuickStart
            </p>
            <p className="text-md text-gray-900 font-Satoshi mt-5 leading-snug">
              Leverage proprietary company information to address a specific Gen
              AI use case, such as meeting prep, content creation, augmented
              customer service, onboarding, and more.
            </p>
            <p className="text-2xl text-gray-900 mt-8 font-Satoshi font-semibold leading-snug">
              Why utilize a custom, private chatbot rather than a public LLM
              like ChatGPT?
            </p>
          </div>
          <ul className="list-disc w-full lg:w-2/3 grid global-container mt-10 gap-5 place-items-start grid-cols-1 xxl:grid-cols-2 text-gray-900">
            {chatBot.map((bot, index) => (
              <div key={index} className=" px-10 ">
                <li>
                  <p className="text-lg font-Satoshi font-bold">{bot.name}</p>
                  <p className="text-sm mt-1">{bot.description}</p>
                </li>
              </div>
            ))}
          </ul>
        </section>

        <section className="mt-20">
          <div className="w-full global-container lg:w-2/3 flex flex-col justify-center items-center">
            <p className="global-container text-3xl  lg:text-6xl  font-Satoshi font-[600] text-center">
              Work with a{" "}
              <span className="bg-gradient-to-r  font-Telma px-1 from-blue-600 to-indigo-400 bg-clip-text text-transparent">
                {" "}
                full-service{" "}
              </span>{" "}
              consultancy
            </p>
            <p className="text-center mt-1 text-md">
              We have the full range of knowledge and expertise necessary to
              help companies prepare for and implement generative AI into their
              data analytics ecosystem.
            </p>
          </div>
          <div className="global-container grid grid-cols-1 lg:grid-cols-3 place-items-start mb-28 mt-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className="border-b lg:border-b-0 lg:border-r px-6 py-10  border-dashed border-gray-700"
              >
                <p className="font-Satoshi font-bold text-2xl">{index + 1}</p>
                <p className="xxl:text-3xl font-bold font-Satoshi mt-5">
                  {step.title}
                </p>
                <p className="text-md font-Satoshi   font-medium mt-2">
                  {step.description}
                </p>

                <div className="size-40 mt-14">
                  <img src={step.icon} />
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="my-28 global-container">
          <div>
            <div className="flex  justify-between items-center">
              <p className="text-3xl w-full text-center lg:text-start  lg:text-6xl  font-Satoshi font-[600]  lg:w-2/3">
                Discover Our{" "}
                <span className="bg-gradient-to-r font-Telma px-1 from-blue-600 to-indigo-400 bg-clip-text text-transparent">
                  Stories{" "}
                </span>{" "}
              </p>
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
                1604: {
                  slidesPerView: 5, // 4 slides for screens >= 1024px
                },
              }}
              className=" mt-5 xl:mt-10"
            >
              {data.map((elem, index) => {
                return (
                  <SwiperSlide key={index} className="  w-full cursor-pointer ">
                    <motion.div
                      whileHover={{ backgroundColor: elem.hoverColor }}
                      className={` rounded-xl bg-slate-100`}
                    >
                      <div
                        className="w-full h-64 bg-no-repeat rounded-xl bg-center bg-cover "
                        style={{ backgroundImage: `url(${elem.img})` }}
                      ></div>
                      <div className="px-3 py-5">
                        <p>Author name </p>
                        <p className="xl:text-lg xxl:text-2xl font-Satoshi text-gray-900 mt-2 font-semibold">
                          {elem.title}
                        </p>
                        <p className="xl:text-sm xxl:text-lg font-Satoshi tracking-tight mt-2 font-medium">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
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
       
      </main>
      <Footer_01 />
    </>
  );
}

export default GenAI;

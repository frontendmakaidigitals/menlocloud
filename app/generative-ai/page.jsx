"use client";
import Footer_01 from "@/components/footer/Footer_01";
import Header_01 from "@/components/header/Header_01";
import "swiper/css/navigation";
import { FaArrowRightLong } from "react-icons/fa6";
import "swiper/css";
import { useEffect, useState } from "react";
import { BsHandIndexThumbFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { AnimatePresence, motion } from "framer-motion";
import { Timeline } from "@/components/ui/timeline";
import SwiperNavButtons from "@/components/SwiperNavButton";
import Link from "next/link";
const Aiservices = [
  {
    name: "Healthcare",
    color: "#FF5252",
    img: "https://static.vecteezy.com/system/resources/previews/011/781/824/original/healthcare-3d-render-icon-illustration-png.png",
    description: "Accurate and timely diagnosis",
    sol: "Ai-assisted medical imaging analysis",
  },
  {
    name: "Finance",
    color: "#7C4DFF",
    img: "https://cdn3d.iconscout.com/3d/premium/thumb/finance-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--invoice-bill-receipt-online-money-service-pack-marketing-branding-illustrations-4159684.png",
    description: "Risk Management and  fraud detection",
    sol: "Ai-powered predictive analytics",
  },
  {
    name: "Retail",
    color: "#64B5F6",
    img: "https://cdn3d.iconscout.com/3d/premium/thumb/shopping-store-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--shop-e-commerce-pack-illustrations-3728231.png",
    description: "Personlized customer experience",
    sol: "Ai-driven recommendation engines",
  },
  {
    name: "Manufacturing",
    color: "#EF9A9A",
    img: "https://static.vecteezy.com/system/resources/previews/019/031/202/original/factory-3d-illustration-icon-png.png",
    description: "Predictive maintenance and quality control",
    sol: "Ai-powered predictive maintenance",
  },
];
const expertise = [
  {
    name: "Team",
    img: "https://static.vecteezy.com/system/resources/previews/011/781/824/original/healthcare-3d-render-icon-illustration-png.png",
    description: "Dedicated team of AI experts and data scientists",
  },
  {
    name: "Track Record",
    img: "https://cdn3d.iconscout.com/3d/premium/thumb/finance-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--invoice-bill-receipt-online-money-service-pack-marketing-branding-illustrations-4159684.png",
    description: "Proven track record of delivering successful GenAI Solutions",
  },
  {
    name: "Techniques",
    img: "https://cdn3d.iconscout.com/3d/premium/thumb/shopping-store-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--shop-e-commerce-pack-illustrations-3728231.png",
    description: "Cutting-edge techniques and continous innovations",
  },
  {
    name: "Solutions",
    img: "https://static.vecteezy.com/system/resources/previews/019/031/202/original/factory-3d-illustration-icon-png.png",
    description:
      "Customized solutions tailored to your industry's unique needs",
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

const data = [
  {
    title: "Challenges",
    content: (
      <div>
        <p className="text-neutral-800 text-xs md:text-lg font-Satoshi font-normal mb-2 lg:mb-2">
          Deep understanding of industry-specific challenges.
        </p>
        <div className="w-full">
          <img
            src="https://images.pexels.com/photos/1586950/pexels-photo-1586950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="startup template"
            className="rounded-lg object-cover h-60 md:h-44 lg:h-[30rem] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Experience",
    content: (
      <div>
        <p className="text-neutral-800 text-xs md:text-lg font-Satoshi font-normal mb-2 lg:mb-2">
          Extensive experience in GenAI development and deployment
        </p>

        <div className="">
          <img
            src="https://images.unsplash.com/photo-1530825894095-9c184b068fcb?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="startup template"
            className="rounded-lg object-cover h-60 md:h-44 lg:h-[30rem] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Commitment",
    content: (
      <div>
        <p className="text-neutral-800 text-xs md:text-lg font-Satoshi font-normal mb-2 lg:mb-2">
          Commitment to customer success and long-term partnerships
        </p>

        <div className="">
          <img
            src="https://images.unsplash.com/photo-1681505526188-b05e68c77582?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="startup template"
            className="rounded-lg object-cover h-60 md:h-44 lg:h-[30rem] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Support ",
    content: (
      <div>
        <p className="text-neutral-800 text-xs md:text-lg font-Satoshi font-normal mb-2 lg:mb-2">
          Comprehensive support from ideation to implementation and beyond
        </p>

        <div className="">
          <img
            src="https://images.pexels.com/photos/8867432/pexels-photo-8867432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="startup template"
            className="rounded-lg object-cover h-60 md:h-44 lg:h-[30rem] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
];

const advantages = [
  {
    title: "Boost",
    description: "Increased efficiency and Productivity",
    icon: "https://icons.iconarchive.com/icons/microsoft/fluentui-emoji-3d/256/Rocket-3d-icon.png",
  },
  {
    title: "Evaluation",
    description: "Enhanced decision-making capabilities",
    icon: "https://static.vecteezy.com/system/resources/previews/012/872/316/original/icon-check-3d-png.png",
  },
  {
    title: "Experience",
    description: "Improved customer experiences",
    icon: "https://static.vecteezy.com/system/resources/previews/013/866/236/original/experience-3d-rendering-isometric-icon-png.png",
  },
  {
    title: "Innovation",
    description: "Competitive edge through innovation",
    icon: "https://cdn3d.iconscout.com/3d/premium/thumb/innovation-3d-icon-download-in-png-blend-fbx-gltf-file-formats--idea-creative-creativity-bulb-digital-technology-pack-science-icons-7946835.png",
  },
  {
    title: "Solutions",
    description: "Scalable and flexible solutions",
    icon: "https://cdn3d.iconscout.com/3d/premium/thumb/business-solution-3d-icon-download-in-png-blend-fbx-gltf-file-formats--innovative-idea-creative-corporate-pack-icons-6068189.png?f=webp",
  },
  {
    title: "Support",
    description: "Ongoing support and continuos improvement",
    icon: "https://cdn3d.iconscout.com/3d/premium/thumb/customer-support-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--call-logo-contact-help-center-services-illustrations-4134024.png",
  },
];

function GenAI() {
  const [childAnimate, setChildAnimate] = useState({});
  useEffect(() => {
    const isMobile = window ? window.innerWidth < 768 : null;
    if (!isMobile) {
      setChildAnimate({
        initial: { maxHeight: 0, opacity: 0 },
        whileHover: {
          maxHeight: 100,
          opacity: 1,
          transition: { duration: 0.3 },
        },
        exit: { maxHeight: 0, opacity: 0 },
      });
    }
  }, []);

  return (
    <>
      <Header_01 />
      <main className="main-wrapper relative">
        <div className="w-full h-[85vh] xl:h-screen bg-no-repeat bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1636690424408-4330adc3e583?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
          <div className="bg-gray-900/40 w-full h-full ">
            <div className="global-container flex flex-col justify-around h-full">
              <div></div>
              <div></div>
              <div className="mt-32 xl:mt-0">
                <h2 className="font-Satoshi font-bold text-gray-50">
                  Why Choose GenAi?
                </h2>
                <ul className="list-disc mt-5 text-gray-200">
                  <div className="px-5 ">
                    <li>
                      <p className="mt-3 font-Satoshi font-semibold leading-relaxed text-sm xl:text-lg text-gray-200 w-full lg:w-2/4">
                        Unlock new possibilities for your business.
                      </p>
                    </li>
                    <li>
                      <p className="mt-3 font-Satoshi font-semibold leading-relaxed text-sm xl:text-lg text-gray-200 w-full lg:w-2/4">
                        Enhance efficiency, productive and innovation across
                        industries.
                      </p>
                    </li>
                    <li>
                      <p className="mt-3 font-Satoshi font-semibold leading-relaxed text-sm xl:text-lg text-gray-200 w-full lg:w-2/4">
                        Stay ahead of the curve with intelligent solutions
                        tailored to your needs.
                      </p>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <section className="my-28">
          <div className="w-full global-container lg:w-2/3 flex flex-col justify-center items-center">
            <p className="global-container text-3xl lg:text-6xl font-Satoshi font-[600] text-center">
              Industry
              <span className="bg-gradient-to-r  font-Telma px-1 from-blue-600 to-indigo-400 bg-clip-text text-transparent">
                {" "}
                Challenges{" "}
              </span>
              and
              <span className="bg-gradient-to-r  font-Telma px-1 from-blue-600 to-indigo-400 bg-clip-text text-transparent">
                {" "}
                Solutions{" "}
              </span>
            </p>
          </div>

          <div className="global-container grid place-items-center grid-cols-1 gap-x-7 gap-y-10 lg:grid-cols-2 xl:grid-cols-4">
            <AnimatePresence mode="wait">
              {Aiservices.map((service, index) => (
                <motion.div
                  variants={parentAnimate}
                  initial="initial"
                  whileHover="whileHover"
                  exit="exit"
                  key={index}
                  style={{ backgroundColor: service?.color }}
                  className="mt-10 border-[10px] cursor-pointer border-gray-200 group  rounded-2xl w-full lg:w-[300px] h-[430px]  relative overflow-hidden"
                >
                  <div className="size-36   absolute top-16 -translate-x-1/2 left-1/2 -translate-y-0">
                    <img className="w-full" src={service.img} />
                  </div>
                  <div className="size-4 group-hover:scale-[80] xxl:group-hover:scale-[110]  absolute transition-all duration-700  -top-4 -left-4 bg-gray-200 rounded-full"></div>
                  <div className="size-3 group-hover:scale-[90] xxl:group-hover:scale-[120] absolute transition-all duration-700 -top-4 -left-4 bg-white delay-200 rounded-full"></div>
                  <div className="w-full relative   z-10 h-full flex py-5 px-5 flex-col justify-end items-start">
                    <motion.div variants={titleAnimate}>
                      <p className="  pr-8 font-bold font-Satoshi leading-snug group-hover:text-gray-900 transition-all duration-500 text-gray-100">
                        {service.name}
                      </p>
                      <p className="text-sm font-Satoshi font-semibold text-gray-100 group-hover:text-gray-800">
                        {service.description}?
                      </p>
                    </motion.div>

                    <motion.p
                      variants={childAnimate}
                      className="leading-snug flex items-start gap-2  mt-1 overflow-hidden text-sm text-gray-200 group-hover:text-gray-800  transition-all duration-500"
                    >
                      <BsHandIndexThumbFill className="rotate-90 text-orange-500 text-lg" />
                      {service.sol}
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
        <section className="my-28">
          <div className="w-full global-container lg:w-2/3 flex flex-col justify-center items-center">
            <p className="global-container text-3xl lg:text-6xl font-Satoshi font-[600] text-center">
              <span className="  text-gray-900 font-bold font-Satoshi">
                Menlo
                <span className="text-sky-500 font-Clash font-[600]">
                  Cloud{" "}
                </span>
              </span>
              Expertise in and
              <span className="bg-gradient-to-r  font-Telma px-1 from-blue-600 to-indigo-400 bg-clip-text text-transparent">
                {" "}
                GenAi{" "}
              </span>
            </p>
          </div>

          <div className="global-container grid place-items-startf grid-cols-1 gap-x-7 gap-y-10 lg:grid-cols-2 mt-14">
            {expertise.map((elem, index) => (
              <div key={index} className="bg-gray-200 px-7 py-6 rounded-xl ">
                <p className="font-Satoshi font-bold text-xl lg:text-3xl">
                  {elem.name}
                </p>
                <p className="font-Satoshi font-medium mt-3">
                  {elem.description}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section className="my-28">
          <div className="w-full global-container lg:w-2/3 flex flex-col justify-center items-center">
            <p className="global-container text-3xl lg:text-6xl font-Satoshi font-[600] text-center">
              Why Choose{" "}
              <span className="  text-gray-900 font-bold font-Satoshi">
                Menlo
                <span className="text-sky-500 font-Clash font-[600]">
                  Cloud{" "}
                </span>
              </span>
              ?
            </p>
          </div>

          <Timeline data={data} />
        </section>
        <section className="my-28">
          <div className="w-full global-container lg:w-2/3 flex flex-col justify-center items-center">
            <p className="global-container text-3xl lg:text-6xl font-Satoshi font-[600] text-center">
              Advantages of
              <span className="bg-gradient-to-r  font-Telma px-1 from-blue-600 to-indigo-400 bg-clip-text text-transparent">
                {" "}
                GenAi{" "}
              </span>
              and{" "}
              <span className="  text-gray-900 font-bold font-Satoshi">
                Menlo
                <span className="text-sky-500 font-Clash font-[600]">
                  Cloud{" "}
                </span>
              </span>
            </p>
          </div>

          <div className="grid mt-10 global-container grid-cols-1 lg:grid-cols-3 place-items-center gap-x-10 gap-y-14">
            {advantages.map((elem, index) => (
              <div
                className="bg-gray-200 w-full overflow-hidden rounded-xl"
                key={index}
              >
                <div className="w-full h-[280px] flex justify-center  items-center">
                  <img src={elem.icon} className="w-[220px]" />
                </div>
                <div className="px-7 py-6">
                  <p className="font-Satoshi font-bold text-3xl">
                    {elem.title}
                  </p>
                  <p className="font-Satoshi font-medium mt-2">
                    {elem.description}
                  </p>
                  <div className="mt-5">
                    <Link href={`/contact`}>
                      {" "}
                      <button className="text-gray-900 overflow-hidden group rounded-lg relative font-Satoshi font-semibold py-2 px-5 bg-gray-50">
                        <p className="relative z-10">Lets Connect</p>
                        <div className="bg-sky-500 w-1 h-1 group-hover:scale-[50] absolute -bottom-1 left-1/2 -translate-1/2 rounded-full transition-all duration-300" />
                      </button>
                    </Link>
                  </div>
                </div>
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
      </main>
      <Footer_01 />
    </>
  );
}

export default GenAI;

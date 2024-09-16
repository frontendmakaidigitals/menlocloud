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
        <div className="w-full mb-20  h-[85vh] xl:h-screen bg-no-repeat bg-center bg-cover bg-[url('https://images.pexels.com/photos/5716052/pexels-photo-5716052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
          <div className="bg-gradient-to-b w-full h-full from-gray-800/50 via-transparent to-gray-700/40">
            <div className="global-container flex flex-col justify-around  w-full h-full">
              <div></div>
              <div></div>
              <div className="mt-32 xl:mt-0">
                <h2 className="font-dmSans font-bold text-gray-50">
                  Our Services
                </h2>
                <p className="mt-3  leading-relaxed text-sm xl:text-lg text-gray-100 w-[80%] lg:w-2/4">
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
        <section className="global-container mb-20">
          <h2 className="w-full text-center">Industries and impact</h2>
          <p className="text-md text-center mt-2">
            Learn how we’re driving impact with organizations like yours across
            key industry sectors.
          </p>
        </section>
        <div
          className={`bg-blue-500 block  lg:hidden px-4 py-3 transition-all duration-200   w-full `}
        >
          <p
            onClick={() => setMobileTabs(!mobileTabs)}
            className="flex w-full capitalize items-center gap-1"
          >
            {tabs[tabSelected].name}
            <span>
              <MdOutlineKeyboardArrowDown
                className={`text-2xl ${mobileTabs ? "rotate-180" : "rotate-0"}`}
              />
            </span>
          </p>
          <div
            className={`transition-all duration-300 ${
              mobileTabs ? "max-h-[100vh] py-4 " : "max-h-0"
            }  bg-blue-500 `}
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
                        className="mt-5 text-[1rem] xxl:text-[.8vw]   hover:underline cursor-pointer uppercase"
                      >
                        {service.name}
                      </p>
                    );
                  }
                })
              : null}
          </div>
        </div>
        <section className=" w-full h-auto lg:h-screen lg:mb-20 flex flex-col lg:flex-row justify-between items-start">
          <div className="bg-blue-400 h-full transition-all duration-200 xl:h-full w-full xl:w-1/3 max-w-[750px]  xl:px-14 xl:py-14 rounded-lg xl:rounded-r-[2rem]">
            <div className="hidden lg:block">
              {tabs.map((service, index) => {
                return (
                  <p
                    key={index}
                    onClick={() => setTabSelected(index)}
                    className={`mt-5 text-sm xxl:text-lg  hover:underline cursor-pointer uppercase ${
                      tabSelected == index ? "underline" : ""
                    } `}
                  >
                    {service.name}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="w-full px-4 lg:px-10 lg:h-full h-auto mt-10 lg:mt-20  justify-start gap-5 items-start flex flex-col md:flex-row ">
            <div className="w-auto max-w-[800px]">
              <p className="text-3xl text-center lg:text-start md:text-4xl xxl:text-5xl capitalize">
                {tabs[tabSelected].name}
              </p>
              <p className="text-sm !leading-loose  text-center lg:text-start xxl:text-lg  mt-3">
                {tabs[tabSelected].data}
              </p>
              <p className="mt-5 text-lg  text-center lg:text-start xxl:text-2xl font-semibold">
                Industires include:
              </p>
              <div className="mt-2 w-full flex flex-col justify-center items-center lg:items-start">
                {tabs[tabSelected].points.map((point, index) => (
                  <p className="text-sm xxl:text-lg mt-1" key={index}>
                    {point}
                  </p>
                ))}
              </div>

              <div className="w-full flex justify-center lg:justify-start">
                <button className="button rounded-[50px] mt-10 border-2 border-black bg-transparent py-3 text-black after:bg-[#2962FF] hover:border-[#2962FF] hover:text-white">
                  Learn more
                </button>
              </div>
            </div>
            <div className="bg-gray-100 w-full lg:w-[21rem]  lg:mt-0 min-w-[350px] pb-7 rounded-xl ">
              <div className=" rounded-xl w-full bg-[url('https://images.unsplash.com/photo-1531538512164-e6c51ea63d20?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-center bg-cover h-[300px] lg:h-[330px]"></div>
              <div className="px-5">
                <p className="mt-4 text-lg uppercase">customer story</p>
                <p className="xxl:text-2xl mt-3 font-bold">
                  Investing in a culture of innovation and Technology
                </p>
                <p className="mt-7">Nasdaq</p>
              </div>
            </div>
          </div>
        </section>
        {/* Service Section */}
        <section className="mb-40 mt-20 global-container">
          <div>
            <div className="flex  justify-center items-center">
              <h2 className="text-gray-900 text-center">
                2024 Industry Outlooks{" "}
              </h2>
            </div>
            <div className="w-full hidden lg:flex justify-end mb-5">
              <SwiperNavButtons swiperRef={swiperRef} />
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
      </main>
      <Footer_01 />
    </>
  );
}

export default Services;

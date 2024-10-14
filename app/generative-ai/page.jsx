"use client";
import Footer_01 from "@/components/footer/Footer_01";
import Header_01 from "@/components/header/Header_01";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css";
import { MdArrowBackIosNew } from "react-icons/md";
import Form from "@/components/PopUp-form/form";
import { useEffect, useState, useRef } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Timeline } from "@/components/ui/timeline";
import Link from "next/link";
import { FaCircleCheck } from "react-icons/fa6";
import BlogSwiper from "@/components/blogSwiper";
import { IoWarningOutline } from "react-icons/io5";
import { PiSealWarningFill } from "react-icons/pi";
const Aiservices = [
  {
    name: "Healthcare and Life Sciences",
    color: "#FF5252",
    img: "https://static.vecteezy.com/system/resources/previews/011/781/824/original/healthcare-3d-render-icon-illustration-png.png",
    description:
      "Automating the creation of clinical trial reports, summarizing key findings and insights from large datasets.",
    sol: "Ai-assisted medical imaging analysis",
  },
  {
    name: "Legal and Professional Services",
    color: "#FFB74D",
    img: "https://static.vecteezy.com/system/resources/previews/028/754/037/original/law-hammer-3d-icon-illustrations-png.png",
    description:
      "Generating customized legal contracts and agreements based on specific requirements and clauses.",
    sol: "Ai-powered predictive analytics",
  },
  {
    name: "Finance and Banking",
    color: "#7C4DFF",
    img: "https://cdn3d.iconscout.com/3d/premium/thumb/finance-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--invoice-bill-receipt-online-money-service-pack-marketing-branding-illustrations-4159684.png",
    description:
      "Generating personalized financial advice and investment recommendations based on individual goals and risk profiles",
    sol: "Ai-driven recommendation engines",
  },
  {
    name: "Manufacturing and Industrial",
    color: "#EF9A9A",
    img: "https://static.vecteezy.com/system/resources/previews/019/031/202/original/factory-3d-illustration-icon-png.png",
    description:
      "Generating detailed technical documentation, manuals, and standard operating procedures for complex machinery and processes",
    sol: "Ai-powered predictive maintenance",
  },
  {
    name: "Retail and E-commerce",
    color: "#4FC3F7",
    img: "https://cdn3d.iconscout.com/3d/premium/thumb/shopping-store-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--shop-e-commerce-pack-illustrations-3728231.png",
    description:
      "Generating engaging and optimized product descriptions and marketing copy for e-commerce platforms.",
    sol: "Ai-powered predictive maintenance",
  },
  {
    name: "Media and Entertainment",
    color: "#42A5F5",
    img: "https://cdn3.iconfinder.com/data/icons/social-media-app-2/512/Telegram.png",
    description:
      "Generating story outlines, scripts, and dialogue for movies, TV shows, and video games",
    sol: "Ai-powered predictive maintenance",
  },
  {
    name: "Education and EdTech",
    color: "#FFCA28",
    img: "https://cdn3d.iconscout.com/3d/premium/thumb/online-learning-3d-icon-download-in-png-blend-fbx-gltf-file-formats--call-logo-laptop-internet-school-and-education-pack-icons-5220718.png",
    description:
      "Generating personalized learning materials and study guides tailored to individual student needs and learning styles",
    sol: "Ai-powered predictive maintenance",
  },
  {
    name: "Energy and Utilities",
    color: "#00C853",
    img: "https://cdn3d.iconscout.com/3d/premium/thumb/renewable-energy-3d-icon-download-in-png-blend-fbx-gltf-file-formats--power-solar-panel-green-clean-ecology-pack-environments-icons-5386087.png?f=webp",
    description:
      "Generating technical reports and analyses on energy usage, grid performance, and environmental impact",
    sol: "Ai-powered predictive maintenance",
  },
  {
    name: "Travel and Hospitality",
    color: "#7986CB",
    img: "https://cdn3d.iconscout.com/3d/premium/thumb/flight-ticket-3d-icon-download-in-png-blend-fbx-gltf-file-formats--travel-boarding-pass-plane-entry-holiday-element-vol2-pack-holidays-icons-6752734.png?f=webp",
    description:
      "Generating personalized travel itineraries, guides, and recommendations based on individual preferences and interests",
    sol: "Ai-powered predictive maintenance",
  },
  {
    name: "Automotive and Transportation",
    color: "#FFA726",
    img: "https://img.pikbest.com/origin/09/26/35/56fpIkbEsTZPX.png!sw800",
    description:
      "Generating technical documentation and repair manuals for vehicles and transportation systems",
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

const tabs = [
  {
    name: "Automated Documentation and Technical Writing",
    img: "/assets/img_placeholder/genImage/technical.png",
    prob: "Creating comprehensive and up-to-date documentation is a time-consuming and resource-intensive task for many industries",
    sol: "GenAI can be employed to generate technical documentation, user manuals, standard operating procedures, and compliance reports by analyzing existing data and following predefined templates or guidelines. This can significantly reduce the workload on technical writers and ensure consistent, accurate, and up-to-date documentation",
  },
  {
    name: "Personalized Customer Communications",
    img: "/assets/img_placeholder/genImage/customer.png",
    prob: "Providing personalized and relevant communications to customers is a challenge for businesses, particularly in industries with diverse customer bases and complex product offerings",
    sol: "GenAI can be used to generate tailored marketing materials, product recommendations, and customer service responses based on individual customer data, preferences, and behavior. This can enhance customer engagement, increase customer satisfaction, and drive sales",
  },

  {
    name: "Data Analysis and Insight Generation",
    img: "/assets/img_placeholder/genImage/data-Analytics.png",
    prob: "Extracting meaningful insights from large and complex datasets is a time-consuming and resource-intensive process for many industries",
    sol: "GenAI can be employed to analyze structured and unstructured data, identify patterns and trends, and generate concise summaries and reports highlighting key insights. This can accelerate decision-making processes, uncover new opportunities, and improve data-driven strategies across various industries",
  },
  {
    name: "Creative Content Generation",
    img: "/assets/img_placeholder/genImage/creative.jpg",
    prob: "Creating high-quality, engaging, and diverse content for marketing, advertising, or entertainment purposes can be challenging and resource-intensive",
    sol: " GenAI can be used to generate creative content such as blog posts, social media updates, advertising copy, scripts, and even visual content like images and videos. This can help businesses streamline content creation processes, improve consistency, and tap into new creative avenues",
  },
  {
    name: "Intelligent Virtual Assistants and Chatbots",
    img: "/assets/img_placeholder/genImage/chatBot.png",
    prob: "Providing efficient and personalized customer service and support can be challenging, especially for industries with high customer volumes or complex product offerings",
    sol: " GenAI can be used to develop intelligent virtual assistants and chatbots that can understand natural language queries, provide personalized responses, and assist with various tasks such as customer support, sales, and information retrieval. This can improve customer experiences, reduce response times, and optimize resource allocation",
  },
  {
    name: "Automated Code Generation and Software Development",
    img: "/assets/img_placeholder/genImage/software.png",
    prob: "Software development and coding can be time-consuming and prone to errors, especially for complex projects or legacy systems",
    sol: " GenAI can be used to generate code snippets, software documentation, and even entire applications based on natural language prompts or specifications. This can accelerate development processes, improve code quality, and facilitate the maintenance and modernization of existing systems",
  },
  {
    name: "Research and Knowledge Synthesis",
    img: "/assets/img_placeholder/genImage/data-Analytics.png",
    prob: "Keeping up with the latest research, trends, and developments in rapidly evolving fields can be challenging for industries that rely on cutting-edge knowledge",
    sol: "GenAI can be used to analyze and synthesize large volumes of research papers, reports, and data sources, generating summaries, insights, and recommendations tailored to specific domains or industries. This can aid in accelerating research and development efforts, identifying emerging trends, and staying ahead of the competition",
  },
];

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
  const [isOpen, setisOpen] = useState(false);
  const [status, setStatus] = useState(null);
  const [mobileTabs, setMobileTabs] = useState(false);
  const [tabSelected, setTabSelected] = useState(2);

  const swiperRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev(); // Call slidePrev on the swiper instance
      updateSlideState(); // Update state after sliding
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext(); // Call slideNext on the swiper instance
      updateSlideState(); // Update state after sliding
    }
  };
  const updateSlideState = () => {
    if (swiperInstance) {
      setIsBeginning(swiperInstance.isBeginning);
      setIsEnd(swiperInstance.isEnd);
    }
  };

  useEffect(() => {
    if (swiperInstance) {
      // Update the slide state on initialization
      updateSlideState();

      // Attach the event listener
      swiperInstance.on("slideChange", updateSlideState);

      // Cleanup function to remove the event listener
      return () => {
        swiperInstance.off("slideChange", updateSlideState);
      };
    }
  }, [swiperInstance]);
  return (
    <>
      <Header_01 />
      {isOpen ? (
        <Form setIsOpen={setisOpen} setStatus={setStatus} status={status} />
      ) : null}
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

        <div className="bg-[url('/assets/img_placeholder/bg.jpg')] bg-top bg-cover bg-no-repeat py-32">
          <section className="global-container ">
            <p className="w-full text-3xl lg:text-6xl  font-Satoshi font-bold text-start lg:text-center">
              <span className="bg-gradient-to-r font-Telma from-blue-600 to-indigo-400 bg-clip-text  text-transparent">
                {" "}
                Generative Ai{" "}
              </span>{" "}
            </p>
            <p className="text-lg xl:text-md xxl:text-lg text-start lg:text-center mt-2">
              Learn how we’re driving impact with organizations like yours
              across key industry sectors.
            </p>
          </section>
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
          <div className="relative mt-5 lg:flex flex-row gap-5 justify-center items-center global-container">
            {!isBeginning && (
              <button
                onClick={handlePrev}
                className="absolute left-0 text-black shadow-[0px_0px_12px_12px_rgba(250,250,250,.5)] bg-lime-400 size-10 flex justify-center items-center z-[99] rounded-full"
              >
                <MdArrowBackIosNew />
              </button>
            )}

            <Swiper
              spaceBetween={20} // Reduce space between slides for a better fit
              slidesPerView="auto" // Auto width for slides based on content
              onSwiper={(swiper) => {
                swiperRef.current = swiper; // Set the current reference to the swiper instance
                setSwiperInstance(swiper); // Optionally store the swiper instance in state for debugging
              }}
            >
              {tabs.map((tab, index) => (
                <SwiperSlide
                  key={index}
                  className="!w-auto flex justify-center" // Flex container to prevent full width
                >
                  <div className="!w-auto inline-block">
                    <p
                      onClick={() => setTabSelected(index)}
                      className={`${
                        tabSelected == index
                          ? "bg-gray-900 text-gray-100"
                          : "bg-gray-300 text-gray-900"
                      } xl:text-sm xxl:text-[1rem] px-4 py-2 rounded-full cursor-pointer whitespace-nowrap`}
                    >
                      {tab.name}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {!isEnd && (
              <button
                onClick={handleNext}
                className="absolute shadow-[0px_0px_12px_12px_rgba(250,250,250,.5)] right-0 text-black bg-lime-400 hover:bg-lime-600 size-10 flex justify-center items-center  z-[99] rounded-full"
              >
                <MdOutlineArrowForwardIos />
              </button>
            )}
          </div>
          <div className="global-container mt-10 xl:mt-20 grid grid-cols-1  lg:grid-cols-2 px-0 xl:px-14 gap-8">
            <div>
              <p className="text-lg xl:text-4xl xxl:text-5xl font-Satoshi font-[600]">
                {tabs[tabSelected].name}
              </p>
              <div className="flex mt-3 items-start gap-2">
                <div className="mt-5">
                  <PiSealWarningFill className="text-yellow-500 text-xl" />
                </div>
                <p className=" text-md xl:text-sm xxl:text-lg font-Satoshi mt-4 font-medium">
                  {tabs[tabSelected].prob}
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-5">
                  <FaCircleCheck className="text-green-500 text-lg" />
                </div>
                <p className=" text-md xl:text-sm xxl:text-lg font-Satoshi mt-4">
                  {tabs[tabSelected].sol}
                </p>
              </div>

              <button
                onClick={() => setisOpen(true)}
                className="mt-5 px-5 py-2 bg-blue-500  text-md xl:text-sm xxl:text-lg rounded-md text-gray-200"
              >
                Learn More
              </button>
            </div>
            <div
              style={{ backgroundImage: `url('${tabs[tabSelected].img}')` }}
              className="w-full min-h-[400px] relative rounded-xl shadow-xl border border-gray-300 bg-no-repeat bg-center bg-cover"
            ></div>
          </div>
        </div>

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
                    {" "}
                    <button
                      onClick={() => setisOpen(true)}
                      className="text-gray-900 overflow-hidden group rounded-lg relative font-Satoshi font-semibold py-2 px-5 bg-gray-50"
                    >
                      <p className="relative z-10">Lets Connect</p>
                      <div className="bg-sky-500 w-1 h-1 group-hover:scale-[50] absolute -bottom-1 left-1/2 -translate-1/2 rounded-full transition-all duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <BlogSwiper />

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
            <button
              onClick={() => setisOpen(true)}
              className="text-gray-900 overflow-hidden group rounded-lg relative font-Satoshi font-semibold py-2 px-5 bg-gray-200"
            >
              <p className="relative z-10">Lets Connect</p>
              <div className="bg-sky-500 w-1 h-1 group-hover:scale-[50] absolute -bottom-1 left-1/2 -translate-1/2 rounded-full transition-all duration-300" />
            </button>
          </div>
        </section>
      </main>
      <Footer_01 />
    </>
  );
}

export default GenAI;

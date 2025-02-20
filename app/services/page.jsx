"use client";
import Footer_01 from "@/components/footer/Footer_01";
import Header_01 from "@/components/header/Header_01";
import { useEffect } from "react";
import Link from "next/link";
import { useRef, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
import Marquee from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";
import BlogSwiper from "@/components/blogSwiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Form from "@/components/PopUp-form/form";
import "swiper/css/navigation";
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

const techLogos = [
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
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Generative AI ",
    data: "Deploy conventional and generative AI to optimize existing processes, explore innovative solutions, and redefine user experiences responsibly. We combine Conventional and Generative AI and provide a holistic approach to solving complex challenges and unlocking new opportunities in the AI landscape. ",
    points: [
      "Conventional Models",
      "Generative Adversarial Networks",
      "Data Synthesis",
      "Pattern Recognition",
      "Algorithm Development",
    ],
    img: "https://images.unsplash.com/photo-1717501217911-a598ed4c4023?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    name: "Cloud Transformation",
    data: "With cloud modernization, transform your existing infrastructure into a robust, scalable, and agile environment. Our approach involves assessing your current systems, developing a strategic cloud migration plan, streamline operations, reduce costs and implementing cutting-edge cloud solutions that enhance performance and efficiency. ",
    points: [
      "Cloud Migration",
      "Hybrid Cloud",
      "Containerization Technologies",
      "Serverless Computing",
      "Automated Provisioning",
    ],
    img: "https://cyntexa.com/wp-content/uploads/2024/07/cloud-transformation-benefits-types-challenges-explained-banner.webp",
  },
  {
    name: "Mobile App Developement",
    data: "With cloud modernization, transform your existing infrastructure into a robust, scalable, and agile environment. Our approach involves assessing your current systems, developing a strategic cloud migration plan, streamline operations, reduce costs and implementing cutting-edge cloud solutions that enhance performance and efficiency. ",
    points: [
      "Cloud Migration",
      "Hybrid Cloud",
      "Containerization Technologies",
      "Serverless Computing",
      "Automated Provisioning",
    ],
    img: "https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Web App Developement",
    data: "With cloud modernization, transform your existing infrastructure into a robust, scalable, and agile environment. Our approach involves assessing your current systems, developing a strategic cloud migration plan, streamline operations, reduce costs and implementing cutting-edge cloud solutions that enhance performance and efficiency. ",
    points: [
      "Cloud Migration",
      "Hybrid Cloud",
      "Containerization Technologies",
      "Serverless Computing",
      "Automated Provisioning",
    ],
    img: "https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Digital Marketing",
    data: "With cloud modernization, transform your existing infrastructure into a robust, scalable, and agile environment. Our approach involves assessing your current systems, developing a strategic cloud migration plan, streamline operations, reduce costs and implementing cutting-edge cloud solutions that enhance performance and efficiency. ",
    points: [
      "Cloud Migration",
      "Hybrid Cloud",
      "Containerization Technologies",
      "Serverless Computing",
      "Automated Provisioning",
    ],
    img: "https://www.chitkara.edu.in/blogs/wp-content/uploads/2022/11/Digital-Marketing.jpg",
  },
  {
    name: "Talent Hunt",
    data: "With cloud modernization, transform your existing infrastructure into a robust, scalable, and agile environment. Our approach involves assessing your current systems, developing a strategic cloud migration plan, streamline operations, reduce costs and implementing cutting-edge cloud solutions that enhance performance and efficiency. ",
    points: [
      "Cloud Migration",
      "Hybrid Cloud",
      "Containerization Technologies",
      "Serverless Computing",
      "Automated Provisioning",
    ],
    img: "https://www.chitkara.edu.in/blogs/wp-content/uploads/2022/11/Digital-Marketing.jpg",
  },
  {
    name: "Staff Augmentation",
    data: "With cloud modernization, transform your existing infrastructure into a robust, scalable, and agile environment. Our approach involves assessing your current systems, developing a strategic cloud migration plan, streamline operations, reduce costs and implementing cutting-edge cloud solutions that enhance performance and efficiency. ",
    points: [
      "Cloud Migration",
      "Hybrid Cloud",
      "Containerization Technologies",
      "Serverless Computing",
      "Automated Provisioning",
    ],
    img: "https://www.chitkara.edu.in/blogs/wp-content/uploads/2022/11/Digital-Marketing.jpg",
  },
];
function Services() {
  const [mobileTabs, setMobileTabs] = useState(false);
  const [tabSelected, setTabSelected] = useState(2);
  const [isOpen, setisOpen] = useState(false);
  const [status, setStatus] = useState(null);
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
      <main className="main-wrapper relative overflow-hidden">
        <div className="w-full  h-[85vh] xl:h-screen bg-no-repeat bg-center bg-cover bg-[url('https://images.pexels.com/photos/5716052/pexels-photo-5716052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
          <div className="bg-gradient-to-b w-full h-full from-gray-800/50 via-transparent to-gray-700/40">
            <div className="global-container flex flex-col justify-around h-full">
              <div></div>
              <div></div>
              <div className="mt-32 xl:mt-0">
                <h2 className="font-dmSans font-bold text-gray-100">
                  Our Services
                </h2>
                <p className="mt-3   leading-relaxed text-sm xl:text-lg text-gray-100 w-full lg:w-2/4">
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

        <section className="w-full min-h-[80vh] py-20  bg-no-repeat bg-center bg-cover flex justify-center items-center bg-[url('/assets/img_placeholder/quote-bg.jpg')]">
          <p className="text-slate-900 tracking-tight !leading-[4rem] font-Satoshi font-bold text-3xl xl:text-4xl xxl:text-5xl global-container text-center">
            We make it easy for{" "}
            <span className="rounded-full bg-[url('https://images.unsplash.com/photo-1517677129300-07b130802f46?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-center bg-cover text-transparent">
              000
            </span>{" "}
            companies and their{" "}
            <span className="rounded-full bg-[url('https://images.unsplash.com/photo-1517677129300-07b130802f46?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-center bg-cover text-transparent">
              0000
            </span>{" "}
            employees to set-up, contribute and manage complex{" "}
            <span className="rounded-full bg-[url('https://images.unsplash.com/photo-1517677129300-07b130802f46?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-center bg-cover text-transparent">
              00
            </span>{" "}
            benefit
          </p>
        </section>
        <div className="bg-[url('/assets/img_placeholder/bg.jpg')] bg-top bg-cover bg-no-repeat py-32">
          <section className="global-container ">
            <p className="w-full text-3xl lg:text-6xl  font-Satoshi font-bold text-start lg:text-center">
              <span className="bg-gradient-to-r font-Telma from-blue-600 to-indigo-400 bg-clip-text  text-transparent">
                {" "}
                Industries{" "}
              </span>{" "}
              and{" "}
              <span className="bg-gradient-to-r font-Telma from-blue-600 to-indigo-400 bg-clip-text text-transparent">
                {" "}
                Impact{" "}
              </span>
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
                className="absolute left-0 text-black bg-lime-400 size-10 flex justify-center items-center z-[99] rounded-full"
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
                className="absolute right-0 text-black bg-lime-400 hover:bg-lime-600 size-10 flex justify-center items-center  z-[99] rounded-full"
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
              <p className="text-md xl:text-sm xxl:text-lg font-Satoshi mt-4">
                {tabs[tabSelected].data}
              </p>
              <p className="font-Satoshi font-[500] text-lg xl:text-xl xxl:text-2xl mt-5">
                Services included
              </p>
              <ul className="list-disc px-5 mt-2 w-full">
                {tabs[tabSelected].points.map((point, index) => (
                  <li key={index} className="text-md xl:text-sm xxl:text-lg">
                    {point}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setisOpen(true)}
                className="mt-5 px-5 py-2 bg-blue-500  text-md xl:text-sm xxl:text-lg rounded-md text-gray-200"
              >
                Learn More
              </button>
            </div>
            <div
              style={{
                backgroundImage: `url('${tabs[tabSelected].img}')`,
              }}
              className="w-full min-h-[400px] relative rounded-xl shadow-xl border border-gray-300 bg-no-repeat bg-[url('')] bg-center bg-cover"
            ></div>
          </div>
        </div>
        <section className="mt-28">
          <p className="w-full text-3xl lg:text-6xl font-Satoshi font-bold text-start lg:text-center global-container">
            Our{" "}
            <span className="bg-gradient-to-r font-Telma from-blue-600 to-indigo-400 bg-clip-text text-transparent">
              {" "}
              Clients{" "}
            </span>
          </p>
          <Marquee reverse className=" [--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
        </section>
        {/* Service Section */}
        <BlogSwiper />
      </main>
      <Footer_01 />
    </>
  );
}

export default Services;
const firstRow = techLogos;
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

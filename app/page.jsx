"use client";
import { cn } from "@/lib/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState, useEffect } from "react";
import Header_01 from "@/components/header/Header_01";
import Footer_01 from "@/components/footer/Footer_01";
import Link from "next/link";
import "/styles/globals.css";
import Marquee from "@/components/magicui/marquee";
import { AnimatePresence, color, motion } from "framer-motion";
import NumberTicker from "@/components/magicui/number-ticker";
import { FlipWords } from "@/components/ui/flip-words";
import SwiperNavButtons from "@/components/SwiperNavButton";
import { HiOutlineArrowDown } from "react-icons/hi2";
import { LampContainer } from "@/components/ui/lamp";
import Form from "@/components/PopUp-form/form";
import { useToast } from "@/hooks/use-toast";
import BlogSwiper from "@/components/blogSwiper";

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

    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/2048px-Microsoft_Azure.svg.png",
  },

  {
    username: "@jack34",

    img: "https://companieslogo.com/img/orig/SNOW-35164165.png?t=1720244494",
  },
  {
    username: "@jack23",

    img: "/assets/img_placeholder/qlik.png",
  },
  {
    username: "@jack43",

    img: "https://www.svgrepo.com/show/354012/looker-icon.svg",
  },
];
const clientLogo = [
  {
    username: "@jack",
    img: "/assets/img_placeholder/clients/Sharmin.png",
  },
  {
    username: "@track",
    img: "/assets/img_placeholder/clients/TeaVillaCafe.png",
  },
  {
    username: "@black",
    img: "/assets/img_placeholder/clients/BSHH.png",
  },
  {
    username: "@red",
    img: "/assets/img_placeholder/clients/Roofsol1.png",
  },
  {
    username: "@mat",
    img: "/assets/img_placeholder/clients/MOD.png",
  },
  {
    username: "@rat",
    img: "/assets/img_placeholder/clients/Zipro.png",
  },
];

const industries = [
  {
    name: "Healthcare",
    icon: "https://cdn3d.iconscout.com/3d/premium/thumb/healthcare-3d-icon-download-in-png-blend-fbx-gltf-file-formats--heart-love-hands-medical-caregiver-nursing-home-pack-icons-5700707.png?f=webp",
    color: "#FFCDD2",
    description:
      "Bring the best of modern practices to patient health, emergencies and medical equipment and more with generative AI.",
  },
  {
    name: "Construction",
    icon: "https://icons.iconarchive.com/icons/microsoft/fluentui-emoji-3d/512/Building-Construction-3d-icon.png",
    color: "#FFECB3",
    description:
      "Multiply mega structures and add a distinct character to every project with strong  IT backed backend techniques.",
  },
  {
    name: "Finance",
    icon: "https://cdn3d.iconscout.com/3d/premium/thumb/finance-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--invoice-bill-receipt-online-money-service-pack-marketing-branding-illustrations-4159684.png?f=webp",
    color: "#F5F5F5",
    description:
      "Compute, analyze and transform internal processes while building robust systems for external audiences.",
  },
  {
    name: "Transportation",
    icon: "https://static.vecteezy.com/system/resources/previews/047/398/260/original/cartoon-public-trolleybus-3d-icon-on-the-transparent-background-vehicles-for-transportation-concept-png.png",
    color: "#D1C4E9",
    description:
      "Operate seamlessly within a connected ecosystem. Create what simplifies the regional presence.",
  },
  {
    name: "Entertainment",
    icon: "https://static.vecteezy.com/system/resources/previews/016/407/496/original/3d-entertainment-website-icon-illustration-png.png",
    color: "#E57373",
    description:
      "Stream personalized choices, make content easy to consume and leave a wider impact with fast and agile IT solutions.",
  },
  {
    name: "retail",
    icon: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/09dcac142853293.626f5704a3e61.png",
    color: "#FFAB91",
    description:
      "Attract customers and enhance the experience through an array of offerings built for customers and end-users.",
  },
  {
    name: "manufacturing",
    icon: "https://cdn3d.iconscout.com/3d/premium/thumb/factory-3d-icon-download-in-png-blend-fbx-gltf-file-formats--industry-industrial-construction-building-pack-commercial-icons-9646402.png?f=webp",
    color: "#FFB74D",
    description:
      "Generate and innovate processes that lead the change in the consumer markets and help your idea climb up.",
  },
  {
    name: "automation",
    icon: "https://cdn3d.iconscout.com/3d/premium/thumb/nano-robots-3d-icon-download-in-png-blend-fbx-gltf-file-formats--robot-robotic-robotics-technology-future-things-pack-science-icons-6605347.png?f=webp",
    color: "#B39DDB",
    description:
      "Charge up the environment, make it faster and error-free with zero manual intervention and achieve bigger results.",
  },
];
const experiences = [
  { name: "Years of Experience", number: 12, color: "#1E88E5" },
  { name: "In-House Experts", number: 400, color: "#212121" },
  { name: "Projects Delivered", number: 1000, color: "#00796B" },
  { name: "Happy Clients", number: 400, color: "#D81B60" },
];
const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];

const specialize = [
  {
    title: "Talent Hunt",
    color: "#F48FB1",
    link: "/cloud-transformation",
    img: "https://cdn-icons-png.freepik.com/512/12820/12820680.png",
    description:
      "Showcase your talent and shine bright at our Talent Hunt! Join us for a chance to share your skills and win amazing prizes!",
  },
  {
    title: "Staff Augmentation",
    color: "#64B5F6",
    link: "/cloud-transformation",
    img: "https://cdn3d.iconscout.com/3d/premium/thumb/staff-management-3d-icon-download-in-png-blend-fbx-gltf-file-formats--employee-human-resource-team-corporate-business-pack-icons-4755478.png?f=webp",
    description:
      "Boost your team with our expert staff augmentation services! Access top-tier talent on demand to meet project needs and drive success.",
  },
  {
    title: "Data Analysts",
    color: "#FFD54F",
    link: "/data-Analytics",
    img: "https://static.vecteezy.com/system/resources/previews/012/628/423/original/data-3d-render-icon-illustration-png.png",
    description:
      "Data analysts interpret data to provide insights that drive informed decision-making in organizations.",
  },
  {
    title: "Artificial Intelligence",
    color: "#FF8A65",
    link: "/generative-ai",
    img: "https://static.vecteezy.com/system/resources/previews/021/820/175/original/computer-chip-with-ai-letters-3d-artificial-intelligence-icon-png.png",
    description:
      " Artificial Intelligence (AI) involves the simulation of human intelligence in machines to perform tasks such as learning, reasoning, and problem-solving.",
  },
  {
    title: "Cloud Transformation",
    color: "#EEEEEE",
    link: "/cloud-transformation",
    img: "https://cdn3d.iconscout.com/3d/premium/thumb/cloud-computing-3d-icon-download-in-png-blend-fbx-gltf-file-formats--network-hosting-connection-technology-pack-communication-icons-4668604.png?f=webp",
    description:
      "Cloud transformation is the process of migrating data and applications to cloud-based platforms to enhance flexibility, scalability, and efficiency.",
  },

  {
    title: "Digital Marketing",
    color: "#FFEB3B",
    link: "/cloud-transformation",
    img: "https://cdn3d.iconscout.com/3d/premium/thumb/digital-marketing-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--online-business-promotion-mobile-and-strategy-megaphone-pack-illustrations-4596633.png",
    description:
      "Mobile app development is the process of creating software for mobile devices, involving design, coding, testing, and deployment to deliver functional and user-friendly apps.",
  },
  {
    title: "Mobile App Development",
    color: "#7E57C2",
    link: "/cloud-transformation",
    img: "https://cdn3d.iconscout.com/3d/premium/thumb/app-development-3d-icon-download-in-png-blend-fbx-gltf-file-formats--programming-coding-application-software-web-pack-design-icons-5618483.png",
    description:
      "Mobile app development is the process of creating software for mobile devices, involving design, coding, testing, and deployment to deliver functional and user-friendly apps.",
  },
];
function Home() {
  const { toast } = useToast();
  const [isVisible, setIsVisible] = useState(true);
  const [isTopVisible, setIsTop] = useState(false);
  const [isOpen, setisOpen] = useState(false);
  const [status, setStatus] = useState(null);

  const parentVariants = {
    hover: {
      scale: 1.02, // Scale up the parent a bit
    },
  };

  const swiperRef = useRef(null);

  const headerVariant = {
    initial: {
      fontSize: "2.4rem",
      y: 80, // Start below
    },
    hover: {
      y: 0,
      fontSize: "2rem",
      transition: {
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  const words = [
    "Staff Augumentation",
    "Talent Hunt",
    "Cloud Transformation",
    "Generative AI",
    "Data Analytics",
    "Digital Marketing",
  ];
  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      // Check if the page has been scrolled down 200 pixels
      if (window.scrollY >= 199) {
        setIsVisible(false);
        setIsTop(true);
      } else {
        setIsVisible(true);
        setIsTop(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to scroll down by 200 pixels
  const scrollDown = () => {
    const viewportHeight = window.innerHeight; // Get the height of the viewport in pixels
    window.scrollBy({
      top: viewportHeight, // Scroll down by the viewport height
      behavior: "smooth", // Smooth scrolling
    });
  };
  const scrollTop = () => {
    window.scrollTo({
      top: 0, // Scroll to the top of the page
      behavior: "smooth", // Smooth scrolling
    });
  };

  useEffect(() => {
    if (status === "success") {
      toast({
        variant: "success",
        title: "Form Submitted Successfully",
        description: "Our team will reach out to you soon",
      });
    } else if (status === "failed") {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    }
  }, [status]);
  return (
    <div className="page-wrapper relative z-[1] bg-white">
      {}
      <Header_01 />
      {isOpen ? (
        <Form setIsOpen={setisOpen} setStatus={setStatus} status={status} />
      ) : null}
      <motion.div
        animate={{
          x: isVisible ? "-50%" : 0,
          left: isVisible ? "50%" : "90%",
          rotate: isVisible ? 0 : 180,
        }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        onClick={isVisible ? scrollDown : scrollTop}
        className={`size-16 hidden xl:flex left-1/2 justify-center bottom-10  cursor-pointer z-10  items-center   border border-gray-300 rounded-full fixed  ${
          isVisible
            ? " bg-gray-200/60 hover:bg-gray-200/70 "
            : "  bg-lime-400 hover:bg-lime-400/70"
        }`}
      >
        <HiOutlineArrowDown className="text-2xl" />
        <motion.div className="ripple absolute size-10 border border-gray-300 -z-[99] rounded-full" />
      </motion.div>
      <main className="main-wrapper relative ">
        {/*...::: Hero Section Start :::... */}

        <section
          id="section-hero"
          className="h-[75vh] relative xl:h-screen overflow-hidden bg-black"
        >
          <div className="absolute min-w-[1200px] overflow-hidden w-full h-full">
            <video className="w-full  h-full object-fill" muted autoPlay loop>
              <source src={`/assets/img_placeholder/heroBg.mp4`}></source>
            </video>
          </div>
          <div className="w-full h-full z-4 overflow-hidden absolute top-0 left-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>

          <div className="global-container overflow-hidden relative z-5 h-full flex flex-col justify-center items-start">
            <div className=" w-full">
              <p className="text-gray-50 text-2xl  lg:text-6xl xxl:text-7xl">
                We specialize in
              </p>
              <FlipWords
                words={words}
                className={`text-gray-50 uppercase lg:mt-3 tracking-tight leading-tighter text-4xl lg:text-7xl xxl:text-8xl font-Satoshi font-bold`}
              />
              <p className="text-gray-50 lg:mt-3 text-2xl lg:text-6xl xxl:text-7xl">
                that Elevate Your Business.
              </p>
            </div>
          </div>
        </section>
        {/*...::: Hero Section End :::... */}
        <section className=" mt-14 xl:mt-32 ">
          <p className="global-container mb-10 text-3xl lg:text-6xl tracking-tight font-Satoshi font-[600] w-full lg:w-2/3  text-center">
            Our{" "}
            <span className="bg-gradient-to-r font-Telma px-1 from-blue-600 to-indigo-400 bg-clip-text text-transparent">
              {" "}
              Tech{" "}
            </span>{" "}
            Experties
          </p>
          <Marquee className=" [--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
        </section>
        <section className="my-28 global-container">
          <div className="flex  justify-between items-center">
            <p className="global-container mb-3 text-3xl lg:text-6xl  font-Satoshi font-[600] w-full lg:w-2/3  text-center">
              We{" "}
              <span className="bg-gradient-to-r font-Telma px-1 from-blue-600 to-indigo-400 bg-clip-text text-transparent">
                Specialize{" "}
              </span>
              in{" "}
            </p>
            <div className="hidden lg:flex">
              <SwiperNavButtons swiperRef={swiperRef} />
            </div>
          </div>

          <Swiper
            ref={swiperRef}
            spaceBetween={10}
            slidesPerView={1.3}
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
                slidesPerView: 4, // 4 slides for screens >= 1024px
              },
            }}
            className=" mt-5 xl:mt-10"
          >
            {specialize.map((elem) => {
              return (
                <SwiperSlide key={elem.id} className="w-full flex-grow">
                  <motion.div
                    className="px-6 py-6  shadow-md rounded-xl flex flex-col justify-between items-start min-h-[550px] xl:min-h-[600px] xxl:min-h-[500px]"
                    style={{ backgroundColor: elem.color }}
                  >
                    <div className="flex justify-start w-full">
                      <div className="size-20">
                        <img src={elem.img} />
                      </div>
                    </div>
                    <p className="font-satoshi w-full font-bold text-2xl mt-6">
                      {elem.title}
                    </p>
                    <p className="w-full font-satoshi font-medium text-lg mt-3">
                      {elem.description}
                    </p>
                    <div className="w-full flex justify-start mt-7">
                      <button
                        onClick={() => setisOpen(true)}
                        className="text-gray-50 overflow-hidden group rounded-lg relative font-Satoshi font-medium py-2 text-md px-5 bg-black"
                      >
                        <p className="relative z-10">Lets Connect</p>
                        <div className="bg-sky-500 w-1 h-1 group-hover:scale-[50] absolute -bottom-1 left-1/2 -translate-1/2 rounded-full transition-all duration-300" />
                      </button>
                    </div>
                  </motion.div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </section>

        <section className="bg-blue-50 py-16 mt-20 lg:mt-32 flex flex-col items-center justify-center">
          <p className="global-container mb-3 text-3xl lg:text-6xl  font-Satoshi font-[600] w-full   text-center">
            We Turn{" "}
            <span className="bg-gradient-to-r font-Telma px-1 from-blue-600 to-indigo-400 bg-clip-text text-transparent">
              Good Ideas{" "}
            </span>
            Into{" "}
            <span className="bg-gradient-to-r font-Telma px-1 from-blue-600 to-indigo-400 bg-clip-text text-transparent">
              Great Things{" "}
            </span>
          </p>
          <div className="global-container  grid w-full  grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5 place-items-between">
            {experiences.map((exp, index) => (
              <div
                className="mt-20 flex gap-1 flex-col items-center"
                key={index}
              >
                <NumberTicker
                  value={`${exp.number}`}
                  className={`text-3xl lg:text-7xl font-[900] font-Satoshi`}
                  color={exp.color}
                />
                <p className="font-Satoshi text-center text-sm lg:text-xl font-medium">
                  {exp.name}
                </p>
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
              <div className="jos mb-10 lg:mb-16 xl:mb-14">
                <div className="w-full flex justify-center ">
                  <p className="global-container text-4xl lg:text-6xl  font-Satoshi font-[600] w-full  text-center">
                    Our{" "}
                    <span className="bg-gradient-to-r font-Telma px-1 from-blue-600 to-indigo-400 bg-clip-text text-transparent">
                      Service{" "}
                    </span>{" "}
                    and
                    <span className="bg-gradient-to-r font-Telma px-1 from-blue-600 to-indigo-400 bg-clip-text text-transparent">
                      Solutions{" "}
                    </span>{" "}
                  </p>
                </div>
              </div>
              {/* Section Content Block */}
              {/* Service List */}
              <ul className="jos grid grid-cols-1 gap-[2px] overflow-hidden rounded-[10px] border-2 border-black bg-black sm:grid-cols-2 lg:grid-cols-3">
                {/* Service Item */}
                <li className="group bg-white p-[30px] transition-all duration-300 ease-in-out hover:bg-black">
                  <div className="relative mb-9 h-[70px] w-[70px]">
                    <img
                      src="/assets/img_placeholder/th-1/service-icon-black-1.svg"
                      alt=""
                      width="70"
                      height="70"
                    />
                    <img
                      src="/assets/img_placeholder/th-1/service-icon-orange-1.svg"
                      alt="service-icon-orange-1"
                      width="70"
                      height="70"
                      className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                    />
                  </div>
                  <h3 className="mb-4 block text-xl leading-tight -tracking-[0.5px] group-hover:text-white xl:text-2xl xxl:text-[28px]">
                    <Link
                      href="/data-Analytics"
                      className="hover:text-blue-300"
                    >
                      Data analytics
                    </Link>
                  </h3>

                  <p className="mb-12 duration-300 group-hover:text-white">
                    Gain insights and make informed business decisions
                  </p>

                  <Link
                    href="/data-Analytics"
                    className="relative inline-block h-[30px] w-[30px] duration-300"
                  >
                    <img
                      src="/assets/img_placeholder/th-1/arrow-right-black.svg"
                      alt="arrow-right-black"
                      width="30"
                      height="30"
                    />
                    <img
                      src="/assets/img_placeholder/th-1/arrow-right-orange.svg"
                      alt="arrow-right-black"
                      width="30"
                      height="30"
                      className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                    />
                  </Link>
                </li>
                {/* Service Item */}
                {/* Service Item */}
                <li className="group bg-white p-[30px] transition-all duration-300 ease-in-out hover:bg-black">
                  <div className="relative mb-9 h-[70px] w-[70px]">
                    <img
                      src="/assets/img_placeholder/th-1/service-icon-black-2.svg"
                      alt="service-icon-black-2"
                      width="70"
                      height="70"
                    />
                    <img
                      src="/assets/img_placeholder/th-1/service-icon-orange-2.svg"
                      alt="service-icon-orange-1"
                      width="70"
                      height="70"
                      className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                    />
                  </div>

                  <h3 className="mb-4 block text-xl leading-tight -tracking-[0.5px] group-hover:text-white xl:text-2xl xxl:text-[28px]">
                    <Link href="/generative-ai" className="hover:text-blue-300">
                      Generative AI
                    </Link>
                  </h3>

                  <p className="mb-12 duration-300 group-hover:text-white">
                    Decode automation like never before
                  </p>

                  <Link
                    href="/generative-ai"
                    className="relative inline-block h-[30px] w-[30px] duration-300"
                  >
                    <img
                      src="/assets/img_placeholder/th-1/arrow-right-black.svg"
                      alt="arrow-right-black"
                      width="30"
                      height="30"
                    />
                    <img
                      src="/assets/img_placeholder/th-1/arrow-right-orange.svg"
                      alt="arrow-right-black"
                      width="30"
                      height="30"
                      className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                    />
                  </Link>
                  {/* Features Item */}
                  {/* Features Item */}
                </li>
                {/* Service Item */}
                {/* Service Item */}
                <li className="group bg-white p-[30px] transition-all duration-300 ease-in-out hover:bg-black">
                  <div className="relative mb-9 h-[70px] w-[70px]">
                    <img
                      src="/assets/img_placeholder/th-1/service-icon-black-3.svg"
                      alt="service-icon-black-3"
                      width="70"
                      height="70"
                    />
                    <img
                      src="/assets/img_placeholder/th-1/service-icon-orange-3.svg"
                      alt="service-icon-orange-3"
                      width="70"
                      height="70"
                      className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                    />
                  </div>
                  <h3 className="mb-4 block text-xl leading-tight -tracking-[0.5px] group-hover:text-white xl:text-2xl xxl:text-[28px]">
                    <Link
                      href="/cloud-transformation"
                      className="hover:text-blue-300"
                    >
                      Cloud transformation
                    </Link>
                  </h3>

                  <p className="mb-12 duration-300 group-hover:text-white">
                    Introduce dependable processes to make changes happen
                  </p>

                  <Link
                    href="/cloud-transformation"
                    className="relative inline-block h-[30px] w-[30px] duration-300"
                  >
                    <img
                      src="/assets/img_placeholder/th-1/arrow-right-black.svg"
                      alt="arrow-right-black"
                      width="30"
                      height="30"
                    />
                    <img
                      src="/assets/img_placeholder/th-1/arrow-right-orange.svg"
                      alt="arrow-right-black"
                      width="30"
                      height="30"
                      className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                    />
                  </Link>
                </li>
                {/* Service Item */}
                {/* Service Item */}
                <li className="group bg-white p-[30px] transition-all duration-300 ease-in-out hover:bg-black">
                  <div className="relative mb-9 h-[70px] w-[70px]">
                    <img
                      src="/assets/img_placeholder/th-1/service-icon-black-4.svg"
                      alt="service-icon-black-4"
                      width="70"
                      height="70"
                    />
                    <img
                      src="/assets/img_placeholder/th-1/service-icon-orange-4.svg"
                      alt="service-icon-orange-4"
                      width="70"
                      height="70"
                      className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                    />
                  </div>
                  <h3 className="mb-4 block text-xl leading-tight -tracking-[0.5px] group-hover:text-white xl:text-2xl xxl:text-[28px]">
                    <button
                      href="/service-details"
                      className="hover:text-blue-300"
                    >
                      Mobile App Development
                    </button>
                  </h3>

                  <p className="mb-12 duration-300 group-hover:text-white">
                    Take your business to millions
                  </p>

                  <button
                    href="/service-details"
                    className="relative inline-block h-[30px] w-[30px] duration-300"
                  >
                    <img
                      src="/assets/img_placeholder/th-1/arrow-right-black.svg"
                      alt="arrow-right-black"
                      width="30"
                      height="30"
                    />
                    <img
                      src="/assets/img_placeholder/th-1/arrow-right-orange.svg"
                      alt="arrow-right-black"
                      width="30"
                      height="30"
                      className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                    />
                  </button>
                </li>
                <li className="group bg-white p-[30px] transition-all duration-300 ease-in-out hover:bg-black">
                  <div className="relative mb-9 h-[60px] w-[60px]">
                    <img
                      src="/assets/img_placeholder/th-1/mobile-dev-blue.svg"
                      alt="service-icon-black-4"
                      width="60"
                      height="60"
                    />
                    <img
                      src="/assets/img_placeholder/th-1/mobile-dev-black.svg"
                      alt="service-icon-orange-4"
                      width="60"
                      height="60"
                      className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                    />
                  </div>
                  <h3 className="mb-4 block text-xl leading-tight -tracking-[0.5px] group-hover:text-white xl:text-2xl xxl:text-[28px]">
                    <Link href="/web-developer" className="hover:text-blue-300">
                      Web development
                    </Link>
                  </h3>

                  <p className="mb-12 duration-300 group-hover:text-white">
                    Launch focused products and make it big
                  </p>

                  <Link
                    href="/web-developer"
                    className="relative inline-block h-[30px] w-[30px] duration-300"
                  >
                    <img
                      src="/assets/img_placeholder/th-1/arrow-right-black.svg"
                      alt="arrow-right-black"
                      width="30"
                      height="30"
                    />
                    <img
                      src="/assets/img_placeholder/th-1/arrow-right-orange.svg"
                      alt="arrow-right-black"
                      width="30"
                      height="30"
                      className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                    />
                  </Link>
                </li>
                <li className="group bg-white p-[30px] transition-all duration-300 ease-in-out hover:bg-black">
                  <div className="relative mb-9 h-[60px] w-[60px]">
                    <img
                      src="/assets/img_placeholder/th-1/digital-black.svg"
                      alt="service-icon-black-4"
                      width="60"
                      height="60"
                    />
                    <img
                      src="/assets/img_placeholder/th-1/digital-blue.svg"
                      alt="service-icon-orange-4"
                      width="60"
                      height="60"
                      className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                    />
                  </div>
                  <h3 className="mb-4 block text-xl leading-tight -tracking-[0.5px] group-hover:text-white xl:text-2xl xxl:text-[28px]">
                    <Link
                      href="/digital-marketing"
                      className="hover:text-blue-300"
                    >
                      Digital marketing
                    </Link>
                  </h3>

                  <p className="mb-12 duration-300 group-hover:text-white">
                    Take your business to best online channels
                  </p>

                  <Link
                    href="/digital-marketing"
                    className="relative inline-block h-[30px] w-[30px] duration-300"
                  >
                    <img
                      src="/assets/img_placeholder/th-1/arrow-right-black.svg"
                      alt="arrow-right-black"
                      width="30"
                      height="30"
                    />
                    <img
                      src="/assets/img_placeholder/th-1/arrow-right-orange.svg"
                      alt="arrow-right-black"
                      width="30"
                      height="30"
                      className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                    />
                  </Link>
                </li>
                {/* Service Item */}
              </ul>
              {/* Service List */}
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>

        {/*...::: Service Section End :::... */}

        <section className="mb-16 relative">
          <div className="overflow-hidden">
            <div className="blue-gradient-1 absolute -left-[15px] top-[61%] -z-[1] w-[200px] h-[200px] lg:h-[400px] lg:w-[400px] -rotate-[-9.022deg] rounded-[400px]"></div>

            {/* Body Background Shape 2 */}
            <div className="blue-gradient-2 absolute -left-[100px] top-[64%] -z-[1]  w-[160px] h-[160px] lg:h-[360px] lg:w-[360px] -rotate-[-9.022deg] rounded-[360px]"></div>
          </div>
          <div className="global-container ">
            <p className="global-container text-3xl lg:text-6xl  font-Satoshi font-[600] w-full   text-center">
              Broad
              <span className="bg-gradient-to-r font-Telma px-1 from-blue-600 to-indigo-400 bg-clip-text text-transparent">
                {" "}
                Industry{" "}
              </span>
              Usage
            </p>
          </div>
          <div className=" global-container mt-10 grid grid-cols-1  xl:grid-cols-4 gap-5">
            {industries.map((industry, index) => (
              <div
                className="bg-white border border=gray-900  group relative shadow-sm cursor-pointer overflow-hidden rounded-xl flex flex-col justify-start items-start px-1 pt-1 pb-5 "
                key={index}
              >
                <div
                  style={{ backgroundColor: industry.color }}
                  className="w-full relative rounded-xl h-60 "
                >
                  <img
                    className="w-2/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  *:"
                    src={industry.icon}
                  />
                </div>
                <p className="font-[700] text-2xl capitalize px-4 mt-4 font-Satoshi relative z-5">
                  {industry.name}
                </p>
                <p className=" relative text-md xl:text-[.8rem] xxl:text-md z-5 text-gray-500 px-4 text-sm mt-1 capitalize ">
                  {industry.description}{" "}
                </p>
              </div>
            ))}
          </div>
        </section>
        {/*...::: Funfact Section End :::... */}

        {/*...::: Awards Section starts :::... */}
        <section className="mt-28">
          <p className="global-container mb-10 text-3xl lg:text-6xl font-Satoshi font-[600] w-full   text-center">
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
        {/*...::: FAQ Section Start :::... */}
        <section className="mt-20 hidden lg:block   bg-black  ">
          <LampContainer>
            <motion.p
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className=" bg-gradient-to-b from-cyan-100 to-slate-500 bg-clip-text text-center font-Satoshi font-medium tracking-tight text-transparent md:text-7xl"
            >
              We are <br />{" "}
              <span className="text-xl lg:text-8xl ">
                Menlo
                <span className="font-Clash bg-gradient-to-b from-cyan-200 to-blue-500 bg-clip-text">
                  Cloud
                </span>
              </span>
            </motion.p>
            <motion.button
              onClick={() => setisOpen(true)}
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="text-center mt-8 px-4 py-2 bg-gradient-to-b from-slate-400 to-slate-500 rounded-md font-Satoshi font-medium tracking-tight text-2xl md:text-xl   !text-gray-900 "
            >
              learn more
            </motion.button>
          </LampContainer>
        </section>

        <section className="mt-20 block lg:hidden">
          <div className="w-full flex flex-col justify-center items-center">
            <p className=" text-4xl font-Satoshi font-[500] my-5 lg:text-6xl">
              We are
            </p>
            <h1 className=" font-[800] gradient-text w-fit animate-gradient">
              Menlo<span className="font-Clash">Cloud</span>
            </h1>

            <div className="w-full overflow-hidden flex justify-center mt-6 relative">
              <button className="overflow-hidden group rounded-[50px] px-5 font-satoshi relative bg-black py-2 text-white  text-sm md:text-xl">
                <div className="bg-blue-500  size-1 group-hover:scale-[50] transition-all duration-500 rounded-full absolute top-[110%] left-1/2 -translate-x-1/2  -translate-y-1/2"></div>
                <span className="relative z-5 "> Join Our Team</span>
              </button>
            </div>
          </div>
        </section>
        {/*...::: FAQ Section End :::... */}
        <BlogSwiper />
        {/*...::: Testimonial Section Start :::... */}
        <section className="testimonial-section overflow-hidden mt-40">
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
                    “We have a fully dynamic website, thanks to the team. We are
                    able to seamlessly work on our digital queries and serve our
                    clients and customers better.”
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
                        Zippro International
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
                    Our customer inflow has spiked with a great website in
                    place. Thankful to Menlocloud. We are able to serve more
                    customers now.
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
                        Tea Villa Cafe
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
      </main>
      {/*...::: Footer Start :::... */}
      <Footer_01 />
      {/*...::: Footer End :::... */}
    </div>
  );
}

export default Home;
const firstRow = techLogos;
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
const clientCard = ({ img, index }) => {
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

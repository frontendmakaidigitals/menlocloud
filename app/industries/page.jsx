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

const blogs = [
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

const points = [
  {
    name: "Hardware",
    icon: "https://cdn3d.iconscout.com/3d/premium/thumb/circuit-board-3d-icon-download-in-png-blend-fbx-gltf-file-formats--microchip-microprocessor-chip-motherboard-electrician-tools-pack-industry-icons-9741473.png?f=webp",
    description:
      "Our state-of-the-art hardware components are designed for durability and performance, ensuring that your systems run efficiently and effectively.",
  },
  {
    name: "Semiconductor",
    icon: "https://static.vecteezy.com/system/resources/previews/024/683/392/original/3d-icon-processor-component-computer-hardware-illustration-concept-icon-render-png.png",
    description:
      "Our state-of-the-art hardware components are designed for durability and performance, ensuring that your systems run efficiently and effectively.",
  },
  {
    name: "Software",
    icon: "https://cdn3d.iconscout.com/3d/premium/thumb/software-development-3d-icon-download-in-png-blend-fbx-gltf-file-formats--programming-coding-web-pack-design-icons-5618482.png",
    description:
      "Our state-of-the-art hardware components are designed for durability and performance, ensuring that your systems run efficiently and effectively.",
  },
  {
    name: "Professional services",
    icon: "https://cdn3d.iconscout.com/3d/premium/thumb/consulting-creative-idea-3d-icon-download-in-png-blend-fbx-gltf-file-formats--chat-speech-bubble-digital-nomad-pack-business-icons-6166279.png?f=webp",
    description:
      "Our state-of-the-art hardware components are designed for durability and performance, ensuring that your systems run efficiently and effectively.",
  },
];
function Industries() {
  const swiperRef = useRef(null);
  const [tabId, setTabId] = useState(0);
  return (
    <>
      <Header_01 />
      <main className="main-wrapper relative ">
        <div className="w-full h-auto lg:h-[85vh] xl:h-screen bg-no-repeat bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1725203574073-79922f64110a?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
          <div className="  bg-gradient-to-b w-full h-full from-gray-800/50 via-transparent to-gray-700/40">
            <div className="global-container flex lg:flex-row items-end py-32 justify-start h-full">
              <div className=" mt-32 xl:mt-0 w-full lg:w-2/3 ">
                <p className="font-Satoshi text-3xl xl:text-4xl xxl:text-6xl w-full font-bold text-center lg:text-start text-black">
                  Empowering Industries Through Proven Solutions
                </p>
                <p className="mt-3 font-Satoshi font-semibold leading-relaxed text-sm xl:text-lg text-gray-800 text-center lg:text-start w-full lg:w-2/4">
                  Discover how our innovative solutions have driven success
                  across various sectors, tackling unique challenges and
                  delivering impactful results.
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
            </div>
          </div>
        </div>

        <section className="my-28 global-container">
          <p className="mb-3 text-3xl lg:text-6xl font-Satoshi font-[600] w-full text-start lg:text-center">
            <span className="bg-gradient-to-r font-Telma px-1 from-blue-600 to-indigo-400 bg-clip-text text-transparent">
              Technology
            </span>
          </p>

          <div className="w-full grid grid-cols-1 mt-14 gap-x-10 gap-y-14 lg:grid-cols-2 place-items-center">
            <div className="flex flex-col gap-3">
              <p className="text-xl lg:text-4xl  font-Satoshi font-[600]">
                Empowering Industries with Next-Gen Technology
              </p>
              <p className="text-lg mt-2 font-Satoshi font-medium">
                At MenloCloud, we leverage cutting-edge technology to deliver
                exceptional solutions tailored to the unique needs of our
                clients. From advanced manufacturing techniques to smart
                automation and data analytics, our technological expertise
                empowers industries to enhance efficiency, reduce costs, and
                drive innovation. We are committed to staying at the forefront
                of technological advancements, ensuring that our clients benefit
                from the best tools and practices available in the market.
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
            <div className="bg-red-500 h-full overflow-hidden rounded-xl">
              <img
                src={
                  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
              />
            </div>
          </div>

          <div className="grid mt-16 grid-cols-1 lg:grid-cols-4 gap-x-5 gap-y-10">
            {points.map((elem, index) => (
              <div
                key={index}
                className="w-full rounded-lg overflow-hidden h-auto bg-gray-100"
              >
                <div className="p-2">
                  <div className="w-full flex justify-center items-center overflow-hidden rounded-lg h-[230px] bg-gray-200">
                    <img className="size-60" src={elem.icon} />
                  </div>
                </div>
                <div className=" px-2 pb-5">
                  <p className="font-Satoshi mt-2 text-xl font-bold">
                    {elem.name}
                  </p>
                  <p className="font-Satoshi mt-3 text-md">
                    {elem.description}
                  </p>
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
                  slidesPerView: 4, // 4 slides for screens >= 1024px
                },
              }}
              className=" mt-5 xl:mt-10"
            >
              {blogs.map((elem, index) => {
                return (
                  <SwiperSlide key={index} className="  w-full cursor-pointer ">
                    <motion.div
                      whileHover={{ backgroundColor: elem.hoverColor }}
                      className={` rounded-xl bg-slate-100`}
                    >
                      <Link href="/blog-details">
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
                      </Link>
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

export default Industries;

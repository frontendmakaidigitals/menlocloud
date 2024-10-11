"use client";
import Footer_01 from "@/components/footer/Footer_01";
import Header_01 from "@/components/header/Header_01";
import "swiper/css/navigation";
import "swiper/css";
import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { GoArrowRight } from "react-icons/go";
import SwiperNavButtons from "@/components/SwiperNavButton";
import { motion } from "framer-motion";
import { Timeline } from "@/components/ui/timeline";
import Link from "next/link";
import axios from "axios";
import BlogSwiper from "@/components/blogSwiper";

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
function Industries({ params }) {
  const { name } = params;
  const swiperRef = useRef(null);
  const imageURL = "https://admin.yatriclubs.com/";
  const [blogs, setBlogs] = useState([]);
  const [data, setData] = useState();
  const [loading, setIsLoading] = useState(false);
  const [isBlogLoaded, setIsBlogLoaded] = useState(false);

  useEffect(() => {
    axios.get("/industries.json").then((res) => {
      res.data.map((item, index) => {
        if (index == name[0]) {
          setData(item);
        }
      });
    });
  }, []);
  console.log(data);
  const getBlogs = (data) => {
    if (true) {
      setIsLoading(true);
      axios.get("https://admin.yatriclubs.com/sanctum/csrf-cookie", {
        withCredentials: true,
      });
      axios
        .get(`https://admin.yatriclubs.com/api/blog`, {
          withCredentials: true,
        })
        .then((res) => {
          setBlogs(res.data);
          setIsBlogLoaded("success");
          setIsLoading(false);
        })
        .catch((error) => {
          setIsBlogLoaded("failed");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };
  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <>
      <Header_01 />
      <main className="main-wrapper relative ">
        <div className="w-full h-auto lg:h-[85vh] xl:h-screen bg-no-repeat bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1725203574073-79922f64110a?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
          <div className="  bg-gradient-to-b w-full h-full from-gray-800/50 via-transparent to-gray-700/40">
            <div className="global-container flex lg:flex-row items-end py-32 justify-start h-full">
              <div className=" mt-32 xl:mt-0 w-full lg:w-2/3 ">
                <p className="font-Satoshi text-3xl xl:text-4xl xxl:text-6xl w-full font-bold text-center lg:text-start text-black">
                  {data?.title}
                </p>
                <p className="mt-3 font-Satoshi font-semibold leading-relaxed text-sm xl:text-lg text-gray-800 text-center lg:text-start w-full lg:w-2/4">
                  {data?.subTitle}
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
              {data?.name}
            </span>
          </p>

          <div className="w-full grid grid-cols-1 mt-14 gap-x-10 gap-y-14 lg:grid-cols-2 place-items-center">
            <div className="flex flex-col gap-3">
              <p className="text-xl lg:text-4xl  font-Satoshi font-[600]">
                {data?.contentHead}
              </p>
              <p className="text-lg mt-2 font-Satoshi font-medium">
                {data?.contentDescription}
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
            {data?.points.map((elem, index) => (
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

        <BlogSwiper />
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

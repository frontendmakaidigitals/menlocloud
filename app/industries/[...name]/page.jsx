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

function Industries({ params }) {
  const { name } = params;

  const [data, setData] = useState();

  useEffect(() => {
    axios.get("/industries.json").then((res) => {
      res.data.map((item, index) => {
        if (index == name[0]) {
          setData(item);
        }
      });
    });
  }, []);

  return (
    <>
      <Header_01 />
      <main className="main-wrapper relative ">
        <div
          className="w-full h-auto lg:h-[85vh] xl:h-screen bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: `url(${data?.bigImg})` }}
        >
          <div className="  bg-gradient-to-b w-full h-full from-gray-800/50 via-transparent to-gray-900/50">
            <div className="global-container flex lg:flex-row items-end py-32 justify-start h-full">
              <div className=" mt-32 xl:mt-0 w-full lg:w-2/3 ">
                <p className="font-Satoshi text-3xl xl:text-4xl xxl:text-6xl w-full font-bold text-center lg:text-start text-gray-100">
                  {data?.title}
                </p>
                <p
                  className={`mt-3 font-Satoshi font-semibold leading-relaxed text-sm xl:text-lg text-gray-100 text-center lg:text-start w-full lg:w-2/4`}
                >
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
            <div className="bg-slate-200 h-full overflow-hidden rounded-xl">
              <img src={data?.contentImg} />
            </div>
          </div>

          <div className="grid mt-16 grid-cols-1 lg:grid-cols-3 gap-x-5 place-items-center gap-y-10">
            {data?.points.map((elem, index) => (
              <div
                key={index}
                className="w-full rounded-lg min-h-[400px] flex flex-col justify-between overflow-hidden h-auto bg-gray-100"
              >
                <div className="p-2">
                  <div className="w-full flex justify-center items-center overflow-hidden rounded-lg h-[230px] bg-gray-200">
                    <img className="size-60" src={elem.icon} />
                  </div>
                </div>
                <div className="px-2 pb-5 flex-1">
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

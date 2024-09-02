"use client";
import Footer_01 from "@/components/footer/Footer_01";
import Header_01 from "@/components/header/Header_01";
import useAccordion from "@/components/hooks/useAccordion";
import Image from "next/image";
import Link from "next/link";
import SwiperNavButtons from "@/components/SwiperNavButton";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import {motion} from 'framer-motion'

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
function Services() {
  const [activeIndex, handleAccordion] = useAccordion(0);
  const swiperRef = useRef(null);
  return (
    <>
      <Header_01 />
      <main className="main-wrapper relative overflow-hidden">
        <div className="w-full mb-20  h-screen bg-no-repeat bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1560264418-c4445382edbc?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
          <div className="bg-gradient-to-t w-full h-full from-gray-800/40 via-gray-700/40 to-transparent">
            <div className="global-container flex flex-col justify-around  w-full h-full">
              <div></div>
              <div></div>
              <div>
                <h2 className="font-dmSans font-bold text-gray-50">
                  Our Services
                </h2>
                <p className="mt-3 leading-relaxed text-lg text-gray-100 w-2/4">
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
        <section id="section-service">
          {/* Section Spacer */}
          <div className="pb-20 xl:pb-[150px]">
            {/* Section Container */}
            <div className="global-container">
              {/* Section Content Block */}
              <div className="jos mb-10 text-center lg:mb-16 xl:mb-20">
                <div className="mx-auto max-w-md lg:max-w-xl xl:max-w-[950px]">
                  <h2>We provide smart AI solutions for all tasks</h2>
                </div>
              </div>
              {/* Section Content Block */}
              {/* Service List */}
              <ul className="jos grid grid-cols-1 gap-[2px] overflow-hidden rounded-[10px] border-2 border-black bg-black sm:grid-cols-2 lg:grid-cols-4">
                {/* Service Item */}
                <li className="group bg-white p-[30px] transition-all duration-300 ease-in-out hover:bg-black">
                  <div className="relative mb-9 h-[70px] w-[70px]">
                    <Image
                      src="/assets/img_placeholder/th-1/service-icon-black-1.svg"
                      alt="service-icon-black-1"
                      width={70}
                      height={70}
                    />
                    <Image
                      src="/assets/img_placeholder/th-1/service-icon-orange-1.svg"
                      alt="service-icon-orange-1"
                      width={70}
                      height={70}
                      className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                    />
                  </div>
                  <h3 className="mb-4 block text-xl leading-tight -tracking-[0.5px] group-hover:text-white xl:text-2xl xxl:text-[28px]">
                    <Link
                      href="/service-details"
                      className="hover:text-colorOrangyRed"
                    >
                      Resource Flexibility
                    </Link>
                  </h3>
                  <p className="mb-12 duration-300 group-hover:text-white">
                    This is an excellent option for people &amp; small
                    businesses who are starting out.
                  </p>
                  <Link
                    href="/service-details"
                    className="relative inline-block h-[30px] w-[30px] duration-300"
                  >
                    <Image
                      src="/assets/img_placeholder/th-1/arrow-right-black.svg"
                      alt="arrow-right-black"
                      width={30}
                      height={30}
                    />
                    <Image
                      src="/assets/img_placeholder/th-1/arrow-right-orange.svg"
                      alt="arrow-right-black"
                      width={30}
                      height={30}
                      className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                    />
                  </Link>
                </li>
                {/* Service Item */}
                {/* Service Item */}
                <li className="group bg-white p-[30px] transition-all duration-300 ease-in-out hover:bg-black">
                  <div className="relative mb-9 h-[70px] w-[70px]">
                    <Image
                      src="/assets/img_placeholder/th-1/service-icon-black-2.svg"
                      alt="service-icon-black-2"
                      width={70}
                      height={70}
                    />
                    <Image
                      src="/assets/img_placeholder/th-1/service-icon-orange-2.svg"
                      alt="service-icon-orange-1"
                      width={70}
                      height={70}
                      className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                    />
                  </div>
                  <h3 className="mb-4 block text-xl leading-tight -tracking-[0.5px] group-hover:text-white xl:text-2xl xxl:text-[28px]">
                    <Link
                      href="/service-details"
                      className="hover:text-colorOrangyRed"
                    >
                      Managed Services
                    </Link>
                  </h3>
                  <p className="mb-12 duration-300 group-hover:text-white">
                    This is an excellent option for people &amp; small
                    businesses who are starting out.
                  </p>
                  <Link
                    href="/service-details"
                    className="relative inline-block h-[30px] w-[30px] duration-300"
                  >
                    <Image
                      src="/assets/img_placeholder/th-1/arrow-right-black.svg"
                      alt="arrow-right-black"
                      width={30}
                      height={30}
                    />
                    <Image
                      src="/assets/img_placeholder/th-1/arrow-right-orange.svg"
                      alt="arrow-right-black"
                      width={30}
                      height={30}
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
                    <Image
                      src="/assets/img_placeholder/th-1/service-icon-black-3.svg"
                      alt="service-icon-black-3"
                      width={70}
                      height={70}
                    />
                    <Image
                      src="/assets/img_placeholder/th-1/service-icon-orange-3.svg"
                      alt="service-icon-orange-3"
                      width={70}
                      height={70}
                      className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                    />
                  </div>
                  <h3 className="mb-4 block text-xl leading-tight -tracking-[0.5px] group-hover:text-white xl:text-2xl xxl:text-[28px]">
                    <Link
                      href="/service-details"
                      className="hover:text-colorOrangyRed"
                    >
                      Web-Based Access
                    </Link>
                  </h3>
                  <p className="mb-12 duration-300 group-hover:text-white">
                    This is an excellent option for people &amp; small
                    businesses who are starting out.
                  </p>
                  <Link
                    href="/service-details"
                    className="relative inline-block h-[30px] w-[30px] duration-300"
                  >
                    <Image
                      src="/assets/img_placeholder/th-1/arrow-right-black.svg"
                      alt="arrow-right-black"
                      width={30}
                      height={30}
                    />
                    <Image
                      src="/assets/img_placeholder/th-1/arrow-right-orange.svg"
                      alt="arrow-right-black"
                      width={30}
                      height={30}
                      className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                    />
                  </Link>
                </li>
                {/* Service Item */}
                {/* Service Item */}
                <li className="group bg-white p-[30px] transition-all duration-300 ease-in-out hover:bg-black">
                  <div className="relative mb-9 h-[70px] w-[70px]">
                    <Image
                      src="/assets/img_placeholder/th-1/service-icon-black-4.svg"
                      alt="service-icon-black-4"
                      width={70}
                      height={70}
                    />
                    <Image
                      src="/assets/img_placeholder/th-1/service-icon-orange-4.svg"
                      alt="service-icon-orange-4"
                      width={70}
                      height={70}
                      className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                    />
                  </div>
                  <h3 className="mb-4 block text-xl leading-tight -tracking-[0.5px] group-hover:text-white xl:text-2xl xxl:text-[28px]">
                    <Link
                      href="/service-details"
                      className="hover:text-colorOrangyRed"
                    >
                      Resource Flexibility
                    </Link>
                  </h3>
                  <p className="mb-12 duration-300 group-hover:text-white">
                    This is an excellent option for people &amp; small
                    businesses who are starting out.
                  </p>
                  <Link
                    href="/service-details"
                    className="relative inline-block h-[30px] w-[30px] duration-300"
                  >
                    <Image
                      src="/assets/img_placeholder/th-1/arrow-right-black.svg"
                      alt="arrow-right-black"
                      width={30}
                      height={30}
                    />
                    <Image
                      src="/assets/img_placeholder/th-1/arrow-right-orange.svg"
                      alt="arrow-right-black"
                      width={30}
                      height={30}
                      className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                    />
                  </Link>
                </li>
                {/* Service Item */}
                {/* Service Item */}
                <li className="group bg-white p-[30px] transition-all duration-300 ease-in-out hover:bg-black">
                  <div className="relative mb-9 h-[70px] w-[70px]">
                    <Image
                      src="/assets/img_placeholder/th-1/service-icon-black-5.svg"
                      alt="service-icon-black-5"
                      width={70}
                      height={70}
                    />
                    <Image
                      src="/assets/img_placeholder/th-1/service-icon-orange-5.svg"
                      alt="service-icon-orange-5"
                      width={70}
                      height={70}
                      className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                    />
                  </div>
                  <h3 className="mb-4 block text-xl leading-tight -tracking-[0.5px] group-hover:text-white xl:text-2xl xxl:text-[28px]">
                    <Link
                      href="/service-details"
                      className="hover:text-colorOrangyRed"
                    >
                      Anomaly Detection
                    </Link>
                  </h3>
                  <p className="mb-12 duration-300 group-hover:text-white">
                    AI SaaS can analyze IoT sensor data to detect predict
                    equipment failures.
                  </p>
                  <Link
                    href="/service-details"
                    className="relative inline-block h-[30px] w-[30px] duration-300"
                  >
                    <Image
                      src="/assets/img_placeholder/th-1/arrow-right-black.svg"
                      alt="arrow-right-black"
                      width={30}
                      height={30}
                    />
                    <Image
                      src="/assets/img_placeholder/th-1/arrow-right-orange.svg"
                      alt="arrow-right-black"
                      width={30}
                      height={30}
                      className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                    />
                  </Link>
                </li>
                {/* Service Item */}
                {/* Service Item */}
                <li className="group bg-white p-[30px] transition-all duration-300 ease-in-out hover:bg-black">
                  <div className="relative mb-9 h-[70px] w-[70px]">
                    <Image
                      src="/assets/img_placeholder/th-1/service-icon-black-6.svg"
                      alt="service-icon-black-6"
                      width={70}
                      height={70}
                    />
                    <Image
                      src="/assets/img_placeholder/th-1/service-icon-orange-6.svg"
                      alt="service-icon-orange-6"
                      width={70}
                      height={70}
                      className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                    />
                  </div>
                  <h3 className="mb-4 block text-xl leading-tight -tracking-[0.5px] group-hover:text-white xl:text-2xl xxl:text-[28px]">
                    <Link
                      href="/service-details"
                      className="hover:text-colorOrangyRed"
                    >
                      Predictive Analytics
                    </Link>
                  </h3>
                  <p className="mb-12 duration-300 group-hover:text-white">
                    Solutions that use AI to predict future trends and outcomes,
                    such as demand forecastin.
                  </p>
                  <Link
                    href="/service-details"
                    className="relative inline-block h-[30px] w-[30px] duration-300"
                  >
                    <Image
                      src="/assets/img_placeholder/th-1/arrow-right-black.svg"
                      alt="arrow-right-black"
                      width={30}
                      height={30}
                    />
                    <Image
                      src="/assets/img_placeholder/th-1/arrow-right-orange.svg"
                      alt="arrow-right-black"
                      width={30}
                      height={30}
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
                    <Image
                      src="/assets/img_placeholder/th-1/service-icon-black-7.svg"
                      alt="service-icon-black-7"
                      width={70}
                      height={70}
                    />
                    <Image
                      src="/assets/img_placeholder/th-1/service-icon-orange-7.svg"
                      alt="service-icon-orange-7"
                      width={70}
                      height={70}
                      className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                    />
                  </div>
                  <h3 className="mb-4 block text-xl leading-tight -tracking-[0.5px] group-hover:text-white xl:text-2xl xxl:text-[28px]">
                    <Link
                      href="/service-details"
                      className="hover:text-colorOrangyRed"
                    >
                      Speech Recognition
                    </Link>
                  </h3>
                  <p className="mb-12 duration-300 group-hover:text-white">
                    Speech recognition services convert spoken language into
                    text and accessibility.
                  </p>
                  <Link
                    href="/service-details"
                    className="relative inline-block h-[30px] w-[30px] duration-300"
                  >
                    <Image
                      src="/assets/img_placeholder/th-1/arrow-right-black.svg"
                      alt="arrow-right-black"
                      width={30}
                      height={30}
                    />
                    <Image
                      src="/assets/img_placeholder/th-1/arrow-right-orange.svg"
                      alt="arrow-right-black"
                      width={30}
                      height={30}
                      className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                    />
                  </Link>
                </li>
                {/* Service Item */}
                {/* Service Item */}
                <li className="group bg-white p-[30px] transition-all duration-300 ease-in-out hover:bg-black">
                  <div className="relative mb-9 h-[70px] w-[70px]">
                    <Image
                      src="/assets/img_placeholder/th-1/service-icon-black-8.svg"
                      alt="service-icon-black-8"
                      width={70}
                      height={70}
                    />
                    <Image
                      src="/assets/img_placeholder/th-1/service-icon-orange-8.svg"
                      alt="service-icon-orange-8"
                      width={70}
                      height={70}
                      className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                    />
                  </div>
                  <h3 className="mb-4 block text-xl leading-tight -tracking-[0.5px] group-hover:text-white xl:text-2xl xxl:text-[28px]">
                    <Link
                      href="/service-details"
                      className="hover:text-colorOrangyRed"
                    >
                      Computer Vision
                    </Link>
                  </h3>
                  <p className="mb-12 duration-300 group-hover:text-white">
                    Computer vision services use AI to interpret and process
                    visual information.
                  </p>
                  <Link
                    href="/service-details"
                    className="relative inline-block h-[30px] w-[30px] duration-300"
                  >
                    <Image
                      src="/assets/img_placeholder/th-1/arrow-right-black.svg"
                      alt="arrow-right-black"
                      width={30}
                      height={30}
                    />
                    <Image
                      src="/assets/img_placeholder/th-1/arrow-right-orange.svg"
                      alt="arrow-right-black"
                      width={30}
                      height={30}
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
        <section id="section-service" className="mb-20 global-container">
          <div>
            <div className="flex justify-between items-center">
              <h2 className="text-gray-900">Random Texts</h2>
              <SwiperNavButtons swiperRef={swiperRef} />
            </div>
            <Swiper
              ref={swiperRef}
              spaceBetween={10}
              slidesPerView={4}
              loop={true}
			  className="mt-10"
            >
              {data.map((elem, index) => {
                return (
                  <SwiperSlide key={index} className="  w-full cursor-pointer ">
                    <motion.div
					whileHover={{backgroundColor:elem.hoverColor}}
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

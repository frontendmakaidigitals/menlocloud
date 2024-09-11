"use client";
import Footer_01 from "@/components/footer/Footer_01";
import Header_01 from "@/components/header/Header_01";
import SwiperNavButtons from "@/components/SwiperNavButton";
import { GoArrowUpRight } from "react-icons/go";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function Services() {
  const services = [
    {
      name: "Hire Web Developers",
      img: "/assets/img_placeholder/web.png",
      color: "#512DA8",
    },
    {
      name: "Hire App Developers",
      img: "/assets/img_placeholder/app.png",
      color: "black",
    },
    {
      name: "Hire eCommerce and CMS Developers",
      img: "/assets/img_placeholder/ecomm.png",
      color: "#F9A825",
    },
    {
      name: "Hire Developers for Automation Solutions",
      img: "/assets/img_placeholder/auto.png",
      color: "#00695C",
    },
    {
      name: "Hire Software Testers",
      img: "/assets/img_placeholder/tester.png",
      color: "#1565C0",
    },
    {
      name: "Hire Graphic Designers",
      img: "/assets/img_placeholder/graphics.png",
      color: "#9E9D24",
    },
  ];
  return (
    <>
      <Header_01 />
      <main className="main-wrapper relative overflow-hidden">
        <div className="w-full mb-20  h-[85vh] xl:h-screen bg-no-repeat bg-center bg-cover bg-[url('/assets/img_placeholder/staff.jpg')]">
          <div className="bg-gradient-to-b w-full h-full from-gray-800/40 to-gray-700/30">
            <div className="global-container flex flex-col justify-around  w-full h-full">
              <div></div>
              <div></div>
              <div className="mt-32 xl:mt-0">
                <h2 className="font-dmSans font-bold text-gray-50">
                  Staff Augmentation <br /> Services
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
          <h2 className="w-full text-center">Services We Offer</h2>
          <div className="grid place-items-center grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={index}
                style={{ backgroundColor: service?.color }}
                className="mt-10 border-[10px] cursor-pointer border-gray-200 group  rounded-2xl w-[300px] h-[400px] relative overflow-hidden"
              >
                <div className="size-28  absolute top-16 -translate-x-1/2 left-1/2 -translate-y-0">
                  <img className="w-full" src={service.img} />
                </div>
                <div className="size-4 group-hover:scale-[80] absolute transition-all duration-700  -top-4 -left-4 bg-gray-200 rounded-full"></div>
                <div className="size-3 group-hover:scale-[90] absolute transition-all duration-700 -top-4 -left-4 bg-white delay-200 rounded-full"></div>
                <div className="w-full relative  z-10 h-full flex py-5 px-5 flex-col justify-end items-start">
                  <p className="xl:text-2xl pr-3 font-bold font-Satoshi leading-snug group-hover:text-gray-900 transition-all duration-500 text-gray-100">
                    {service.name}
                  </p>
                  <p className="leading-snug mt-1 text-sm text-gray-200 group-hover:text-gray-800 transition-all duration-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <div className="w-full flex justify-between items-center">
                    <button className="px-4 bg-lime-300 py-2 font-Satoshi font-semibold text-sm mt-2  rounded-full">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-32">
          <div className="global-container flex justify-center">
            <h2>Why Choose Us?</h2>
          </div>
          <div className="global-container grid grid-cols-1 xl:grid-cols-4 gap-5 mt-10">
            <div className="w-full bg-red-300 overflow-hidden relative h-[350px] shadow-lg bg-[url('https://images.pexels.com/photos/5716031/pexels-photo-5716031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-no-repeat bg-center bg-cover rounded-xl xl:col-span-2 ">
              <div className="absolute top-0 left-0 bg-gradient-to-t from-gray-900/60 to-transparent w-full h-full"></div>
              <div className="w-full flex flex-col justify-end p-4 h-full">
                <p className="relative z-10 text-2xl font-Satoshi font-[600] text-gray-50">
                  {" "}
                  Experienced Professionals
                </p>
                <p className="relative z-10 font-Satoshi mt-1 text-gray-100 font-[500]">
                  We connect you with highly experienced specialists in the
                  Indian talent market with the specific skills you need for
                  your projects.
                </p>
              </div>
            </div>
            <div className="w-full bg-red-300 overflow-hidden relative h-[350px] shadow-lg bg-[url('https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-no-repeat bg-center bg-cover rounded-xl  ">
              <div className="absolute top-0 left-0 bg-gradient-to-t from-gray-900/60 to-transparent w-full h-full"></div>
              <div className="w-full flex flex-col justify-end p-4 h-full">
                <p className="relative z-10 text-2xl font-Satoshi font-[600] text-gray-50">
                  {" "}
                  Save upto 70%
                </p>
                <p className="relative z-10 font-Satoshi mt-1 text-gray-100 font-[500]">
                  You can save up to 70% by hiring dedicated specialists from us
                  - developers, designers, QA experts, and digital marketers
                </p>
              </div>
            </div>
            <div className="w-full bg-red-300 overflow-hidden relative h-[350px] shadow-lg bg-[url('https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-no-repeat bg-center bg-cover rounded-xl">
              <div className="absolute top-0 left-0 bg-gradient-to-t from-gray-900/60 to-transparent w-full h-full"></div>
              <div className="w-full flex flex-col justify-end p-4 h-full">
                <p className="relative z-10 text-2xl font-Satoshi font-[600] text-gray-50">
                  {" "}
                  Team Flexibility
                </p>
                <p className="relative z-10 font-Satoshi mt-1 text-gray-100 font-[500]">
                  You can scale up/down your team with ease when you hire our
                  offshore specialists for your projects.
                </p>
              </div>
            </div>
            <div className="w-full bg-red-300 overflow-hidden relative h-[350px] shadow-lg bg-[url('https://images.pexels.com/photos/6914650/pexels-photo-6914650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-no-repeat bg-center bg-cover rounded-xl ">
              <div className="absolute top-0 left-0 bg-gradient-to-t from-gray-900/60 to-transparent w-full h-full"></div>
              <div className="w-full flex flex-col justify-end p-4 h-full">
                <p className="relative z-10 text-2xl font-Satoshi font-[600] text-gray-50">
                  {" "}
                  Zero Overheads
                </p>
                <p className="relative z-10 font-Satoshi mt-1 text-gray-100 font-[500]">
                  We connect you with highly experienced specialists in the
                  Indian talent market with the specific skills you need for
                  your projects.
                </p>
              </div>
            </div>
            <div className="w-full bg-red-300 overflow-hidden relative h-[350px] shadow-lg bg-[url('https://images.pexels.com/photos/7841833/pexels-photo-7841833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-no-repeat bg-center bg-cover rounded-xl  ">
              <div className="absolute top-0 left-0 bg-gradient-to-t from-gray-900/60 to-transparent w-full h-full"></div>
              <div className="w-full flex flex-col justify-end p-4 h-full">
                <p className="relative z-10 text-2xl font-Satoshi font-[600] text-gray-50">
                  {" "}
                  Strict NDAs
                </p>
                <p className="relative z-10 font-Satoshi mt-1 text-gray-100 font-[500]">
                  You can save up to 70% by hiring dedicated specialists from us
                  - developers, designers, QA experts, and digital marketers
                </p>
              </div>
            </div>
            <div className="w-full bg-red-300 overflow-hidden relative h-[350px] shadow-lg bg-[url('https://images.pexels.com/photos/48770/business-time-clock-clocks-48770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-no-repeat bg-center bg-cover rounded-xl xl:col-span-2 ">
              <div className="absolute top-0 left-0 bg-gradient-to-t from-gray-900/60 to-transparent w-full h-full"></div>
              <div className="w-full flex flex-col justify-end p-4 h-full">
                <p className="relative z-10 text-2xl font-Satoshi font-[600] text-gray-50">
                  {" "}
                  Same Business Hours
                </p>
                <p className="relative z-10 font-Satoshi mt-1 text-gray-100 font-[500]">
                  You can scale up/down your team with ease when you hire our
                  offshore specialists for your projects.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer_01 />
    </>
  );
}

export default Services;

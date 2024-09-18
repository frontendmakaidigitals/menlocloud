"use client";
import { cn } from "@/lib/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import useAccordion from "@/components/hooks/useAccordion";
import { useRef, useState, useEffect } from "react";
import Header_01 from "@/components/header/Header_01";
import Footer_01 from "@/components/footer/Footer_01";
import DotPattern from "@/components/magicui/dot-pattern";
import "/styles/globals.css";
import Marquee from "@/components/magicui/marquee";
import { AnimatePresence, color, motion } from "framer-motion";
import NumberTicker from "@/components/magicui/number-ticker";
import { FlipWords } from "@/components/ui/flip-words";
import SwiperNavButtons from "@/components/SwiperNavButton";
import { HiOutlineArrowDown } from "react-icons/hi2";

function Insights() {
  return (
    <div className="relative   z-[1] bg-white ">
      <Header_01 />
      <main className="main-wrapper relative ">
        <section id="section-breadcrumb">
          {/* Section Spacer */}
          <div className="breadcrumb-wrapper">
            {/* Section Container */}
            <div className="global-container">
              <div className="breadcrumb-block">
                <h1 className="breadcrumb-title !text-gray-100">Blogs</h1>
              </div>
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>

        <section className="global-container">
          <p className="text-lg xl:text-xl xxl:text-2xl font-Satoshi font-bold">
            Recent blog posts
          </p>
          <div className="grid grid-cols-1 mt-3 md:grid-cols-2 gap-10 ">
            <div>
              <div className="w-full overflow-hidden h-auto ">
                <img
                  src={`https://images.unsplash.com/photo-1552960504-34e1e1be3f53?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                />
              </div>
              <div>
                <p className="text-sm font-Satoshi text-gray-600 mt-2 font-semibold">
                  Olivia Rhye 20Jan 2024
                </p>
                <p className=" text-2xl font-Satoshi font-semibold mt-1">
                  Conversations wih London Makr & Co.
                </p>
                <p className=" text-md font-Satoshi tracking-tight mt-1 font-medium ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
                <div className="flex justify-start gap-2 mt-2">
                  <p className="px-4 py-2 border border-gray-900 text-sm rounded-full w-fit">
                    Design
                  </p>
                  <p className="px-4 py-2 border border-gray-900 text-sm rounded-full w-fit">
                    Ui/Ux
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-full justify-between flex-col gap-1">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="w-full lg:w-[80%] overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                  />
                </div>
                <div>
                  <p className="text-sm font-Satoshi text-gray-600 font-semibold">
                    Olivia Rhye 20 Jan 2024
                  </p>
                  <p className=" text-xl font-Satoshi font-semibold mt-1">
                    Conversations wih London Makr & Co.
                  </p>

                  <p className=" text-md font-Satoshi tracking-tight mt-1 font-medium ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                  <div className="flex justify-start gap-2 mt-2">
                    <p className="px-4 py-2 border border-gray-900 text-sm rounded-full w-fit">
                      Design
                    </p>
                    <p className="px-4 py-2 border border-gray-900 text-sm rounded-full w-fit">
                      Ui/Ux
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="w-full lg:w-[80%] overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                  />
                </div>
                <div>
                  <p className="text-sm font-Satoshi text-gray-600 font-semibold">
                    Olivia Rhye 20 Jan 2024
                  </p>
                  <p className=" text-xl font-Satoshi font-semibold mt-1">
                    Conversations wih London Makr & Co.
                  </p>

                  <p className=" text-md font-Satoshi tracking-tight mt-1 font-medium ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                  <div className="flex justify-start gap-2 mt-2">
                    <p className="px-4 py-2 border border-gray-900 text-sm rounded-full w-fit">
                      Design
                    </p>
                    <p className="px-4 py-2 border border-gray-900 text-sm rounded-full w-fit">
                      Ui/Ux
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="w-full lg:w-[80%] overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                  />
                </div>
                <div>
                  <p className="text-sm font-Satoshi text-gray-600 font-semibold">
                    Olivia Rhye 20 Jan 2024
                  </p>
                  <p className=" text-xl font-Satoshi font-semibold mt-1">
                    Conversations wih London Makr & Co.
                  </p>

                  <p className=" text-md font-Satoshi tracking-tight mt-1 font-medium ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                  <div className="flex justify-start gap-2 mt-2">
                    <p className="px-4 py-2 border border-gray-900 text-sm rounded-full w-fit">
                      Design
                    </p>
                    <p className="px-4 py-2 border border-gray-900 text-sm rounded-full w-fit">
                      Ui/Ux
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="global-container my-32">
          <p className="text-2xl xl:text-3xl font-Satoshi font-bold xxl:text-4xl">
            All blog posts
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-12 lg:mt-7 xxl:grid-cols-4 gap-10">
            <div className="w-full">
              <div className="w-full overflow-hidden">
                <img
                  src={
                    "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                />
              </div>
              <p className="text-sm font-Satoshi text-gray-600 mt-2 font-semibold">
                Olivia Rhye 20Jan 2024
              </p>
              <p className="text-2xl font-Satoshi text-gray-900 mt-2 font-semibold">
                Conversations wih London Makr & Co.
              </p>
              <p className=" text-md font-Satoshi tracking-tight mt-1 font-medium ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
              <div className="flex justify-start gap-2 mt-2">
                <p className="px-4 py-2 border border-gray-900 text-sm rounded-full w-fit">
                  Design
                </p>
                <p className="px-4 py-2 border border-gray-900 text-sm rounded-full w-fit">
                  Ui/Ux
                </p>
              </div>
            </div>
            <div className="w-full">
              <div className="w-full overflow-hidden">
                <img
                  src={
                    "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                />
              </div>
              <p className="text-sm font-Satoshi text-gray-600 mt-2 font-semibold">
                Olivia Rhye 20Jan 2024
              </p>
              <p className="text-2xl font-Satoshi text-gray-900 mt-2 font-semibold">
                Conversations wih London Makr & Co.
              </p>
              <p className=" text-md font-Satoshi tracking-tight mt-1 font-medium ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
              <div className="flex justify-start gap-2 mt-2">
                <p className="px-4 py-2 border border-gray-900 text-sm rounded-full w-fit">
                  Design
                </p>
                <p className="px-4 py-2 border border-gray-900 text-sm rounded-full w-fit">
                  Ui/Ux
                </p>
              </div>
            </div>
            <div className="w-full">
              <div className="w-full overflow-hidden">
                <img
                  src={
                    "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                />
              </div>
              <p className="text-sm font-Satoshi text-gray-600 mt-2 font-semibold">
                Olivia Rhye 20Jan 2024
              </p>
              <p className="text-2xl font-Satoshi text-gray-900 mt-2 font-semibold">
                Conversations wih London Makr & Co.
              </p>
              <p className=" text-md font-Satoshi tracking-tight mt-1 font-medium ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
              <div className="flex justify-start gap-2 mt-2">
                <p className="px-4 py-2 border border-gray-900 text-sm rounded-full w-fit">
                  Design
                </p>
                <p className="px-4 py-2 border border-gray-900 text-sm rounded-full w-fit">
                  Ui/Ux
                </p>
              </div>
            </div>
            <div className="w-full">
              <div className="w-full overflow-hidden">
                <img
                  src={
                    "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                />
              </div>
              <p className="text-sm font-Satoshi text-gray-600 mt-2 font-semibold">
                Olivia Rhye 20Jan 2024
              </p>
              <p className="text-2xl font-Satoshi text-gray-900 mt-2 font-semibold">
                Conversations wih London Makr & Co.
              </p>
              <p className=" text-md font-Satoshi tracking-tight mt-1 font-medium ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
              <div className="flex justify-start gap-2 mt-2">
                <p className="px-4 py-2 border border-gray-900 text-sm rounded-full w-fit">
                  Design
                </p>
                <p className="px-4 py-2 border border-gray-900 text-sm rounded-full w-fit">
                  Ui/Ux
                </p>
              </div>
            </div>
            <div className="w-full">
              <div className="w-full overflow-hidden">
                <img
                  src={
                    "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                />
              </div>
              <p className="text-sm font-Satoshi text-gray-600 mt-2 font-semibold">
                Olivia Rhye 20Jan 2024
              </p>
              <p className="text-2xl font-Satoshi text-gray-900 mt-2 font-semibold">
                Conversations wih London Makr & Co.
              </p>
              <p className=" text-md font-Satoshi tracking-tight mt-1 font-medium ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
              <div className="flex justify-start gap-2 mt-2">
                <p className="px-4 py-2 border border-gray-900 text-sm rounded-full w-fit">
                  Design
                </p>
                <p className="px-4 py-2 border border-gray-900 text-sm rounded-full w-fit">
                  Ui/Ux
                </p>
              </div>
            </div>
            <div className="w-full">
              <div className="w-full overflow-hidden">
                <img
                  src={
                    "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                />
              </div>
              <p className="text-sm font-Satoshi text-gray-600 mt-2 font-semibold">
                Olivia Rhye 20Jan 2024
              </p>
              <p className="text-2xl font-Satoshi text-gray-900 mt-2 font-semibold">
                Conversations wih London Makr & Co.
              </p>
              <p className=" text-md font-Satoshi tracking-tight mt-1 font-medium ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
              <div className="flex justify-start gap-2 mt-2">
                <p className="px-4 py-2 border border-gray-900 text-sm rounded-full w-fit">
                  Design
                </p>
                <p className="px-4 py-2 border border-gray-900 text-sm rounded-full w-fit">
                  Ui/Ux
                </p>
              </div>
            </div>
            <div className="w-full">
              <div className="w-full overflow-hidden">
                <img
                  src={
                    "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                />
              </div>
              <p className="text-sm font-Satoshi text-gray-600 mt-2 font-semibold">
                Olivia Rhye 20Jan 2024
              </p>
              <p className="text-2xl font-Satoshi text-gray-900 mt-2 font-semibold">
                Conversations wih London Makr & Co.
              </p>
              <p className=" text-md font-Satoshi tracking-tight mt-1 font-medium ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
              <div className="flex justify-start gap-2 mt-2">
                <p className="px-4 py-2 border border-gray-900 text-sm rounded-full w-fit">
                  Design
                </p>
                <p className="px-4 py-2 border border-gray-900 text-sm rounded-full w-fit">
                  Ui/Ux
                </p>
              </div>
            </div>
            <div className="w-full">
              <div className="w-full overflow-hidden">
                <img
                  src={
                    "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                />
              </div>
              <p className="text-sm font-Satoshi text-gray-600 mt-2 font-semibold">
                Olivia Rhye 20Jan 2024
              </p>
              <p className="text-2xl font-Satoshi text-gray-900 mt-2 font-semibold">
                Conversations wih London Makr & Co.
              </p>
              <p className=" text-md font-Satoshi tracking-tight mt-1 font-medium ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
              <div className="flex justify-start gap-2 mt-2">
                <p className="px-4 py-2 border border-gray-900 text-sm rounded-full w-fit">
                  Design
                </p>
                <p className="px-4 py-2 border border-gray-900 text-sm rounded-full w-fit">
                  Ui/Ux
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer_01 />
    </div>
  );
}

export default Insights;

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
    <div className="relative z-[1] bg-white text-gray-900">
      <Header_01 />
      <main className="main-wrapper relative ">
        <section
          id="section-hero"
          className="h-[50vh] flex justify-center items-center"
        >
          <p className="text-3xl xl:text-4xl xxl:text-6xl font-Satoshi font-bold">
            Inside Design: Stories and Interview
          </p>
        </section>

        <section className="global-container">
          <p className="text-lg xl:text-xl xxl:text-2xl font-Satoshi font-bold">
            Recent blog posts
          </p>
          <div className="grid grid-cols-1 mt-3 md:grid-cols-2 gap-10 ">
            <div>
              <div className="w-full overflow-hidden h-[500px] ">
                <img
                  src={`https://images.unsplash.com/photo-1552960504-34e1e1be3f53?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                />
              </div>
              <div>
                <p>Olivia Rhye 20Jan 2024</p>
                <p>Conversations wih London Makr & Co.</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
                <p className="px-4 py-2 bg-gray-300 rounded-full w-fit">
                  Design
                </p>
              </div>
            </div>
            <div className="flex w-full justify-between flex-col gap-5">
              <div className="flex gap-4 ">
                <div className="w-[80%] overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                  />
                </div>
                <div>
                  <p>Olivia Rhye 20Jan 2024</p>
                  <p>Olivia Rhye 20Jan 2024</p>
                  <p>Olivia Rhye 20Jan 2024</p>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </p>
                  <p className="px-4 py-2 bg-gray-300 rounded-full w-fit">
                    Design
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="w-[80%] overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                  />
                </div>
                <div>
                  <p>Olivia Rhye 20Jan 2024</p>
                  <p>Olivia Rhye 20Jan 2024</p>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </p>
                  <p className="px-4 py-2 bg-gray-300 rounded-full w-fit">
                    Design
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="w-[80%] overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                  />
                </div>
                <div>
                  <p>Olivia Rhye 20Jan 2024</p>
                  <p>Olivia Rhye 20Jan 2024</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </p>
                  <p className="px-4 py-2 bg-gray-300 rounded-full w-fit">
                    Design
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="global-container">
          <p>All blog posts</p>

          <div className="grid grid-cols-1 xl:grid-cols-2 xxl:grid-cols-4">
            <div className=""></div>
          </div>
        </section>
      </main>

      <Footer_01 />
    </div>
  );
}

export default Insights;

"use client";
import { cn } from "@/lib/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import useAccordion from "@/components/hooks/useAccordion";
import { useRef, useState, useEffect } from "react";
import Header_01 from "@/components/header/Header_01";
import Footer_01 from "@/components/footer/Footer_01";
import DotPattern from "@/components/magicui/dot-pattern";
import "/styles/globals.css";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const topics = [
  "Digital Age",
  "Transformation & Growth",
  "Data & AI",
  "Marketing & Advertising ",
  "Technology ",
  "Web & App Development",
  "Industrial Innovations",
  "Marketing & Strategy",
];

const services = [
  "Data Analytics",
  "Generative AI",
  "Cloud Transformation ",
  "Mobile App Development ",
  "Web Development ",
  "Digital Marketing",
];
const industries = [
  "Health care",
  "Finance",
  "Technology",
  "Media and Communications",
  "Transport and Logistics",
  "Educations and Learning",
  "Retail and E-commerce",
  "Manufacturing and Distribution",
  "Resourc and Wealth",
];
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
                <h1 className="breadcrumb-title !text-gray-100">Insights</h1>
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
                  <p className="px-4 py-2 bg-lime-400 font-bold font-Satoshi text-sm rounded-full w-fit">
                    Design
                  </p>
                  <p className="px-4 py-2 bg-lime-400 font-bold font-Satoshi text-sm rounded-full w-fit">
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
                    <p className="px-4 py-2 bg-lime-400 font-bold font-Satoshi text-sm rounded-full w-fit">
                      Design
                    </p>
                    <p className="px-4 py-2 bg-lime-400 font-bold font-Satoshi text-sm rounded-full w-fit">
                      Ui/Ux
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="w-full lg:w-[80%] overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
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
                    <p className="px-4 py-2 bg-lime-400 font-bold font-Satoshi text-sm rounded-full w-fit">
                      Design
                    </p>
                    <p className="px-4 py-2 bg-lime-400 font-bold font-Satoshi text-sm rounded-full w-fit">
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
                    <p className="px-4 py-2 bg-lime-400 font-bold font-Satoshi text-sm rounded-full w-fit">
                      Design
                    </p>
                    <p className="px-4 py-2 bg-lime-400 font-bold font-Satoshi text-sm rounded-full w-fit">
                      Ui/Ux
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="global-container flex flex-col lg:flex-row  mt-40 mb-14 gap-5 justify-center items-center">
          <input
            className="w-full bg-white rounded-md shadow-sm px-6 py-2 font-Satoshi font-[500] border border-gray-300"
            placeholder="Search..."
          />
          <div className="grid grid-cols-2 w-full lg:grid-cols-4 gap-5">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Topics" />
              </SelectTrigger>
              <SelectContent>
                {topics.map((topic, index) => (
                  <SelectItem value={topic} key={index}>
                    {topic}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Services" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service, index) => (
                  <SelectItem value={service} key={index}>
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Industries" />
              </SelectTrigger>
              <SelectContent>
                {industries.map((industry, index) => (
                  <SelectItem value={industry} key={index}>
                    {industry}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <button className="bg-blue-500  text-gray-100 px-4 rounded-md">
              Clear
            </button>
          </div>
        </div>
        <section className="global-container mb-32 ">
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
                <p className="px-4 py-2 bg-lime-400 font-bold font-Satoshi text-sm rounded-full w-fit">
                  Design
                </p>
                <p className="px-4 py-2 bg-lime-400 font-bold font-Satoshi text-sm rounded-full w-fit">
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
                <p className="px-4 py-2 bg-lime-400 font-bold font-Satoshi text-sm rounded-full w-fit">
                  Design
                </p>
                <p className="px-4 py-2 bg-lime-400 font-bold font-Satoshi text-sm rounded-full w-fit">
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
                <p className="px-4 py-2 bg-lime-400 font-bold font-Satoshi text-sm rounded-full w-fit">
                  Design
                </p>
                <p className="px-4 py-2 bg-lime-400 font-bold font-Satoshi text-sm rounded-full w-fit">
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
                <p className="px-4 py-2 bg-lime-400 font-bold font-Satoshi text-sm rounded-full w-fit">
                  Design
                </p>
                <p className="px-4 py-2 bg-lime-400 font-bold font-Satoshi text-sm rounded-full w-fit">
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
                <p className="px-4 py-2 bg-lime-400 font-bold font-Satoshi text-sm rounded-full w-fit">
                  Design
                </p>
                <p className="px-4 py-2 bg-lime-400 font-bold font-Satoshi text-sm rounded-full w-fit">
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
                <p className="px-4 py-2 bg-lime-400 font-bold font-Satoshi text-sm rounded-full w-fit">
                  Design
                </p>
                <p className="px-4 py-2 bg-lime-400 font-bold font-Satoshi text-sm rounded-full w-fit">
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
                <p className="px-4 py-2 bg-lime-400 font-bold font-Satoshi text-sm rounded-full w-fit">
                  Design
                </p>
                <p className="px-4 py-2 bg-lime-400 font-bold font-Satoshi text-sm rounded-full w-fit">
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
                <p className="px-4 py-2 bg-lime-400 font-bold font-Satoshi text-sm rounded-full w-fit">
                  Design
                </p>
                <p className="px-4 py-2 bg-lime-400 font-bold font-Satoshi text-sm rounded-full w-fit">
                  Ui/Ux
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="global-container mb-32">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </section>
      </main>

      <Footer_01 />
    </div>
  );
}

export default Insights;

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
import { Timeline } from "@/components/ui/timeline";
function Services() {
  const services = [
    {
      name: "Hire web developers",
      img: "/assets/img_placeholder/web.png",
      color: "#512DA8",
    },
    {
      name: "Hire mobile app developers",
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
  const data = [
    {
      title: "Requirement Analysis",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            We develop an understanding of your requirements and identify the
            best resources from our in-house team for your project.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Resource Allocation",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            IWe share the resumes of the shortlisted candidates for your review.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Candidate Interview",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            You may conduct interviews to find the best match for your
            requirement.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Card grid component
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Startup template Aceternity
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Random file upload lol
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Contract Finalization",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Once you have identified the right resources for your project from
            our in-house team, we share a final contract for review.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Card grid component
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Startup template Aceternity
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Random file upload lol
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Ongoing Work",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Your remote resource at Resourcifi will maintain work logs and keep
            you posted about ongoing work on a regular basis.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Card grid component
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Startup template Aceternity
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Random file upload lol
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="page-wrapper relative">
      <Header_01 />
      <main className="main-wrapper">
        <div className="w-full mb-20  h-[85vh] xl:h-screen bg-no-repeat bg-center bg-cover bg-[url('/assets/img_placeholder/staff.jpg')]">
          <div className="bg-gradient-to-b w-full h-full from-gray-800/40 to-gray-700/30">
            <div className="global-container flex flex-col justify-around  w-full h-full">
              <div></div>
              <div></div>
              <div className="mt-32 xl:mt-0">
                <h2 className="font-dmSans font-bold text-gray-50">
                  Unlock the Power of Staff Augmentation
                </h2>
                <p className="mt-3  leading-relaxed text-sm xl:text-lg text-gray-100 w-[80%] lg:w-2/4">
                  Staff augmentation is a strategic approach to expanding your
                  team with skilled professionals on a temporary or project
                  basis. It provides the flexibility to adapt to changing
                  demands, access specialized skills, and meet deadlines without
                  the long-term commitment of hiring full-time employees.
                </p>
              </div>
            </div>
          </div>
        </div>
        <section className="global-container mb-20">
          <h2 className="w-full text-center">Talent we Provide</h2>
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
          <div className="global-container flex flex-col justify-center items-center">
            <h2 className="font-Satoshi font-[500]">Why Partner with Us?</h2>
            <p className="text-md xl:text-lg text-center mt-5 w-2/3 font-Satoshi">
              Our staff augmentation services offer a seamless way to integrate
              skilled professionals into your team, ensuring you get the
              expertise you need when you need it. Here’s why we stand out:
            </p>
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
                  We link you with seasoned specialists from the various talent
                  market, offering the specific skills required for your
                  projects
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
                  By hiring dedicated specialists from us—whether developers,
                  designers, QA experts, or digital marketers—you can save up to
                  70%
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
                  Our offshore specialists provide the flexibility to
                  effortlessly adjust your team size according to your project's
                  requirements
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
                  With our dedicated professionals, you can skip the hassle of
                  managing payroll, taxes, infrastructure costs, and employee
                  benefits.
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
                  We implement stringent NDAs to guarantee absolute
                  confidentiality and security of your projects
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
                  MenloCloud's remote experts are aligned to work within your
                  business hours, ensuring seamless collaboration
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-60">
          <div className="global-container flex justify-center">
            <h2 className="font-Satoshi font-bold ">Lorem Ipsum</h2>
          </div>
          <Timeline data={data} />
        </section>
      </main>
      <Footer_01 />
     </div>
    </>
  );
}

export default Services;

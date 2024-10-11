"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import SwiperNavButtons from "@/components/SwiperNavButton";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import Markdown from "react-markdown";
import BlogDetails from "@/app/blog-details/[...id]/page";
const BlogSwiper = () => {
  const swiperBlogRef = useRef(null);
  const imageURL = "https://admin.yatriclubs.com/";
  const [isBlogLoaded, setIsBlogLoaded] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [loading, setIsLoading] = useState(false);
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
    <section className="my-28 global-container">
      <div>
        <div className="flex  justify-between items-center">
          <p className="text-3xl w-full text-center lg:text-start  lg:text-6xl  font-Satoshi font-[600]  lg:w-2/3">
            Discover our{" "}
            <span className="bg-gradient-to-r font-Telma px-1 from-blue-600 to-indigo-400 bg-clip-text text-transparent">
              Stories{" "}
            </span>{" "}
          </p>
          <div className="hidden lg:flex">
            <SwiperNavButtons swiperRef={swiperBlogRef} />
          </div>
        </div>
        <Swiper
          ref={swiperBlogRef}
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
          {blogs.map((elem, index) => {
            return (
              <SwiperSlide key={elem.id} className="w-full cursor-pointer">
                <motion.div
                  whileHover={{ backgroundColor: elem.hoverColor }}
                  className="min-h-[500px] max-h-[500px] rounded-xl bg-slate-100 flex flex-col"
                >
                  <Link
                    href={`/blog-details/${elem.id}`}
                    className="flex flex-col h-full"
                  >
                    <div
                      className="w-full h-[250px] max-h-[250px] bg-no-repeat rounded-t-xl bg-center bg-cover"
                      style={{
                        backgroundImage: `url(${imageURL + elem.image})`,
                      }}
                    ></div>
                    <div className="flex-grow px-3 py-5 flex flex-col">
                      <div className="w-full flex justify-between items-center">
                        <div className="w-full text-sm flex font-Satoshi justify-between items-center">
                          <p>
                            by{" "}
                            <span className="capitalize font-medium">
                              {elem.author}
                            </span>
                          </p>
                          <p>{new Date(elem.created_at).toDateString()}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap justify-start gap-2 mt-2">
                        {elem?.tags
                          .replace(/^"|"$|\\/g, "")
                          .split(",")
                          .map((tag, index) => (
                            <p
                              key={index}
                              className="px-4 py-2 xl:py-1 gap-3 bg-lime-400 font-bold font-Satoshi text-[.7rem] rounded-full w-fit"
                            >
                              {tag}
                            </p>
                          ))}
                      </div>
                      <p className="xl:text-lg xxl:text-xl font-Satoshi text-gray-900 mt-3 font-semibold">
                        {elem.name}
                      </p>
                      <Markdown className="line-clamp-3 text-[1rem] text-ellipsis mt-1">
                        {elem.description}
                      </Markdown>
                    </div>
                  </Link>
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default BlogSwiper;

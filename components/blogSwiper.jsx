"use client";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import Marked from "./marked";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const BlogSwiper = () => {
  const swiperBlogRef = useRef(null);
  const imageURL = "https://admin.yatriclubs.com/";
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const getBlogs = async () => {
    try {
      await axios.get("https://admin.yatriclubs.com/sanctum/csrf-cookie", {
        withCredentials: true,
      });
      const res = await axios.get("https://admin.yatriclubs.com/api/blog", {
        withCredentials: true,
      });
      setBlogs(res.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  useEffect(() => {
    const swiper = swiperBlogRef.current?.swiper;
    if (swiper) {
      swiper.update();
    }
  }, [blogs]);

  if (loading) {
    return <div>Loading...</div>; // Loading state can be a spinner or a message
  }

  return (
    <section className="my-28 global-container">
      <div>
        <div className="flex justify-between items-center">
          <p className="text-3xl w-full text-center lg:text-start lg:text-6xl font-Satoshi font-[600] lg:w-2/3">
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
            320: { slidesPerView: 1.3 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1604: { slidesPerView: 4 },
          }}
          className="mt-5 xl:mt-10"
        >
          {blogs.map((elem) => (
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
                    style={{ backgroundImage: `url(${imageURL + elem.image})` }}
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
                      {elem.tags
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
                    <Marked markdown={elem.description} />
                  </div>
                </Link>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

const SwiperNavButtons = ({ swiperRef }) => {
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const swiper = swiperRef.current?.swiper;

  const handlePrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const updateSlideState = () => {
    if (swiper) {
      setIsFirstSlide(swiper.isBeginning);
      setIsLastSlide(swiper.isEnd);
    }
  };

  useEffect(() => {
    if (swiper) {
      updateSlideState();
      swiper.on("slideChange", updateSlideState);
    }
    return () => {
      if (swiper) {
        swiper.off("slideChange", updateSlideState);
      }
    };
  }, [swiper]);

  return (
    <div className="flex items-center gap-3">
      <button
        className="p-2 bg-gray-900 hover:bg-black rounded-full text-3xl text-gray-50 disabled:bg-gray-400"
        onClick={handlePrev}
        disabled={isFirstSlide}
      >
        <GoArrowLeft />
      </button>
      <button
        className="p-2 bg-gray-900 hover:bg-black rounded-full text-3xl text-gray-50 disabled:bg-gray-400"
        onClick={handleNext}
        disabled={isLastSlide}
      >
        <GoArrowRight />
      </button>
    </div>
  );
};

export default BlogSwiper;

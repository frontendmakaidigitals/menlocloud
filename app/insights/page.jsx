"use client";

import { useRef, useState, useEffect } from "react";
import Header_01 from "@/components/header/Header_01";
import Footer_01 from "@/components/footer/Footer_01";
import Link from "next/link";
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
import axios from "axios";

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
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const imageURL = "https://admin.yatriclubs.com/";
  const getBlogs = () => {
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
          setStatus("success");
          setIsLoading(false);
        })
        .catch((error) => {
          setStatus("failed");
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
    <div className="relative   z-[1] bg-white">
      <Header_01 />

      <main className="main-wrapper relative ">
        <section id="section-breadcrumb">
          {/* Section Spacer */}
          <div className="breadcrumb-wrapper">
            {/* Section Container */}
            <div className="global-container">
              <div className="breadcrumb-block">
                <h1 className="breadcrumb-title !font-Satoshi font-bold !text-gray-50">
                  Insights
                </h1>
                <ul className="breadcrumb-nav !text-gray-50">
                  <li>
                    <Link className="!text-gray-100" href="/">
                      Home
                    </Link>
                  </li>
                  <li className="!text-sky-500">Insights</li>
                </ul>
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
          <div className="grid grid-cols-1 h-full mt-3 md:grid-cols-2 gap-10 ">
            {blogs.map(
              (blog) =>
                blog.priority === "1" && (
                  <div key={blog.id}>
                    <div className="w-full flex justify-center rounded-xl items-center overflow-hidden h-[400px] lg:h-[55vh]">
                      <img
                        className="  rounded-lg object-cover"
                        src={imageURL + blog.image}
                        alt="Descriptive Alt Text"
                      />
                    </div>

                    <div>
                      <p className="text-sm xl:text-[.7rem] xxl:text-sm font-Satoshi text-gray-600 mt-2 font-semibold">
                        Olivia Rhye {new Date(blog.created_at).toDateString()}
                      </p>
                      <p className=" text-2xl xl:text-xl xxl:text-2xl font-Satoshi font-semibold mt-1">
                        {blog.name}
                      </p>

                      <div className="flex justify-start items-center gap-2 mt-2">
                        {blog?.tags
                          .replace(/^"|"$|\\/g, "")
                          .split(",")
                          .map((tag, index) => (
                            <p
                              key={index}
                              className="px-4 py-2 xl:px-3 xl:py-1 xxl:px-4 xxl:py-2 bg-lime-400 font-bold font-Satoshi text-sm xl:text-[.7rem] xxl:text-sm rounded-full w-fit"
                            >
                              {tag}
                            </p>
                          ))}
                      </div>
                    </div>
                  </div>
                )
            )}
            <div className="grid w-full grid-cols-1 gap-5">
              {blogs
                .filter((blog) => ["2", "3", "4"].includes(blog.priority)) // Filter by priority
                .map((blog) => (
                  <div key={blog.id} className="flex w-full lg:flex-row gap-4">
                    <div className="flex-shrink-0 w-[230px] h-[180px] overflow-hidden rounded-lg">
                      <img
                        className="w-full h-full object-cover"
                        src={imageURL + blog.image}
                        alt={blog.name}
                      />
                    </div>
                    <div className="flex flex-col justify-between flex-grow">
                      {" "}
                      {/* Allow this div to take the remaining space */}
                      <p className="text-sm xl:text-[.7rem] xxl:text-sm font-Satoshi text-gray-600 font-semibold">
                        Olivia Rhye {new Date(blog.created_at).toDateString()}{" "}
                      </p>
                      <p className="text-lg xl:text-md xxl:text-2xl font-Satoshi font-semibold">
                        {blog.name}
                      </p>
                      <div className="flex justify-start items-center gap-2">
                        {blog?.tags
                          .replace(/^"|"$|\\/g, "")
                          .split(",")
                          .map((tag, index) => (
                            <p
                              key={index}
                              className="px-4 py-2 xl:px-3 xl:py-1 xxl:px-4 xxl:py-2 bg-lime-400 font-bold font-Satoshi text-sm xl:text-[.7rem] xxl:text-sm rounded-full w-fit"
                            >
                              {tag}
                            </p>
                          ))}
                      </div>
                    </div>
                  </div>
                ))}
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

          <div className="grid grid-cols-1 md:grid-cols-3 mt-12 lg:mt-7 xxl:grid-cols-4 gap-10">
            {blogs
              .filter((blog) => ['2', '3', '4'].includes(blog.priority)) // Filter by priority
              .map((blog) => (
                <div key={blog.id} className="w-full flex flex-col h-full">
                  <div className="w-full overflow-hidden flex-grow">
                    <img
                      src={imageURL + blog.image}
                      className="w-full h-64 object-cover"
                      alt={blog.title}
                    />
                  </div>
                  <div className="flex flex-col flex-grow justify-between">
                    <div>
                      <p className="lg:text-[.8rem] text-sm font-Satoshi text-gray-600 mt-2 font-semibold">
                        Olivia Rhye {new Date(blog.created_at).toDateString()}{" "}
                      </p>
                      <p className="xl:text-lg h-[150px] overflow-hidden overflow-ellipsis  xxl:text-2xl font-Satoshi text-gray-900 mt-2 font-semibold line-clamp-4">
                        {blog.name}
                      </p>
                    </div>
                    <div className="flex justify-start gap-2 mt-2">
                      {blog?.tags
                        .replace(/^"|"$|\\/g, "")
                        .split(",")
                        .map((tag, index) => (
                          <p
                            key={index}
                            className="px-4 py-2 xl:px-3 xl:py-1 xxl:px-4 xxl:py-2 bg-lime-400 font-bold font-Satoshi text-sm xl:text-[.7rem] xxl:text-sm rounded-full w-fit"
                          >
                            {tag}
                          </p>
                        ))}
                    </div>
                  </div>
                </div>
              ))}
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

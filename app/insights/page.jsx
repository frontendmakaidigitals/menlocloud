"use client";
import Markdown from "react-markdown";
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
import Marked from "@/components/marked";

const topics = [
  "All Topics",
  "Digital Age",
  "Transformation & Growth",
  "Data & AI",
  "Marketing & Advertising",
  "Technology",
  "Web & App Development",
  "Industrial Innovations",
  "Marketing & Strategy",
];

const services = [
  "All Services",
  "Data Analytics",
  "Generative AI",
  "Cloud Transformation",
  "Mobile App Development",
  "Web Development",
  "Digital Marketing",
];
const industries = [
  "All Industries",
  "Health care",
  "Finance",
  "Technology",
  "Media and Communications",
  "Transport and Logistics",
  "Educations and Learning",
  "Retail and E-commerce",
  "Manufacturing and Distribution",
  "Resource and Wealth",
];
function Insights() {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(false);
  const [blogs, setBlogs] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("All Topics");
  const [selectedService, setSelectedService] = useState("All Services");
  const [selectedIndustry, setSelectedIndustry] = useState("All Industries");

  const imageURL = `${process.env.NEXT_PUBLIC_SERVER_URL}/`;
  const getBlogs = () => {
    if (true) {
      setIsLoading(true);
      axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/sanctum/csrf-cookie`, {
        withCredentials: true,
      });
      axios
        .get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/blog`, {
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

  const handleFilter = () => {
    let filteredBlogs = blogs;

    if (selectedTopic !== "All Topics") {
      filteredBlogs = filteredBlogs.filter(
        (blog) => blog.topic === selectedTopic
      ); // Adjust this condition based on your blog data structure
    }

    if (selectedService !== "All Services") {
      filteredBlogs = filteredBlogs.filter(
        (blog) => blog.service === selectedService
      ); // Adjust this condition based on your blog data structure
    }

    if (selectedIndustry !== "All Industries") {
      filteredBlogs = filteredBlogs.filter(
        (blog) => blog.industry === selectedIndustry
      ); // Adjust this condition based on your blog data structure
    }

    if (searchTerm) {
      filteredBlogs = filteredBlogs.filter((blog) =>
        blog.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filteredBlogs;
  };

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

        <section className=" global-container">
          <p className="text-lg xl:text-xl xxl:text-2xl font-Satoshi font-bold">
            Recent blog posts
          </p>
          <div className="grid grid-cols-1 mt-3 md:grid-cols-2 gap-10 place-items-start ">
            {blogs.map(
              (blog) =>
                blog.priority === "1" && (
                  <Link
                    key={blog.id}
                    href={`/blog-details/${blog.id}`}
                    className="hover:bg-slate-200 transition-all duration-300 py-3 px-2 rounded-lg h-full"
                  >
                    <div>
                      <div className="w-full bg-slate-200 flex justify-center rounded-xl items-center overflow-hidden h-[350px] xxl:h-[53vh] max-h-[530px]">
                        <img
                          className="w-full h-full object-cover rounded-lg" // Ensure the image covers the container fully
                          src={imageURL + blog.image}
                          alt={`${blog.name} image`} // Use descriptive alt text
                        />
                      </div>

                      <div>
                        <div className="w-full flex items-center justify-between">
                          <p className="text-sm xl:text-[.7rem] xxl:text-sm font-Satoshi text-gray-600 mt-2 font-semibold">
                            by {blog.author}{" "}
                          </p>
                          <p className="text-sm xl:text-[.7rem] xxl:text-sm font-Satoshi text-gray-600 mt-2 font-semibold">
                            {new Date(blog.created_at).toDateString()}
                          </p>
                        </div>
                        <div className="flex flex-wrap justify-start items-center gap-2 mt-2">
                          {blog?.tags
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
                        <p className=" text-2xl xl:text-xl xxl:text-2xl font-Satoshi font-semibold mt-5">
                          {blog.name}
                        </p>
                        <Marked markdown={blog.description} />
                      </div>
                    </div>
                  </Link>
                )
            )}
            <div className="grid w-full h-full grid-cols-1 gap-3">
              {blogs
                .filter((blog) => ["2", "3", "4"].includes(blog.priority))
                .sort((a, b) => parseInt(a.priority) - parseInt(b.priority)) // Sort by priority
                .map((blog) => (
                  <Link
                    key={blog.id}
                    href={`/blog-details/${blog.id}`}
                    className="hover:bg-slate-200 transition-all duration-300 py-3 px-2 rounded-lg"
                  >
                    <div className="flex w-full flex-col lg:flex-row gap-4">
                      <div
                        style={{
                          backgroundImage: `url('${imageURL + blog.image}')`,
                        }}
                        className="bg-no-repeat bg-center bg-cover flex-shrink-0 w-full h-[180px] xl:w-[180px] xl:h-[180px] xxl:w-[230px] xxl:h-[180px] overflow-hidden rounded-lg"
                      ></div>
                      <div className="flex flex-col justify-start flex-grow">
                        <div>
                          <div className="w-full flex items-center justify-between">
                            <p className="text-sm xl:text-[.7rem] xxl:text-sm font-Satoshi text-gray-600  font-semibold">
                              by {blog.author}
                            </p>
                            <p className="text-sm xl:text-[.7rem] xxl:text-sm font-Satoshi text-gray-600  font-semibold">
                              {new Date(blog.created_at).toDateString()}
                            </p>
                          </div>
                          <div className="flex mt-2 flex-wrap justify-start items-center gap-2">
                            {blog?.tags
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
                        </div>
                        <p className="text-lg xl:text-md xxl:text-2xl font-Satoshi font-semibold mt-2">
                          {blog.name}
                        </p>
                        <p className="line-clamp-3 text-[1rem] text-ellipsis mt-1"></p>
                        <Marked
                          markdown={blog.description}
                          className={"!line-clamp-2"}
                        />
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
        <div className="global-container  mt-40 mb-14 gap-5  grid grid-cosl-1 lg:grid-cols-2">
          <input
            className="w-full bg-white rounded-md shadow-sm px-6 py-2 font-Satoshi font-[500] border border-gray-300"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className=" flex justify-between flex-wrap lg:flex-nowrap w-full gap-5">
            <Select onValueChange={setSelectedTopic}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="All Topics" />
              </SelectTrigger>
              <SelectContent>
                {topics.map((topic, index) => (
                  <SelectItem value={topic} key={index}>
                    {topic}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select onValueChange={setSelectedService}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="All Services" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service, index) => (
                  <SelectItem value={service} key={index}>
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select onValueChange={setSelectedIndustry}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="All Industries" />
              </SelectTrigger>
              <SelectContent>
                {industries.map((industry, index) => (
                  <SelectItem value={industry} key={index}>
                    {industry}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <section className="global-container mb-32 ">
          <p className="text-2xl xl:text-3xl font-Satoshi font-bold xxl:text-4xl">
            All blog posts
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 mt-12 lg:mt-7 xxl:grid-cols-4 gap-10">
            {blogs
              .filter((blog) => {
                const matchesTopic =
                  selectedTopic === "All Topics" ||
                  blog.topic === selectedTopic;
                const matchesService =
                  selectedService === "All Services" ||
                  blog.service === selectedService;
                const matchesIndustry =
                  selectedIndustry === "All Industries" ||
                  blog.industry === selectedIndustry;
                const matchesSearch = blog.name
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase());

                return (
                  matchesTopic &&
                  matchesService &&
                  matchesIndustry &&
                  matchesSearch
                );
              })
              .filter((blog) => ["Default"].includes(blog.priority))
              .sort((a, b) => parseInt(a.priority) - parseInt(b.priority))
              .map((blog) => (
                <Link
                  key={blog.id}
                  href={`/blog-details/${blog.id}`}
                  className="hover:bg-slate-200 transition-all duration-300 py-3 px-2 rounded-lg"
                >
                  <div className="w-full flex flex-col h-full">
                    <div className="w-full overflow-hidden ">
                      <img
                        src={imageURL + blog.image}
                        className="w-full h-64 object-cover"
                        alt={blog.title}
                      />
                    </div>
                    <div className="flex flex-col flex-grow justify-between">
                      <div>
                        <div className="w-full flex items-center justify-between mt-2">
                          <p className="text-sm xl:text-[.7rem] xxl:text-sm font-Satoshi text-gray-600 font-semibold">
                            by {blog.author}
                          </p>
                          <p className="text-sm xl:text-[.7rem] xxl:text-sm font-Satoshi text-gray-600 font-semibold">
                            {new Date(blog.created_at).toDateString()}
                          </p>
                        </div>
                        <div className="flex flex-wrap justify-start gap-2 mt-2">
                          {blog?.tags
                            .replace(/^"|"$|\\/g, "")
                            .split(",")
                            .map((tag, index) => (
                              <p
                                key={index}
                                className="px-4 py-2 xl:py-1 bg-lime-400 font-bold font-Satoshi text-[.7rem] rounded-full w-fit"
                              >
                                {tag}
                              </p>
                            ))}
                        </div>
                        <p className="xl:text-lg h-auto overflow-hidden overflow-ellipsis xxl:text-2xl font-Satoshi text-gray-900 mt-2 font-semibold">
                          {blog.name}
                        </p>
                        {blog.description ? (
                          <Marked markdown={blog.description} />
                        ) : (
                          <p className="text-gray-500 mt-2">
                            No description available.
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </main>

      <Footer_01 />
    </div>
  );
}

export default Insights;

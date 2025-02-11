"use client";
import Footer_01 from "@/components/footer/Footer_01";
import Header_01 from "@/components/header/Header_01";
import Link from "next/link";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { useState, useEffect } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import Marked from "@/components/marked";
function BlogDetails({ params }) {
  const Viewer = dynamic(() => import("@/components/MDXViewer"), {
    ssr: false,
  });
  const serverURL = `${process.env.NEXT_PUBLIC_SERVER_URL}/`;
  const [tags, setTags] = useState([]);
  const [status, setStatus] = useState(null);
  const [title, setTitle] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [author, setAuthor] = useState("");
  const [metaDiscription, setMetaDiscription] = useState("");
  const [metaTag, setMetaTag] = useState("");
  const [blogDetail, setBlogDetail] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const id = params.id[0];
  const imageURL = `${process.env.NEXT_PUBLIC_SERVER_URL}/`;
  const getBlog = () => {
    if (true) {
      axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/sanctum/csrf-cookie`, {
        withCredentials: true,
      });
      axios
        .get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/editblog/${id}`, {
          withCredentials: true,
        })
        .then((res) => {
          setTitle(res.data.name);
          setMetaDiscription(res.data.metaDiscription);
          setMetaTag(res.data.metaTag);
          setTags(res.data.tags.replace(/^"|"$|\\/g, "").split(","));
          setBlogDetail(res.data.description);
          setImage(res.data.image);
          setAuthor(res.data.author);
          const dateForm = new Date(res.data.created_at);
          const options = { year: "numeric", month: "long", day: "numeric" };
          setDate(dateForm.toLocaleDateString(undefined, options));
        })

        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          console.log("finally");
        });
    }
  };

  const getAllBlogs = (data) => {
    if (true) {
      axios.get(`${serverURL}sanctum/csrf-cookie`, {
        withCredentials: true,
      });
      axios
        .get(`${serverURL}api/blog`, { withCredentials: true })
        .then((res) => {
          setBlogs(res.data);
        });
    }
  };

  useEffect(() => {
    getBlog();
    getAllBlogs();
  }, []);

  return (
    <>
      <Header_01 />
      <main className="main-wrapper relative overflow-hidden">
        {/*...::: Breadcrumb Section Start :::... */}
        <section id="section-breadcrumb">
          {/* Section Spacer */}
          <div className="bg-black pb-[70px] "></div>
        </section>
        <section className="global-container flex  items-center gap-1 mt-5 font-Satoshi">
          <Link href="/">
            <p className="text-gray-500 font-medium hover:underline">Home</p>
          </Link>
          <MdOutlineArrowForwardIos />
          <p className="text-sky-400 font-medium">Blog</p>
        </section>

        <div className="blog-section mt-10">
          {/* Section Spacer */}
          <div className="pb-40 xl:pb-[60px]">
            {/* Section Container */}
            <div className="global-container">
              <div className="grid grid-cols-1 gap-x-6 gap-y-10">
                <div className="flex flex-col gap-y-10 lg:gap-y-14 xl:gap-y-20">
                  {/* Blog Post Details */}
                  <div className="flex flex-col gap-6">
                    {/* Blog Post Text Area */}

                    <div
                      style={{ backgroundImage: `url(${serverURL + image})` }}
                      className="bg-no-repeat bg-cover h-[300px] lg:h-[74vh] flex justify-center items-center shadow-md border border-gray-200  overflow-hidden rounded-[10px]"
                    ></div>

                    <div className="w-full flex flex-col-reverse lg:flex-row items-start lg:items-center justify-between gap-7 lg:gap-0">
                      <ul className=" flex flex-wrap items-center gap-2">
                        {tags.map((elem, index) => (
                          <li key={index} className="relative font-semibold ">
                            <p className="bg-lime-400 px-5 py-1 font-Satoshi rounded-full">
                              {elem}
                            </p>
                          </li>
                        ))}
                      </ul>
                      <ul className="flex w-full lg:w-auto items-center justify-between lg:gap-12 mb-5">
                        <li className="relative font-semibold ">
                          <div className="flex items-center gap-2">
                            <div className="size-10 rounded-full overflow-hidden border border-gray-400 bg-gray-400">
                              <img
                                src={
                                  "https://cdn3d.iconscout.com/3d/premium/thumb/man-3d-icon-download-in-png-blend-fbx-gltf-file-formats--male-person-happy-people-human-avatar-pack-icons-7590876.png?f=webp"
                                }
                                alt="Profile image"
                              />
                            </div>
                            <p className=" font-Satoshi rounded-full">
                              by {author}
                            </p>
                          </div>
                        </li>
                        <li className="relative font-semibold">
                          <p className="flex items-center gap-2 font-Satoshi rounded-full">
                            <span>
                              <SlCalender />
                            </span>{" "}
                            {date}
                          </p>
                        </li>
                      </ul>
                    </div>

                    {/* Blog Post Meta */}
                    <h5 className="mb-3 mt-10">{title}</h5>

                    <div className="w-full">
                      <Viewer markdown={blogDetail} />
                    </div>

                    {/* Blog Post Text Area */}
                    {/* Blog Events */}

                    {/* Blog Events */}
                    {/* Horizontal Separator */}
                    <div className="jos my-[30px] h-[1px] w-full bg-[#EAEDF0]" />
                    {/* Horizontal Separator */}
                    {/* Single Post Navigation */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="global-container mb-32 ">
          <p className="text-2xl xl:text-3xl font-Satoshi font-bold xxl:text-4xl">
            Recent Blogs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 mt-12 lg:mt-7 xxl:grid-cols-4 gap-10">
            {blogs
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
    </>
  );
}

export default BlogDetails;

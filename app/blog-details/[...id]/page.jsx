"use client";
import Footer_01 from "@/components/footer/Footer_01";
import Header_01 from "@/components/header/Header_01";
import Link from "next/link";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { useState, useEffect } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import { Suspense } from "react";

function BlogDetails({ params }) {
  const EditorComp = dynamic(() => import("@/components/MDXViewer"), {
    ssr: false,
  });
  const [tags, setTags] = useState([]);
  const [status, setStatus] = useState(null);
  const [title, setTitle] = useState("");
  const [metaDiscription, setMetaDiscription] = useState("");
  const [metaTag, setMetaTag] = useState("");
  const [blogDetail, setBlogDetail] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const id = params.id[0];
  const imageURL = "https://admin.yatriclubs.com/";

  const getBlog = () => {
    if (true) {
      axios.get("https://admin.yatriclubs.com/sanctum/csrf-cookie", {
        withCredentials: true,
      });
      axios
        .get(`https://admin.yatriclubs.com/api/editblog/${id}`, {
          withCredentials: true,
        })
        .then((res) => {
          setTitle(res.data.Name);
          setMetaDiscription(res.data.metaDiscription);
          setMetaTag(res.data.metaTag);
          setTags(res.data.tags.replace(/^"|"$|\\/g, "").split(","));
          setBlogDetail(res.data.description);
          setImage(res.data.image);
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
  useEffect(() => {
    getBlog();
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
                    <article className="jos overflow-hidden bg-white">
                      <div className="mb-7 h-[300px] lg:h-[74vh] flex justify-center items-center shadow-md border border-gray-200  overflow-hidden rounded-[10px]">
                        <img
                          src={imageURL + image}
                          alt="blog-main-1"
                          className="h-full"
                        />
                      </div>

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
                                by Andrew
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
                        <Suspense fallback={null}>
                          <EditorComp
                            markdown={blogDetail ? blogDetail : ""}
                            onChange={(value) => setBlogDetail(value)}
                          />
                        </Suspense>
                      </div>
                    </article>
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

          <div className="grid grid-cols-1 md:grid-cols-3  mt-12 lg:mt-7 xxl:grid-cols-4 gap-10">
            <div className="w-full">
              <div className="w-full overflow-hidden">
                <img
                  src={
                    "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                />
              </div>
              <p className="lg:text-[.8rem] text-sm  font-Satoshi text-gray-600 mt-2 font-semibold">
                Olivia Rhye 20Jan 2024
              </p>
              <p className="xl:text-lg xxl:text-2xl font-Satoshi text-gray-900 mt-2 font-semibold">
                Conversations wih London Makr & Co.
              </p>
              <p className=" xl:text-sm xxl:text-lg font-Satoshi tracking-tight mt-1 font-medium ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
              <div className="flex justify-start gap-2 mt-2">
                <p className="px-4 py-2 bg-lime-400 font-bold font-Satoshi text-sm xl:text-[.8rem] xxl:text-sm rounded-full w-fit">
                  Design
                </p>
                <p className="px-4 py-2 bg-lime-400 font-bold font-Satoshi text-sm xl:text-[.8rem] xxl:text-sm rounded-full w-fit">
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
              <p className="lg:text-[.8rem] text-sm  font-Satoshi text-gray-600 mt-2 font-semibold">
                Olivia Rhye 20Jan 2024
              </p>
              <p className="xl:text-lg xxl:text-2xl font-Satoshi text-gray-900 mt-2 font-semibold">
                Conversations wih London Makr & Co.
              </p>
              <p className=" xl:text-sm xxl:text-lg font-Satoshi tracking-tight mt-1 font-medium ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
              <div className="flex justify-start gap-2 mt-2">
                <p className="px-4 py-2 bg-lime-400 font-bold font-Satoshi text-sm xl:text-[.8rem] xxl:text-sm rounded-full w-fit">
                  Design
                </p>
                <p className="px-4 py-2 bg-lime-400 font-bold font-Satoshi text-sm xl:text-[.8rem] xxl:text-sm rounded-full w-fit">
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
              <p className="lg:text-[.8rem] text-sm  font-Satoshi text-gray-600 mt-2 font-semibold">
                Olivia Rhye 20Jan 2024
              </p>
              <p className="xl:text-lg xxl:text-2xl font-Satoshi text-gray-900 mt-2 font-semibold">
                Conversations wih London Makr & Co.
              </p>
              <p className=" xl:text-sm xxl:text-lg font-Satoshi tracking-tight mt-1 font-medium ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
              <div className="flex justify-start gap-2 mt-2">
                <p className="px-4 py-2 bg-lime-400 font-bold font-Satoshi text-sm xl:text-[.8rem] xxl:text-sm rounded-full w-fit">
                  Design
                </p>
                <p className="px-4 py-2 bg-lime-400 font-bold font-Satoshi text-sm xl:text-[.8rem] xxl:text-sm rounded-full w-fit">
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
              <p className="lg:text-[.8rem] text-sm  font-Satoshi text-gray-600 mt-2 font-semibold">
                Olivia Rhye 20Jan 2024
              </p>
              <p className="xl:text-lg xxl:text-2xl font-Satoshi text-gray-900 mt-2 font-semibold">
                Conversations wih London Makr & Co.
              </p>
              <p className=" xl:text-sm xxl:text-lg font-Satoshi tracking-tight mt-1 font-medium ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
              <div className="flex justify-start gap-2 mt-2">
                <p className="px-4 py-2 bg-lime-400 font-bold font-Satoshi text-sm xl:text-[.8rem] xxl:text-sm rounded-full w-fit">
                  Design
                </p>
                <p className="px-4 py-2 bg-lime-400 font-bold font-Satoshi text-sm xl:text-[.8rem] xxl:text-sm rounded-full w-fit">
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
              <p className="lg:text-[.8rem] text-sm  font-Satoshi text-gray-600 mt-2 font-semibold">
                Olivia Rhye 20Jan 2024
              </p>
              <p className="xl:text-lg xxl:text-2xl font-Satoshi text-gray-900 mt-2 font-semibold">
                Conversations wih London Makr & Co.
              </p>
              <p className=" xl:text-sm xxl:text-lg font-Satoshi tracking-tight mt-1 font-medium ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
              <div className="flex justify-start gap-2 mt-2">
                <p className="px-4 py-2 bg-lime-400 font-bold font-Satoshi text-sm xl:text-[.8rem] xxl:text-sm rounded-full w-fit">
                  Design
                </p>
                <p className="px-4 py-2 bg-lime-400 font-bold font-Satoshi text-sm xl:text-[.8rem] xxl:text-sm rounded-full w-fit">
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
              <p className="lg:text-[.8rem] text-sm  font-Satoshi text-gray-600 mt-2 font-semibold">
                Olivia Rhye 20Jan 2024
              </p>
              <p className="xl:text-lg xxl:text-2xl font-Satoshi text-gray-900 mt-2 font-semibold">
                Conversations wih London Makr & Co.
              </p>
              <p className=" xl:text-sm xxl:text-lg font-Satoshi tracking-tight mt-1 font-medium ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
              <div className="flex justify-start gap-2 mt-2">
                <p className="px-4 py-2 bg-lime-400 font-bold font-Satoshi text-sm xl:text-[.8rem] xxl:text-sm rounded-full w-fit">
                  Design
                </p>
                <p className="px-4 py-2 bg-lime-400 font-bold font-Satoshi text-sm xl:text-[.8rem] xxl:text-sm rounded-full w-fit">
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
              <p className="lg:text-[.8rem] text-sm  font-Satoshi text-gray-600 mt-2 font-semibold">
                Olivia Rhye 20Jan 2024
              </p>
              <p className="xl:text-lg xxl:text-2xl font-Satoshi text-gray-900 mt-2 font-semibold">
                Conversations wih London Makr & Co.
              </p>
              <p className=" xl:text-sm xxl:text-lg font-Satoshi tracking-tight mt-1 font-medium ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
              <div className="flex justify-start gap-2 mt-2">
                <p className="px-4 py-2 bg-lime-400 font-bold font-Satoshi text-sm xl:text-[.8rem] xxl:text-sm rounded-full w-fit">
                  Design
                </p>
                <p className="px-4 py-2 bg-lime-400 font-bold font-Satoshi text-sm xl:text-[.8rem] xxl:text-sm rounded-full w-fit">
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
              <p className="lg:text-[.8rem] text-sm  font-Satoshi text-gray-600 mt-2 font-semibold">
                Olivia Rhye 20Jan 2024
              </p>
              <p className="xl:text-lg xxl:text-2xl font-Satoshi text-gray-900 mt-2 font-semibold">
                Conversations wih London Makr & Co.
              </p>
              <p className=" xl:text-sm xxl:text-lg font-Satoshi tracking-tight mt-1 font-medium ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
              <div className="flex justify-start gap-2 mt-2">
                <p className="px-4 py-2 bg-lime-400 font-bold font-Satoshi text-sm xl:text-[.8rem] xxl:text-sm rounded-full w-fit">
                  Design
                </p>
                <p className="px-4 py-2 bg-lime-400 font-bold font-Satoshi text-sm xl:text-[.8rem] xxl:text-sm rounded-full w-fit">
                  Ui/Ux
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

export default BlogDetails;

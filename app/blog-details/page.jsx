import Footer_01 from "@/components/footer/Footer_01";
import Header_01 from "@/components/header/Header_01";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
function BlogDetails() {
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
                      <div className="mb-7 shadow-md border border-gray-200 block overflow-hidden rounded-[10px]">
                        <img
                          src="https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="blog-main-1"
                          className="h-[300px] lg:h-[700px] w-full  object-cover"
                        />
                      </div>
                      {/* Blog Post Meta */}

                      <div className="w-full flex flex-col-reverse lg:flex-row items-start lg:items-center justify-between gap-7 lg:gap-0">
                        <ul className=" flex flex-wrap items-center gap-2">
                          <li className="relative font-semibold ">
                            <p className="bg-lime-400 px-5 py-1 font-Satoshi rounded-full">
                              Business
                            </p>
                          </li>
                          <li className="relative font-semibold">
                            <p className="bg-lime-400 px-5 py-1 font-Satoshi rounded-full">
                              Design
                            </p>
                          </li>
                        </ul>
                        <ul className="flex w-full lg:w-auto items-center justify-between lg:gap-12 mb-5">
                          <li className="relative font-semibold ">
                            <div className="flex items-center gap-2">
                              <div className="size-10 rounded-full overflow-hidden border border-gray-400 bg-gray-400">
                                <img
                                  src={
                                    "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                              16 February 2024
                            </p>
                          </li>
                        </ul>
                      </div>

                      {/* Blog Post Meta */}
                      <h5 className="mb-3 mt-10">
                        10 ways to supercharge your startup with AI integration:
                        unlock exponential growth
                      </h5>
                      <p className="mb-7 last:mb-0">
                        The rapid advancements in AI have paved the way for
                        startups to revolutionize their businesses. This article
                        explores 10 key ways AI can be integrated into startups
                        and provides real-world examples of its tangible impact
                        across industries.
                      </p>
                      <ul className="mb-7 flex flex-col gap-7 last:mb-0">
                        <li>
                          <div className="font-semibold">
                            1. AI-Powered Customer Support
                          </div>
                          <p className="mb-7 last:mb-0">
                            AI chatbots and virtual assistants can handle
                            routine queries, troubleshoot issues, and guide
                            users, improving response times. This frees up human
                            agents to tackle complex tasks, enhancing user
                            experience.
                          </p>
                        </li>
                        <li>
                          <div className="font-semibold">
                            2. Predictive Maintenance
                          </div>
                          <p className="mb-7 last:mb-0">
                            By analyzing usage patterns, ML algorithms can
                            predict failures, enabling proactive maintenance and
                            minimizing downtime.
                          </p>
                        </li>
                        <li>
                          <div className="font-semibold">
                            3. Enhanced Cybersecurity
                          </div>
                          <p className="mb-7 last:mb-0">
                            AI anomaly detection, behavior analysis, and
                            intrusion prevention boost security and data
                            protection. This safeguards infrastructure and
                            builds user trust.
                          </p>
                        </li>

                        <li>
                          <div className="font-semibold">
                            4. Personalized User Experiences
                          </div>
                          <p className="mb-7 last:mb-0">
                            By analyzing behavior and preferences, AI tailors
                            interfaces and features. This improves satisfaction
                            and encourages retention.
                          </p>
                        </li>
                        <li>
                          <div className="font-semibold">
                            5. Automated Workflows
                          </div>
                          <p className="mb-7 last:mb-0">
                            Automating tasks like software updates and license
                            management with AI reduces manual efforts and
                            minimizes errors.
                          </p>
                        </li>
                      </ul>
                      <div className="font-semibold">
                        Key Takeaways for Founders
                      </div>
                      <ul className="mb-7 last:mb-0">
                        <li className="relative pl-[30px] after:absolute after:left-[10px] after:top-3 after:h-[5px] after:w-[5px] after:rounded-[50%] after:bg-black">
                          Start with chatbot, workflow automation, and basic
                          analytics.
                        </li>
                        <li className="relative pl-[30px] after:absolute after:left-[10px] after:top-3 after:h-[5px] after:w-[5px] after:rounded-[50%] after:bg-black">
                          Gradually scale AI adoption as the business matures.
                        </li>
                        <li className="relative pl-[30px] after:absolute after:left-[10px] after:top-3 after:h-[5px] after:w-[5px] after:rounded-[50%] after:bg-black">
                          Identify the right AI use cases to solve pressing
                          needs.
                        </li>
                        <li className="relative pl-[30px] after:absolute after:left-[10px] after:top-3 after:h-[5px] after:w-[5px] after:rounded-[50%] after:bg-black">
                          Integrate AI into workflows and processes seamlessly.
                        </li>
                        <li className="relative pl-[30px] after:absolute after:left-[10px] after:top-3 after:h-[5px] after:w-[5px] after:rounded-[50%] after:bg-black">
                          Get creative — leverage partnerships and talent from
                          outside.
                        </li>
                      </ul>
                      <p className="mb-7 last:mb-0">
                        The key to startup success is focusing AI efforts on the
                        applications that will differentiate your business and
                        have the biggest impact at each stage of growth. With
                        the right strategy, AI can unlock transformation
                        opportunities and exponential value creation.
                      </p>
                      <p className="mb-7 last:mb-0">Thanks for reading ❤</p>
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

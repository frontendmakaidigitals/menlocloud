"use client";
import Footer_01 from "@/components/footer/Footer_01";
import Header_01 from "@/components/header/Header_01";
import { AnimatePresence, motion } from "framer-motion";
import { IoBulbOutline } from "react-icons/io5";
import { MdDesignServices } from "react-icons/md";
import { IoBuildOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import useAccordion from "@/components/hooks/useAccordion";
import useTabs from "@/components/hooks/useTabs";
import Link from "next/link";
function About() {
  const services = [
    {
      name: "Search Engine Optimization (SEO)",
      img: "https://cdn3d.iconscout.com/3d/premium/thumb/seo-tag-3d-icon-download-in-png-blend-fbx-gltf-file-formats--label-marketing-website-pack-web-icons-6649168.png?f=webp",
      color: "#512DA8",
    },
    {
      name: "Social Media Marketing (SMM)",
      img: "https://cdn3d.iconscout.com/3d/premium/thumb/social-media-3d-icon-download-in-png-blend-fbx-gltf-file-formats--like-logo-feedback-marketing-advertisement-pack-branding-icons-4863035.png?f=webp",
      color: "black",
    },
    {
      name: "Content Marketing",
      img: "https://cdn3d.iconscout.com/3d/premium/thumb/digital-marketing-3d-icon-download-in-png-blend-fbx-gltf-file-formats--online-web-advertisement-ads-advertising-pack-business-icons-4936363.png",
      color: "#F9A825",
    },
    {
      name: "Email Marketing",
      img: "https://static.vecteezy.com/system/resources/previews/021/096/519/original/3d-icon-email-marketing-png.png",
      color: "#00695C",
    },
    {
      name: "Pay-Per-Click Advertising (PPC)",
      img: "https://cdn3d.iconscout.com/3d/premium/thumb/ppc-3d-icon-download-in-png-blend-fbx-gltf-file-formats--cost-per-click-pay-marketing-internet-pack-business-icons-6497274.png?f=webp",
      color: "#1565C0",
    },
    {
      name: "Affiliate Marketing",
      img: "https://static.vecteezy.com/system/resources/previews/015/339/864/original/3d-rendering-affiliate-marketing-isolated-useful-for-advertising-advertisement-and-promotion-design-png.png",
      color: "#9E9D24",
    },
    {
      name: " Analytics and Reporting",
      img: "https://cdn.icon-icons.com/icons2/2957/PNG/512/graphic_statistics_analytics_bars_chart_icon_185900.png",
      color: "#64DD17",
    },
  ];
  const [activeIndex, handleAccordion] = useAccordion(0);

  const [activeTab, handleTab] = useTabs();
  return (
    <>
      <Header_01 />
      <main className="main-wrapper relative overflow-hidden">
        {/*...::: Breadcrumb Section Start :::... */}
        <section id="section-breadcrumb">
          {/* Section Spacer */}
          <div className="breadcrumb-wrapper">
            {/* Section Container */}
            <div className="global-container flex flex-col justify-center items-center">
              <div className="breadcrumb-block w-full lg:w-2/3 ">
                <p className="text-3xl  xl:text-4xl xxl:text-6xl font-Satoshi font-bold !text-gray-100">
                  Let&apos;s start something really BIG!
                </p>
              </div>
              <div className="h-[500px] grid grid-cols-1 grid-rows-2 py-2 gap-2 lg:grid-cols-4 w-full px-0 lg:px-14 mt-14">
                <div className="w-full p-7 h-full bg-yellow-300 relative rounded-xl">
                  <p className="font-Satoshi font-bold text-black text-2xl xl:text-5xl">
                    200+
                  </p>
                  <p className="font-Satoshi font-medium  text-xl xl:text-3xl mt-2">
                    Awards
                  </p>
                  <div className="size-28 absolute -bottom-1 left-1/2 -translate-x-1/2">
                    <img src={"/assets/img_placeholder/trophy.png"} />
                  </div>
                </div>
                <div className="w-full relative p-7 h-full bg-lime-400  rounded-xl">
                  <p className="font-Satoshi font-bold text-black text-2xl xl:text-5xl">
                    10+
                  </p>
                  <p className="font-Satoshi font-medium text-xl xl:text-3xl mt-2">
                    Ongoing Projects
                  </p>
                  <div className="size-28 absolute -bottom-1 left-1/2 -translate-x-1/2">
                    <img src={"/assets/img_placeholder/project.png"} />
                  </div>
                </div>
                <div className="w-full h-full overflow-hidden col-span-2 row-span-2 bg-pink-400  rounded-xl">
                  <video autoPlay muted loop>
                    <source
                      src={
                        "https://videos.pexels.com/video-files/18069234/18069234-uhd_1440_1440_24fps.mp4"
                      }
                    />
                  </video>
                </div>
                <div className="w-full relative  p-7 h-full bg-orange-400 col-span-2 rounded-xl">
                  <p className="font-Satoshi text-black font-bold text-2xl xl:text-4xl">
                    Start Project
                  </p>
                  <button className="bg-black text-gray-100 px-6 py-2 rounded-lg mt-4 font-Satoshi font-medium">
                    Lets talk
                  </button>
                  <div className="size-24 absolute left-1/2 -translate-x-1/2 ">
                    <img src={`/assets/img_placeholder/star.png`} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="my-20 global-container grid grid-cols-1 gap-10 lg:grid-cols-2 place-items-center">
          <div>
            <img
              src={`https://images.unsplash.com/photo-1642427749670-f20e2e76ed8c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
            />
          </div>
          <div>
            <p className="capitalize text-3xl lg:text-6xl font-Satoshi  font-bold">
              Get IT Solutions{" "}
              <span className="bg-gradient-to-r font-Telma px-1 from-blue-600 to-indigo-400 bg-clip-text text-transparent">
                {" "}
                experts
              </span>{" "}
              consultants
            </p>
            <p className="font-Satoshi font-medium text-lg  mt-4">
              In the rapidly evolving world of digital marketing, having the
              right IT solutions is crucial for maximizing your online presence
              and achieving your business objectives. At [Your Company Name],
              our expert consultants specialize in integrating advanced IT
              solutions that enhance your digital marketing efforts and drive
              results.
            </p>
            <p className="font-Satoshi font-semibold text-xl mt-6">
              Tailored Digital Marketing Technology Solutions
            </p>
            <p className="font-Satoshi font-medium text-lg mt-5">
              We offer a comprehensive suite of IT services designed to support
              your digital marketing strategies, including:
            </p>
            <ul className="mt-2 list-disc">
              <div className="px-5">
                <li className="font-Satoshi font-semibold text-lg ">
                  Marketing Automation
                </li>
                <li className="font-Satoshi font-semibold text-lg mt-1">
                  Data Analytics and Reporting
                </li>
                <li className="font-Satoshi font-semibold text-lg mt-1">
                  Customer Relationship Management (CRM)
                </li>
                <li className="font-Satoshi font-semibold text-lg mt-1">
                  Content Management Systems (CMS)
                </li>
                <li className="font-Satoshi font-semibold text-lg mt-1">
                  E-commerce Solutions
                </li>
              </div>
            </ul>
          </div>
        </section>

        <section className=" mb-20">
          <div className="w-full global-container lg:w-2/3 flex flex-col justify-center items-center">
            <p className="global-container text-3xl  lg:text-6xl  font-Satoshi font-[600] text-center">
              Our
              <span className="bg-gradient-to-r   font-Telma px-1 from-blue-600 to-indigo-400 bg-clip-text text-transparent">
                {" "}
                Services{" "}
              </span>
            </p>
            <p className="text-center font-Satoshi font-semibold mt-1 text-md">
              Optimize your website and improve your rankings in search engines
              to attract organic traffic.
            </p>
          </div>
          <div className="grid global-container place-items-center grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={index}
                style={{ backgroundColor: service?.color }}
                className="mt-10 border-[10px] cursor-pointer border-gray-200 group  rounded-2xl w-full lg:w-[300px] h-[400px]  relative overflow-hidden"
              >
                <div className="size-40 absolute top-16 -translate-x-1/2 left-1/2 -translate-y-0">
                  <img className="w-full" src={service.img} />
                </div>
                <div className="size-4 group-hover:scale-[80] xxl:group-hover:scale-[110]  absolute transition-all duration-700  -top-4 -left-4 bg-gray-200 rounded-full"></div>
                <div className="size-3 group-hover:scale-[90] xxl:group-hover:scale-[120] absolute transition-all duration-700 -top-4 -left-4 bg-white delay-200 rounded-full"></div>
                <div className="w-full relative  z-10 h-full flex py-5 px-5 flex-col justify-end items-start">
                  <p className="xl:text-2xl   pr-3 font-bold font-Satoshi leading-snug group-hover:text-gray-900 transition-all duration-500 text-gray-100">
                    {service.name}
                  </p>
                  <p className="leading-snug mt-1 text-sm text-gray-200 group-hover:text-gray-800  transition-all duration-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <div className="w-full flex justify-between items-center">
                    <button className="px-4 bg-lime-300 py-2 font-Satoshi font-semibold text-sm mt-2   rounded-full">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-blue-950 h-[1700px] lg:h-[550px]  py-20">
          <div className="global-container flex flex-col justify-center items-center">
            <p className="text-slate-100  font-Satoshi font-[400]">
              Our Process
            </p>
            <p className="text-3xl lg:text-6xl font-Satoshi font-bold text-gray-100">
              We Follow our Process
            </p>

            <div className="relative w-full h-full flex flex-col lg:flex-row justify-between items-center mt-14">
              <div className="flex flex-col mt-8 mb-28 lg:mt-6 lg:mb-0 justify-center items-center">
                <div className="size-20 flex justify-center items-center bg-slate-100/50 rounded-xl">
                  <IoBulbOutline className={`text-gray-100 text-5xl`} />
                </div>
                <div className="relative">
                  <p className="font-Satoshi font-bold text-gray-100 mt-1 text-2xl">
                    Research
                  </p>
                  <p className="w-60 top-full left-1/2 -translate-x-1/2 font-Satoshi absolute text-gray-100 mt-1 text-center text-lg">
                    We analyze your goals and digital presence to create a
                    customized strategy.
                  </p>
                </div>
              </div>
              <div className="w-4 h-4 bg-gray-300/60 rounded-full lg:ml-5"></div>
              <div className="flex-grow border-l lg:border-t h-20 lg:h-0 border-dashed border-gray-500 mx-2"></div>
              <div className="w-4 h-4 bg-gray-300/60 rounded-full lg:mr-5"></div>
              <div className="flex flex-col mt-8 mb-28 lg:mt-6 lg:mb-0  justify-center items-center">
                <div className="size-20 flex justify-center items-center bg-slate-100/50  rounded-xl">
                  <MdDesignServices className={`text-gray-100 text-5xl`} />
                </div>
                <div className="relative">
                  <p className="font-Satoshi font-bold text-gray-100 mt-1 text-2xl">
                    Designing
                  </p>
                  <p className="w-60 top-full left-1/2 -translate-x-1/2 font-Satoshi absolute text-gray-100 mt-1 text-center text-lg">
                    Our team implements the strategy using best practices for
                    maximum impact.
                  </p>
                </div>
              </div>
              <div className="w-4 h-4 bg-gray-300/60 rounded-full lg:ml-5"></div>
              <div className="flex-grow border-l lg:border-t h-20 lg:h-0 border-dashed border-gray-500 mx-2"></div>
              <div className="w-4 h-4 bg-gray-300/60 rounded-full lg:mr-5"></div>
              <div className="flex flex-col mt-8 mb-28 lg:mt-6 lg:mb-0 justify-center items-center">
                <div className="size-20 flex justify-center items-center bg-slate-100/50  rounded-xl">
                  <IoBuildOutline className={`text-gray-100 text-5xl`} />
                </div>
                <div className="relative">
                  <p className="font-Satoshi font-bold text-gray-100 mt-1 text-2xl">
                    Building
                  </p>
                  <p className="w-60 top-full left-1/2 -translate-x-1/2 font-Satoshi absolute text-gray-100 mt-1 text-center text-lg">
                    We monitor performance and make data-driven adjustments to
                    optimize results..
                  </p>
                </div>
              </div>
              <div className="w-4 h-4 bg-gray-300/60 rounded-full lg:ml-5"></div>
              <div className="flex-grow border-l lg:border-t h-20 lg:h-0 border-dashed border-gray-500 mx-2"></div>
              <div className="w-4 h-4 bg-gray-300/60 rounded-full lg:mr-5"></div>
              <div className="flex flex-col mt-8 mb-28 lg:mt-6 lg:mb-0 justify-center items-center">
                <div className="size-20 flex justify-center items-center bg-slate-100/50  rounded-xl">
                  <TbTruckDelivery className={`text-gray-100 text-5xl`} />
                </div>
                <div className="relative">
                  <p className="font-Satoshi font-bold text-gray-100 mt-1 text-2xl">
                    Delivered
                  </p>
                  <p className="w-60 top-full left-1/2 -translate-x-1/2 font-Satoshi absolute text-gray-100 mt-1 text-center text-lg">
                    Receive transparent reports that highlight progress and key
                    metrics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="faq-section">
          {/* Section Spacer */}
          <div className="py-32 xl:pb-[150px]">
            {/* Section Container */}
            <div className="global-container">
              <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2">
                {/* FAQ Left Block */}
                <div
                  className="jos flex flex-col"
                  data-jos_animation="fade-right"
                >
                  {/* Section Content Block */}
                  <div className="mb-6">
                    <div className="mx-auto md:mx-0 md:max-w-none">
                      <h2>Freely ask us for more information</h2>
                    </div>
                  </div>
                  {/* Section Content Block */}
                  <div className="text-lg leading-[1.4] lg:text-[21px]">
                    <p className="mb-7 last:mb-0">
                      Our AI SaaS solutions can be quickly deployed, enabling
                      users to start benefiting from AI capabilities without
                      lengthy setup and development times in fast-paced
                      industries.
                    </p>
                    <div className="mt-5  w-full flex justify-start ">
                      <button className="text-gray-100 overflow-hidden group rounded-lg relative font-Satoshi font-semibold py-2 px-5 bg-gray-950">
                        <p className="relative z-10">Lets Connect</p>
                        <div className="bg-sky-500 w-1 h-1 group-hover:scale-[50] absolute -bottom-1 left-1/2 -translate-1/2 rounded-full transition-all duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* FAQ Left Block */}

                {/* FAQ Right Block */}
                <div
                  className="jos md:ml-10 lg:ml-20 xl:ml-32"
                  data-jos_animation="fade-left"
                >
                  {/* Accordion*/}
                  <ul className="accordion">
                    {/* Accordion items */}
                    <li
                      className={`accordion-item border-b-[1px] border-[#DBD6CF] pb-6 pt-6 first:pt-0 last:border-b-0 last:pb-0 ${
                        activeIndex === 0 ? "active" : ""
                      }`}
                      onClick={() => handleAccordion(0)}
                    >
                      <div className="accordion-header flex items-center justify-between font-dmSans text-xl font-bold leading-[1.2] -tracking-[0.5px] text-black lg:text-[28px]">
                        <p>What is digital marketing?</p>
                        <div className="accordion-icon">
                          <img
                            src="/assets/img_placeholder/plus.svg"
                            width={24}
                            height={24}
                            alt="plus"
                          />
                        </div>
                      </div>
                      <div className="accordion-content text-[#2C2C2C]">
                        <p>
                          Digital marketing encompasses all marketing efforts
                          that use the internet or electronic devices. This
                          includes social media marketing, email marketing, SEO
                          (search engine optimization), content marketing, PPC
                          (pay-per-click advertising), and more.
                        </p>
                      </div>
                    </li>
                    {/* Accordion items */}
                    {/* Accordion items */}
                    <li
                      className={`accordion-item border-b-[1px] border-[#DBD6CF] pb-6 pt-6 first:pt-0 last:border-b-0 last:pb-0 ${
                        activeIndex === 1 ? "active" : ""
                      }`}
                      onClick={() => handleAccordion(1)}
                    >
                      <div className="accordion-header flex items-center justify-between font-dmSans text-xl font-bold leading-[1.2] -tracking-[0.5px] text-black lg:text-[28px]">
                        <p>Why is digital marketing important?</p>
                        <div className="accordion-icon">
                          <img
                            src="/assets/img_placeholder/plus.svg"
                            width={24}
                            height={24}
                            alt="plus"
                          />
                        </div>
                      </div>
                      <div className="accordion-content text-[#2C2C2C]">
                        <p>
                          Digital marketing allows businesses to reach a broader
                          audience, engage with customers in real-time, and
                          track the effectiveness of campaigns through data
                          analytics. It’s often more cost-effective than
                          traditional marketing methods.
                        </p>
                      </div>
                    </li>
                    {/* Accordion items */}
                    {/* Accordion items */}
                    <li
                      className={`accordion-item border-b-[1px] border-[#DBD6CF] pb-6 pt-6 first:pt-0 last:border-b-0 last:pb-0 ${
                        activeIndex === 2 ? "active" : ""
                      }`}
                      onClick={() => handleAccordion(2)}
                    >
                      <div className="accordion-header flex items-center justify-between font-dmSans text-xl font-bold leading-[1.2] -tracking-[0.5px] text-black lg:text-[28px]">
                        <p> What is SEO, and why is it important?</p>
                        <div className="accordion-icon">
                          <img
                            src="/assets/img_placeholder/plus.svg"
                            width={24}
                            height={24}
                            alt="plus"
                          />
                        </div>
                      </div>
                      <div className="accordion-content text-[#2C2C2C]">
                        <p>
                          SEO (Search Engine Optimization) is the process of
                          optimizing your website to rank higher in search
                          engine results. It’s important because higher rankings
                          lead to increased visibility, traffic, and potential
                          sales.
                        </p>
                      </div>
                    </li>
                  </ul>
                  {/* Accordion*/}
                </div>
                {/* FAQ Right Block */}
              </div>
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        <section className="my-10 py-20 bg-center bg-cover bg-no-repeat rounded-2xl global-container bg-black">
          <div className="">
            <p className="global-container mb-2 text-3xl text-gray-100 lg:text-5xl tracking-tight font-Satoshi font-bold w-full lg:w-2/3 text-center">
              Ready to Transform Your{" "}
              <span className="bg-gradient-to-r font-Telma px-1 from-blue-600 to-indigo-400 bg-clip-text text-transparent">
                {" "}
                Digital
              </span>{" "}
              Presence?
            </p>
            <p className="global-container text-center w-full lg:w-2/3 font-Satoshi text-md text-gray-200">
              Let’s Create a Strategy That Works for You! Contact us today for a
              free consultation and discover how our tailored digital marketing
              solutions can help you achieve your business goals.
            </p>
          </div>
          <div className="mt-5  w-full flex justify-center ">
            <button className="text-gray-900 overflow-hidden group rounded-lg relative font-Satoshi font-semibold py-2 px-5 bg-gray-200">
              <p className="relative z-10">Lets Connect</p>
              <div className="bg-sky-500 w-1 h-1 group-hover:scale-[50] absolute -bottom-1 left-1/2 -translate-1/2 rounded-full transition-all duration-300" />
            </button>
          </div>
        </section>
      </main>
      <Footer_01 />
    </>
  );
}

export default About;

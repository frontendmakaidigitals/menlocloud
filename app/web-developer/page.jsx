"use client";
import Footer_01 from "@/components/footer/Footer_01";
import Header_01 from "@/components/header/Header_01";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { SwiperSlide, Swiper } from "swiper/react";
import { twMerge } from "tailwind-merge";
import "swiper/css";
import { useState, useRef } from "react";
import { Timeline } from "@/components/ui/timeline";
import SwiperNavButtons from "@/components/SwiperNavButton";
import Link from "next/link";

function Services() {
  const swiperRef = useRef(null);
  const products = [
    {
      title: "Insight Vision",
      thumbnail: "/assets/img_placeholder/insight-vision.png",
    },
    {
      title: "Zippro",
      thumbnail: "/assets/img_placeholder/zippro.png",
    },
    {
      title: "Insight Vision",
      thumbnail: "/assets/img_placeholder/insight-vision.png",
    },
    {
      title: "Zippro",
      thumbnail: "/assets/img_placeholder/zippro.png",
    },
    {
      title: "Insight Vision",
      thumbnail: "/assets/img_placeholder/insight-vision.png",
    },
    {
      title: "Zippro",
      thumbnail: "/assets/img_placeholder/zippro.png",
    },
    {
      title: "Insight Vision",
      thumbnail: "/assets/img_placeholder/insight-vision.png",
    },
    {
      title: "Zippro",
      thumbnail: "/assets/img_placeholder/zippro.png",
    },
    {
      title: "Insight Vision",
      thumbnail: "/assets/img_placeholder/insight-vision.png",
    },
    {
      title: "Zippro",
      thumbnail: "/assets/img_placeholder/zippro.png",
    },
    {
      title: "Insight Vision",
      thumbnail: "/assets/img_placeholder/insight-vision.png",
    },
    {
      title: "Zippro",
      thumbnail: "/assets/img_placeholder/zippro.png",
    },
    {
      title: "Insight Vision",
      thumbnail: "/assets/img_placeholder/insight-vision.png",
    },
    {
      title: "Zippro",
      thumbnail: "/assets/img_placeholder/zippro.png",
    },
    {
      title: "Insight Vision",
      thumbnail: "/assets/img_placeholder/insight-vision.png",
    },
    {
      title: "Zippro",
      thumbnail: "/assets/img_placeholder/zippro.png",
    },
    {
      title: "Insight Vision",
      thumbnail: "/assets/img_placeholder/insight-vision.png",
    },
    {
      title: "Zippro",
      thumbnail: "/assets/img_placeholder/zippro.png",
    },
  ];
  const ourExp = [
    { name: "Mobile First approach", color: "#5ECCA0", title: "Strategy" },
    { name: "Search Engine Optimized", color: "#0A0A0A", title: "Planning" },
    { name: "Rapid Development", color: "#CB9BFA", title: "Strategy" },
    {
      name: "Guranteed Quality Assurance",
      color: "#F8FD91",
      title: "Planning",
    },
  ];

  const dummyContent = [
    {
      title: "Web Apps",
      description: (
        <>
          <p className="text-lg">
            We offer full-cycle web app development services from UI/UX design
            and development to QA and upgrade & maintenance. We build web apps
            that are secure, scalable, fast, and work seamlessly across all
            devices and platforms
          </p>
        </>
      ),
      badge: ["React", "Next js", "Astro"],
      image:
        "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "eCommerce",
      description: (
        <>
          <p className="text-lg">
            With more than 12 years of delivering the best eCommerce web
            development services, our web design & development team can help you
            leverage Shopify, Magento, WooCommerce, or BigCommerce to transform
            your store with a smooth shopping experience for your users.
          </p>
        </>
      ),
      badge: ["Shopify", "WooCommerce"],
      image:
        "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "ERP",
      description: (
        <>
          <p className="text-lg">
            Leverage our expert ERP development services to build a solution
            from the ground up, regardless of its scale, functionalities, or
            complexity. We help enterprises to streamline processes, function
            efficiently, and facilitate growth by building scalable ERP
            solutions.
          </p>
        </>
      ),
      badge: ["Java", "Laravel", "Django"],
      image: "https://ibrinfotech.b-cdn.net/uploads/erp-solution-1.png",
    },
  ];
  const capabilities = [
    {
      name: "Custom Web Development",
      bg: "/assets/img_placeholder/web-bg.png",
      desc: "Give the features & performance your users expect from native apps on their browsers. Our web development experts help you deliver the experience you want through your web apps, website, or online store without any loss of speed or interruptions.",
    },
    {
      name: "Responsive Web Design",
      desc: "Our HTML5 experienced web developers deliver and deploy complete solutions to perfectly fit your business environment, and help optimize website performance by focusing on scalability, loading time, and responsiveness.",
    },
    {
      name: "Web Testing",
      desc: "We make sure your website is tested to the point of perfection. We deliver high-grade QA services for impeccable performance, usability, and security of your web platform.",
    },
    {
      name: "Support & Maintenance",
      desc: "Our team maintains 100% uptime, rock-solid security, and performs regular backups, & software updates to make sure that your website, web app, or online store is well-optimized and above par the optimal parameters.",
    },
    {
      name: "Performance Optimization",
      desc: "If you have an existing web app, website, or an online store that you would like to improve, update, further develop or upgrade its legacy backend, you got our back. Our web design & development team adjusts to the coding standards of the current application to make it better without breaking it.",
    },
  ];
  const data = [
    {
      title: "Requirement Gathering & Analysis",
      content: (
        <div>
          <p className="text-neutral-800 text-xs md:text-lg  font-normal mb-2 lg:mb-2">
            Our web design and development team researches & works on creating
            the best structure for your web development project based on your
            requirements.
          </p>
          <div className="w-full">
            <img
              src="https://www.teced.com/wp-content/uploads/bigstock-Manager-leading-a-meeting-with-137595377.jpg"
              alt="startup template"
              className="rounded-lg object-cover h-60 md:h-44 lg:h-[30rem] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Proposal",
      content: (
        <div>
          <p className="text-neutral-800 text-xs md:text-lg  font-normal mb-2 lg:mb-2">
            Based on your requirements and our research, we create a thorough
            proposal for your web design and development project covering all
            the details.
          </p>

          <div className="">
            <img
              src="https://images.unsplash.com/photo-1622676666769-1a0407cf10a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="startup template"
              className="rounded-lg object-cover h-60 md:h-44 lg:h-[30rem] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Wireframes",
      content: (
        <div>
          <p className="text-neutral-800 text-xs md:text-lg  font-normal mb-2 lg:mb-2">
            Our UI/UX team creates a wireframe for your web development project
            to deliver the best experience for your users.
          </p>

          <div className="">
            <img
              src="https://images.unsplash.com/photo-1680016661694-1cd3faf31c3a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="startup template"
              className="rounded-lg object-cover h-60 md:h-44 lg:h-[30rem] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Development & Testing",
      content: (
        <div>
          <p className="text-neutral-800 text-xs md:text-lg  font-normal mb-2 lg:mb-2">
            Our web development team starts with the development process
            following the SCRUM project execution methodology. Our team tests
            every functionality.
          </p>

          <div className="">
            <img
              src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="startup template"
              className="rounded-lg object-cover h-60 md:h-44 lg:h-[30rem] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Support & Maintaenece",
      content: (
        <div>
          <p className="text-neutral-800 text-xs md:text-lg  font-normal mb-2 lg:mb-2">
            Our web design & development team makes sure that your website or
            web app is maintained according to the latest market practices &
            changing consumer demands.
          </p>
          <div className="mb-8"></div>
          <div className="">
            <img
              src="https://images.unsplash.com/photo-1528901166007-3784c7dd3653?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="hero template"
              className="rounded-lg object-cover h-60 md:h-44 lg:h-[30rem] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
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
          <div className="w-full mb-20 ">
            <HeroParallax products={products} />;
          </div>
        </main>
        <section className=" flex flex-col items-center justify-center">
          <div className="w-full global-container lg:w-2/3 flex flex-col justify-center items-center">
            <p className="global-container text-3xl  lg:text-6xl  font-Satoshi font-[600] text-center">
              Web Development
              <span className="bg-gradient-to-r  font-Telma px-1 from-blue-600 to-indigo-400 bg-clip-text text-transparent">
                {" "}
                Services{" "}
              </span>
            </p>
          </div>
          <TracingBeam className="px-12 lg:px-6 mt-10">
            <div className="max-w-2xl mx-auto antialiased pt-6 relative">
              {dummyContent.map((item, index) => (
                <div key={`content-${index}`} className="mb-10">
                  <p className={"text-3xl text-Satoshi font-[600]"}>
                    {item.title}
                  </p>
                  <div className="flex items-center gap-2">
                    {item.badge.map((tag, index) => (
                      <p
                        key={index}
                        className="bg-lime-400 text-md font-Satoshi font-bold text-gray-900 rounded-full text-sm w-fit px-4 mb-4 mt-1 py-1"
                      >
                        {tag}
                      </p>
                    ))}
                  </div>

                  <div className="text-sm prose prose-sm dark:prose-invert">
                    {item?.image && (
                      <img
                        src={item.image}
                        alt="blog thumbnail"
                        height="1000"
                        width="1000"
                        className="rounded-lg mb-10 object-cover"
                      />
                    )}
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </TracingBeam>
        </section>
        <section className="global-container my-20">
          <div className="w-full global-container lg:w-2/3 flex flex-col justify-center items-center">
            <p className="global-container text-3xl  lg:text-6xl  font-Satoshi font-[600] text-center">
              Work with the
              <span className="bg-gradient-to-r  font-Telma px-1 from-blue-600 to-indigo-400 bg-clip-text text-transparent">
                {" "}
                Best!{" "}
              </span>
            </p>
          </div>
          <div className="w-full grid grid-cols-1 lg:grid-cols-4 mt-12 gap-10 ">
            {ourExp.map((exp, index) => (
              <div
                key={index}
                className="w-full px-10 py-10 rounded-lg"
                style={{
                  backgroundColor: exp.color,
                  color: index == 1 ? "white" : "black",
                }}
              >
                <p className="text-xl font-Satoshi font-[600]">{exp.title}</p>
                <p className="text-4xl font-Satoshi font-[600] mt-5">
                  {exp.name}
                </p>
                <p className="mt-4">
                  lorem ipsum dolor sit amet consectetur adipisicing elit. lorem
                  ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            ))}
          </div>
        </section>
        <section className="global-container mt-10">
          <div className="w-full global-container lg:w-2/3 flex flex-col justify-center items-center">
            <p className="global-container text-3xl  lg:text-6xl  font-Satoshi font-[600] text-center">
              Our Development
              <span className="bg-gradient-to-r  font-Telma px-1 from-blue-600 to-indigo-400 bg-clip-text text-transparent">
                {" "}
                Process{" "}
              </span>
            </p>
          </div>
          <Timeline data={data} />
        </section>
        <section className="global-container my-40 ">
          <div className="w-full global-container lg:w-2/3 flex flex-col justify-center items-center">
            <p className="global-container text-3xl  lg:text-6xl  font-Satoshi font-[600] text-center">
              Web Development
              <span className="bg-gradient-to-r  font-Telma px-1 from-blue-600 to-indigo-400 bg-clip-text text-transparent">
                {" "}
                Capabilities{" "}
              </span>
            </p>
          </div>
          <div className="w-full hidden lg:flex justify-end mb-5">
            <SwiperNavButtons swiperRef={swiperRef} />
          </div>
          <Swiper
            ref={swiperRef}
            spaceBetween={10}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 1.1, // 2 slides for screens >= 640px
              },
              768: {
                slidesPerView: 3, // 3 slides for screens >= 768px
              },
              1024: {
                slidesPerView: 3, // 4 slides for screens >= 1024px
              },
            }}
          >
            {capabilities.map((capability, index) => (
              <SwiperSlide
                className="w-full group transition-all duration-500"
                key={index}
              >
                <div className="w-full h-full bg-neutral-200 relative hover:bg-black px-7 py-10 min-h-[600px] lg:min-h-[400px] rounded-md">
                  <div className="relative z-10">
                    <h4 className="group-hover:text-blue-500 ">
                      {" "}
                      {capability.name}
                    </h4>
                    <p className="mt-4 group-hover:text-gray-100">
                      {capability.desc}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
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
            <Link href={`/contact`}>
              <button className="text-gray-900 overflow-hidden group rounded-lg relative font-Satoshi font-semibold py-2 px-5 bg-gray-200">
                <p className="relative z-10">Lets Connect</p>
                <div className="bg-sky-500 w-1 h-1 group-hover:scale-[50] absolute -bottom-1 left-1/2 -translate-1/2 rounded-full transition-all duration-300" />
              </button>
            </Link>
          </div>
        </section>
        <Footer_01 />
      </div>
    </>
  );
}

export default Services;

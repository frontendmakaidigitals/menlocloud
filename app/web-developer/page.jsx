"use client";
import Footer_01 from "@/components/footer/Footer_01";
import Header_01 from "@/components/header/Header_01";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { SwiperSlide, Swiper } from "swiper/react";
import { twMerge } from "tailwind-merge";
import "swiper/css";
import { Timeline } from "@/components/ui/timeline";
function Services() {
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
      badge: "React",
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
      badge: "Shopify",
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
      badge: "Java",
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
              src="https://www.projectmanager.com/wp-content/uploads/2023/05/Resource-Optimization.jpg"
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
              src="https://www.proclinical.com/img/dxMB0y2fUkX69QjW-32sXA/how+to+spot+a+great+candidate+at+interview.jpg?v=cbbb5d01d08ad7bdf659ba32cd053aa1"
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
              src="https://media.licdn.com/dms/image/D5612AQGqKDWRA3L23A/article-cover_image-shrink_720_1280/0/1692817692297?e=2147483647&v=beta&t=tFbcP3EjhgnYbOGsznY5O2KbnCP8Y8DPIKdWsH3q4UY"
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
              src="https://www.firstlight.net/wp-content/uploads/2021/04/Monitoring-Header.png"
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
          <div className="global-container lg:w-2/3 flex flex-col items-center justify-center w-full">
            <h2 className="text-center">Web Development Services</h2>
          </div>
          <TracingBeam className="px-12 lg:px-6 mt-10">
            <div className="max-w-2xl mx-auto antialiased pt-6 relative">
              {dummyContent.map((item, index) => (
                <div key={`content-${index}`} className="mb-10">
                  <p className={"text-3xl text-Satoshi font-[600]"}>
                    {item.title}
                  </p>
                  <h2 className="bg-lime-400 text-gray-900 rounded-full text-sm w-fit px-4 mb-4 mt-1 py-1">
                    {item.badge}
                  </h2>

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
          <div className="w-full flex justify-center mb-14">
            <h2>Work with the BEST!</h2>
          </div>
          <div className="w-full grid grid-cols-1 lg:grid-cols-4  gap-10 ">
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
        <section className="global-container">
          <div className="w-full flex justify-center mb-14">
            <h2 className="text-center w-full xl:w-2/3">
              Our Web Development Process
            </h2>
          </div>
          <Timeline data={data} />
        </section>
        <section className="global-container my-40">
          <div className="w-full flex justify-center mb-14">
            <h2 className="text-center w-full xl:w-2/3">
              Web Development Capabilities
            </h2>
          </div>
          <Swiper autoplay spaceBetween={50} slidesPerView={3}>
            {capabilities.map((capability, index) => (
              <SwiperSlide
                className="w-full group transition-all duration-500"
                key={index}
              >
                <div className="w-full h-full bg-neutral-200 relative hover:bg-black px-7 py-10 min-h-[300px] rounded-md">
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
        <Footer_01 />
      </div>
    </>
  );
}

export default Services;

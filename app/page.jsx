"use client";

import Link from "next/link";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useAccordion from "@/components/hooks/useAccordion";
import useTabs from "@/components/hooks/useTabs";
import Header_01 from "@/components/header/Header_01";
import Footer_01 from "@/components/footer/Footer_01";
import { useEffect } from "react";
import "/styles/globals.css";

function Home() {
  const [activeIndex, handleAccordion] = useAccordion(0);

  const [activeTab, handleTab] = useTabs();
  // This will run one time after the component mounts
  
  return (
    <div className="page-wrapper relative z-[1] bg-white">
      {/*...::: Header Start :::... */}
      <Header_01 />
      {/*...::: Header End :::... */}
      <main className="main-wrapper relative overflow-hidden">
        {/*...::: Hero Section Start :::... */}
        <section id="section-hero">
          <div className="relative z-[1] overflow-hidden rounded-bl-[30px] rounded-br-[30px] bg-colorLinenRuffle pb-20 pt-28 lg:rounded-bl-[50px] lg:rounded-br-[50px] lg:pb-24 lg:pt-32 xl:pt-40 xxl:pb-[133px] xxl:pt-[195px]">
            <div className="global-container">
              <div className="mb-14 flex flex-col items-center text-center lg:mb-20">
                <h2 className="jos slide-from-bottom mb-6 max-w-[630px] lg:max-w-[868px] xl:max-w-[1206px]">
                  Delivering intelligent outcomes with Big data & Analytics
                </h2>
                <p className="jos slide-from-bottom mb-11 max-w-[700px] text-lg font-semibold sm:text-xl xl:max-w-[980px]">
                  <span className="text-xl font-bold">
                    menlo<span className="text-sky-500 italic">cloud</span>
                  </span>{" "}
                  is a robust organization using modern technologies like AI, ML
                  and Data Science
                </p>
                <div
                  className="jos flex flex-wrap justify-center gap-6"
                  data-jos_animation="fade"
                >
                  <Link
                    href="#"
                    className="button rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-[#2962FF] hover:border-[#2962FF] hover:text-white"
                  >
                    Read More
                  </Link>
                  <Link
                    href="#"
                    className="button rounded-[50px] border-2 border-black bg-transparent py-4 text-black after:bg-[#2962FF] hover:border-[#2962FF] hover:text-white"
                  >
                    About Us
                  </Link>
                </div>
              </div>
              <div
                className="jos hero-img overflow-hidden rounded-2xl bg-black"
                data-jos_animation="zoom"
              >
                <video width="1296" height="640" autoPlay muted>
                  <source
                    src={`/assets/img_placeholder/th-1/dev video.mp4`}
                  ></source>
                </video>
              </div>

              <div className="my-10 h-[1px] w-full bg-[#DBD6CF] lg:my-16 xl:my-20"></div>
              <div className="jos mx-auto mb-12 max-w-[715px] text-center lg:mb-16">
                <p className="text-lg">
                  Our tech stack integrates cutting edge technology for
                  growth and innovation
                </p>
              </div>
              <div className="jos brand-slider" data-jos_animation="fade">
                <Swiper
                  slidesPerView={2}
                  spaceBetween={105}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                  breakpoints={{
                    768: {
                      slidesPerView: 3,
                    },
                    992: {
                      slidesPerView: 4,
                    },
                    1200: {
                      slidesPerView: 5,
                    },
                  }}
                >
                  <SwiperSlide>
                    <img
                      src="/assets/img_placeholder/th-1/googleCloud.png"
                      alt="brand-1"
                      width="180"
                      height="38"
                      className="max-w-full"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/assets/img_placeholder/th-1/aws.png"
                      alt="brand-2"
                      width="90"
                      height="35"
                      className="max-w-full"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/1280px-Microsoft_Azure_Logo.svg.png"
                      alt="brand-3"
                      width="130"
                      className="max-w-full"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/assets/img_placeholder/th-1/postgress.png"
                      alt="brand-4"
                      width="145"
                      height="30"
                      className="max-w-full"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*zmMOdVZ_j9vwMcpdD8Uceg.png"
                      alt="brand-5"
                      width="188"
                      className="max-w-full"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/assets/img_placeholder/th-1/django.png"
                      alt="brand-1"
                      width="110"
                      height="38"
                      className="max-w-full"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="blue-gradient-1 absolute -right-[200px]  lg:-right-[150px] top-[370px] -z-[1]  h-[200px] w-[200px] lg:w-[500px] lg:h-[500px] animate-spin rounded-[500px]"></div>

            <div className="blue-gradient-2 absolute -right-[200px] lg:right-[57px] top-[620px] -z-[1] h-[300px] w-[300px] lg:w-[450px] lg:h-[450px] animate-spin rounded-[450px]"></div>
          </div>
        </section>
        {/*...::: Hero Section End :::... */}

        {/*...::: Service Section Start :::... */}
        <section id="section-service">
          {/* Section Spacer */}
          <div className="pb-20 pt-20 xl:pb-[150px] xl:pt-[130px]">
            {/* Section Container */}
            <div className="global-container">
              {/* Section Content Block */}
              <div className="jos mb-10 lg:mb-16 xl:mb-20">
                <div className="md:max-w-sm lg:max-w-xl xl:max-w-[746px]">
                  <h2>Services</h2>
                </div>
              </div>
              {/* Section Content Block */}
              {/* Service List */}
              <ul className="jos grid grid-cols-1 gap-[2px] overflow-hidden rounded-[10px] border-2 border-black bg-black sm:grid-cols-2 lg:grid-cols-4">
                {/* Service Item */}
                <li className="flex flex-col justify-around group bg-white p-[30px] transition-all duration-300 ease-in-out hover:bg-black">
                  <div className="relative mb-9 h-[70px] w-[70px]">
                    <img
                      src="/assets/img_placeholder/th-1/service-icon-black-1.svg"
                      alt=""
                      width="70"
                      height="70"
                    />
                    <img
                      src="/assets/img_placeholder/th-1/service-icon-orange-1.svg"
                      alt="service-icon-orange-1"
                      width="70"
                      height="70"
                      className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                    />
                  </div>
                  <h3 className="mb-4 block text-xl leading-tight -tracking-[0.5px] group-hover:text-white xl:text-2xl xxl:text-[28px]">
                    <p className="hover:text-[#2962FF]">Applied Ai</p>
                  </h3>

                  <p className="mb-12 duration-300 group-hover:text-white">
                    Bridging conventional and generative AI to deliver
                    effective, real-world applications.
                  </p>

                  <div className="relative inline-block h-[30px] w-[30px] duration-300">
                    <img
                      src="/assets/img_placeholder/th-1/arrow-right-black.svg"
                      alt="arrow-right-black"
                      width="30"
                      height="30"
                    />
                    <img
                      src="/assets/img_placeholder/th-1/arrow-right-orange.svg"
                      alt="arrow-right-blue"
                      width="30"
                      height="30"
                      className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                    />
                  </div>
                </li>
                {/* Service Item */}
                {/* Service Item */}
                <li className="flex flex-col group justify-around bg-white p-[30px] transition-all duration-300 ease-in-out hover:bg-black">
                  <div className="relative mb-9 h-[70px] w-[70px]">
                    <img
                      src="/assets/img_placeholder/th-1/service-icon-black-2.svg"
                      alt="service-icon-black-2"
                      width="70"
                      height="70"
                    />
                    <img
                      src="/assets/img_placeholder/th-1/service-icon-orange-2.svg"
                      alt="service-icon-orange-1"
                      width="70"
                      height="70"
                      className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                    />
                  </div>

                  <h3 className="mb-4 block text-xl leading-tight -tracking-[0.5px] group-hover:text-white xl:text-2xl xxl:text-[28px]">
                    <p className="hover:text-[#2962FF]">
                      Artificial Intelligence
                    </p>
                  </h3>

                  <p className="mb-12 duration-300 group-hover:text-white">
                    Shaping the future through advanced AI
                  </p>

                  <div className="relative inline-block h-[30px] w-[30px] duration-300">
                    <img
                      src="/assets/img_placeholder/th-1/arrow-right-black.svg"
                      alt="arrow-right-black"
                      width="30"
                      height="30"
                    />
                    <img
                      src="/assets/img_placeholder/th-1/arrow-right-orange.svg"
                      alt="arrow-right-blue"
                      width="30"
                      height="30"
                      className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                    />
                  </div>
                  {/* Features Item */}
                  {/* Features Item */}
                </li>
                {/* Service Item */}
                {/* Service Item */}
                <li className="group flex flex-col justify-around bg-white p-[30px] transition-all duration-300 ease-in-out hover:bg-black">
                  <div className="relative mb-9 h-[70px] w-[70px]">
                    <img
                      src="/assets/img_placeholder/th-1/service-icon-black-3.svg"
                      alt="service-icon-black-3"
                      width="70"
                      height="70"
                    />
                    <img
                      src="/assets/img_placeholder/th-1/service-icon-orange-3.svg"
                      alt="service-icon-orange-3"
                      width="70"
                      height="70"
                      className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                    />
                  </div>
                  <h3 className="mb-4 block text-xl leading-tight -tracking-[0.5px] group-hover:text-white xl:text-2xl xxl:text-[28px]">
                    <p className="hover:text-[#2962FF]">Cloud modernisation</p>
                  </h3>

                  <p className="mb-12 duration-300 group-hover:text-white">
                    Transforming business operations with next-generation cloud
                    modernization
                  </p>

                  <div className="relative inline-block h-[30px] w-[30px] duration-300">
                    <img
                      src="/assets/img_placeholder/th-1/arrow-right-black.svg"
                      alt="arrow-right-black"
                      width="30"
                      height="30"
                    />
                    <img
                      src="/assets/img_placeholder/th-1/arrow-right-orange.svg"
                      alt="arrow-right-black"
                      width="30"
                      height="30"
                      className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                    />
                  </div>
                </li>
                {/* Service Item */}
                {/* Service Item */}
                <li className="flex flex-col justify-around group bg-white p-[30px] transition-all duration-300 ease-in-out hover:bg-black">
                  <div className="relative mb-9 h-[70px] w-[70px]">
                    <img
                      src="/assets/img_placeholder/th-1/service-icon-black-4.svg"
                      alt="service-icon-black-4"
                      width="70"
                      height="70"
                    />
                    <img
                      src="/assets/img_placeholder/th-1/service-icon-orange-4.svg"
                      alt="service-icon-orange-4"
                      width="70"
                      height="70"
                      className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                    />
                  </div>
                  <h3 className="mb-4 block text-xl leading-tight -tracking-[0.5px] group-hover:text-white xl:text-2xl xxl:text-[28px]">
                    <p className="hover:text-[#2962FF]">
                      Systems Implementation
                    </p>
                  </h3>

                  <p className="mb-12 duration-300 group-hover:text-white">
                    Transforming concepts into functional systems through
                    precise implementation
                  </p>

                  <div className="relative inline-block h-[30px] w-[30px] duration-300">
                    <img
                      src="/assets/img_placeholder/th-1/arrow-right-black.svg"
                      alt="arrow-right-black"
                      width="30"
                      height="30"
                    />
                    <img
                      src="/assets/img_placeholder/th-1/arrow-right-orange.svg"
                      alt="arrow-right-black"
                      width="30"
                      height="30"
                      className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                    />
                  </div>
                </li>
                {/* Service Item */}
              </ul>
              <div className="w-full flex justify-center mt-4">
                <button
                  href="#"
                  className="button rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-[#2962FF] hover:border-[#2962FF] hover:text-white"
                >
                  Explore more
                </button>
              </div>
              {/* Service List */}
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: Service Section End :::... */}

        {/*...::: Content Section Start_1 :::... */}
        <section id="content-section-1">
          {/* Section Spacer */}
          <div className="pb-20 xl:pb-[150px]">
            {/* Section Container */}
            <div className="global-container">
              <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20 xl:gap-28 xxl:gap-32">
                {/* Content Left Block */}
                <div
                  className="jos order-2 overflow-hidden rounded-md md:order-1"
                  data-jos_animation="fade-left"
                >
                  <img
                    src="/assets/img_placeholder/th-1/content-img-1.jpg"
                    alt="content-img-1"
                    width="526"
                    height="450"
                    className="h-auto w-full"
                  />
                </div>
                {/* Content Left Block */}
                {/* Content Right Block */}
                <div
                  className="jos order-1 md:order-2"
                  data-jos_animation="fade-right"
                >
                  {/* Section Content Block */}
                  <div className="mb-6">
                    <h2>Standing at the forefront of professional services</h2>
                  </div>
                  {/* Section Content Block */}
                  <div className="text-lg leading-[1.4] lg:text-[21px]">
                    <p className="mb-7 last:mb-0">
                      MenloCloud is a pioneering professional services firm
                      driving value through integrating business, technology,
                      and human elements.
                    </p>
                    <p className="mb-7 last:mb-0">
                      From strategy, development to digital product creation and
                      beyond, we offer a comprehensive range of services
                      designed to fast-track your vision with practical,
                      integrated solutions. We attentively listen and share our
                      expertise throughout the process, equipping your teams to
                      sustain progress long after our involvement.
                    </p>
                  </div>
                </div>
                {/* Content Right Block */}
              </div>
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: Content Section End_1 :::... */}

        {/*...::: Content Section Start_2 :::... */}
        <section id="content-section-2">
          {/* Section Spacer */}
          <div className="pb-20 xl:pb-[150px]">
            {/* Section Container */}
            <div className="global-container">
              <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20 xl:grid-cols-[minmax(0,_1.2fr)_1fr] xl:gap-28 xxl:gap-32">
                {/* Content Left Block */}
                <div
                  className="jos order-2 overflow-hidden rounded-md"
                  data-jos_animation="fade-left"
                >
                  <img
                    src="/assets/img_placeholder/th-1/content-img-2.jpg"
                    alt="content-img-2"
                    width="526"
                    height="450"
                    className="h-auto w-full"
                  />
                </div>
                {/* Content Left Block */}
                {/* Content Right Block */}
                <div className="jos order-1" data-jos_animation="fade-right">
                  {/* Section Content Block */}
                  <div className="mb-6">
                    <h2> Required by Everyone, Everywhere</h2>
                  </div>
                  {/* Section Content Block */}
                  <div className="text-lg leading-[1.4] lg:text-[21px]">
                    <p className="mb-7 last:mb-0">
                      Artificial Intelligence (AI), Machine Learning (ML), and
                      Data Science are no longer just technological luxuries but
                      essential tools across all sectors.
                    </p>

                    <div className="text-lg leading-[1.4] lg:text-[21px]">
                      <p className="mb-7 last:mb-0">
                        The necessity of these technologies extends beyond
                        specific industries; they are crucial for everyone,
                        everywhere and are pivotal in addressing complex
                        challenges and seizing new opportunities. As digital
                        transformation accelerates, embracing these technologies
                        becomes indispensable for achieving efficiency,
                        fostering growth, and staying competitive in an
                        increasingly data-driven world.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Content Right Block */}
              </div>
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: Content Section End :::... */}

        {/*...::: Funfact Section Start :::... */}
        <section id="funfact-section">
          <div className="mx-auto max-w-[1500px] px-5">
            <div className="jos grid grid-cols-1 overflow-hidden rounded-[30px] bg-black lg:rounded-[50px] xl:grid-cols-[minmax(400px,_1fr)_1.5fr] xxl:grid-cols-[1fr_minmax(800px,_1fr)]">
              {/* Funfact Left Block */}
              <div className="relative overflow-hidden rounded-[30px] lg:rounded-[50px]">
                <video width={"100%"} height={"100%"} autoPlay muted>
                  <source src="/assets/img_placeholder/video.mp4" />
                </video>
                {/* Video Play Button */}

                {/* Video Play Button */}
              </div>
              {/* Funfacct Left Block */}

              {/* Funfact Right Block */}
              <div className="self-center px-6 py-16 sm:py-20 md:px-16 xl:px-10 xl:py-24 xxl:py-32 xxl:pl-16 xxl:pr-28">
                {/* Section Content Block */}
                <div className="mb-8 lg:mb-16 xl:mb-6">
                  <h2 className="text-white">
                    Industry specific usage with AI & ML
                  </h2>
                </div>
                {/* Section Content Block */}
                <div className="text-left text-lg leading-[1.4] text-white lg:text-[21px]">
                  <p className="mb-7 last:mb-0">
                    <span className="text-xl font-bold">
                      menlo<span className="text-sky-500 italic">cloud</span>
                    </span>{" "}
                    offers a wealth of experience and measurable success in your
                    field, while also sharing insights from cross-industries to
                    help you discover novel ways to adapt and lead.
                  </p>
                </div>
                {/* Horizontal Separator */}
                <div className="my-14 h-[1px] w-full bg-colorCodGray"></div>
                {/* Counter Scroll */}
                <div className="jos brand-slider" data-jos_animation="fade">
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    autoplay={{
                      delay: 4000,
                      disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    loop={true}
                    breakpoints={{
                      768: {
                        slidesPerView: 3,
                      },
                      992: {
                        slidesPerView: 3,
                      },
                      1200: {
                        slidesPerView: 3,
                      },
                    }}
                    className=""
                  >
                    <SwiperSlide>
                      <div className="text-sm flex items-center text-gray-50">
                        <div className="size-7 flex items-center justify-center mr-1 bg-blue-500">
                          DA
                        </div>
                        <p> Data & Analytics</p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="text-sm flex items-center text-gray-50">
                        <div className="size-7 flex items-center justify-center mr-1 bg-blue-500">
                          AI
                        </div>
                        <p> Artificial Intelligence</p>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="text-sm flex items-center text-gray-50">
                        <div className="size-7 flex items-center justify-center mr-1 bg-blue-500">
                          CM
                        </div>
                        <p>Cloud Modernisation</p>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="text-sm flex items-center text-gray-50">
                        <div className="size-7 flex items-center justify-center mr-1 bg-blue-500">
                          OC
                        </div>
                        <p> Organizational Change</p>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="text-sm flex items-center text-gray-50">
                        <div className="size-7 flex items-center justify-center mr-1 bg-blue-500">
                          SI
                        </div>
                        <p> System Implementation</p>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="text-sm flex items-center text-gray-50">
                        <div className="size-7 flex items-center justify-center mr-1 bg-blue-500">
                          SE
                        </div>
                        <p> Software Engineering</p>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
                {/* Counter Scroll */}
              </div>
              {/* Funfact Right Block */}
            </div>
          </div>
        </section>
        {/*...::: Funfact Section End :::... */}

        {/*...::: FAQ Section Start :::... */}
        <section className="faq-section mt-40">
          {/* Section Spacer */}
          <div className="pb-20 xl:pb-[150px]">
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
                      Our AI, ML and Data Analytics solutions can be quickly
                      deployed, enabling companies or individuals to start
                      benefiting from its capabilities without lengthy setup and
                      development times in fast-paced industries.
                    </p>
                    <button className="button mt-5 rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-[#2962FF] hover:border-[#2962FF] hover:text-white">
                      Ask us more Questions
                    </button>
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
                      <div className="accordion-header flex items-center justify-between font-dmSans text-xl font-bold leading-[1.2] -tracking-[0.5px] text-black lg:text-[24px]">
                        <p>How can AI benefit my business?</p>
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
                          It can significantly enhance business operations by
                          uncovering actionable insights, can optimize
                          workflows, predict trends, and personalize customer
                          experiences and much more.
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
                      <div className="accordion-header flex items-center justify-between font-dmSans text-xl font-bold leading-[1.2] -tracking-[0.5px] text-black lg:text-[24px]">
                        <p>What are the common challenges ?</p>
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
                          Having accurate and sufficient data is crucial for
                          effective AI and ML models, Integration with existing
                          systems and ensuring that stakeholders understand and
                          can act on data insights.
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
                        <p>How to handle data privacy and security ?</p>
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
                          Implementing robust data encryption, access controls,
                          and anonymization techniques to safeguard personal
                          data. Compliance with regulations such as GDPR and
                          CCPA is crucial.
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
        {/*...::: FAQ Section End :::... */}

        {/*...::: Testimonial Section Start :::... */}
        <section className="testimonial-section">
          {/* Section Spacer */}
          <div className="bg-black pb-40 pt-20 xl:pb-[200px] xl:pt-[130px]">
            {/* Section Container */}
            <div className="global-container">
              {/* Section Content Block */}
              <div className="jos mb-10 text-center lg:mb-16 xl:mb-20">
                <div className="mx-auto max-w-[300px] lg:max-w-[600px] xl:max-w-[680px]">
                  <h2 className="text-white">
                    Positive feedback from our users
                  </h2>
                </div>
              </div>
              {/* Section Content Block */}

              {/* Testimonial List */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Testimonial Item */}
                <div
                  className="jos flex flex-col gap-y-8 rounded-[10px] border-[1px] border-colorCodGray p-[30px] text-white"
                  data-jos_animation="fade-left"
                  data-jos_delay="0.1"
                >
                  <div className="block">
                    <img
                      src="/assets/img_placeholder/th-1/rating.svg"
                      alt="rating"
                      width="146"
                      height="25"
                    />
                  </div>
                  <p>
                    “This AI SaaS tool has revolutionized the way we process and
                    analyze data. This is a game-changer for our business.”
                  </p>
                  <div className="flex items-center gap-x-4">
                    <div className="h-[60px] w-[60px] overflow-hidden rounded-full">
                      <img
                        src="/assets/img_placeholder/th-1/testimonial-img-1.jpg"
                        alt="testimonial-img"
                        width="60"
                        height="60"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <span className="block text-lg font-semibold leading-[1.6]">
                        Max Weber
                      </span>
                      <span className="block text-sm font-light leading-[1.4]">
                        HR Manager
                      </span>
                    </div>
                  </div>
                </div>
                {/* Testimonial Item */}
                {/* Testimonial Item */}
                <div
                  className="jos flex flex-col gap-y-8 rounded-[10px] border-[1px] border-colorCodGray p-[30px] text-white"
                  data-jos_animation="fade-left"
                  data-jos_delay="0.2"
                >
                  <div className="block">
                    <img
                      src="/assets/img_placeholder/th-1/rating.svg"
                      alt="rating"
                      width="146"
                      height="25"
                    />
                  </div>
                  <p>
                    It answers immediately, and we ve seen a significant
                    reduction in response time. Our customers love it and so do
                    we!
                  </p>
                  <div className="flex items-center gap-x-4">
                    <div className="h-[60px] w-[60px] overflow-hidden rounded-full">
                      <img
                        src="/assets/img_placeholder/th-1/testimonial-img-2.jpg"
                        alt="testimonial-img"
                        width="60"
                        height="60"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <span className="block text-lg font-semibold leading-[1.6]">
                        Douglas Smith
                      </span>
                      <span className="block text-sm font-light leading-[1.4]">
                        Businessman
                      </span>
                    </div>
                  </div>
                </div>
                {/* Testimonial Item */}
                {/* Testimonial Item */}
                <div
                  className="jos flex flex-col gap-y-8 rounded-[10px] border-[1px] border-colorCodGray p-[30px] text-white"
                  data-jos_animation="fade-left"
                  data-jos_delay="0.3"
                >
                  <div className="block">
                    <img
                      src="/assets/img_placeholder/th-1/rating.svg"
                      alt="rating"
                      width="146"
                      height="25"
                    />
                  </div>
                  <p>
                    It is accurate, fast and supports multiple languages
                    support. It is a must for any international business
                    success.
                  </p>
                  <div className="flex items-center gap-x-4">
                    <div className="h-[60px] w-[60px] overflow-hidden rounded-full">
                      <img
                        src="/assets/img_placeholder/th-1/testimonial-img-3.jpg"
                        alt="testimonial-img"
                        width="60"
                        height="60"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <span className="block text-lg font-semibold leading-[1.6]">
                        Abraham Maslo
                      </span>
                      <span className="block text-sm font-light leading-[1.4]">
                        Founder @ Marketing Company
                      </span>
                    </div>
                  </div>
                </div>
                {/* Testimonial Item */}
                {/* Testimonial Item */}
                <div
                  className="jos flex flex-col gap-y-8 rounded-[10px] border-[1px] border-colorCodGray p-[30px] text-white"
                  data-jos_animation="fade-right"
                  data-jos_delay="0.1"
                >
                  <div className="block">
                    <img
                      src="/assets/img_placeholder/th-1/rating.svg"
                      alt="rating"
                      width="146"
                      height="25"
                    />
                  </div>
                  <p>
                    Security is a top concern for us, and AI SaaS takes it
                    seriously. It s a reassuring layer of protection for our
                    organization.
                  </p>
                  <div className="flex items-center gap-x-4">
                    <div className="h-[60px] w-[60px] overflow-hidden rounded-full">
                      <img
                        src="/assets/img_placeholder/th-1/testimonial-img-4.jpg"
                        alt="testimonial-img"
                        width="60"
                        height="60"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <span className="block text-lg font-semibold leading-[1.6]">
                        Jack Fayol
                      </span>
                      <span className="block text-sm font-light leading-[1.4]">
                        HR Manager
                      </span>
                    </div>
                  </div>
                </div>
                {/* Testimonial Item */}
                {/* Testimonial Item */}
                <div
                  className="jos flex flex-col gap-y-8 rounded-[10px] border-[1px] border-colorCodGray p-[30px] text-white"
                  data-jos_animation="fade-right"
                  data-jos_delay="0.2"
                >
                  <div className="block">
                    <img
                      src="/assets/img_placeholder/th-1/rating.svg"
                      alt="rating"
                      width="146"
                      height="25"
                    />
                  </div>
                  <p>
                    We were concerned about integrating their APIs were well
                    documented, and their support team was super cool.
                  </p>
                  <div className="flex items-center gap-x-4">
                    <div className="h-[60px] w-[60px] overflow-hidden rounded-full">
                      <img
                        src="/assets/img_placeholder/th-1/testimonial-img-5.jpg"
                        alt="testimonial-img"
                        width="60"
                        height="60"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <span className="block text-lg font-semibold leading-[1.6]">
                        Karen Lynn
                      </span>
                      <span className="block text-sm font-light leading-[1.4]">
                        Software Engineer
                      </span>
                    </div>
                  </div>
                </div>
                {/* Testimonial Item */}
                {/* Testimonial Item */}
                <div
                  className="jos flex flex-col gap-y-8 rounded-[10px] border-[1px] border-colorCodGray p-[30px] text-white"
                  data-jos_animation="fade-right"
                  data-jos_delay="0.3"
                >
                  <div className="block">
                    <img
                      src="/assets/img_placeholder/th-1/rating.svg"
                      alt="rating"
                      width="146"
                      height="25"
                    />
                  </div>
                  <p>
                    The return on investment has exceeded our expectations. it s
                    an investment in the future of our business.
                  </p>
                  <div className="flex items-center gap-x-4">
                    <div className="h-[60px] w-[60px] overflow-hidden rounded-full">
                      <img
                        src="/assets/img_placeholder/th-1/testimonial-img-6.jpg"
                        alt="testimonial-img"
                        width="60"
                        height="60"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <span className="block text-lg font-semibold leading-[1.6]">
                        Henry Ochi
                      </span>
                      <span className="block text-sm font-light leading-[1.4]">
                        Bank Manager
                      </span>
                    </div>
                  </div>
                </div>
                {/* Testimonial Item */}
              </div>
              {/* Testimonial List */}
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: Testimonial Section Start :::... */}

        {/* Body Background Shape 1 */}
        <div className="blue-gradient-1 absolute -left-[15px] top-[61%] -z-[1] h-[400px] w-[400px] -rotate-[-9.022deg] rounded-[400px]"></div>

        {/* Body Background Shape 2 */}
        <div className="blue-gradient-2 absolute -left-[100px] top-[64%] -z-[1] h-[360px] w-[360px] -rotate-[-9.022deg] rounded-[360px]"></div>
      </main>
      {/*...::: Footer Start :::... */}
      <Footer_01 />
      {/*...::: Footer End :::... */}
    </div>
  );
}

export default Home;

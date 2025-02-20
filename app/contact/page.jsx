"use client";
import Footer_01 from "@/components/footer/Footer_01";
import Header_01 from "@/components/header/Header_01";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
function Contact() {
  const { register, handleSubmit } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const submitBlog = (data, e) => {
    const updatedData = {
      ...data,
      source: "contact page", // Replace with the actual source value you want to add
    };

    if (true) {
      setIsSubmitting(true);
      axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/sanctum/csrf-cookie`, {
        withCredentials: true,
      });
      axios
        .post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/query`, updatedData, {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          setStatus("success");
          setIsSubmitting(false);
        })
        .catch((error) => {
          console.error(error);
          setStatus("failed");
        })
        .finally(() => {
          console.log("finally");
          setIsSubmitting(false);
        });
    }
  };
  return (
    <>
      <Header_01 />
      <main className="main-wrapper relative overflow-hidden">
        {/*...::: Breadcrumb Section Start :::... */}
        <section id="section-breadcrumb">
          {/* Section Spacer */}
          <div className="breadcrumb-wrapper">
            {/* Section Container */}
            <div className="global-container">
              <div className="breadcrumb-block">
                <h1 className="breadcrumb-title !font-Satoshi font-bold !text-gray-100">
                  Contact Us
                </h1>
                <ul className="breadcrumb-nav !text-gray-50">
                  <li>
                    <Link className="!text-gray-100" href="/">
                      Home
                    </Link>
                  </li>
                  <li className="!text-sky-500">Contact Us</li>
                </ul>
              </div>
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: Breadcrumb Section End :::... */}
        {/*...::: Contact Section Start :::... */}
        <section className="contact-section">
          {/* Section Spacer */}
          <div className="pb-20 xl:pb-[150px]">
            {/* Section Container */}
            <div className="global-container">
              <div className="grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2 xl:grid-cols-[minmax(0,_1fr)_1.1fr]">
                {/* Contact Left Block */}
                <div className="order-2 flex flex-col md:order-1">
                  {/* Section Content Block */}
                  <div className="mb-8 text-left lg:mb-16 xl:mb-6">
                    <div className="mx-auto md:mx-0 md:max-w-none">
                      <h2>Get in touch with us directly</h2>
                    </div>
                  </div>
                  {/* Section Content Block */}
                  <div className="text-lg leading-[1.4] lg:text-[21px]">
                    <p className="mb-7 last:mb-0">
                      We are here to help you! Tell us how we can help &amp; we
                      ll be in touch with an expert within the next 24 hours.
                    </p>
                    <ul className="mt-12 flex flex-col gap-y-8 lg:gap-y-12">
                      <li className="flex flex-col gap-y-4 text-2xl font-bold">
                        Send us an email:
                        <Link
                          href="mailto:yourmail@email.com"
                          className="text-2xl font-normal leading-loose hover:text-blue-500 lg:text-3xl"
                        >
                          info@menlocloud.ai
                        </Link>
                      </li>
                      <li className="flex flex-col gap-y-4 text-2xl font-bold">
                        Give us a call:
                        <Link
                          href="tel:+0123456789"
                          className="text-2xl font-normal leading-loose hover:text-blue-500 lg:text-3xl"
                        >
                          +(012) 345 6789
                        </Link>
                      </li>
                      <li className="flex flex-col gap-y-4 text-2xl font-bold">
                        Follow us:
                        <ul className="mt-auto flex gap-x-[15px]">
                          <li>
                            <Link
                              rel="noopener noreferrer"
                              href="http://www.facebook.com"
                              className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-blue-500"
                            >
                              <Image
                                src="/assets/img_placeholder/th-1/facebook-icon-white.svg"
                                alt="facebook"
                                width={14}
                                height={14}
                                className="opacity-100 group-hover:opacity-0"
                              />
                              <Image
                                src="/assets/img_placeholder/th-1/facebook-icon-black.svg"
                                alt="facebook"
                                width={14}
                                height={14}
                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link
                              rel="noopener noreferrer"
                              href="http://www.twitter.com"
                              className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-blue-500"
                            >
                              <Image
                                src="/assets/img_placeholder/th-1/twitter-icon-white.svg"
                                alt="twitter"
                                width={14}
                                height={14}
                                className="opacity-100 group-hover:opacity-0"
                              />
                              <Image
                                src="/assets/img_placeholder/th-1/twitter-icon-black.svg"
                                alt="twitter"
                                width={14}
                                height={14}
                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link
                              rel="noopener noreferrer"
                              href="http://www.linkedin.com"
                              className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-blue-500"
                            >
                              <Image
                                src="/assets/img_placeholder/th-1/linkedin-icon-white.svg"
                                alt="linkedin"
                                width={14}
                                height={14}
                                className="opacity-100 group-hover:opacity-0"
                              />
                              <Image
                                src="/assets/img_placeholder/th-1/linkedin-icon-black.svg"
                                alt="linkedin"
                                width={14}
                                height={14}
                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link
                              rel="noopener noreferrer"
                              href="http://www.instagram.com"
                              className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-blue-500"
                            >
                              <Image
                                src="/assets/img_placeholder/th-1/instagram-icon-white.svg"
                                alt="instagram"
                                width={14}
                                height={14}
                                className="opacity-100 group-hover:opacity-0"
                              />
                              <Image
                                src="/assets/img_placeholder/th-1/instagram-icon-black.svg"
                                alt="instagram"
                                width={14}
                                height={14}
                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                              />
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                {status === "success" ? (
                  <div className="order-1 w-full flex flex-col justify-center items-center">
                    <p className="text-3xl xl:text-4xl font-Satoshi font-bold text-center">
                      Your query has been submitted.
                    </p>
                    <p className="font-Satoshi font-medium text-center mt-3">
                      Our Team Expert will get in touch with you.
                    </p>
                  </div>
                ) : (
                  <div className="order-1 block rounded-lg bg-white px-[30px] py-[50px] shadow-[0_4px_60px_0_rgba(0,0,0,0.1)] md:order-2">
                    {/* Contact Form */}
                    <form
                      onSubmit={handleSubmit(submitBlog)}
                      className="flex flex-col gap-y-5"
                    >
                      {/* Form Group */}
                      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                        {/* Form Single Input */}
                        <div className="flex flex-col gap-y-[10px]">
                          <label
                            htmlFor="contact-name"
                            className="text-lg font-bold leading-[1.6]"
                          >
                            Enter your name
                          </label>
                          <input
                            type="text"
                            {...register("name")}
                            id="contact-name"
                            placeholder="Adam Smith"
                            className="rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-blue-500"
                            required
                          />
                        </div>
                        {/* Form Single Input */}
                        {/* Form Single Input */}
                        <div className="flex flex-col gap-y-[10px]">
                          <label
                            htmlFor="contact-email"
                            className="text-lg font-bold leading-[1.6]"
                          >
                            Email address
                          </label>
                          <input
                            type="email"
                            id="contact-email"
                            {...register("email")}
                            placeholder="adam@menlocloud.com"
                            className="rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-blue-500"
                            required
                          />
                        </div>
                        {/* Form Single Input */}
                      </div>
                      {/* Form Group */}
                      {/* Form Group */}
                      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                        {/* Form Single Input */}
                        <div className="flex flex-col gap-y-[10px]">
                          <label
                            htmlFor="contact-phone"
                            className="text-lg font-bold leading-[1.6]"
                          >
                            Phone number
                          </label>
                          <input
                            type="number"
                            {...register("phone")}
                            id="contact-phone"
                            placeholder="12345 67890"
                            className="rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-blue-500"
                            required
                          />
                        </div>
                        {/* Form Single Input */}
                        {/* Form Single Input */}
                        <div className="flex flex-col gap-y-[10px]">
                          <label
                            htmlFor="contact-company"
                            className="text-lg font-bold leading-[1.6]"
                          >
                            Company
                          </label>
                          <input
                            type="text"
                            id="contact-company"
                            {...register("company")}
                            placeholder="facebook"
                            className="rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-blue-500"
                            required
                          />
                        </div>
                        {/* Form Single Input */}
                      </div>
                      {/* Form Group */}
                      {/* Form Group */}
                      <div className="grid grid-cols-1 gap-6">
                        {/* Form Single Input */}
                        <div className="flex flex-col gap-y-[10px]">
                          <label
                            htmlFor="contact-message"
                            className="text-lg font-bold leading-[1.6]"
                          >
                            Message
                          </label>
                          <textarea
                            name="contact-message"
                            id="contact-message"
                            {...register("message")}
                            className="min-h-[180px] rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-blue-500"
                            placeholder="Write your message here..."
                            required
                          />
                        </div>
                        {/* Form Single Input */}
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="button mt-5 rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-blue-500 hover:border-blue-500 hover:text-white"
                        >
                          {isSubmitting ? (
                            <div className="flex items-center gap-3">
                              <svg
                                className="w-6 h-6 text-gray-300 animate-spin"
                                viewBox="0 0 64 64"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                              >
                                <path
                                  d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                                  stroke="currentColor"
                                  strokeWidth="5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                                  stroke="currentColor"
                                  strokeWidth="5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="text-gray-900"
                                ></path>
                              </svg>
                              <span>Submitting...</span>
                            </div>
                          ) : (
                            "Submit"
                          )}
                        </button>
                      </div>
                      {/* Form Group */}
                    </form>
                    {/* Contact Form */}
                  </div>
                )}
              </div>
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>

        <section className="map-section mb-10">
          <div className=" text-center global-container w-2/3">
            <p className="text-3xl font-Satoshi font-bold xl:text-4xl xxl:text-6xl text-center">
              Find us on Google Maps
            </p>
          </div>
          <div className="w-full flex justify-center   mt-10">
            <div className="w-[80%] min-h-[300px] xl:min-h-[600px] overflow-hidden rounded-xl border-2 border-blue-500">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41446.0113600952!2d-122.09736922137861!3d37.37188977756141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb0d23f5f9685%3A0x23377a57616b5d8!2sMountain%20View%2C%20CA%2094040%2C%20USA!5e0!3m2!1sen!2sin!4v1727774169479!5m2!1sen!2sin"
                className="w-full h-full"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
        {/*...::: Map Section Start :::... */}
      </main>
      <Footer_01 />
    </>
  );
}

export default Contact;

"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import axios from "axios";
import {
  FaXTwitter,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa6";

const Footer_01 = () => {
  const [isSubmitting, setIsubmitting] = useState(false);
  const [email, setEmail] = useState([]);
  const [status, setStatus] = useState(null);
  const serverURL = `${NEXT_PUBLIC_SERVER_URL}/`;
  const submitEmail = (e) => {
    setIsubmitting(true);
    e.preventDefault();
    if (true) {
      axios.get(`${serverURL}sanctum/csrf-cookie`, {
        withCredentials: true,
      });
      axios
        .post(
          `${serverURL}api/newsletter`,
          { email: email },
          { withCredentials: true }
        )
        .then((res) => {
          setStatus("success");
          setEmail("");
        })
        .catch((res) => setStatus("failed"))
        .finally(() => {
          setIsubmitting(false);
        });
    }
  };

  return (
    <footer className="relative z-[1]  overflow-hidden  bg-colorLinenRuffle ">
      {/* Footer Top */}

      {/* Footer Text Slider */}
      {/* Footer Top */}
      <div className="global-container">
        <div className="h-[1px] w-full bg-[#DBD6CF]" />
        {/* Footer Center */}
        <div className="lg grid grid-cols-1 gap-10 py-[60px] md:grid-cols-[1fr_auto_auto] xl:grid-cols-[1fr_auto_auto_1fr] xl:gap-20 xl:py-[100px]">
          {/* Footer Widget */}
          <div className="flex flex-col gap-y-6">
            <Link href="/" className="flex items-center gap-1">
              <img src={"/assets/img_placeholder/logo-icon.png"} width={40} />
              <p className="text-xl xl:text-2xl text-gray-900 font-bold font-Satoshi">
                Menlo
                <span className="text-sky-500 font-Clash font-[600]">
                  Cloud
                </span>
              </p>
            </Link>
            <p>
              Our mission is to harness the power of AI to solve complex
              business challenges &amp; decision-makers with data-driven
              insights, and enhance user experiences across digital platforms.
            </p>
          </div>
          {/* Footer Widget */}
          {/* Footer Widget */}
          <div className="flex flex-col gap-y-6">
            {/* Footer Title */}
            <h4 className="text-[21px] font-semibold capitalize text-black">
              Primary Pages
            </h4>
            {/* Footer Title */}
            {/* Footer Navbar */}
            <ul className="flex flex-col gap-y-[10px] capitalize">
              <li>
                <Link
                  href="/"
                  className="transition-all duration-300 ease-linear hover:text-colorOrangyRed"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="transition-all duration-300 ease-linear hover:text-colorOrangyRed"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="transition-all duration-300 ease-linear hover:text-colorOrangyRed"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  className="transition-all duration-300 ease-linear hover:text-colorOrangyRed"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Footer Widget */}
          {/* Footer Widget */}
          <div className="flex flex-col gap-y-6">
            {/* Footer Title */}
            <h4 className="text-[21px] font-semibold capitalize text-black">
              Social
            </h4>
            {/* Footer Title */}
            {/* Footer Navbar */}
            <ul className="flex flex-col gap-y-[10px] capitalize">
              <li>
                <button className="flex group items-center gap-2 ">
                  <FaXTwitter className="group-hover:text-blue-500 transition-all duration-200" />{" "}
                  Twitter
                </button>
              </li>
              <li>
                <button className="flex items-center gap-2  group">
                  <FaInstagram className="group-hover:text-blue-500 transition-all duration-200" />{" "}
                  Instagram
                </button>
              </li>
              <li>
                <button className="flex items-center gap-2 group">
                  <FaLinkedin className="group-hover:text-blue-500 transition-all duration-200" />{" "}
                  LinkedIn
                </button>
              </li>
              <li>
                <button className="flex items-center gap-2 group">
                  <FaFacebook className="group-hover:text-blue-500 transition-all duration-200" />{" "}
                  Facebook
                </button>
              </li>
            </ul>
          </div>
          {/* Footer Widget */}
          {/* Footer Widget */}
          <div className="flex flex-col gap-y-6">
            {/* Footer Title */}
            <h4 className="text-[21px] font-semibold capitalize text-black">
              Subscribe to our newsletter
            </h4>
            {/* Footer Title */}
            {/* Footer Subscriber Form */}
            <form onSubmit={(e) => submitEmail(e)} className="">
              <div className="relative h-[50px] max-w-[300px]">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="newsletter-email"
                  placeholder="Enter your email"
                  className="p-y-[18px] h-full w-full rounded-[50px] border-[1px] border-black px-[24px] pr-20 outline-none"
                  required=""
                />
                <button
                  type="submit"
                  disabled={status === "success"}
                  className="absolute right-[5px] top-[50%] disabled:bg-gray-500 disabled:text-gray-800 inline-block h-10 -translate-y-[50%] rounded-[50px] bg-black px-6 transition-all hover:bg-[#2962FF]"
                >
                  {isSubmitting ? (
                    <div role="status">
                      <svg
                        aria-hidden="true"
                        class="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-sky-500"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : (
                    <FaArrowRightLong className="text-white" />
                  )}
                </button>
                {status === "success" && (
                  <p className="text-green-400 font-Satoshi">
                    Thank you for subscribing
                  </p>
                )}
                {status === "failed" && (
                  <p className="text-red-500 font-Satoshi">
                    Something went wrong
                  </p>
                )}
              </div>
            </form>
            {/* Footer Subscriber Form */}
          </div>
          {/* Footer Widget */}
        </div>
        {/* Footer Center */}
        <div className="h-[1px] w-full bg-[#DBD6CF]" />
        {/* Footer Bottom */}
        <div className="py-9 text-center">
          <p>
            Powered by insightvision.marketing © Copyright{" "}
            {new Date().getFullYear()}, All Rights Reserved by{" "}
            <span className="text-xl font-Satoshi font-bold">
              Menlo<span className="text-sky-500 font-Clash">Cloud</span>
            </span>
          </p>
        </div>
        {/* Footer Bottom */}
      </div>
      {/* Footer Background Shape 1  */}
      <div className="blue-gradient-2 hidden lg:block absolute -top-[290px] right-[90px] -z-[1] h-[406px] w-[406px] -rotate-[58deg] rounded-[406px]"></div>
      {/* Footer Background Shape 2  */}
      <div className="blue-gradient-1 hidden lg:block absolute -right-[200px] -top-[205px] -z-[1] h-[451px] w-[451px] -rotate-[58deg] rounded-[451px]"></div>
    </footer>
  );
};

export default Footer_01;

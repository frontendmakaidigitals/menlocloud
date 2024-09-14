import Image from "next/image";
import Link from "next/link";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";

const Footer_01 = () => {
  return (
    <footer className="relative z-[1]  overflow-hidden rounded-tl-[30px] rounded-tr-[30px] bg-colorLinenRuffle lg:rounded-tl-[50px] lg:rounded-tr-[50px]">
      {/* Footer Top */}
      <div className="pt-20 pb-20">
        <VelocityScroll
          text="Intelligent Data Driven Solutions"
          default_velocity={5}
          className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
        />
      </div>
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
                  pricing
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
            <form action="#" method="post" className="">
              <div className="relative h-[50px] max-w-[300px]">
                <input
                  type="email"
                  name="newsletter-email"
                  id="newsletter-email"
                  placeholder="Enter your email"
                  className="p-y-[18px] h-full w-full rounded-[50px] border-[1px] border-black px-[24px] pr-20 outline-none"
                  required=""
                />
                <button
                  type="submit"
                  className="absolute right-[5px] top-[50%] inline-block h-10 -translate-y-[50%] rounded-[50px] bg-black px-6 transition-all hover:bg-[#2962FF]"
                >
                  <Image
                    src="/assets/img_placeholder/th-1/arrow-right-large.svg"
                    height={24}
                    width={24}
                    alt="newsletter"
                  />
                </button>
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
            <span className="text-xl font-bold">
              menlo<span className="text-sky-500 italic">cloud</span>
            </span>
          </p>
        </div>
        {/* Footer Bottom */}
      </div>
      {/* Footer Background Shape 1  */}
      <div className="blue-gradient-2 absolute -top-[290px] right-[90px] -z-[1] h-[406px] w-[406px] -rotate-[58deg] rounded-[406px]"></div>
      {/* Footer Background Shape 2  */}
      <div className="blue-gradient-1 absolute -right-[200px] -top-[205px] -z-[1] h-[451px] w-[451px] -rotate-[58deg] rounded-[451px]"></div>
    </footer>
  );
};

export default Footer_01;

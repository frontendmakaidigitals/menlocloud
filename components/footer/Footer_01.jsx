import Image from "next/image";
import Link from "next/link";

const Footer_01 = () => {
  return (
    <footer className="relative z-[1] -mt-[70px] overflow-hidden rounded-tl-[30px] rounded-tr-[30px] bg-colorLinenRuffle lg:rounded-tl-[50px] lg:rounded-tr-[50px]">
      {/* Footer Top */}
      <div className="py-[60px] xl:pb-[80px] xl:pt-[90px]">
        <div className="overflow-hidden h-28">
          {/* Footer Text Slider */}
          <div className="footer-text-slider flex w-full items-center gap-x-[30px] whitespace-nowrap">
            {/* Footer Slide Item  */}
            <Image
              src="/assets/img_placeholder/th-1/footer-text-slider-icon.svg"
              alt="footer-text-slider-icon"
              width={60}
              height={60}
              className="h-10 w-10 lg:h-[60px] lg:w-[60px]"
            />
            <div className="block font-dmSans text-4xl font-bold  text-black lg:text-6xl xl:text-7xl xxl:text-[80px]">
              Driving Innovation throught intelligent data-driven solutions
            </div>
            {/* Footer Slide Item  */}
            {/* Footer Slide Item  */}
            <Image
              src="/assets/img_placeholder/th-1/footer-text-slider-icon.svg"
              alt="footer-text-slider-icon"
              width={60}
              height={60}
              className="h-10 w-10 lg:h-[60px] lg:w-[60px]"
            />
            <div className="block font-dmSans text-4xl font-bold  text-black lg:text-6xl xl:text-7xl xxl:text-[80px]">
              Driving Innovation throught intelligent data-driven solutions
            </div>
            {/* Footer Slide Item  */}
            {/* Footer Slide Item  */}
            <Image
              src="/assets/img_placeholder/th-1/footer-text-slider-icon.svg"
              alt="footer-text-slider-icon"
              width={60}
              height={60}
              className="h-10 w-10 lg:h-[60px] lg:w-[60px]"
            />
            <div className="block font-dmSans text-4xl font-bold  text-black lg:text-6xl xl:text-7xl xxl:text-[80px]">
              Driving Innovation throught intelligent data-driven solutions
            </div>
            {/* Footer Slide Item  */}
          </div>
        </div>
      </div>
      {/* Footer Text Slider */}
      {/* Footer Top */}
      <div className="global-container">
        <div className="h-[1px] w-full bg-[#DBD6CF]" />
        {/* Footer Center */}
        <div className="lg grid grid-cols-1 gap-10 py-[60px] md:grid-cols-[1fr_auto_auto] xl:grid-cols-[1fr_auto_auto_1fr] xl:gap-20 xl:py-[100px]">
          {/* Footer Widget */}
          <div className="flex flex-col gap-y-6">
            <Link href="/" className="inline-block">
              <p className="text-xl font-bold">
                menlo<span className="text-sky-500 italic">cloud</span>
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
              Utility pages
            </h4>
            {/* Footer Title */}
            {/* Footer Navbar */}
            <ul className="flex flex-col gap-y-[10px] capitalize">
              <li>
                <Link
                  href="/"
                  className="transition-all duration-300 ease-linear hover:text-colorOrangyRed"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="transition-all duration-300 ease-linear hover:text-colorOrangyRed"
                >
                  404 Not found
                </Link>
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

import React from "react";
import { IoMdClose } from "react-icons/io";
const Form = ({ setIsOpen }) => {
  return (
    <div className="fixed top-0 left-0 w-full  h-screen bg-gray-900/60 z-[99999999999999999999]">
      <div className=" flex justify-center h-full items-center w-full  px-4 py-10 ">
        {/* Contact Form */}
        <form
          action="https://formspree.io/f/mlqvzkyx"
          method="post"
          className="flex overflow-auto w-full lg:w-auto relative flex-col gap-y-5 bg-white px-[30px] rounded-lg py-6 shadow-[0_4px_60px_0_rgba(0,0,0,0.1)]"
        >
          <IoMdClose
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 hover:bg-red-500 hover:text-slate-50 text-3xl p-1 rounded-full cursor-pointer"
          />
          <div>
            <p className="text-3xl font-bold font-Satoshi">Contact Us</p>
          </div>
          {/* Form Group */}
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            {/* Form Single Input */}
            <div className="flex flex-col gap-y-[10px]">
              <label
                htmlFor="contact-name"
                className="text-lg font-Satoshi font-medium leading-[1.6]"
              >
                Enter your name
              </label>
              <input
                type="text"
                name="contact-name"
                id="contact-name"
                placeholder="Adam Smith"
                className="rounded-[10px] border border-gray-300 bg-white px-4 py-2 font-medium text-black outline-none transition-all placeholder:text-slate-500 focus:border-blue-500"
                required=""
              />
            </div>
            {/* Form Single Input */}
            {/* Form Single Input */}
            <div className="flex flex-col gap-y-[10px]">
              <label
                htmlFor="contact-email"
                className="text-lg font-Satoshi font-medium leading-[1.6]"
              >
                Email address
              </label>
              <input
                type="email"
                name="contact-email"
                id="contact-email"
                placeholder="adam@menlocloud.ai"
                className="rounded-[10px] border border-gray-300 bg-white px-4 py-2 font-medium text-black outline-none transition-all placeholder:text-slate-500 focus:border-blue-500"
                required=""
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
                className="text-lg font-Satoshi font-medium leading-[1.6]"
              >
                Phone number
              </label>
              <input
                type="tel"
                name="contact-phone"
                id="contact-phone"
                placeholder="12345 67890"
                className="rounded-[10px] border border-gray-300 bg-white px-4 py-2 font-medium text-black outline-none transition-all placeholder:text-slate-500 focus:border-blue-500"
                required=""
              />
            </div>
            {/* Form Single Input */}
            {/* Form Single Input */}
            <div className="flex flex-col gap-y-[10px]">
              <label
                htmlFor="contact-company"
                className="text-lg font-Satoshi font-medium leading-[1.6]"
              >
                Company
              </label>
              <input
                type="text"
                name="contact-company"
                id="contact-company"
                placeholder="facebook"
                className="rounded-[10px] border border-gray-300 bg-white px-4 py-2 font-medium text-black outline-none transition-all placeholder:text-slate-500 focus:border-blue-500"
                required=""
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
                className="text-lg font-Satoshi font-medium leading-[1.6]"
              >
                Message
              </label>
              <textarea
                name="contact-message"
                id="contact-message"
                className="h-24 xxl:h-[180px] resize-none rounded-[10px] border border-gray-300 bg-white px-4 py-2 font-medium text-black outline-none transition-all placeholder:text-slate-500 focus:border-blue-500"
                placeholder="Write your message here..."
                required=""
              />
            </div>
            {/* Form Single Input */}
          </div>
          <div className="w-full flex justify-start mt-7">
            <button className="text-gray-50 overflow-hidden group rounded-lg relative font-Satoshi font-medium py-2 text-md px-5 bg-black">
              <p className="relative z-10">Lets Connect</p>
              <div className="bg-sky-500 w-1 h-1 group-hover:scale-[50] absolute -bottom-1 left-1/2 -translate-1/2 rounded-full transition-all duration-300" />
            </button>
          </div>
          {/* Form Group */}
        </form>
        {/* Contact Form */}
      </div>
    </div>
  );
};

export default Form;

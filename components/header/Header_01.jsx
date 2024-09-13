"use client";
import { useState, useEffect } from "react";
import Navbar from "../navbar/Navbar";
import LogoDark from "../logo/LogoDark";
import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { FiMenu } from "react-icons/fi";
const Header_01 = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 10) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`w-full z-[999] transition-all duration-300 fixed ${
        !isVisible
          ? "bg-gray-700 py-2 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 "
          : "py-3"
      }  `}
      
    >
      <div className="global-container">
        <div className="flex items-center justify-between gap-x-8">
          {/* Header Logo */}
          <LogoDark />
          {/* Header Logo */}
          {/* Header Navigation */}
          <Navbar mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
          {/* Header Navigation */}
          {/* Header User Event */}
          <div className="flex items-center gap-6">
            <div
              className={cn(
                "group rounded-full hidden lg:block border relative overflow-hidden border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200  "
              )}
            >
              <div className="bg-blue-500  size-1 group-hover:scale-[50] transition-all duration-500 rounded-full absolute top-[110%] left-1/2 -translate-x-1/2  -translate-y-1/2"></div>
              <AnimatedShinyText className="relative z-10 inline-flex font-semibold group-hover:text-gray-900  items-center justify-center px-6 py-2  ">
                <span>✨ Lets connect</span>
              </AnimatedShinyText>
            </div>
            {/* Responsive Off-canvas Menu Button */}
            <div className="block lg:hidden">
              <button
                onClick={() => setMobileMenu(true)}
                className=" text-gray-100 text-4xl is-black"
              >
                <FiMenu />
              </button>
            </div>
          </div>
          {/* Header User Event */}
        </div>
      </div>
    </header>
  );
};

export default Header_01;

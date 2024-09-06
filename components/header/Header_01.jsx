'use client';
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../navbar/Navbar';
import LogoDark from '../logo/LogoDark';
import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
const Header_01 = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header
      className="site-header site-header--absolute is--white py-3"
      id="sticky-menu"
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
                "group rounded-full border border-black/5 font- bg-neutral-900 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
              )}
            >
              <AnimatedShinyText className="inline-flex text-gray-300 items-center justify-center px-6 py-2 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span>✨ Lets connect</span>
                
              </AnimatedShinyText>
            </div>
            {/* Responsive Off-canvas Menu Button */}
            <div className="block lg:hidden">
              <button
                onClick={() => setMobileMenu(true)}
                className="mobile-menu-trigger is-black"
              >
                <span />
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

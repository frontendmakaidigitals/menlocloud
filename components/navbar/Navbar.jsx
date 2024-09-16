"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar = ({ mobileMenu, setMobileMenu, color }) => {
  const [mobileSubMenu, setMobileSubMenu] = useState("");
  const [mobileSubMenuSub, setMobileSubMenuSub] = useState("");
  const [menuTitle, setMenuTitle] = useState("");
  console.log(mobileMenu);

  const handleMenu = () => {
    setMobileMenu(false);
    setMobileSubMenu("");
    setMobileSubMenuSub("");
  };

  const handleSubMenu = (e, id) => {
    e.preventDefault();
    setMobileSubMenu(id);

    if (e.target.tagName === "A") {
      const content = e.target.firstChild.textContent;
      setMenuTitle(content);
    } else {
      const content = e.target.parentElement.textContent;
      setMenuTitle(content);
    }
  };

  const handleSubMenuSub = (e, id) => {
    e.preventDefault();
    setMobileSubMenuSub(id);
    if (e.target.tagName === "A") {
      const content = e.target.firstChild.textContent;
      setMenuTitle(content);
    } else {
      const content = e.target.parentElement.textContent;
      setMenuTitle(content);
    }
  };

  const handleGoBack = () => {
    if (mobileSubMenuSub) {
      setMobileSubMenuSub("");
      return;
    }
    if (mobileSubMenu) {
      setMobileSubMenu("");
      return;
    }
  };

  return (
    <div className="menu-block-wrapper">
      <div
        onClick={handleMenu}
        className={`menu-overlay ${mobileMenu && "active"}`}
      />
      <nav
        className={`menu-block ${mobileMenu && "active"}`}
        id="append-menu-header"
      >
        <div className={`mobile-menu-head ${mobileSubMenu && "active"}`}>
          <div className="px-3 font-Clash">
            <p className="text-lg xl:text-xl text-gray-800 font-bold font-Satoshi">
              Menlo
              <span className="text-sky-500 font-Clash font-[600]">cloud</span>
            </p>
          </div>
          <div onClick={handleMenu} className="mobile-menu-close">
            ×
          </div>
        </div>
        <ul className={` text-gray-900 site-menu-main`}>
          <div className="hidden lg:block">
            <NavigationMenu className={``}>
              <NavigationMenuList className={``}>
                <NavigationMenuItem className="">
                  <NavigationMenuTrigger className={``}>
                    <Link href={`/services`}>Services</Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="">
                    <div className="grid gap-10 px-6   py-10 md:w-[400px] lg:w-[1100px] lg:grid-cols-2">
                      <div className="px-5 py-5   hover:bg-gray-200 text-gray-800 cursor-pointer rounded-xl">
                        <p className="text-md font-bold">Data analytics</p>
                        <p className="text-sm font-medium mt-1 text-gray-600 ">
                          Leveraging today’s data for a more promising future
                        </p>
                      </div>
                      <div className="px-5 py-5  hover:bg-gray-200  text-gray-800  cursor-pointer rounded-xl">
                        <p className="text-md font-bold">Generative AI</p>
                        <p className="text-sm font-medium mt-1 text-gray-600">
                          Shaping the future through advanced AI
                        </p>
                      </div>
                      <div className="px-5 py-5  hover:bg-gray-200  text-gray-800  cursor-pointer rounded-xl">
                        <p className="text-md font-bold">
                          Cloud Transformation
                        </p>
                        <p className="text-sm font-medium mt-1 text-gray-600">
                          Bridging conventional and generative AI to deliver
                          effective, real-world applications.
                        </p>
                      </div>
                      <div className="px-5 py-5  hover:bg-gray-200  text-gray-800  cursor-pointer rounded-xl">
                        <p className="text-md font-bold">
                          Mobil App Development
                        </p>
                        <p className="text-sm font-medium mt-1 text-gray-600">
                          Crafting robust and scalable systems through expert
                          software engineering.
                        </p>
                      </div>
                      <div className="px-5 py-5  hover:bg-gray-200  text-gray-800  cursor-pointer rounded-xl">
                        <p className="text-md font-bold">Web Development</p>
                        <p className="text-sm font-medium mt-1 text-gray-600">
                          Transforming business operations with next-generation
                          cloud modernization
                        </p>
                      </div>
                      <div className="px-5 py-5  hover:bg-gray-200  text-gray-800  cursor-pointer rounded-xl">
                        <p className="text-md font-bold">Digital marketing</p>
                        <p className="text-sm font-medium mt-1 text-gray-600">
                          Transforming concepts into functional systems through
                          precise implementation
                        </p>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`bg-transparent`}>
                    Industries
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-10  px-6 py-10 md:w-[400px] lg:w-[1100px] lg:grid-cols-3">
                      <div className="px-5 py-5  hover:bg-gray-200  text-gray-800  cursor-pointer rounded-xl">
                        <p className="text-md font-bold">
                          Life Science & Health Care
                        </p>
                        <p className="text-sm font-medium mt-1 text-gray-600">
                          Revolutionizing life sciences and Healthcare through
                          AI-powered research and diagnostics
                        </p>
                      </div>
                      <div className="px-5 py-5  hover:bg-gray-200  text-gray-800  cursor-pointer rounded-xl">
                        <p className="text-md font-bold">Finance</p>
                        <p className="text-sm font-medium mt-1 text-gray-600">
                          Optimizing financial strategies and customer
                          experiences with AI
                        </p>
                      </div>
                      <div className="px-5 py-5  hover:bg-gray-200  text-gray-800  cursor-pointer rounded-xl">
                        <p className="text-md font-bold">Technology</p>
                        <p className="text-sm font-medium mt-1 text-gray-600">
                          Leading the way with innovative technology and digital
                          transformation
                        </p>
                      </div>
                      <div className="px-5 py-5  hover:bg-gray-200  text-gray-800  cursor-pointer rounded-xl">
                        <p className="text-md font-bold">
                          Media and Communications
                        </p>
                        <p className="text-sm font-medium mt-1 text-gray-600">
                          Leveraging AI and ML to tailor communications and
                          drive impactful storytelling
                        </p>
                      </div>
                      <div className="px-5 py-5  hover:bg-gray-200  text-gray-800  cursor-pointer rounded-xl">
                        <p className="text-md font-bold">
                          Travel Transport and Logistics
                        </p>
                        <p className="text-sm font-medium mt-1 text-gray-600">
                          Deliver tangible business results by enhancing
                          profitability and customer experience in the TTL
                          industry
                        </p>
                      </div>
                      <div className="px-5 py-5  hover:bg-gray-200  text-gray-800  cursor-pointer rounded-xl">
                        <p className="text-md font-bold">
                          Educations and Learning
                        </p>
                        <p className="text-sm font-medium mt-1 text-gray-600">
                          Speed up modernization in the EdTech industry by
                          leveraging cloud-based infrastructure and advanced
                          AI/ML solutions to achieve excellence.
                        </p>
                      </div>
                      <div className="px-5 py-5  hover:bg-gray-200  text-gray-800  cursor-pointer rounded-xl">
                        <p className="text-md font-bold">
                          Retails and E-commerce
                        </p>
                        <p className="text-sm font-medium mt-1 text-gray-600">
                          A robust selection of wide solutions equips retailers
                          with a competitive advantage, accelerates growth, and
                          promotes innovation.
                        </p>
                      </div>
                      <div className="px-5 py-5  hover:bg-gray-200  text-gray-800  cursor-pointer rounded-xl">
                        <p className="text-md font-bold">
                          Manufacturing & Distribution
                        </p>
                        <p className="text-sm font-medium mt-1 text-gray-600">
                          Driving growth and efficiency in manufacturing and
                          distribution through smart technology and automation
                        </p>
                      </div>
                      <div className="px-5 py-5  hover:bg-gray-200  text-gray-800  cursor-pointer rounded-xl">
                        <p className="text-md font-bold">Resource and Wealth</p>
                        <p className="text-sm font-medium mt-1 text-gray-600">
                          Transforming resource and wealth strategies to unlock
                          new opportunities and drive financial success
                        </p>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} bg-transparent`}
                    >
                      Insights
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} bg-transparent`}
                    >
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} bg-transparent`}
                    >
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="block lg:hidden px-3">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className={`tracking-tight`}>
                  Services
                </AccordionTrigger>
                <AccordionContent>
                  <div className="h-[400px] overflow-scroll">
                    <div className="px-5 py-5  hover:bg-gray-200  text-gray-800  cursor-pointer rounded-xl">
                      <p className="text-md font-bold">Data analytics</p>
                      <p className="text-sm font-medium mt-1 text-gray-600">
                        Leveraging today’s data for a more promising future
                      </p>
                    </div>
                    <div className="px-5 py-5  hover:bg-gray-200  text-gray-800  cursor-pointer rounded-xl">
                      <p className="text-md font-bold">Generative AI</p>
                      <p className="text-sm font-medium mt-1 text-gray-600">
                        Shaping the future through advanced AI
                      </p>
                    </div>
                    <div className="px-5 py-5  hover:bg-gray-200  text-gray-800  cursor-pointer rounded-xl">
                      <p className="text-md font-bold">Cloud Transformation</p>
                      <p className="text-sm font-medium mt-1 text-gray-600">
                        Bridging conventional and generative AI to deliver
                        effective, real-world applications.
                      </p>
                    </div>
                    <div className="px-5 py-5  hover:bg-gray-200  text-gray-800  cursor-pointer rounded-xl">
                      <p className="text-md font-bold">
                        Mobile App Development
                      </p>
                      <p className="text-sm font-medium mt-1 text-gray-600">
                        Crafting robust and scalable systems through expert
                        software engineering.
                      </p>
                    </div>
                    <div className="px-5 py-5  hover:bg-gray-200  text-gray-800  cursor-pointer rounded-xl">
                      <p className="text-md font-bold">Web Development</p>
                      <p className="text-sm font-medium mt-1 text-gray-600">
                        Transforming business operations with next-generation
                        cloud modernization
                      </p>
                    </div>
                    <div className="px-5 py-5  hover:bg-gray-200  text-gray-800  cursor-pointer rounded-xl">
                      <p className="text-md font-bold">Digital marketing</p>
                      <p className="text-sm font-medium mt-1 text-gray-600">
                        Transforming concepts into functional systems through
                        precise implementation
                      </p>
                    </div>
                 
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className={`tracking-tight`}>
                  Industries
                </AccordionTrigger>
                <AccordionContent>
                  <div className="h-[400px] overflow-scroll">
                    <div className="px-5 py-5  hover:bg-gray-200  text-gray-800  cursor-pointer rounded-xl">
                      <p className="text-md font-bold">
                        Life Science & Health Care
                      </p>
                      <p className="text-sm font-medium mt-1 text-gray-600">
                        Revolutionizing life sciences and Healthcare through
                        AI-powered research and diagnostics
                      </p>
                    </div>
                    <div className="px-5 py-5  hover:bg-gray-200  text-gray-800  cursor-pointer rounded-xl">
                      <p className="text-md font-bold">Finance</p>
                      <p className="text-sm font-medium mt-1 text-gray-600">
                        Optimizing financial strategies and customer experiences
                        with AI
                      </p>
                    </div>
                    <div className="px-5 py-5  hover:bg-gray-200  text-gray-800  cursor-pointer rounded-xl">
                      <p className="text-md font-bold">Technology</p>
                      <p className="text-sm font-medium mt-1 text-gray-600">
                        Leading the way with innovative technology and digital
                        transformation
                      </p>
                    </div>
                    <div className="px-5 py-5  hover:bg-gray-200  text-gray-800  cursor-pointer rounded-xl">
                      <p className="text-md font-bold">
                        Media and Communications
                      </p>
                      <p className="text-sm font-medium mt-1 text-gray-600">
                        Leveraging AI and ML to tailor communications and drive
                        impactful storytelling
                      </p>
                    </div>
                    <div className="px-5 py-5  hover:bg-gray-200  text-gray-800  cursor-pointer rounded-xl">
                      <p className="text-md font-bold">
                        Travel Transport and Logistics
                      </p>
                      <p className="text-sm font-medium mt-1 text-gray-600">
                        Deliver tangible business results by enhancing
                        profitability and customer experience in the TTL
                        industry
                      </p>
                    </div>
                    <div className="px-5 py-5  hover:bg-gray-200  text-gray-800  cursor-pointer rounded-xl">
                      <p className="text-md font-bold">
                        Educations and Learning
                      </p>
                      <p className="text-sm font-medium mt-1 text-gray-600">
                        Speed up modernization in the EdTech industry by
                        leveraging cloud-based infrastructure and advanced AI/ML
                        solutions to achieve excellence.
                      </p>
                    </div>
                    <div className="px-5 py-5  hover:bg-gray-200  text-gray-800  cursor-pointer rounded-xl">
                      <p className="text-md font-bold">
                        Retails and E-commerce
                      </p>
                      <p className="text-sm font-medium mt-1 text-gray-600">
                        A robust selection of wide solutions equips retailers
                        with a competitive advantage, accelerates growth, and
                        promotes innovation.
                      </p>
                    </div>
                    <div className="px-5 py-5  hover:bg-gray-200  text-gray-800  cursor-pointer rounded-xl">
                      <p className="text-md font-bold">
                        Manufacturing & Distribution
                      </p>
                      <p className="text-sm font-medium mt-1 text-gray-600">
                        Driving growth and efficiency in manufacturing and
                        distribution through smart technology and automation
                      </p>
                    </div>
                    <div className="px-5 py-5  hover:bg-gray-200  text-gray-800  cursor-pointer rounded-xl">
                      <p className="text-md font-bold">Resource and Wealth</p>
                      <p className="text-sm font-medium mt-1 text-gray-600">
                        Transforming resource and wealth strategies to unlock
                        new opportunities and drive financial success
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div>
              <p className="text-sm font-semibold py-4 border-b ">Insights</p>
            </div>
            <div>
              <p className="text-sm font-semibold py-4 border-b ">About us</p>
            </div>
            <div>
              <p className="text-sm font-semibold py-4 border-b ">Contact</p>
            </div>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

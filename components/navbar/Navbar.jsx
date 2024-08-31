"use client";
import { useState, forwardRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

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
  const components = [
    {
      title: "Alert Dialog",
      href: "/docs/primitives/alert-dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Hover Card",
      href: "/docs/primitives/hover-card",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Progress",
      href: "/docs/primitives/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Scroll-area",
      href: "/docs/primitives/scroll-area",
      description: "Visually or semantically separates content.",
    },
    {
      title: "Tabs",
      href: "/docs/primitives/tabs",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Tooltip",
      href: "/docs/primitives/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
  ];
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
          <div onClick={handleGoBack} className="go-back">
            <Image
              className="dropdown-icon"
              src="/assets/img_placeholder/icon-black-long-arrow-right.svg"
              alt="cheveron-right"
              width={16}
              height={16}
            />
          </div>
          <div className="current-menu-title">{menuTitle}</div>
          <div onClick={handleMenu} className="mobile-menu-close">
            ×
          </div>
        </div>
        <ul className={`site-menu-main ${color}`}>
          {/* Global navbar */}
          <NavigationMenu>
            <NavigationMenuList >
              <NavigationMenuItem>
                <NavigationMenuTrigger className={`bg-transparent`}>
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className="" >
                  <div className="grid gap-10 px-6 py-10 md:w-[400px] lg:w-[900px] lg:grid-cols-3">
                    <div className="p-3 hover:bg-slate-100 rounded-xl">
                      <p className="text-md font-bold">Data & Analytics</p>
                      <p className="text-sm font-medium">
                        Leveraging today’s data for a more promising future
                      </p>
                    </div>
                  <div className="p-3 hover:bg-slate-100 rounded-xl">
                      <p className="text-md font-bold">
                        Artificial Intelligence{" "}
                      </p>
                      <p className="text-sm font-medium">
                        Shaping the future through advanced AI
                      </p>
                    </div>
                  <div className="p-3 hover:bg-slate-100 rounded-xl">
                      <p className="text-md font-bold">
                        Applied AI : Conventional and Generative AI
                      </p>
                      <p className="text-sm font-medium">
                        Bridging conventional and generative AI to deliver
                        effective, real-world applications.
                      </p>
                    </div>
                  <div className="p-3 hover:bg-slate-100 rounded-xl">
                      <p className="text-md font-bold">Software engineering</p>
                      <p className="text-sm font-medium">
                        Crafting robust and scalable systems through expert
                        software engineering.
                      </p>
                    </div>
                  <div className="p-3 hover:bg-slate-100 rounded-xl">
                      <p className="text-md font-bold">Cloud modernisation</p>
                      <p className="text-sm font-medium">
                        Transforming business operations with next-generation
                        cloud modernization
                      </p>
                    </div>
                  <div className="p-3 hover:bg-slate-100 rounded-xl">
                      <p className="text-md font-bold">
                        Systems Implementation
                      </p>
                      <p className="text-sm font-medium">
                        Transforming concepts into functional systems through
                        precise implementation
                      </p>
                    </div>
                  <div className="p-3 hover:bg-slate-100 rounded-xl">
                      <p className="text-md font-bold">Strategy</p>
                      <p className="text-sm font-medium">
                        Guiding growth and innovation with a clear strategic
                        vision
                      </p>
                    </div>
                  <div className="p-3 hover:bg-slate-100 rounded-xl">
                      <p className="text-md font-bold">Privacy & Security</p>
                      <p className="text-sm font-medium">
                        Safeguarding information with cutting-edge privacy and
                        security practices
                      </p>
                    </div>
                  <div className="p-3 hover:bg-slate-100 rounded-xl">
                      <p className="text-md font-bold">
                        Organizational Change{" "}
                      </p>
                      <p className="text-sm font-medium">
                        Enhancing company approach with top level cultural &
                        hierarchy transformation
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
                  <div className="grid gap-10 px-6 py-10 md:w-[400px] lg:w-[900px] lg:grid-cols-3">
                  <div className="p-3 hover:bg-slate-100 rounded-xl">
                      <p className="text-md font-bold">
                        Life Science & Health Care
                      </p>
                      <p className="text-sm font-medium">
                        Revolutionizing life sciences and Healthcare through
                        AI-powered research and diagnostics
                      </p>
                    </div>
                  <div className="p-3 hover:bg-slate-100 rounded-xl">
                      <p className="text-md font-bold">Finance</p>
                      <p className="text-sm font-medium">
                        Optimizing financial strategies and customer experiences
                        with AI
                      </p>
                    </div>
                  <div className="p-3 hover:bg-slate-100 rounded-xl">
                      <p className="text-md font-bold">Technology</p>
                      <p className="text-sm font-medium">
                        Leading the way with innovative technology and digital
                        transformation
                      </p>
                    </div>
                  <div className="p-3 hover:bg-slate-100 rounded-xl">
                      <p className="text-md font-bold">
                        Media and Communications
                      </p>
                      <p className="text-sm font-medium">
                        Leveraging AI and ML to tailor communications and drive
                        impactful storytelling
                      </p>
                    </div>
                  <div className="p-3 hover:bg-slate-100 rounded-xl">
                      <p className="text-md font-bold">
                        Travel Transport and Logistics
                      </p>
                      <p className="text-sm font-medium">
                        Deliver tangible business results by enhancing
                        profitability and customer experience in the TTL
                        industry
                      </p>
                    </div>
                  <div className="p-3 hover:bg-slate-100 rounded-xl">
                      <p className="text-md font-bold">
                        Educations and Learning
                      </p>
                      <p className="text-sm font-medium">
                        Speed up modernization in the EdTech industry by
                        leveraging cloud-based infrastructure and advanced AI/ML
                        solutions to achieve excellence.
                      </p>
                    </div>
                  <div className="p-3 hover:bg-slate-100 rounded-xl">
                      <p className="text-md font-bold">
                        Retails and E-commerce
                      </p>
                      <p className="text-sm font-medium">
                        A robust selection of wide solutions equips retailers
                        with a competitive advantage, accelerates growth, and
                        promotes innovation.
                      </p>
                    </div>
                  <div className="p-3 hover:bg-slate-100 rounded-xl">
                      <p className="text-md font-bold">
                        Manufacturing & Distribution
                      </p>
                      <p className="text-sm font-medium">
                        Driving growth and efficiency in manufacturing and
                        distribution through smart technology and automation
                      </p>
                    </div>
                  <div className="p-3 hover:bg-slate-100 rounded-xl">
                      <p className="text-md font-bold">Resource and Wealth</p>
                      <p className="text-sm font-medium">
                        Transforming resource and wealth strategies to unlock
                        new opportunities and drive financial success
                      </p>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} bg-transparent`}
                  >
                    Insights  
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} bg-transparent`}
                  >
                    About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} bg-transparent`}
                  >
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

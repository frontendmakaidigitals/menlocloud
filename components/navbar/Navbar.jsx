"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  const serviceMenus = [
    {
      name: "Talent Hunt",
      subTitle: "  Leveraging today’s data for a more promising future",
      Link: null,
    },
    {
      name: "Staff Augmentation",
      subTitle: "  Leveraging today’s data for a more promising future",
      Link: "/staffAugumentation",
    },
    {
      name: "Data Analytics",
      subTitle: "  Leveraging today’s data for a more promising future",
      Link: "/data-Analytics",
    },
    {
      name: "Generative AI",
      subTitle: "  Shaping the future through advanced AI",
      Link: "/generative-ai",
    },
    {
      name: " Cloud Transformation",
      subTitle: "  Leveraging today’s data for a more promising future",
      Link: "/cloud-transformation",
    },
    {
      name: " Mobile App Development",
      subTitle:
        "  Bridging conventional and generative AI to deliver effective, real-world applications",
      Link: "/mobile-Development",
    },
    {
      name: "Web Development",
      subTitle:
        " Transforming business operations with next-generation cloud modernization",
      Link: "/web-developer",
    },
    {
      name: " Digital marketing",
      subTitle:
        " Transforming concepts into functional systems through precise implementation",
      Link: "/digital-marketing",
    },
  ];
  const industriesMenus = [
    {
      name: " Life Science & Health Care",
      subTitle:
        " Revolutionizing life sciences and Healthcare through AI-powered research and diagnostics",
      Link: "/data-Analytics",
    },
    {
      name: "Finance",
      subTitle:
        " Optimizing financial strategies and customer experiences with AI",
      Link: "/generative-ai",
    },
    {
      name: "Technology",
      subTitle:
        " Leading the way with innovative technology and digital transformation",
      Link: "/cloud-transformation",
    },
    {
      name: " Media and Communications",
      subTitle:
        "  Leveraging AI and ML to tailor communications and drive impactful storytelling",
      Link: "/mobile-Development",
    },
    {
      name: " Travel Transport and Logistics",
      subTitle:
        "  Deliver tangible business results by enhancing profitability and customer experience in the TTL industry ",
      Link: "/web-developer",
    },
    {
      name: "Educations and Learning",
      subTitle:
        "Speed up modernization in the EdTech industry by leveraging cloud-based infrastructure and advanced AI/ML solutions to achieve excellence.",
      Link: "/digital-marketing",
    },
    {
      name: "Retails and E-commerce",
      subTitle:
        " A robust selection of wide solutions equips retailers with a competitive advantage, accelerates growth, and promotes innovation. ",
      Link: null,
    },
    {
      name: "Manufacturing & Distribution",
      subTitle:
        "  Driving growth and efficiency in manufacturing and distribution through smart technology and automation",
      Link: "/staffAugumentation",
    },
    {
      name: "Resource and Wealth",
      subTitle:
        " Transforming resource and wealth strategies to unlock new opportunities and drive financial success",
      Link: "/staffAugumentation",
    },
  ];
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
                  <NavigationMenuTrigger className={`xl:text-md xxl:text-lg`}>
                    <Link href={`/services`}>Services</Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="">
                    <div className="grid xl:gap-6 xxl:gap-8 px-6 xl:py-6 xxl:py-10 md:w-[400px] lg:w-[1100px] lg:grid-cols-3">
                      {serviceMenus.map((menu, index) => (
                        <div
                          key={index}
                          className="xl:p-3  xxl:p-5 hover:bg-gray-200 text-gray-800 cursor-pointer rounded-xl"
                        >
                          <Link href={menu.Link ? menu.Link : "/"}>
                            {" "}
                            <div>
                              <p className="text-md font-bold">{menu.name}</p>
                              <p className="text-sm font-medium mt-1 text-gray-600 ">
                                {menu.subTitle}
                              </p>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`bg-transparent xl:text-md xxl:text-lg`}
                  >
                    Industries
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid xl:gap-6 xxl:gap-10 px-6 xl:py-6 xxl py-10 md:w-[400px] lg:w-[1100px] lg:grid-cols-3">
                      {industriesMenus.map((menu, index) => (
                        <div
                          key={index}
                          className="xl:p-3  xxl:p-5   hover:bg-gray-200  text-gray-800  cursor-pointer rounded-xl"
                        >
                          <Link href={`/industries/${index}/${menu.name}`}>
                            <div>
                              <p className="text-md font-bold">{menu.name}</p>
                              <p className="text-sm font-medium mt-1 text-gray-600">
                                {menu.subTitle}
                              </p>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/insights" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} ${pathname == "/insights" ? "!bg-sky-100 text-black" : "bg-trasparent"}  xl:text-md xxl:text-lg`}
                    >
                      Insights
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} ${pathname == "/about" ? "!bg-sky-100 text-black" : "bg-trasparent"}  xl:text-md xxl:text-lg`}
                    >
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} ${pathname == "/contact" ? "!bg-sky-100 text-black" : "bg-trasparent"} xl:text-md xxl:text-lg`}
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
                  <Link href={"/services"}>Services</Link>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="h-[400px] overflow-scroll">
                    {serviceMenus.map((menu, index) => (
                      <Link
                        key={index}
                        href={menu.Link ? menu.Link : "/"}
                        className="p-5 xl:p-3 xxl:p-5 text-gray-800  cursor-pointer rounded-xl"
                      >
                        <div>
                          <p className="text-md font-bold">{menu.name}</p>
                          <p className="text-sm font-medium mt-1 text-gray-600">
                            {menu.subTitle}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className={`tracking-tight`}>
                  Industries
                </AccordionTrigger>
                <AccordionContent>
                  <div className="h-[400px] overflow-scroll">
                    {industriesMenus.map((menu, index) => (
                      <Link
                        key={index}
                        href={`/industries/${menu.name}`}
                        className="p-5 xl:p-3  xxl:p-5    text-gray-800  cursor-pointer rounded-xl"
                      >
                        <div>
                          <p className="text-md font-bold">{menu.name}</p>
                          <p className="text-sm font-medium mt-1 text-gray-600">
                            {menu.subTitle}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div>
              <Link href={`/insights`}>
                <p className="text-sm font-semibold py-4 border-b ">Insights</p>
              </Link>
            </div>
            <div>
              <Link href={`/about`}>
                <p className="text-sm font-semibold py-4 border-b ">About</p>
              </Link>
            </div>
            <div>
              <Link href={"/contact"}>
                <p className="text-sm font-semibold py-4 border-b ">Contact</p>
              </Link>
            </div>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { SiBlogger } from "react-icons/si";
import { MdOutlineDashboard } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { IoIosExit } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import { FaBloggerB } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import LogoDark from "@/components/logo/LogoDark";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=telma@300,400,500&f[]=clash-grotesk@200,300,400,500,600,700&f[]=satoshi@300,400,500,700,900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          type="image/x-icon"
          href="/assets/img_placeholder/logo-icon.png"
        ></link>
      </head>
      <body>
        <div>
          <Sidebar />
        </div>
        {children}
      </body>
    </html>
  );
}

const Sidebar = () => {
  const pathname = usePathname();
  const path = pathname.split("/")[2];
  console.log(path);
  const menus = [
    {
      name: "Dashboard",
      icon: <MdSpaceDashboard />,
      link: "/admin/dashboard",
    },
    {
      name: "Blogs",
      icon: <FaBloggerB />,
      link: "/admin/blogs",
    },
    {
      name: "Profile",
      icon: <FaUser />,
      link: "/admin/blogs",
    },
  ];
  return (
    <div className="h-screen fixed z-[999] top-0 py-5 left-0 w-[280px] bg-black overflow-hidden ">
      <div className="px-5 flex flex-col justify-center items-center">
        <Link
          href="/"
          className="flex xl:text-lg xxl:text-xl items-center gap-1"
        >
          <img src={"/assets/img_placeholder/logo-icon.png"} width={40} />
          <p className="  text-gray-200 font-bold font-Satoshi">
            Menlo
            <span className="text-sky-500 font-Clash font-[600]">Cloud</span>
          </p>
        </Link>
        <div className="w-full flex flex-col justify-center items-center mt-14">
          <div className="size-12 flex justify-center items-center bg-gray-500 rounded-full">
            <FaUserCircle className="text-4xl" />
          </div>
          <p className="font-Satoshi font-[500] text-lg text-gray-100">
            Nouman Ali
          </p>
          <p className="font-Satoshi text-gray-300 text-sm">
            Backend Developer
          </p>
        </div>
      </div>
      <div className="mt-10">
        {menus.map((menu, index) => (
          <Link
            href={menu.link}
            key={index}
            className={`flex px-10 hover:bg-blue-200 hover:text-gray-950 items-center font-Satoshi  transiton-all duration-300 gap-3 py-4 ${
              path.toLowerCase() == menu.name.toLowerCase()
                ? "text-sky-500 font-bold-bold"
                : " font-semibold text-gray-100"
            }`}
          >
            <div className="xl:text-xl xxl:text-2xl ">{menu.icon}</div>
            <p className="font-Satoshi xl:text-sm xxl:text-md  font-[500]">
              {menu.name}
            </p>
          </Link>
        ))}
      </div>
      <div className=" px-10 absolute bottom-0 transiton-all py-5 duration-300 left-0 flex w-full  items-center hover:bg-red-400 gap-3 hover:text-gray-900 text-gray-100 ">
        <IoIosExit className="xl:text-2xl xxl:text-4xl rotate-180" />
        <p className="font-Satoshi xl:text-sm xxl:text-md font-[500]">
          Logout
        </p>
      </div>
    </div>
  );
};

"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { SiBlogger } from "react-icons/si";
import { MdOutlineDashboard } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { IoIosExit } from "react-icons/io";
import Link from "next/link";
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
      icon: (
        <MdOutlineDashboard  />
      ),
      link: "/admin/dashboard",
    },
    {
      name: "Blogs",
      icon: <SiBlogger />,
      link: "/admin/blogs",
    },
  ];
  return (
    <div className="h-screen fixed z-[999] top-0 left-0 w-[300px] bg-black overflow-hidden rounded-r-xl ">
      <div className="px-5 "></div>
      <div className="w-full py-7 bg-no-repeat bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1574786577070-70b30e49c99c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] px-6 ">
        <FaUserCircle className="xl:text-3xl xxl:text-5xl" />
        <div clas>
          <p className="font-Satoshi font-bold text-xl mt-4">Hello Lily</p>
          <p className="font-Satoshi text-gray-700 text-sm font-medium">Designation</p>
        </div>
      </div>
      <div className="">
        {menus.map((menu, index) => (
          <Link
            href={menu.link}
            key={index}
            className={`flex px-5 items-center  transiton-all duration-300 gap-3 py-4 ${
              path.toLowerCase() == menu.name.toLowerCase()
                ? "bg-sky-500 text-gray-100"
                : "hover:bg-blue-200 hover:text-gray-900 text-gray-100"
            }`}
          >
            <div className="xl:text-xl xxl:text-3xl ">{menu.icon}</div>
            <p className="font-Satoshi xl:text-sm xxl:text-md  font-[500]">
              {menu.name}
            </p>
          </Link>
        ))}
      </div>
      <div className=" px-5 absolute bottom-0 transiton-all duration-300 left-0 flex w-full  items-center hover:bg-red-400 gap-3 py-4">
        <IoIosExit className="xl:text-2xl xxl:text-4xl rotate-180 text-gray-100" />
        <p className="font-Satoshi text-gray-100 xl:text-sm xxl:text-md font-[500]">
          Logout
        </p>
      </div>
    </div>
  );
};

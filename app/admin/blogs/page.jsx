"use client";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
const page = () => {
  return (
    <div className="relative flex justify-end">
      <div
        style={{ width: "calc(100% - 280px)" }}
        className="w-full px-5  bg-slate-100 h-screen"
      >
        <p className="mt-4 font-Satoshi font-bold text-3xl">Blogs</p>
        <div className="mt-8 ">
          <Link href="/admin/blogs/addBlogs">
            <button className="bg-sky-400 rounded-md px-3 py-1 font-Satoshi">+ Add Blog</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;

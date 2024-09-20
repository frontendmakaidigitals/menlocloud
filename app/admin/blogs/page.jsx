"use client";

import Link from "next/link";
import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
const invoices = [
  {
    title: "Blog Title",
    description: "Blog Description",
    metaDescription: "Meta Description",
  },
  {
    title: "Blog Title",
    description: "Blog Description",
    metaDescription: "Meta Description",
  },
  {
    title: "Blog Title",
    description: "Blog Description",
    metaDescription: "Meta Description",
  },
  {
    title: "Blog Title",
    description: "Blog Description",
    metaDescription: "Meta Description",
  },
  {
    title: "Blog Title",
    description: "Blog Description",
    metaDescription: "Meta Description",
  },
  {
    title: "Blog Title",
    description: "Blog Description",
    metaDescription: "Meta Description",
  },
  {
    title: "Blog Title",
    description: "Blog Description",
    metaDescription: "Meta Description",
  },
  {
    title: "Blog Title",
    description: "Blog Description",
    metaDescription: "Meta Description",
  },
  {
    title: "Blog Title",
    description: "Blog Description",
    metaDescription: "Meta Description",
  },
  {
    title: "Blog Title",
    description: "Blog Description",
    metaDescription: "Meta Description",
  },
];

const page = () => {
  return (
    <div className="relative flex justify-end">
      <div
        style={{ width: "calc(100% - 280px)" }}
        className="w-full px-5  bg-slate-100 h-screen"
      >
        <p className="mt-4 font-Satoshi font-bold text-3xl">Blogs</p>
        <div className="mt-8 w-full flex justify-between items-center">
          <p className="font-Satoshi font-medium">Your Blog List</p>

          <Link href="/admin/blogs/addBlogs">
            <button className="bg-sky-400 hover:bg-sky-500 rounded-md px-3 py-1 font-Satoshi">
              + Add Blog
            </button>
          </Link>
        </div>
        <div className="mt-1 bg-slate-50  p-3 rounded-xl">
          <BlogList />
        </div>
      </div>
    </div>
  );
};

export default page;

const BlogList = () => {
  return (
    <Table>
      <TableCaption>A list of your Blogs.</TableCaption>
      <TableHeader>
        <TableRow className={`bg-gray-200 hover:bg-gray-200 `}>
          <TableHead className=" text-gray-900 text-lg font-Satoshi font-bold rounded-l-xl pl-4">
            No.
          </TableHead>
          <TableHead className=" text-gray-900 text-lg font-Satoshi font-bold">
            Blog Title
          </TableHead>
          <TableHead className=" text-gray-900 text-lg font-Satoshi font-bold">
            Blog Description
          </TableHead>
          <TableHead className=" text-gray-900 text-lg font-Satoshi font-bold">
            Meta Description
          </TableHead>
          <TableHead className=" text-gray-900 text-lg font-Satoshi font-bold rounded-r-xl">
            Actions
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice, index) => (
          <TableRow key={index} className={`hover:bg-gray-50`}>
            <TableCell className={`pl-4 py-3`}>{index + 1}</TableCell>
            <TableCell className={`font-Satoshi font-medium py-3`}>
              {invoice.title}
            </TableCell>
            <TableCell className={`font-Satoshi font-medium py-3`}>
              {invoice.description}
            </TableCell>
            <TableCell className={`font-Satoshi font-medium py-3`}>
              {invoice.metaDescription}
            </TableCell>
            <TableCell className={`py-3`}>
              <div className="flex items-center gap-2">
                <div className="relative group cursor-pointer">
                  <p className="hidden group-hover:block w-auto text-nowrap z-[9999] bg-gray-300 shadow-lg rounded-full px-4 py-1 absolute bottom-full left-1/2 -translate-x-1/2">
                    Edit blog
                  </p>
                  <RiEdit2Fill className="text-xl relative " />
                </div>
                <div className="relative group cursor-pointer">
                  <p className="hidden group-hover:block w-auto text-nowrap z-[9999] bg-red-500 shadow-lg text-gray-100 rounded-full px-4 py-1 absolute bottom-full left-1/2 -translate-x-1/2">
                    Delete blog
                  </p>
                  <MdDeleteForever className="text-red-500 text-xl relative" />
                </div>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

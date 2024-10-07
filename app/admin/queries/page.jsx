"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import React from "react";
import axios from "axios";
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

const Page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(false);
  const [blogs, setBlogs] = useState([]);

  const getBlogs = (data) => {
    if (true) {
      setIsLoading(true);
      axios.get("https://admin.yatriclubs.com/sanctum/csrf-cookie", {
        withCredentials: true,
      });
      axios
        .get(`https://admin.yatriclubs.com/api/blog`, { withCredentials: true })
        .then((res) => {
          console.log(res.data);
          setBlogs(res.data);
          setStatus("success");
          setIsLoading(false);
        })
        .then(() => {
          router.push("/admin/blogs");
        })
        .catch((error) => {
          console.error(error);
          setStatus("failed");
        })
        .finally(() => {
          console.log("finally");
          setIsLoading(false);
        });
    }
  };
  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div className="w-full">
      <div className="mt-8 w-full flex justify-between items-center">
        <p className="font-Satoshi font-medium">Total Queries</p>
      </div>
      <div className="mt-1 bg-slate-50  p-3 rounded-xl">
        <Queries blogs={blogs} />
      </div>
    </div>
  );
};

export default Page;

const Queries = ({ blogs }) => {
  const imageURL = "https://admin.yatriclubs.com/";
  return (
    <>
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
              Meta Description
            </TableHead>
            <TableHead className=" text-gray-900 text-lg font-Satoshi font-bold">
              Blog Image
            </TableHead>
            <TableHead className=" text-gray-900 text-lg font-Satoshi font-bold rounded-r-xl">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {blogs.map((invoice, index) => (
            <TableRow key={index} className={`hover:bg-gray-50`}>
              <TableCell className={`pl-4 py-3`}>{index + 1}</TableCell>
              <TableCell className={`font-Satoshi font-medium text-lg py-3`}>
                {invoice.name}
              </TableCell>

              <TableCell className={`font-Satoshi font-medium py-3`}>
                {invoice.metaDescription}
              </TableCell>
              <TableCell className={`font-Satoshi font-medium py-3`}>
                <div className="size-28  flex items-center justify-center ">
                  <img
                    src={imageURL + invoice.image}
                    className="w-full h-auto "
                    alt="image"
                  />
                </div>
              </TableCell>
              <TableCell className={`py-3`}>
                <div className="flex items-center gap-2">
                  <div className="relative group cursor-pointer">
                    <p className="hidden group-hover:block w-auto text-nowrap z-[9999] bg-gray-300 shadow-lg rounded-full px-4 py-1 absolute bottom-full left-1/2 -translate-x-1/2">
                      Edit blog
                    </p>
                    <Link href={`/admin/blogs/editBlogs/${invoice.id}`}>
                      {" "}
                      <RiEdit2Fill className="text-xl relative " />
                    </Link>
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
    </>
  );
};

"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
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
          setBlogs(res.data);
          setStatus("success");
          setIsLoading(false);
        })
        .catch((error) => {
          setStatus("failed");
        })
        .finally(() => {
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
        <p className="font-Satoshi font-medium">Your Blog List</p>

        <Link href="/admin/blogs/addBlogs">
          <button className="bg-sky-400 hover:bg-sky-500 rounded-md px-3 py-1 font-Satoshi">
            + Add Blog
          </button>
        </Link>
      </div>

      <div className="mt-1 bg-slate-50  p-3 rounded-xl">
        <BlogList blogs={blogs} />
      </div>
    </div>
  );
};

export default Page;

const BlogList = ({ blogs }) => {
  const router = useRouter();
  const imageURL = "https://admin.yatriclubs.com/";

  const deleteBlog = (id) => {
    axios.get("https://admin.yatriclubs.com/sanctum/csrf-cookie", {
      withCredentials: true,
    });
    axios
      .delete(`https://admin.yatriclubs.com/api/blog/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        window.location.reload();
      })
      .finally(() => console.log("finally"));
  };

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
            <TableHead className=" text-gray-900 text-lg text-center font-Satoshi font-bold">
              Priority
            </TableHead>

            <TableHead className=" text-gray-900  text-lg font-Satoshi font-bold">
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
                <p className="">{invoice.name}</p>
              </TableCell>
              <TableCell
                className={`font-Satoshi font-medium text-center text-lg py-3`}
              >
                <p className="">{invoice.priority}</p>
              </TableCell>

              <TableCell className={`font-Satoshi font-medium py-3`}>
                <div className="w-32 h-[130px] flex items-center justify-center ">
                  <img
                    src={imageURL + invoice.image}
                    className=" max-h-full min-h-auto"
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
                    <MdDeleteForever
                      onClick={() => deleteBlog(invoice.id)}
                      className="text-red-500 text-xl relative"
                    />
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

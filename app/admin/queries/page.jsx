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
  const [querys, setQueries] = useState([]);
  const serverURL = "https://admin.yatriclubs.com/";
  const getBlogs = (data) => {
    if (true) {
      setIsLoading(true);
      axios.get(`${serverURL}sanctum/csrf-cookie`, {
        withCredentials: true,
      });
      axios
        .get(`${serverURL}api/query`, { withCredentials: true })
        .then((res) => {
          console.log(res.data);
          setQueries(res.data);
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
      <div className="mt-1 bg-slate-50 p-3  rounded-xl ">
        <Queries querys={querys} serverURL={serverURL} />
      </div>
    </div>
  );
};

export default Page;

const Queries = ({ querys, serverURL }) => {
  return (
    <>
      {/* Container to enable scrolling */}
      <div className="h-[80vh] overflow-auto relative`">
        <Table className="min-w-full">
          <TableCaption>A list of your Blogs.</TableCaption>
          <TableHeader className="sticky top-0 left-0  z-10">
            <TableRow className="bg-gray-200 hover:bg-gray-200">
              <TableHead className="text-gray-900 text-lg font-Satoshi font-bold rounded-l-xl pl-4">
                No.
              </TableHead>
              <TableHead className="text-gray-900 text-lg font-Satoshi font-bold">
                Name
              </TableHead>
              <TableHead className="text-gray-900 text-lg font-Satoshi font-bold">
                Email
              </TableHead>
              <TableHead className="text-gray-900 text-lg font-Satoshi font-bold">
                Company
              </TableHead>
              <TableHead className="text-gray-900 text-lg font-Satoshi font-bold">
                Contact
              </TableHead>
              <TableHead className="text-gray-900 text-lg font-Satoshi font-bold rounded-r-xl">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {querys.map((query, index) => (
              <TableRow key={index} className="hover:bg-gray-100">
                <TableCell className="pl-4 py-3">{index + 1}</TableCell>
                <TableCell className="font-Satoshi font-medium text-lg py-3">
                  {query.name}
                </TableCell>
                <TableCell className="font-Satoshi font-medium py-3">
                  {query.email}
                </TableCell>
                <TableCell className="font-Satoshi font-medium py-3">
                  {query.company}
                </TableCell>
                <TableCell className="font-Satoshi font-medium py-3">
                  {query.mobile}
                </TableCell>
                <TableCell className="py-3">
                  <div className="flex items-center gap-2">
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
      </div>
    </>
  );
};

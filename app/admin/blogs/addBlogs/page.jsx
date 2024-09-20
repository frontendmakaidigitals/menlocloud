"use client";
import { Label } from "@radix-ui/react-label";
import React from "react";
import { useForm } from "react-hook-form";
const page = () => {
  return (
    <div className="relative flex justify-end">
      <div
        style={{ width: "calc(100% - 280px)" }}
        className="w-full px-5  bg-slate-100 h-screen"
      >
        <p className="mt-4 font-Satoshi font-bold text-3xl">Add Blog</p>
        <div className="mt-8 ">
          <Blogform />
        </div>
      </div>
    </div>
  );
};

export default page;

const Blogform = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full lg:w-[500px]">
      <div className="w-full">
        <p className="font-Satoshi font-medium">Blog Title</p>
        <input
          placeholder="Title"
          {...register("title")}
          className="px-3 w-full py-1 block mt-1 bg-gray-200 placeholder:text-gray-600 rounded-md"
        />
      </div>
      <div className="w-full mt-2">
        <p className="font-Satoshi font-medium">Description</p>
        <textarea
          placeholder="Description"
          {...register("description")}
          className="px-3 min-h-40 resize-none w-full py-1 block mt-1 bg-gray-200 placeholder:text-gray-600 rounded-md"
        />
      </div>
      <div className="w-full mt-2">
        <p className="font-Satoshi font-medium">Meta Tag</p>
        <input
          placeholder="Meta Tag"
          {...register("metatag")}
          className="px-3 w-full py-1 block mt-1 bg-gray-200 placeholder:text-gray-600 rounded-md"
        />
      </div>
      <div className="w-full mt-2">
        <p className="font-Satoshi font-medium"> Meta Description</p>
        <input
          placeholder="Meta Description"
          {...register("metadescription")}
          className="px-3 w-full py-1 block mt-1 bg-gray-200 placeholder:text-gray-600 rounded-md"
        />
      </div>

      <div className="w-full mt-2 ">
        <p className="font-Satoshi font-medium">Add Image</p>
        <input {...register("images")} type="file" accept=".jpg, .jpeg, .png" />
      </div>
      <input
        type="submit"
        className="px-3 py-1 cursor-pointer font-Satoshi mt-8 font-semibold bg-sky-400 rounded-md text-gray-900"
      />
    </form>
  );
};

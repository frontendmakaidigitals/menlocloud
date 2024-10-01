"use client";
import { useState } from "react";
import React from "react";
import { useForm } from "react-hook-form";
import { HiMiniEye } from "react-icons/hi2";
import { RiCloseLargeLine } from "react-icons/ri";
const page = () => {
  return (
    <div className="relative">
      <p className="mt-6 font-Satoshi font-medium text-2xl">Add Blog</p>
      <div className="mt-4 w-full ">
        <Blogform />
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
    formState: { errors, isSubmitting },
  } = useForm();
  const { images } = watch();

  const [imageOpen, setimageOpen] = useState(false);
  const onSubmit = (data) => console.log(data?.images[0]?.name);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full relative">
        {imageOpen ? (
          <div className="w-full h-screen max-h-screen fixed bg-gray-800/20 p-10 top-0 flex justify-center items-center left-0 z-[9999]">
            <RiCloseLargeLine
              onClick={() => setimageOpen(false)}
              className="text-4xl absolute p-1 top-4 right-4 bg-black rounded-md cursor-pointer hover:bg-red-500 text-gray-50"
            />
            <div className="h-full">
              <img src={URL.createObjectURL(images[0])} className="h-full" />
            </div>
          </div>
        ) : null}
        <div className="flex w-full gap-10 items-center">
          <div className="w-full ">
            <p className="font-Satoshi font-medium">Blog Title</p>
            <input
              placeholder="Title"
              {...register("title")}
              className="px-3 w-full py-1 block mt-1 bg-gray-200 placeholder:text-gray-600 rounded-md"
            />
          </div>
          <div className="w-full">
            <p className="font-Satoshi font-medium">Meta Tag</p>
            <input
              placeholder="Meta Tag"
              {...register("metatag")}
              className="px-3 w-full py-1 block mt-1 bg-gray-200 placeholder:text-gray-600 rounded-md"
            />
          </div>
        </div>

        <div className="w-full mt-2">
          <p className="font-Satoshi font-medium"> Meta Description</p>
          <input
            placeholder="Meta Description"
            {...register("metadescription")}
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

        <div className="w-full mt-2 ">
          <p className="font-Satoshi font-medium">Add Image</p>
          <div className="flex w-full items-center gap-2">
            <div className=" bg-gray-200 w-full relative flex items-center py-3 justify-between pl-3 pr-10 rounded-md">
              <div className="w-full">
                <p className="text-sm truncate">
                  {images ? images[0]?.name : "No image selected"}
                </p>
              </div>
              <label
                htmlFor="image"
                className="absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer hover:bg-sky-400 bg-sky-300 px-2 rounded-md font-Satoshi font-bold text-2xl"
              >
                +
              </label>
              <input
                className="hidden"
                id="image"
                {...register("images")}
                type="file"
                accept=".jpg, .jpeg, .png"
              />
            </div>
            <div
              onClick={images ? () => setimageOpen(true) : null}
              className={`p-2  rounded-md ${
                images
                  ? "text-gray-900 hover:bg-gray-300 cursor-pointer"
                  : "text-gray-600 cursor-not-allowed"
              }`}
            >
              <HiMiniEye className={`text-xl `} />
            </div>
          </div>
        </div>
        <input
          type="submit"
          className="px-5 py-1 cursor-pointer font-Satoshi mt-8 font-semibold bg-sky-400 rounded-md text-gray-900"
        />
      </form>
    </>
  );
};

"use client";
import React from "react";

const page = () => {
  const name = <span className="text-sky-500 font-Telma">Nouman Ali !</span>;
  return (
    <div className="relative flex justify-end">
      <div
        style={{ width: "calc(100% - 280px)" }}
        className="w-full px-5  bg-slate-100 h-screen"
      >
        <p className="mt-4 font-Satoshi font-bold text-3xl">
          Welcome back, {name}
        </p>
      </div>
    </div>
  );
};

export default page;

import "/styles/loader.css";
import React from "react";
const Loader = () => {
  return (
    <div className="bg-slate-50 fixed top-0 left-0 z-[9999999] flex justify-center items-center w-full h-screen">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>{" "}
    </div>
  );
};

export default Loader;

import React from "react";
import Navbar from "../components/Navbar";

function Walle() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="mt-5 p-5 min-w-full min-h-screen flex flex-col items-center border border-red-700">
        <form className="w-full h-40 flex flex-col justify-center items-center ">
          <div className="w-2/3 pt-1 flex flex-row ">
            <h1>Start with a detailed description</h1>
            <button className="bg-gray-200 rounded-md ml-1">Surprise me</button>
          </div>
          <div className="w-2/3 h-full flex items-center  drop-shadow-lg  ">
            <input className="w-full h-2/5  rounded-md" />
            <button className="w- h-2/5">Generate</button>
          </div>
        </form>
        <article className="min-w-screen min-h-full flex justify-center items-center">
          <img
            className="w-1/3 h-1/3 "
            src="https://plus.unsplash.com/premium_photo-1665657351427-efdfbf01fb81?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Desert Pic"
          />
        </article>
      </div>
    </div>
  );
}

export default Walle;

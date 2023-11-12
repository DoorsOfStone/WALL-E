import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import * as FiIcons from "react-icons/fi";
import * as CiIcons from "react-icons/ci";

import "../App.css";

function Walle() {
  let [postModal, setPostModal] = useState(false);
  const showPostModal = () => setPostModal(!postModal);

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className={postModal ? "Post active" : "Post"}>
        <div className="PostContent flex flex-row rounded-lg">
          <img
            className="w-1/2 h-full"
            src="https://plus.unsplash.com/premium_photo-1665657351427-efdfbf01fb81?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <form className="w-1/2 h-full">
            <textarea></textarea>
          </form>
          <button onClick={showPostModal}>X</button>
        </div>
      </div>
      <div className="mt-5 p-5 min-w-full min-h-screen flex flex-col items-center ">
        <form className="w-full h-40 flex flex-col justify-center items-center ">
          <div className="w-2/3 pt-1 flex flex-row ">
            <h1>Start with a detailed description</h1>
            <button className="bg-slate-300 hover:bg-slate-400 rounded-md ml-1">
              Surprise me
            </button>
          </div>
          <div className="w-2/3 h-full flex items-center drop-shadow-lg  ">
            <input
              placeholder="Describe whats on your mind."
              className="w-full h-2/5 p-1 rounded-l-md focus:outline-none"
            />
            <button className="w-1/12 h-2/5 bg-slate-300 hover:bg-slate-400 border rounded-r-md text-lg">
              Generate
            </button>
          </div>
        </form>
        <article className="min-w-screen min-h-full flex flex-row justify-center items-center">
          <img
            className="w-1/3 h-1/3 "
            src="https://plus.unsplash.com/premium_photo-1665657351427-efdfbf01fb81?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Desert Pic"
          />
          <div className="w-1/8 m-2 flex flex-col justify-center items-center ">
            <CiIcons.CiSaveUp1 className="text-4xl  text-slate-300 hover:text-slate-700" />

            <FiIcons.FiPlusCircle
              className="text-3xl text-slate-300 hover:text-slate-700"
              onClick={showPostModal}
            />
          </div>
        </article>
      </div>
    </div>
  );
}

export default Walle;

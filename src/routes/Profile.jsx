import React, { useState } from "react";
import FeedNavbar from "../components/FeedComponents/FeedNavbar";
import "../App.css";

function Profile() {
  const [showAccountInfo, setShowAccountInfo] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [showPostModal, setShowPostModal] = useState(false);

  let headers = [
    {
      title: "posts",
      amount: 12,
    },
    {
      title: "followers",
      amount: 12000,
    },
    {
      title: "following",
      amount: 233,
    },
  ];
  const handleAccountInfoClick = () => {
    setShowAccountInfo(!showAccountInfo);
  };

  const handleDeleteClick = () => {
    setShowDeletePopup(true);
  };

  const handleDeleteConfirm = () => {
    // Delete user account logic here
    setShowDeletePopup(false);
  };

  const handleLogoutClick = () => {
    // Logout logic here
  };

  const handlePostClick = () => {
    setShowPostModal(true);
  };

  const handlePostModalClose = () => {
    setShowPostModal(false);
  };

  return (
    <div className=" flex flex-row">
      <FeedNavbar />
      <div className="Profile_Setting bg-black">
        <div className="PostContent">Hello</div>
      </div>
      <div className="w-[80%] h-full flex flex-col justify-center -z-10">
        <div className="my-2 w-full h-1/2 flex p-3 justify-center ">
          <div className="w-3/5 h-full flex flex-row  ">
            <div className="w-[40%] p-2 min-h-full flex justify-center items-center">
              <img
                className="w-[50%] h-[80%] rounded-full"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Profile Pic"
              />
            </div>
            <div className="w-[60%] h-full flex flex-col">
              <div className="flex flex-row">
                <h1 className="text-2xl m-3">Jane Done</h1>
                <div className="flex justify-center items-center ">
                  <button className="w-[1/3] h-1/2 p-1 hover:bg-slate-400 bg-slate-300 rounded-md m-2 text-sm">
                    Edit Profile
                  </button>
                  <button className="w-[1/3] h-1/2 p-1 hover:bg-slate-400 bg-slate-300 rounded-md m-2 text-sm">
                    Settings
                  </button>
                  <button className="w-[1/3] h-1/2 p-1 hover:bg-slate-400 bg-slate-300 rounded-md m-2 text-sm">
                    Logout
                  </button>
                </div>
              </div>
              <div className="flex flex-row ">
                {headers.map((header) => (
                  <div className="flex flex-row m-5">
                    <h2 className="mr-1">{header.amount}</h2>
                    <h2>{header.title}</h2>
                  </div>
                ))}
              </div>
              <div>
                <article className="text-">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium ipsam eaque consequatur quasi in nostrum, rerum
                  magni ab aliquam voluptatem maxime vitae amet doloribus atque
                  incidunt commodi ratione ad assumenda?
                </article>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full min-h-screen p-5 flex flex-row flex-wrap justify-center ">
          <div className="w-[500px] h-[500px] m-2 bg-green-500">Hello</div>
          <div className="w-[500px] h-[500px] m-2 bg-green-500">Hello</div>
          <div className="w-[500px] h-[500px] m-2 bg-green-500">Hello</div>
          <div className="w-[500px] h-[500px] m-2 bg-green-500">Hello</div>
          <div className="w-[500px] h-[500px] m-2 bg-green-500">Hello</div>
          <div className="w-[500px] h-[500px] m-2 bg-green-500">Hello</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

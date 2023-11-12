import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";
import * as FaIcons from "react-icons/fa";
import * as Io5Icons from "react-icons/io5";

function FeedNavbar() {
  const routes = [
    {
      name: "Home",
      path: "/",
      icon: <AiIcons.AiFillHome />,
    },
    {
      name: "Create",
      path: "/Walle",
      icon: <FaIcons.FaRobot />,
    },
    {
      name: "Profile",
      path: "/Profile",
      icon: <CgIcons.CgProfile />,
    },
    {
      name: "Notification",
      path: "/Profile",
      icon: <Io5Icons.IoNotifications />,
    },
    {
      name: "Logout",
      path: "/Register",
      icon: <CgIcons.CgLogOut />,
    },
  ];
  return (
    <div className="FeedNav flex justify-center p-5 bg-gray-800">
      <nav className="FeedNavContent flex flex-col w-1/6 p-2 h-[95%] ">
        <Link
          to="/Walle"
          className="text-4xl w-full mb-20 Header text-blue-600"
        >
          WALL-E
        </Link>

        {routes.map((route) => (
          <li className="mb-10 list-none">
            <Link to={route.path} className=" text-white hover:text-slate-400 ">
              <div className="flex flex-row">
                <span className="mr-1 text-2xl">{route.icon}</span>
                <span className="">{route.name}</span>
                {route.name == "Notification" ? (
                  <div className="ml-1 w-1/12 h-1/12 flex rounded">
                    <h1 className=" p-1 border border-white flex justify-center items-center rounded-full  bg-red-500 text-sm">
                      99+
                    </h1>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </Link>
          </li>
        ))}
      </nav>
    </div>
  );
}

export default FeedNavbar;

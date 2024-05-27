import React, { useState } from "react";
import { logo, Bell } from "../../assets";
import { Search } from "../../assets";
import { useSelector } from "react-redux";
import { Logout } from "../Login";
import { toast } from "react-toastify";

const Navbar = () => {
  const searchHandler = (event) => {
    if (event.target.value === "") {
      setSearchResult([]);
      return;
    }

    let option = event.target.value.split(":")[0];
    const value = event.target.value.split(":")[1].split(' ').join("");
    console.log('value: ', value)
    if (option !== "status" && option !== "id" && option !== "userId")
      option = option.charAt(0).toUpperCase() + option.slice(1);
    if(!option || !value)
    {
      toast.error('Not a valid format to search')
      return;
    }
    if(!Object.keys(taskData[0]).includes(option))
    {
      toast.error(`Kindly Enter Valid Field \n ${option} is not a field`);
      return;
    }
    const taskItems = taskData.filter(
      (task) => task[option].toLowerCase().split(' ').join("") === value.toLowerCase()
    );
    setSearchResult(taskItems);
  };
  const data = useSelector((state) => state.userData.value);
  const taskData = useSelector((state) => state.taskData.value);
  const [showLogout, setShowLogout] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  return (
    <div className="bg-[#FFFFFF] flex shadow-[0px_-1px_0px_0px_#E2E2EA_inset] justify-between h-[8%] items-center p-3 relative">
      <div className="flex justify-between">
        <div className="flex">
          <img src={logo} alt="logo" className="w-10/12"></img>
        </div>
        <div className="relative flex items-center bg-[#F1F1F1] border w-[20em] rounded-md px-6 h-[51px] hover:outline-[#F1F1F1] hover:outline-2 hover:outline-double gap-1">
          <span className="">
            <img src={Search} alt="icon" />
          </span>
          <div className="flex flex-col relative">
            <input
              type="text"
              placeholder="type category:office"
              className="bg-[#F1F1F1] border-none outline-none"
              onKeyDown={(e) => {
                if (e.key === "Enter")
                  searchHandler(e);
                }}
            />
            <div
              className={`${
                searchResult.length <= 0 && "hidden"
              } w-[150%] bg-gray-500/80 text-[#ffffff] z-40 absolute top-5 gap-3 flex flex-col p-3 rounded-xl`}
            >
              {searchResult.length > 0 &&
                searchResult.map((task) => (
                  <div className="flex flex-col z-3 w-[100%] font-[700]">
                    <span>Task: {task.Task}</span>
                    <span>Tags: {task.Tags}</span>
                    <span>Category: {task.Category}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mr-2">
        <div>
          <img src={Bell} alt="" />
        </div>
        <div className="flex w-full h-full">
          <div className="flex w-full h-full justify-center items-center gap-3">
            <img
              src={data.photoURL || data.photoUrl}
              alt=""
              className="w-[20%] h-[50%] rounded-[50%]"
            />
            <span>{data.displayName}</span>
            <svg
              className="w-2.5 h-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
              onClick={() => setShowLogout(!showLogout)}
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
            {showLogout ? <Logout /> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Navbar };

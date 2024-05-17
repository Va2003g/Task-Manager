import React from "react";
import { Search } from "../../assets";


const SideBar = () => {

  return (
    <div className="flex flex-col justify-evenly gap-10 relative left-8 top-8 text-[#171725] font-[500] leading-[16.41px] font-[Roboto]">
      <div className="flex flex-col gap-11 border-b-[#F1F1F5] border-b-2">
        <p className="hover:bg-gradient-to-l from-[#6B85E6]/[19%] to-[#6895E6]/[100%] w-[fit-content]">Dashboard</p>
        <p>My Day Tasks</p>
        <p>Tasks</p>
        <p>History</p>
      </div>
      <div className="flex gap-4">
        <div>Category</div>
        <div>Tags</div>
      </div>
      <div className="flex gap-2">
        <div className="relative flex items-center bg-[#F1F1F1] border w-[12em] rounded-md px-3 h-[51px] hover:outline-[#F1F1F1] hover:outline-2 hover:outline-double gap-1">
            <img src={Search} alt="icon" className=""/>
          <input type="text" placeholder="Search..." className="bg-[#F1F1F1] border-none outline-none w-full"/>
        </div>
        <div className="text-[#5F8FE3] bg-[#F1F1F1] flex justify-center items-center rounded-md px-3 text-4xl box-border">+</div>
      </div>
    </div>
  );
};

export { SideBar };

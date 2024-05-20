import React, { useState } from "react";
import { Search,categoryIcon } from "../../assets";


const SideBar = () => {

    const [category,setCategory] = useState(true);
    const [tags,setTags] = useState(false);
    const categoryData = ['Category 1','Category 2','Category 3','Category 4','Category 5'],tagData = ['Tags 1','Tags 2','Tags 3','Tags 4','Tags 5'];

    function handleCategory()
    {
        if(tags) setTags(false);
        setCategory(!category);
    }
    function handleTags()
    {
        if(category) setCategory(false);
        setTags(!tags);
    }
  return (
    <div className="flex flex-col justify-evenly gap-10 relative left-5 top-4 text-[#171725] font-[500] leading-[16.41px] font-[Roboto]">
      <div className="flex flex-col gap-3 border-b-[#F1F1F5] border-b-2">
        <p className="hover:bg-gradient-to-l from-[#6B85E6] to-[#6895E6] hover:text-white w-[fit-content] px-5 py-4 box-border hover:rounded-t-3xl hover:rounded-b-3xl">
          Dashboard
        </p>
        <p className="hover:bg-gradient-to-l from-[#6B85E6] to-[#6895E6] hover:text-white w-[fit-content] px-5 py-4 box-border hover:rounded-t-3xl hover:rounded-b-3xl">
          My Day Tasks
        </p>
        <p className="hover:bg-gradient-to-l from-[#6B85E6] to-[#6895E6] hover:text-white w-[fit-content] px-5 py-4 box-border hover:rounded-t-3xl hover:rounded-b-3xl">
          Tasks
        </p>
        <p className="hover:bg-gradient-to-l from-[#6B85E6] to-[#6895E6] hover:text-white w-[fit-content] px-5 py-4 box-border hover:rounded-t-3xl hover:rounded-b-3xl mb-2">
          History
        </p>
      </div>
      <div className="flex -mt-5 justify-evenly box-border pb-3">
        <div className="group" onClick={handleCategory}>
          Category
          <div className="group-hover:bg-[#5F8FE3] h-1 w-full mt-2"></div>
        </div>

        <div className="group" onClick={handleTags}>
          Tags
          <div className="group-hover:bg-[#5F8FE3] h-1 w-full mt-2"></div>
        </div>
      </div>
      <div className="flex gap-2 -mt-10">
        <div className="relative flex items-center bg-[#E4E4E440]/[25%] border w-[12em] rounded-md px-3 h-[40px] hover:outline-[#E4E4E440]/[25%] hover:outline-2 hover:outline-double gap-1 hover:cursor-pointer">
          <img src={Search} alt="icon" className="" />
          <input
            type="text"
            placeholder="Search..."
            className="text-[#92929D] font-[300] text-[14px] bg-[#E4E4E440]/[5%] border-none outline-none w-full"
          />
        </div>
        <div className="text-[#5F8FE3] bg-[#E4E4E440]/[25%] flex justify-center items-center rounded-md px-3 text-4xl box-border hover:cursor-pointer font-[270]">
          +
        </div>
      </div>

      <div className="relative left-8 -top-5 flex flex-col gap-3">
        {category ? (categoryData.map((data,key)=>(
            <div className="flex gap-2 font-[300] font-[Poppins]" key={key}>
            <img src={categoryIcon} alt="" />
            <span>{data}</span>
          </div>
        ))
        ) : null}
        {tags ? (tagData.map((data,key)=>(
            <div className="flex gap-2 font-[300] font-[Poppins]" key = {key}>
            <img src={categoryIcon} alt="" />
            <span>{data}</span>
          </div>
        ))
        ) : null}
      </div>
    </div>
  );
};

export { SideBar };

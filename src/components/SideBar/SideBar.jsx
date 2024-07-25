import React, { useState } from "react";
import { Search, categoryIcon } from "../../assets";
import { useDispatch, useSelector } from "react-redux";
import { updateCategoryData,updateTagsData } from "../../Redux/TaskData/taskSlice";

const SideBar = () => {
  const [category, setCategory] = useState(true);
  const [tags, setTags] = useState(false);
  let [searchData, setSearchData] = useState([]);
  const data = useSelector((state) => state.taskData.value);
  const dispatch = useDispatch();
  const categoryData = [],
    tagData = [];

  data.forEach((task) => {
    categoryData.push(task.Category);
    if (task.Tags.includes(",")) {
      task.Tags.split(",").forEach((value) => {
        tagData.push(value);
      });
    } else tagData.push(task.Tags);
  });

  dispatch(updateCategoryData(categoryData));
  dispatch(updateCategoryData(tagData));
  function handleCategory() {
    setTags(false);
    setSearchData([]);
    setCategory(!category);
  }
  function handleTags() {
    setCategory(false);
    setSearchData([]);
    setTags(!tags);
  }
  function searchHandler(event) {
    if (event.target.value === "") {
      setSearchData([]);
      setCategory(true);
      return;
    }
    searchData = data.filter(
      (task) =>
        task.Category.toLowerCase().includes(
          event.target.value.toLowerCase()
        ) || task.Tags.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setTags(false);
    setCategory(false);
    setSearchData(searchData);
  }
  return (
    <div className="h-full flex flex-col justify-evenly gap-10 relative left-1 top-4 text-[#171725] font-[500] leading-[16.41px] font-[Roboto]">
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
          <div
            className={`group-hover:bg-[#5F8FE3] h-1 w-full mt-2 ${
              category && "bg-[#5F8FE3] h-1 w-full mt-2"
            }`}
          ></div>
        </div>

        <div className="group" onClick={handleTags}>
          Tags
          <div
            className={`group-hover:bg-[#5F8FE3] h-1 w-full mt-2 ${
              tags && "bg-[#5F8FE3] h-1 w-full mt-2"
            }`}
          ></div>
        </div>
      </div>
      <div className="flex gap-2 -mt-10">
        <div className="relative flex items-center bg-[#E4E4E440]/[25%] border w-[12em] rounded-md px-3 h-[40px] hover:outline-[#E4E4E440]/[25%] hover:outline-2 hover:outline-double gap-1 hover:cursor-pointer">
          <img src={Search} alt="icon" className="" />
          <input
            type="text"
            placeholder="Search..."
            className="text-[#92929D] font-[300] text-[14px] bg-[#E4E4E440]/[5%] border-none outline-none w-full"
            onChange={searchHandler}
            onKeyDown={(e) => {
              if (e.key === "Enter")
                searchHandler(e);
              }}
          />
        </div>
        <div className="text-[#5F8FE3] bg-[#E4E4E440]/[25%] flex justify-center items-center rounded-md px-3 text-4xl box-border hover:cursor-pointer font-[270]">
          +
        </div>
      </div>

      <div className="relative left-2 -top-5 flex flex-col gap-3 h-[330px] overflow-y-scroll">
        {category &&
          categoryData.map((data, key) => (
            <div className="flex gap-2 font-[300] font-[Poppins]" key={key}>
              <img src={categoryIcon} alt="" />
              <span>{data.toUpperCase()}</span>
            </div>
          ))}
        {tags &&
          tagData.map((data, key) => (
            <div className="flex gap-2 font-[300] font-[Poppins]" key={key}>
              <img src={categoryIcon} alt="" />
              <span>{data.toUpperCase()}</span>
            </div>
          ))}
        {searchData.length > 0 &&
          searchData.map((data, key) => (
            <div
              className="flex gap-2 font-[300] text-[13px] font-[Poppins] flex-col border-b-4 text-center"
              key={key}
            >
              {/* <img src={categoryIcon} alt="" /> */}
              <span>Task:- {data.Task.toUpperCase()}</span>
              <span>Category:- {data.Category.toUpperCase()}</span>
              <span>Tags:- {data.Tags.toUpperCase()}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export { SideBar };

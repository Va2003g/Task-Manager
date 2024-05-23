import React, { useEffect, useState } from "react";
import { Filter } from "../../assets";
import { TaskItem } from "./";
import { useSelector } from "react-redux";
import { useCallback } from "react";

export const TaskDisplay = () => {
  // const [taskData, setTaskData] = useState([]);
  const [loading, setLoading] = useState(true);
  const taskData = useSelector((state)=>state.taskData.value)
  const [filteredData,setFilteredData] = useState([]);
  
  const showAllTasks = useCallback(()=>{
    setFilteredData(taskData)
  },[taskData])

  useEffect(()=>{
    showAllTasks();
  },[showAllTasks])

  const showPendingTasks = (event)=>{
    const data = taskData.filter((task)=>(task.status.toUpperCase()==='PENDING'))
    console.log(data,'in pending')
    setFilteredData(data)
  }
  const showCompletedTask = (event)=>{
    const data = taskData.filter((task)=>(task.status.toUpperCase()==='COMPLETED'))
    console.log(data,'in completed')
    setFilteredData(data)
  }

  
  return (
    <div className="flex flex-col gap-4 bg-[#fff] px-6 py-3 rounded-t-3xl rounded-b-3xl">
      <div className="flex justify-between items-baseline">
        <div>
          <div className="text-[#171725] font-[700] font-[Roboto] text-[16px] leading-[18.75px] uppercase ml-5">
            Tasks
          </div>
        </div>

        <div className="flex gap-1 box-border font-[Roboto]">
          <div className={`flex border-[1px] border-solid border-[#f1f1f5] rounded-t-[12px] rounded-b-[12px] items-baseline px-4 py-1 box-border`}>
            <p id='all' className="hover:bg-gradient-to-r from-[#6B85E6] to-[#6895E6] hover:rounded-t-md hover:rounded-b-md px-3 hover:text-white" onClick={showAllTasks}>
              All
            </p>
            <p id='pending' className="hover:bg-gradient-to-r from-[#6B85E6] to-[#6895E6] hover:rounded-t-md hover:rounded-b-md py-[0.1rem] px-3 hover:text-white" onClick={showPendingTasks}>
              Pending
            </p>
            <p id='completed' className="hover:bg-gradient-to-r from-[#6B85E6] to-[#6895E6] hover:rounded-t-md hover:rounded-b-md py-[0.1rem] px-3 hover:text-white" onClick={showCompletedTask}>
              Completed
            </p>
          </div>
          <div className="border-[1px] border-solid border-[#f1f1f5] px-2 py-2 rounded-t-[12px] rounded-b-[12px]">
            <img src={Filter} alt="" className="my-auto mx-auto" />
          </div>
        </div>
      </div>

      <div className="w-full ">
        <div className="p-4 rounded-md border flex justify-between w-[100%] bg-[#F1F1F5] text-[#44444F] font-[Roboto] font-[700] text-[19px]">
          <span></span>
          <span className="w-40 text-center">Task</span>
          <span className="w-40 text-center">Category</span>
          <span className="w-40 text-center">Tags</span>
          <span className="w-40 text-center">Time</span>
          <span className="w-40 text-center">Due Date</span>
          <span className="w-40 text-center">Status</span>
        </div>

        <div className="h-[400px] overflow-y-scroll">
          {filteredData.length !== 0 ? (
            filteredData.map(
                (task, index) =>(
                  <TaskItem task={task} index={index} key={index}/>
                )
              )
          ) : (
            <div className="flex justify-center items-center h-full">Loading....</div>
          )}
        </div>
      </div>
    </div>
  );
};

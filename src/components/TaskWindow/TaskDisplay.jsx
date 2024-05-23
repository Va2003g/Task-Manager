import React, { useEffect, useState } from "react";
import { query, collection, getDocs, where } from "firebase/firestore";
import { db, auth } from "../../Backend";
import { Filter } from "../../assets";
import { TaskItem } from "./";

export const TaskDisplay = () => {
  const [taskData, setTaskData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredData,setFilteredData] = useState(taskData);

  useEffect(() => {
    async function fetchTasks() {
      try {
        setLoading(true);
        const user = auth.currentUser;
        if (!user) {
          // throw new Error("No authenticated user");
          // naviagte to login
          setLoading(false)
          return;
        }
  
        const queryForFindingUser = query(
          collection(db, "UserData"),
          where("email", "==", user.email)
        );
        const queryResult = await getDocs(queryForFindingUser);

        if (queryResult.empty) {
          // throw new Error("User not found");
          //login page
          setLoading(false)
          return;
        }
        //single user data
        let userId;
        queryResult.forEach((doc) => {
          userId = doc.id;
        });

        const queryForFindingTask = query(
          collection(db, "Tasks"),
          where("userId", "==", userId)
        );
        const taskQueryResult = await getDocs(queryForFindingTask);
  
        const data = [];
        taskQueryResult.forEach((doc) => {
          data.push(doc.data());
        });
        setTaskData(data);
        setFilteredData(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
      console.log("taskData", taskData);
    }
    if(!taskData.length && auth.currentUser)
      fetchTasks();
  },[[],taskData,setLoading])

  const showAllTasks = (event)=>{
    setTaskData(filteredData)
  }
  const showPendingTasks = (event)=>{
    const data = filteredData.filter((task)=>(task.status.toUpperCase()==='PENDING'))
    setTaskData(data)
  }
  const showCompletedTask = (event)=>{
    const data = filteredData.filter((task)=>(task.status.toUpperCase()==='COMPLETED'))
    setTaskData(data)
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
          {!loading ? (
            taskData.map(
              (task, index) =>
              (
                <TaskItem task={task} index={index}/>
                  // <div
                  //   key={index}
                  //   className={`p-4 rounded-md border flex justify-between w-[100%] ${(index+1)%2===0 ? `bg-[#fafafb]` :`bg-[#fff]` } text-[#171725] font-[Poppins] font-[400] text-[15px]`}
                  // >
                  //   <span 
                  //   // className={`appearance-none rounded-[50%] border border-solid border-[#D4D4D4] w-[20px] h-[20px] text-white ${ischecked && `bg-[#3DD598] border-[#3DD598]`} flex items-center justify-center cursor-pointer`} onClick={statusHandler} checked={ischecked}
                  //   className="relative"
                  //   >
                  //     <span className="font-[800] select-none absolute text-white left-[20%]">&#10003;</span>
                  //     <input 
                  //       type="checkbox" 
                  //       ischecked={false}
                  //       className={`appearance-none rounded-[50%] border border-solid border-[#D4D4D4] w-[20px] h-[20px] text-white ${true && `bg-[#3DD598] border-[#3DD598]`} flex items-center justify-center cursor-pointer`} 
                  //       onClick={statusHandler} 
                  //     />
                  //     </span>
                  //   <span className="font-normal w-40 text-center uppercase">{task.Task}</span>
                  //   <span className="font-normal w-40 text-center uppercase">{task.Category}</span>
                  //   <span className="font-normal w-40 text-center uppercase">{task.Tags}</span>
                  //   <span className="font-normal w-40 text-center uppercase">{task.Time}</span>
                  //   <span className="font-normal w-40 text-center uppercase">{task.Date}</span>
                  //   <span className={`uppercase ${task.status.toUpperCase() ==='PENDING' ? 'bg-[#50B5FF]/[10%] text-[#50B5FF] ' : 'bg-[#3DD598]/[10%] text-[#3DD598] '} font-[500] py-1 px-2 rounded-lg w-40 text-center uppercase`}>
                  //     {task.status}
                  //   </span>
                  // </div>
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

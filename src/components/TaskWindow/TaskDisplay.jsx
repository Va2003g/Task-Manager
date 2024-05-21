import React, { useEffect, useState } from "react";
import { query, collection, getDocs, where } from "firebase/firestore";
import { db, auth } from "../../Backend";
import { Filter } from "../../assets";

export const TaskDisplay = () => {
  const [taskData, setTaskData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchTasks() {
    try {
      setLoading(true);
      const user = auth.currentUser;
      if (!user) {
        throw new Error("No authenticated user");
      }

      const queryForFindingUser = query(
        collection(db, "UserData"),
        where("email", "==", user.email)
      );
      const queryResult = await getDocs(queryForFindingUser);

      if (queryResult.empty) {
        throw new Error("User not found");
      }

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
      // taskData = data;
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
    console.log("taskData", taskData);
  }
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="flex flex-col gap-4 bg-[#fff] px-6 py-3 rounded-t-3xl rounded-b-3xl">
      <div className="flex justify-between items-baseline">
        <div>
          <div className="text-[#171725] font-[700] font-[Roboto] text-[16px] leading-[18.75px] uppercase ml-5">
            Tasks
          </div>
        </div>

        <div className="flex gap-1 box-border font-[Roboto]">
          <div className="flex border-[1px] border-solid border-[#f1f1f5] rounded-t-[12px] rounded-b-[12px] items-baseline px-4 py-1 box-border">
            <p className="hover:bg-gradient-to-r from-[#6B85E6] to-[#6895E6] hover:rounded-t-md hover:rounded-b-md py-[0.1rem] px-3 hover:text-white">
              All
            </p>
            <p className="hover:bg-gradient-to-r from-[#6B85E6] to-[#6895E6] hover:rounded-t-md hover:rounded-b-md py-[0.1rem] px-3 hover:text-white">
              Pending
            </p>
            <p className="hover:bg-gradient-to-r from-[#6B85E6] to-[#6895E6] hover:rounded-t-md hover:rounded-b-md py-[0.1rem] px-3 hover:text-white">
              Completed
            </p>
          </div>
          <div className="border-[1px] border-solid border-[#f1f1f5] px-2 py-2 rounded-t-[12px] rounded-b-[12px]">
            <img src={Filter} alt="" className="my-auto mx-auto" />
          </div>
        </div>
      </div>

      <div className="w-full overflow-y-scroll">
        <div className="p-4 rounded-md border flex justify-between w-[100%] bg-[#F1F1F5] text-[#44444F] font-[Roboto] font-[700] text-[19px]">
          <span>Task</span>
          <span>Category</span>
          <span>Tags</span>
          <span>Time</span>
          <span>Due Date</span>
          <span>Status</span>
        </div>

        {!loading ? (
          taskData.map(
            (task, index) =>
              index % 2 === 0 ? (
                <div
                  key={index}
                  className="p-4 rounded-md border flex justify-between w-[100%] bg-[#FAFAFB] text-[#171725] font-[Poppins] font-[400] text-[15px]"
                >
                  <span className="font-normal w-fit">{task.Task}</span>
                  <span className="font-normal w-fit">{task.Category}</span>
                  <span className="font-normal w-fit">{task.Tags}</span>
                  <span className="font-normal w-fit">{task.Time}</span>
                  <span className="font-normal w-fit">{task.Date}</span>
                  <span className=" uppercase bg-[#50B5FF]/[10%] text-[#50B5FF] font-[500] py-1 px-2 rounded-lg">
                    {task.status}
                  </span>
                </div>
              ) : (
                <div
                  key={index}
                  className="p-4 rounded-md border flex justify-between w-[100%] bg-[#fff] text-[#171725] font-[Poppins] font-[400] text-[15px]"
                >
                  <span className="font-normal w-fit">{task.Task}</span>
                  <span className="font-normal w-fit">{task.Category}</span>
                  <span className="font-normal w-fit">{task.Tags}</span>
                  <span className="font-normal w-fit">{task.Time}</span>
                  <span className="font-normal w-fit">{task.Date}</span>
                  <span className=" uppercase bg-[#50B5FF]/[10%] text-[#50B5FF] font-[500] py-1 px-2 rounded-lg">
                    {task.status}
                  </span>
                </div>
              )
          )
        ) : (
          <div>Loading....</div>
        )}
      </div>
    </div>
  );
};

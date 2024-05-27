import React, { useEffect, useState, useCallback } from "react";
import { Filter, Forward, Backward } from "../../assets";
import { TaskItem } from "./";
import { useSelector } from "react-redux";

export const TaskDisplay = () => {
  const [all, setAll] = useState(true);
  const [pending, setPending] = useState(false);
  const [completed, setCompleted] = useState(false);
  const taskData = useSelector((state) => state.taskData.value);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 8;

  const showAllTasks = useCallback(() => {
    setFilteredData(taskData);
    setAll(true);
    setPending(false);
    setCompleted(false);
    setCurrentPage(1);
  }, [taskData]);

  useEffect(() => {
    showAllTasks();
  }, [showAllTasks]);

  const showPendingTasks = () => {
    const data = taskData.filter(
      (task) => task.status.toUpperCase() === "PENDING"
    );
    setPending(true);
    setAll(false);
    setCompleted(false);
    setFilteredData(data);
    setCurrentPage(1);
  };

  const showCompletedTask = () => {
    const data = taskData.filter(
      (task) => task.status.toUpperCase() === "COMPLETED"
    );
    setCompleted(true);
    setAll(false);
    setPending(false);
    setFilteredData(data);
    setCurrentPage(1);
  };

  const indexOfLastTask = currentPage * tasksPerPage;

  // starting index + taskPerPage = lastIndex
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;

  const currentTasks = filteredData.slice(indexOfFirstTask, indexOfLastTask);

  const totalPages = Math.ceil(filteredData.length / tasksPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex flex-col gap-4 bg-[#fff] px-6 py-3 rounded-t-3xl rounded-b-3xl">
      <div className="flex justify-between items-baseline">
        <div>
          <div className="text-[#171725] font-[700] font-[Roboto] text-[16px] leading-[18.75px] uppercase ml-5">
            Tasks
          </div>
        </div>

        <div className="flex gap-2 box-border font-[Roboto]">
          <div className="flex justify-between gap-2">
            <span className="self-center">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="rounded disabled:opacity-50"
            >
              <img src={Backward} alt="Next" width="20px" />
            </button>

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="text-white text-sm rounded disabled:opacity-50"
            >
              <img src={Forward} alt="Next" width="20px" />
            </button>
          </div>
          <div className="flex border-[1px] border-solid border-[#f1f1f5] rounded-t-[12px] rounded-b-[12px] items-baseline px-4 py-1 box-border gap-1">
            <p
              id="all"
              className={`hover:bg-gradient-to-r from-[#6B85E6] to-[#6895E6] hover:rounded-t-md hover:rounded-b-md px-2 py-[0.1rem] hover:text-white ${
                all &&
                "bg-gradient-to-r from-[#6B85E6] to-[#6895E6] rounded-t-md rounded-b-md px-2 text-white"
              }`}
              onClick={showAllTasks}
            >
              All
            </p>
            <p
              id="pending"
              className={`hover:bg-gradient-to-r from-[#6B85E6] to-[#6895E6] hover:rounded-t-md hover:rounded-b-md px-2 py-[0.1rem] hover:text-white ${
                pending &&
                "bg-gradient-to-r from-[#6B85E6] to-[#6895E6] rounded-t-md rounded-b-md px-2 text-white"
              }`}
              onClick={showPendingTasks}
            >
              Pending
            </p>
            <p
              id="completed"
              className={`hover:bg-gradient-to-r from-[#6B85E6] to-[#6895E6] hover:rounded-t-md hover:rounded-b-md px-2 py-[0.1rem] hover:text-white ${
                completed &&
                "bg-gradient-to-r from-[#6B85E6] to-[#6895E6] rounded-t-md rounded-b-md px-2 text-white"
              }`}
              onClick={showCompletedTask}
            >
              Completed
            </p>
          </div>
          {/* <div className="border-[1px] border-solid border-[#f1f1f5] px-2 py-2 rounded-t-[12px] rounded-b-[12px]">
            <img src={Filter} alt="" className="my-auto mx-auto" />
          </div> */}
        </div>
      </div>

      <div className="w-full h-[500px]">
        <div className="p-4 rounded-md border flex justify-between w-[100%] bg-[#F1F1F5] text-[#44444F] font-[Roboto] font-[700] text-[19px]">
          <span></span>
          <span className="w-40 text-center">Task</span>
          <span className="w-40 text-center">Category</span>
          <span className="w-40 text-center">Tags</span>
          <span className="w-40 text-center">Time</span>
          <span className="w-40 text-center">Due Date</span>
          <span className="w-40 text-center">Status</span>
        </div>

        <div className="h-[315px] overflow-y-scroll">
          {currentTasks.length !== 0 ? (
            currentTasks.map((task, index) => (
              <TaskItem task={task} index={index} key={index} />
            ))
          ) : (
            <div className="flex justify-center items-center h-full">
              Loading....
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

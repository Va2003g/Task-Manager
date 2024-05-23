import React,{useState} from "react";

export const TaskItem = ({ task, index }) => {
  const [ischecked, setIsChecked] = useState(true);
  
  function statusHandler() {
    console.log(ischecked)
    setIsChecked(!ischecked)
    console.log(ischecked)
  }

  return (
    <div
      key={index}
      className={`p-4 rounded-md border flex justify-between w-[100%] ${
        (index + 1) % 2 === 0 ? `bg-[#fafafb]` : `bg-[#fff]`
      } text-[#171725] font-[Poppins] font-[400] text-[15px]`}
    >
      <span
        className={`appearance-none rounded-[50%] border border-solid border-[#D4D4D4] w-[20px] h-[20px] text-white ${ischecked && `bg-[#3DD598] border-[#3DD598]`} flex items-center justify-center cursor-pointer`} onClick={statusHandler} checked={ischecked}
      >
        <span className="font-[800] select-nonetext-white">
          &#10003;
        </span>
        <input
          type="checkbox"
          className="appearance-none"
          onClick={statusHandler}
        />
      </span>
      <span className="font-normal w-40 text-center uppercase">
        {task.Task}
      </span>
      <span className="font-normal w-40 text-center uppercase">
        {task.Category}
      </span>
      <span className="font-normal w-40 text-center uppercase">
        {task.Tags}
      </span>
      <span className="font-normal w-40 text-center uppercase">
        {task.Time}
      </span>
      <span className="font-normal w-40 text-center uppercase">
        {task.Date}
      </span>
      <span
        className={`uppercase ${
          task.status.toUpperCase() === "PENDING"
            ? "bg-[#50B5FF]/[10%] text-[#50B5FF] "
            : "bg-[#3DD598]/[10%] text-[#3DD598] "
        } font-[500] py-1 px-2 rounded-lg w-40 text-center uppercase`}
      >
        {task.status}
      </span>
    </div>
  );
};
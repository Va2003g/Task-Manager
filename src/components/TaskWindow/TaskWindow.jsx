import React,{useState} from 'react'
import { Task } from '../../assets'
import { AddTask } from '../../Backend';
import { TaskDisplay } from './TaskDisplay';
import { toast } from 'react-toastify';
const TaskWindow = () => {

  const [dataObject,setDataObject]  = useState({
    Task:"",
    Category:"",
    Date:'',
    Tags:'',
    Time:''
  })
  function addTaskHandler(event)
  {
    event.preventDefault();
    const hasEmptyValue = Object.values(dataObject).forEach((value)=>{if(value==='')return true})
    if(hasEmptyValue===true)
    {
      toast.error('Kindly fill the complete data');
      return
    }
    const response = AddTask(dataObject);
    if(response)
    {
      toast.success('Data Added Successfully')
    }else{
      toast.error('Failed to Add Data')
    }
  }
  function updateHandler(event)
  {
    
    setDataObject((prevState)=>({
      ...prevState,
      [event.target.name] : event.target.value
    }))
  }

  return (
    <div className='bg-[#E4E4E440]/[25%] w-full pt-3 px-10 box-border flex flex-col gap-5'>
      <div className='bg-gradient-to-l from-[#34316D] from-[4.35%] via-[#4464AA] via-[110.31%] to-[#827EE1] to-[110.31%] flex justify-between rounded-t-3xl rounded-b-3xl font-[Roboto]'>
        <div className='relative left-12 flex flex-col gap-4 mt-7'>
          <div className=' text-[#F6F6F6] font-[700] text-[24px] relative left-3'>
            Add My Day Task 
          </div>
          <div className='text-[#EAEAEA] font-[200] w-full'>
            <form className='flex gap-6'> 
              <span className='flex flex-col w-[100%]'>
                <label For="task" className='relative left-3' >Task</label>
                <input type="text" id='task' name='Task' placeholder='Task Name..' className='bg-slate-100 bg-opacity-[9.28%] text-[#F6F6F6] font-[500] h-[38px] rounded-[6px] focus:outline-none pl-6' onChange={updateHandler}/>
                <label For="tags" className='relative left-2'>Tags</label>
                <input type="text" id='tags' name='Tags' placeholder='Enter Tags' className='bg-slate-100 bg-opacity-[9.28%] text-[#F6F6F6] font-[500] h-[38px] rounded-[6px] focus:outline-none pl-6' onChange={updateHandler}/>
              </span>
              <span className='flex flex-col'>
                <label For="category" className='relative left-2'>Category</label>
                <input type="text" id='category' name='Category' placeholder='Enter Category' className='bg-slate-100 bg-opacity-[9.28%] text-[#F6F6F6] font-[500] h-[38px] rounded-[6px] focus:outline-none pl-6' onChange={updateHandler}/>
                <label For="time" className='relative left-2'>Time</label>
                <input type="text" id='time' name='Time' placeholder='Time for completion' className='bg-slate-100 bg-opacity-[9.28%] text-[#F6F6F6] font-[500] h-[38px] rounded-[6px] focus:outline-none pl-6' onChange={updateHandler}/>
              </span>
              <span className='flex flex-col'>
                <label For="date" className='relative left-2'>Date</label>
                <input type="date" id='date' name='Date' className='bg-slate-100 bg-opacity-[9.28%] text-[#F6F6F6] font-[500] h-[38px] rounded-[6px] focus:outline-none pl-6' onChange={updateHandler}/>
              </span>
              
              <span className='relative top-[1.35rem]'>
                <button className='bg-[#FFFFFF] text-[#292929] font-[Poppins] font-[600] px-11 py-2 rounded-t-xl rounded-b-xl' onClick={addTaskHandler}>Add</button>
              </span>
            </form>
          </div>
        </div>
        <div className='my-auto'>
          <img src={Task} alt="" className='h-[15rem]'/>
        </div>
      </div>
      <TaskDisplay/>
    </div>
  )
}

export {TaskWindow}

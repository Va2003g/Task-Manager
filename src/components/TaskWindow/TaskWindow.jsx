import React from 'react'
import { Task } from '../../assets'
const TaskWindow = () => {
  // 238.59deg, #34316D 4.35%, #4464AA 110.31%, #827EE1 110.31%)
  // border: 0.4px solid #EAEAEA 
  return (
    <div className='bg-[#E4E4E440]/[25%] w-full h-full pt-3 px-10'>
      <div className='bg-gradient-to-l from-[#34316D] from-[4.35%] via-[#4464AA] via-[110.31%] to-[#827EE1] to-[110.31%] flex justify-between rounded-t-3xl rounded-b-3xl font-[Roboto]'>
        <div className='relative left-12 top-7 flex flex-col gap-4'>
          <div className=' text-[#F6F6F6] font-[700] relative left-3'>
            Add My Day Task 
          </div>
          <div className='text-[#EAEAEA] font-[200] w-full'>
            <form className='flex gap-6'> 
              <span className='flex flex-col w-[100%]'>
                <label For="task" className='relative left-3'>Task</label>
                <input type="text" id='task' name='Task' value='Task Name..' placeholder='Task Name...' className='opacity-[0.09] border-[0.4px] border-solid border-[#EAEAEA] text-[#F6F6F6] font-[500] w-[407px] h-[38px] rounded-[6px]'/>
              </span>
              <span className='flex flex-col'>
                <label For="category" className='relative left-2'>Category</label>
                <input type="text" id='category' name='Category' className='opacity-[0.09] border-[0.4px] border-solid border-[#EAEAEA] text-[#F6F6F6] font-[500] w-[250px] h-[38px] rounded-[6px]'/>
              </span>
              <span className='relative top-[1.35rem]'>
                <button className='bg-[#FFFFFF] text-[#292929] font-[Poppins] font-[600] px-11 py-2 rounded-t-xl rounded-b-xl'>Add</button>
              </span>
            </form>
          </div>
        </div>
        <div>
          <img src={Task} alt="" />
        </div>
      </div>
    </div>
  )
}

export {TaskWindow}

import React,{useState} from 'react'
import { Task } from '../../assets'
import { AddTask } from '../../Backend';
import { TaskDisplay } from './TaskDisplay';
import { toast } from 'react-toastify';
import { addTasks } from '../../Redux/TaskData/taskSlice';
import { useDispatch,useSelector } from 'react-redux';
const TaskWindow = () => {
  const categoryData = useSelector(state=>state.taskData.categoryData);
  const tagsData = useSelector(state=>state.taskData.tagsData);
  const [filteredTags,setFilteredTags] = useState([]);
  const [categoryValue,setCategoryValue] = useState('');
  const [tagsValue,setTagsValue] = useState('');

  const [dataObject,setDataObject]  = useState({
    Task:"",
    Category:"",
    Date:'',
    Tags:'',
    Time:''
  })
  const initialDataState = {
    Task:"",
    Category:"",
    Date:'',
    Tags:'',
    Time:''
  }

  const dispatch = useDispatch();
  async function addTaskHandler(event)
  {
    event.preventDefault();
    const hasEmptyValue = Object.values(dataObject).some(value => value === '');
    if (hasEmptyValue) {
      toast.error('Kindly fill the complete data');
      return;
    }
    console.log('dataobject',dataObject);
    const response = await AddTask(dataObject);
    //dispatch to store
    if(response)
    {
      dispatch(addTasks(response));
      toast.success('Data Added Successfully');
      // dispatch(addTasks(dataObject))
      setDataObject(initialDataState);
    }else{
      toast.error('Failed to Add Data')
    }
  }

  function tagsHandler(event)
  {
    
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
      <div className='bg-gradient-to-l from-[#34316D] from-[4.35%] via-[#4464AA] via-[110.31%] to-[#827EE1] to-[110.31%] flex justify-between rounded-t-3xl rounded-b-3xl font-[Roboto] z-20'>
        <div className='relative left-12 flex flex-col gap-3 mt-4'>
          <div className=' text-[#F6F6F6] font-[700] text-[24px] relative left-3'>
            Add My Day Task 
          </div>
          <div className='text-[#EAEAEA] font-[200] w-full'>
            <form className='flex gap-14 '> 
              <span className='flex flex-col w-[100%] gap-y-2'>
                <label For="task" className='relative left-3' >Task</label>
                <input type="text" id='task' name='Task' placeholder='Task Name..' value={dataObject.Task} className='bg-slate-100 bg-opacity-[9.28%] text-[#F6F6F6] font-[500] h-[38px] rounded-[6px] focus:outline-none pl-6' onChange={updateHandler}/>
                <label For="tags" className='relative left-2'>Tags</label>
                {/* <input type="text" id='tags' name='Tags' placeholder='Enter Tags' value={dataObject.Tags} className='bg-slate-100 bg-opacity-[9.28%] text-[#F6F6F6] font-[500] h-[38px] rounded-[6px] focus:outline-none pl-6' onChange={updateHandler}/> */}
                <select type="text" id='tags' name='Tags' placeholder='Enter Tags' className='appearance-none bg-slate-100 bg-opacity-[9.28%] text-[#F6F6F6] font-[500] h-[38px] rounded-[6px] focus:outline-none pl-6' onChange={tagsHandler}>
                  <option value='Enter Tags'>Enter Tags</option>
                  <option value='Enter Tags'>Enter Tags</option>
                  <option value='Enter Tags'>Enter Tags</option>
                  {filteredTags.length >=0 && 
                    filteredTags.map((tags)=>(<option value={tags}>{tags}</option>))}
                </select>
              </span>
              <span className='flex flex-col gap-y-2'>
                <label For="category" className='relative left-2'>Category</label>
                <input type="text" id='category' name='Category' placeholder='Enter Category' value={dataObject.Category} className='bg-slate-100 bg-opacity-[9.28%] text-[#F6F6F6] font-[500] h-[38px] rounded-[6px] focus:outline-none pl-6' onChange={updateHandler}/>
                <label For="time" className='relative left-2'>Time</label>
                <input type="text" id='time' name='Time' placeholder='Time for completion' value={dataObject.Time} className='bg-slate-100 bg-opacity-[9.28%] text-[#F6F6F6] font-[500] h-[38px] rounded-[6px] focus:outline-none pl-6' onChange={updateHandler}/>
              </span>
              <span className='flex flex-col gap-y-2'>
                <label For="date" className='relative left-2'>Date</label>
                <input type="date" id='date' name='Date' value={dataObject.Date} className='bg-slate-100 bg-opacity-[9.28%] text-[#F6F6F6] font-[500] h-[38px] rounded-[6px] focus:outline-none pl-6' onChange={updateHandler}/>
              </span>
              
              <span className='relative top-[1.85rem]'>
                <button className='bg-[#FFFFFF] text-[#292929] font-[Poppins] font-[600] px-11 py-2 rounded-t-xl rounded-b-xl' onClick={addTaskHandler}>Add</button>
              </span>
            </form>
          </div>
        </div>
        <div className='my-auto'>
          <img src={Task} alt="" className='h-[15rem] w-[18rem]'/>
        </div>
      </div>
      <TaskDisplay/>
    </div>
  )
}

export {TaskWindow}

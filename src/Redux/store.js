import { configureStore } from '@reduxjs/toolkit';
import UserData from './UserData/UserDataSlice';
import TaskData from './TaskData/taskSlice'

export const store = configureStore({
  reducer: {
    userData:UserData,
    taskData:TaskData
  },
}) 
          
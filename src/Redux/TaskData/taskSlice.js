import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:[]
}

export const taskSlice = createSlice({
    name:'TaskData',
    initialState,
    reducers:{
        updateTasks:(state,action)=>{
            state.value = action.payload;
        },
        addTasks:(state,action)=>{
            state.value.push(action.payload);
        },
        updateStatus:(state,action)=>{
            const {id,newStatus} = action.payload;
            const task = state.value.find(data=>data.id===id) 
            if(task)
            {
                task.status = newStatus;
            }
        }
    }
})

export const {updateTasks,addTasks,updateStatus} = taskSlice.actions;
export default taskSlice.reducer;
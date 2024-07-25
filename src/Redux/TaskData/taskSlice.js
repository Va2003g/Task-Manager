import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:[],
    categoryData:[],
    tagsData:[]
}

export const taskSlice = createSlice({
    name:'TaskData',
    initialState,
    reducers:{
        updateTasks:(state,action)=>{
            state.value = action.payload;
            console.log('state.value: ', state.value)
            console.log('action.payload: ', action.payload)
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
        },
        updateCategoryData:(state,action)=>{
            state.categoryData = action.payload;
        },
        updateTagsData:(state,action)=>{
            state.tagsData = action.payload;
        }
    }
})

export const {updateTasks,addTasks,updateStatus,updateCategoryData,updateTagsData} = taskSlice.actions;
export default taskSlice.reducer;
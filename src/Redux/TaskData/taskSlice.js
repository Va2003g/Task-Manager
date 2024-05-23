import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:[]
}

export const taskSlice = createSlice({
    name:'TaskData',
    initialState,
    reducers:{
        getTasksFromDataBase:(state,action)=>{

        }

    }
})

// export {} = createSlice.actions;
export default taskSlice.reducers;
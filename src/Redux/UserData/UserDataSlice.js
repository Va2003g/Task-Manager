import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value:{}
}

export const counterSlice = createSlice({
  name: 'UserData',
  initialState,
  reducers: {
    update: (state, action) => {
      state.value = action.payload
    },
    updateId: (state,action)=>{
      state.value = {
        ...state.value,
      storeId : action.payload}
    }
  },
})

// Action creators are generated for each case reducer function
export const {update,updateId} = counterSlice.actions

export default counterSlice.reducer
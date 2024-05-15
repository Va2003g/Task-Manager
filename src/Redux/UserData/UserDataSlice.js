import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value:{
    email:"",
    email_verified:"",
    family_name:"",   
    given_name:"", 
    locale:"",
    name:"",
    picture:"", 
    sub:""
  }
    
}

export const counterSlice = createSlice({
  name: 'UserData',
  initialState,
  reducers: {
    update: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {update} = counterSlice.actions

export default counterSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const chatSlice=createSlice({
    name:'chat',
    initialState:{
        username:"",
        messages:[]
    },
    reducers:{
       //add username
       addUsername:(state,action)=>{
        state.username=action.payload
       },
       //add message
       addMessage:(state,action)=>{
        state.messages.push(action.payload)
       },
       //clear chat
       clearChat:(state,action)=>{
        state.username=""
        state.messages=[]
       }
    }
})

export const {addUsername,addMessage,clearChat}=chatSlice.actions
export default chatSlice.reducer
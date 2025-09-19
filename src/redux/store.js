import { configureStore } from "@reduxjs/toolkit";
import chatSlice from "./slices/chatSlice";

const store=configureStore({
    reducer:{
        chatReducer:chatSlice
    }
})
export default store
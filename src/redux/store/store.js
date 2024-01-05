import { configureStore } from "@reduxjs/toolkit";
import chatSlice from '../slice/chatSlice'
const store = configureStore({
    reducer : {
        chat : chatSlice 
    }   
})
export default store
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { registerUserService } from "../service/chatServices";




export const sendMessage = createAsyncThunk(
    'chat',
    async ( formData ) => {
        const data = await registerUserService(formData)  
        console.log('form data',data);      
        return data
    }
)

const initialState  = {
  data : [],
};

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(sendMessage.fulfilled, (state, action) => {
        state.data = action.payload
        console.log('chat slice',action.payload);
      });
    },
  });
  export default chatSlice.reducer;
  export const chatSliceActions = chatSlice.actions;
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { registerUserService } from "../service/chatServices";

export const sendMessage = createAsyncThunk(
    'chat',
    async ( formData ) => {
        const data = await registerUserService(formData)     
        return {data : data.data , status : data.status}
    }
)

const initialState  = {
  status : null,
  data : null
};

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(sendMessage.fulfilled, (state, action) => {
        state.status = action.payload.status
        state.data = action.payload.data
      });
    },
  });
  export default chatSlice.reducer;
  export const chatSliceActions = chatSlice.actions;
import { createSlice } from "@reduxjs/toolkit";
// import axios from 'axios';

const initialState = {
 loader:false
};

const LoaderSlice = createSlice({
  name: "Loader",
  initialState,
  reducers: {
   toggleLoader:(state,action)=>{
    state.loader=action.payload
   }
  },
});

export default LoaderSlice.reducer;
export const { toggleLoader } = LoaderSlice.actions;

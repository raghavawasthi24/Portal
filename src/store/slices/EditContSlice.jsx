import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initialValue: false,
};

const EditContSlice = createSlice({
  name: "editShow",
  initialState,
  reducers: {
    toggleEditOpt: (state) => {
      if (state.initialValue ==false)
      state.initialValue=true;
      else state.initialValue=false;
   
    },
  },
});

export default EditContSlice.reducer;
export const { toggleEditOpt } = EditContSlice.actions;

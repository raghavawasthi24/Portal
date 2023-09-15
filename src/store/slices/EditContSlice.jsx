import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initialValue: false,
  initialQues: 0,
};

const EditContSlice = createSlice({
  name: "editShow",
  initialState,
  reducers: {
    toggleEditOpt: (state, action) => {
      if (state.initialValue == false) {
        state.initialValue = true;
        state.initialQues = action.payload;
        // console.log(action.payload)
      } else state.initialValue = false;
    },
  },
});

export default EditContSlice.reducer;
export const { toggleEditOpt } = EditContSlice.actions;

import { createSlice } from "@reduxjs/toolkit";

// const data= ;

const initialState = {
  initialQues: 1,
};

const prevNextSlice = createSlice({
  name: "prevNext",
  initialState,
  reducers: {
    prevQues: (state) => {
      if (state.initialQues < 2) {
        state.initialQues = 1;
        // console.log(state.initialQues)
      } else state.initialQues--;
    },
    nextQues: (state, action) => {
      if (state.initialQues == action.payload.length) state.initialQues = 1;
      else state.initialQues++;
      // console.log(action.payload)
    },
    moveQues: (state, action) => {
      state.initialQues = action.payload;
    },
  },
});

export default prevNextSlice.reducer;
export const { prevQues, nextQues, moveQues } = prevNextSlice.actions;

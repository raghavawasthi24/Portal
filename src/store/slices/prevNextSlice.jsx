import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initialQues: 1,
  currentCtg: true,
};

const PrevNextSlice = createSlice({
  name: "changeQues",
  initialState,
  reducers: {
    prevQues: (state) => {
      if (state.initialQues < 2) {
        state.initialQues = 1;
      } else state.initialQues--;
    },
    nextQues: (state, action) => {
      if (state.initialQues == action.payload.length) {
        state.initialQues = 1;
      } else state.initialQues++;
    },
    moveQues: (state, action) => {
      state.initialQues = action.payload;
    },
  },
});

export default PrevNextSlice.reducer;
export const { prevQues, nextQues, moveQues } = PrevNextSlice.actions;

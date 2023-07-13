import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initialQues: 1,
};

const QuestionsSlice = createSlice({
  name: "questionFetch",
  initialState,
  reducers: {
    quesList: (state) => {
      if (state.initialQues < 2) state.initialQues = 1;
      else state.initialQues--;
    },
  },
});

export default prevNextSlice.reducer;
export const { prevQues, nextQues, moveQues } = prevNextSlice.actions;
 
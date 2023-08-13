import { createSlice } from "@reduxjs/toolkit";
// import axios from 'axios';

const initialState = {
  initial: [{
    question:"What is Your Name?",
    answer:["Ram","Shyam","Dana","moore"],
    correctAns:"Ram",
}],
};

const FeedbackSlice = createSlice({
  name: "FeedbackFetch",
  initialState,
  reducers: {
    feedbacklist: (state,action) => {
      console.log(action.payload)
      state.initial=action.payload
    },
  },
});

export default FeedbackSlice.reducer;
export const { feedbacklist } = FeedbackSlice.actions;
 
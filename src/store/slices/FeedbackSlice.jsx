import { createSlice } from "@reduxjs/toolkit";
// import axios from 'axios';

const initialState = {
  initial: [
    {
      question_text: "N/A",
      question_type: "N/A",
    },
  ],
};

const FeedbackSlice = createSlice({
  name: "FeedbackFetch",
  initialState,
  reducers: {
    feedbacklist: (state, action) => {
      // console.log(action.payload);
      state.initial = action.payload;
    },
  },
});

export default FeedbackSlice.reducer;
export const { feedbacklist } = FeedbackSlice.actions;

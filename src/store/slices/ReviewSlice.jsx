// ReviewSlice.js

import { createSlice } from "@reduxjs/toolkit";

const ReviewSlice = createSlice({
  name: "review",
  initialState: [
    {
      category: "",
      quesDetails: { questionId: { review: false, visited: false, ansId: "" } },
    },
  ],
  reducers: {
    setReview: (state, action) => {
      const { questionId, review, visited, ansId } = action.payload;
      state[questionId] = { review, visited, ansId };
    },
  },
});

export const { setReview } = ReviewSlice.actions;
export default ReviewSlice.reducer;

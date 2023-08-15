import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initialCategory: ["HTML", "CSS", "JAVASCRIPT", "APTITUTE"],
};

const TestCategorySlice = createSlice({
  name: "testCategory",
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.initialCategory.splice(4, 0, action.payload);
      console.log(state.initialCategory, action.payload);
    },
  },
});

export default TestCategorySlice.reducer;

export const { addCategory } = TestCategorySlice.actions;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initialQues: [
    {
      question: "N/A",
      category: "HTML",
      options: ["N/A", "N/A", "N/A", "N/A"],
      correctAns: "N/A",
    },
  ],
  submitQuestion: true,
  quesCategory: "HTML",
  flag: 0,
};
let f = initialState.initialQues;
const QuestionsSlice = createSlice({
  name: "questionFetch",
  initialState,
  reducers: {
    quesList: (state, action) => {
      let newQuestions = action.payload;

      state.initialQues = newQuestions;
      f = newQuestions; // Update the local variable if needed
    },

    toggleQuestion: (state, action) => {
      if (state.submitQuestion) state.submitQuestion = false;
      else state.submitQuestion = true;
      state.flag = 1;
    },
    quesCtgSel: (state, action) => {
      state.initialQues = f.filter(
        (student) => student.category == action.payload
      );
      state.quesCategory = action.payload;
      // console.log(action.payload)
    },
  },
});

export default QuestionsSlice.reducer;
export const {
  quesList,
  toggleQuestion,
  quesCtgSel,
  toggleReview,
  setVisited,
  setAnsId,
} = QuestionsSlice.actions;

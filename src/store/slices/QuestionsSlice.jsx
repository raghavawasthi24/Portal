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
  initialQuesNo: 1,
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
    prevQues: (state) => {
      if (state.initialQuesNo < 2) {
        state.initialQuesNo = 1;
      } else state.initialQuesNo--;
    },
    nextQues: (state, action) => {
      console.log(action.payload)
      if (state.initialQuesNo == action.payload.length) {
        state.initialQuesNo = 1;
      } else state.initialQuesNo++;

      // if last ques then go to next category
      // const optionalCategory = localStorage.getItem("Language");
      //state.quesCategory === "HTML" ? state.quesCategory = "CSS" : state.quesCategory = "CSS"? state.quesCategory = "SQL" : state.quesCategory = "SQL"? state.quesCategory = "Aptitude" : state.quesCategory = "Aptitude"? state.quesCategory = optionalCategory : "";
    },
    moveQues: (state, action) => {
      state.initialQuesNo = action.payload;
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
  prevQues,
  nextQues,
  moveQues,
} = QuestionsSlice.actions;

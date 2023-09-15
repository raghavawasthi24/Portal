import { createSlice, current } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  all_questions: [],
  currentQues: {
    question: "N/A",
    options: ["N/A", "N/A"],
    user_ans: ["N/A"],
    correctAns: ["N/A"],
    ansStatus: 2,
  },
  studentResponses: {
    question: "N/A",
    options: ["N/A", "N/A"],
    user_ans: ["N/A"],
    correctAns: ["N/A"],
    ansStatus: 2,
  },
  currentQuesNo: 0,
};
// let f = initialState.initialQues;
const ResponseSlice = createSlice({
  name: "responseFetch",
  initialState,
  reducers: {
    uploadResponse: (state, action) => {
      state.currentQuesNo = 0;
      state.studentResponses = action.payload;
      state.currentQues = action.payload[0];
      // console.log(state.studentResponses)
      // console.log(state.currentQues)
    },
    findResponse: (state, action) => {
      //getting all questions
      const all_questions = action.payload;
      state.all_questions = all_questions;
      const currentResponse = current(state.studentResponses)[
        state.currentQuesNo
      ];
      // console.log(all_questions,currentResponse,state.currentQuesNo)

      //filtering current displaying question
      let new_question = all_questions.filter(
        (question) => question.quesId === currentResponse.quesId
      );
      new_question = new_question[0];
      //  console.log(new_question)
      //finding user_ans and correct_ans
      const user_ans = new_question.options.filter(
        (option) => option.ansId === currentResponse.ansId
      );
      const correct_ans = new_question.options.filter(
        (option) => option.ansId === new_question.correctId
      );
      // console.log(new_question)
      // console.log(user_ans,correct_ans)

      //changing cureeent ques state
      state.currentQues = {
        question: new_question.question,
        options: new_question.options,
        user_ans: user_ans[0],
        correctAns: correct_ans[0],
        ansStatus: currentResponse.ansStatus,
      };
      // console.log(state.currentQues)
    },
    prevQues: (state, action) => {
      if (state.currentQuesNo < 1) state.currentQuesNo = 0;
      else state.currentQuesNo--;
      findResponse(state.all_questions);
    },
    nextQues: (state, action) => {
      // console.log("cakkkkk")
      if (state.currentQuesNo == state.studentResponses.length - 1)
        state.currentQuesNo = 0;
      else state.currentQuesNo++;
      // console.log(state.currentQuesNo)
    },
  },
});

export default ResponseSlice.reducer;
export const { uploadResponse, findResponse, nextQues, prevQues } =
  ResponseSlice.actions;

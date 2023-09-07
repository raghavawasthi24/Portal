import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  currentQues: {
    question: "N/A",
    options: ["N/A","N/A"],
    user_ans:["N/A"],
    correctAns: ["N/A"],
    ansStatus:2
  },
  studentResponses: [],
  currentQuesNo: 1,
};
// let f = initialState.initialQues;
const ResponseSlice = createSlice({
  name: "responseFetch",
  initialState,
  reducers: {
    uploadResponse: (state, action) => {
      state.studentResponses = action.payload;
      state.currentQues = action.payload[2];
      console.log(state.currentQues)
    },
    findResponse: (state, action) => {
      //getting all questions
      const all_questions = action.payload
      console.log(action.payload)
      //filtering current displaying question
      let new_question = all_questions.filter(question => question.quesId === state.currentQues.quesId);
       new_question=new_question[0]
       //finding user_ans and correct_ans
       const user_ans=new_question.options.filter(option=>option.ansId===state.currentQues.ansId)
      const correct_ans=new_question.options.filter(option=>option.ansId===new_question.correctId)
      console.log(new_question)
      console.log(user_ans,correct_ans)

      //changing cureeent ques state
      state.currentQues={
        question:new_question.question,
        options:new_question.options,
        user_ans:user_ans[0],
        correctAns:correct_ans[0],
        ansStatus:state.currentQues.ansStatus
      }
      console.log(state.currentQues)
    },
    prevQues: (state, action) => {
      if (state.currentQuesNo < 2) state.currentQuesNo = 1;
      else state.currentQuesNo--;
    },
    nextQues: (state, action) => {
      if (state.currentQuesNo == state.studentResponses.length)
        state.currentQuesNo = 1;
      else state.currentQuesNo++;
    },
  },
});

export default ResponseSlice.reducer;
export const { uploadResponse, findResponse, nextQues, prevQues } =
  ResponseSlice.actions;

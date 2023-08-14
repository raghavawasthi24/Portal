import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initialQues: [
    {
      question: "N/A",
      category: "HTML",
      options: ["N/A", "N/A", "N/A", "N/A"],
      correctAns: "N/A",
      review: false,
      visited: false,
      ansId: "",
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
      const newQuestions = action.payload.map((newQuestion) => {
        // Check if the question already exists in the state
        const existingQuestion = state.initialQues.find(
          (question) => question.question === newQuestion.question
        );

        if (existingQuestion) {
          // If the question exists, preserve its review status
          return {
            ...newQuestion,
            visited: existingQuestion.visited,
            review: existingQuestion.review,
            ansId: existingQuestion.ansId,
          };
        } else {
          // If the question is new, set its review status to false
          return {
            ...newQuestion,
            visited: false,
            review: false,
            ansId: "",
          };
        }
      });

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
      console.log(action.payload);
      state.quesCategory = action.payload;
    },
    toggleReview: (state, action) => {
      const questionIndex = state.initialQues.findIndex(
        (question) => question.question === action.payload.question
      );

      if (questionIndex !== -1) {
        state.initialQues[questionIndex].review = action.payload.review;
      } else {
        state.initialQues.push({
          question: action.payload.question,
          review: action.payload.review,
        });
      }
    },
    setAnsId: (state, action) => {
      const { index, ansId } = action.payload;
      state.initialQues[index].ansId = ansId;
    },
    setVisited: (state, action) => {
      const { index } = action.payload;
      if (!state.initialQues[index].visited) {
        state.initialQues[index].visited = true;
      }
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

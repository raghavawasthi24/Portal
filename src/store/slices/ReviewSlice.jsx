// ReviewSlice.js

import { createSlice } from "@reduxjs/toolkit";

const optionalCategory = localStorage.getItem("language");

const reviewAndAnsweredHandler = (status, question) => {
  status === 3 || status === -2
    ? ((question.review = true), (question.answered = true))
    : status === -1 || status === 2
    ? ((question.review = false), (question.answered = true))
    : ((question.review = false), (question.answered = false));
};

const initialState = {
  categories: [
    {
      category: "HTML",
      questions: [],
    },
    {
      category: "CSS",
      questions: [],
    },
    {
      category: "JavaScript",
      questions: [],
    },
    {
      category: "Aptitude",
      questions: [],
    },
    {
      category: optionalCategory || "C",
      questions: [],
    },
  ],
};

const ReviewSlice = createSlice({
  name: "quesStates",
  initialState,

  reducers: {
    markVisited: (state, action) => {
      const questions = action.payload;
      questions.forEach((question) => {
        const { category: categoryId, quesId: questionId } = question;
        const category = state.categories.find(
          (cat) => cat.category === categoryId
        );
        if (category) {
          const question = category.questions.find(
            (ques) => ques.id === questionId
          );
          if (question) {
            question.visited = true;
          } else {
            category.questions.push({
              id: questionId,
              review: false,
              visited: true,
              answered: false,
              ansId: "",
            });
          }
        }
      });
    },
    markAnsId: (state, action) => {
      const { categoryId, questionId, ansId } = action.payload;
      const category = state.categories.find(
        (cat) => cat.category === categoryId
      );
      if (category) {
        const question = category.questions.find(
          (ques) => ques.id === questionId
        );
        if (question) {
          console.log(question);
          question.ansId = ansId;
        } else {
          category.questions.push({
            id: questionId,
            review: false,
            answered: false,
            visited: true,
            ansId: ansId,
          });
        }
      }
    },
    setStatus(state, action) {
      const questions = action.payload;
      questions.forEach((question) => {
        const category = state.categories.find(
          (cat) => cat.category === question.category
        );
        if (category) {
          const ques = category.questions.find(
            (ques) => ques.id === question.quesId
          );
          if (ques) {
            ques.ansId = question.ansId;
            reviewAndAnsweredHandler(question.ansStatus, question);
            ques.review = question.review;
            ques.answered = question.answered;
            ques.visited = true;
          } else {
            reviewAndAnsweredHandler(question.ansStatus, question);
            category.questions.push({
              id: question.quesId,
              ansId: question.ansId,
              review: question.review,
              answered: question.answered,
              visited: true,
            });
          }
        }
      });
    },
  },
});

export const { markAnsId, setStatus, markVisited } = ReviewSlice.actions;
export default ReviewSlice.reducer;

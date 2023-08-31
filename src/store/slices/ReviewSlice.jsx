// ReviewSlice.js

import { createSlice } from "@reduxjs/toolkit";

const optionalCategory = localStorage.getItem("language");

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
    markReview: (state, action) => {
      const { categoryId, questionId, review } = action.payload;
      const category = state.categories.find(
        (cat) => cat.category === categoryId
      );
      if (category) {
        const question = category.questions.find(
          (ques) => ques.id === questionId
        );
        if (question) {
          question.review = review;
          question.visited = true;
        } else {
          category.questions.push({
            id: questionId,
            review: review,
            visited: true,
            ansId: "",
          });
        }
      }
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
          question.ansId = ansId;
        } else {
          category.questions.push({
            id: questionId,
            review: false,
            visited: false,
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
            ques.review = question.review;
            ques.visited = question.visited;
          } else {
            category.questions.push({
              id: question.quesId,
              ansId: question.ansId,
              review: question.review,
              visited: question.visited,
            });
          }
        }
      });
    },
  },
});

export const { markAnsId, markReview, setStatus } = ReviewSlice.actions;
export default ReviewSlice.reducer;

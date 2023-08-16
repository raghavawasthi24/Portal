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
  },
});

export const { markAnsId, markReview } = ReviewSlice.actions;
export default ReviewSlice.reducer;

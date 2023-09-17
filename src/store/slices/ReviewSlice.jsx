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
      category: "Sql",
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
              visited: true,
              // review: false,
              // answered: false,
              // ansId: "",
            });
          }
        }
      });
    },
    markAnsId: (state, action) => {
      const { categoryId, questionId, ansId } = action.payload;
      // console.log(categoryId, questionId, ansId);
      if (
        categoryId === "C" ||
        categoryId === "Cpp" ||
        categoryId === "Python" ||
        categoryId === "Java"
      ) {
        state.categories[4].category = categoryId;
      }

      const category = state.categories.find(
        (cat) => cat.category === categoryId
      );

      // console.log(category);
      if (category) {
        const question = category.questions.find(
          (ques) => ques.id === questionId
        );
        // console.log(question);
        if (question) {
          // console.log(question);
          // question.visited = true;
          question.ansId = ansId;
        } else {
          // console.log(question, "ques pushed from ansId");
          category.questions.push({
            id: questionId,
            // review: false,
            // answered: false,
            // visited: true,
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
            // console.log(ques.ansId, "review slice");
            ques.ansId = question.ansId;
            reviewAndAnsweredHandler(question.ansStatus, question);
            ques.review = question.review;
            ques.answered = question.answered;
            // ques.visited = true;
          } else {
            reviewAndAnsweredHandler(question.ansStatus, question);
            category.questions.push({
              id: question.quesId,
              ansId: question.ansId,
              review: question.review,
              answered: question.answered,
              // visited: true,
            });
          }
        }
      });
    },
  },
});

export const { markAnsId, setStatus, markVisited } = ReviewSlice.actions;
export default ReviewSlice.reducer;

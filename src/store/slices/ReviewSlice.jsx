// ReviewSlice.js

import { createSlice } from "@reduxjs/toolkit";

const optionalCategory = localStorage.getItem("language");

const reviewAndVisitedHandler = (status, question) => {
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
    // markVisited: (state, action) => {
    //   const { categoryId, questionId } = action.payload;
    //   console.log(categoryId, questionId, "markVisited");
    //   const category = state.categories.find(
    //     (cat) => cat.category === categoryId
    //   );
    //   if (category) {
    //     const question = category.questions.find(
    //       (ques) => ques.id === questionId
    //     );
    //     if (question) {
    //       question.visited = true;
    //       console.log(question.visited, "visited");
    //     } else {
    //       category.questions.push({
    //         id: questionId,
    //         review: false,
    //         visited: true,
    //         ansId: "",
    //       });
    //     }
    //   }
    // },
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
            reviewAndVisitedHandler(question.ansStatus, question);
            ques.review = question.review;
            ques.answered = question.answered;
          } else {
            reviewAndVisitedHandler(question.ansStatus, question);
            category.questions.push({
              id: question.quesId,
              ansId: question.ansId,
              review: question.review,
              answered: question.answered,
            });
          }
        }
      });
    },
  },
});

export const { markAnsId, setStatus } = ReviewSlice.actions;
export default ReviewSlice.reducer;

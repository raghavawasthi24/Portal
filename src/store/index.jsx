import { configureStore } from "@reduxjs/toolkit";
import EditContSlice from "./slices/EditContSlice";
import QuestionsSlice from "./slices/QuestionsSlice";
import StudentsSlice from "./slices/StudentsSlice";
import FeedbackSlice from "./slices/FeedbackSlice";
import ReviewReducer from "./slices/ReviewSlice";
import prevNextSlice from "./slices/PrevNextSlice.jsx";

const store = configureStore({
  reducer: {
    prevNext: prevNextSlice,
    editShow: EditContSlice,
    quesList: QuestionsSlice,
    student: StudentsSlice,
    feedback: FeedbackSlice,
    review: ReviewReducer,
  },
});

export default store;

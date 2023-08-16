import { configureStore } from "@reduxjs/toolkit";
import prevNextSlice from "./slices/PrevNextSlice";
import EditContSlice from "./slices/EditContSlice";
import QuestionsSlice from "./slices/QuestionsSlice";
import StudentsSlice from "./slices/StudentsSlice";
import FeedbackSlice from "./slices/FeedbackSlice";
import ReviewReducer from "./slices/ReviewSlice";

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

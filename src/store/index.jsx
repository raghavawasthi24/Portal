import { configureStore } from "@reduxjs/toolkit";
import EditContSlice from "./slices/EditContSlice";
import QuestionsSlice from "./slices/QuestionsSlice";
import StudentsSlice from "./slices/StudentsSlice";
import FeedbackSlice from "./slices/FeedbackSlice";
import ReviewReducer from "./slices/ReviewSlice";
import PrevnextSlice from "./slices/PrevnextSlice";

const store = configureStore({
  reducer: {
    editShow: EditContSlice,
    quesList: QuestionsSlice,
    student: StudentsSlice,
    feedback: FeedbackSlice,
    prevNext: PrevnextSlice,
    review: ReviewReducer,
  },
});

export default store;

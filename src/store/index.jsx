import { configureStore } from "@reduxjs/toolkit";
import EditContSlice from "./slices/EditContSlice";
import QuestionsSlice from "./slices/QuestionsSlice";
import StudentsSlice from "./slices/StudentsSlice";
import FeedbackSlice from "./slices/FeedbackSlice";
import ReviewReducer from "./slices/ReviewSlice";
import ResponseSlice from "./slices/ResponseSlice";
import LoaderSlice from "./slices/LoaderSlice";

const store = configureStore({
  reducer: {
    editShow: EditContSlice,
    quesList: QuestionsSlice,
    student: StudentsSlice,
    feedback: FeedbackSlice,
    responses: ResponseSlice,
    review: ReviewReducer,
    loader:LoaderSlice
  },
});

export default store;

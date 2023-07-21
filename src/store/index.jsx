import { configureStore } from "@reduxjs/toolkit";
import  prevNextSlice  from "./slices/PrevNextSlice";
import EditContSlice from "./slices/EditContSlice";
import QuestionsSlice from "./slices/QuestionsSlice";
import StudentsSlice from "./slices/StudentsSlice";

const store= configureStore({
    reducer:{
        prevNext : prevNextSlice,
        editShow : EditContSlice,
        quesList : QuestionsSlice,
        student: StudentsSlice,
    },
})

export default store;
import { configureStore } from "@reduxjs/toolkit";
import  prevNextSlice  from "./slices/PrevNextSlice";
import EditContSlice from "./slices/EditContSlice";
import QuestionsSlice from "./slices/QuestionsSlice";

const store= configureStore({
    reducer:{
        prevNext : prevNextSlice,
        editShow : EditContSlice,
        quesList : QuestionsSlice
    },
})

export default store;
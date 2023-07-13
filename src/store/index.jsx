import { configureStore } from "@reduxjs/toolkit";
import  prevNextSlice  from "./slices/PrevNextSlice";
import EditContSlice from "./slices/EditContSlice";

const store= configureStore({
    reducer:{
        prevNext : prevNextSlice,
        editShow : EditContSlice,
    },
})

export default store;
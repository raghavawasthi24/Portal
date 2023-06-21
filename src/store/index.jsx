import { configureStore } from "@reduxjs/toolkit";
import  prevNextSlice  from "./slices/PrevNextSlice";

const store= configureStore({
    reducer:{
        prevNext : prevNextSlice,
    },
})

export default store;
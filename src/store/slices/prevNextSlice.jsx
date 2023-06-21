import { createSlice } from "@reduxjs/toolkit";

const initialState={
    initialQty:1
}

const prevNextSlice=createSlice({
    name:"prevNext",
    initialState,
    reducers:{
        prevQues:state=>{
            if(state.initialQty<2)
            state.initialQty=1
            else
            state.initialQty--
            
        },
        nextQues:state=>{
            if(state.initialQty>4)
            state.initialQty=5
            else
            state.initialQty++;
        },
    }
})

export default prevNextSlice.reducer;
export const { prevQues ,nextQues} = prevNextSlice.actions;
import { createSlice } from "@reduxjs/toolkit";

const initialState={
    initialQues:1
}

const prevNextSlice=createSlice({
    name:"prevNext",
    initialState,
    reducers:{
        prevQues:state=>{
            if(state.initialQues<2)
            state.initialQues=1
            else
            state.initialQues--
            
        },
        nextQues:state=>{
            if(state.initialQues>4)
            state.initialQues=5
            else
            state.initialQues++;
        },
        moveQues:(state,action)=>{
            state.initialQues=action.payload
        }
    }
})

export default prevNextSlice.reducer;
export const { prevQues ,nextQues,moveQues} = prevNextSlice.actions;
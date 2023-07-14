import { createSlice } from "@reduxjs/toolkit";

const initialState={
    initialQues:1
}

const candidateSearchSlice=createSlice({
    name:"candidateSearch",
    initialState,
    reducers:{
        candidateSearch:state=>{
           
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

export default candidateSearchSlice.reducer;
export const { candidateSearch} = candidateSearchSlice.actions;
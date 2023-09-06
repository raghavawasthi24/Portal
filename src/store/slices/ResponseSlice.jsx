import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
 currentQues:{
    question:"N/A",
    options:"N/A",
    correctAns:"N/A"
 },
 studentResponses:[],
 currentQuesNo:1
};
// let f = initialState.initialQues;
const ResponseSlice = createSlice({
  name: "responseFetch",
  initialState,
  reducers: {
    uploadResponse:(state,action)=>{
       const all_questions=useSelector(state=>state.quesList.initialQues)
       state.studentResponses=action.payload
       state.currentQues=action.payload[0]
    },
    findResponse:(state,action)=>{
        
    },
    prevQues:(state,action)=>{
        if(state.currentQues<2)
        state.currentQues=1
    else
    state.currentQues--;
    },
    nextQues:(state,action)=>{
        if(state.currentQues==state.studentResponses.length)
        state.currentQues=1
    else
    state.currentQues++;
    }
  },
});

export default ResponseSlice.reducer;
export const {
    uploadResponse,
 findQuestion,
 nextQues,
 prevQues
} = ResponseSlice.actions;

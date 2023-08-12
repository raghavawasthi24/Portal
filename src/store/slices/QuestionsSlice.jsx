import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  initialQues: [{
    question:"What is Your Name?",
    options:["Ram","Shyam","Dana","moore"],
    correctAns:"Ram",
}],
submitQuestion:true
};

const QuestionsSlice = createSlice({
  name: "questionFetch",
  initialState,
  reducers: {
    quesList: (state,action) => {
      state.initialQues=action.payload
      console.log(action.payload)
    },
    toggleQuestion:(state,action)=>{
      if(state.submitQuestion)
      state.submitQuestion=false
    else
    state.submitQuestion=true
    }
  },
});

export default QuestionsSlice.reducer;
export const { quesList,toggleQuestion } = QuestionsSlice.actions;
 
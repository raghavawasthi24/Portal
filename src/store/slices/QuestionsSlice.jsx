import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  initialQues: [{
    question:"N/A",
    category:"HTML",
    options:["N/A","N/A","N/A","N/A"],
    correctAns:"N/A",
}],
submitQuestion:true,
quesCategory:"HTML "
};
 let f=initialState.initialQues;
const QuestionsSlice = createSlice({
  name: "questionFetch",
  initialState,
  reducers: {
    quesList: (state,action) => {
      state.initialQues=action.payload
      f=action.payload
      // console.log(action.payload,f)
    },
    toggleQuestion:(state,action)=>{
      if(state.submitQuestion)
      state.submitQuestion=false
    else
    state.submitQuestion=true
    },
    quesCtgSel:(state,action)=>{
     
      state.initialQues = f.filter((student) =>     
      student.category.includes(action.payload)
      )
      console.log(action.payload)
      state.quesCategory=action.payload
    },
    // addQuestion:(state,action)=>{

    // }
  },
});

export default QuestionsSlice.reducer;
export const { quesList,toggleQuestion,quesCtgSel } = QuestionsSlice.actions;
 
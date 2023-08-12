import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  initialQues: [{
    question:"N/A",
    options:["N/A","N/A","N/A","N/A"],
    correctAns:"N/A",
}],
submitQuestion:true,
quesCategory:""
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
      // state.initialQues = f;
      if(action.payload=="ALL"){
        state.initialQues=f;
      }
      else{

      
      state.initialQues = f.filter((student) =>     
      student.category.includes(action.payload)
      )
      }
      state.quesCategory=action.payload
      // console.log(action.payload,state.initialQues,f)
      // console.log(f.filter((student) =>     
      // student.category.includes(action.payload)))
      // state.initialQues.map((item)=>{
      //   console.log(item)
      // })
    }
  },
});

export default QuestionsSlice.reducer;
export const { quesList,toggleQuestion,quesCtgSel } = QuestionsSlice.actions;
 
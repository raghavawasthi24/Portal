import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  initialQues: [{
    question:"What is Your Name?",
    options:["Ram","Shyam","Dana","moore"],
    correctAns:"Ram",
}],
};

const QuestionsSlice = createSlice({
  name: "questionFetch",
  initialState,
  reducers: {
    quesList: (state,action) => {
      state.initialQues=action.payload
      console.log(action.payload)
    }
  },
});

export default QuestionsSlice.reducer;
export const { quesList } = QuestionsSlice.actions;
 
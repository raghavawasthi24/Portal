import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initialQues: [{
    question:"What is Your Name?",
    answer:["Ram","Shyam","Dana","moore"],
    correctAns:"Ram",
},
{
    question:"What is Your Adress?",
    answer:["Rfnfrknf","Sgfkfrkfhyam","fkmnfkDana","mfnkjfnoore"],
    correctAns:"Sgfkfrkfhyam",
},{
    question:"What is Your Father's name?",
    answer:["Ram","Shyam","Dana","moore"],
    correctAns:"Ram",
},{
    question:"What is Your mother's Name?",
    answer:["Ram","Shyam","Dana","moore"],
    correctAns:"Ram",
},{
    question:"What is Your son's Name?",
    answer:["Ram","Shyam","Dana","moore"],
    correctAns:"Ram",
}],
};

const QuestionsSlice = createSlice({
  name: "questionFetch",
  initialState,
  reducers: {
    quesList: (state) => {
      state.initialQues=state.initialQues
    },
  },
});

export default QuestionsSlice.reducer;
export const { quesList } = QuestionsSlice.actions;
 
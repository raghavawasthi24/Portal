import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
  initial: [{
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

const FeedbackSlice = createSlice({
  name: "FeedbackFetch",
  initialState,
  reducers: {
    feedbackList: (state) => {
    //   axios.get("https://csiexamportal-eb0u.onrender.com/api/v1/getquestions")
    //     .then((res)=>{
    //         console.log(res.data.msg)
          
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //     })
      state.initial=state.initial
    },
  },
});

export default FeedbackSlice.reducer;
export const { feedbackList } = FeedbackSlice.actions;
 
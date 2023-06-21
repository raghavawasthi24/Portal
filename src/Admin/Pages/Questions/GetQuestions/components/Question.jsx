import { FormControlLabel, FormLabel, RadioGroup,FormControl, Radio } from '@mui/material'
import React from 'react'
import {useSelector} from "react-redux";

const GetQuestions = () => {
    const QuesArr=[{
        question:"What is Your Name?",
        answer:["Ram","Shyam","Dana","moore"],
        correctAns:"Ram",
    },
    {
        question:"What is Your Adress?",
        answer:["Rfnfrknf","Sgfkfrkfhyam","fkmnfkDana","mfnkjfnoore"],
        correctAns:"Ram",
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
    }]
    const data = useSelector(state => state.prevNext)

    // const myState=useSelector((state)=>state.changeQues);
  return (
    <div className=''>
        <p>Question-{data.initialQues}</p>
        <p>{QuesArr[data.initialQues-1].question}</p>
        
        <FormControl>
            <RadioGroup>
            {QuesArr[data.initialQues-1].answer.map((item,key)=>{
                return(<FormControlLabel key={key} value={item} control={<Radio/>} label={item}/>)
            })}
            </RadioGroup>

            <p>Correct Answer</p>
            <p>{QuesArr[data.initialQues-1].correctAns}</p>
        </FormControl>
    </div>
  )
}

export default GetQuestions
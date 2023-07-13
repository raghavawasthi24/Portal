import { FormControlLabel, FormLabel, RadioGroup,FormControl, Radio } from '@mui/material'
import React, { useEffect } from 'react'
import {useSelector} from "react-redux";
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import EditQuestion from './EditQuestion';
import { useDispatch } from 'react-redux';
import {toggleEditOpt} from "../../../../../store/slices/EditContSlice"

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

    
    useEffect(()=>{
        axios.get("https://examportalcsi.onrender.com/api/v1/getquestions")
        .then((res)=>{console.log(res)})
        .catch((err)=>{console.log(err)})
    },[])
    const data = useSelector(state => state.prevNext)
    const showEdit= useSelector(state=>state.editShow)
    const dispatch=useDispatch();

    // const myState=useSelector((state)=>state.changeQues);
  return (
    <div className='p-10 flex flex-col justify-between h-full'>
        
        <div className=''>
        <div className='flex justify-between my-3'>
            <p>Question-{data.initialQues}</p>
            <EditIcon onClick={()=>dispatch(toggleEditOpt())}/>
        </div>
        <hr/>
            <p>{QuesArr[data.initialQues-1].question}</p>
            
            <FormControl>
                <RadioGroup>
                {QuesArr[data.initialQues-1].answer.map((item,key)=>{
                    return(<FormControlLabel key={key} value={item} control={<Radio/>} label={item}/>)
                })}
                </RadioGroup>
                </FormControl>
        </div>
            <div  className='text-[#097309] font-bold'>
                <p>Correct Answer</p>
                <hr/>
                <p>{QuesArr[data.initialQues-1].correctAns}</p>
            </div>

            <div className={showEdit.initialValue?'absolute top-0 start-0 w-full h-full z-10':'hide'}>
                <EditQuestion/>
            </div>

            {
                console.log(showEdit)
            }
       
    </div>
  )
}

export default GetQuestions
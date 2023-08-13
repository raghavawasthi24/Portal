import { FormControlLabel, FormLabel, RadioGroup,FormControl, Radio } from '@mui/material'
import React, { useEffect } from 'react'
import {useSelector} from "react-redux";
import EditIcon from '@mui/icons-material/Edit';
import EditQuestion from './EditQuestion';
import { useDispatch } from 'react-redux';
import { quesCtgSel } from '../../../../../store/slices/QuestionsSlice';
import {toggleEditOpt} from "../../../../../store/slices/EditContSlice"
import { quesList } from '../../../../../store/slices/QuestionsSlice';
import axios from 'axios';
import { useState } from 'react';

const GetQuestions = () => {
    
    useEffect(()=>{
        axios.get("https://csi-examportal.onrender.com/api/v1/getquestions")
        .then((res)=>{
            dispatch(quesList(res.data.msg))
            dispatch(quesCtgSel('HTML'))
        })
        .catch((err)=>{
            console.log(err)
        }) 
    },[])
   
    const data = useSelector(state => state.prevNext)
    const questionDisplay= useSelector(state=>state.quesList)
    const showEdit= useSelector(state=>state.editShow)
    const [correctAns,setCorrectAns]=useState()
    const dispatch=useDispatch();


    useEffect(()=>{  
        console.log(questionDisplay.initialQues[data.initialQues-1])
        let options=questionDisplay.initialQues[data.initialQues-1]?.options
        let ansId=questionDisplay.initialQues[data.initialQues-1]?.options
        let correctId=questionDisplay.initialQues[data.initialQues-1]?.correctId
        let index=ansId?.findIndex(x=>x.ansId==correctId)
        console.log(index,options)
        setCorrectAns(options[index].name)
    },[questionDisplay.initialQues[data.initialQues-1]?.question])

  return (
    <div className='p-10 flex flex-col justify-between h-full'>
        
        <div className=''>
        <div className='flex justify-between my-3'>
            <p>Question-{data.initialQues}</p>
            <EditIcon onClick={()=>dispatch(toggleEditOpt())} style={{cursor:"pointer"}}/>
        </div>
        <hr/>
            <p>{questionDisplay.initialQues[data.initialQues-1]?.question}</p>
            
            
            <FormControl>
                <RadioGroup>
                {questionDisplay.initialQues[data.initialQues-1]?.options.map((item,key)=>{
                    return(<FormControlLabel key={key} value={item} control={<Radio/>} label={item.name}/>)
                })}
               
                </RadioGroup>
                </FormControl>
        </div>
            <div  className='text-[#097309] font-bold'>
                <p>Correct Answer</p>
                <hr/>
               <p>{correctAns}</p>
            </div>

            <div className={showEdit.initialValue?'absolute top-6 start-0 w-full h-full z-10':'hide'}>
                {/* <EditQuestion/> */}
            </div>

          
       
    </div>
  )
}

export default GetQuestions
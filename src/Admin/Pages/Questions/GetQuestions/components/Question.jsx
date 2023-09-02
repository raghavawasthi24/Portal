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
import Loader from "../../../../../Loader/Loader"
import { useState } from 'react';

const GetQuestions = () => {
    
    useEffect(()=>{
        // setLoader(true)
        axios.get("https://csi-examportal.onrender.com/api/v1/getquestions")
        .then((res)=>{
            dispatch(quesList(res.data.msg))
            dispatch(quesCtgSel('HTML'))
            // setLoader(false)
        })
        .catch((err)=>{
            console.log(err)
        }) 
    },[])
   
    const data = useSelector(state => state.prevNext)
    const [loader,setLoader]=useState(false)
    const questionDisplay= useSelector(state=>state.quesList)
    const showEdit= useSelector(state=>state.editShow)
    const [correctAns,setCorrectAns]=useState()
    const dispatch=useDispatch();


    useEffect(()=>{  
        console.log(questionDisplay.initialQues[questionDisplay.initialQuesNo-1])
        let options=questionDisplay.initialQues[questionDisplay.initialQuesNo-1]?.options
        let correctId=questionDisplay.initialQues[questionDisplay.initialQuesNo-1]?.correctId
        let index=options?.findIndex(x=>x.ansId==correctId)
        console.log(index,options)
        setCorrectAns(options[index].name)
    },[questionDisplay.initialQues[questionDisplay.initialQuesNo-1]?.question])

  return (
    <>
    <div className='p-10 flex flex-col justify-between h-full'>
        
        <div className=''>
        <div className='flex justify-between my-3'>
            <p>Question-{questionDisplay?.initialQuesNo}</p>
            <EditIcon onClick={()=>dispatch(toggleEditOpt())} style={{cursor:"pointer"}}/>
        </div>
        <hr/>
            <p>{questionDisplay.initialQues[questionDisplay?.initialQuesNo-1]?.question}</p>
            
            <FormControl>
                <RadioGroup>
                {questionDisplay.initialQues[questionDisplay.initialQuesNo-1]?.options.map((item,key)=>{
                    return(<FormControlLabel key={key} checked={item.name===correctAns} value={item} control={<Radio/>} label={item.name}/>)
                })}
                {/* <FormControlLabel value="HTML11" checked control={<Radio/>} label="HTML11"/> */}
               
                </RadioGroup>
                </FormControl>
        </div>
            <div  className='text-[#097309] font-bold'>
                <p>Correct Answer</p>
                <hr/>
               <p>{correctAns}</p>
            </div>

            <div className={showEdit.initialValue?'absolute top-6 start-0 w-full z-10':'hide'}>
                <EditQuestion/>
            </div>

          
       
    </div>
    {/* <div className='absolute top-0' style={{marginLeft:"-2rem", display:loader?"":"none"}}>
        <Loader/>
    </div> */}
    </>
  )
}

export default GetQuestions
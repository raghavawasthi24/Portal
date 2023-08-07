import { FormControlLabel, FormLabel, RadioGroup,FormControl, Radio } from '@mui/material'
import React, { useEffect } from 'react'
import {useSelector} from "react-redux";
import EditIcon from '@mui/icons-material/Edit';
import EditQuestion from './EditQuestion';
import { useDispatch } from 'react-redux';
import {toggleEditOpt} from "../../../../../store/slices/EditContSlice"
import { quesList } from '../../../../../store/slices/QuestionsSlice';
import axios from 'axios';

const GetQuestions = () => {
    
    useEffect(()=>{
        axios.get("https://exam-portal-django.onrender.com/questions/get-question/")
        .then((res)=>{
            console.log(res.data)
            dispatch(quesList(res.data))
        })
        .catch((err)=>{
            console.log(err)
        })
       
        
    },[])
    const data = useSelector(state => state.prevNext)
    const questionDisplay= useSelector(state=>state.quesList)
    const showEdit= useSelector(state=>state.editShow)
    const dispatch=useDispatch();

  return (
    <div className='p-10 flex flex-col justify-between h-full'>
        
        <div className=''>
        <div className='flex justify-between my-3'>
            <p>Question-{data.initialQues}</p>
            <EditIcon onClick={()=>dispatch(toggleEditOpt())} style={{cursor:"pointer"}}/>
        </div>
        <hr/>
            <p>{questionDisplay.initialQues[data.initialQues-1].question.ques}</p>
            
            <FormControl>
                <RadioGroup>
                {questionDisplay.initialQues[data.initialQues-1].options.map((item,key)=>{
                    return(<FormControlLabel key={key} value={item.ans} control={<Radio/>} label={item.ans}/>)
                })}
               
                </RadioGroup>
                </FormControl>
        </div>
            <div  className='text-[#097309] font-bold'>
                <p>Correct Answer</p>
                <hr/>
                <p>{questionDisplay.initialQues[data.initialQues-1].question.correct_ans}</p>
            </div>

            <div className={showEdit.initialValue?'absolute top-0 start-0 w-full h-full z-10':'hide'}>
                <EditQuestion/>
            </div>

          
       
    </div>
  )
}

export default GetQuestions
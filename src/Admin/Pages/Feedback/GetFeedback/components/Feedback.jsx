import { FormControlLabel, FormLabel, RadioGroup,FormControl, Radio } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {useSelector} from "react-redux";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EditQuestion from './EditFeedback';
import { useDispatch } from 'react-redux';
import {toggleEditOpt} from "../../../../../store/slices/EditContSlice"
import EditFeedback from './EditFeedback';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { feedbacklist } from '../../../../../store/slices/FeedbackSlice';
// import { quesList } from '../../../../../store/slices/QuestionsSlice';


const Feedback = () => {
    const [feedbackList,setFeedbackList]=useState([]);
    
    useEffect(()=>{
        axios.get("http://13.48.30.130/accounts/feedback-response/")
        .then((res)=>{
            console.log(res)
            setFeedbackList(res.data)
            // dispatch(feedbacklist(res.data))
        })
        
    },[])

  return (
    <div className='w-[90%] h-3/4 flex flex-col overflow-y-scroll'>
        {
           feedbackList?.map((response,index)=>{
            return (
                <div className='border p-5'>
                    <p className='font-400'>Student No : <span className='text-green-500'>{response.studentNo}</span></p>
                                {
                    response.responses?.map((item,index)=>{
                        return(
                            <div className='flex'>
                                <p className='mr-2 font-bold'>{item.question_text}</p>
                                <p>{item.answer_text}</p>
                            </div>
                        )
                    })
                                }
                </div>
                )})
           
        }
        
          
            <ToastContainer />
    </div>
  )
}

export default Feedback
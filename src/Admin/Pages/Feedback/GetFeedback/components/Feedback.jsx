import { FormControlLabel, FormLabel, RadioGroup,FormControl, Radio } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {useSelector} from "react-redux";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
// import EditQuestion from './EditFeedback';
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
    // const delFeedback=(id)=>{
    //     axios.delete(`http://13.48.30.130/feedback/delete-f-question/${id}`)
    //     .then((res)=>{
    //         console.log(res)
    //         toast.success("Question deleted successfully")
    //         axios.get("http://13.48.30.130/feedback/get-f-question/")
    //     .then((res)=>{
    //         console.log(res)
    //         // dispatch(feedbacklist(res.data))
    //     })
    //         // dispatch(feedbacklist(res.data))
    //     })
    // }
    // const feedvalue = useSelector(state => state.feedback)
    // const data = useSelector(state => state.prevNext)
    // const feedbackList=useSelector(state => state.feedback)
    // // const questionDisplay= useSelector(state=>state.quesList)
    // const showEdit= useSelector(state=>state.editShow)
    // const dispatch=useDispatch();

  return (
    <div className='flex flex-col'>
        {
           feedbackList?.map((response,index)=>{
            return (
                <div className='border'>
                    <p>Student No. <span>{response.studentNo}</span></p>
                                {
                    response.responses?.map((item,index)=>{
                        return(
                            <div>
                                <p>{item.question_text}</p>
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
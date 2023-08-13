import { FormControlLabel, FormLabel, RadioGroup,FormControl, Radio } from '@mui/material'
import React, { useEffect } from 'react'
import {useSelector} from "react-redux";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
// import EditQuestion from './EditFeedback';
import { useDispatch } from 'react-redux';
import {toggleEditOpt} from "../../../../../store/slices/EditContSlice"
import EditFeedback from './EditFeedback';
import axios from 'axios';
import { feedbacklist } from '../../../../../store/slices/FeedbackSlice';
// import { quesList } from '../../../../../store/slices/QuestionsSlice';


const Feedback = () => {
    
    useEffect(()=>{
        axios.get("http://13.48.30.130/feedback/add-f-question/")
        .then((res)=>{
            console.log(res)
            dispatch(feedbacklist(res.data))
        })
        
    },[])
    const delFeedback=(id)=>{
        axios.get("http://13.48.30.130/feedback/add-f-question/")
        .then((res)=>{
            console.log(res)
            dispatch(feedbacklist(res.data))
        })
    }
    // const feedvalue = useSelector(state => state.feedback)
    const data = useSelector(state => state.prevNext)
    const feedbackList=useSelector(state => state.feedback)
    // const questionDisplay= useSelector(state=>state.quesList)
    const showEdit= useSelector(state=>state.editShow)
    const dispatch=useDispatch();

  return (
    <div className='p-10 h-screen overflow-scroll flex flex-col justify-between'>
        {
            feedbackList.initial.map((item,key)=>{
                return(
                    <div className='mt-4'>
                    <div className='flex justify-between my-3'>
                        <p>Question-{data.initialQues}</p>
                        
                        <div>
                            <EditIcon style={{cursor:"pointer",margin:"0 0.7rem"}} onClick={()=>dispatch(toggleEditOpt(key))}/>
                            <DeleteIcon style={{cursor:"pointer",margin:"0 0.7rem",color:"red"}} onClick={()=>delFeedback(item.id)}/>
                        </div>
                    </div>
                    <p>{item.question_text}</p>
                    <hr/>
                       
                    </div>
                )
            })
           
        }
        
            <hr />

            <div className={showEdit.initialValue?'absolute top-0 start-0 w-full h-full z-10':'hide'}>
                <EditFeedback/>
            </div>

          
       
    </div>
  )
}

export default Feedback
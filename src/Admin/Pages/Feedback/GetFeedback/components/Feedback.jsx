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
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
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
        axios.delete(`http://13.48.30.130/feedback/delete-f-question/${id}`)
        .then((res)=>{
            console.log(res)
            toast.success("Question deleted successfully")
            axios.get("http://13.48.30.130/feedback/add-f-question/")
        .then((res)=>{
            console.log(res)
            dispatch(feedbacklist(res.data))
        })
            // dispatch(feedbacklist(res.data))
        })
    }
    // const feedvalue = useSelector(state => state.feedback)
    const data = useSelector(state => state.prevNext)
    const feedbackList=useSelector(state => state.feedback)
    // const questionDisplay= useSelector(state=>state.quesList)
    const showEdit= useSelector(state=>state.editShow)
    const dispatch=useDispatch();

  return (
    <div className='p-10 overflow-scroll flex flex-col'>
        {
            feedbackList.initial.map((item,key)=>{
                return(
                    <div className='my-3 p-3' style={{border:"1px solid grey",borderRadius:"10px",boxShadow:"0.5px 0.5px 3px grey"}}>
                    <div className='flex justify-between my-2'>
                        <p>Question-{key+1}</p>
                        
                        <div>
                            <EditIcon style={{cursor:"pointer",margin:"0 0.7rem"}} onClick={()=>dispatch(toggleEditOpt(key))}/>
                            <DeleteIcon style={{cursor:"pointer",margin:"0 0.7rem",color:"red"}} onClick={()=>delFeedback(item.id)}/>
                        </div>
                        
                    </div>
                    <hr />
                    <p className='mt-2'>{item.question_text}</p>
                               
                    </div>
                )
            })
           
        }
        
            <hr />

            <div className={showEdit.initialValue?'absolute top-0 start-0 w-full h-full z-10':'hide'}>
                <EditFeedback/>
            </div>

          
            <ToastContainer />
    </div>
  )
}

export default Feedback
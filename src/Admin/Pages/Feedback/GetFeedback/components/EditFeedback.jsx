import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch } from 'react-redux';
import {toggleEditOpt} from "../../../../../store/slices/EditContSlice"
import CancelIcon from '@mui/icons-material/Cancel';
import {useSelector} from "react-redux";
import axios from 'axios';
const EditFeedback = () => {
  
  let initialValues={
    question:"",
  }

    const dispatch=useDispatch();
    const data = useSelector(state => state.prevNext)
    const feedbakQues = useSelector(state => state.feedback)
    const feedbackQuesNo=useSelector(state=>state.editShow)


  const [formvalues,setFormvalues]=useState(feedbakQues.initial);
  const [id,setId]=useState();

  useEffect(()=>{
    console.log(feedbakQues.initial[feedbackQuesNo.initialQues],feedbackQuesNo.initialQues)
    initialValues.question=feedbakQues.initial[feedbackQuesNo.initialQues].question_text;
    setFormvalues(initialValues)
    setId(feedbakQues.initial[feedbackQuesNo.initialQues].id)
  },[feedbakQues.initial[feedbackQuesNo.initialQues]])

 const updateQues=()=>{
  axios.patch(`http://13.48.30.130/feedback/${id}/update/`,{
      "question_text":formvalues.question
    }
  )
  .then((res)=>{
    console.log(res)
    window.location.reload()
  })
 }

    const inputHandler=(e)=>{
      const {name,value}=e.target;
      setFormvalues({...formvalues,[name]:value})
    }
  return (
    <div className='flex flex-col w-2/3 m-auto mt-8 p-5 rounded bg-white' style={{boxShadow:"1px 1px 5px grey"}}>
      <CancelIcon onClick={()=>dispatch(toggleEditOpt())} className='self-end' style={{cursor:"pointer"}}/>

    {/* {
      console.log(feedbakQues,data)
    } */}
        <TextField
          id="outlined-multiline-flexible"
          label="Question"
          multiline
          rows={10}
          maxRows={4}
          placeholder='Write question for feedback ✍'
          value={formvalues.question}
          name="question"
        onChange={inputHandler}
          sx={{margin:"1rem 0"}}
          InputLabelProps={{
            shrink: true,
          }}
        />


        

      <Button variant="outlined" sx={{width:"8rem",margin:"0.8rem auto"}} endIcon={<SendIcon />} onClick={updateQues}>
        Update
      </Button>
     
    </div>
  )
}

export default EditFeedback
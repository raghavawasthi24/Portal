import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
// import {toggleEditOpt} from "../../../../../store/slices/EditContSlice"
// import CancelIcon from '@mui/icons-material/Cancel';


const AddFeedback = () => {
  
  let initialValues={
    question:"",
  }

  const [formvalues,setFormvalues]=useState(initialValues);

    const inputHandler=(e)=>{
      const {name,value}=e.target;
      setFormvalues({...formvalues,[name]:value})
    }

    const addQues=()=>{
      axios.post("http://13.48.30.130/feedback/add-f-question/",[
        {
          "question_text":formvalues.question
        }
      ])
      .then((res)=>{
        console.log(res)
        toast.success("Question Saved Successfully")
        setFormvalues(initialValues)
      }).catch((err)=>{
        console.log(err)
      })
    }
  return (
    <div className='flex flex-col'>
      
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

       <Button variant="contained" sx={{width:"20%",margin:"0.8rem 0 0.8rem auto", padding:"0.5rem"}} endIcon={<SendIcon />} onClick={addQues}>
           Submit
       </Button>


       <ToastContainer />
     
    </div>
  )
}

export default AddFeedback
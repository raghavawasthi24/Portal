import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import {toggleEditOpt} from "../../../../../store/slices/EditContSlice"
// import CancelIcon from '@mui/icons-material/Cancel';


const AddFeedback = () => {
  
  let initialValues={
    question:"",
    category:""
  }

  const [formvalues,setFormvalues]=useState(initialValues);

    const inputHandler=(e)=>{
      const {name,value}=e.target;
      setFormvalues({...formvalues,[name]:value})
    }

    const addQues=()=>{
      if(formvalues.question.trim()!="" && formvalues.category!=""){
      axios.post("http://13.48.30.130/feedback/add-f-question/",[
        {
          "question_text":formvalues.question.trim(),
          "question_type":formvalues.category,
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
    else{
      toast.error("Please fill all details!")
    }
    }
    
  return (
    <div className='w-2/3 bg-white p-5 flex flex-col mx-auto mt-5'>
      
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

<FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Category</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={formvalues.category}
    label="Category"
    name="category"
    onChange={inputHandler}
  >
    <MenuItem value="emoji">Emoji</MenuItem>
    <MenuItem value="text">Text</MenuItem>
  </Select>
</FormControl>

       <Button variant="contained" sx={{width:"20%",margin:"0.8rem 0 0.8rem auto", padding:"0.5rem"}} endIcon={<SendIcon />} onClick={addQues}>
           Submit
       </Button>


       <ToastContainer />
     
    </div>
  )
}

export default AddFeedback

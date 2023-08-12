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
import { quesList } from '../../../../../store/slices/QuestionsSlice';
import axios from 'axios';

const EditQuestion = () => {
  
  let initialValues={
    question:"",
    opt1:"",
    opt2:"",
    opt3:"",
    opt4:"",
    correctAns:""
  }

    const dispatch=useDispatch();
    const data = useSelector(state => state.prevNext)
    const questionDisplay= useSelector(state=>state.quesList)

  
  const [formvalues,setFormvalues]=useState(questionDisplay.initialQues[data.initialQues-1]);

  useEffect(()=>{
    // console.log(questionDisplay.initialQues[data.initialQues-1])
    initialValues.question=questionDisplay.initialQues[data.initialQues-1]?.question;
    initialValues.opt1=questionDisplay.initialQues[data.initialQues-1]?.options[0];
    initialValues.opt2=questionDisplay.initialQues[data.initialQues-1]?.options[1];
    initialValues.opt3=questionDisplay.initialQues[data.initialQues-1]?.options[2];
    initialValues.opt4=questionDisplay.initialQues[data.initialQues-1]?.options[3];
    let options=questionDisplay.initialQues[data.initialQues-1]?.options
    let ansId=questionDisplay.initialQues[data.initialQues-1]?.ansId
    let correctId=questionDisplay.initialQues[data.initialQues-1]?.correctId
    let index=ansId?.indexOf(correctId)

    initialValues.correctAns=options[index]
    // setCorrectAns(options[index])
    // initialValues.correctAns=questionDisplay.initialQues[data.initialQues-1].question.correct_ans;
    setFormvalues(initialValues)
  },[questionDisplay.initialQues[data.initialQues-1]?.question])

 

    const inputHandler=(e)=>{
      const {name,value}=e.target;
      setFormvalues({...formvalues,[name]:value})
    }

    const updateQues=()=>{
      axios.put(`https://csi-examportal.onrender.com/api/v1/updatequestions/${questionDisplay.initialQues[data.initialQues-1]._id}`,{
        "question":formvalues.question,
        "option":[formvalues.opt1,formvalues.opt2,formvalues.opt3,formvalues.opt4],

      })
      .then((res)=>{
        console.log(res)
      })
      
    }
  return (
    <div className='flex flex-col w-2/3 m-auto mt-3 p-5 rounded bg-white' style={{boxShadow:"1px 1px 5px grey"}}>
      <CancelIcon onClick={()=>dispatch(toggleEditOpt())} className='self-end' style={{cursor:"pointer"}}/>

    {/* {
      console.log(questionDisplay.initialQues)
    } */}
        <TextField
          id="standard-multiline-flexible"
          label="Question"
          multiline
          maxRows={4}
          value={formvalues.question}
          name="question"
        onChange={inputHandler}
        variant="standard"
          sx={{margin:"0.8rem 0"}}
        />


        <TextField
          id="standard-multiline-flexible"
          label="Option 1"
          multiline
          maxRows={4}
          sx={{width:"50%",margin:"0.8rem 0"}}
          value={formvalues.opt1}
          name="opt1"
        onChange={inputHandler}
        variant="standard"
        />
        <TextField
          id="standard-multiline-flexible"
          label="Option 2"
          multiline
          maxRows={4}
          sx={{width:"50%",margin:"0.8rem 0"}}
          value={formvalues.opt2}
          name="opt2"
        onChange={inputHandler}
        variant="standard"
        />

        <TextField
          id="standard-multiline-flexible"
          label="Option 3"
          multiline
          maxRows={4}
          sx={{width:"50%",margin:"0.8rem 0"}}
          value={formvalues.opt3}
          name="opt3"
        onChange={inputHandler}
        variant="standard"
        />
        <TextField
          id="standard-multiline-flexible"
          label="Option 4"
          multiline
          maxRows={4}
          sx={{width:"50%",margin:"0.8rem 0"}}
          value={formvalues.opt4}
          name="opt4"
        onChange={inputHandler}
        variant="standard"
        />


<FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" variant="standard">Correct Option</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={formvalues.correctAns}
          name='correctAns'
          label="Correct Option"
          onChange={inputHandler}
          variant="standard"
        >
        <MenuItem value={formvalues.opt1}>{formvalues.opt1}</MenuItem>
        <MenuItem value={formvalues.opt2}>{formvalues.opt2}</MenuItem>
        <MenuItem value={formvalues.opt3}>{formvalues.opt3}</MenuItem>
        <MenuItem value={formvalues.opt4}>{formvalues.opt4}</MenuItem>
        </Select>
      </FormControl>

      <Button variant="outlined" sx={{width:"8rem",margin:"0.8rem auto"}} endIcon={<SendIcon />} onClick={updateQues}>
        Update
      </Button>
     
    </div>
  )
}

export default EditQuestion
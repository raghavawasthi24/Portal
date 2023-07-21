import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { useDispatch } from 'react-redux';
import {toggleEditOpt} from "../../../../../store/slices/EditContSlice"
import CancelIcon from '@mui/icons-material/Cancel';
import {useSelector} from "react-redux";

const EditQuestion = () => {
  
  let initialValues={
    question:"",
    opt1:"",
    opt2:"",
    opt3:"",
    opt4:"",
    correctAns:""
  }

    // const dispatch=useDispatch();
    // const data = useSelector(state => state.prevNext)
    // const questionDisplay= useSelector(state=>state.quesList)


  const [formvalues,setFormvalues]=useState(initialValues);

 

    const inputHandler=(e)=>{
      const {name,value}=e.target;
      setFormvalues({...formvalues,[name]:value})
    }
  return (
    <div className='flex flex-col'>
      
        <TextField
          id="outlined-multiline-flexible"
          label="Question"
          multiline
          maxRows={4}
          value={formvalues.question}
          name="question"
        onChange={inputHandler}
          sx={{margin:"1rem 0"}}
        />


        <TextField
          id="outlined-multiline-flexible"
          label="Option 1"
          multiline
          maxRows={4}
          sx={{margin:"1rem 0"}}
          value={formvalues.opt1}
          name="opt1"
        onChange={inputHandler}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Option 2"
          multiline
          maxRows={4}
          sx={{margin:"1rem 0"}}
          value={formvalues.opt2}
          name="opt2"
        onChange={inputHandler}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Option 3"
          multiline
          maxRows={4}
          sx={{margin:"1rem 0"}}
          value={formvalues.opt3}
          name="opt3"
        onChange={inputHandler}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Option 4"
          multiline
          maxRows={4}
          sx={{margin:"1rem 0"}}
          value={formvalues.opt4}
          name="opt4"
        onChange={inputHandler}
        />


<FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Correct Option</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={formvalues.correctAns}
          name='correctAns'
          label="Correct Option"
          onChange={inputHandler}
        >
        <MenuItem value={formvalues.opt1}>{formvalues.opt1}</MenuItem>
        <MenuItem value={formvalues.opt2}>{formvalues.opt2}</MenuItem>
        <MenuItem value={formvalues.opt3}>{formvalues.opt3}</MenuItem>
        <MenuItem value={formvalues.opt4}>{formvalues.opt4}</MenuItem>
        </Select>
      </FormControl>
     
    </div>
  )
}

export default EditQuestion
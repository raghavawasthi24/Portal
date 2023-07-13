import React, { useState } from 'react';
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

const EditQuestion = () => {
    const initialvalues={
        question:"What is Your Name?",
        opt1:"Ram",
        opt2:"Shyam",
        opt3:"Dana",
        opt4:"Moore",
        correctAns:"Shyam"
    }
    const [formvalues,setFormvalues]=useState(initialvalues);
    const dispatch=useDispatch();
    const inputHandler=(e)=>{
      const {name,value}=e.target;
      setFormvalues({...formvalues,[name]:value})
    }
  return (
    <div className='flex flex-col w-2/3 m-auto mt-3 p-5 rounded bg-white' style={{boxShadow:"1px 1px 5px grey"}}>
      <CancelIcon onClick={()=>dispatch(toggleEditOpt())} className='self-end'/>
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
          <MenuItem value={formvalues.opt1} defaultChecked>{formvalues.opt1}</MenuItem>
          <MenuItem value={formvalues.opt2}>{formvalues.opt2}</MenuItem>
          <MenuItem value={formvalues.opt3}>{formvalues.opt3}</MenuItem>
          <MenuItem value={formvalues.opt4}>{formvalues.opt4}</MenuItem>
        </Select>
      </FormControl>

      <Button variant="outlined" sx={{width:"8rem",margin:"0.8rem auto"}} endIcon={<SendIcon />}>
        Update
      </Button>
     
    </div>
  )
}

export default EditQuestion
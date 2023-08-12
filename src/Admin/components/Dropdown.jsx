import { FormControl,Select,MenuItem} from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { quesCtgSel } from '../../store/slices/QuestionsSlice';
import { useEffect } from 'react';

const Dropdown = () => {

    const techArr=["ALL","HTML","CSS","JavaScript","Aptitude","C","C++","Java"];
    const [selTech,setSelTech]=useState(techArr[0])
    const handleTech=(e)=>{
     setSelTech(e.target.value)
     dispatch(quesCtgSel(e.target.value))
    }
    const dispatch=useDispatch();
  return (
    <div className='w-full bg-gradient-to-r from-dropdownGrad1 via-dropdownGrad2 to-dropdownGrad3'>
        <FormControl sx={{width:"100%"}}>
            <Select 
            value={selTech}
            onChange={handleTech}>
            {techArr.map((item,key)=>{
                return(<MenuItem key={key} value={item}>{item}</MenuItem>)
            })}
            </Select> 
        </FormControl>
    </div>
  )
}

export default Dropdown
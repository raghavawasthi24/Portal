import { FormControl,Select,MenuItem} from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { quesCtgSel } from '../../../../../store/slices/QuestionsSlice';
import { moveQues } from '../../../../../store/slices/prevNextSlice';
import { useEffect } from 'react';

const Dropdown = () => {

    const techArr=["HTML","CSS","JavaScript","Aptitude","C","C++","Java"];
    const [selTech,setSelTech]=useState(techArr[0])
    const handleTech=(e)=>{
     setSelTech(e.target.value)
     dispatch(moveQues(1))
     dispatch(quesCtgSel(e.target.value))
    }

    const currentdata= useSelector(state=>state.quesList)

    useEffect(()=>{
      // console.log(currentdata.initialQues[0].question)
      dispatch(quesCtgSel(selTech))
    },[currentdata.initialQues[0].question])
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
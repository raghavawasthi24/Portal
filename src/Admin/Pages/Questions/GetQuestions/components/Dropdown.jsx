import { FormControl,Select,MenuItem} from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { quesCtgSel } from '../../../../../store/slices/QuestionsSlice';
import { moveQues } from '../../../../../store/slices/QuestionsSlice';
import { useEffect } from 'react';
import zIndex from '@mui/material/styles/zIndex';

const Dropdown = () => {

  const techArr = [
    {
      value: "HTML",
      label: "HTML",
    },
    {
      value: "CSS",
      label: "CSS",
    },
    {
      value: "JavaScript",
      label: "JavaScript",
    },
    {
      value: "Aptitude",
      label: "Aptitude",
    },
    {
      value: "Sql",
      label: "SQL",
    },
    {
      value: "C",
      label: "C",
    },
    {
      value: "Cpp",
      label: "C++",
    },
    {
      value: "Java",
      label: "Java",
    },
    {
      value: "Python",
      label: "Python",
    },
  ];

  const currentdata= useSelector(state=>state.quesList)
    const [selTech,setSelTech]=useState(currentdata.quesCategory)
    const handleTech=(e)=>{
     setSelTech(e.target.value)
     dispatch(moveQues(1))
     dispatch(quesCtgSel(e.target.value))
    }

    
    // const currentCtg =useSelector(state=>state.prevNext)

    useEffect(()=>{
      //console.log(currentdata.initialQues[0].question)
      dispatch(quesCtgSel(selTech))
    },[currentdata.initialQues[0]?.question])
    const dispatch=useDispatch();
  return (
    <div className='w-full bg-gradient-to-r from-dropdownGrad1 via-dropdownGrad2 to-dropdownGrad3'>
        <FormControl sx={{width:"100%"}}>
            <Select 
            value={selTech}
            onChange={handleTech}
            sx={{textAlign:"center"}}>
            {techArr.map((item,key)=>{
                return(<MenuItem key={key} value={item.value}>{item.label}</MenuItem>)
            })}
            </Select> 
        </FormControl>
    </div>
  )
}

export default Dropdown
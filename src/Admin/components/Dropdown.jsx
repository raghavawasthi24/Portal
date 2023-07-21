import { FormControl,Select,MenuItem} from '@mui/material';
import React, { useState } from 'react';

const Dropdown = () => {

    const techArr=["HTML","CSS","JavaScript","Aptitude","C","C++","Java"];
    const [selTech,setSelTech]=useState(techArr[0])
    const handleTech=(e)=>{
     setSelTech(e.target.value)
    }
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
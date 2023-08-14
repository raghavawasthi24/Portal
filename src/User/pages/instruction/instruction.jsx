import { Circle } from '@mui/icons-material';
import { Box, Button, Card, Divider, FormControl, Grid, InputLabel, List, ListItem, ListItemIcon, ListItemText, Menu, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import arr from '../../constants/InstructionContent';
import "./instruction.css"
import { useNavigate } from 'react-router-dom';

import axios from 'axios';


const Instruction = () => {
  const navigate =useNavigate();
  const [Language, setLanguage] =useState('');
  const [enabletextfield,setEnabletextfield]=useState(false);
  const [start,setStart]=useState('');
  const [enableSavebtn,setEnableSavebtn]=useState(false);

  const handleChange = (event) => {
    setLanguage(event.target.value);
    if (setLanguage==null){
      setEnabletextfield(false);
    }
    else{
      setEnabletextfield(true)
    }
  };
 const handleInput=(e)=>{
  setStart(e.target.value);
  var regex= /^START$/;
  if(regex.test(e.target.value)){
    setEnableSavebtn(true);
    
  }
  else{
    setEnableSavebtn(false);
  }
 }
 
  
   const handleSave=()=>{
axios
    .post(`http://13.48.30.130/accounts/loginInfo/`,{studentNo:localStorage.getItem("studentNo")})
    .then((res) => {
      console.log(res.data.logintime);
      localStorage.setItem("savedTime", res.data.logintime.toString());
    })
    .catch((err) => console.log(err));
    navigate('/animation');
   }
  return (
    <Box style={{overflow:"hidden"}}>
       <Grid container spacing={2} margin={5}>
        <Grid item xs={8}>
          <div className='instructionLeft'>
               <Card className='instruction_box'style={{backgroundColor:"transparent",boxShadow:"4px 4px 10px 0px #00000040"}}>
                  <div className='instruction_header'>
                  <p className='instruction_heading'>
                    Instructions
                    </p>
                  </div>
                  {arr.map((link, i) => (
                  <div style={{overflow:"scroll"}}>
                    <List className='instruction_list'>
                         <ListItemIcon className='listCircle'><Circle style={{fontSize:"10px",alignSelf:"center",color:"black",minWidth:"2vw",marginLeft:"2.5vw"}} /></ListItemIcon>
                        <ListItem className='listPoints' key={link.id}>{link.point}</ListItem>
                    </List>
                  </div>
                  ))}
               </Card>
               </div>
               <div>
               <Card className='confirm_box' style={{backgroundColor:"transparent",boxShadow:"4px 4px 10px 0px #00000040"}}>
                 <Typography style={{fontWeight:"bold",margin:"3vh"}}>I hereby confirm that I have read all the instructions and ready to begin my test. </Typography>
                 <div style={{margin:"5vh"}}>
                    <Typography style={{color:"lightgray",fontSize:"small",margin:"0.5vh"}}>Write START to start your exam</Typography>
                    <TextField style={{width:"15vw",height:"5vh",borderRadius:"7px",boxShadow:"4px 4px 10px 0px #00000040",justifyContent:"center",paddingLeft:"6vw"}}  variant="standard" type="text"
                    value={start}
                    onChange={handleInput}
                    disabled={!enabletextfield} 
 InputProps={{
        disableUnderline: true,
      }}/>
                 </div>
               </Card>
               </div>
               
        </Grid>
        <Grid item xs={3} className='instructionRight'>
        
<Card className='instruction_lang_box' style={{backgroundColor:"transparent",boxShadow:"4px 4px 10px 0px #00000040"}}>
<div className='language_btn'>
<FormControl style={{width:"20vw",backgroundColor:"rgba(167, 185, 244, 0.56)"}} >
        <InputLabel id="demo-simple-select-label" style={{fontWeight:"bold",color:"black"}}>Select a Language</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Language}
          label="Select a Language"
          onChange={handleChange}
          required
        >
          <MenuItem value="C">C</MenuItem>
          <MenuItem value="C++">C++</MenuItem>
          <MenuItem value="Java">Java</MenuItem>
          <MenuItem value="Python">Python</MenuItem>
        </Select>
      </FormControl>
</div> 
<div className='Save_btn'>
<Button variant="contained" disabled={!enableSavebtn} style={{height:"7vh",width:"20vw",fontWeight:"bold"}} color="success" onClick={handleSave}>
        Save & Next
      </Button>
</div>
</Card>
        </Grid>
       </Grid>
        
    </Box>
  )
}

export default Instruction
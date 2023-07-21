import { Circle, KeyboardArrowDown } from '@mui/icons-material';
import { Button, Card, List, ListItem, ListItemIcon, ListItemText, Menu, MenuItem, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import arr from '../../constants/InstructionContent';
import "./instruction.css"

const Instruction = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
    <>
        <div className='instructionPage'>
          <div className='instructionLeft'>
          <div className='instruction_box'>
               <Card>
                  <div className='instruction_header'>
                  <p className='instruction_heading'>
                    Instructions
                    </p>
                  </div>
                  {arr.map((link, i) => (
                  <div>
                    <List className='instruction_list'>
                         <ListItemIcon className='listCircle'><Circle style={{fontSize:"10px",alignSelf:"center",color:"black",minWidth:"2vw",marginLeft:"2.5vw"}} /></ListItemIcon>
                        <ListItem className='listPoints'>{link.point}</ListItem>
                    </List>
                  </div>
                  ))}
               </Card>
               </div>
               <div>
               <Card className='confirm_box'>
                 <Typography style={{fontWeight:"bold"}}>I hereby confirm that I have read all the instructions and ready to begin my test. </Typography>
                 <div>
                    <Typography style={{color:"lightgray",fontSize:"x-small"}}>Write START to start your exam</Typography>
                    <TextField />
                 </div>
               </Card>
               </div>
          </div>
          <div className='instructionRight'>
<Card className='instruction_lang_box'>
<div>
<div>
<Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant='contained'
        endIcon={<KeyboardArrowDown />}
        className='language_btn'
      >
        Select a Language
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>C</MenuItem>
        <MenuItem onClick={handleClose}>C++</MenuItem>
        <MenuItem onClick={handleClose}>Python</MenuItem>
        <MenuItem onClick={handleClose}>Java</MenuItem>
      </Menu>
</div>
<div>
<Button variant="contained" disabled>
        Save & Next
      </Button>
</div>
</div>
</Card>

          </div>
        </div>
        
    </>
  )
}

export default Instruction
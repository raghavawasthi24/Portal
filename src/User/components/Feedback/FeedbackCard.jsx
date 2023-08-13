import { Button, Typography } from '@mui/material'
import {Box } from '@mui/system'
import React, { useState } from 'react'
import "./FeedbackCard.css"

const FeedbackCard = (props) => {
   const [disable,setdisable]=useState(false)


  const selectEmojiFn = (e,i) =>{
    props.ondata(i)
    if(disable === false){
    e.target.style.opacity = "1"
    setdisable(true)}
    // else{
    //   e.target.style.opacity = "0.7"
    //   setdisable(false)
    // }
  }
   
  return (
//    <Box className="QuestionMain">
//         <Typography variant='h6' className='QuestionHead'>{props.question}</Typography>
//         <div className="emojiFlex">
   
//         <div>
//           <Button disabled={disable} onClick={(e)=>selectEmojiFn(e,1)}>
//           <img className="emoji" src="src\User\assets\Confounded face.png"></img>
         
//           </Button>

//         </div>
        
//         {/* <img className='emoji' src="src\User\assets\Confounded face.png"></img> */}

//     <Button disabled={disable} onClick={(e)=>selectEmojiFn(e,2)}>

//         <img className='emoji' src="src\User\assets\Disappointed face.svg" ></img>
       
//         </Button>
      
//         <Button disabled={disable} onClick={(e)=>selectEmojiFn(e,3)}>

//         <img className='emoji' src="src\User\assets\Good face.svg" ></img>
       

//         </Button>
    

//         <Button disabled={disable} onClick={(e)=>selectEmojiFn(e,4)}>
        
//         <img className='emoji' src="src\User\assets\Oh Yeah face.svg" ></img>
       

//         </Button>


//         </div>

// </Box>
<div className='w-1/3'>
  <div className='w-full' style={{display:"flex",flexDirection:"column"}}>
  <img className="emoji" src="src\User\assets\Confounded face.png"></img>
  <p>Poor</p>
  </div>
</div>
  )
}

export default FeedbackCard
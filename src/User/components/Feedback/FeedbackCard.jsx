import { Typography } from '@mui/material'
import {Box } from '@mui/system'
import React from 'react'
import "./FeedbackCard.css"

const FeedbackCard = (props) => {
   
  return (
   <Box className="QuestionMain">
        <Typography variant='h6' className='QuestionHead'>{props.question}</Typography>
        <Box className="emojiFlex">
        <Box>
        <img className='emoji' src="src\User\assets\Confounded face.svg"></img>
        <p className='emojiHead'>Poor</p>
        </Box>
        <Box>

        <img className='emoji' src="src\User\assets\Disappointed face.svg"></img>
        <p className='emojiHead'>Fair</p>
        </Box>
        <Box>

        <img className='emoji' src="src\User\assets\Good face.svg"></img>
        <p className='emojiHead'>Good</p>

        </Box>

        <Box>
        
        <img className='emoji' src="src\User\assets\Oh Yeah face.svg"></img>
        <p className='emojiHead'>Excellent</p>

        </Box>

        </Box>

</Box>
  )
}

export default FeedbackCard
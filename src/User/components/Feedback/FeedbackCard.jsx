import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import './FeedbackCard.css';

const FeedbackCard = (props) => {
  const [selectedEmoji, setSelectedEmoji] = useState(null);
 
  const emojis = [
    { label: 'Poor', src: "/Images/emoji1.svg", value: 'Bad' },
    { label: 'Fair', src: "/Images/emoji2.svg" , value: 'Good' },
    { label: 'Good', src: "/Images/emoji3.svg" , value: 'Very Good' },
    { label: 'Excellent', src: "/Images/emoji4.svg" , value: 'Excellent' },
  ];
  

  const selectEmoji = (emoji,index) => {
    if (selectedEmoji === null) {
      setSelectedEmoji(index);
      props.ondata({ question_id: props.ques_id, answer_text: emoji.value });
    }
  };

  return (
    <Box className="QuestionMain">
      <Typography variant="h6" className="QuestionHead">
        {props.question}
      </Typography>
      <Box className="emojiFlex">
        {emojis.map((emoji, index) => (
          <Button
            key={index}
            style={{ display: 'grid' }}
            disabled={selectedEmoji !== null}
            onClick={() => selectEmoji(emoji,index)}
            className={selectedEmoji === index ? "selectedEmoji" : "btn"}
          
          >
            <img className="emoji" src={emoji.src} alt={emoji.label} />
            <p className="emojiHead">{emoji.label}</p>
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default FeedbackCard;

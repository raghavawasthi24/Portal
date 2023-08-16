import { FormControl, OutlinedInput, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import "./FeedbackCard.css";

const FeedbackQues = (props) => {
  //  const [disable,setdisable]=useState(false)
  // const [Suggestions, setsuggestion] = useState();

  const textFn = (e) => {
    // props.ondata({"questionid":props.ques_id,"answer_text": e})

    if (e.target.value.trim().length) {
      e.target.style.border = "";
      e.target.style.borderRadius = "";
      // setsuggestion(e.target.value.trim());
      // setdisable(true)
    } else {
      e.target.style.border = " 4px solid red";
      e.target.style.borderRadius = " 15px";
    }
  };

  return (
    <Box className="QuestionMain">
      <Typography variant="h6" className="QuestionHead">
        {props.question}
      </Typography>
      <FormControl sx={{ width: "90%", margin: "0.5rem" }}>
        <OutlinedInput
          style={{ borderRadius: "15px" }}
          onChange={(e) => {
            textFn(e);
          }}
          onBlur={(e) =>
            props.ondata({
              question_id: props.ques_id,
              answer_text: e.target.value,
            })
            
          }
        />
      </FormControl>
    </Box>
  );
};

export default FeedbackQues;

import {
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { quesList } from "../../../store/slices/QuestionsSlice";

const Question = (props) => {
  const ques = props.ques;
  const dispatch=useDispatch();
  // const optionSet = ques.options;
  const data = useSelector((state) => state.prevNext);
  const quesData=useSelector(state=>state.quesList);
  useEffect(()=>{
    axios.get("https://csi-examportal.onrender.com/api/v1/getquestions")
    .then((res)=>{
      console.log(res)
      dispatch(quesList(res.data.msg))
    })
  },[])
  return (
    <div className="m-4 pl-3">
      <Typography variant="h6">Question {data.initialQues}</Typography>
      <Divider />
      <Typography variant="body">{quesData.initialQues[data.initialQues-1]?.question}</Typography>
      <br />
      <FormControl>
        <RadioGroup
          defaultValue=""
          name="radio-buttons-group"
          onChange={(e) => console.log(e.target.value)}
        >
          {quesData.initialQues[data.initialQues-1]?.options.map((option, id) => {
            return (
              <FormControlLabel
                value={option.ansId}
                control={<Radio />}
                label={option.name}
                key={id}
              />
            );
          })}

          {/* {console.log(quesData.initialQues)} */}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default Question;

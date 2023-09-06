import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import QuesControl from "../../components/QuesControl";
import CancelIcon from "@mui/icons-material/Cancel";
import { useDispatch } from "react-redux";
import { toggleQuestion } from "../../../store/slices/QuestionsSlice";
import { Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Chip from '@mui/material/Chip';


const Responses = () => {
  const dispatch = useDispatch();
  const closeResponses = () => {
    dispatch(toggleQuestion());
  };
  return (
    <div className="w-1/3 flex flex-col gap-2 mt-10 mx-auto bg-white p-5 rounded-lg shadow-md relative border-t-yellow-800">
      <CancelIcon
        className="absolute top-0 right-0 cursor-pointer"
        onClick={closeResponses}
      />
      <div className="flex justify-between items-center mt-5">
        <p className="font-semibold"> Question-1</p>
        <Chip label="correct" color="success" variant="outlined" />
      </div>
      <hr />
      <p>What is HTML Tag?</p>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>

      <div className="mt-8 text-green-700 font-semibold">
        <p>Correct Answer</p>
        <hr />
        <p>Right Anser</p>
      </div>

      <div className="flex justify-between my-4">
        <Button
          variant="text"
          sx={{ color: "black" }}
          // onClick={() => dispatch(prevQues(quesdata.initialQues))}
          startIcon={<ArrowBackIosNewIcon />}
        >
          PREV
        </Button>
        <Button
          variant="text"
          sx={{ color: "black" }}
          // onClick={() => dispatch(nextQues(quesdata.initialQues))}
          endIcon={<ArrowForwardIosIcon />}
        >
          NEXT
        </Button>
      </div>
    </div>
  );
};

export default Responses;

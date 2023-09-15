import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch } from "react-redux";
import { feedbacklist } from "../../../../../store/slices/FeedbackSlice";
import { toggleLoader } from "../../../../../store/slices/LoaderSlice";
// import {toggleEditOpt} from "../../../../../store/slices/EditContSlice"
// import CancelIcon from '@mui/icons-material/Cancel';

const AddFeedback = () => {
  let initialValues = {
    question: "",
    category: "",
  };

  const [formvalues, setFormvalues] = useState(initialValues);
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormvalues({ ...formvalues, [name]: value });
  };

  const addQues = () => {
    if (formvalues.question.trim() != "" && formvalues.category != "") {
      dispatch(toggleLoader(true));
      axios
        .post(
          `${import.meta.env.VITE_APP_DJANGO_URL}/feedback/add-f-question/`,
          [
            {
              question_text: formvalues.question.trim(),
              question_type: formvalues.category,
            },
          ]
        )
        .then((res) => {
          // console.log(res);
          toast.success("Question Saved Successfully");
          setFormvalues(initialValues);
          axios
            .get(
              `${import.meta.env.VITE_APP_DJANGO_URL}/feedback/get-f-question/`
            )
            .then((res) => {
              // console.log(res.data);
              // setFeedQues(res.data);
              dispatch(toggleLoader(false));
              dispatch(feedbacklist(res.data));
            });
        })
        .catch((err) => {
          dispatch(toggleLoader(false));
          console.error(err);
        });
    } else {
      toast.error("Please fill all details!");
    }
  };

  return (
    <div className="w-full absolute top-0 overflow-hidden right-0 flex justify-center">
      <div className="w-2/3 bg-white p-5 flex flex-col mt-10 ">
        <TextField
          id="outlined-multiline-flexible"
          label="Question"
          multiline
          rows={10}
          maxRows={4}
          placeholder="Write question for feedback ✍"
          value={formvalues.question}
          name="question"
          onChange={inputHandler}
          sx={{ margin: "1rem 0" }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={formvalues.category}
            label="Category"
            name="category"
            onChange={inputHandler}
          >
            <MenuItem value="emoji">Emoji</MenuItem>
            <MenuItem value="text">Text</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          sx={{
            width: "20%",
            margin: "0.8rem 0 0.8rem auto",
            padding: "0.5rem",
          }}
          endIcon={<SendIcon />}
          onClick={addQues}
        >
          Submit
        </Button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default AddFeedback;

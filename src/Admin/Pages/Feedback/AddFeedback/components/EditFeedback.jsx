import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useDispatch } from "react-redux";
import { toggleEditOpt } from "../../../../../store/slices/EditContSlice";
import CancelIcon from "@mui/icons-material/Cancel";
import { useSelector } from "react-redux";
import axios from "axios";

import { feedbacklist } from "../../../../../store/slices/FeedbackSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toggleLoader } from "../../../../../store/slices/LoaderSlice";


const EditFeedback = (props) => {
  let initialValues = {
    question: "",
    category: "",
  };

  const dispatch = useDispatch();
  const data = useSelector((state) => state.prevNext);
  const feedbakQues = useSelector((state) => state.feedback);
  const feedbackQuesNo = useSelector((state) => state.editShow);
  const loader=useSelector(state=>state.loader.loader)

  const [formvalues, setFormvalues] = useState(feedbakQues.initial);
  const [id, setId] = useState();

  useEffect(() => {
    console.log(
      feedbakQues.initial[feedbackQuesNo.initialQues],
      feedbackQuesNo.initialQues
    );
    initialValues.question = props.feedQues.question;
    initialValues.category = props.feedQues.type;
    setFormvalues(initialValues);
  }, [props.feedQues.question]);

  const updateQues = () => {
    if (formvalues.question.trim() != "" && formvalues.category.trim() != "") {
      dispatch(toggleLoader(true))
      axios
        .patch(
          `${import.meta.env.VITE_APP_DJANGO_URL}/feedback/questionRUD/${
            props.feedQues.id
          }`,
          {
            question_text: formvalues.question.trim(),
            question_type: formvalues.category,
          }
        )
        .then((res) => {
          console.log(res);
          axios
            .get(
              `${import.meta.env.VITE_APP_DJANGO_URL}/feedback/get-f-question/`
            )
            .then((res) => {
              console.log(res.data);
              toast.success("Question Edited Successfully")
              // setFeedQues(res.data);
              dispatch(toggleLoader(false))
              dispatch(feedbacklist(res.data));
            });
        });
    } else toast.error("Please Fill Details");
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormvalues({ ...formvalues, [name]: value });
  };
  return (
    <div className="w-full absolute top-0 overflow-hidden right-0 flex justify-center">
      <div
        className="flex flex-col w-2/3 m-auto mt-8 p-5 rounded bg-white"
        style={{ boxShadow: "1px 1px 5px grey" }}
      >
        <CancelIcon
          onClick={() => dispatch(toggleEditOpt())}
          className="self-end"
          style={{ cursor: "pointer" }}
        />
        {/* {
        console.log(feedbakQues,data)
      } */}
        <TextField
          id="outlined-multiline-flexible"
          label="Question"
          multiline
          rows={7}
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
            defaultValue={formvalues.category}
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
          variant="outlined"
          sx={{ width: "8rem", margin: "0.8rem auto" }}
          endIcon={<SendIcon />}
          onClick={updateQues}
        >
          Update
        </Button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default EditFeedback;

import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../../../../Loader/Loader";
import { toggleLoader } from "../../../../../store/slices/LoaderSlice";


const Question = () => {
  let initialValues = {
    question: "",
    opt1: "",
    opt2: "",
    opt3: "",
    opt4: "",
    correctAns: "",
  };

  const [formvalues, setFormvalues] = useState(initialValues);
  const [count, setCount] = useState(1);
  const [ctg, setCtg] = useState("");
  const [firstCount,setFirstCount]=useState(true)
  const dispatch=useDispatch()

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormvalues({ ...formvalues, [name]: value });
    // console.log(formvalues);
  };

  const dropdownData = useSelector((state) => state.quesList);
  useEffect(() => {
    setCtg(dropdownData.quesCategory);
    // console.log(dropdownData.quesCategory);
    dispatch(toggleLoader(true))
    axios
      .get(
        `${import.meta.env.VITE_APP_NODE_URL}/counts?category=${
          dropdownData.quesCategory
        }`
      )
      .then((res) => {
        // console.log(res)
        // console.log(res.data.msg.categoryResponse[res.data.msg.categoryResponse.length-1].count)
        // console.log(res.data.msg.categoryResponse.length-1)
        dispatch(toggleLoader(false))
        if (res.data.msg.count.length != 0)
          setCount(
            res.data.msg.count[
              res.data.msg.count.length - 1
            ].count + 1
          );
        else setCount(1);
      })
      .catch((err) => {
        // console.log(err);
        dispatch(toggleLoader(false))
      });
  }, [dropdownData.quesCategory]);

  useEffect(() => {
      if(firstCount){
        setFirstCount(false)
        return
      }
      if (
        formvalues.question.trim() != "" &&
        formvalues.opt1.trim() != "" &&
        formvalues.opt2.trim() != "" &&
        formvalues.opt3.trim() != "" &&
        formvalues.opt4.trim() != "" &&
        formvalues.correctAns.trim() != ""
      ) {
        dispatch(toggleLoader(true))
        axios
          .post(`${import.meta.env.VITE_APP_NODE_URL}/addquestions`, {
            question: formvalues.question.trim(),
            category: ctg,
            correctId: formvalues.correctAns,
            quesId: `${ctg}` + `${count}`,
            options: [
              {
                name: formvalues.opt1.trim(),
                ansId: `${ctg}` + `${count}` + 1,
              },
              {
                name: formvalues.opt2.trim(),
                ansId: `${ctg}` + `${count}` + 2,
              },
              {
                name: formvalues.opt3.trim(),
                ansId: `${ctg}` + `${count}` + 3,
              },
              {
                name: formvalues.opt4.trim(),
                ansId: `${ctg}` + `${count}` + 4,
              },
            ],
          })
          .then((res) => {
            // console.log(res);
            setCount(count + 1);
            toast.success("Question saved successfully");
            dispatch(toggleLoader(false))
            setFormvalues(initialValues);
          })
          .catch(() => {
            dispatch(toggleLoader(false))
            toast.error("Question Already Exits");
            // alert(err)
          });
      } else toast.error("Please fill all deatils");
    
  }, [dropdownData.submitQuestion]);

  return (
    <div className="flex flex-col">
      <TextField
        id="outlined-multiline-flexible"
        label="Question"
        multiline="true"
        maxRows={4}
        value={formvalues.question}
        name="question"
        onChange={inputHandler}
        variant="standard"
        sx={{ margin: "1rem 0" }}
      />

      <TextField
        id="outlined-multiline-flexible"
        label="Option 1"
        multiline
        maxRows={4}
        sx={{ margin: "1rem 0", width: "50%" }}
        value={formvalues.opt1}
        name="opt1"
        variant="standard"
        onChange={inputHandler}
      />
      <TextField
        id="outlined-multiline-flexible"
        label="Option 2"
        multiline
        maxRows={4}
        sx={{ margin: "1rem 0", width: "50%" }}
        value={formvalues.opt2}
        name="opt2"
        variant="standard"
        onChange={inputHandler}
      />
      <TextField
        id="outlined-multiline-flexible"
        label="Option 3"
        multiline
        maxRows={4}
        sx={{ margin: "1rem 0", width: "50%" }}
        value={formvalues.opt3}
        name="opt3"
        variant="standard"
        onChange={inputHandler}
      />
      <TextField
        id="outlined-multiline-flexible"
        label="Option 4"
        multiline
        maxRows={4}
        sx={{ margin: "1rem 0", width: "50%" }}
        value={formvalues.opt4}
        name="opt4"
        variant="standard"
        onChange={inputHandler}
      />

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" variant="standard">
          Correct Option
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={formvalues.correctAns}
          name="correctAns"
          label="Correct Option"
          sx={{ margin: "1rem 0", width: "50%" }}
          onChange={inputHandler}
          variant="standard"
        >
          <MenuItem value={`${ctg}` + `${count}` + 1}>
            {formvalues.opt1}
          </MenuItem>
          <MenuItem value={`${ctg}` + `${count}` + 2}>
            {formvalues.opt2}
          </MenuItem>
          <MenuItem value={`${ctg}` + `${count}` + 3}>
            {formvalues.opt3}
          </MenuItem>
          <MenuItem value={`${ctg}` + `${count}` + 4}>
            {formvalues.opt4}
          </MenuItem>
        </Select>
      </FormControl>

      <ToastContainer />
    </div>
  );
};

export default Question;

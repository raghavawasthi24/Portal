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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { toggleLoader } from "../../../../../store/slices/LoaderSlice";
import Loader from "../../../../../Loader/Loader";

const EditQuestion = () => {
  let initialValues = {
    question: "",
    opt1: "",
    opt2: "",
    opt3: "",
    opt4: "",
    correctAns: "",
    category: "",
  };

  const techArr = [
    {
      value: "HTML",
      label: "HTML",
    },
    {
      value: "CSS",
      label: "CSS",
    },
    {
      value: "JavaScript",
      label: "JavaScript",
    },
    {
      value: "Aptitude",
      label: "Aptitude",
    },
    {
      value: "Sql",
      label: "SQL",
    },
    {
      value: "C",
      label: "C",
    },
    {
      value: "Cpp",
      label: "C++",
    },
    {
      value: "Java",
      label: "Java",
    },
    {
      value: "Python",
      label: "Python",
    },
  ];

  const dispatch = useDispatch();
  const data = useSelector((state) => state.prevNext);
  const questionDisplay = useSelector((state) => state.quesList);
  const loader = useSelector((state) => state.loader.loader);

  const [value1, setvalue1] = useState([]);
  // const [value2,setvalue2]=useState();
  // const [value3,setvalue3]=useState();
  // const [value4,setvalue4]=useState();

  const [formvalues, setFormvalues] = useState(
    questionDisplay?.initialQues[questionDisplay.initialQuesNo - 1]
  );

  useEffect(() => {
    // console.log(questionDisplay.initialQues[questionDisplay.initialQuesNo - 1]);
    initialValues.question =
      questionDisplay?.initialQues[questionDisplay.initialQuesNo - 1]?.question;
    initialValues.opt1 =
      questionDisplay?.initialQues[
        questionDisplay.initialQuesNo - 1
      ]?.options[0].name;
    initialValues.opt2 =
      questionDisplay?.initialQues[
        questionDisplay.initialQuesNo - 1
      ]?.options[1].name;
    initialValues.opt3 =
      questionDisplay?.initialQues[
        questionDisplay.initialQuesNo - 1
      ]?.options[2].name;
    initialValues.opt4 =
      questionDisplay?.initialQues[
        questionDisplay.initialQuesNo - 1
      ]?.options[3].name;
    initialValues.category = questionDisplay.quesCategory;

    let options =
      questionDisplay?.initialQues[questionDisplay.initialQuesNo - 1]?.options;
    let correctId =
      questionDisplay?.initialQues[questionDisplay.initialQuesNo - 1]
        ?.correctId;
    let index = options?.findIndex((x) => x.ansId == correctId);

    initialValues.correctAns = options[index]?.name;
    setFormvalues(initialValues);
  }, [
    questionDisplay.initialQues[questionDisplay.initialQuesNo - 1]?.question,
  ]);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormvalues({ ...formvalues, [name]: value });
  };

  const updateQues = () => {
    if (
      formvalues.question.trim() != "" &&
      formvalues.opt1.trim() != "" &&
      formvalues.opt2.trim() != "" &&
      formvalues.opt3.trim() != "" &&
      formvalues.opt4.trim() != "" &&
      formvalues.correctAns.trim() != ""
    ) {
      let arr = [
        formvalues.opt1,
        formvalues.opt2,
        formvalues.opt3,
        formvalues.opt4,
      ];
      let options =
        questionDisplay?.initialQues[questionDisplay.initialQuesNo - 1]
          ?.options;
      let correctId =
        questionDisplay?.initialQues[questionDisplay.initialQuesNo - 1]
          ?.correctId;
      let index = arr.indexOf(formvalues.correctAns);
      // console.log(index, options[index].ansId);
      // initialValues.correctAns=options[index].name

      // console.log(formvalues);
      dispatch(toggleLoader(true));
      axios
        .patch(
          `${import.meta.env.VITE_APP_NODE_URL}/updatequestion/${
            questionDisplay.initialQues[questionDisplay.initialQuesNo - 1]._id
          }`,
          {
            question: formvalues.question.trim(),
            category: formvalues.category,
            correctId: options[index].ansId,
            quesId:
              questionDisplay.initialQues[questionDisplay.initialQuesNo - 1]
                ?.quesId,
            options: [
              {
                name: formvalues.opt1.trim(),
                ansId:
                  questionDisplay.initialQues[questionDisplay.initialQuesNo - 1]
                    .options[0].ansId,
              },
              {
                name: formvalues.opt2.trim(),
                ansId:
                  questionDisplay.initialQues[questionDisplay.initialQuesNo - 1]
                    .options[1].ansId,
              },
              {
                name: formvalues.opt3.trim(),
                ansId:
                  questionDisplay.initialQues[questionDisplay.initialQuesNo - 1]
                    .options[2].ansId,
              },
              {
                name: formvalues.opt4.trim(),
                ansId:
                  questionDisplay.initialQues[questionDisplay.initialQuesNo - 1]
                    .options[3].ansId,
              },
            ],
          }
        )
        .then((res) => {
          // console.log(res);
          toast.success("Question updated successfully");
          dispatch(toggleLoader(false));
          // setTimeout(() => {
          //   window.location.reload();
          // }, 5000);
        })
        .catch(() => {
          toast.error("Something went wrong!");
        });
    } else {
      toast.error("Invalid fields!");
    }
  };
  return (
    <div
      className="flex flex-col w-2/3 m-auto p-5 rounded bg-white"
      style={{ boxShadow: "1px 1px 5px grey" }}
    >
      <CancelIcon
        onClick={() => dispatch(toggleEditOpt())}
        className="self-end"
        style={{ cursor: "pointer" }}
      />
      <TextField
        id="standard-multiline-flexible"
        label="Question"
        multiline
        maxRows={4}
        value={formvalues?.question}
        name="question"
        onChange={inputHandler}
        variant="standard"
        sx={{ margin: "0.8rem 0" }}
      />
      <div className="flex justify-between">
        <TextField
          id="standard-multiline-flexible"
          label="Option 1"
          multiline
          maxRows={4}
          sx={{ width: "45%", margin: "0.8rem 0" }}
          value={formvalues?.opt1}
          name="opt1"
          onChange={inputHandler}
          variant="standard"
        />
        <TextField
          id="standard-multiline-flexible"
          label="Option 2"
          multiline
          maxRows={4}
          sx={{ width: "45%", margin: "0.8rem 0" }}
          value={formvalues?.opt2}
          name="opt2"
          onChange={inputHandler}
          variant="standard"
        />
      </div>
      <div className="flex justify-between">
        <TextField
          id="standard-multiline-flexible"
          label="Option 3"
          multiline
          maxRows={4}
          sx={{ width: "45%", margin: "0.8rem 0" }}
          value={formvalues?.opt3}
          name="opt3"
          onChange={inputHandler}
          variant="standard"
        />
        <TextField
          id="standard-multiline-flexible"
          label="Option 4"
          multiline
          maxRows={4}
          sx={{ width: "45%", margin: "0.8rem 0" }}
          value={formvalues?.opt4}
          name="opt4"
          onChange={inputHandler}
          variant="standard"
        />
      </div>
      <div className="flex justify-between">
        <FormControl sx={{ width: "45%", margin: "0.8rem 0" }}>
          <InputLabel id="demo-simple-select-label" variant="standard">
            Correct Option
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={formvalues.correctAns}
            name="correctAns"
            label="Correct Option"
            onChange={inputHandler}
            variant="standard"
          >
            <MenuItem value={formvalues?.opt1}>{formvalues?.opt1}</MenuItem>
            <MenuItem value={formvalues?.opt2}>{formvalues?.opt2}</MenuItem>
            <MenuItem value={formvalues?.opt3}>{formvalues?.opt3}</MenuItem>
            <MenuItem value={formvalues?.opt4}>{formvalues?.opt4}</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: "45%", margin: "0.8rem 0" }}>
          <InputLabel id="demo-simple-select-label" variant="standard">
            Category
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={formvalues?.category}
            name="category"
            label="Category"
            onChange={inputHandler}
            variant="standard"
          >
            {techArr.map((item, index) => {
              return (
                <MenuItem value={item.value} key={index}>
                  {item.label}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>
      <Button
        variant="outlined"
        sx={{ width: "8rem", margin: "0.8rem auto" }}
        endIcon={<SendIcon />}
        onClick={updateQues}
      >
        Update
      </Button>
      <ToastContainer />
    </div>
  );
};

export default EditQuestion;

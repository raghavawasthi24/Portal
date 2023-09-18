import {
  FormControlLabel,
  RadioGroup,
  FormControl,
  Radio,
} from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import EditQuestion from "./EditQuestion";
import { useDispatch } from "react-redux";
import { toggleEditOpt } from "../../../../../store/slices/EditContSlice";
import { quesList, prevQues } from "../../../../../store/slices/QuestionsSlice";
import axios from "axios";
import { useState } from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { LineWave } from "react-loader-spinner";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GetQuestions = () => {
  const category = useSelector((state) => state.quesList.quesCategory);
  const questionDisplay = useSelector((state) => state.quesList);
  const showEdit = useSelector((state) => state.editShow);
  const [correctAns, setCorrectAns] = useState();
  const dispatch = useDispatch();
  const [circleLoader, setCircleLoader] = useState(true);
  const [question,setQuestion]=useState("")

  useEffect(() => {
    setCircleLoader(true);
    axios
      .get(`${import.meta.env.VITE_APP_NODE_URL}/category/${category}`)
      // .get(`${import.meta.env.VITE_APP_NODE_URL}/getquestions`)
      .then((res) => {
        // console.log(res)
        dispatch(quesList(res.data.msg));
        // setLoading(false);
        setCircleLoader(false);
      })
      .catch((err) => {
        console.error(err);
        setCircleLoader(false);
        // setLoading(false);
        dispatch(
          quesList([
            {
              question: "N/A",
              category: "N/A",
              quesId: "N/A",
              options: [
                { name: "N/A", ansId: "N/A" },
                { name: "N/A", ansId: "N/A" },
                { name: "N/A", ansId: "N/A" },
                { name: "N/A", ansId: "N/A" },
              ],
              correctId: "N/A",
              _id: "N/A",
            },
          ])
        );
        toast.error("No Questions is this Category");
      });
  }, [category]);

  useEffect(() => {
    // console.log(
    //   questionDisplay?.initialQues[questionDisplay.initialQuesNo - 1]
    // );
    // let question=questionDisplay?.initialQues[questionDisplay.initialQuesNo - 1]?.queston;
    // question = question.replace(/\n/g, '<br />');
    let options =
      questionDisplay?.initialQues[questionDisplay.initialQuesNo - 1]?.options;
    let correctId =
      questionDisplay?.initialQues[questionDisplay.initialQuesNo - 1]
        ?.correctId;
    let index = options?.findIndex((x) => x.ansId == correctId);
    // console.log(index, options);
    setCorrectAns(options[index]?.name);
  }, [
    questionDisplay?.initialQues[questionDisplay.initialQuesNo - 1]?.question,
  ]);

  const delQuestion = (id) => {
    setCircleLoader(true);
    axios
      .delete(`${import.meta.env.VITE_APP_NODE_URL}/deletequestions/${id}`)
      .then(() => {
        //   console.log(res)
        dispatch(prevQues());

        toast.success("Question deleted successfully");
        axios
          .get(`${import.meta.env.VITE_APP_NODE_URL}/category/${category}`)
          .then((res) => {
            //   console.log(res)
            setCircleLoader(false);
            dispatch(quesList(res.data.msg));
          })
          .catch((err) => {
            setCircleLoader(false);
            dispatch(
              quesList([
                {
                  question: "N/A",
                  category: "N/A",
                  quesId: "N/A",
                  options: [
                    { name: "N/A", ansId: "N/A" },
                    { name: "N/A", ansId: "N/A" },
                    { name: "N/A", ansId: "N/A" },
                    { name: "N/A", ansId: "N/A" },
                  ],
                  correctId: "N/A",
                  _id: "N/A",
                },
              ])
            );
            // toast.error("No Questions is this Category");
          });
        // dispatch(feedbacklist(res.data))
      });
  };

  return (
    <>
      <div
        className={
          circleLoader ? "h-full flex justify-center items-center" : "hidden"
        }
      >
        <LineWave
          height="100"
          width="100"
          color="#2153F9"
          ariaLabel="line-wave"
          wrapperStyle={{}}
          wrapperClass=""
          firstLineColor=""
          middleLineColor=""
          lastLineColor=""
        />
      </div>

      <div
        className={
          circleLoader ? "hidden" : "p-10 flex flex-col justify-between h-full"
        }
      >
        <div className="">
          <div className="flex justify-between my-3">
            <p>Question-{questionDisplay?.initialQuesNo}</p>
            <div>
              <ModeEditOutlinedIcon
                sx={{ cursor: "pointer" }}
                onClick={() => dispatch(toggleEditOpt())}
                style={{ cursor: "pointer" }}
              />
              <DeleteOutlineOutlinedIcon
                sx={{ color: "#f95959", marginLeft: "1rem", cursor: "pointer" }}
                onClick={() => {
                  delQuestion(
                    questionDisplay.initialQues[
                      questionDisplay?.initialQuesNo - 1
                    ]?._id
                  );
                }}
              />
            </div>
          </div>
          <hr />
          <p>
            {/* {
              questionDisplay?.initialQues[questionDisplay?.initialQuesNo - 1]
                ?.question
            } */}
            {
              questionDisplay?.initialQues[questionDisplay?.initialQuesNo - 1]
              ?.question.split('\n').map(function( item, idx) {
                return (
                    <span key={idx}>
                      {item}
                      <br/>
                    </span>
                )
              })
            }
          </p>

          <FormControl>
            <RadioGroup>
              {questionDisplay?.initialQues[
                questionDisplay.initialQuesNo - 1
              ]?.options.map((item, key) => {
                return (
                  <FormControlLabel
                    key={key}
                    checked={item.name === correctAns}
                    value={item}
                    control={<Radio />}
                    label={item.name}
                  />
                );
              })}
              {/* <FormControlLabel value="HTML11" checked control={<Radio/>} label="HTML11"/> */}
            </RadioGroup>
          </FormControl>
        </div>
        <div className="text-[#097309] font-bold">
          <p>Correct Answer</p>
          <hr />
          <p>{correctAns}</p>
        </div>

        <div
          className={
            showEdit.initialValue
              ? "absolute top-6 start-0 w-full z-10"
              : "hide"
          }
        >
          <EditQuestion />
        </div>

        <ToastContainer />
      </div>
    </>
  );
};

export default GetQuestions;

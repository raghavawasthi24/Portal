import {
  FormControlLabel,
  FormLabel,
  RadioGroup,
  FormControl,
  Radio,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
// import EditQuestion from './EditFeedback';
import { useDispatch } from "react-redux";
import { toggleEditOpt } from "../../../../../store/slices/EditContSlice";
// import EditFeedback from './EditFeedback';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { feedbacklist } from "../../../../../store/slices/FeedbackSlice";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const Feedback = () => {
  const [feedbackList, setFeedbackList] = useState([]);
  const [localVar, setLocalVar] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_DJANGO_URL}/accounts/feedback-response/`)
      .then((res) => {
        // console.log(res);
        setFeedbackList(res.data);
        setLocalVar(res.data);
      });
  }, []);

  const inputHandler = (e) => {
    // console.log(e.target.value, search, feedbackList);
    setSearch(e.target.value);
    if (e.target.value == "") setFeedbackList(localVar);
    else
      setFeedbackList(
        localVar.filter((state) => state.studentNo == e.target.value)
      );
  };

  return (
    <div className="w-[90%] h-[85%]">
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 300 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Enter Student No"
          inputProps={{ "aria-label": "search google maps" }}
          value={search}
          onChange={inputHandler}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>

      <div className=" h-[85%] flex flex-col overflow-y-scroll border-2 mt-2">
        {feedbackList?.map((response, index) => {
          return (
            <div className="border p-5">
              <p className="font-400">
                Student No :{" "}
                <span className="text-green-500">{response.studentNo}</span>
              </p>
              {response.responses?.map((item, index) => {
                return (
                  <div className="flex">
                    <p className="mr-2 font-bold">{item.question_text}</p>
                    <p>{item.answer_text}</p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      <ToastContainer />
    </div>
  );
};

export default Feedback;

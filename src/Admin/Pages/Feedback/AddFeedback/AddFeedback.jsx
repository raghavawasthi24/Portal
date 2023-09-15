import React, { useState } from "react";
import Feedback from "./components/Feedback";
import Header from "../../../components/Header";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import EditFeedback from "./components/EditFeedback";
import { useDispatch, useSelector } from "react-redux";
import { toggleEditOpt } from "../../../../store/slices/EditContSlice";
import Loader from "../../../../Loader/Loader";
import { feedbacklist } from "../../../../store/slices/FeedbackSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toggleLoader } from "../../../../store/slices/LoaderSlice";

const AddFeedback = () => {
  const navigate = useNavigate();
  const [feedQues, setFeedQues] = useState([]);
  const [open, setOpen] = useState(false);
  const [editable, setEditable] = useState({});
  // const [loader, setLoader] = useState(false);
  // const [edit,setEdit]=useState(false)

  const edit = useSelector((state) => state.editShow.initialValue);
  const editQues = useSelector((state) => state.feedback.initial);
  const loader = useSelector((state) => state.loader.loader);
  // console.log(editQues);
  const dispatch = useDispatch();

  useEffect(() => {
    const check = Cookies.get("apage7");
    if (!check) {
      navigate("/login");
    }
    dispatch(toggleLoader(true));
    axios
      .get(`${import.meta.env.VITE_APP_DJANGO_URL}/feedback/get-f-question/`)
      .then((res) => {
        // console.log(res.data);
        setFeedQues(res.data);
        dispatch(toggleLoader(false));
        dispatch(feedbacklist(res.data));
      })
      .catch(() => {
        toast.error("Someting went wrong");
        dispatch(toggleLoader(false));
      });
  }, []);

  const editQuestion = (id, question, type) => {
    setEditable({
      id: id,
      question: question,
      type: type,
    });
    dispatch(toggleEditOpt());
  };

  const delFeedback = (id) => {
    dispatch(toggleLoader(true));
    axios
      .delete(
        `${import.meta.env.VITE_APP_DJANGO_URL}/feedback/questionRUD/${id}`
      )
      .then((res) => {
        if (res.status === 204) {
          // console.log(res);
          toast.success("Question deleted successfully");
          axios
            .get(
              `${import.meta.env.VITE_APP_DJANGO_URL}/feedback/get-f-question/`
            )
            .then((res) => {
              // console.log(res);
              setFeedQues(res.data);
              dispatch(feedbacklist(res.data));
              dispatch(toggleLoader(false));
            })
            .catch(() => {
              toast.error("Someting went wrong");
              dispatch(toggleLoader(false));
            });
        }
        // dispatch(feedbacklist(res.data))
      })
      .catch(() => {
        toast.error("Someting went wrong");
        dispatch(toggleLoader(false));
      });
  };
  return (
    <div className="">
      <Header />
      <div className="w-[90%] mx-auto" style={{ marginTop: "7rem" }}>
        <div className="grid grid-cols-3 gap-10">
          {editQues?.map((val, index) => {
            return (
              <div className="border p-3 rounded-xl shadow-xl border-xl">
                <div className="flex justify-between">
                  <p>Question: {index + 1}</p>
                  <div>
                    <ModeEditOutlinedIcon
                      sx={{
                        color: "grey",
                        marginRight: "5px",
                        cursor: "pointer",
                      }}
                      onClick={(e) => {
                        editQuestion(
                          val.id,
                          val.question_text,
                          val.question_type
                        );
                      }}
                    />
                    <DeleteOutlineOutlinedIcon
                      sx={{ color: "#f95959", cursor: "pointer" }}
                      onClick={(e) => {
                        delFeedback(val.id);
                      }}
                    />
                  </div>
                </div>
                <hr className="my-1" />
                <div className="h-[60px]">{val.question_text}</div>
                <p>Category : {val.question_type}</p>
              </div>
            );
          })}
        </div>

        <div style={{ display: open ? "block" : "none" }}>
          <Feedback />
        </div>
        <div style={{ display: edit ? "block" : "none" }}>
          <EditFeedback feedQues={editable} />
        </div>

        <div
          style={{ display: open ? "block" : "none" }}
          onClick={(e) => {
            setOpen(false);
          }}
        >
          <Box
            sx={{
              "& > :not(style)": { m: 1 },
              position: "absolute",
              bottom: "3rem",
              right: "5rem",
            }}
          >
            <Fab color="primary" aria-label="add">
              <CloseIcon />
            </Fab>
          </Box>
        </div>
        <div
          style={{ display: open ? "none" : "block" }}
          onClick={(e) => {
            setOpen(true);
          }}
        >
          <Box
            sx={{
              "& > :not(style)": { m: 1 },
              position: "absolute",
              bottom: "3rem",
              right: "5rem",
            }}
          >
            <Fab color="primary" aria-label="close">
              <AddIcon />
            </Fab>
          </Box>
        </div>
      </div>
      <div
        className="absolute top-0"
        style={{ marginLeft: "-2rem", display: loader ? "" : "none" }}
      >
        <Loader />
      </div>
    </div>
  );
};

export default AddFeedback;

import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Responses from "./Responses";
import { useDispatch, useSelector } from "react-redux";
import { toggleEditOpt } from "../../../store/slices/EditContSlice";
import axios from "axios";
import {
  findResponse,
  uploadResponse,
} from "../../../store/slices/ResponseSlice";
import Cookies from "js-cookie";
import updateCookies from "../../utils/updateCookies";
import Loader from "../../../Loader/Loader";
// import Trophy from "../../../../public/Images/trophy-star"

const LeaderBoard = () => {
  const [students, setStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Number of items per page
  const navigate = useNavigate();
  const [responseData, setResponseData] = useState([]);
  const [filterText, setFilterText] = useState(""); // State variable to store the filter text
  const [filteredStudents, setFilteredStudents] = useState([]); // State variable to store filtered students
  const [loader, setLoader] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    const check = Cookies.get("apage4");
    if (!check) {
      navigate("/login");
    }
  }, []);

  //SOCKET.io

  useEffect(() => {
    setLoader(true);
    const socket = io.connect(`${import.meta.env.VITE_APP_SOCKET_API}`, {
      transports: ["websocket"],
    });

    axios
      .get(`${import.meta.env.VITE_APP_NODE_URL}/getquestions`)
      .then((res) => {
        setLoader(false);
        setResponseData(res.data.msg);
        dispatch(findResponse(res.data.msg));
      });

    socket.on("leaderboard", (data) => {
      // console.log(data);
      setStudents(data);
    });

    socket.on("connect_error", (error) => {
      // console.error("Socket connection error:", error);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  // Calculate the start and end indices for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentStudents =
    filterText === ""
      ? students.slice(startIndex, endIndex)
      : filteredStudents.slice(startIndex, endIndex);
  const totalPages = Math.ceil(
    (filterText === "" ? students.length : filteredStudents.length) /
      itemsPerPage
  );

  const openResponses = (studentNo) => {
    axios
      .get(`${import.meta.env.VITE_APP_NODE_URL}/responses/ques/${studentNo}`)
      .then((res) => {
        // console.log(res.data.questions)
        dispatch(uploadResponse(res.data.questions));
        dispatch(findResponse(responseData));
      });
    dispatch(toggleEditOpt());
  };

  const handleFilter = (e) => {
    setFilterText(e.target.value);
    const filtered = students.filter((student) =>
      student.studentNo.includes(e.target.value)
    );
    setFilteredStudents(filtered);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-between min-h-screen">
        <div className="absolute" style={{ top: "3rem", left: "3rem" }}>
          <ArrowBackIcon
            sx={{
              width: "3rem",
              height: "3rem",
              color: "rgba(84, 59, 160, 1)",
              cursor: "pointer",
            }}
            onClick={() => {
              updateCookies(1), navigate("/admin");
            }}
          />
        </div>
        <div className="absolute" style={{ top: "3rem", right: "3rem" }}>
          <input
            type="text"
            placeholder="Filter by Student Number"
            value={filterText}
            onChange={(e) => handleFilter(e)}
            className="p-1 outline-none border"
          />
        </div>
        <div className="p-4 mt-5">
          <h1 className="font-sans font-bold text-3xl text-center mb-5 tracking-widest whitespace-pre text-leaderboardColor">
            Leader Board
          </h1>
          <div className="mx-auto">
            <TableContainer
              component={Paper}
              sx={{
                width: "50rem",
                backgroundColor: "rgba(255, 255, 255, 0.489)",
              }}
            >
              <Table>
                <TableHead sx={{ backgroundColor: "rgba(242, 241, 252, 1)" }}>
                  <TableRow>
                    <TableCell className="w-[50px]"></TableCell>
                    <TableCell sx={{ textAlign: "center", width: "30px" }}>
                      Rank
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      Student Number
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      Student Name
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      Total Score
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {currentStudents.map((student, index) => (
                    <TableRow
                      key={index}
                      onClick={(e) => openResponses(student.studentNo)}
                      className="cursor-pointer"
                    >
                      <TableCell className="w-[50px]">
                        {Array.prototype.findIndex.call(
                          students,
                          (x) => x.studentNo == student.studentNo
                        ) == 0 ? (
                          <img
                            src="Images/trophy-star.png"
                            className="w-4 h-4 mr-2"
                          />
                        ) : (
                          ""
                        )}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {Array.prototype.findIndex.call(
                          students,
                          (x) => x.studentNo == student.studentNo
                        ) + 1}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {student.studentNo}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {student.name}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {student.calculatedTotalScore}
                      </TableCell>
                      <TableCell>
                        <ArrowRightIcon />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
        <div className="flex items-center justify-center my-7">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ArrowBackIcon />
          </button>
          <span className="mx-2">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ArrowForwardIcon />
          </button>
        </div>
        {/* Include your Tabtable component here */}
        <div
          style={{
            display:
              useSelector((state) => state.editShow.initialValue) == 0
                ? "none"
                : "block",
          }}
        >
          <div
            className="w-screen h-screen absolute top-0 right-0 overflow-hidden z-99"
            style={{ backgroundColor: " #fafafa7a" }}
          >
            <Responses />
          </div>
        </div>
      </div>
      <div
        className="absolute top-0"
        style={{ marginLeft: "-2rem", display: loader ? "" : "none" }}
      >
        <Loader />
      </div>
    </>
  );
};

export default LeaderBoard;

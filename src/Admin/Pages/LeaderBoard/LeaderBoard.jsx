import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';
import { useNavigate } from "react-router-dom";

import Tabtable from "./Tabtable";
// import Header from "../../components/Header/Header";

const LeaderBoard = () => {
  const students = [
    { Rank: 1, Name: "Shipra", Number: "2113129" },
    { Rank: 2, Name: "Ishu", Number: "2332323" },
    { Rank: 3, Name: "Raghav", Number: "2110159" },
    { Rank: 4, Name: "Shipra", Number: "2113129" },
    { Rank: 5, Name: "Shipra", Number: "2113129" },
    { Rank: 6, Name: "Shipra", Number: "2113129" },
    { Rank: 7, Name: "Shipra", Number: "2113129" },
    { Rank: 8, Name: "Shipra", Number: "2113129" },
    { Rank: 9, Name: "Shipra", Number: "2113129" },
    { Rank: 10, Name: "Shipra", Number: "2113129" },
  ];
  const navigate=useNavigate();

  return (
    <div className="flex flex-col items-center justify-between min-h-screen">
       <div className="absolute" style={{top:"3rem",left:"3rem"}}>
        <ArrowCircleUpRoundedIcon sx={{width:"3rem",height:"3rem",rotate:"270deg",color:"rgba(84, 59, 160, 1)"}} onClick={()=>navigate("/admin")}/>
       </div>
      <div className="p-4 mt-5">
        <h1 className=" font-sans font-bold text-3xl text-center mb-5  tracking-widest  whitespace-pre  text-leaderboardColor ">
          Leader Board
        </h1>
        <div className=" mx-auto">
          <TableContainer component={Paper} sx={{ width: "50rem" }}>
            <Table>
              <TableHead>
                <TableRow className="bg-blue-200">
                  <TableCell>Rank</TableCell>
                  <TableCell>Student Name</TableCell>
                  <TableCell>Student Number</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {students.map((student, index) => (
                  <TableRow key={index} sx={{height:"0.5rem"}}>
                    <TableCell>{student.Rank}</TableCell>
                    <TableCell>{student.Name}</TableCell>
                    <TableCell>{student.Number}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      <div className="flex items-center justify-center mb-9">
        <Tabtable />
      </div>
    </div>
  );
};

export default LeaderBoard;

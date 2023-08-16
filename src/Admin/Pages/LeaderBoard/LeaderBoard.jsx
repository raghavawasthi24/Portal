


import React, { useState, useEffect } from "react";
import io from "socket.io-client";
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

const LeaderBoard = () => {
  const [students, setStudents] = useState([]);
  const navigate=useNavigate();
  
  useEffect(() => {
    // const socket = io("https://csi-examportal.onrender.com");

    const socket = io.connect("https://csi-examportal.onrender.com", {
    transports: ["websocket"],
});

    socket.on("leaderboard", (data) => {
      setStudents(data);
    });

    socket.emit("leaderboard");

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-between min-h-screen">
    <div className="absolute" style={{top:"3rem",left:"3rem"}}>
    <ArrowCircleUpRoundedIcon sx={{width:"3rem",height:"3rem",rotate:"270deg",color:"rgba(84, 59, 160, 1)"}} onClick={()=>navigate("/admin")}/>
   </div>
    <div className="p-4 mt-5">
    <h1 className=" font-sans font-bold text-3xl text-center mb-5  tracking-widest  whitespace-pre  text-leaderboardColor ">
          Leader Board
        </h1>
      <div  className=" mx-auto">
        <TableContainer component={Paper} sx={{ width: "50rem",backgroundColor:"rgba(255, 255, 255, 0.489)" }}>
          <Table>
            <TableHead sx={{backgroundColor: "rgba(242, 241, 252, 1)"}}>
              <TableRow>
                <TableCell sx={{textAlign:"center"}}>Rank</TableCell>
                <TableCell sx={{textAlign:"center"}}>Student Number</TableCell>
                <TableCell sx={{textAlign:"center"}}>Student Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map((student, index) => (
                <TableRow key={index}>
                  <TableCell sx={{textAlign:"center"}}>{index+1}</TableCell>

                  <TableCell sx={{textAlign:"center"}}>{student.studentNo}</TableCell>
                  <TableCell sx={{textAlign:"center"}}>{student.name}</TableCell>
        
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
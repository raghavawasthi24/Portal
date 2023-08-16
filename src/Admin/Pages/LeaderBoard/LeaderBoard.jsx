import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Tabtable from "./Tabtable";

const LeaderBoard = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // const socket = io.connect("https://csi-examportal.onrender.com");

    const socket = io("https://csi-examportal.onrender.com", {
      transports: ["websocket"],
      
    });

    socket.on("leaderboard", (updatedStudents) => {
      setStudents(updatedStudents);
    });

    socket.emit("updateLeaderboard");

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-between min-h-screen">
      <div className="p-4 mt-5">
        <h1 className="font-sans font-bold text-3xl text-center mb-5 tracking-widest whitespace-pre text-leaderboardColor">
          Leader Board
        </h1>
        <div className="mx-auto">
          <TableContainer component={Paper} sx={{ width: "50rem" }}>
            <Table>
              <TableHead>
                <TableRow className="bg-blue-200">
                  <TableCell>Rank</TableCell>
                  <TableCell>Student Number</TableCell>
                  <TableCell>Student Name</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {students.map((student, index) => (
                  <TableRow key={index} sx={{ height: "0.5rem" }}>
                    <TableCell>{student.totalScore}</TableCell>
                    <TableCell>{student.studentNo}</TableCell>
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

import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const LeaderBoard = () => {
  const [students, setStudents] = useState([]);
  
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
    <div>
      <h1>Leader Board</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Rank</TableCell>
              <TableCell>Student Number</TableCell>
              <TableCell>Student Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student, index) => (
              <TableRow key={index}>
                <TableCell>{student.totalScore}</TableCell>
                <TableCell>{student.studentNo}</TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default LeaderBoard;

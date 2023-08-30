import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  findStudent,
  studentList,
} from "../../../../../store/slices/StudentsSlice";
import axios from "axios";

const CandidateDisplay = () => {
  const data = useSelector((state) => state.student);
  const dispatch = useDispatch();
  const [showdetails,setShowdetails]=useState(false);

  useEffect(() => {
    axios
      .get("http://13.48.30.130/accounts/StudentData/")
      .then((res) => {
        console.log(res.data);
        dispatch(studentList(res.data));
        // state.initialValue=res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getDetails = (id) => {
    dispatch(findStudent(id));
    setShowdetails(true)
  };



  return (
    <div className=" w-full h-full overflow-scroll border-black">
      {console.log(data)}

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "rgba(222, 234, 254, 0.5)" }}>
              <TableCell>Student Name</TableCell>
              <TableCell>Student Number</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.initialValue.map((student, index) => (
              <TableRow
                key={index}
                sx={{ backgroundColor: "rgb(255, 255, 255)" }}
              >
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.studentNo}</TableCell>
                <TableCell>
                  <Button
                    size="small"
                    onClick={(e) => getDetails(student.studentNo)}
                  >
                    Get Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{display:showdetails?"block":"none"}}>
        <div className="w-screen h-screen absolute top-0 left-0 flex justify-center items-center" onClick={()=>setShowdetails(false)}>
          <div className="bg-white p-4 border shadow-md border-t-indigo-600">
            <p className="m-1">Name : {data.currentStudent[0]?.name}</p>
            <p className="m-1">Student No : {data.currentStudent[0]?.studentNo}</p>
            <p className="m-1">Email : {data.currentStudent[0]?.email}</p>
            <p className="m-1">Mobile No : {data.currentStudent[0]?.mobileNo}</p>
            <p className="m-1">Hosteler : {data.currentStudent[0]?.isHosteler?"Yes":"No"}</p>
            <p className="m-1">Gender : {data.currentStudent[0]?.gender}</p>
            <p className="m-1">Branch : {data.currentStudent[0]?.branch}</p>
            <p className="m-1">Score : {data.currentStudent[0]?.totalScore}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateDisplay;

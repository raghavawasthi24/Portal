import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import { studentList } from "../../../../../store/slices/StudentsSlice";
import axios from "axios";

const CandidateDisplay=()=>{
  const data = useSelector(state => state.student)
  const dispatch=useDispatch();

  useEffect(()=>{
      axios.get("http://13.48.30.130/accounts/StudentList/")
       .then((res)=>{console.log(res.data);
        dispatch(studentList(res.data))
        // state.initialValue=res.data;
      })
       .catch((err)=>{console.log(err)})
    
  },[])


  return (
    <div className=" w-full h-full overflow-scroll border-black">
      {
        console.log(data)
      }
      
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "rgba(222, 234, 254, 0.5)" }}>
                <TableCell>Student Name</TableCell>
                <TableCell>Student Number</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.initialValue.map((student, index) => (
                <TableRow key={index}sx={{ backgroundColor: "rgb(255, 255, 255)" }}>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.studentNo}</TableCell>
                </TableRow>
              ))}
              
  
            </TableBody>
          </Table>
        </TableContainer>
      </div>

   
  );
              }


export default CandidateDisplay;
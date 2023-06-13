import React, { useState } from "react";
import "./Login.css";
// import logo from "../../Assets/Portal_CSI_logo.png";
import LoginGif from "../../assets/Coding workshop (1).gif";
import {
  Button,
  Paper,
  TextField,
} from "@mui/material";

const rStudentNum = /^2([1-2]){1}([0-9]{5,6})$/;

const Login = () => {

  const [values,setValues]=useState({
    studentNo:"",
    password:"",
  });

  // Error
  const [errorStudentNo, setErrorStudentNo] = useState(false);

 function studentError() {
    if (!rStudentNum.test(values.studentNo)) setErrorStudentNo(true);
    else setErrorStudentNo(false);
  }
// HandleChange
const handleChange=(e)=>{
  const { name, value } = e.target;
  setValues({ ...values, [name]: value });
  // console.log(formValues);
};
  // OnSubmit
  const handleSubmit = () => {};
  return (
    <div className="loginPage">
      <img src="/Images/csiLogo.svg" style={{ height: 70, width: 50 }} alt="login" className="loginLogo" />
      <div className="login">
        <div className="formSection">
          <Paper elevation={3} className="login_form">
            <h3 className="login_form_header">CINE-2023</h3>
            <TextField
              label="Enter Your Student No."
              variant="outlined"
              className="login_field"
              // error={studentError}
              required
              name="studentNo"
              sx={{
                margin: "2rem auto",
          
              }}
              InputProps={{
    style: {
      borderRadius: "10px",
      borderLeft:"4px solid #543BA0"
     
    }}}
   onChange={handleChange}

            />
            <TextField
              label="Enter Your Password"
              required
              name="password"
              variant="outlined"
              className="login_field"
              type="password"
              sx={{ margin: "0 auto 1rem auto" }}
              InputProps={{
    style: {
      borderRadius: "10px",
      borderLeft:"4px solid #543BA0"
    }
  }}
  onChange={handleChange}
  value={values.studentNo}
            />
            <Button
              variant="contained"
              className="login_field"
              sx={{ backgroundColor: "#543BA0" }}
              onClick={handleSubmit}
              name="password"
              value={values.password}
            >
              LOGIN
            </Button>
          </Paper>
        </div>
        <div className="imageSection">
          <img src={LoginGif} style={{ height: "70vh" }} alt="login" />
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import "./Login.css";
import LoginGif from "../../assets/Coding workshop (1).gif";
import { Button, Paper, TextField } from "@mui/material";
import { Formik, useFormik } from "formik";
import axios from "axios";
// import { Navigate } from "react-router-dom";
// import * as Yup from "yup";


const initialValues = {
  student_no: "",
  password: "",
};
const validate = (values) => {
  let errors = {};
  if (!values.student_no) {
    errors.student_no = "Required";
  } else if (!/^2([1-2]){1}([0-9]{5,6})$/i.test(values.student_no)) {
    errors.student_no = "Invalid Student No.";
  }
  // else {
  //   errors.student_no=''
  // }

  if (!values.password) {
    errors.password = "Required";
  } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/i.test(values.password)) {
    errors.password =
      "Invalid Password";
  }
  // else {
  //   errors.password=''
  // }
  return errors;
};
// const validationSchema = Yup.object({
//   student_no: Yup.string().required("Required"),
//   password: Yup.string().required("Required"),
// });
const onSubmit = (values) => {
  console.log("Form data",values);
// let data ={values}
// fetch ("http://13.48.30.130/accounts/login/",{
//   method:"POST",
//   headers:{
//     'Accept':"application/json",
//     'Content-Type':"application/json"
//   },
//   body : JSON.stringify(data)
// }).then((result)=>{
//   console.log("Form data",result);
// })
};

const Login = () => {
  const formik = useFormik({ initialValues,
    validate 
    , onSubmit });
  // console.log('form data',formik.values)
  // console.log('form errors',formik.errors)
  // console.log("Visited fields", formik.touched);

  return (
    <div className="loginPage">
      <img
        src="/Images/csiLogo.svg"
        style={{ height: 70, width: 50 }}
        alt="login"
        className="loginLogo"
      />
      <div className="login">
        <form className="formSection" onSubmit={formik.handleSubmit} >
          <Paper elevation={3} className="login_form">
            <h3 className="login_form_header">CINE-2023</h3>
            <div className="input_field">
              <TextField
                label="Enter Your Student No."
                variant="outlined"
                className="login_field"
                required
                name="student_no"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.student_no}
                // sx={{
                //   margin: "2rem auto",
                // }}
                InputProps={{
                  style: {
                    borderRadius: "8px",
                    borderLeft: "4px solid #543BA0",
                  },
                }}
              />
              {formik.touched.student_no && formik.errors.student_no ? (
                <p className="error">{formik.errors.student_no}</p>
              ) : null}
            </div>
            <div className="input_field">
              <TextField
                label="Enter Your Password"
                required
                name="password"
                variant="outlined"
                className="login_field"
                type="password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.password}
                // sx={{ margin: "0 auto 1rem auto" }}
                InputProps={{
                  style: {
                    borderRadius: "8px",
                    borderLeft: "4px solid #543BA0",
                  },
                }}
              />
              {formik.touched.password && formik.errors.password ? (
                <p className="error">{formik.errors.password}</p>
              ) : null}
            </div>
            <Button
              variant="contained"
              className="login_btn"
              type="submit"
              sx={{ backgroundColor: "#543BA0" }}
            >
              LOGIN
            </Button>
          </Paper>
        </form>
        <div className="imageSection">
          <img src={LoginGif} style={{ height: "70vh" }} alt="login" />
        </div>
      </div>
    </div>
  );
};

export default Login;

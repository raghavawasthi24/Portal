import React, { useEffect, useState } from "react";
import "./Login.css";
import LoginGif from "../../assets/Coding workshop (1).gif";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import { deleteCookies } from "../../../Admin/utils/updateCookies";

export let isLoggedin = false;
export let isAdmin = false;

const Login = ({ handleLogin }) => {
  // const handleUserAdmin = (userType) => {
  //   handleAdmin(userType);
  // };
  // const handleUserLogin=(login)=>{
  //   handleLogin(login);
  // }
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  useEffect(() => {
    deleteCookies();
  }, []);

  const navigate = useNavigate();
  const initialValues = {
    student_no: "",
    password: "",
  };
  const validate = (values) => {
    let errors = {};
    if (!values.student_no) {
      errors.student_no = "Please Enter Student Number";
    } else if (!/^22([0-9]{5,6})$/i.test(values.student_no)) {
      errors.student_no = "Enter Correct Student Number";
    }
    if (!values.password) {
      errors.password = "Please Enter Password";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/i.test(
        values.password
      )
    ) {
      errors.password = "Invalid Password";
    }

    return errors;
  };
  const onSubmit = (values) => {
    console.log(values);
    axios
      .post(`${import.meta.env.VITE_SOME_VALUE}/accounts/login/`, values)
      .then((res) => {
        console.log(res);
        Cookies.set("isLoggedIn", true); // Set isLoggedIn cookie
        // setIsLoggedIn(true);
        isLoggedin = true;
        localStorage.setItem("studentNo", res.data.studentNo);
        localStorage.setItem("id", res.data._id);

        if (res.data.isAdmin === true) {
          // handleUserAdmin(true)
          // setIsAdmin(true)
          Cookies.set("isAdmin", true);
          Cookies.set("apage1", true);
          navigate("/admin");
        } else if (res.data.isRelogin === true) {
          Cookies.set("spage2", true);
          navigate("/test");
        } else if (res.data.isSubmit === true) {
          Cookies.set("spage4", true);
          navigate("/Thankyou");
        } else {
          Cookies.set("spage1", true);
          navigate("/instruction");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Invalid Student No or Password");
      });
  };
  const formik = useFormik({ initialValues, validate, onSubmit });
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
        <form className="formSection" onSubmit={formik.handleSubmit}>
          <div elevation={3} className="login_form">
            <h3 className="login_form_header">CINE-2023</h3>
            <div className="input_field">
              <TextField
                label="Enter Your Student Number"
                variant="outlined"
                name="student_no"
                sx={{width:"20rem"}}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.student_no}
                InputProps={{
                  style: {
                    borderRadius: "8px 4px 4px 8px",
                    borderLeft: "4px solid #543BA0",
                  },
                }}
              />
              {formik.touched.student_no && formik.errors.student_no ? (
                <p className="error">{formik.errors.student_no}</p>
              ) : null}
            </div>
            <div className="input_field">
              <FormControl
                sx={{
                  borderRadius: "8px",
                  borderLeft: "4px solid #543BA0",
                  width:"20rem"
                }}
                className="login_field"
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  name="password"
                  className="login_field"
                  type={showPassword ? "text" : "password"}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              {formik.touched.password && formik.errors.password ? (
                <p className="error">{formik.errors.password}</p>
              ) : null}
            </div>
            {/* <div className="input_field">
              <TextField
                label="Enter Your Password"
                name="password"
                variant="outlined"
                className="login_field"
                type="password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.password}
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
            </div> */}

            <Button
              variant="contained"
              className="login_btn"
              type="submit"
              sx={{
                backgroundColor: "#543BA0",
                "&:hover": { backgroundColor: "#543BA0" },
                margin: "2rem 0",
              }}
            >
              LOGIN
            </Button>
          </div>
        </form>
        <div className="imageSection">
          <img src={LoginGif} style={{ height: "70vh" }} alt="login" />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;

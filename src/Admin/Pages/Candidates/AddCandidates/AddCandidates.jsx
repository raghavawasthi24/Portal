import React from "react";
import { useState } from "react";
import axios from "axios";
import Header from "../../../components/Header";
import { Button } from "@mui/material";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../../../Loader/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddCandidates = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const check = Cookies.get("apage6");
    if (!check) {
      navigate("/login");
    }
  }, []);
  const initial = {
    name: "",
    email: "",
    branch: "CSE",
    studentNo: "",
    mobileNo: "",
    gender: "Male",
    isHosteler: "true",
  };
  const [formvalues, setFormvalues] = useState(initial);
  const [formerror, setFormerror] = useState("");
  const [loader, setLoader] = useState(false);

  const inputfield = [
    { label: "Name", name: "name", value: formvalues.name },
    { label: "Email", name: "email", value: formvalues.email },
    {
      label: "Branch",
      name: "branch",
      value: formvalues.branch,
      options: [
        { name: "CSE", value: "CSE" },
        { name: "CSEAIML", value: "CSE-AIML" },
        { name: "CSEDS", value: "CSE-DS" },
        { name: "CS", value: "CS" },
        { name: "AIML", value: "AIML" },
        { name: "IT", value: "IT" },
        { name: "CSIT", value: "CSIT" },
        { name: "EN", value: "EN" },
        { name: "ECE", value: "ECE" },
        { name: "MECHANICAL", value: "MECHANICAL" },
        { name: "CIVIL", value: "CIVIL" },
        { name: "CSE-HINDI", value: "CSE-HINDI" },
      ],
    },
    { label: "Student Number", name: "studentNo", value: formvalues.studentNo },
    { label: "Mobile Number", name: "mobileNo", value: formvalues.mobileNo },
    {
      label: "Is Hosteler",
      name: "isHosteler",
      value: formvalues.isHosteler,
      options: [
        { name: "True", value: "true" },
        { name: "False", value: "false" },
      ],
    },
    {
      label: "Gender",
      name: "gender",
      value: formvalues.gender,
      options: [
        { name: "Male", value: "Male" },
        { name: "Female", value: "Female" },
        { name: "Others", value: "Others" },
      ],
    },
  ];

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormvalues({ ...formvalues, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const studentNoRegex = /^22[0-9]{5,6}$/;
    if (!studentNoRegex.test(formvalues.studentNo)) {
      setFormerror("Student No is Invalid");
      return;
    } else if (
      !formvalues.name ||
      !formvalues.email ||
      formvalues.mobileNo.length != 10
    ) {
      setFormerror("Please Verify Your Details");
      return;
    } else {
      setFormerror("");
      setLoader(true);
      axios
        .post(
          `${import.meta.env.VITE_APP_DJANGO_URL}/accounts/add-candidate/`,
          formvalues
        )
        .then((res) => {
          setLoader(false);
          setFormvalues(initial);
          toast.success("Candidate Registered Successfully");
          // console.log(res);
        })
        .catch((err) => {
          setLoader(false);
          toast.error("Candidate is Already Registered!");
        });
      // console.log(formvalues);
    }
  };

  return (
    <div>
      <div>
        <Header />
        <div>
          <form
            onSubmit={submitHandler}
            className="h-screen flex flex-col justify-center items-center"
          >
            <p className="text-red-600 my-4 font-semibold">{formerror}</p>
            {inputfield.map((item) => {
              return (
                <div className="flex m-2">
                  <label className="w-40">{item.label}</label>
                  {item.name === "gender" ||
                  item.name === "isHosteler" ||
                  item.name === "branch" ? (
                    <select
                      style={{
                        width: "20rem",
                        border: "1px solid #1976d2",
                        outline: "none",
                        padding: "2px",
                        borderRadius: "5px",
                        textIndent: "5px",
                      }}
                      onChange={inputHandler}
                      defaultValue=""
                      name={item.name}
                    >
                      {item.options.map((opt) => {
                        return <option value={opt.value}>{opt.name}</option>;
                      })}
                    </select>
                  ) : (
                    <input
                      name={item.name}
                      value={item.value}
                      onChange={inputHandler}
                      style={{
                        width: "20rem",
                        border: "1px solid #1976d2",
                        outline: "none",
                        padding: "2px",
                        borderRadius: "5px",
                        textIndent: "5px",
                      }}
                    />
                  )}
                </div>
              );
            })}
            <Button variant="contained" type="submit" sx={{ margin: "0.5rem" }}>
              Submit
            </Button>
          </form>
        </div>
      </div>
      <div
        className="absolute top-0"
        style={{ marginLeft: "-2rem", display: loader ? "" : "none" }}
      >
        <Loader />
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddCandidates;

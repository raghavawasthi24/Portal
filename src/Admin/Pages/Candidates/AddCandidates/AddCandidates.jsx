import React from "react";
import { useState } from "react";
import axios from "axios";
import "./AddCandidates.css";
import Header from "../../../components/Header";
import { Button } from "@mui/material";

const AddCandidates = () => {
  const initial = {
    name: "",
    email: "",
    branch: "",
    studentNo: "",
    mobileNo: "",
    gender: "",
    isHosteler: "",
  };
  const [formvalues, setFormvalues] = useState(initial);
  const inputfield = [
    { label: "Name", name: "name", value: formvalues.name },
    { label: "Email", name: "email", value: formvalues.email },
    { label: "Branch", name: "branch", value: formvalues.branch },
    { label: "Student Number", name: "studentNo", value: formvalues.studentNo },
    { label: "Mobile Number", name: "mobileNo", value: formvalues.mobileNo },
    { label: "Is Hosteler", name: "isHosteler", value: formvalues.isHosteler,options:[{name:"True",value:"true"},{name:"False",value:"false"}] },
    { label: "Gender", name: "gender", value: formvalues.gender,options:[{name:"Male",value:"male"},{name:"Female",value:"female"},{name:"Others",value:"others"}]  },
  ];

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormvalues({ ...formvalues, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://13.48.30.130/accounts/add-candidate/", formvalues)
      .then((res) => {
        console.log(res);
      });
    console.log(formvalues);
  };
  return (
    <div>
      <Header />
      <div>
        <form
          onSubmit={submitHandler}
          className="h-screen flex flex-col justify-center items-center"
        >
          {inputfield.map((item) => {
            return (
              <div className="flex m-2">
                <label className="w-40">{item.label}</label>
                {
                    item.name==="gender" || item.name==="isHosteler"?<select style={{ width: "20rem", border: "1px solid #1976d2", outline:"none",padding:"2px",borderRadius:"5px",textIndent:"5px"}}>
                        {
                            item.options.map((opt)=>{
                                return(<option value={opt.value} >{opt.name}</option>)
                            })
                        }
                    </select>:<input
                    name={item.name}
                    value={item.value}
                    onChange={inputHandler}
                    style={{ width: "20rem", border: "1px solid #1976d2", outline:"none",padding:"2px",borderRadius:"5px",textIndent:"5px"}}
                  />
                }
                
              </div>
            );
          })}
          <Button variant="contained" type="submit" sx={{margin:"0.5rem"}}>Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default AddCandidates;

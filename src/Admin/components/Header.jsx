import React from "react";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import updateCookies, { deleteCookies } from "../utils/updateCookies";

const Header = () => {
  const [addTarget, setaddTarget] = React.useState(null);
  const navigate = useNavigate();
  const on = Boolean(addTarget);
  const addClick = (event) => {
    setaddTarget(event.currentTarget);
  };
  const addClose = () => {
    setaddTarget(null);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  return (
    <div className="w-full m-auto flex items-center justify-between border px-9 py-3 bg-gradient-to-r from-testHeadGrad1 via-testHeadGrad2 to-testHeadGrad3 absolute top-7">
      <img alt="logo" src="Images/csiLogo.svg" className="w-8  ml-12  " />
      <Typography variant="h6" className="text-center " align="left">
        <div className="ml-2 text-gray-600">CSI Exam Portal</div>
      </Typography>
      <div className="flex justify-between">
        <Button
          id="basic-button2"
          aria-controls={open2 ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open2 ? "true" : undefined}
          onClick={handleClick2}
          className="mr-2"
        >
          Get
        </Button>
        <Menu
          id="basic-menu2"
          anchorEl={anchorEl2}
          open={open2}
          onClose={handleClose2}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            onClick={() => {
              handleClose2, updateCookies(1), navigate("/admin");
            }}
          >
            Questions
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose2, updateCookies(2), navigate("/getCandidate");
            }}
          >
            Candidates
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose2, updateCookies(3), navigate("/getfeedback");
            }}
          >
            Feedback
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose2, updateCookies(4), navigate("/leaderboard");
            }}
          >
            Leaderboard
          </MenuItem>
        </Menu>

        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          className="mr-4"
        >
          Add
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            onClick={() => {
              handleClose, updateCookies(5), navigate("/addQuestions");
            }}
          >
            Questions
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose, updateCookies(6), navigate("/addCandidate");
            }}
          >
            Candidates
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose, updateCookies(7), navigate("/addfeedback");
            }}
          >
            Feedback
          </MenuItem>
        </Menu>

        <div className="mr-9">
          <Button
            variant="contained"
            onClick={() => {
              deleteCookies(), navigate("/");
            }}
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;

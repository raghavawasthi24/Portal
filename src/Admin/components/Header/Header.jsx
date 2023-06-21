import React from "react";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";


const Header = () => {
  const [addTarget, setaddTarget] = React.useState(null);
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
    <div className="w-full flex items-center justify-between border mt-12 px-9 mx-16 h-20 bg-gradient-to-r from-testHeadGrad1 via-testHeadGrad2 to-testHeadGrad3">
      <img alt="logo" src="Images/csiLogo.svg" className="w-8  ml-12  " />
      <Typography
        variant="h6"
        className="text-center "
        align="left"
      >
        <div className="ml-2 mt-1">CSI Exam Portal</div>
      </Typography>
      <div className="flex justify-between  ">
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
      <MenuItem onClick={handleClose2}>Questions</MenuItem>
      <MenuItem onClick={handleClose2}>Candidates</MenuItem>
      <MenuItem onClick={handleClose2}>Leaderboard</MenuItem>
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
          <MenuItem onClick={handleClose}>Questions</MenuItem>
          <MenuItem onClick={handleClose}>Candidates</MenuItem>
          <MenuItem onClick={handleClose}>Feedback</MenuItem>
        </Menu>

        <div className="mr-9">
          <Button variant="contained">Logout</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;

import { Circle, KeyboardArrowDown } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import arr from "../../constants/InstructionContent";
import "./instruction.css";

const Instruction = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box overflow={"hidden"}>
      <Grid container spacing={2} margin={5}>
        <Grid item xs={8}>
          <div className="instructionLeft">
            <Card
              className="instruction_box"
              style={{
                backgroundColor: "transparent",
                boxShadow: "4px 4px 10px 0px #00000040",
              }}
            >
              <div className="instruction_header">
                <p className="instruction_heading">Instructions</p>
              </div>
              {arr.map((link, i) => (
                <div>
                  <List className="instruction_list">
                    <ListItemIcon className="listCircle">
                      <Circle
                        style={{
                          fontSize: "10px",
                          alignSelf: "center",
                          color: "black",
                          minWidth: "2vw",
                          marginLeft: "2.5vw",
                        }}
                      />
                    </ListItemIcon>
                    <ListItem className="listPoints" key={link.id}>
                      {link.point}
                    </ListItem>
                  </List>
                </div>
              ))}
            </Card>
          </div>
          <div>
            <Card
              className="confirm_box"
              style={{
                backgroundColor: "transparent",
                boxShadow: "4px 4px 10px 0px #00000040",
              }}
            >
              <Typography style={{ fontWeight: "bold", margin: "3vh" }}>
                I hereby confirm that I have read all the instructions and ready
                to begin my test.{" "}
              </Typography>
              <div style={{ margin: "5vh" }}>
                <Typography
                  style={{
                    color: "lightgray",
                    fontSize: "small",
                    margin: "0.5vh",
                  }}
                >
                  Write START to start your exam
                </Typography>
                <TextField
                  style={{
                    width: "15vw",
                    height: "5vh",
                    borderRadius: "7px",
                    boxShadow: "4px 4px 10px 0px #00000040",
                    justifyContent: "center",
                  }}
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                  }}
                />
              </div>
            </Card>
          </div>
        </Grid>
        <Grid item xs={3} className="instructionRight">
          <Card
            className="instruction_lang_box"
            style={{
              backgroundColor: "transparent",
              boxShadow: "4px 4px 10px 0px #00000040",
            }}
          >
            <div className="language_btn">
              <Button
                id="demo-positioned-button"
                aria-controls={open ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                variant="contained"
                endIcon={<KeyboardArrowDown />}
                style={{
                  height: "6vh",
                  width: "20vw",
                  color: "black",
                  backgroundColor: "#A7B9F48F",
                  fontWeight: "bold",
                }}
              >
                Select a Language
              </Button>
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <MenuItem onClick={handleClose}>C</MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>C++</MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>Python</MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>Java</MenuItem>
              </Menu>
            </div>
            <div className="Save_btn">
              <Button
                variant="contained"
                disabled
                style={{
                  height: "7vh",
                  width: "20vw",
                  color: "#8D8686",
                  fontWeight: "bold",
                }}
              >
                Save & Next
              </Button>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Instruction;

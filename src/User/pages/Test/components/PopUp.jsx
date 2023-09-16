import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import Cookies from "js-cookie";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "5px",
  //   border: "2px solid #000",
  //   boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const studentNumber = localStorage.getItem("studentNo");
  const nav = useNavigate();

  useEffect(() => {
    const check = Cookies.get("spage2");
    if (!check) {
      nav("/login");
    }
  }, []);

  const submitHandler = () => {
    //   nav("/feedback");
    axios
      .post(
        `${
          import.meta.env.VITE_APP_DJANGO_URL
        }/accounts/submit/${studentNumber}`
      )
      .then((res) => {
        console.log(res);
        Cookies.set("spage3", true);
        Cookies.remove("spage2");
        nav("/feedback");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex justify-between">
      <Button
        type="submit"
        className="!bg-submitColor !text-white w-4 !mx-auto !px-16 !py-2 fixed -bottom-14"
        onClick={handleOpen}
      >
        Submit
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            align="center"
          >
            Are you sure?
          </Typography>
          <div className="flex justify-evenly mt-10">
            <Button
              onClick={handleClose}
              className="!bg-submitColor !text-white"
            >
              Cancel
            </Button>
            <Button
              onClick={submitHandler}
              className="!bg-saveColor !text-white"
            >
              Submit
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

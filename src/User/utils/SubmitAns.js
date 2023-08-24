import axios from "axios";
import { useDispatch } from "react-redux";

const SubmitAnswer = ({ status, quesId, ansId, category }) => {
  const dispatch = useDispatch();
  const id = localStorage.getItem("id");
  const submitData = {
    quesId: quesId,
    status: status,
    ansId: ansId,
  };
  axios
    .get(
      `https://csi-examportal.onrender.com/api/v1/postResponse/${id}/${category}`,
      submitData
    )
    .then((res) => {
      // dispatch(setStudentStatus(res.data));
      localStorage.setItem("totalScoreStatus", JSON.stringify(res.data));
    })
    .catch((err) => console.log(err));
};

export default SubmitAnswer;

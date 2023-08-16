import axios from "axios";

const SubmitAnswer = ({ status, quesId, ansId }) => {
  const id = localStorage.getItem("id");
  const submitData = {
    quesId: quesId,
    status: status,
    ansId: ansId,
  };
  console.log(submitData);
  axios
    .get(
      `https://csi-examportal.onrender.com/api/v1/postResponse/${id}?ansId=${ansId}&quesId=${quesId}&status=${status}`,
      submitData
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export default SubmitAnswer;

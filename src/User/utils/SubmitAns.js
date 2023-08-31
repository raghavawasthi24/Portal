import axios from "axios";

const SubmitAnswer = ({ status, quesId, ansId, category }) => {
  const id = localStorage.getItem("id");
  const submitData = {
    quesId: quesId,
    status: status,
    ansId: ansId,
  };

  return axios
    .get(
      `https://csi-examportal.onrender.com/api/v1/postResponse/${id}?ansId=${ansId}&quesId=${quesId}&status=${status}`,
      submitData
    )
    .then((res) => {
      localStorage.setItem("totalScoreStatus", JSON.stringify(res.data));
      return res.data.user; // Return the response data
    })
    .catch((err) => {
      console.log(err);
      throw err; // Rethrow the error to handle it in the calling function if needed
    });
};

export default SubmitAnswer;

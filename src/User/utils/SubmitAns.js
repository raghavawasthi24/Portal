import axios from "axios";

const SubmitAnswer = ({ status, quesId, ansId }) => {
  const id = localStorage.getItem("id");
  console.log(
    quesId.includes("C++"),
    "check",
    quesId.replace("C++", "Cpp"),
    quesId
  );
  const submitData = {
    quesId: quesId.includes("C++") ? quesId.replace("C++", "Cpp") : quesId,
    status: status,
    ansId: ansId.includes("C++") ? ansId.replace("C++", "Cpp") : ansId,
  };
  console.log(submitData);
  return axios
    .get(
      `${import.meta.env.VITE_APP_NODE_URL}/postResponse/${id}?ansId=${
        submitData.ansId
      }&quesId=${submitData.quesId}&status=${status}`,
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

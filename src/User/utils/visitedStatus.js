import axios from "axios";

const VisitedStatus = async ({ category, quesId }) => {
  const id = localStorage.getItem("id");
  const sendData = {
    quesId: quesId,
    category: category,
  };
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_APP_NODE_URL}/isVisited/user/${id}?quesId=${
        sendData.quesId
      }&category=${sendData.category}`
    );
    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export default VisitedStatus;

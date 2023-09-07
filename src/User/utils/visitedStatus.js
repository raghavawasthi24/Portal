import axios from "axios";

const VisitedStatus = async ({ category, quesId }) => {
  const id = localStorage.getItem("id");
  const sendData = {
    quesId: quesId.includes("C++") ? quesId.replace("C++", "Cpp") : quesId,
    category: category.includes("C++")
      ? category.replace("C++", "Cpp")
      : category,
  };
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_APP_NODE_URL}/isVisited/user/${id}?quesId=${
        sendData.quesId
      }?&category=${sendData.category}`
    );
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default VisitedStatus;

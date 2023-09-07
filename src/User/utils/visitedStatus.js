import axios from "axios";

const VisitedStatus = async ({ category, quesId }) => {
  const id = localStorage.getItem("id");

  try {
    const res = await axios.get(
      `${
        import.meta.env.VITE_APP_NODE_URL
      }/isVisited/user/${id}?quesId=${quesId}?&category=${category}`
    );
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default VisitedStatus;

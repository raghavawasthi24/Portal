import axios from "axios";

const getLoginTime = () => {
  axios
    .post(`http://13.48.30.130/accounts/loginInfo/`, {
      studentNo: localStorage.getItem("studentNo"),
    })
    .then((res) => {
      console.log(res.data.logintime);
      localStorage.setItem("savedTime", res.data.logintime.toString());
    })
    .catch((err) => console.log(err));
};

export default getLoginTime;

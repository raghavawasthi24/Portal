import axios from "axios";

const getLoginTime = () => {
  axios
    .post(`${import.meta.env.VITE_APP_DJANGO_URL}/accounts/loginInfo/`, {
      studentNo: localStorage.getItem("studentNo"),
    })
    .then((res) => {
      console.log(res.data.logintime);
      localStorage.setItem("savedTime", res.data.logintime.toString());
    })
    .catch((err) => console.log(err));
};

export default getLoginTime;

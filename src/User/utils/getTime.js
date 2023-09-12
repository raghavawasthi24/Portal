import axios from "axios";

const getLoginTime = async () => {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_APP_DJANGO_URL}/accounts/loginInfo/`,
      {
        studentNo: localStorage.getItem("studentNo"),
      }
    );
    // console.log(res.data.logintime);
    localStorage.setItem("savedTime", res.data.logintime.toString());
    return res.data.logintime;
  } catch (error) {
    throw error;
  }
  // axios
  //   .post(`${import.meta.env.VITE_APP_DJANGO_URL}/accounts/loginInfo/`, {
  //     studentNo: localStorage.getItem("studentNo"),
  //   })
  //   .then((res) => {
  //     console.log(res.data.logintime);
  //     localStorage.setItem("savedTime", res.data.logintime.toString());
  //   })
  //   .catch((err) => console.log(err));
};

export default getLoginTime;

import Cookies from "js-cookie";

const updateCookies = (page) => {
  const total = 7;
  for (let i = 1; i <= total; i++) {
    if (page && i === page) {
      Cookies.set(`apage${i}`, true);
    } else {
      Cookies.remove(`apage${i}`);
    }
  }
};

export const deleteCookies = () => {
  const total = 7;
  for (let i = 1; i <= total; i++) {
    Cookies.remove(`apage${i}`);
  }
  const sTotal = 4;
  for (let i = 1; i <= sTotal; i++) {
    Cookies.remove(`spage${i}`);
  }
  Cookies.remove("isLoggedIn");
  Cookies.remove("isAdmin");
};

export default updateCookies;

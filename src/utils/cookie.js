import Cookies from 'js-cookie';

function setCookie(userInfo) {
  const arr = Object.entries(userInfo);
  arr.forEach((item) => {
    Cookies.set(item[0], item[1]);
  });
}

function getCookie() {
  return {
    username: Cookies.get('username'),
    email: Cookies.get('email'),
    appkey: Cookies.get('appkey'),
    role: Cookies.get('role'),
  };
}

function removeCookie() {
  Cookies.remove('username');
  Cookies.remove('email');
  Cookies.remove('appkey');
  Cookies.remove('role');
}

export default {
  setCookie,
  getCookie,
  removeCookie,
};

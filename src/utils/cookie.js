import Cookies from 'js-cookie';

function setCookie(name, value) {
  Cookies.set(name, value);
}

function getCookie(name) {
  Cookies.getJSON(name);
}

function removeCookie(name) {
  Cookies.remove(name);
}

export default {
  setCookie,
  getCookie,
  removeCookie,
};
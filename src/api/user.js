import axios from './axios';

// 获取注册验证码
const getCode = (email) => axios.post('/passport/getCode', `appkey=Esther_1630650169567&email=${email}`);
// 注册
const logon = (config) => axios.post('/passport/login', config);
// 登录
const login = (config) => axios.post('/passport/login', config);

export default {
  getCode,
  logon,
  login,
};

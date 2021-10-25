import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://mallapi.duyiedu.com',
});

// instance.interceptors.request.use((config) => {
//   console.log('config', config);
// }, (error) => Promise.reject(error));

instance.interceptors.response.use((response) => response.data, (error) => Promise.reject(error));

export default instance;

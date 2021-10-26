import axios from '@/api/axios';

export default {
  // 类目列表
  getCategory: (params) => axios.get('/category/all', { params }),
};

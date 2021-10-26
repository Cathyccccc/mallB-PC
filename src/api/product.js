import axios from '@/api/axios';

export default {
  // 产品列表
  getProductList: (params) => axios.get('/products/all', { params }),
};

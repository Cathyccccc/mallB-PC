import axios from '@/api/axios';

export default {
  // 产品列表
  getProductList: (params) => axios.get('/products/all', { params }),
  // 新增商品
  addProduct: (params) => axios.post('/products/add', params),
  // 编辑产品
  editProduct: (params) => axios.put('/products/edit', params),
  // 查询商品详情
  getProduct: (params) => axios.get(`/products/${params.id}`),
  // 删除商品
  delProduct: (params) => axios.delete(`/products/${params.id}`),
};

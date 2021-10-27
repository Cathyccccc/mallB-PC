<template>
  <div>
    <search :categoryList='categoryData' @submit='searchSubmit' />
    <div class="btn-container">
      <a-button><router-link :to="{ name: 'productAdd' }">新增商品</router-link></a-button>
    </div>
    <table-list
      :data='productData'
      :categoryList='categoryData'
      :page="page"
      @change="changePage"
      @edit="editProduct"
      @remove="removeProduct"
    />
  </div>
</template>

<script>
import search from '@/components/search.vue';
import tableList from '@/components/tableList.vue';
import productApi from '@/api/product';
import categoryApi from '@/api/category';

export default {
  data() {
    return {
      page: {
        current: 1,
        pageSize: 10,
        showSizeChanger: true,
        total: 1,
      },
      categoryData: [],
      searchForm: {
        searchWord: '',
        category: '',
      },
      productData: [],
    };
  },
  components: {
    search,
    tableList,
  },
  async created() {
    this.getTableData();
    const res = await categoryApi.getCategory(this.page.current, this.page.pageSize);
    // console.log(res);
    this.categoryData = res.data.data;
  },
  methods: {
    searchSubmit(form) {
      // console.log(form);
      this.searchForm = form;
      this.getTableData();
    },
    getTableData() {
      productApi.getProductList({
        page: this.page.current,
        size: this.page.pageSize,
        ...this.searchForm,
      }).then((res) => {
        // console.log(res);
        this.productData = res.data.data;
        this.page.total = res.data.total;
      });
    },
    changePage(page) {
      // console.log(page);
      this.page = page;
      this.getTableData();
    },
    editProduct(pro) {
      // console.log(pro);
      this.$router.push({ name: 'productEdit', params: { id: pro.id } });
    },
    removeProduct(pro) {
      // console.log(pro);
      productApi.delProduct(pro).then(() => {
        this.$message.success('删除成功');
        this.getTableData();
      });
    },
  },
};
</script>

<style scoped lang="less">
.btn-container {
  position: absolute;
  right: 120px;
  top: 64px;
}
</style>

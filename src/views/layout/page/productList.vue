<template>
  <div>
    <search :categoryList='categoryData' @submit='searchSubmit' />
    <table-list
      :data='productData'
      :categoryList='categoryData'
      :page="page"
      @change="changePage" />
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
  },
};
</script>

<style>
</style>

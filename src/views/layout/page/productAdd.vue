<template>
  <div class="product-add-container">
    <a-steps :current="current" class="steps-bar">
      <a-step v-for="item in steps" :key="item.title" :title="item.title" />
    </a-steps>
    <div class="steps-content">
      <prev-form
      v-if="current === 0"
      @next="next"
      :form="form" />
      <next-form v-if="current === 1" @prev="prev" :form="form" @submit="handleSubmit" />
    </div>
  </div>
</template>
<script>
import prevForm from '@/components/prevForm.vue';
import nextForm from '@/components/nextForm.vue';
import productApi from '@/api/product';

export default {
  data() {
    return {
      current: 0,
      steps: [
        { title: '填写商品基本信息' },
        { title: '填写商品销售信息' },
      ],
      form: {
        title: '',
        desc: '',
        category: '',
        c_item: '',
        tags: '包邮，次日达',
        price: '',
        price_off: '',
        inventory: '',
        unit: 'g',
        images: [],
      },
    };
  },
  components: {
    prevForm,
    nextForm,
  },
  methods: {
    next(form) {
      this.form = {
        ...this.form,
        ...form,
      };
      this.current += 1;
    },
    prev() {
      this.current -= 1;
    },
    async handleSubmit() {
      if (!this.$route.params.id) {
        await productApi.addProduct(this.form);
        // console.log(res);
        this.$message.success('新增商品成功');
      } else {
        await productApi.editProduct(this.form);
        this.$message.success('编辑成功');
      }
      this.$router.push('/productList');
    },
  },
  async created() {
    const { id } = this.$route.params;
    if (id) {
      const res = await productApi.getProduct({ id });
      // console.log(res);
      this.form = res.data;
    }
  },
};
</script>
<style scoped lang="less">
.product-add-container {
  .steps-bar {
    width: 40%;
    margin: 50px auto;
  }
}
.steps-content {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
  padding-left: 100px;
  padding-top: 80px;
  padding-bottom: 30px;
}
</style>

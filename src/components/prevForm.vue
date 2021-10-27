<template>
  <a-form-model
    ref="ruleForm"
    :rules="rules"
    :model="form"
    :label-col="{ span: 4 }"
    :wrapper-col="{ span: 14 }"
  >
    <a-form-model-item label="标题" prop="title" required>
      <a-input v-model="form.title" placeholder="请输入标题" />
    </a-form-model-item>
    <a-form-model-item label="商品描述" prop="desc">
      <a-input v-model="form.desc" />
    </a-form-model-item>
    <a-form-model-item label="商品类目" prop="category" required>
      <a-select @change="changeCategory" v-model="form.category">
        <a-select-option v-for="category in categoryData" :key="category.id" :value="category.id">
          {{ category.name }}
        </a-select-option>
      </a-select>
      <a-select v-model="form.c_item">
        <a-select-option v-for="item in categoryItems" :key="item" :value="item">
          {{ item }}
        </a-select-option>
      </a-select>
    </a-form-model-item>
    <a-form-model-item label="商品标签" prop="tags" required>
      <a-select
        mode="tags"
        style="width: 100%"
        :default-value="['包邮，次日达']"
        v-model="form.tags"
      >
        <a-select-option value="包邮，次日达">
          包邮，次日达
        </a-select-option>
      </a-select>
    </a-form-model-item>
    <a-button type="primary" @click="next" >
      下一步
    </a-button>
  </a-form-model>
</template>

<script>
import categoryApi from '@/api/category';

export default {
  props: {
    form: {
      default: () => ({
        title: '',
        desc: '',
        category: '',
        c_item: '',
      }),
      type: Object,
    },
  },
  data() {
    return {
      rules: {},
      categoryData: [],
      categoryItems: [],
    };
  },
  methods: {
    changeCategory(value) {
      // console.log(value);
      this.categoryData.forEach((category) => {
        if (category.id === value) {
          this.categoryItems = category.c_items;
          // console.log(this.categoryItems);
        }
      });
    },
    next() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$emit('next', this.form);
        } else {
          console.log('error submit!!');
          return false;
        }
        return true;
      });
    },
  },
  async created() {
    const res = await categoryApi.getCategory();
    // console.log(res); // 这个data中为c_items
    this.categoryData = res.data.data;
  },
};
</script>

<style>
</style>

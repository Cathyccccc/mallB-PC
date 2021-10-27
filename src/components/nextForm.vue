<template>
  <a-form-model
    ref="ruleForm"
    :model="form"
    :rules="rules"
    :label-col="{ span: 4 }"
    :wrapper-col="{ span: 14 }"
  >
    <a-form-model-item label="商品售价" prop="price" required>
      <a-input v-model="form.price" placeholder="请输入商品价格" />
    </a-form-model-item>
    <a-form-model-item label="商品折扣价" prop="price_off">
      <a-input v-model="form.price_off" placeholder="请输入商品折扣价" />
    </a-form-model-item>
    <a-form-model-item label="商品库存" prop="inventory" required>
      <a-input v-model="form.inventory" placeholder="请输入商品库存" />
    </a-form-model-item>
     <a-form-model-item label="计量单位" prop="unit" required>
      <a-input v-model="form.unit" placeholder="请输入计量单位" />
    </a-form-model-item>
    <a-form-model-item label="商品相册" prop="images">
      <a-upload
      :action="`https://mallapi.duyiedu.com/upload/images?appkey=${$store.state.user.appkey}`"
      list-type="picture-card"
      :file-list="fileList"
      @preview="handlePreview"
      @change="handleChange"
      v-model="form.images"
      name="avatar"
    >
      <div v-if="fileList.length < 8">
        <a-icon type="plus" />
        <div class="ant-upload-text">
          Upload
        </div>
      </div>
    </a-upload>
    <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
      <img alt="example" style="width: 100%" :src="previewImage" />
    </a-modal>
    </a-form-model-item>
    <a-button type="primary" @click="onSubmit">提交</a-button>
    <a-button @click="prev" style="margin-left: 30px">上一步</a-button>
  </a-form-model>
</template>

<script>
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
export default {
  props: ['form'],
  data() {
    return {
      rules: {},
      fileList: [],
      previewVisible: false,
      previewImage: '',
    };
  },
  methods: {
    onSubmit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$emit('submit');
        } else {
          console.log('error submit!!');
          return false;
        }
        return true;
      });
    },
    handleCancel() {
      this.previewVisible = false;
    },
    async handlePreview(file) {
      const obj = file;
      if (!file.url && !file.preview) {
        obj.preview = await getBase64(file.originFileObj);
      }
      this.previewImage = file.url || file.preview;
      this.previewVisible = true;
    },
    prev() {
      this.$emit('prev');
    },
    handleChange({ file, fileList }) {
      this.fileList = fileList;
      if (file.status === 'done') {
        const { url } = file.response.data;
        this.form.images.push(url);
      } else if (file.status === 'removed') {
        const { url } = file.response.data;
        this.form.images = this.form.images.filter((img) => img !== url);
      }
    },
  },
  created() {
    if (this.form.images.length > 0) {
      this.fileList = this.form.images.map((img, index) => ({
        uid: index,
        name: `image${index}.png`,
        status: 'done',
        url: img,
      }));
    }
  },
};
</script>

<style>
</style>

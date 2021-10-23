<template>
  <div class="logon-container">
    <a-form-model
    class="form"
    ref="ruleForm"
    :model="form"
    :rules="rules"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >
    <a-form-model-item label="邮箱" prop="email">
      <a-input v-model="form.eamil" type="text" />
    </a-form-model-item>
    <a-form-model-item label="密码" required prop="password">
      <a-input v-model="form.password" type="text" />
    </a-form-model-item>
    <a-form-model-item :wrapper-col="{ span: 14, offset: 6 }">
      <a-button type="primary" @click="onSubmit">
        登录
      </a-button>
      <a-button style="margin-left: 30px;" @click="resetForm">
        重置
      </a-button>
    </a-form-model-item>
  </a-form-model>
  </div>
</template>
<script>
export default {
  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      other: '',
      form: {
        email: '',
        password: '',
      },
      rules: {
        email: [{ required: true, message: '请输入邮箱', trigger: 'blur' },
          { reg: /[\w@.]+[com|cn]/g, message: '邮箱格式不正确', trigger: 'blur' },
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'change' },
          {
            min: 6, max: 16, reg: /\w{6,16}/g, message: '密码由6-16位的数字字母下划线组成', trigger: 'blur',
          },
        ],
      },
    };
  },
  methods: {
    /* eslint-disable consistent-return */
    onSubmit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },
  },
};
</script>

<style scoped>
.logon-container .form {
  max-width: 500px;
  border: 1px solid #eee;
  margin: 100px auto;
  padding: 60px 0 20px 40px;
}
</style>

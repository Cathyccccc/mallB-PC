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
    <a-form-model-item label="用户名" prop="username">
      <a-input v-model="form.username" type="text" />
    </a-form-model-item>
    <a-form-model-item label="邮箱" prop="email">
      <a-input v-model="form.eamil" type="text" />
    </a-form-model-item>
    <a-form-model-item label="密码" required prop="password">
      <a-input v-model="form.password" type="text" />
    </a-form-model-item>
    <a-form-model-item label="验证码" prop="code">
      <a-input-number v-model="form.code" type="text" />
      <a-button class="ant-btn" style="margin-left: 20px">获取验证码</a-button>
    </a-form-model-item>
    <a-form-model-item label="用户角色" prop="role">
      <a-radio-group v-model="form.role">
        <a-radio value="1">
          普通用户
        </a-radio>
        <a-radio value="2">
          管理用户
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item :wrapper-col="{ span: 14, offset: 6 }">
      <a-button type="primary" @click="onSubmit">
        注册
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
        username: '',
        email: '',
        password: '',
        code: '',
        role: '',
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        email: [{ required: true, message: '请输入邮箱', trigger: 'blur' },
          { reg: /[\w@.]+[com|cn]/g, message: '邮箱格式不正确', trigger: 'blur' },
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'change' },
          {
            min: 6, max: 16, reg: /\w{6,16}/g, message: '密码由6-16位的数字字母下划线组成', trigger: 'blur',
          },
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'change' },
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

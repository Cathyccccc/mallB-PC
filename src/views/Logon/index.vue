<template>
  <div class="logon-container">
    <a-form-model
    class="form"
    ref="ruleForm"
    :model="form"
    :rules="rules"
    :label-col="{ span: 4 }"
    :wrapper-col="{ span: 14 }"
  >
    <a-form-model-item label="用户名" prop="username">
      <a-input v-model="form.username" type="text" />
    </a-form-model-item>
    <a-form-model-item label="邮箱" prop="email">
      <a-input v-model="form.email" type="text" />
    </a-form-model-item>
    <a-form-model-item label="密码" prop="password">
      <a-input v-model="form.password" type="password" />
    </a-form-model-item>
    <a-form-model-item label="验证码" prop="code">
      <a-input-number v-model="form.code" type="text" />
      <a-button class="ant-btn" style="margin-left: 20px"
        @click="getCode"
      >获取验证码</a-button>
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
import user from '@/api/user';

export default {
  data() {
    return {
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
        email: [{
          required: true, pattern: /^[\w.-]+@\w+\.(com|cn)$/g, message: '邮箱格式不正确', trigger: 'blur',
        },
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' },
          {
            min: 6, max: 16, pattern: /[\w_.]{6,16}/g, message: '密码由6-16位的数字字母下划线组成', trigger: 'blur',
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
    async onSubmit() {
      try {
        await user.logon(this.form);
        this.$router.push('/login');
      } catch (error) {
        this.$message.error(error);
      }
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },
    async getCode() {
      try {
        const res = await user.getCode(this.form.email);
        this.$message.success(res.msg);
      } catch (error) {
        this.$message.error(error);
      }
    },
  },
};
</script>

<style scoped lang="less">
@import url('~@/assets/css/form.less');

</style>

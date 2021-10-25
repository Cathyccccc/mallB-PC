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
      <a-form-model-item label="邮箱" prop="email">
        <a-input v-model="form.email" type="text" aria-autocomplete="true" />
      </a-form-model-item>
      <a-form-model-item label="密码" required prop="password">
        <a-input v-model="form.password" type="password" />
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 14, offset: 6 }">
        <a-button type="primary" @click="onSubmit"> 登录 </a-button>
        <a-button style="margin-left: 30px" @click="resetForm"> 重置 </a-button>
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
        email: '',
        password: '',
      },
      rules: {
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          {
            pattern: /^[\w-@.]+@\w+.(com|cn)$/g,
            message: '邮箱格式不正确',
            trigger: 'blur',
          },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            min: 6,
            max: 16,
            pattern: /[\w_.]{6,16}/g,
            message: '密码由6-16位的数字字母下划线组成',
            trigger: 'blur',
          },
        ],
      },
    };
  },
  methods: {
    async onSubmit() {
      try {
        const res = await user.login(this.form);
        this.$store.dispatch('setUser', res.data);
        this.$message.success('登录成功');
        this.$router.push('/static');
      } catch (error) {
        this.$message.error(error);
      }
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },
  },
};
</script>

<style scoped lang="less">
@import url("~@/assets/css/form.less");
</style>

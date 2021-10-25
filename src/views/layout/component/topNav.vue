<template>
  <div class="header">
    <div class="toggle-button">
      <a-button type="primary" @click="toggleCollapsed">
        <a-icon :type="$store.state.collapsed ? 'menu-unfold' : 'menu-fold'" />
      </a-button>
    </div>
    <div class="breadcrumb">
      <a-breadcrumb>
        <a-breadcrumb-item>首页</a-breadcrumb-item>
        <a-breadcrumb-item><a href="">统计</a></a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <div class="user-info">
      <div class="username">{{ $store.state.user.username }}<a-icon type="down" /></div>
      <div class="btn" @click="logout">退出</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleCollapsed() {
      this.$store.dispatch('setCollapsed');
    },
    logout() {
      this.$cookie.removeCookie();
      this.$store.dispatch('setUser', '');
      this.$router.push('/login');
    },
  },
};
</script>

<style>
</style>

<template>
  <div class="home-container">
    <div class="left-menu">
      <left-menu></left-menu>
    </div>
    <div class="right-content" :class="{ 'menu-unfold': $store.state.collapsed }">
      <top-nav></top-nav>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import LeftMenu from './component/leftMenu.vue';
import TopNav from './component/topNav.vue';

export default {
  components: {
    TopNav,
    LeftMenu,
  },
};
</script>

<style lang='less'>
@import url('~@/assets/css/main.less');

</style>

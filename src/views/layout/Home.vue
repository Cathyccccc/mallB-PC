<template>
  <div class="home-container">
    <div class="left-menu">
      <left-menu :key="key"></left-menu>
    </div>
    <div class="right-content" :class="{ 'menu-unfold': $store.state.collapsed }">
      <top-nav></top-nav>
      <router-view :key="key" ></router-view>
    </div>
  </div>
</template>

<script>
import LeftMenu from './component/leftMenu.vue';
import TopNav from './component/topNav.vue';

export default {
  data() {
    return {
      key: +new Date(),
    };
  },
  components: {
    TopNav,
    LeftMenu,
  },
  watch: {
    // $route(val) {
    //   console.log(val);
    // },
    $route() {
      this.key = +new Date();
    },
  },
};
</script>

<style lang='less'>
@import url('~@/assets/css/main.less');

</style>

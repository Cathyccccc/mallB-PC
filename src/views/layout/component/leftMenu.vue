<template>
  <a-menu
    :default-selected-keys="[$route.matched[1] ? $route.matched[1].name : '']"
    :default-open-keys="[$route.matched[0].name]"
    mode="inline"
    theme="dark"
    :inline-collapsed="$store.state.collapsed"
  >
    <template v-for="route in $store.state.menuRoutes">
      <a-sub-menu :key="route.name" v-if="!route.meta.hidden">
      <span slot="title">
        <a-icon :type="route.meta.icon" />
        <span>{{ route.meta.title }}</span>
      </span>
      <template v-for="child in route.children">
        <a-menu-item :key="child.name" v-if="!child.meta.hidden">
        <router-link :to="{ name: child.name }">
          <a-icon :type="child.meta.icon" />
            {{ child.meta.title }}
          </router-link>
        </a-menu-item>
      </template>
    </a-sub-menu>
    </template>
  </a-menu>
</template>

<script>
export default {
  // created() {
  //   console.log(this.$route);
  // },
};
</script>

<style>
</style>

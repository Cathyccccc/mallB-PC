<template>
  <div class="home-container">
    <div class="left-menu">
      <a-menu
        :default-selected-keys="['1']"
        :default-open-keys="['sub1']"
        mode="inline"
        theme="dark"
        :inline-collapsed="collapsed"
      >
        <a-sub-menu key="sub1">
          <span slot="title"
            ><a-icon type="mail" /><span>首页</span></span
          >
          <a-menu-item key="5"> 统计 </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title"
            ><a-icon type="appstore" /><span>商品</span></span
          >
          <a-menu-item key="9"> 商品列表 </a-menu-item>
          <a-menu-item key="10"> 新增商品 </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </div>
    <div class="right-content" :class="{ 'menu-unfold': collapsed }">
      <div class="header">'
        <div class="toggle-button">
          <a-button type="primary" @click="toggleCollapsed">
            <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
          </a-button>
        </div>
        <div class="breadcrumb">
          <a-breadcrumb :routes="routes">
            <template
              slot="itemRender"
              slot-scope="{ route, params, routes, paths }"
            >
              <span v-if="routes.indexOf(route) === routes.length - 1">
                {{ route.breadcrumbName }}
              </span>
              <router-link v-else :to="`${basePath}/${paths.join('/')}`">
                {{ route.breadcrumbName }}
              </router-link>
            </template>
          </a-breadcrumb>
        </div>
        <div class="user-info">
          <div class="username">用户名<a-icon type="down" /></div>
          <div class="btn">退出</div>
        </div>
      </div>
      <div class="card">
        <div style="background-color: #ececec; padding: 20px">
          <a-row :gutter="16">
            <a-col :span="8">
              <a-card title="Card title" :bordered="false">
                <p>card content</p>
              </a-card>
            </a-col>
            <a-col :span="8">
              <a-card title="Card title" :bordered="false">
                <p>card content</p>
              </a-card>
            </a-col>
            <a-col :span="8">
              <a-card title="Card title" :bordered="false">
                <p>card content</p>
              </a-card>
            </a-col>
          </a-row>
        </div>
      </div>
      <div class="chart">
        <ve-line :data="chartData" :settings="chartSettings"></ve-line>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    // this.chartSettings = {
    //   area: true
    // },
    return {
      collapsed: false,
      basePath: '/components/breadcrumb',
      routes: [
        {
          path: '/',
          breadcrumbName: '首页',
        },
      ],
      chartSettings: {
        area: true,
      },
      /* eslint-disable quote-props */
      /* eslint-disable object-curly-newline */
      chartData: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
          { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
          { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
          { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
          { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
          { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 },
        ],
      },
    };
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
  },
};
</script>

<style lang='less'>
@import url('~@/assets/css/main.less');

</style>

<template>
  <div class="home-container">
    <div class="left-menu">
      <left-menu></left-menu>
    </div>
    <div class="right-content" :class="{ 'menu-unfold': $store.state.collapsed }">
      <top-nav></top-nav>
      <router-view></router-view>
      <!-- <div class="card">
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
      </div> -->
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
  // data() {
  //   this.chartSettings = {
  //     area: true
  //   },
  //   return {
  //     chartSettings: {
  //       area: true,
  //     },
  //     /* eslint-disable quote-props */
  //     /* eslint-disable object-curly-newline */
  //     chartData: {
  //       columns: ['日期', '访问用户', '下单用户', '下单率'],
  //       rows: [
  //         { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
  //         { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
  //         { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
  //         { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
  //         { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
  //         { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 },
  //       ],
  //     },
  //   };
  // },
};
</script>

<style lang='less'>
@import url('~@/assets/css/main.less');

</style>

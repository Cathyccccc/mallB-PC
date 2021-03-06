import Vue from 'vue';
import VCharts from 'v-charts-v2';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/ant-design-vue';

Vue.config.productionTip = false;
Vue.use(VCharts);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

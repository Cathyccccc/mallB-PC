import Vue from 'vue';
import VCharts from 'v-charts';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/ant-design-vue';
import cookie from '@/utils/cookie';

Vue.config.productionTip = false;
Vue.use(VCharts);
Vue.prototype.$cookie = cookie;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

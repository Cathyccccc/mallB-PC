import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/layout/Home.vue';
import Logon from '@/views/Logon/index.vue';
import Login from '@/views/Login/index.vue';
// import Product from '@/views//Product.vue';
// import Home from '@/views/layout/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home',
    // redirect: '/home/static',
    // children: [{
    //   path: 'static',
    //   component: Static,
    //   name: 'static',
    // }],
  },
  {
    path: '/logon',
    component: Logon,
    name: 'logon',
  },
  {
    path: '/login',
    component: Login,
    name: 'login',
  },
  // {
  //   path: '/product',
  //   component: Product,
  //   name: 'product',
  // },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach(to, from, next) {
//   if (to.path !== '/login') {

//   }
// };

export default router;

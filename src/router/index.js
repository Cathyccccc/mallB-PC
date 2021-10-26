import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/layout/Home.vue';
import Logon from '@/views/Logon/index.vue';
import Login from '@/views/Login/index.vue';
import Statis from '@/views/layout/page/statis.vue';
import store from '@/store';
import getFilterRoute from '@/utils/permission';

Vue.use(VueRouter);
const roleRoutes = [
  {
    path: '/',
    component: Home,
    name: 'product',
    meta: {
      title: '商品',
      hidden: false,
      icon: 'appstore',
    },
    children: [
      {
        path: 'productList',
        component: () => import('@/views/layout/page/productList.vue'),
        name: 'productList',
        meta: {
          title: '商品列表',
          hidden: false,
          icon: 'ordered-list',
        },
      },
      {
        path: 'productAdd',
        component: () => import('@/views/layout/page/productAdd.vue'),
        name: 'productAdd',
        meta: {
          title: '添加商品',
          hidden: false,
          icon: 'plus-square',
        },
      },
      {
        path: 'category',
        component: () => import('@/views/layout/page/category.vue'),
        name: 'category',
        meta: {
          title: '类目管理',
          hidden: false,
          icon: 'project',
        },
      },
    ],
  },
];

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home',
    redirect: '/statis',
    meta: {
      title: '主页',
      hidden: false,
      icon: 'home',
    },
    children: [{
      path: 'statis',
      component: Statis,
      name: 'statis',
      meta: {
        title: '统计',
        hidden: false,
        icon: 'line-chart',
      },
    }],
  },
  {
    path: '/logon',
    component: Logon,
    name: 'logon',
    meta: {
      title: '注册',
      hidden: true,
    },
  },
  {
    path: '/login',
    component: Login,
    name: 'login',
    meta: {
      title: '登录',
      hidden: true,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// 重点：鉴权的实现
let isAddRoutes = false;
router.beforeEach((to, from, next) => {
  if (to.path !== '/login' && to.path !== '/logon') {
    if (store.state.user.username && store.state.user.appkey && store.state.user.email) {
      if (!isAddRoutes) {
        const filterRoutes = getFilterRoute('admin', roleRoutes);
        // console.log(filterRoutes);
        const menuRoutes = routes.concat(filterRoutes);
        store.dispatch('setMenuRoutes', menuRoutes).then(() => {
          router.addRoutes(filterRoutes);
          next();
        });
        isAddRoutes = true;
      }
      return next();
    }
    return next('/login');
  }
  return next();
});

export default router;

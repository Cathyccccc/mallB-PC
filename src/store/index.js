import Vue from 'vue';
import Vuex from 'vuex';
import Cookie from '@/utils/cookie';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    collapsed: false, // 左侧菜单栏是否折叠
    user: Cookie.getCookie(),
    menuRoutes: [],
  },
  mutations: {
    changeCollapsed(state) {
      state.collapsed = !state.collapsed;
    },
    changeUser(state, userInfo) {
      state.user = userInfo;
    },
    changeMenuRoutes(state, payload) {
      state.menuRoutes = payload;
    },
  },
  actions: {
    setCollapsed({ commit }) {
      commit('changeCollapsed');
    },
    setUser({ commit }, userInfo) {
      commit('changeUser', userInfo);
      Cookie.setCookie(userInfo);
    },
    setMenuRoutes({ commit }, routes) {
      commit('changeMenuRoutes', routes);
    },
  },
  modules: {
  },
});

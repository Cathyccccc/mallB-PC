import Vue from 'vue';
import Vuex from 'vuex';
import Cookie from '@/utils/cookie';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    collapsed: false, // 左侧菜单栏是否折叠
    user: Cookie.getCookie(),
  },
  mutations: {
    changeCollapsed(state) {
      state.collapsed = !state.collapsed;
    },
    changeUser(state, userInfo) {
      state.user = userInfo;
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
  },
  modules: {
  },
});

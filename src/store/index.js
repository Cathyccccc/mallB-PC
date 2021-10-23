import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    collapsed: false, // 左侧菜单栏是否折叠
  },
  mutations: {
    changeCollapsed(state) {
      state.collapsed = !state.collapsed;
    },
  },
  actions: {
    setCollapsed({ commit }) {
      commit('changeCollapsed');
    },
  },
  modules: {
  },
});

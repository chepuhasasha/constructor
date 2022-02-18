import { createStore } from "vuex";

export default createStore({
  state: {
    theme: "default",
    user: null,
  },
  mutations: {
    SET_THEME(state, value) {
      state.theme = value;
    },
    SET_USER(state, value) {
      state.user = value;
    },
  },
  actions: {
    setTheme({ commit }, value) {
      commit("SET_THEME", value);
    },
    setUser({ commit }, value) {
      commit("SET_USER", value);
    },
  },
  modules: {},
});

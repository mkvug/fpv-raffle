import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      customTheme: false,
      backgroundColor: "",
      buttonColor: "",
      headerColor: "",
      textDark: "",
      textLight: "",
    };
  },
  getters: {
    toggleCustomTheme(state) {
      state.customTheme = !state.customTheme;
    },
    setThemeProp(state, prop) {
      switch (prop) {
        case "backgroundColor":
          state.backgroundColor = prop;
          break;
        case "buttonColor":
          state.buttonColor = prop;
          break;
        case "headerColor":
          state.headerColor = prop;
          break;
        case "textDark":
          state.textDark = prop;
          break;
        case "textLight":
          state.textLight = prop;
          break;

        default:
          break;
      }
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});

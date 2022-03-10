import { createApp } from "vue";

import App from "./App.vue";
import store from "./store";

const app = createApp(App);

app.use(store);

app.config.compilerOptions.isCustomElement = (tag) => {
  return tag.startsWith("model-");
};

app.mount("#app");

import Vue from "vue";
import App from "./App.vue";

import "./assets/styles/tailwind.postcss";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

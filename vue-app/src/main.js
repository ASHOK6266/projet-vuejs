import Vue from "vue";
import App from "./App.vue";
import router from "./routes";
import Vuelidate from "vuelidate";

Vue.config.productionTip = false;
Vue.use(Vuelidate);

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
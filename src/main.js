import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import History from "./components/History.vue";
import Sending from "./components/Sending.vue";
import { store } from "./store";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Sending },
  { path: "/history", component: History },
];

const router = new VueRouter({
  routes: routes,
});

Vue.config.productionTip = false;

new Vue({
  store: store,
  render: (h) => h(App),
  router: router,
}).$mount("#app");

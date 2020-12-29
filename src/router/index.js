import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/Step1",
    name: "Step1",
    component: () =>
      import(/* webpackChunkName: "step1" */ "../views/Step1.vue"),
  },
  {
    path: "/Step2",
    name: "Step2",
    component: () =>
      import(/* webpackChunkName: "step2" */ "../views/Step2.vue"),
  },
  {
    path: "/Step3",
    name: "Step3",
    component: () =>
      import(/* webpackChunkName: "step3" */ "../views/Step3.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

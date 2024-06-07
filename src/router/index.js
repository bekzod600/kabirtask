import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from) {
    if (from.path !== to.path) return { top: 0 };
  },
  routes,
});

export default router;

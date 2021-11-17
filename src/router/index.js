import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import News from "../views/News.vue";
import Activities from "../views/Activities.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/news",
    name: "News",
    component: News,
  },
  {
    path: "/activities",
    name: "Activities",
    component: Activities,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;

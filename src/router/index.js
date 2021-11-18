import { createRouter, createWebHistory } from "vue-router";
import Home from "/@/views/Home.vue";
import News from "/@/views/News.vue";
import Activities from "/@/views/Activities.vue";
import Detail from "/@/views/Detail.vue";

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
    path: "/detail",
    name: "Detail",
    component: Detail,
  },
  {
    path: "/activities",
    name: "Activities",
    component: Activities,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/",
    hidden: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;

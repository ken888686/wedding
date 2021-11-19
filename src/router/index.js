import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import News from "@/views/News.vue";
import Activities from "@/views/Activities.vue";
import Detail from "@/views/Detail.vue";
import BikeMap from "@/views/BikeMap.vue";
import BikeRent from "@/views/BikeRent.vue";

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
    path: "/bike-map",
    name: "BikeMap",
    component: BikeMap,
  },
  {
    path: "/bike-rent",
    name: "BikeRent",
    component: BikeRent,
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

// 換頁面畫面置頂
router.afterEach((to, from, next) => {
  // console.log(to, from, next);
  window.scrollTo(0, 0);
});

export default router;

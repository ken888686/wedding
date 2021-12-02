import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import OurStory from '@/views/OurStory.vue';
import Photos from '@/views/Photos.vue';
import Honeymoon from '@/views/Honeymoon.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/our-story',
    name: 'Our Story',
    component: OurStory,
  },
  {
    path: '/photos',
    name: 'Photos',
    component: Photos,
  },
  {
    path: '/honeymoon',
    name: 'Honeymoon',
    component: Honeymoon,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

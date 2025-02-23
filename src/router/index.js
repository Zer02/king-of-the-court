import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import GlobalLeaderboard from "@/components/GlobalLeaderboard.vue";
import LocalLeaderboard from "@/components/LocalLeaderboard.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    { path: "/global", component: GlobalLeaderboard },
    {
      path: "/court/:id",
      component: LocalLeaderboard,
      name: "court-leaderboard",
    },
  ],
});

export default router

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/editor/:id",
    name: "Editor",
    component: () => import("../views/Editor.vue"),
  },
  {
    path: "/view/:id",
    name: "View",
    component: () => import("../views/Viewer.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

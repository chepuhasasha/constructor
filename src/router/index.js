import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Test",
    component: () => import("../views/Test.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

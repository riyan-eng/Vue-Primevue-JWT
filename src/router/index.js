import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../views/Dashboard.vue"),
  },
  {
    path: "/login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/register",
    component: () => import("../views/Register.vue"),
  },
];

export default createRouter({
  routes,
  history: createWebHistory(),
});

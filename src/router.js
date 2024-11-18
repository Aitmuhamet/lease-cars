import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/home",
    component: () => import("./views/HomeView.vue"),
    alias: "/",
    meta: { mainPage: true },
  },
  {
    path: "/new-cars",
    component: () => import("./views/CarsView.vue"),
    meta: { mainPage: false },
  },
  {
    path: "/pre-owned-cars",
    component: () => import("./views/PreOwnedCarsView.vue"),
    meta: { mainPage: false },
  },
  {
    path: "/finance",
    component: () => import("./views/FinanceView.vue"),
    meta: { mainPage: false },
  },
  {
    path: "/lease-buy",
    component: () => import("./views/LeaseBuyView.vue"),
    meta: { mainPage: false },
  },
  {
    path: "/contact-us",
    component: () => import("./views/ContactUsView.vue"),
    meta: { mainPage: false },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

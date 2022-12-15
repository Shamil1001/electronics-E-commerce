import { createRouter, createWebHistory } from "vue-router";
import Cart from "../components/cart.vue";
import Main from "../components/main.vue";
import SargytEtmek from "../components/sargytEtmek.vue";
import TechnicalServe from "../components/technicalServe.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/sargyt",
    name: "sargytEtmek",
    component: SargytEtmek,
  },
  {
    path: "/technicalServe",
    name: "technicalServe",
    component: TechnicalServe,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

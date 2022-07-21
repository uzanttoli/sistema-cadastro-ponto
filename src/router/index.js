import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "@/core/components/appLogin.vue";
import Recovery from "@/core/components/recoveryPassword.vue";
// import axios from "axios";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    // beforeEnter: Authorization,
  },
  {
    path: "/recovery-password",
    name: "RecoveryPassword",
    component: Recovery,
  },
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Login,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

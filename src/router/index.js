import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "@/core/components/appLogin.vue";
// import axios from "axios";

Vue.use(VueRouter);

// function Authorization(to, from, next) {
//   if (localStorage.getItem("token") != undefined) {
//     // var req = {token: localStorage.getItem("token")}
//     var tk = {
//       token: localStorage.getItem("token"),
//     };
//     axios
//       .post("http://localhost:3000/validate", tk)
//       .then((res) => {
//         console.log(res);
//         next();
//       })
//       // .catch((error) => {
//       //   console.log(error);
//       //   next("/login");
//       // });
//   }
// }

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    // beforeEnter: Authorization,
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

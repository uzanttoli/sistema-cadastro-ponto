import Vue from "vue";
import axios from "axios";
Vue.use({
  install(Vue) {
    Vue.prototype.$api = axios.create(
      {
        baseURL: "http://localhost:3000/",
        // headers: {
        //   Authorization: "Bearer " + localStorage.getItem("token"),
        // },
      },
      (error) => Promise.reject(error)
    );
    Vue.prototype.$api.interceptors.request.use((config) => {
      return config;
    });
    Vue.prototype.$api.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => Promise.reject(error)
    );
  },
});

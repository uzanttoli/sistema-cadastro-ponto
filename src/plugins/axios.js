import Vue from "vue";
import axios from "axios";
Vue.use({
  install(Vue) {
    Vue.prototype.$api = axios.create(
      {
        baseURL: "https://sistema-cadastro-76d46-default-rtdb.firebaseio.com",
        headers: {
          Authorization: "abc123",
        },
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

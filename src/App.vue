<template>
  <div id="app">
    <v-app>
      <v-card
        elevate-on-scroll
        class="overflow-hidden"
        height="100%"
        width="100%"
      >
        <template v-if="userData">
          <app-bar></app-bar>
          <main-container></main-container>
        </template>
        <app-login v-else> </app-login>
      </v-card>
    </v-app>
  </div>
</template>
<script>
import appBar from "@/core/components/appBar.vue";
import mainContainer from "@/core/components/appMain.vue";

import appLogin from "@/core/components/appLogin.vue";
export default {
  components: {
    appBar,
    mainContainer,
    appLogin,
  },
  data: () => ({
    login: false,
    nome: null,
    email: null,
  }),
  computed: {
    userData() {
      return JSON.parse(localStorage.getItem("userData"));
    },
  },
  methods: {},
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body,
html {
  min-height: 100%;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

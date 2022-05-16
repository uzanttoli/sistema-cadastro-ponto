<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <h2>Sistema de cadastro | Hoteis</h2>
    </v-app-bar>

    <v-main>
      <Home />
    </v-main>
  </v-app>
</template>

<script>
import Home from "./components/HomePrincipal.vue";

export default {
  name: "App",

  components: {
    Home,
  },

  data: () => ({
    //
  }),
};
</script>

<template>
  <v-app-bar app color="black" dark elevate-on-scroll height="57">
    <h3>Sistema de Cadastro de Ponto</h3>
    <v-spacer></v-spacer>
    <v-btn icon @click="sair()"><v-icon>mdi-exit-run</v-icon></v-btn>
  </v-app-bar>
</template>

<script>
import router from "@/router/index";
export default {
  methods: {
    sair() {
      localStorage.removeItem("token");
      router.push("/login");
      window.location.reload();
    },
  },
};
</script>

<style></style>

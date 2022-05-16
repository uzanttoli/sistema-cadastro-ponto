<template>
  <v-container>
    <v-card class="ma-4">
      <v-row>
        <v-col cols="6" class="ma-2">
          <v-card>
            <cadastro-ponto />
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import cadastroPonto from "./cadastrarPonto.vue";
export default {
  components: {
    cadastroPonto,
  },
  data: () => ({}),
};
</script>

<style></style>

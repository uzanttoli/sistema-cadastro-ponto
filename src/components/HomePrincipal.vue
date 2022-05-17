<template>
  <v-container>
    <v-card class="ma-4">
      <v-col>
        <v-row>
          <v-col cols="6">
            <v-card>
              <cadastro-ponto />
            </v-card>
          </v-col>
          <v-col cols="6">
            <v-card>
              <historico-cadastro />
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-card>
  </v-container>
</template>

<script>
import cadastroPonto from "./cadastrarPonto.vue";
import historicoCadastro from "./historicoCadastro.vue";
export default {
  components: {
    cadastroPonto,
    historicoCadastro,
  },
  data: () => ({}),
};
</script>

<style></style>

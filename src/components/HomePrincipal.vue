<template>
  <v-container>
    <v-card class="ma-4">
      <v-col>
        <v-row>
          <v-col cols="6">
            <v-card>
              <cadastro-ponto @update:refetch="attHistorico = true" />
            </v-card>
          </v-col>
          <v-col cols="6">
            <v-card>
              <historico-cadastro
                :atualizar="attHistorico"
                @update:attHistorico="attHistorico = false"
              />
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <card-semana />
          </v-col>
        </v-row>
      </v-col>
    </v-card>
  </v-container>
</template>

<script>
import cardSemana from "./cards/cardSemana.vue";
import cadastroPonto from "./cadastrarPonto.vue";
import historicoCadastro from "./historicoCadastro.vue";
export default {
  components: {
    cadastroPonto,
    historicoCadastro,
    cardSemana,
  },
  data: () => ({
    attHistorico: false,
  }),
};
</script>

<style></style>

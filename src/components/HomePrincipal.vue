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
        <v-divider class="ma-5"></v-divider>
        <v-row>
          <v-col cols="4">
            <card-semana>
              <template v-slot:conteudo>
                <pre>{{ _dados }}</pre>
              </template>
            </card-semana>
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
    dados: [],
  }),
  computed: {
    _dados() {
      let dados = this.dados;
      for (const [key, value] of Object.entries(dados)) {
        let chave = key;
        console.log(chave);
        let dados = value;
        for (const [key2, value2] of Object.entries(dados)) {
          console.log(key2, value2);
        }
      }
      return dados;
    },
  },
  methods: {
    loadBase() {
      this.$api.get("dados_hotel.json").then((res) => {
        this.dados = res.data;
      });
    },
  },
  created() {
    this.loadBase();
  },
};
</script>

<style></style>

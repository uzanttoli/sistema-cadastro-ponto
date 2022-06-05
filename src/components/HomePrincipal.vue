<template>
  <v-container>
    <v-card class="ma-4">
      <v-col>
        <v-row>
          <v-col>
            <v-card>
              <cadastro-ponto @update:refetch="attHistorico = true" />
            </v-card>
          </v-col>
          <v-col>
            <v-card>
              <historico-cadastro
                :atualizar="attHistorico"
                @update:attHistorico="attHistorico = false"
              />
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
  data: () => ({
    attHistorico: false,
    dados: [],
    name: "",
    email: "",
    message: "",
  }),
  computed: {},
  methods: {
    loadBase() {
      this.$api.get("dados_hotel.json").then((res) => {
        this.dados = [res.data];
      });
    },
  },
  created() {
    this.loadBase();
  },
};
</script>

<style></style>

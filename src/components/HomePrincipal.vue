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
          <v-col cols="4" v-for="i in cards()" :key="i">
            <card-semana>
              <template v-slot:conteudo>
                <span
                  v-for="(item, i) in dados"
                  :key="i"
                  class="text-no-wrap font-weight-medium"
                >
                  # {{ diaSemana(item.date) }}, {{ formatDate(item.date) }},
                  {{ item.nome }}, {{ item.timeStart + "h" }} -
                  {{ item.timeEnd + "h" }}
                </span>
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
    cards() {
      let n = 1;
      console.log(n)
      // let dados = this.dados;
      // for (let i = 0; i < Object.keys(dados).length; i++) {
      //   if (Object.keys(dados).length > 7) {
      //     n++;
      //   }
      // }
      // console.log(Object.keys(dados).length);
      return n;
    },
    formatDate(value) {
      if (!value) return;
      const [year, month, day] = value.split("-");
      return `${day}/${month}/${year}`;
    },
    diaSemana(value) {
      let semana = [
        "Segunda-Feira",
        "Terça-Feira",
        "Quarta-Feira",
        "Quinta-Feira",
        "Sexta-Feira",
        "Sábado",
        "Domingo"
      ];
      let date = new Date(value);
      return semana[date.getDay()].slice(0, 3);
    },
    parseData(data) {
      if (!data) return {};
      if (typeof data === "object") return data;
      if (typeof data === "string") return JSON.parse(data);

      return {};
    },
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

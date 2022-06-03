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
      </v-col>
      <div class="container">
        <form ref="form" @submit.prevent="sendEmail">
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message"></textarea>
          <input type="submit" value="Send" />
        </form>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import emailjs from "emailjs-com";
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
    sendEmail() {
      emailjs
        .sendForm(
          `${process.env.YOUR_SERVICE_ID}`,
          `${process.env.YOUR_TEMPLATE_ID}`,
          this.$refs.form,
          `${process.env.YOUR_PUBLIC_KEY}`
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },
    cards() {
      let n = 1;
      console.log(n);
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
        "Domingo",
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

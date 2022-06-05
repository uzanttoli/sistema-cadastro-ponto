<template>
  <section>
    <v-card-title>Cadastrar Ponto</v-card-title>
    <v-divider></v-divider>
    <v-row class="ma-1">
      <v-col cols="6">
        <v-autocomplete
          :items="items"
          dense
          filled
          v-model="formularioCadastro.nome"
          label="Hotel"
          @change="numeroId()"
          no-data-text="Não há cadastro com esse nome!"
        ></v-autocomplete>
      </v-col>
      <v-col cols="6">
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="formularioCadastro.date"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="data"
              label="Data trabalhada"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="formularioCadastro.date" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.menu.save(formularioCadastro.date)"
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
      </v-col>
    </v-row>
    <v-row class="ma-1">
      <v-col cols="6">
        <v-menu
          ref="menuHora"
          v-model="menu2"
          :close-on-content-click="false"
          :nudge-right="40"
          :return-value.sync="formularioCadastro.timeStart"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="formularioCadastro.timeStart"
              label="Hora Entrada"
              prepend-icon="mdi-clock-time-four-outline"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-time-picker
            v-if="menu2"
            v-model="formularioCadastro.timeStart"
            format="24hr"
            full-width
            @click:minute="$refs.menuHora.save(formularioCadastro.timeStart)"
          ></v-time-picker>
        </v-menu>
      </v-col>
      <v-col cols="6">
        <v-menu
          ref="menuHoraFim"
          v-model="menu3"
          :close-on-content-click="false"
          :nudge-right="40"
          :return-value.sync="formularioCadastro.timeEnd"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="formularioCadastro.timeEnd"
              label="Hora Saida"
              prepend-icon="mdi-clock-time-four-outline"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-time-picker
            v-if="menu3"
            v-model="formularioCadastro.timeEnd"
            format="24hr"
            full-width
            @click:minute="$refs.menuHoraFim.save(formularioCadastro.timeEnd)"
          ></v-time-picker>
        </v-menu>
      </v-col>
    </v-row>
    <v-row class="ma-1">
      <v-col cols="12">
        <v-textarea
          filled
          v-model="formularioCadastro.descricao"
          auto-grow
          label="Descrição, caso necessario"
          rows="4"
          @change="corpoForm()"
          row-height="15"
          shaped
        ></v-textarea>
      </v-col>
    </v-row>
    <v-row class="ma-1">
      <v-col cols="6">
        <form ref="form" @submit.prevent="sendEmail">
          <div class="d-none">
            <input type="text" name="user_name" />
            <input type="email" name="user_email" :value="user_email" />
            <v-textarea name="message" :value="html"> </v-textarea>
          </div>
          <v-btn
            :disabled="!this.dadosValido()"
            class="mb-1"
            type="submit"
            block
            color="primary"
            @click="salvar()"
            >Salvar</v-btn
          >
        </form>
      </v-col>
      <v-col cols="6">
        <v-btn class="mb-1" block color="error" @click="limparFormulario()"
          >Limpar</v-btn
        >
      </v-col>
    </v-row>
  </section>
</template>

<script>
import emailjs from "emailjs-com";
export default {
  props: {
    save: {
      type: Boolean,
    },
  },
  data: () => ({
    user_name: "Adriele",
    user_email: "uosantos@outlook.com.br",
    items: ["Vidam", "Del Mar"],
    menu: false,
    menuHora: false,
    menuHoraFim: false,
    saved: false,
    menu2: false,
    menu3: false,
    modal: false,
    base: [],
    html: "",
    id: null,
    formularioCadastro: {
      date: null,
      timeEnd: null,
      nome: null,
      timeStart: null,
      descricao: null,
      numId: null,
      diaria: 68.0,
    },
    formularioCadastroDefault: {
      timeEnd: null,
      nome: null,
      date: null,
      timeStart: null,
      descricao: null,
    },
  }),
  computed: {
    data() {
      return this.formatarData(this.formularioCadastro.date);
    },
  },
  methods: {
    numeroId() {
      let min = Math.ceil(5);
      let max = Math.floor(10000);
      return (this.formularioCadastro.numId =
        Math.floor(Math.random() * (max - min)) + min);
    },
    corpoForm() {
      let hotel = this.formularioCadastro.nome;
      let date = this.formularioCadastro.date;
      let diaria = this.formularioCadastro.diaria;
      let descricao = this.formularioCadastro.descricao;
      let numId = this.formularioCadastro.numId;

      this.html =
        this.html +
        `
              <h3>Olá ${this.user_name}</h3>
              <h5>Aqui está seu registro diario de trabalho:</h5>
              <h3>Número do registro: # ${numId}</h3>
              <table summary="Registro breve do seu trabalho feito com muito carinho!" border="1">
              <caption>Resumo do Seu Dia</caption>
              <thead>
                <tr style="text-align: center">
                  <th style="background-color:#999;" colspan="4">Tabela de Trabalho</th>
                </tr>
              </thead>
              <tbody>
                <tr style="text-align: center; font-weight: bold;">
                  <td  style="padding: 0px 5px 0px 5px">Nome Hotel</td>
                  <td  style="padding: 0px 5px 0px 5px">Data</td>
                  <td  style="padding: 0px 5px 0px 5px">Diaria</td>
                  <td  style="padding: 0px 5px 0px 5px">Descrição</td>
                </tr>
                <tr style="text-align: center">
                  <td>${hotel}</td>
                  <td>${date}</td>
                  <td>R$ ${diaria}</td>
                  <td>${descricao}</td>
                </tr>
              </tbody>
              </table>
          `;
    },
    sendEmail() {
      emailjs
        .sendForm(
          `service_8yfxb5f`,
          `template_mgkxs1m`,
          this.$refs.form,
          `fKL7cdgQ9-G9WVKxD`
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
    formatarData(date) {
      if (!date) return;
      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
    },
    limparFormulario() {
      Object.assign(this.formularioCadastro, this.formularioCadastroDefault);
    },
    dadosValido() {
      return (
        this.formularioCadastro.timeEnd &&
        this.formularioCadastro.nome &&
        this.formularioCadastro.date &&
        this.formularioCadastro.timeStart &&
        this.formularioCadastro.descricao
      );
    },
    loadBase() {
      this.$api.get("dados_hotel.json").then((res) => {
        this.base = res.data;
      });
    },
    salvar() {
      this.$emit("update:refetch");
      this.saved = true;
      const metodo = this.id ? "patch" : "post";
      const finalUrl = this.id ? `/${this.id}.json` : ".json";
      this.$api[metodo](
        `/dados_hotel${finalUrl}`,
        this.formularioCadastro
      ).then(() => {
        this.limparFormulario();
        this.saved = false;
        this.html = ""
      });
    },
  },
  watch: {},
  created() {},
};
</script>

<style scoped></style>

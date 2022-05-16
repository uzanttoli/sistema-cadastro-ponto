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
        ></v-autocomplete>
      </v-col>
      <v-col cols="6">
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="date"
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
          <v-date-picker v-model="date" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
            <v-btn text color="primary" @click="$refs.menu.save(date)">
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
          row-height="15"
          shaped
        ></v-textarea>
      </v-col>
    </v-row>
    <v-row class="ma-1">
      <v-col cols="6">
        <v-btn class="mb-1" block color="primary" @click="salvar()"
          >Salvar</v-btn
        >
      </v-col>
      <v-col cols="6">
        <v-btn class="mb-1" block color="error">Limpar</v-btn>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  data: () => ({
    items: ["Vidam", "Del Mar"],
    date: null,
    menu: false,
    menuHora: false,
    menuHoraFim: false,
    menu2: false,
    menu3: false,
    modal: false,
    id: null,
    formularioCadastro: {
      timeEnd: null,
      nome: null,
      timeStart: null,
      descricao: null,
    },
    formularioCadastroDefault: {
      timeEnd: null,
      nome: null,
      timeStart: null,
      descricao: null,
    },
  }),
  computed: {
    data() {
      return this.formatarData(this.date);
    },
  },
  methods: {
    formatarData(date) {
      if (!date) return;
      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
    },
    limparFormulario() {
      Object.assign(this.formularioCadastro, this.formularioCadastroDefault);
    },
    salvar() {
      const metodo = this.id ? "patch" : "post";
      const finalUrl = this.id ? `/${this.id}.json` : ".json";
      this.$api[metodo](
        `/dados_hotel${finalUrl}`,
        this.formularioCadastro
      ).then(() => {
        this.limparFormulario();
      });
    },
  },
  created() {
    this.$api.post("hoteis.json", [{ nome: "Vidam" }, { nome: "Del Mar" }]);
  },
};
</script>

<style></style>

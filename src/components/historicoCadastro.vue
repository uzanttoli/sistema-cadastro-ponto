<template>
  <section class="historico" v-if="base">
    <v-card-title>Histórico | Total R$</v-card-title>
    <v-divider></v-divider>
    <v-card class="mx-auto overflow-auto" height="412">
      <v-card-text class="py-0">
        <v-timeline align-top dense>
          <v-timeline-item
            :color="gerarCor()"
            small
            v-for="(item, i) in base"
            :key="i"
          >
            <v-row class="pt-1">
              <v-col cols="3">
                <v-row>
                  <v-tooltip bottom color="red">
                    <template v-slot:activator="{ attrs, on }">
                      <v-btn
                        v-bind="attrs"
                        v-on="on"
                        icon
                        @click="deleteCadastro(i)"
                      >
                        <v-icon color="red">mdi-delete-empty</v-icon>
                      </v-btn>
                      <strong class="mt-2">{{ item.nome }}</strong>
                    </template>
                    <span>Excluir</span>
                  </v-tooltip>
                </v-row>
              </v-col>
              <v-col>
                Data: <strong>{{ convertDataBR(item.date) }}</strong>
                <div class="text-caption">
                  De {{ item.timeStart }} até {{ item.timeEnd }}
                </div>
                <div>R$ {{ item.diaria }}</div>
                <div>
                  <v-textarea
                    filled
                    label="Descrição"
                    auto-grow
                    rows="1"
                    disabled
                    :value="item.descricao"
                  ></v-textarea>
                </div>
              </v-col>
            </v-row>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-card>
  </section>
</template>

<script>
export default {
  props: {
    atualizar: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    base: [],
  }),
  methods: {
    deleteCadastro(id) {
      let finalUrl = `/${id}.json`;
      this.$api.delete(`dados_hotel${finalUrl}`).then(() => {
        this.loadBase();
      });
    },
    tratamentoDados(value) {
      let obj = value;
      let result = Object.keys(obj).map((key) => {
        return [Number(key), obj[key]];
      });

      for (let i = 0; result.length; i++) {
        for (var z = 0; result[i].length; z++) {
          document.write(result[i][z] + " ");
        }
        document.write("</br>");
      }
      return result;
    },
    gerarCor(opacidade = 1) {
      let r = Math.random() * 255;
      let g = Math.random() * 255;
      let b = Math.random() * 255;

      return `rgba(${r}, ${g}, ${b}, ${opacidade})`;
    },
    loadBase() {
      this.$api.get("dados_hotel.json").then((res) => {
        this.base = res.data;
        this.$emit("update:attHistorico");
      });
    },
    convertDataBR(value) {
      if (!value) return;
      const [year, month, day] = value.split("-");
      return `${day}/${month}/${year}`;
    },
  },
  watch: {
    atualizar() {
      if (this.atualizar === true) {
        return this.loadBase();
      }
    },
  },
  created() {
    this.loadBase();
  },
};
</script>

<style></style>

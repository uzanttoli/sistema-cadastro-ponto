<template>
  <section class="historico">
    <v-card-title>Histórico | Total R$</v-card-title>
    <v-divider></v-divider>
    <v-card class="mx-auto overflow-auto" height="412">
      <v-card-text class="py-0">
        <v-timeline align-top dense>
          <v-timeline-item
            color="pink"
            small
            v-for="(item, i) in base"
            :key="i"
          >
            <v-row class="pt-1">
              <v-col cols="3">
                <strong>{{ item.nome }}</strong>
              </v-col>
              <v-col>
                Data: <strong>{{ item.date }}</strong>
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
  //   props: {
  //     save: {
  //       type: Boolean,
  //     },
  //   },
  data: () => ({
    base: [],
  }),
  methods: {
    loadBase() {
      this.$api.get("dados_hotel.json").then((res) => {
        this.base = res.data;
      });
    },
    somaTotal() {
      let dados = this.base;
      if (dados) {
        console.log(dados);
      }
    },
  },
  created() {
    this.loadBase();
    this.somaTotal();
  },
};
</script>

<style></style>

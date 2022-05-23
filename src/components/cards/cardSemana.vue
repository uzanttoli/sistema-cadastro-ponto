<template>
  <v-card elevation="5" class="mx-auto rounded-xl">
    <v-list-item three-line>
      <v-row>
        <v-col>
          <div>
            <p id="text-title" class="text-h5 text-center text-primary">
              {{ title }}
            </p>
            <v-divider></v-divider>
          </div>
        </v-col>
      </v-row>
    </v-list-item>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-center"></v-list-item-title>
        {{day}}
        <slot name="conteudo"></slot>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "#RESUMO SEMANAL",
    },
    day: {
      title: String,
      default: "#Seg, 23/05/2022, Vidam, 08:00h - 16:00h",
    },
  },
  methods: {
    semana() {
      let date = new Date();
      return date.getDay();
    },
  },
};
</script>

<style scoped>
#text-title {
  color: #757575;
}
</style>

<template>
  <v-card class="mx-auto rounded-xl" elevation="8">
    <v-list-item>
      <div>
        <strong>{{ semana() }}</strong>
      </div>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Titulo",
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

<style></style>

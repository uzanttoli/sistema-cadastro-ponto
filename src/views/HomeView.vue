<template>
  <div class="home">
    <HomePrincipal />
  </div>
</template>

<script>
// @ is an alias to /src
import HomePrincipal from "@/components/HomePrincipal.vue";

export default {
  name: "HomeView",
  components: {
    HomePrincipal,
  },
};
</script>

<template>
  <div>
    <template v-if="reset == false">
      <app-login @recoverypassword="reset = true"></app-login>
    </template>
    <template v-else>
      <app-recovery @login="reset = false"></app-recovery>
    </template>
    <template> </template>
  </div>
</template>

<script>
import appLogin from "./appLogin.vue";
import appRecovery from "./recoveryPassword.vue";
export default {
  components: {
    appLogin,
    appRecovery,
  },
  data: () => ({
    reset: false,
  }),
  methods: {
    teste() {},
  },
};
</script>

<style></style>

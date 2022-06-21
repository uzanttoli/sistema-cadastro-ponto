<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10">
        <v-card class="elevation-6 mt-12">
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-row>
                <v-col cols="12" sm="6">
                  <v-card-text class="mt-12">
                    <h4 class="text-center">Faça login na sua Conta</h4>
                    <h6 class="text-center grey--text">
                      Faça login na sua conta para que você possa continuar
                      cadastrando
                      <br />e consultando seu cadastro.
                    </h6>
                    <v-row align="center" justify="center">
                      <v-col cols="12" sm="8">
                        <v-text-field
                          label="Nome"
                          outlined
                          v-model="user.nome"
                          dense
                          color="blue"
                          autocomplete="false"
                          class="mt-16"
                        ></v-text-field>
                        <v-text-field
                          label="Email"
                          outlined
                          v-model="user.email"
                          dense
                          color="blue"
                          autocomplete="false"
                          type="email"
                        ></v-text-field>
                        <v-btn color="blue" dark block tile @click="acessar()"
                          >Login</v-btn
                        >
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-col>
                <v-col cols="12" sm="6" class="blue rounded-bl-xl">
                  <div style="text-align: center; padding: 180px 0">
                    <v-card-text class="white--text">
                      <h3 class="text-center">
                        Projeto criado como forma de aprendizado!
                      </h3>
                      <h6 class="text-center">
                        Todas as informações cadastradas são ficticias.
                      </h6>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn
                        tile
                        outlined
                        dark
                        href="https://github.com/uzanttoli/sistema-cadastro-ponto"
                        target="_blank"
                        ><v-icon>fa-brands fa-github</v-icon></v-btn
                      >
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import router from "@/router/index";
export default {
  data: () => ({
    step: 1,
    user: {
      nome: "",
      email: "",
    },
  }),
  props: {
    source: String,
  },
  methods: {
    acessar() {
      if (this.user.nome == "" || this.user.email == "") {
        return;
      }
      localStorage.setItem("userData", JSON.stringify(this.user));
      router.push("/");
      window.location.reload();
    },
  },
};
</script>

<style scoped>
.v-application .rounded-bl-xl {
  border-bottom-left-radius: 300px !important;
}

.v-application .rounded-br-xl {
  border-bottom-right-radius: 300px !important;
}
</style>

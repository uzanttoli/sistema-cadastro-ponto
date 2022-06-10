<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10">
        <v-card class="elevation-6 mt-10">
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
                          dense
                          color="blue"
                          autocomplete="false"
                          class="mt-16"
                        ></v-text-field>
                        <v-text-field
                          label="Email"
                          outlined
                          dense
                          color="blue"
                          autocomplete="false"
                          type="email"
                        ></v-text-field>
                        <v-row>
                          <v-col cols="12" sm="7">
                            <v-checkbox
                              label="Lembre de mim"
                              class="mt-n1"
                              color="blue"
                            ></v-checkbox>
                          </v-col>
                          <v-col cols="12" sm="5">
                            <span class="caption blue--text"
                              >Esqueceu Senha?</span
                            >
                          </v-col>
                        </v-row>
                        <v-btn color="blue" dark block tile>Login</v-btn>
                        <h5 class="text-center grey--text mt-4 mb-3">
                          Ou faça login usando
                        </h5>
                        <div
                          class="d-flex justify-space-betwenn align-center mx-10 mb-16"
                        >
                          <v-btn depressed outlined color="grey">
                            <v-icon color="red">fab fa-google</v-icon>
                          </v-btn>
                          <v-spacer></v-spacer>
                          <v-btn depressed outlined color="grey">
                            <v-icon color="blue">fab fa-facebook-f</v-icon>
                          </v-btn>
                          <v-spacer></v-spacer>
                          <v-btn depressed outlined color="grey">
                            <v-icon color="light-blue lighten-3"
                              >fab fa-twitter</v-icon
                            >
                          </v-btn>
                        </div>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-col>
                <v-col cols="12" sm="6" class="blue rounded-bl-xl">
                  <div style="text-align: center; padding: 180px 0">
                    <v-card-text class="white--text">
                      <h3 class="text-center">Não tem uma conta ainda?</h3>
                      <h6 class="text-center">
                        Vamos configurar tudo para que você possa começar a
                        criar seu primeiro <br />
                        cadastro.
                      </h6>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn tile outlined dark @click="step++">SIGN UP</v-btn>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
            <v-window-item :value="2">
              <v-row>
                <v-col cols="12" sm="6" class="blue rounded-br-xl">
                  <div style="text-align: center; padding: 180px 0">
                    <v-card-text class="white--text">
                      <h3 class="text-center">Já se inscreveu?</h3>
                      <h6 class="text-center">
                        Faça login na sua conta para que você possa continuar
                        cadastrando
                        <br />e consultando seu cadastro.
                      </h6>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn tile outlined dark @click="step--">Log in</v-btn>
                    </div>
                  </div>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-card-text class="mt-12">
                    <h4 class="text-center">Inscreva-se pra uma conta</h4>
                    <h6 class="text-center grey--text">
                      Vamos configurar tudo para que você possa começar a criar
                      seu primeiro <br />cadastro.
                    </h6>
                    <v-row align="center" justify="center">
                      <v-col cols="12" sm="8">
                        <v-row>
                          <v-col cols="12" sm="6">
                            <v-text-field
                              label="Primeio Nome"
                              outlined
                              dense
                              color="blue"
                              autocomplete="false"
                              class="mt-4"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <v-text-field
                              label="Ultimo Nome"
                              outlined
                              dense
                              color="blue"
                              autocomplete="false"
                              class="mt-4"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                        <v-text-field
                          label="Nome"
                          outlined
                          dense
                          color="blue"
                          autocomplete="false"
                        ></v-text-field>
                        <v-text-field
                          label="Email"
                          outlined
                          dense
                          color="blue"
                          type="email"
                        ></v-text-field>
                        <v-row>
                          <v-col cols="12" sm="7">
                            <v-checkbox
                              label="Eu aceito"
                              class="mt-n1"
                              color="blue"
                            ></v-checkbox>
                          </v-col>
                          <v-col cols="12" sm="5">
                            <span class="caption blue-text ml-n4"
                              >Terms & Condition</span
                            >
                          </v-col>
                        </v-row>
                        <v-btn color="blue" dark block tile>Sign Up</v-btn>
                        <h5 class="text-center grey--text mt-4 mb-3">
                          Ou Inscreva-se usando
                        </h5>
                        <div
                          class="d-flex justify-space-betwenn align-center mx-10 mb-16"
                        >
                          <v-btn depressed outlined color="grey">
                            <v-icon color="red">fab fa-google</v-icon>
                          </v-btn>
                          <v-spacer></v-spacer>
                          <v-btn depressed outlined color="grey">
                            <v-icon color="blue">fab fa-facebook-f</v-icon>
                          </v-btn>
                          <v-spacer></v-spacer>
                          <v-btn depressed outlined color="grey">
                            <v-icon color="light-blue lighten-3"
                              >fab fa-twitter</v-icon
                            >
                          </v-btn>
                        </div>
                      </v-col>
                    </v-row>
                  </v-card-text>
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
export default {
  data: () => ({
    step: 1,
  }),
  props: {
    source: String,
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

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
                          label="Email"
                          outlined
                          v-model="user.email"
                          dense
                          color="blue"
                          autocomplete="false"
                          class="mt-16"
                          type="email"
                          placeholder="exemplo@exemplo.com.br"
                        ></v-text-field>
                        <v-text-field
                          label="Senha"
                          outlined
                          v-model="user.password"
                          dense
                          color="blue"
                          placeholder="***********"
                          autocomplete="false"
                          type="password"
                        ></v-text-field>
                        <v-row>
                          <v-col cols="12" sm="5">
                            <span class="caption blue--text"
                              >Esqueceu Senha?</span
                            >
                          </v-col>
                        </v-row>
                        <v-btn
                          color="blue"
                          dark
                          block
                          tile
                          @click="login()"
                          :loading="sendLogin"
                          >Login</v-btn
                        >
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
                      <v-btn tile outlined dark @click="step++"
                        >Cadastre-se</v-btn
                      >
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
                          <v-col cols="12" sm="12">
                            <v-text-field
                              label="Nome Completo"
                              outlined
                              dense
                              color="blue"
                              autocomplete="false"
                              v-model="register.name"
                              class="mt-4"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                        <v-text-field
                          label="Email"
                          outlined
                          dense
                          color="blue"
                          type="email"
                          v-model="register.email"
                          autocomplete="false"
                        ></v-text-field>
                        <v-text-field
                          label="Senha"
                          outlined
                          dense
                          placeholder="******"
                          color="blue"
                          type="password"
                          v-model="register.password"
                        ></v-text-field>
                        <v-btn
                          color="blue"
                          dark
                          :loading="send"
                          block
                          tile
                          @click="newRegister()"
                          >Cadastrar</v-btn
                        >
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-window-item>
            <v-snackbar v-model="alertNewRegister">
              {{ text }}

              <template v-slot:action="{ attrs }">
                <v-icon color="green" text v-bind="attrs">
                  fa-thin fa-thumbs-up
                </v-icon>
              </template>
            </v-snackbar>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import router from "../../router/index";
export default {
  data: () => ({
    step: 1,
    alertNewRegister: false,
    send: false,
    sendLogin: false,
    text: "Cadastro realizado com sucesso!",
    user: {
      email: "",
      password: "",
    },
    register: {
      name: "",
      email: "",
      password: "",
    },
  }),
  props: {
    source: String,
  },
  methods: {
    login() {
      if (this.user.email == "" || this.user.password == "") {
        return;
      }
      this.sendLogin = true;
      this.$api.post("/login", this.user).then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.token));
        router.push("/");
        window.location.reload();
        this.sendLogin = false; 
      });
      // console.log(result);F
      // router.push("/");
      // window.location.reload();
    },
    async newRegister() {
      this.send = true;
      await this.$api.post("/users", this.register).then(() => {
        this.alertNewRegister = true;
        this.send = false;
        this.step = 1;
      });
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

<template>
  <div>
    <template>
      <v-stepper v-model="e6" vertical width="500" class="mx-auto mt-16">
        <v-stepper-step :complete="e6 > 1" step="1">
          <v-row>
            Recuperar Senha
            <v-spacer></v-spacer
            ><v-btn icon @click="$emit('login')"
              ><v-icon color="black">
                mdi-arrow-u-left-bottom-bold
              </v-icon></v-btn
            >
          </v-row>

          <small>Insira um email valido!</small>
        </v-stepper-step>

        <v-stepper-content step="1">
          <v-card color="grey lighten-1" class="mb-12">
            <v-list>
              <form ref="form" @submit.prevent="sendEmail">
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title
                      >Insira seu email de cadastro:</v-list-item-title
                    >
                    <v-col>
                      <v-row>
                        <v-text-field
                          label="Email"
                          placeholder="exemplo@exemplo.com"
                          type="email"
                          v-model="email"
                        ></v-text-field>
                        <v-btn
                          small
                          color="success"
                          class="white--text mt-5 ml-2"
                          @click="recoverySend()"
                          >Recuperar
                        </v-btn>
                      </v-row>
                    </v-col>
                  </v-list-item-content>
                </v-list-item>
                <div class="d-none">
                  <input type="text" name="user_name" />
                  <input type="email" name="user_email" :value="email" />
                  <v-textarea name="message" :value="html"> </v-textarea>
                </div>
              </form>
            </v-list>
          </v-card>
          <v-btn color="primary" @click="e6 = 2"> Já possuo token </v-btn>
        </v-stepper-content>

        <v-stepper-step :complete="e6 > 2" step="2">
          Já possuo token
        </v-stepper-step>

        <v-stepper-content step="2">
          <v-card color="grey lighten-1" class="mb-12">
            <v-list>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title
                    >Insira o token e a nova senha:</v-list-item-title
                  >
                  <v-col>
                    <v-row>
                      <v-text-field
                        label="token"
                        placeholder="dwqdqwd-dqwqwdqw-dasgfre-dasdas"
                        type="text"
                        v-model="resetPassword.token"
                      ></v-text-field>
                      <v-text-field
                        label="Nova senha"
                        placeholder="********"
                        type="password"
                        v-model="resetPassword.password"
                      ></v-text-field>
                    </v-row>
                  </v-col>
                </v-list-item-content>
              </v-list-item>
              <v-card-actions class="justify-center">
                <v-btn
                  small
                  color="success"
                  class="white--text mt-5 ml-2"
                  @click="changePassword()"
                  :loading="loading"
                  >Resetar
                </v-btn>
              </v-card-actions>
            </v-list>
          </v-card>
          <v-btn color="primary" @click="e6 = 1"> Não possuo token </v-btn>
        </v-stepper-content>
      </v-stepper>
      <v-snackbar v-model="alert">
        {{ text }}

        <template v-slot:action="{ attrs }">
          <v-icon :color="color" text v-bind="attrs">
            {{ icon }}
          </v-icon>
        </template>
      </v-snackbar>
    </template>
  </div>
</template>
<script>
import emailjs from "emailjs-com";
export default {
  data: () => ({
    user_name: "uanderson",
    email: "",
    html: "",
    alert: false,
    icon: "",
    color: "",
    loading: false,
    text: "",
    e6: 1,
    resetPassword: {
      password: "",
      token: "",
    },
  }),
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          `service_8yfxb5f`,
          `template_mgkxs1m`,
          this.$refs.form,
          `fKL7cdgQ9-G9WVKxD`
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },
    recoverySend() {
      this.loading = true;
      this.$api
        .post("/recoverypassword", { email: this.email })
        .then((res) => {
          this.icon = "fa-solid fa-paper-plane";
          this.color = "green";
          this.alert = true;
          this.text = `Token enviado para ${this.email}`;
          this.html =
            this.html +
            `
              <h3>Olá!</h3>
              <h5>Aqui está o token para reset de senha solicitado:</h5>
              <h3>Não repasse esse token para Ninguem!</h3>
              <hr>
              <h4>Token: ${res.data.token}</h4>
              <hr>
              <span>Acesso <a href="http://192.168.0.166:8080/recovery-password">aqui!</a></span>
          `;
          setTimeout(() => {
            this.sendEmail();
            this.html = "";
            this.alert = false;
            this.loading = false;
            this.text = "";
            this.email = "";
          }, 4000);
        })
        .catch((err) => {
          this.color = "red";
          this.icon = "fa-solid fa-triangle-exclamation";
          this.text = err.response.data.err;
          this.alert = true;
        });
    },

    changePassword() {
      this.loading = true;
      this.$api
        .post("/changepassword", this.resetPassword)
        .then((res) => {
          this.alert = true;
          this.text = res.data.msg;
          this.color = "green";
          this.icon = "fa-solid fa-check";
          this.loading = false;
        })
        .catch((err) => {
          this.alert = true;
          this.text = err.response.data.err;
          this.color = "red";
          this.icon = "fa-solid fa-triangle-exclamation";
          this.loading = false;
        });
    },
  },
};
</script>

<style></style>

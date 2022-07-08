<template>
  <div class="pt-10">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        outlined
        class="rounded-xl"
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      >
      </v-text-field>
      <v-text-field
        outlined
        class="rounded-xl"
        v-model="password"
        :rules="passwordRules"
        label="Password"
        type="password"
        required
      >
      </v-text-field>
      <div class="d-flex">
        <div class="pa-5">
          <NuxtLink to="/auth/signup">Forgot your passsword? </NuxtLink>
        </div>
        <v-spacer></v-spacer>
        <v-btn
          color="blue"
          @click="login"
          depressed
          class="rounded-xl white--text pa-6 text-none"
        >
          Login
        </v-btn>
      </div>

      <!-- <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>

      <v-btn color="warning" @click="resetValidation"> Reset Validation </v-btn> -->
    </v-form>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    password: "",

    passwordRules: [
      (value) => !!value || "Please type password.",
      (value) => (value && value.length >= 6) || "minimum 6 characters",
    ],
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    login() {
      let formValidation = this.$refs.form.validate();

      if (formValidation) {
        this.$fire.auth
          .signInWithEmailAndPassword(this.email, this.password)
          .then((userCredential) => {
            const authUser = {
              uid: userCredential.user.uid,
              email: userCredential.user.email,
            };

            this.$store
              .dispatch("onAuthStateChangedAction", {
                authUser,
              })
              .then(() => {
                this.$router.replace("/");
              })
              .catch((error) => {
                console.log("User State error", error);
              });
          })
          .catch((error) => {
            console.log("Login error", error);
            this.snackbar = true;
            this.errorMessage = error.message;
          });
      }
    },
  },
};
</script>

<style></style>

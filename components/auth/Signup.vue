<template>
  <div class="pt-10">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        outlined
        v-model="name"
        class="rounded-xl"
        :rules="nameRules"
        label="Name"
        required
      >
      </v-text-field>
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
      <div class="d-flex flex-column align-center justify-center">
        <v-btn
          color="blue"
          @click="createAccount"
          style="none"
          depressed
          class="rounded-xl white--text pa-7"
        >
          Create Account
        </v-btn>
        <div class="pa-5">
          <nuxt-link to="/auth/signin"> Already have an Account ? Sign in </nuxt-link>
        </div>
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
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
    password: "",

    passwordRules: [
      (value) => !!value || "Please type password.",
      (value) => (value && value.length >= 6) || "minimum 6 characters",
    ],
  }),

  methods: {
    // validate() {
    //   this.$refs.form.validate();
    // },
    createAccount() {
      console.log(this.name, this.email);
      let formValidation = this.$refs.form.validate();

      if (formValidation) {
        this.$fire.auth
          .createUserWithEmailAndPassword(this.email, this.password)
          .then((userCredential) => {
            const authUser = {
              name: this.name,
              uid: userCredential.user.uid,
              email: userCredential.user.email,
            };
            const currentUser = this.$fire.auth.currentUser;
            this.$fire.firestore.collection("user").doc(userCredential.user.uid).set({
              name: this.name,
              uid: userCredential.user.uid,
              email: userCredential.user.email,
              type: false,
            });

            this.$store
              .dispatch("onAuthStateChangedAction", {
                authUser,
              })
              .then(() => {
                this.$router.replace("/profile");
              })
              .catch((error) => {
                console.log("User State error", error);
              });
          })
          .catch((error) => {
            console.log("Signup error", error);
            this.snackbar = true;
            this.errorMessage = error.message;
          });
      }
    },
  },
};
</script>

<style></style>

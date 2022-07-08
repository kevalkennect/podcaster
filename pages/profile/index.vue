<template>
  <div class="d-flex justify-center align-center pa-10" style="width: 100%; height: 100%">
    <!-- {{ $fire.auth.currentUser.email && $fire.auth.currentUser.email }} -->
    <!-- {{ log }} -->

    <v-form ref="form" style="width: 100%" v-model="valid" lazy-validation>
      <v-text-field
        outlined
        class="rounded-xl"
        v-model="name"
        :rules="nameRules"
        label="Name"
        required
      >
      </v-text-field>
      <v-text-field
        outlined
        disabled
        class="rounded-xl"
        label="ID"
        v-model="uid"
        type="text"
        required
      >
      </v-text-field>
      <v-text-field
        outlined
        disabled
        class="rounded-xl"
        :rules="emailRules"
        v-model="email"
        label="Email"
        type="email"
        required
      >
      </v-text-field>
      <v-checkbox class="pl-5" v-model="type" label="Are you a Podcaster"></v-checkbox>
      <div class="d-flex justify-center">
        <v-btn
          color="blue"
          @click="submitForm"
          depressed
          class="rounded-xl white--text pa-6 text-none"
        >
          Save Data
        </v-btn>
      </div>
    </v-form>
  </div>
</template>

<script>
export default {
  components: {},
  layout: "Profile",
  data: () => ({
    valid: true,
    checkbox: false,
    type: null,
    uid: "",
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
  }),
  mounted() {
    const { getters } = this.$store;
    console.log(getters.getUser);
    const { name, email, uid, type } = getters.getUser;
    this.setData(name, uid, email, type);
  },
  computed: {
    log() {
      return console.log(this.$fire.auth.currentUser?.email);
    },
  },

  methods: {
    setData(name, uid, email, type) {
      this.name = name;
      this.email = email;
      this.uid = uid;
      this.type = type;
    },
    submitForm() {
      this.$fire.firestore.collection("user").doc(this.uid).update({
        name: this.name,
        type: this.type,
      });
    },
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>

<style></style>

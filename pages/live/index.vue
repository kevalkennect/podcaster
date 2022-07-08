<template>
  <div class="pa-10" style="width: 100%; height: 100%">
    <LiveComponent />
    <div class="text-center">
      <v-snackbar top v-model="snackbar" color="red" :timeout="timeout">
        {{ text }}
        <template v-slot:action="{ attrs }">
          <v-btn color="white" text top v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </div>
</template>

<script>
import LiveComponent from "~/components/LiveComponent.vue";
export default {
  data() {
    return {
      alert: false,
      snackbar: false,
      text: "You have allready created A Podcast",
      timeout: 2000,
    };
  },
  components: {
    LiveComponent,
  },
  layout: "live",
  async created() {
    const { getters } = this.$store;
    const { uid } = getters.getUser;
    console.log(uid);
    const data = this.$fire.firestore.collection("session").doc(uid);
    const res = await data.get();
    const resData = res.data();
    if (resData) {
      this.snackbar = true;
      // this.alert = true;
      console.log("You have allreadt going podcast");
      setTimeout(() => {
        this.$router.push("/");
      }, 1000);
    }
  },
};
</script>

<style></style>

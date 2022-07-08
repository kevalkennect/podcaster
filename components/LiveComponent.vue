<template>
  <v-stepper class="rounded-xl" v-model="e1" width="100%" height="80%">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1"> Name of the Podcast </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2"> Broadcast </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items style="height: 100%; width: 100%">
      <v-stepper-content step="1" style="height: 100%; width: 100%">
        <AddTitle @next="e1 = 2" />
      </v-stepper-content>
      <v-stepper-content step="2" style="height: 100%">
        <GoLive @next="startBoradcasting()" />
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import AddTitle from "./steps/AddTitle.vue";
import GoLive from "./steps/GoLive.vue";
export default {
  data() {
    return {
      title: "",
      e1: 1,
      IsTitle: false,
      Live: false,
      Start: false,
    };
  },
  components: {
    AddTitle,
    GoLive,
  },
  methods: {
    nextComp() {},
    goLive() {
      this.Live = true;
    },
    startBoradcasting() {
      // const { getters } = this.$store;
      const { getters } = this.$store;
      console.log(this.$store);
      const { name, email, uid, type } = getters.getUser;
      this.$fire.firestore
        .collection("session")
        .doc(uid)
        .set({
          ...this.$store.getters.getDetails,
          ownerId: uid,
          startedon: new Date().toDateString(),
        });
      this.$router.push(`/live/${uid}`);
    },
  },
};
</script>

<style></style>

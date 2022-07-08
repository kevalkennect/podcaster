<template>
  <v-form ref="form">
    <v-text-field
      outlined
      class="rounded-xl"
      v-model="podcastName"
      label="Please Enter title of the Podcast"
      required
    >
    </v-text-field>
    <div class="d-flex justify-end align-center" style="width: 100%; height: 100%">
      <v-btn
        color="blue"
        @click="
          $emit('next');
          add();
        "
        depressed
        class="rounded-xl white--text pa-6 text-none"
      >
        Lets goo
      </v-btn>
    </div>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      podcastName: "",
    };
  },
  watch: {},
  methods: {
    add() {
      console.log("lsvhdfks");
      this.$store.dispatch("addTitle", this.podcastName);
      console.log(this.$store.state.title);
    },
    // addpodcastName() {
    //   this.$store.dispatch("addPodcast", {
    //     name: this.podcastName,
    //   });
    //   console.log("asdfcds");
    // },
  },
};
</script>

<style></style>

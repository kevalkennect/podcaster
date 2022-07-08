<template>
  <div class="d-flex justify-center align-center" style="width: 100%; height: 30%">
    <v-card
      solo
      class="rounded-xl border d-flex justify-center align-center"
      style="width: 100%; height: 100%; font-size: 25px"
      height="100%"
    >
      <nuxt-link to="/live" height="100%"> Create New Podcast </nuxt-link>
    </v-card>
    <v-card
      solo
      height="100%"
      class="rounded-xl d-flex border justify-center align-center"
      style="width: 100%; height: 100%; font-size: 25px"
    >
      <nuxt-link to="/podcasts" height="100%"> Join Podcasts </nuxt-link>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "IndexPage",

  data() {
    return {
      isPodcaster: this.$store.state.user?.type,
    };
  },
};
</script>

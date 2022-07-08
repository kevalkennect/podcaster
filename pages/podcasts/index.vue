<template>
  <v-row>
    <v-col cols="3" v-for="d in data" :key="d.ownerId">
      <v-card
        elevation="2"
        outlined
        class="d-flex flex-column justify-space-between rounded-xl"
        width="300px"
        height="150px"
      >
        <v-card-title style="height: 20px">
          {{ d.title }}
        </v-card-title>
        <v-card-text> </v-card-text>
        <v-card-actions class="d-flex justify-space-between">
          <v-btn text color="blue accent-4" @click="$router.push(`/live/${d.ownerId}`)">
            Join Now
          </v-btn>
          <span :v-if="d.isLive == true" class="logged-in pr-5" style="color: greenyellow"
            >● Live</span
          >
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: "podcasts",
  data() {
    return {
      data: [],
    };
  },
  computed: {},
  async created() {
    const data = this.$fire.firestore.collection("session");
    const snapshot = await data.get();
    snapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
      this.data.push({ ...doc.data() });
    });
    console.log(this.data);
  },
};
</script>

<style></style>

<template>
  <v-app>
    <Navbar />
    <v-container fluid fill-height>
      <v-main style="height: 100%; width: 100%">
        <Nuxt />
      </v-main>
    </v-container>
  </v-app>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>

<style></style>

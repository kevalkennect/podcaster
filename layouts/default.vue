<template>
  <v-app>
    <Navbar />
    <v-main>
      <v-container fluid fill-height>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
export default {
  name: "DefaultLayout",
  components: {
    Navbar,
  },

  data() {
    return {
      title: "Podcaster",
    };
  },
};
</script>
<style>
</style>

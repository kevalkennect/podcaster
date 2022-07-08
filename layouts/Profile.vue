<template>
  <v-app>
    <div color="blue" class="custom"></div>
    <div color="blue" class="custom2"></div>
    <Navbar />
    <v-main>
      <v-container fluid class="d-flex justify-center align-center" style="height: 100%">
        <v-card height="600px" width="500px">
          <Nuxt />
        </v-card>
      </v-container>
    </v-main>
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

<style scoped>
.custom {
  position: absolute;
  height: 100vh;
  width: 50%;
  background-color: #5fb4ff;
  clip-path: polygon(50% 0, 0 0, 0 100%);
}

.custom2 {
  position: absolute;
  /* left: 0; */
  right: 0;
  height: 100vh;
  width: 50%;
  background-color: #5fb4ff;
  clip-path: polygon(100% 0, 50% 0, 100% 100%);
}
</style>

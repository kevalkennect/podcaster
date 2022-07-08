<template>
  <v-app>
    <Navbar />
    <v-container fluid fill-height>
      <v-main style="width: 100%; height: 100%">
        <div style="width: 100%; height: 100%">
          <div style="width: 60%; height: 100%">
            <Nuxt />
          </div>
        </div>
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

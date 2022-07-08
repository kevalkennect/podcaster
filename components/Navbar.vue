<template>
  <v-app-bar fixed app>
    <nuxt-link to="/">
      <v-toolbar-title v-text="title" />
    </nuxt-link>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      title: "Podcaster",
    };
  },
};
</script>

<style scoped></style>

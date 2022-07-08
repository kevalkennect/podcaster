<template>
  <div>
    <v-tabs centered grow>
      <v-tab class="text-none" v-for="tab in tabs" :key="tab.id" :to="tab.route" exact>{{
        tab.name
      }}</v-tab>
    </v-tabs>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        { id: 1, name: "Sign in", route: `/auth/signin` },
        { id: 2, name: "Sign up", route: `/auth/signup` },
      ],
    };
  },
};
</script>

<style></style>

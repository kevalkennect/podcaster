<template>
  <div>
    <v-checkbox class="pl-5" v-model="isLive" label="Planning to go Live"></v-checkbox>
    <div class="d-flex justify-center">
      <v-btn
        color="blue"
        depressed
        class="rounded-xl white--text pa-6 text-none"
        @click="
          $emit('next');
          add();
        "
      >
        Start Broadcast
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLive: false,
    };
  },
  watch: {},
  methods: {
    add() {
      console.log(this.isLive);
      this.$store.dispatch("addLive", this.isLive);
    },
    isGoingToLive() {},
  },
};
</script>

<style></style>

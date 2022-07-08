<template>
  <v-app>
    <v-container>
      <v-main>
        <v-card elevation="2" outlined class="pa-6 d-flex flex-column justify-space-between rounded-xl" width="400px"
          height="400px">
          <v-card-title>
            {{ user?.title }}
          </v-card-title>
          <div class="d-flex justify-space-between">
            <stopwatch class="pl-5" :running="running" :resetWhenStart="true" />

            <v-btn outlined small @click="toggle" fab color="teal">
              <v-icon>{{ getData }}</v-icon>
            </v-btn>

            <!-- <StopWatchMain @start="start" @stop="stop" /> -->
          </div>
          <!-- <h2 class="text-center">0m 0s</h2> -->

          <v-card-text> {{ user?.isLive }}</v-card-text>
          <v-card-actions v-if="getOwner == true" class="d-flex justify-space-between">
            <v-btn depressed large color="blue" @click="startT" rounded outlined>Start</v-btn>
            <v-btn depressed large color="blue" @click="stopT" rounded outlined>Stop</v-btn>
            <v-btn depressed large color="blue" rounded outlined>Reset</v-btn>
            <!-- <span
              :v-if="d.isLive == true"
              class="logged-in pr-5"
              style="color: greenyellow"
              >● Live</span
            > -->
          </v-card-actions>
          <div v-if="getOwner == true" class="d-flex justify-end">
            <v-btn depressed large color="red" @click="stopPodcast" rounded outlined>End Podcast</v-btn>
          </div>
          <div v-if="!getOwner == true" class="d-flex justify-end">
            <v-btn depressed large color="red" @click="leavePodcast" rounded outlined>Leave</v-btn>
          </div>
        </v-card>
      </v-main>
    </v-container>
  </v-app>
</template>

<script>
import Stopwatch from "~/components/Stopwatch.vue";

export default {
  components: {
    Stopwatch,
  },
  layout: "live",
  data() {
    return {
      user: null,
      running: false,
      status: false,
    };
  },
  async created() {
    const data = this.$fire.firestore
      .collection("session")
      .doc(this.$nuxt._route.params.id);
    const res = await data.get();
    const resData = res.data();
    this.user = {
      title: resData.title,
      isLive: resData.isLive,
      startedOn: resData.startedon,
      ownerId: resData.ownerId,
    };
    console.log(this.user.ownerId);
  },
  mounted() {
    navigator.mediaDevices
      .getUserMedia({
        audio: true,
      })
      .then(
        (res) => {
          console.log(res);
          if (res.active) {
            this.status = true;
          }
        },
        (err) => {
          console.error(err);
          this.status = false;
        }
      );
  },
  computed: {
    getData() {
      if (this.status == false) {
        return "mdi-volume-off";
      } else {
        return "mdi-volume-high";
      }
    },
    getOwner() {
      const { getters } = this.$store;
      const { uid } = getters.getUser;
      if (this.$nuxt._route.params.id === uid) {
        console.log("trueeee");
        return true;
      } else {
        console.log("false");

        return false;
      }
    },
  },
  methods: {
    stopT: function () {
      this.running = false;
    },
    startT: function () {
      this.running = true;
    },
    toggle() {
      this.status = !this.status;
    },
    stopPodcast() {
      this.$fire.firestore
        .collection("session")
        .doc(this.$nuxt._route.params.id)
        .delete()
        .then(function () {
          this.$router.push("/");
          console.log("Document successfully deleted!");
        })
        .catch(function (error) {
          console.error("Error removing document: ", error);
        });
      this.$router.push("/");
    },
  },
};
</script>

<style>
</style>

<template>
  <v-app class="bb">
    <v-main>
      <Navbar />
      <v-container fluid fill-height class="pa-0">
        <div class="d-inline-flex" style="height: 100%; width: 100%">
          <div class="bb d-flex justify-center align-center" style="width: 100%">
            <div class="" style="width: 50%; height: 400px">
              <Tabs />
              <div>
                <slot />
                <!-- <Nuxt /Z> -->
                <!-- <nuxt-child /> -->
              </div>
            </div>
          </div>
          <div
            class="d-flex justify-center align-center"
            style="
              width: 100%;
              background-image: url('https://i.pinimg.com/564x/4a/90/33/4a903338c0e478248153bd8f3f6f6745.jpg');
              filter: hue-rotate(50deg);
            "
          ></div>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import Tabs from "~/components/Tabs.vue";
export default {
  name: "Auth",
  components: { Navbar, Tabs },
};
</script>

<style scoped>
.minicontainer {
  border: 2px solid red;
  width: 100px;
  height: 100px;
}
</style>

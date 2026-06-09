<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
    <Snackbar />
  </v-app>
</template>

<script lang="ts" setup>
import Snackbar from "./components/Snackbar.vue";
</script>
<style lang="scss">
.font-bold {
  font-weight: bold;
}
</style>

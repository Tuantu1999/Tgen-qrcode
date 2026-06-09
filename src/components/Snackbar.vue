<template>
  <v-snackbar
    v-model="snackbar.state.show"
    :color="snackbar.state.color"
    :timeout="snackbar.state.timeout"
    location="top right"
  >
    {{ snackbar.state.message }}
    <template #actions>
      <v-btn
        variant="text"
        @click="snackbar.state.show = false"
        icon="mdi-close"
      >
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script setup lang="ts">
import { snackbar } from "@/plugins/snackbar";
</script>

<template>
  <div class="overlay">
    <v-progress-circular indeterminate color="primary" size="70" width="6" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 9999;
}
</style>

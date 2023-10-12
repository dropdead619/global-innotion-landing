<script setup lang="ts">
import TheHeader from '~/components/layout/TheHeader.vue';
</script>

<template>
  <div id="landing-container">
    <TheHeader />
    <div class="container mx-auto pt-22 relative">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
</style>

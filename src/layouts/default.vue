<script setup lang="ts">
import TheHeader from '~/components/layout/TheHeader.vue';
</script>

<template>
  <div id="landing-container">
    <TheHeader />
    <div class="mx-auto w-full max-w-9xl px-4 pt-22 relative sm:px-8">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
</style>

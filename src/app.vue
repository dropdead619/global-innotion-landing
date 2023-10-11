<script setup lang="ts">
// import Favicon from '@/assets/favicon.svg?inline';

useHead({
  title: 'Global Innotion',
  // link: [{ rel: 'icon', href: Favicon }],
});
</script>

<template>
  <div id="top" class="overflow-x-hidden">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

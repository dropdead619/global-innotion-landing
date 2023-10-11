<script setup lang="ts">
// @ts-nocheck
import Favicon from '../public/favicon.ico';

useHead({
  title: 'Global Innotion',
  link: [{ rel: 'icon', href: Favicon }],
});
</script>

<template>
  <div id="top" class="overflow-x-hidden">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
